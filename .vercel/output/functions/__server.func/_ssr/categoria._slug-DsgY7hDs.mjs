import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Clock, o as ArrowRight, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { l as seeAllLabel, n as BrandMark, r as CATEGORIES, u as slugFor } from "./bakery-shell-D9rThcdK.mjs";
import { n as Route } from "./router-D8p6B4u1.mjs";
import { n as SectionTitle, t as ProductCard } from "./section-title-CCsdhyHp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categoria._slug-DsgY7hDs.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category, products } = Route.useLoaderData();
	const others = CATEGORIES.filter((c) => c !== category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "back-link shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "see-arrow size-4",
					strokeWidth: 2.2
				}), "Inicio"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: category }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-md text-sm text-muted",
					children: [
						products.length,
						" ",
						category.toLowerCase(),
						" para pedir. Todas salen con",
						" ",
						72,
						" hs de anticipación."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "lead-chip",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "lead-clock",
								strokeWidth: 2.2,
								"aria-hidden": true
							}),
							72,
							" hs de anticipación"
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8",
			children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product: p,
				delay: i
			}, p.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 flex flex-wrap justify-center gap-3",
			children: others.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/categoria/$slug",
				params: { slug: slugFor(cat) },
				className: "see-all",
				children: [seeAllLabel(cat), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "see-arrow size-4",
					strokeWidth: 2.2
				})]
			}, cat))
		})
	] });
}
//#endregion
export { CategoryPage as component };
