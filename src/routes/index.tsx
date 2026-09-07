import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import {
  CATEGORIES,
  productsIn,
  seeAllLabel,
  slugFor,
  type Category,
} from "@/catalog";
import { BrandMark, NameField } from "@/components/bakery-shell";
import { ProductCard } from "@/components/product-card";
import { SectionTitle } from "@/components/section-title";

export const Route = createFileRoute("/")({ component: Home });

function catId(cat: string) {
  return `cat-${cat.toLowerCase()}`;
}

function Home() {
  const [activeCat, setActiveCat] = useState<Category>("Tortas");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sections = CATEGORIES.map((c) => document.getElementById(catId(c))).filter(
      (el): el is HTMLElement => !!el,
    );
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          const label = CATEGORIES.find((c) => catId(c) === visible.target.id);
          if (label) setActiveCat(label);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrollTop + windowHeight >= documentHeight - 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BrandMark />
      <NameField />

      <nav
        className="sticky top-0 z-20 -mx-5 mt-10 flex gap-1 overflow-x-auto bg-bg/90 px-5 py-3 backdrop-blur-sm sm:-mx-8 sm:px-8"
        aria-label="Categorías"
      >
        {CATEGORIES.map((cat) => (
          <a
            key={cat}
            href={`#${catId(cat)}`}
            className={`cat-pill rounded-full px-4 py-2 text-sm font-medium ${activeCat === cat ? "text-fg" : "text-muted"}`}
            data-on={activeCat === cat}
            onClick={(e) => {
              e.preventDefault();
              setActiveCat(cat);
              document
                .getElementById(catId(cat))
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {cat}
          </a>
        ))}
      </nav>

      {CATEGORIES.map((cat) => {
        const featured = productsIn(cat, true);
        const rest = productsIn(cat).length - featured.length;
        return (
          <section key={cat} id={catId(cat)} className="mt-10 scroll-mt-16">
            <SectionTitle>{cat}</SectionTitle>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
              {featured.slice(0, 4).map((p, i) => (
                <ProductCard key={p.id} product={p} delay={i} />
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                to="/categoria/$slug"
                params={{ slug: slugFor(cat) }}
                className="see-all"
              >
                {seeAllLabel(cat)}
                {rest > 0 ? (
                  <span className="font-sans text-sm font-medium text-muted">+{rest}</span>
                ) : null}
                <ChevronRight className="see-arrow size-4" strokeWidth={2.2} />
              </Link>
            </div>
          </section>
        );
      })}

      {showScrollTop && (
        <button
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-fg text-bg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <ChevronUp className="size-5" strokeWidth={2.2} />
        </button>
      )}
    </>
  );
}
