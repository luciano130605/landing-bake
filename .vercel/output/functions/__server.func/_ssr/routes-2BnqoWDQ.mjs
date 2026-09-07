import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as productsIn, i as NameField, l as seeAllLabel, n as BrandMark, r as CATEGORIES, u as slugFor } from "./bakery-shell-D9rThcdK.mjs";
import { n as SectionTitle, t as ProductCard } from "./section-title-CCsdhyHp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2BnqoWDQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function catId(cat) {
	return `cat-${cat.toLowerCase()}`;
}
function Home() {
	const [activeCat, setActiveCat] = (0, import_react.useState)("Tortas");
	(0, import_react.useEffect)(() => {
		const sections = CATEGORIES.map((c) => document.getElementById(catId(c))).filter((el) => !!el);
		if (!sections.length) return;
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) {
				const label = CATEGORIES.find((c) => catId(c) === visible.target.id);
				if (label) setActiveCat(label);
			}
		}, {
			rootMargin: "-28% 0px -58% 0px",
			threshold: [
				.1,
				.35,
				.6
			]
		});
		sections.forEach((s) => obs.observe(s));
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameField, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "sticky top-0 z-20 -mx-5 mt-10 flex gap-1 overflow-x-auto bg-bg/90 px-5 py-3 backdrop-blur-sm sm:-mx-8 sm:px-8",
			"aria-label": "Categorías",
			children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${catId(cat)}`,
				className: `cat-pill rounded-full px-4 py-2 text-sm font-medium ${activeCat === cat ? "text-fg" : "text-muted"}`,
				"data-on": activeCat === cat,
				onClick: (e) => {
					e.preventDefault();
					setActiveCat(cat);
					document.getElementById(catId(cat))?.scrollIntoView({
						behavior: "smooth",
						block: "start"
					});
				},
				children: cat
			}, cat))
		}),
		CATEGORIES.map((cat) => {
			const featured = productsIn(cat, true);
			const rest = productsIn(cat).length - featured.length;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: catId(cat),
				className: "mt-10 scroll-mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: cat }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8",
						children: featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product: p,
							delay: i
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/categoria/$slug",
							params: { slug: slugFor(cat) },
							className: "see-all",
							children: [
								seeAllLabel(cat),
								rest > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-sans text-sm font-medium text-muted",
									children: ["+", rest]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "see-arrow size-4",
									strokeWidth: 2.2
								})
							]
						})
					})
				]
			}, cat);
		})
	] });
}
//#endregion
export { Home as component };
