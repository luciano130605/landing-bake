import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BadgePercent, ChevronLeft, ChevronRight, Gift, Trash2 } from "lucide-react";
import { BOX, CATEGORIES, formatARS, PRODUCTS, PROMO, type Product, type Variant } from "@/catalog";
import { useBakery, useBoxTotals } from "@/lib/bakery-store";
import { BrandMark } from "@/components/bakery-shell";
import { BoxModal } from "@/components/box-modal";
import { QtyControl } from "@/components/qty-control";
import { SectionTitle } from "@/components/section-title";

export const Route = createFileRoute("/box")({ component: BoxPage });

/** Fila del catálogo: elegís variante y cantidad, cae en el box. */
function BoxRow({ product }: { product: Product }) {
  const items = useBakery((s) => s.items);
  const addItem = useBakery((s) => s.addItem);
  const setQty = useBakery((s) => s.setQty);
  const setMode = useBakery((s) => s.setMode);
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];

  const qty = items.find((i) => i.key === `${product.id}:${variant?.id}`)?.qty ?? 0;

  function bump(next: number) {
    if (!variant) return;
    setMode("box");
    if (next > qty) addItem(product, variant, next - qty);
    else setQty(`${product.id}:${variant.id}`, next);
  }

  return (
    <li className="py-4">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-medium leading-snug">{product.name}</p>
        <p className="shrink-0 text-xs text-muted">
          desde {formatARS(Math.min(...product.variants.map((v) => v.price)))}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {product.variants.map((v: Variant) => (
          <button
            key={v.id}
            type="button"
            className="chip rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-fg"
            data-on={v.id === variantId}
            onClick={() => setVariantId(v.id)}
          >
            {v.label} · {formatARS(v.price)}
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-sm text-muted">
          {qty > 0 ? `${qty} en el box` : "Todavía no está en el box"}
        </span>
        <QtyControl value={qty} onChange={bump} allowZero />
      </div>
    </li>
  );
}

function BoxPage() {
  const [open, setOpen] = useState(false);
  const setMode = useBakery((s) => s.setMode);
  const setTrayOpen = useBakery((s) => s.setTrayOpen);
  const clearItems = useBakery((s) => s.clearItems);
  const setQty = useBakery((s) => s.setQty);
  const { items, count, subtotal, discount, total } = useBoxTotals();

  function openPicker() {
    setMode("box");
    setTrayOpen(false);
    window.setTimeout(() => {
      document.getElementById("box-armar")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <BrandMark compact />
        <Link to="/" className="back-link shrink-0">
          <ChevronLeft className="see-arrow size-4" strokeWidth={2.2} />
          Inicio
        </Link>
      </div>

      <div className="box-card relative mt-8 overflow-hidden rounded-2xl p-5 sm:p-7">
        <span className="ribbon" aria-hidden />
        <div className="relative">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Gift className="size-4" strokeWidth={2.2} aria-hidden />
            Box especial · {BOX.date}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
            Armá tu box de {BOX.occasion}
          </h1>

          <p className="mt-5 max-w-lg text-sm text-muted">{BOX.tagline}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {PROMO.active ? (
              <li className="lead-chip">
                <BadgePercent className="lead-clock" strokeWidth={2.2} aria-hidden />
                {PROMO.percent}% off en todo el box
              </li>
            ) : null}
            <li className="lead-chip">{BOX.lead}</li>
          </ul>

          <p className="mt-3 text-xs text-muted">{BOX.deadline} · pedidos por WhatsApp</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openPicker}
              className="knead inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface"
            >
              Elegir los productos
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="knead inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-fg"
            >
              Ver el flyer
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <SectionTitle>Tu box</SectionTitle>

        {items.length === 0 ? (
          <p className="mt-4 font-display text-lg italic text-muted">
            Todavía está vacío. Elegí lo que va adentro más abajo.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-border/70 border-y border-border/70">
            {items.map((item, i) => (
              <li
                key={item.key}
                className="ticket flex items-center justify-between gap-3 py-3.5"
                style={{ ["--d" as string]: `${i * 55}ms` }}
              >
                <div className="min-w-0">
                  <p className="font-medium leading-snug">{item.name}</p>
                  <p className="text-sm text-muted">
                    {item.variantLabel} · {formatARS(item.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <QtyControl value={item.qty} onChange={(q) => setQty(item.key, q)} allowZero />
                  <span className="w-24 text-right text-sm font-semibold tabular-nums">
                    {formatARS(item.price * item.qty)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <dl className="mt-6 space-y-1.5 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">Productos ({count})</dt>
            <dd className="tabular-nums">{formatARS(subtotal)}</dd>
          </div>
          {PROMO.active ? (
            <div className="flex justify-between">
              <dt className="text-muted">Descuento ({PROMO.percent}%)</dt>

              <dd className="font-semibold text-accent tabular-nums">−{formatARS(discount)}</dd>
            </div>
          ) : null}
          <div className="flex items-baseline justify-between border-t border-border/70 pt-2">
            <dt className="font-semibold">Total del box</dt>
            <dd className="font-display text-2xl font-semibold tabular-nums">{formatARS(total)}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setTrayOpen(true)}
            disabled={!items.length}
            className="knead inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface disabled:opacity-40"
          >
            <Gift className="size-4" strokeWidth={2.2} aria-hidden />
            Ver el pedido y mandarlo
          </button>
          <button
            type="button"
            onClick={openPicker}
            className="knead inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-fg"
          >
            Seguir eligiendo
          </button>
          {count > 0 ? (
            <button
              type="button"
              onClick={clearItems}
              className="knead inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-muted"
            >
              <Trash2 className="size-4" strokeWidth={2.2} aria-hidden />
              Vaciar
            </button>
          ) : null}
        </div>
      </div>

      <div id="box-armar" className="mt-14 scroll-mt-16">
        <SectionTitle>Elegí lo que va adentro</SectionTitle>
        <p className="mt-3 max-w-md text-sm text-muted">
          {PROMO.active
            ? `Todo lo que sumes acá cae en el mismo box, con el ${PROMO.percent}% ya aplicado.`
            : "Todo lo que sumes acá cae en el mismo box."}
        </p>

        {CATEGORIES.map((cat) => {
          const products = PRODUCTS.filter((p) => p.category === cat);
          if (!products.length) return null;
          return (
            <div key={cat} className="mt-8">
              <h2 className="font-display text-xl font-semibold">{cat}</h2>
              <ul className="mt-2 divide-y divide-border/70 border-t border-border/70">
                {products.map((p) => (
                  <BoxRow key={p.id} product={p} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <Link to="/" className="see-all">
          Ver toda la carta
          <ChevronRight className="see-arrow size-4" strokeWidth={2.2} />
        </Link>
      </div>

      <BoxModal forceOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}