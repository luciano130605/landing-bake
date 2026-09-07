import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Clock, i as Minus, r as Plus, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bakery-shell-D9rThcdK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "5491131121121";
var NAME_KEY = "bake-valentine-name";
var CART_KEY = "bake-valentine-cart";
var NOTE_KEY = "bake-valentine-note";
var INSTAGRAM = "https://instagram.com/bakevalentine";
var CATEGORIES = [
	"Tortas",
	"Pepas",
	"Cookies"
];
var PRODUCTS = [
	{
		id: "torta-choco",
		name: "Torta de chocolate",
		blurb: "Húmeda, con ganache. Para compartir sin apuro.",
		category: "Tortas",
		image: "/torta-chocolate.jpg",
		alt: "Torta de chocolate casera en plato azul",
		featured: true,
		variants: [
			{
				id: "18",
				label: "18 cm",
				price: 9e3
			},
			{
				id: "22",
				label: "22 cm",
				price: 12500
			},
			{
				id: "24",
				label: "24 cm",
				price: 15e3
			}
		]
	},
	{
		id: "torta-vainilla",
		name: "Torta de vainilla y dulce de leche",
		blurb: "La de siempre. Mucho dulce de leche, capas suaves.",
		category: "Tortas",
		image: "/torta-vainilla.jpg",
		alt: "Torta de vainilla con dulce de leche",
		featured: true,
		variants: [
			{
				id: "18",
				label: "18 cm",
				price: 8500
			},
			{
				id: "22",
				label: "22 cm",
				price: 11800
			},
			{
				id: "24",
				label: "24 cm",
				price: 14200
			}
		]
	},
	{
		id: "torta-limon",
		name: "Torta de limón",
		blurb: "Ácida justo. Bizcochuelo liviano y un almíbar corto.",
		category: "Tortas",
		image: "/torta-limon.jpg",
		alt: "Torta de limón casera con un feta cortado",
		featured: false,
		variants: [
			{
				id: "18",
				label: "18 cm",
				price: 8800
			},
			{
				id: "22",
				label: "22 cm",
				price: 12e3
			},
			{
				id: "24",
				label: "24 cm",
				price: 14500
			}
		]
	},
	{
		id: "torta-marquise",
		name: "Marquise",
		blurb: "Chocolate denso, casi un postre. Sale bien fría.",
		category: "Tortas",
		image: "/torta-chocolate.jpg",
		alt: "Marquise de chocolate",
		featured: false,
		objectPos: "center 80%",
		variants: [
			{
				id: "18",
				label: "18 cm",
				price: 9800
			},
			{
				id: "22",
				label: "22 cm",
				price: 13500
			},
			{
				id: "24",
				label: "24 cm",
				price: 16200
			}
		]
	},
	{
		id: "torta-coco",
		name: "Torta de coco",
		blurb: "Coco tostado y dulce de leche. La que pide la abuela.",
		category: "Tortas",
		image: "/torta-vainilla.jpg",
		alt: "Torta de coco casera",
		featured: false,
		objectPos: "70% 40%",
		variants: [
			{
				id: "18",
				label: "18 cm",
				price: 8700
			},
			{
				id: "22",
				label: "22 cm",
				price: 11900
			},
			{
				id: "24",
				label: "24 cm",
				price: 14400
			}
		]
	},
	{
		id: "torta-rogel",
		name: "Rogel",
		blurb: "Capas crocantes, mucho dulce de leche, merengue italiano.",
		category: "Tortas",
		image: "/torta-limon.jpg",
		alt: "Torta Rogel",
		featured: false,
		objectPos: "30% 70%",
		variants: [
			{
				id: "18",
				label: "18 cm",
				price: 11e3
			},
			{
				id: "22",
				label: "22 cm",
				price: 14800
			},
			{
				id: "24",
				label: "24 cm",
				price: 17500
			}
		]
	},
	{
		id: "pepas-ddl",
		name: "Pepas de dulce de leche",
		blurb: "Crocantes, con el centro bien cargado.",
		category: "Pepas",
		image: "/pepas-ddl.jpg",
		alt: "Pepas de dulce de leche sobre papel de horno",
		featured: true,
		variants: [{
			id: "media",
			label: "Media docena",
			price: 2800
		}, {
			id: "docena",
			label: "Docena",
			price: 5200
		}]
	},
	{
		id: "pepas-nuez",
		name: "Pepas de nuez",
		blurb: "Manteca y nuez. Se acaban en un rato.",
		category: "Pepas",
		image: "/pepas-nuez.jpg",
		alt: "Pepas de nuez apiladas sobre lienzo",
		featured: true,
		variants: [{
			id: "media",
			label: "Media docena",
			price: 3e3
		}, {
			id: "docena",
			label: "Docena",
			price: 5600
		}]
	},
	{
		id: "pepas-membrillo",
		name: "Pepas de membrillo",
		blurb: "El clásico de lata. Centro de membrillo casero.",
		category: "Pepas",
		image: "/pepas-ddl.jpg",
		alt: "Pepas de membrillo",
		featured: false,
		objectPos: "20% 40%",
		variants: [{
			id: "media",
			label: "Media docena",
			price: 2700
		}, {
			id: "docena",
			label: "Docena",
			price: 5e3
		}]
	},
	{
		id: "pepas-choco",
		name: "Pepas de chocolate",
		blurb: "Masa de cacao y un poquito de dulce al medio.",
		category: "Pepas",
		image: "/pepas-nuez.jpg",
		alt: "Pepas de chocolate",
		featured: false,
		objectPos: "80% 60%",
		variants: [{
			id: "media",
			label: "Media docena",
			price: 3200
		}, {
			id: "docena",
			label: "Docena",
			price: 5900
		}]
	},
	{
		id: "pepas-batata",
		name: "Pepas de batata",
		blurb: "Dulce de batata suave, masa que se deshace.",
		category: "Pepas",
		image: "/pepas-ddl.jpg",
		alt: "Pepas de batata",
		featured: false,
		objectPos: "60% 20%",
		variants: [{
			id: "media",
			label: "Media docena",
			price: 2700
		}, {
			id: "docena",
			label: "Docena",
			price: 5e3
		}]
	},
	{
		id: "pepas-frambuesa",
		name: "Pepas de frambuesa",
		blurb: "Mermelada ácida. Un corte al chocolate.",
		category: "Pepas",
		image: "/pepas-nuez.jpg",
		alt: "Pepas de frambuesa",
		featured: false,
		objectPos: "40% 80%",
		variants: [{
			id: "media",
			label: "Media docena",
			price: 3100
		}, {
			id: "docena",
			label: "Docena",
			price: 5800
		}]
	},
	{
		id: "cookie-choco",
		name: "Cookie de chocolate",
		blurb: "Oscura, borde chewy, centro todavía tibio.",
		category: "Cookies",
		image: "/cookie-chocolate.jpg",
		alt: "Cookie de chocolate en plato de crema",
		featured: true,
		variants: [{
			id: "unidad",
			label: "Por unidad",
			price: 600
		}]
	},
	{
		id: "cookie-chips",
		name: "Cookie con chips",
		blurb: "La clásica. Recién salidas, con el chip derretido.",
		category: "Cookies",
		image: "/cookie-chips.jpg",
		alt: "Cookies con chips de chocolate",
		featured: true,
		variants: [{
			id: "unidad",
			label: "Por unidad",
			price: 650
		}]
	},
	{
		id: "cookie-avena",
		name: "Cookie de avena",
		blurb: "Con pasas. Más desayuno que postre, igual se piden de postre.",
		category: "Cookies",
		image: "/cookie-chips.jpg",
		alt: "Cookie de avena",
		featured: false,
		objectPos: "right center",
		variants: [{
			id: "unidad",
			label: "Por unidad",
			price: 600
		}]
	},
	{
		id: "cookie-brownie",
		name: "Cookie brownie",
		blurb: "Casi un brownie chiquito. Pedí más de una.",
		category: "Cookies",
		image: "/cookie-chocolate.jpg",
		alt: "Cookie brownie",
		featured: false,
		objectPos: "center 30%",
		variants: [{
			id: "unidad",
			label: "Por unidad",
			price: 700
		}]
	},
	{
		id: "cookie-limon",
		name: "Cookie de limón",
		blurb: "Ralladura y un glaseado fino. Liviana, se pide de a tres.",
		category: "Cookies",
		image: "/cookie-chips.jpg",
		alt: "Cookie de limón",
		featured: false,
		objectPos: "left 70%",
		variants: [{
			id: "unidad",
			label: "Por unidad",
			price: 620
		}]
	},
	{
		id: "cookie-ddl",
		name: "Cookie rellena de dulce de leche",
		blurb: "Dos tapas, el centro que se escapa. La más pedida el finde.",
		category: "Cookies",
		image: "/cookie-chocolate.jpg",
		alt: "Cookie rellena de dulce de leche",
		featured: false,
		objectPos: "80% 20%",
		variants: [{
			id: "unidad",
			label: "Por unidad",
			price: 750
		}]
	}
];
function formatARS(n) {
	return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function slugFor(cat) {
	return cat.toLowerCase();
}
function categoryFromSlug(slug) {
	return CATEGORIES.find((c) => slugFor(c) === slug.toLowerCase());
}
function productsIn(cat, featuredOnly = false) {
	return PRODUCTS.filter((p) => p.category === cat && (!featuredOnly || p.featured));
}
function seeAllLabel(cat) {
	if (cat === "Tortas") return "Ver todas las tortas";
	if (cat === "Pepas") return "Ver todas las pepas";
	return "Ver todas las cookies";
}
function persist(partial) {
	try {
		if (partial.name !== void 0) localStorage.setItem(NAME_KEY, partial.name);
		if (partial.note !== void 0) localStorage.setItem(NOTE_KEY, partial.note);
		if (partial.items !== void 0) localStorage.setItem(CART_KEY, JSON.stringify(partial.items));
	} catch {}
}
var useBakery = create((set, get) => ({
	name: "",
	note: "",
	items: [],
	trayOpen: false,
	ready: false,
	shaking: false,
	hydrate: () => {
		if (get().ready) return;
		try {
			const name = localStorage.getItem("bake-valentina-name") ?? "";
			const note = localStorage.getItem("bake-valentina-note") ?? "";
			const raw = localStorage.getItem(CART_KEY);
			const parsed = raw ? JSON.parse(raw) : [];
			set({
				name,
				note,
				items: Array.isArray(parsed) ? parsed : [],
				ready: true
			});
		} catch {
			set({ ready: true });
		}
	},
	setName: (name) => {
		set({ name });
		persist({ name });
	},
	setNote: (note) => {
		set({ note });
		persist({ note });
	},
	setTrayOpen: (trayOpen) => set({ trayOpen }),
	demandName: () => {
		set({
			shaking: true,
			trayOpen: false
		});
		window.setTimeout(() => set({ shaking: false }), 450);
	},
	addItem: (product, variant, qty) => {
		const key = `${product.id}:${variant.id}`;
		const items = get().items;
		const next = items.find((i) => i.key === key) ? items.map((i) => i.key === key ? {
			...i,
			qty: i.qty + qty
		} : i) : [...items, {
			key,
			productId: product.id,
			name: product.name,
			variantLabel: variant.label,
			price: variant.price,
			qty
		}];
		set({ items: next });
		persist({ items: next });
	},
	setQty: (key, qty) => {
		const next = qty < 1 ? get().items.filter((i) => i.key !== key) : get().items.map((i) => i.key === key ? {
			...i,
			qty
		} : i);
		set({ items: next });
		persist({ items: next });
	}
}));
function QtyControl({ value, onChange, allowZero = false }) {
	const [stamp, setStamp] = (0, import_react.useState)(false);
	function bump(delta) {
		const next = value + delta;
		if (!allowZero && next < 1) return;
		if (allowZero && next < 0) return;
		setStamp(true);
		onChange(next);
		window.setTimeout(() => setStamp(false), 380);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => bump(-1),
				className: "knead size-11 rounded-full border border-border bg-surface text-fg",
				"aria-label": "Menos",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
					className: "mx-auto size-4",
					strokeWidth: 2.2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `qty-stamp w-8 text-center text-base font-semibold ${stamp ? "is-stamping" : ""}`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => bump(1),
				className: "knead size-11 rounded-full border border-border bg-surface text-fg",
				"aria-label": "Más",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "mx-auto size-4",
					strokeWidth: 2.2
				})
			})
		]
	});
}
function BakeryShell({ children }) {
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
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	const count = (0, import_react.useMemo)(() => items.reduce((n, i) => n + i.qty, 0), [items]);
	const total = (0, import_react.useMemo)(() => items.reduce((n, i) => n + i.price * i.qty, 0), [items]);
	function sendWhatsApp() {
		const trimmed = name.trim();
		if (!trimmed) {
			demandName();
			return;
		}
		if (!items.length) return;
		const lines = items.map((i) => `• ${i.qty} ${i.name} (${i.variantLabel}) — ${formatARS(i.price * i.qty)}`);
		const extra = note.trim() ? `\n\nNota: ${note.trim()}` : "";
		const mensaje = `Hola! Soy ${trimmed}. Te hago este pedido:\n\n${lines.join("\n")}\n\nTotal: ${formatARS(total)}${extra}\n\n(72 hs de anticipación)`;
		const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
		window.open(url, "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grain relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mote mote-a",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mote mote-b",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mote mote-c",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mote mote-d",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mote mote-e",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-5 pb-10 pt-10 sm:px-8 sm:pt-14",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mx-auto max-w-3xl border-t border-border px-5 pb-36 pt-8 text-center sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold",
						children: "Bake Valentine"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Pedidos con ",
							72,
							" hs de anticipación"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: INSTAGRAM,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-1 inline-block text-sm text-accent",
						children: "@bakevalentine"
					})
				]
			}),
			count > 0 && !trayOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bar-in fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTrayOpen(true),
					className: "knead mx-auto flex w-full max-w-3xl items-center justify-between rounded-xl bg-fg px-5 py-4 text-left text-surface shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-medium",
						children: [
							"Tu bandeja · ",
							count,
							" ",
							count === 1 ? "cosa" : "cosas"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-sm font-semibold",
						children: formatARS(total)
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `tray-overlay fixed inset-0 z-50 bg-fg/35 ${trayOpen ? "is-open" : ""}`,
				onClick: () => setTrayOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `tray mx-auto w-full max-w-3xl overflow-y-auto rounded-t-xl bg-sheet px-5 pb-8 pt-4 sm:px-8 ${trayOpen ? "is-open" : ""}`,
				role: "dialog",
				"aria-label": "Tu bandeja",
				"aria-hidden": !trayOpen,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rivet left-4 top-4",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rivet right-4 top-4",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rivet bottom-4 left-4",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rivet bottom-4 right-4",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-4 h-1.5 w-12 rounded-full bg-fg/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: "La bandeja"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Revisá y mandalo por WhatsApp."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTrayOpen(false),
							className: "knead relative size-11 rounded-full bg-surface text-fg",
							"aria-label": "Cerrar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "mx-auto size-5",
								strokeWidth: 2
							})
						})]
					}),
					items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-display text-lg italic text-muted",
						children: "Todavía está vacía. Elegí algo de abajo."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-border/80",
						children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "ticket flex items-center justify-between gap-3 py-4",
							style: { ["--d"]: `${i * 55}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium leading-snug",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										item.variantLabel,
										" · ",
										formatARS(item.price)
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
									value: item.qty,
									onChange: (q) => setQty(item.key, q),
									allowZero: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-16 text-right text-sm font-semibold tabular-nums",
									children: formatARS(item.price * item.qty)
								})]
							})]
						}, item.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Tu nombre"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Para firmar el pedido",
							autoComplete: "name",
							className: "mt-2 w-full rounded-md border-0 bg-surface px-3 py-3 text-sm text-fg shadow-border placeholder:text-muted/70 focus:outline-2 focus:outline-accent"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Una nota, si hace falta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: note,
							onChange: (e) => setNote(e.target.value),
							rows: 2,
							placeholder: "Sin nuez, para el sábado, etc.",
							className: "mt-2 w-full resize-none rounded-md border-0 bg-surface px-3 py-3 text-sm text-fg shadow-border placeholder:text-muted/70 focus:outline-2 focus:outline-accent"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold tabular-nums",
							children: formatARS(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !items.length,
						onClick: sendWhatsApp,
						className: "knead mt-5 w-full rounded-lg bg-accent py-4 text-center text-base font-semibold text-surface disabled:opacity-40",
						children: "Mandar por WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-center text-xs text-muted",
						children: [
							"Pedidos con ",
							72,
							" hs de anticipación"
						]
					})
				]
			})
		]
	});
}
function NameField() {
	const name = useBakery((s) => s.name);
	const setName = useBakery((s) => s.setName);
	const shaking = useBakery((s) => s.shaking);
	const nameRef = (0, import_react.useRef)(null);
	const nameWrapRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (shaking) {
			nameRef.current?.focus();
			nameWrapRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}
	}, [shaking]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: nameWrapRef,
		className: `name-wrap mx-auto mt-10 max-w-md ${shaking ? "is-shaking" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "customer-name",
				className: "font-display text-base italic text-fg",
				children: "¿Cómo te llamás?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "customer-name",
				ref: nameRef,
				value: name,
				onChange: (e) => setName(e.target.value),
				placeholder: "Escribilo acá",
				autoComplete: "name",
				className: "name-line mt-2 w-full border-0 border-b border-border bg-transparent py-3 font-sans text-lg text-fg placeholder:text-muted/60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: "Va firmado en el mensaje de WhatsApp."
			})
		]
	});
}
function BrandMark({ compact = false }) {
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "inline-flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "write-in font-display text-base italic text-accent",
			children: "Bake"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl font-semibold leading-none tracking-tight",
			children: "Valentina"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "write-in font-display text-lg italic text-accent sm:text-xl",
				children: "Bake"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-5xl font-semibold tracking-tight text-fg sm:text-6xl",
				children: Array.from("Valentina").map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "stamp-letter",
					style: { animationDelay: `${140 + i * 48}ms` },
					children: ch
				}, `${ch}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rule-track mt-5",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-pin" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-muted",
				children: "Horneado en casa, a pedido"
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
						"Pedidos por WhatsApp · ",
						72,
						" hs de anticipación"
					]
				})
			})
		]
	});
}
//#endregion
export { QtyControl as a, productsIn as c, useBakery as d, NameField as i, seeAllLabel as l, BrandMark as n, categoryFromSlug as o, CATEGORIES as r, formatARS as s, BakeryShell as t, slugFor as u };
