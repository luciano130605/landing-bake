import { create } from "zustand";
import {
  CART_KEY,
  discountedPrice,
  NAME_KEY,
  NOTE_KEY,
  type CartItem,
  type Product,
  type Variant,
} from "@/catalog";


type BakeryState = {
  name: string;
  note: string;
  items: CartItem[];
  trayOpen: boolean;
  ready: boolean;
  shaking: boolean;
  hydrate: () => void;
  setName: (name: string) => void;
  setNote: (note: string) => void;
  setTrayOpen: (open: boolean) => void;
  demandName: () => void;
  addItem: (product: Product, variant: Variant, qty: number) => void;
  setQty: (key: string, qty: number) => void;
};

function persist(partial: Partial<Pick<BakeryState, "name" | "note" | "items">>) {
  try {
    if (partial.name !== undefined) localStorage.setItem(NAME_KEY, partial.name);
    if (partial.note !== undefined) localStorage.setItem(NOTE_KEY, partial.note);
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
  trayOpen: false,
  ready: false,
  shaking: false,
  hydrate: () => {
    if (get().ready) return;
    try {
      const name = localStorage.getItem(NAME_KEY) ?? "";
      const note = localStorage.getItem(NOTE_KEY) ?? "";
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? (JSON.parse(raw) as CartItem[]) : [];
      set({
        name,
        note,
        items: Array.isArray(parsed) ? parsed : [],
        ready: true,
      });
    } catch {
      set({ ready: true });
    }
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
    const price = discountedPrice(variant.price);
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
          price,
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
