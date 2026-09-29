import { useEffect, useMemo, useState } from "react";
import { Gift, X } from "lucide-react";
import { BOX, formatARS, PROMO } from "@/catalog";
import { useBakery } from "@/lib/bakery-store";

const STORAGE_KEY = `promo-dismissed:${PROMO.percent}-off-${new Date().toDateString()}`;

export function PromoModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const items = useBakery((s) => s.items);
  const mode = useBakery((s) => s.mode);
  const setMode = useBakery((s) => s.setMode);
  const setTrayOpen = useBakery((s) => s.setTrayOpen);
  const boxMode = mode === "box";
  const total = items.reduce((n, i) => n + i.price * i.qty, 0);

  const today = useMemo(
    () => new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long" }).format(new Date()),
    [],
  );

  useEffect(() => {
    if (!PROMO.active) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function close() {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setOpen(false), 200);
  }

  if (!PROMO.active || !open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={`${PROMO.percent}% off hoy en toda la carta`}
    >
      <div
        className={`relative w-full max-w-sm overflow-hidden rounded-3xl bg-bg shadow-lg transition-all duration-200 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-bg/90 text-fg backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
        >
          <X className="size-4" strokeWidth={2.4} />
        </button>

        <svg viewBox="0 0 400 500" className="w-full">
          <rect x="0" y="0" width="400" height="500" fill="#f3eee4" />

          <circle cx="48" cy="66" r="2.5" fill="#5c6f83" />
          <circle cx="66" cy="84" r="1.6" fill="#5c6f83" />
          <circle cx="40" cy="96" r="1.8" fill="#5c6f83" />
          <circle cx="352" cy="70" r="2.2" fill="#5c6f83" />
          <circle cx="336" cy="92" r="1.6" fill="#5c6f83" />
          <circle cx="362" cy="100" r="1.4" fill="#5c6f83" />

          <g transform="translate(200,192)">
            <circle r="118" fill="none" stroke="#3a6fa0" strokeWidth="3" strokeDasharray="1 11" strokeLinecap="round" />
            <circle r="98" fill="#3a6fa0" />
            <text x="0" y="-6" textAnchor="middle" className="font-display" fontWeight="700" fontSize="76" fill="#f3eee4">
              {PROMO.percent}%
            </text>
            <text x="0" y="46" textAnchor="middle" fontWeight="500" fontSize="20" letterSpacing="0.5" fill="#f3eee4">
              off hoy
            </text>
          </g>

          <text x="200" y="358" textAnchor="middle" fontWeight="500" fontSize="17" fill="#1a3354">
            En toda la carta, pedidos por WhatsApp
          </text>

          <path
            d="M0,392 Q16.6,378 33.3,392 T66.6,392 T100,392 T133.3,392 T166.6,392 T200,392 T233.3,392 T266.6,392 T300,392 T333.3,392 T366.6,392 T400,392 L400,500 L0,500 Z"
            fill="#244c74"
          />

          <text x="200" y="452" textAnchor="middle" className="font-display italic" fontWeight="600" fontSize="30" fill="#f3eee4">
            Solo por hoy
          </text>
          <text x="200" y="480" textAnchor="middle" fontSize="14" fill="#fffbf4">
            {today}
          </text>
        </svg>

        <div className="p-5">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold">Tu pedido</p>
            <p className="tabular-nums text-sm font-semibold">
              {boxMode ? `Total del box: ${formatARS(total)}` : `Total: ${formatARS(total)}`}
            </p>
          </div>

          <ul className="mt-3 max-h-52 space-y-2 overflow-y-auto pr-1">
            {items.map((i) => (
              <li key={i.key} className="flex items-start justify-between gap-3 text-sm">
                <span className="min-w-0">
                  <span className="font-medium">{i.qty}×</span> {i.name}{" "}
                  <span className="text-muted">({i.variantLabel})</span>
                </span>
                <span className="shrink-0 tabular-nums">{formatARS(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>

          {boxMode ? (
            <p className="mt-3 flex items-center gap-1.5 rounded-md bg-icing px-3 py-2 text-xs font-medium text-accent-dark">
              <Gift className="size-3.5" strokeWidth={2.4} aria-hidden />
              Box {BOX.occasion}
              {PROMO.active ? ` · ${PROMO.percent}% aplicado` : ""} · {BOX.lead}
            </p>
          ) : PROMO.active ? (
            <p className="mt-3 text-xs text-accent">{PROMO.percent}% off aplicado</p>
          ) : null}

          <button
            type="button"
            onClick={() => {
              if (!boxMode) setMode("bandeja");
              close();
              window.setTimeout(() => setTrayOpen(true), 220);
            }}
            className="knead mt-4 w-full rounded-full bg-[#3a6fa0] px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
          >
            Pedir por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}