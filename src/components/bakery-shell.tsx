import { useEffect, useMemo, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, X } from "lucide-react";
import {
  formatARS,
  INSTAGRAM,
  LEAD_HOURS,
  WHATSAPP_NUMBER,
  PROMO,
} from "@/catalog";
import { useBakery } from "@/lib/bakery-store";
import { QtyControl } from "@/components/qty-control";


export function BakeryShell({ children }: { children: React.ReactNode }) {
  const hydrate = useBakery((s) => s.hydrate);
  const items = useBakery((s) => s.items);
  const name = useBakery((s) => s.name);
  const note = useBakery((s) => s.note);
  const trayOpen = useBakery((s) => s.trayOpen);
  const setNote = useBakery((s) => s.setNote);
  const setTrayOpen = useBakery((s) => s.setTrayOpen);
  const demandName = useBakery((s) => s.demandName);
  const setQty = useBakery((s) => s.setQty);
  const setName = useBakery((s) => s.setName);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);
  const total = useMemo(() => items.reduce((n, i) => n + i.price * i.qty, 0), [items]);

  function sendWhatsApp() {
    const trimmed = name.trim();
    if (!trimmed) {
      demandName();
      return;
    }
    if (!items.length) return;

    const lines = items.map(
      (i) => `• ${i.qty} ${i.name} (${i.variantLabel}) — ${formatARS(i.price * i.qty)}`,
    );

    const extra = note.trim() ? `\n\nNota: ${note.trim()}` : "";
    const promoLine = PROMO.active ? `\nDescuento del ${PROMO.percent}% ya aplicado` : "";
    const mensaje = `Hola! Soy ${trimmed}. Te hago este pedido:\n\n${lines.join("\n")}\n\nTotal: ${formatARS(total)}${promoLine}${extra}\n\n(${LEAD_HOURS} hs de anticipación)`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function originalPrice(price: number) {
    if (!PROMO.active) return price;

    return Math.round(
      (price / (1 - PROMO.percent / 100)) / 100
    ) * 100;
  }

  return (
    <div className="grain relative min-h-dvh bg-bg text-fg">
      <span className="mote mote-a" aria-hidden />
      <span className="mote mote-b" aria-hidden />
      <span className="mote mote-c" aria-hidden />
      <span className="mote mote-d" aria-hidden />
      <span className="mote mote-e" aria-hidden />

      <div className="mx-auto max-w-3xl px-5 pb-10 pt-10 sm:px-8 sm:pt-14">{children}</div>

      <footer className="mx-auto max-w-3xl border-t border-border px-5 pb-36 pt-8 text-center sm:px-8">
        <p className="font-display text-xl font-semibold">Bake Valentine</p>
        <p className="mt-2 text-sm text-muted">Pedidos con {LEAD_HOURS} hs de anticipación</p>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block text-sm text-accent"
        >
          @bakevalentine
        </a>

      </footer>

      {count > 0 && !trayOpen ? (
        <div className="bar-in fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-2">
          <button
            type="button"
            onClick={() => setTrayOpen(true)}
            className="knead mx-auto flex w-full max-w-3xl items-center justify-between rounded-xl bg-fg px-5 py-4 text-left text-surface shadow-border"
          >
            <span className="text-sm font-medium">
              Tu bandeja · {count} {count === 1 ? "cosa" : "cosas"}
            </span>
            <span className="tabular-nums text-sm font-semibold">{formatARS(total)}</span>
          </button>
        </div>
      ) : null}

      <div
        className={`tray-overlay fixed inset-0 z-50 bg-fg/35 ${trayOpen ? "is-open" : ""}`}
        onClick={() => setTrayOpen(false)}
      />
      <aside
        className={`tray mx-auto w-full max-w-3xl overflow-y-auto rounded-t-xl bg-sheet px-5 pb-8 pt-4 sm:px-8 ${trayOpen ? "is-open" : ""}`}
        role="dialog"
        aria-label="Tu bandeja"
        aria-hidden={!trayOpen}
      >
        <span className="rivet left-4 top-4" aria-hidden />
        <span className="rivet right-4 top-4" aria-hidden />
        <span className="rivet bottom-4 left-4" aria-hidden />
        <span className="rivet bottom-4 right-4" aria-hidden />

        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-fg/20" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-2xl font-semibold">Pedido</p>
            <p className="text-sm text-muted">Revisá y mandalo por WhatsApp.</p>
          </div>
          <button
            type="button"
            onClick={() => setTrayOpen(false)}
            className="knead relative size-11 rounded-full bg-surface text-fg"
            aria-label="Cerrar"
          >
            <X className="mx-auto size-5" strokeWidth={2} />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-8 font-display text-lg italic text-muted">
            Todavía está vacía. Elegí algo de abajo.
          </p>
        ) : (
          <ul className="mt-6 divide-y divide-border/80">
            {items.map((item, i) => (
              <li
                key={item.key}
                className="ticket flex items-center justify-between gap-3 py-4"
                style={{ ["--d" as string]: `${i * 55}ms` }}
              >
                <div className="min-w-0">
                  <p className="font-medium leading-snug">{item.name}</p>
                  <p className="text-sm text-muted">
                    {item.variantLabel} ·{" "}
                    {PROMO.active ? (
                      <>
                        <span className="mr-2 line-through opacity-50">
                          {formatARS(originalPrice(item.price))}
                        </span>

                        <span className="font-semibold text-accent">
                          {formatARS(item.price)}
                        </span>
                      </>
                    ) : (
                      formatARS(item.price)
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <QtyControl value={item.qty} onChange={(q) => setQty(item.key, q)} allowZero />
                  <div className="w-28 text-right tabular-nums">
                    {PROMO.active && (
                      <div className="text-xs text-muted line-through opacity-50">
                        {formatARS(originalPrice(item.price) * item.qty)}
                      </div>
                    )}

                    <div className="text-sm font-semibold">
                      {formatARS(item.price * item.qty)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <label className="mt-6 block">
          <span className="text-sm font-medium">Tu nombre</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Para el pedido"
            autoComplete="name"
            className="mt-2 w-full rounded-md border-0 bg-surface px-3 py-3 text-base text-fg shadow-border placeholder:text-muted/70 focus:outline-2 focus:outline-accent "
            suppressHydrationWarning
          />
        </label>

        <label className="mt-4 block">
          <span className="text-sm font-medium">Una nota, si hace falta</span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            placeholder="Sin nuez, para el sábado, etc."
            className="mt-2 w-full resize-none rounded-md border-0 bg-surface px-3 py-3 text-base text-fg shadow-border placeholder:text-muted/70 focus:outline-2 focus:outline-accent"
            suppressHydrationWarning
          />
        </label>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-sm text-muted">Total</p>

            {PROMO.active ? (
              <p className="text-xs text-accent">
                {PROMO.percent}% off aplicado
              </p>
            ) : null}
          </div>

          <div className="text-right tabular-nums">
            {PROMO.active && (
              <p className="text-sm text-muted line-through opacity-50">
                {formatARS(originalPrice(total))}
              </p>
            )}

            <p className="font-display text-2xl font-semibold">
              {formatARS(total)}
            </p>
          </div>
        </div>
        <button
          type="button"
          disabled={!items.length}
          onClick={sendWhatsApp}
          className="knead mt-5 w-full rounded-lg bg-accent py-4 text-center text-base font-semibold text-surface disabled:opacity-40"
        >
          Mandar por WhatsApp
        </button>
        <p className="mt-3 text-center text-xs text-muted">
          Pedidos con {LEAD_HOURS} hs de anticipación
        </p>
      </aside>
    </div>
  );
}

export function NameField() {
  const name = useBakery((s) => s.name);
  const setName = useBakery((s) => s.setName);
  const shaking = useBakery((s) => s.shaking);
  const nameRef = useRef<HTMLInputElement>(null);
  const nameWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shaking) {
      nameRef.current?.focus();
      nameWrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [shaking]);

  return (
    <div
      ref={nameWrapRef}
      className={`name-wrap mx-auto mt-10 max-w-md ${shaking ? "is-shaking" : ""}`}
    >
      <label htmlFor="customer-name" className="font-display text-base italic text-fg">
        ¿Cómo te llamás?
      </label>
      <input
        id="customer-name"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribilo acá"
        autoComplete="name"
        className="name-line mt-2 w-full border-0 border-b border-border bg-transparent py-3 font-sans text-lg text-fg placeholder:text-muted/60"
        suppressHydrationWarning
      />
      <p className="mt-2 text-xs text-muted">Va en el mensaje de WhatsApp.</p>
    </div>
  );
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <Link to="/" className="inline-flex flex-col">
        <span className="write-in font-display text-base italic text-accent">Bake</span>
        <span className="font-display text-2xl font-semibold leading-none tracking-tight">
          Valentine
        </span>
      </Link>
    );
  }

  return (
    <header className="text-center">
      <p className="write-in font-display text-lg italic text-accent sm:text-xl">Bake</p>
      <h1 className="mt-1 font-display text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
        {Array.from("Valentine").map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            className="stamp-letter"
            style={{ animationDelay: `${140 + i * 48}ms` }}
          >
            {ch}
          </span>
        ))}
      </h1>
      <div className="rule-track mt-5" aria-hidden>
        <span className="rule-pin" />
      </div>
      <p className="mt-8">
        <span className="lead-chip">
          <Clock className="lead-clock" strokeWidth={2.2} aria-hidden />
          Pedidos por WhatsApp · {LEAD_HOURS} hs de anticipación
        </span>
      </p>
    </header>
  );
}
