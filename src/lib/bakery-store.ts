import { create } from "zustand";
import {
  BOX,
  CART_KEY,
  discountedPrice,
  NAME_KEY,
  NOTE_KEY,
  formatARS,
  LEAD_HOURS,
  PROMO,
  type CartItem,
  type Product,
  type Variant,
} from "@/catalog";

const BOX_KEY = "bake-valentine-box";
const BOX_DEBUG_KEY = "bake-valentine-box-preview";

/** Line of text ready to paste into WhatsApp. `total` ya viene con descuento. */
export function buildWhatsAppMessage({
  name,
  note,
  lines,
  total,
  promoPercent,
  box,
}: {
  name: string;
  note: string;
  lines: string[];
  total: number;
  promoPercent: number | null;
  box?: { discount: number; subtotal: number; percent: number };
}) {
  const extra = note.trim() ? `\n\nNota: ${note.trim()}` : "";
  const promoLine = promoPercent ? `\nDescuento del ${promoPercent}% ya aplicado` : "";
  const boxBlock = box
    ? `\n\n— BOX ${BOX.occasion} · ${BOX.fullDate} —\n` +
      `Productos: ${formatARS(box.subtotal)}\n` +
      (box.percent > 0
        ? `Descuento (${box.percent}%): −${formatARS(box.discount)}\n`
        : "") +
      `Total del box: ${formatARS(box.subtotal + BOX.fee - box.discount)}`
    : "";

  return (
    `Hola! Soy ${name.trim()}. Te hago este pedido:\n\n${lines.join("\n")}\n\n` +
    `Total: ${formatARS(total)}${promoLine}${extra}${boxBlock}\n\n(${LEAD_HOURS} hs de anticipación)`
  );
}

type BakeryState = {
  name: string;
  note: string;
  items: CartItem[];
  /** "bandeja" = pedido suelto · "box" = box especial armado a medida */
  mode: "bandeja" | "box";
  /** muestra el box fuera del 29/09 (para mostrárselo a alguien) */
  debugBox: boolean;
  trayOpen: boolean;
  ready: boolean;
  shaking: boolean;
  hydrate: () => void;
  setName: (name: string) => void;
  setNote: (note: string) => void;
  setMode: (mode: "bandeja" | "box") => void;
  setDebugBox: (on: boolean) => void;
  setTrayOpen: (open: boolean) => void;
  demandName: () => void;
  addItem: (product: Product, variant: Variant, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  clearItems: () => void;
};

function persist(
  partial: Partial<Pick<BakeryState, "name" | "note" | "items" | "mode" | "debugBox">>,
) {
  try {
    if (partial.name !== undefined) localStorage.setItem(NAME_KEY, partial.name);
    if (partial.note !== undefined) localStorage.setItem(NOTE_KEY, partial.note);
    if (partial.mode !== undefined) localStorage.setItem(BOX_KEY, partial.mode);
    if (partial.debugBox !== undefined) {
      localStorage.setItem(BOX_DEBUG_KEY, partial.debugBox ? "1" : "0");
    }
    if (partial.items !== undefined) {
      localStorage.setItem(CART_KEY, JSON.stringify(partial.items));
    }
  } catch {
    /* ignore quota / private mode */
  }
}

export const useBakery = create<BakeryState>((set, get) => ({
  name: "",
  note: "",
  items: [],
  mode: "bandeja",
  debugBox: false,
  trayOpen: false,
  ready: false,
  shaking: false,
  hydrate: () => {
    if (get().ready) return;
    try {
      const name = localStorage.getItem(NAME_KEY) ?? "";
      const note = localStorage.getItem(NOTE_KEY) ?? "";
      const mode = localStorage.getItem(BOX_KEY) === "box" ? "box" : "bandeja";
      const debugBox = localStorage.getItem(BOX_DEBUG_KEY) === "1";
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? (JSON.parse(raw) as CartItem[]) : [];
      const items = Array.isArray(parsed)
        ? parsed.map((i) => ({ ...i, payPrice: i.payPrice ?? i.price }))
        : [];
      set({
        name,
        note,
        mode,
        debugBox,
        items,
        ready: true,
      });
    } catch {
      set({ ready: true });
    }
  },
  setMode: (mode) => {
    set({ mode });
    persist({ mode });
  },
  setDebugBox: (debugBox) => {
    set({ debugBox });
    persist({ debugBox });
  },
  clearItems: () => {
    set({ items: [] });
    persist({ items: [] });
  },
  setName: (name) => {
    set({ name });
    persist({ name });
  },
  setNote: (note) => {
    set({ note });
    persist({ note });
  },
  setTrayOpen: (trayOpen) => set({ trayOpen }),
  demandName: () => {
    set({ shaking: true, trayOpen: false });
    window.setTimeout(() => set({ shaking: false }), 450);
  },
  addItem: (product, variant, qty) => {
    const key = `${product.id}:${variant.id}`;
    const items = get().items;
    const found = items.find((i) => i.key === key);
    const next = found
      ? items.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      : [
        ...items,
        {
          key,
          productId: product.id,
          name: product.name,
          variantLabel: variant.label,
          price: variant.price,
          /** lo que se cobra: el de la carta, con el descuento si está activo */
          payPrice: PROMO.active ? discountedPrice(variant.price) : variant.price,
          qty,
        },
      ];
    set({ items: next });
    persist({ items: next });
  },
  setQty: (key, qty) => {
    const next =
      qty < 1
        ? get().items.filter((i) => i.key !== key)
        : get().items.map((i) => (i.key === key ? { ...i, qty } : i));
    set({ items: next });
    persist({ items: next });
  },
}));

/** Números del box, calculados sobre lo que se cobra de verdad (item.payPrice).
 *  Sin promo: productos $50.000 → total $50.000.
 *  Con 10%:    productos $50.000 → descuento $5.000 → total $45.000. */
export function boxNumbers(items: CartItem[]) {
  const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0);
  const total = items.reduce((n, i) => n + i.payPrice * i.qty, 0) + BOX.fee;
  return { subtotal, discount: subtotal + BOX.fee - total, total };
}

/** Hook listo para usar: cuenta, subtotal y números del box. */
export function useBoxTotals() {
  const items = useBakery((s) => s.items);
  const count = items.reduce((n, i) => n + i.qty, 0);
  return { items, count, ...boxNumbers(items) };
}
