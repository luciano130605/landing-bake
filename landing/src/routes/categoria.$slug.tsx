import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft, Clock } from "lucide-react";
import {
  CATEGORIES,
  categoryFromSlug,
  LEAD_HOURS,
  productsIn,
  seeAllLabel,
  slugFor,
} from "@/catalog";
import { BrandMark } from "@/components/bakery-shell";
import { ProductCard } from "@/components/product-card";
import { SectionTitle } from "@/components/section-title";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = categoryFromSlug(params.slug);
    if (!category) throw notFound();
    return { category, products: productsIn(category) };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  const others = CATEGORIES.filter((c) => c !== category);

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <BrandMark compact />
        <Link to="/" className="back-link shrink-0">
          <ChevronLeft className="see-arrow size-4" strokeWidth={2.2} />
          Inicio
        </Link>
      </div>

      <div className="mt-10">
        <SectionTitle>{category}</SectionTitle>
        <p className="mt-3 max-w-md text-sm text-muted">
          {products.length} {category.toLowerCase()} para pedir. Todas salen con{" "}
          {LEAD_HOURS} hs de anticipación.
        </p>
        <p className="mt-3">
          <span className="lead-chip">
            <Clock className="lead-clock" strokeWidth={2.2} aria-hidden />
            {LEAD_HOURS} hs de anticipación
          </span>
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} delay={i} />
        ))}
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-3">
        {others.map((cat) => (
          <Link
            key={cat}
            to="/categoria/$slug"
            params={{ slug: slugFor(cat) }}
            className="see-all"
          >
            {seeAllLabel(cat)}
            <ChevronLeft className="see-arrow size-4" strokeWidth={2.2} />
          </Link>
        ))}
      </div>
    </>
  );
}
