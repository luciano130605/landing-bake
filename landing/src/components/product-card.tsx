import { useEffect, useRef, useState } from "react";
import { discountedPrice, formatARS, PROMO, type Product, type Variant } from "@/catalog";
import { useBakery } from "@/lib/bakery-store";
import { FlourBurst } from "@/components/flour-burst";
import { QtyControl } from "@/components/qty-control";

export function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const addItem = useBakery((s) => s.addItem);
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [burst, setBurst] = useState(0);
  const cardRef = useRef<HTMLElement>(null);
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("proof");
          obs.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    obs.observe(el);
    const fallback = window.setTimeout(() => el.classList.add("proof"), 900);
    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  function handleAdd() {
    if (!variant) return;
    addItem(product, variant, qty);
    setAdded(true);
    setBurst((n) => n + 1);
    window.setTimeout(() => setAdded(false), 900);
  }

  return (
    <article
      ref={cardRef}
      className="card-surface relative overflow-hidden rounded-xl opacity-0"
      style={{ animationDelay: `${delay * 90}ms` }}
    >
      {PROMO.active ? (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-[#3a6fa0] px-2.5 py-1 text-xs font-semibold text-white">
          -{PROMO.percent}%
        </span>
      ) : null}

      <div className="p-5">
        <h3 className="font-display text-xl font-semibold leading-snug">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{product.blurb}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {product.variants.map((v: Variant) => (
            <button
              key={v.id}
              type="button"
              className="chip rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-fg"
              data-on={v.id === variantId}
              onClick={() => setVariantId(v.id)}
            >
              {v.label} ·{" "}
              {PROMO.active ? (
                <>
                  <span className="line-through opacity-60">{formatARS(v.price)}</span>{" "}
                  {formatARS(discountedPrice(v.price))}
                </>
              ) : (
                formatARS(v.price)
              )}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <QtyControl value={qty} onChange={(q) => setQty(Math.max(1, q))} />
          <div className="relative">
            {burst > 0 ? <FlourBurst key={burst} /> : null}
            <button
              type="button"
              onClick={handleAdd}
              className={`knead rounded-lg px-5 py-3 text-sm font-semibold text-surface ${added ? "added-flash" : "bg-fg"}`}
            >
              {added ? "Sumado" : "Sumar"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}