import { i as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as QtyControl, d as useBakery, s as formatARS } from "./bakery-shell-D9rThcdK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-title-CCsdhyHp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FlourBurst() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
		{
			dx: "-18px",
			dy: "-22px"
		},
		{
			dx: "16px",
			dy: "-26px"
		},
		{
			dx: "-8px",
			dy: "-34px"
		},
		{
			dx: "22px",
			dy: "-12px"
		},
		{
			dx: "-24px",
			dy: "-8px"
		}
	].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "burst-speck left-1/2 top-1/2",
		style: {
			["--dx"]: s.dx,
			["--dy"]: s.dy,
			animationDelay: `${i * 30}ms`
		}
	}, i)) });
}
function ProductCard({ product, delay }) {
	const addItem = useBakery((s) => s.addItem);
	const [variantId, setVariantId] = (0, import_react.useState)(product.variants[0]?.id ?? "");
	const [qty, setQty] = (0, import_react.useState)(1);
	const [added, setAdded] = (0, import_react.useState)(false);
	const [burst, setBurst] = (0, import_react.useState)(0);
	const cardRef = (0, import_react.useRef)(null);
	const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
	(0, import_react.useEffect)(() => {
		const el = cardRef.current;
		if (!el) return;
		const obs = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				el.classList.add("proof");
				obs.disconnect();
			}
		}, { threshold: .18 });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref: cardRef,
		className: "card-surface overflow-hidden rounded-xl opacity-0",
		style: { animationDelay: `${delay * 90}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-photo relative overflow-hidden bg-icing",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.alt,
				className: "food photo-drift h-full w-full object-cover",
				style: product.objectPos ? { objectPosition: product.objectPos } : void 0
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold leading-snug",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: product.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "chip rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-fg",
						"data-on": v.id === variantId,
						onClick: () => setVariantId(v.id),
						children: [
							v.label,
							" · ",
							formatARS(v.price)
						]
					}, v.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
						value: qty,
						onChange: (q) => setQty(Math.max(1, q))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [burst > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlourBurst, {}, burst) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleAdd,
							className: `knead rounded-lg px-5 py-3 text-sm font-semibold text-surface ${added ? "added-flash" : "bg-fg"}`,
							children: added ? "Sumado" : "Sumar"
						})]
					})]
				})
			]
		})]
	});
}
function SectionTitle({ children }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) el.classList.add("is-in");
		}, { threshold: .6 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-3xl font-semibold tracking-tight",
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		ref,
		className: "flour-mark",
		viewBox: "0 0 72 10",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 6 C14 2, 24 9, 36 5 S58 2, 70 7" })
	})] });
}
//#endregion
export { SectionTitle as n, ProductCard as t };
