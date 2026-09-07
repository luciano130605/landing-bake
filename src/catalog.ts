export type Variant = { id: string; label: string; price: number };
export type Product = {
  id: string;
  name: string;
  blurb: string;
  category: Category;
  image: string;
  alt: string;
  featured: boolean;
  objectPos?: string;
  variants: Variant[];
};
export type CartItem = {
  key: string;
  productId: string;
  name: string;
  variantLabel: string;
  price: number;
  qty: number;
};

export const WHATSAPP_NUMBER = "5491131121121";
export const NAME_KEY = "bake-valentine-name";
export const CART_KEY = "bake-valentine-cart";
export const NOTE_KEY = "bake-valentine-note";
export const LEAD_HOURS = 72;
export const INSTAGRAM = "https://instagram.com/bakevalentine";

export const CATEGORIES = ["Tortas", "Pepas", "Cookies", "Budines"] as const;
export type Category = (typeof CATEGORIES)[number];

export const PRODUCTS: Product[] = [
  {
    id: "torta-choco",
    name: "Torta de chocolate",
    blurb: "Húmeda, con ganache.",
    category: "Tortas",
    image: "/torta-chocolate.jpg",
    alt: "Torta de chocolate casera en plato azul",
    featured: true,
    variants: [
      { id: "18", label: "18 cm", price: 9000 },
      { id: "22", label: "22 cm", price: 12500 },
      { id: "24", label: "24 cm", price: 15000 },
    ],
  },
  {
    id: "torta-vainilla",
    name: "Torta de vainilla y dulce de leche",
    blurb: "",
    category: "Tortas",
    image: "/torta-vainilla.jpg",
    alt: "Torta de vainilla con dulce de leche",
    featured: true,
    variants: [
      { id: "18", label: "18 cm", price: 8500 },
      { id: "22", label: "22 cm", price: 11800 },
      { id: "24", label: "24 cm", price: 14200 },
    ],
  },
  {
    id: "torta-limon",
    name: "Torta de limón",
    blurb: "",
    category: "Tortas",
    image: "/torta-limon.jpg",
    alt: "Torta de limón casera con un feta cortado",
    featured: false,
    variants: [
      { id: "18", label: "18 cm", price: 8800 },
      { id: "22", label: "22 cm", price: 12000 },
      { id: "24", label: "24 cm", price: 14500 },
    ],
  },
  {
    id: "torta-coco",
    name: "Torta de coco",
    blurb: "Coco y dulce de leche",
    category: "Tortas",
    image: "/torta-vainilla.jpg",
    alt: "Torta de coco casera",
    featured: false,
    objectPos: "70% 40%",
    variants: [
      { id: "18", label: "18 cm", price: 8700 },
      { id: "22", label: "22 cm", price: 11900 },
      { id: "24", label: "24 cm", price: 14400 },
    ],
  },

  {
    id: "pepas-ddl",
    name: "Pepas de dulce de leche",
    blurb: "Masa de vainilla o chocolate",
    category: "Pepas",
    image: "/pepas-ddl.jpg",
    alt: "Pepas de dulce de leche sobre papel de horno",
    featured: true,
    variants: [
      { id: "media-vainilla", label: "Media docena · vainilla", price: 2800 },
      { id: "media-choco", label: "Media docena · choco", price: 2900 },
      { id: "docena-vainilla", label: "Docena · vainilla", price: 5200 },
      { id: "docena-choco", label: "Docena · choco", price: 5400 },
    ],
  },
  {
    id: "pepas-membrillo",
    name: "Pepas de membrillo",
    blurb: "Masa de vainilla o chocolate",
    category: "Pepas",
    image: "/pepas-ddl.jpg",
    alt: "Pepas de membrillo",
    featured: false,
    objectPos: "20% 40%",
    variants: [
      { id: "media-vainilla", label: "Media docena · vainilla", price: 2700 },
      { id: "media-choco", label: "Media docena · choco", price: 2800 },
      { id: "docena-vainilla", label: "Docena · vainilla", price: 5000 },
      { id: "docena-choco", label: "Docena · choco", price: 5200 },
    ],
  },
  {
    id: "pepas-batata",
    name: "Pepas de batata",
    blurb: "Masa de vainilla o chocolate",
    category: "Pepas",
    image: "/pepas-ddl.jpg",
    alt: "Pepas de batata",
    featured: false,
    objectPos: "60% 20%",
    variants: [
      { id: "media-vainilla", label: "Media docena · vainilla", price: 2700 },
      { id: "media-choco", label: "Media docena · choco", price: 2800 },
      { id: "docena-vainilla", label: "Docena · vainilla", price: 5000 },
      { id: "docena-choco", label: "Docena · choco", price: 5200 },
    ],
  },

  {
    id: "cookie-choco",
    name: "Cookie de chocolate",
    blurb: "Simple o rellena",
    category: "Cookies",
    image: "/cookie-chocolate.jpg",
    alt: "Cookie de chocolate en plato de crema",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 600 },
      { id: "rellena", label: "Rellena", price: 850 },
    ],
  },
  {
    id: "cookie-chips",
    name: "Cookie con chips",
    blurb: "Simple o rellena",
    category: "Cookies",
    image: "/cookie-chips.jpg",
    alt: "Cookies con chips de chocolate",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 650 },
      { id: "rellena", label: "Rellena", price: 900 },
    ],
  },
  {
    id: "cookie-bonobon",
    name: "Cookie de Bon o Bon",
    blurb: "Simple o rellena",
    category: "Cookies",
    image: "/cookie-chips.jpg",
    alt: "Cookie de avena",
    featured: false,
    objectPos: "right center",
    variants: [
      { id: "simple", label: "Simple", price: 600 },
      { id: "rellena", label: "Rellena", price: 850 },
    ],
  },

  {
    id: "budin-vainilla",
    name: "Budín de vainilla",
    blurb: "",
    category: "Budines",
    image: "/torta-vainilla.jpg",
    alt: "Budín de vainilla",
    featured: true,
    variants: [
      { id: "chico", label: "Chico", price: 3200 },
      { id: "mediano", label: "Mediano", price: 4200 },
      { id: "grande", label: "Grande", price: 5200 },
    ],
  },
  {
    id: "budin-choco",
    name: "Budín de chocolate",
    blurb: "Con chips",
    category: "Budines",
    image: "/torta-chocolate.jpg",
    alt: "Budín de chocolate",
    featured: true,
    variants: [
      { id: "chico", label: "Chico", price: 3500 },
      { id: "mediano", label: "Mediano", price: 4500 },
      { id: "grande", label: "Grande", price: 5500 },
    ],
  },
  {
    id: "budin-naranja",
    name: "Budín de naranja",
    blurb: "Con ralladura y glaseado",
    category: "Budines",
    image: "/torta-limon.jpg",
    alt: "Budín de naranja",
    featured: false,
    variants: [
      { id: "chico", label: "Chico", price: 3300 },
      { id: "mediano", label: "Mediano", price: 4300 },
      { id: "grande", label: "Grande", price: 5300 },
    ],
  },
  {
    id: "budin-limon",
    name: "Budín de limón",
    blurb: "",
    category: "Budines",
    image: "/torta-limon.jpg",
    alt: "Budín de limón",
    featured: false,
    objectPos: "40% 30%",
    variants: [
      { id: "chico", label: "Chico", price: 3300 },
      { id: "mediano", label: "Mediano", price: 4300 },
      { id: "grande", label: "Grande", price: 5300 },
    ],
  },
];

export function formatARS(n: number) {
  return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function slugFor(cat: Category) {
  return cat.toLowerCase();
}

export function categoryFromSlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => slugFor(c) === slug.toLowerCase());
}

export function productsIn(cat: Category, featuredOnly = false) {
  return PRODUCTS.filter((p) => p.category === cat && (!featuredOnly || p.featured));
}

export function seeAllLabel(cat: Category) {
  if (cat === "Tortas") return "Ver todas las tortas";
  if (cat === "Pepas") return "Ver todas las pepas";
  if (cat === "Cookies") return "Ver todas las cookies";
  if (cat === "Budines") return "Ver todos los budines";
  return "Ver todos";
}
