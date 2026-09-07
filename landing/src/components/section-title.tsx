import { useEffect, useRef } from "react";

export function SectionTitle({ children }: { children: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) el.classList.add("is-in");
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <h2 className="font-display text-3xl font-semibold tracking-tight">{children}</h2>
      <svg ref={ref} className="flour-mark" viewBox="0 0 72 10" aria-hidden>
        <path d="M2 6 C14 2, 24 9, 36 5 S58 2, 70 7" />
      </svg>
    </div>
  );
}
