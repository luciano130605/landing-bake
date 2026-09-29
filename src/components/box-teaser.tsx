import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Gift } from "lucide-react";
import { BOX, PROMO } from "@/catalog";

/** Aviso corto en el inicio: el box vive en su propia sección. */
export function BoxTeaser() {
  return (
    <Link
      to="/box"
      className="box-card group mt-12 flex items-center gap-4 rounded-2xl p-5 transition-transform duration-200 sm:p-6"
    >
      <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-surface">
        <Gift className="size-5" strokeWidth={2.2} aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Nuevo · solo por {BOX.date}
        </span>
        <span className="mt-1 block font-display text-xl font-semibold leading-snug">
          Armá tu box de {BOX.occasion}
        </span>
        <span className="mt-1 block text-sm text-muted">
          Elegís del catálogo{PROMO.active ? `, con el ${PROMO.percent}% off` : ""} · {BOX.deadline}
        </span>
      </span>
      <ChevronRight
        className="see-arrow ml-auto size-5 shrink-0 text-accent"
        strokeWidth={2.2}
        aria-hidden
      />
    </Link>
  );
}