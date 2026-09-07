import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export function QtyControl({
  value,
  onChange,
  allowZero = false,
}: {
  value: number;
  onChange: (n: number) => void;
  allowZero?: boolean;
}) {
  const [stamp, setStamp] = useState(false);

  function bump(delta: number) {
    const next = value + delta;
    if (!allowZero && next < 1) return;
    if (allowZero && next < 0) return;
    setStamp(true);
    onChange(next);
    window.setTimeout(() => setStamp(false), 380);
  }

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => bump(-1)}
        className="knead size-11 rounded-full border border-border bg-surface text-fg"
        aria-label="Menos"
      >
        <Minus className="mx-auto size-4" strokeWidth={2.2} />
      </button>
      <span
        className={`qty-stamp w-8 text-center text-base font-semibold ${stamp ? "is-stamping" : ""}`}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => bump(1)}
        className="knead size-11 rounded-full border border-border bg-surface text-fg"
        aria-label="Más"
      >
        <Plus className="mx-auto size-4" strokeWidth={2.2} />
      </button>
    </div>
  );
}
