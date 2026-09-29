import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { BOX, LEAD_HOURS, PROMO } from "@/catalog";

const STORAGE_KEY = `box-flier:${BOX.date}`;

export function BoxModal({
  forceOpen = false,
  onClose,
}: {
  forceOpen?: boolean;
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(forceOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setOpen(true);
      return;
    }
    if (!BOX.active) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1600);
    return () => clearTimeout(t);
  }, [forceOpen]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setOpen(false), 200);
    onClose?.();
  }

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"
        }`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={`Box especial ${BOX.occasion}`}
    >
      <div
        className={`relative w-full max-w-sm overflow-hidden rounded-3xl bg-bg shadow-lg transition-all duration-200 ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
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

        <svg viewBox="0 0 400 500" className="w-full" role="img" aria-label="Box especial">
          <rect x="0" y="0" width="400" height="500" fill="#f3eee4" />

          <circle cx="44" cy="60" r="2.4" fill="#5c6f83" />
          <circle cx="62" cy="78" r="1.5" fill="#5c6f83" />
          <circle cx="36" cy="90" r="1.7" fill="#5c6f83" />
          <circle cx="358" cy="64" r="2.1" fill="#5c6f83" />
          <circle cx="340" cy="86" r="1.5" fill="#5c6f83" />
          <circle cx="366" cy="96" r="1.3" fill="#5c6f83" />

          <text
            x="200"
            y="60"
            textAnchor="middle"
            fontSize="12"
            letterSpacing="3.4"
            fill="#3a6fa0"
            fontWeight="600"
          >
            ESPECIAL
          </text>

          <g transform="translate(200,104)">
            <ellipse cx="0" cy="4" rx="96" ry="13" fill="#244c74" opacity="0.16" />
            <rect x="-84" y="-72" width="168" height="78" rx="8" fill="#3a6fa0" />
            <rect x="-84" y="-24" width="168" height="26" rx="5" fill="#244c74" />
            <rect x="-18" y="-72" width="36" height="78" fill="#f3eee4" opacity="0.92" />
            <ellipse cx="0" cy="-72" rx="50" ry="12" fill="#3a6fa0" />
            <ellipse cx="0" cy="-72" rx="50" ry="12" fill="none" stroke="#244c74" strokeWidth="1.4" />
            <circle cx="0" cy="-72" r="13" fill="#f3eee4" opacity="0.85" />
            <ellipse cx="-26" cy="-78" rx="21" ry="10" fill="#244c74" />
            <ellipse cx="26" cy="-78" rx="21" ry="10" fill="#244c74" />
            <circle cx="0" cy="-78" r="7" fill="#244c74" />
          </g>

          <text
            x="200"
            y="184"
            textAnchor="middle"
            className="font-display"
            fontWeight="700"
            fontSize="40"
            fill="#1a3354"
          >
            Armá tu box
          </text>

          <text x="200" y="216" textAnchor="middle" fontSize="16" fill="#1a3354">
            {BOX.occasion} · {BOX.date}
          </text>

          {PROMO.active ? (
            <>
              <rect x="86" y="236" width="228" height="30" rx="15" fill="#e7eef5" />
              <text
                x="200"
                y="256"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#244c74"
              >
                {PROMO.percent}% off en todo el box
              </text>
            </>
          ) : null}

          <text x="200" y="296" textAnchor="middle" fontSize="12.5" fill="#5c6f83">
            Elegí de la carta, lo armamos y te lo
          </text>
          <text x="200" y="316" textAnchor="middle" fontSize="12.5" fill="#5c6f83">
            entregamos listo para regalar.
          </text>

          <path
            d="M0,344 Q16.6,330 33.3,344 T66.6,344 T100,344 T133.3,344 T166.6,344 T200,344 T233.3,344 T266.6,344 T300,344 T333.3,344 T366.6,344 T400,344 L400,500 L0,500 Z"
            fill="#244c74"
          />

          <text
            x="200"
            y="392"
            textAnchor="middle"
            className="font-display italic"
            fontWeight="600"
            fontSize="26"
            fill="#f3eee4"
          >
            {BOX.lead}
          </text>
          <text x="200" y="420" textAnchor="middle" fontSize="13" fill="#fffbf4">
            {BOX.deadline} · pedidos por WhatsApp
          </text>

          <line x1="96" y1="440" x2="304" y2="440" stroke="#f3eee4" strokeWidth="1" opacity="0.35" />

          <text x="200" y="464" textAnchor="middle" fontSize="12.5" fill="#fffbf4">
            Se entrega el {BOX.shortDate}
          </text>
          <text x="200" y="484" textAnchor="middle" fontSize="11" fill="#c9d7e6">
            elegís de la carta lo que quieras
          </text>
        </svg>

        <div className="p-5">
          <button
            type="button"
            onClick={close}
            className="knead flex w-full items-center justify-center gap-2 rounded-full bg-[#3a6fa0] px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
          >
            Armar mi box
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            Después elegís los productos · {LEAD_HOURS} hs de anticipación
          </p>
        </div>
      </div>
    </div>
  );
}