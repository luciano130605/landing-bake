export type Variant = { id: string; label: string; price: number };
export type Product = {
  id: string;
  name: string;
  blurb: string;
  category: Category;
  featured: boolean;
  objectPos?: string;
  variants: Variant[];
};
export type CartItem = {
  key: string;
  productId: string;
  name: string;
  variantLabel: string;
  /** precio de la carta */
  price: number;
  /** lo que se cobra: price con el descuento ya aplicado */
  payPrice: number;
  qty: number;
};

export const WHATSAPP_NUMBER = "5491131121121";
export const NAME_KEY = "bake-valentine-name";
export const CART_KEY = "bake-valentine-cart";
export const NOTE_KEY = "bake-valentine-note";
export const LEAD_HOURS = 72;
export const INSTAGRAM = "https://instagram.com/bakevalentine";

export const CATEGORIES = ["Tortas", "Tartas", "Clasicos", "Cookies", "Budines"] as const;
export type Category = (typeof CATEGORIES)[number];

export const PROMO = {
  active: true,
  percent: 10,
};

/* ------------------------------------------------------------------ *
 *  Box especial — armá el tuyo con lo que ya está en la carta
 *  Para apagarlo o cambiarlo, tocá solo este objeto.
 * ------------------------------------------------------------------ */
export const BOX = {
  active: true,
  /** "29 de septiembre" */
  date: "29 de septiembre",
  /** "sábado 29/09" */
  shortDate: "sábado 29/09",
  /** "Día de la Primavera" */
  occasion: "Día de la Primavera",
  /** texto largo, con años */
  fullDate: "29 de septiembre de 2026",
  /** "Para el 29 de septiembre" */
  lead: "Para el 29 de septiembre",
  /** cuánto tiene que avisar antes (texto libre) */
  deadline: "avisá hasta el 26/09",
  /** precio del box vacío (0 = solo los productos) */
  fee: 0,
  /** texto del flier, para no perder el tono */
  tagline: "Elegí lo que más te guste de la carta, lo armamos y te lo entregamos listo para regalar.",
};

/** Se muestra y se puede pedir solo en el día de la promo */
export function isBoxDay(d = new Date()) {
  return d.getDate() === 29 && d.getMonth() === 8;
}

/** visible = activo + es el día (o el flag de debug está prendido) */
export function boxLive(debug = false, d = new Date()) {
  return BOX.active && (debug || isBoxDay(d));
}

/** El box sale con el mismo descuento de la promo (0 si está apagada) */
export function boxDiscount(subtotal: number) {
  return PROMO.active ? discountedPrice(subtotal) : 0;
}

export function discountedPrice(price: number) {
  if (!PROMO.active) return price;
  return Math.round((price * (1 - PROMO.percent / 100)) / 100) * 100; // redondeado a $100
}

export const PRODUCTS: Product[] = [
  {
    id: "Chocotorta",
    name: "Chocotorta",
    blurb: "",
    category: "Tortas",
    featured: true,
    variants: [
      { id: "10", label: "10 cm", price: 13000 },
      { id: "18", label: "18 cm", price: 50000 },
      { id: "20", label: "20 cm", price: 55000 },
      { id: "24", label: "24 cm", price: 70000 },
    ],
  },
  {
    id: "Chocoreo",
    name: "Chocoreo",
    blurb: "",
    category: "Tortas",
    featured: true,
    variants: [
      { id: "10", label: "10 cm", price: 13000 },
      { id: "18", label: "18 cm", price: 50000 },
      { id: "20", label: "20 cm", price: 55000 },
      { id: "24", label: "24 cm", price: 70000 },
    ],
  },
  {
    id: "Brownie-ddl",
    name: "Brownie, dulce de leche y crema",
    blurb: "",
    category: "Tortas",
    featured: true,
    variants: [
      { id: "10", label: "10 cm", price: 13000 },
      { id: "18", label: "18 cm", price: 55000 },
      { id: "20", label: "20 cm", price: 60000 },
      { id: "24", label: "24 cm", price: 75000 },
    ],
  },
  // {
  //   id: "pastafrola-mem",
  //   name: "Pastafrola de Membrillo",
  //   blurb: "",
  //   category: "Tartas",
  //   featured: true,
  //   variants: [
  //     { id: "7", label: "7x7", price: 5000 },
  //     { id: "12", label: "12cm", price: 10000 },
  //     { id: "18", label: "18cm", price: 17000 },
  //     { id: "26", label: "26cm", price: 25000 },
  //   ],
  // },
  // {
  //   id: "pastafrola-bat",
  //   name: "Pastafrola de Batata",
  //   blurb: "",
  //   category: "Tartas",
  //   featured: true,
  //   variants: [
  //     { id: "7", label: "7x7", price: 5000 },
  //     { id: "12", label: "12cm", price: 10000 },
  //     { id: "18", label: "18cm", price: 17000 },
  //     { id: "26", label: "26cm", price: 25000 },
  //   ],
  // },
  // {
  //   id: "pastafrola-ddl",
  //   name: "Pastafrola de Dulce de leche",
  //   blurb: "",
  //   category: "Tartas",
  //   featured: true,
  //   variants: [
  //     { id: "7", label: "7x7", price: 5000 },
  //     { id: "12", label: "12cm", price: 10000 },
  //     { id: "18", label: "18cm", price: 17000 },
  //     { id: "26", label: "26cm", price: 25000 },
  //   ],
  // },
  {
    id: "tarta-ricota",
    name: "Tarta de ricota",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "10", label: "10cm", price: 12000 },
      { id: "18", label: "18cm", price: 22000 },
      { id: "20", label: "20cm", price: 30000 },
      { id: "26", label: "26cm", price: 40000 },
    ],
  },
  // {
  //   id: "tarta-ricota-ddl",
  //   name: "Tarta de ricota con Dulce de leche",
  //   blurb: "",
  //   category: "Tartas",
  //   featured: true,
  //   variants: [
  //     { id: "10", label: "Individual - 10cm", price: 8000 },
  //     { id: "12", label: "Chica - 12cm", price: 12000 },
  //     { id: "18", label: "Mediana - 18cm", price: 20000 },
  //     { id: "26", label: "Grande - 26cm", price: 30000 },
  //   ],
  // },
  {
    id: "tarta-coco-ddl",
    name: "Tarta de coco y Dulce de leche",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "10", label: "10cm", price: 12000 },
      { id: "18", label: "18cm", price: 25000 },
      { id: "20", label: "20cm", price: 30000 },
      { id: "26", label: "26cm", price: 50000 },
    ],
  },
  {
    id: "lemon-pie",
    name: "Lemon pie",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "10", label: "10cm", price: 15000 },
      { id: "18", label: "18cm", price: 30000 },
      { id: "20", label: "20cm", price: 35000 },
      { id: "26", label: "26cm", price: 50000 },
    ],
  },

  // {
  //   id: "pepas-ddl",
  //   name: "Pepas de dulce de leche",
  //   blurb: "Masa de vainilla o chocolate",
  //   category: "Clasicos",
  //   featured: true,
  //   variants: [
  //     { id: "media-vainilla", label: "Media docena · vainilla", price: 6000 },
  //     { id: "media-choco", label: "Media docena · choco", price: 6000 },
  //     { id: "docena-vainilla", label: "Docena · vainilla", price: 8000 },
  //     { id: "docena-choco", label: "Docena · choco", price: 8000 },
  //   ],
  // },

  // {
  //   id: "pepas-mem",
  //   name: "Pepas de Membrillo",
  //   blurb: "Masa de vainilla o chocolate",
  //   category: "Clasicos",
  //   featured: true,
  //   variants: [
  //     { id: "media-vainilla", label: "Media docena · vainilla", price: 6000 },
  //     { id: "media-choco", label: "Media docena · choco", price: 6000 },
  //     { id: "docena-vainilla", label: "Docena · vainilla", price: 8000 },
  //     { id: "docena-choco", label: "Docena · choco", price: 8000 },
  //   ],
  // },
  // {
  //   id: "pepas-batata",
  //   name: "Pepas de Batata",
  //   blurb: "Masa de vainilla o chocolate",
  //   category: "Clasicos",
  //   featured: true,
  //   variants: [
  //     { id: "media-vainilla", label: "Media docena · vainilla", price: 6000 },
  //     { id: "media-choco", label: "Media docena · choco", price: 6000 },
  //     { id: "docena-vainilla", label: "Docena · vainilla", price: 8000 },
  //     { id: "docena-choco", label: "Docena · choco", price: 8000 },
  //   ],
  // },
  // {
  //   id: "Scons",
  //   name: "Scons dulces",
  //   blurb: "",
  //   category: "Clasicos",
  //   featured: true,
  //   variants: [
  //     { id: "media", label: "Media docena", price: 8000 },
  //     { id: "docena", label: "Docena", price: 12000 },
  //   ],
  // },
  // {
  //   id: "brownie",
  //   name: "Brownie",
  //   blurb: "",
  //   category: "Clasicos",
  //   featured: true,
  //   variants: [
  //     { id: "7", label: "Cuadrado . 7x7", price: 4000 },
  //   ],
  // },

  // {
  //   id: "cookie-chips",
  //   name: "Cookie Choco chips",
  //   blurb: "Base de vainilla con chips de chocolate. Rellena de ganache de chocolate",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4000 },
  //     { id: "rellena", label: "Rellena", price: 5000 },
  //   ],
  // },
  // {
  //   id: "cookie-bronwnie",
  //   name: "Cookie Brownie",
  //   blurb: "Base de brownie con chips de chocolate. Rellena de dulce de leche",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4000 },
  //     { id: "rellena", label: "Rellena", price: 5000 },
  //   ],
  // },
  // {
  //   id: "cookie-oreo",
  //   name: "Cookie Oreo",
  //   blurb: "Base de vainilla con trozos de Oreo. Rellena de ganache de chocolate",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4000 },
  //     { id: "rellena", label: "Rellena", price: 5000 },
  //   ],
  // },
  // {
  //   id: "cookie-limon",
  //   name: "Cookie Limón",
  //   blurb: "Base de limón con semillas de amapola. Rellena de crema de limón",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4000 },
  //     { id: "rellena", label: "Rellena", price: 5000 },
  //   ],
  // },
  // {
  //   id: "cookie-red",
  //   name: "Cookie Red Velvet",
  //   blurb: "Base de vainilla con tono rojo y chips de chocolate blanco. Rellena de crema de cheesecake",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4000 },
  //     { id: "rellena", label: "Rellena", price: 5000 },
  //   ],
  // },
  // {
  //   id: "cookie-kinder",
  //   name: "Cookie Kinder",
  //   blurb: "Base de vainilla con trozos de Kinder y chips de chocolate. Rellena de crema de avellanas",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4500 },
  //     { id: "rellena", label: "Rellena", price: 5500 },
  //   ],
  // },
  // {
  //   id: "cookie-bonobon",
  //   name: "Cookie Bon o Bon",
  //   blurb: "Base de vainilla con trozos de Bon o Bon. Rellena con pasta de Bon o Bon",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4500 },
  //     { id: "rellena", label: "Rellena", price: 5500 },
  //   ],
  // },
  // {
  //   id: "cookie-ferrero",
  //   name: "Cookie Ferrero Rocher",
  //   blurb: "Base de chocolate con maní crocante. Rellena con crema de avellanas",
  //   category: "Cookies",
  //   featured: true,
  //   variants: [
  //     { id: "simple", label: "Simple", price: 4500 },
  //     { id: "rellena", label: "Rellena", price: 5500 },
  //   ],
  // },
  // {
  //   id: "budin-vainilla",
  //   name: "Budín de vainilla",
  //   blurb: "",
  //   category: "Budines",
  //   featured: true,
  //   variants: [
  //     { id: "porcion", label: "Porción", price: 2000 },
  //     { id: "chico", label: "Chico - 300g", price: 10000 },
  //     { id: "grande", label: "Grande - 500g", price: 13000 },
  //   ],
  // },
  // {
  //   id: "budin-marmolado",
  //   name: "Budín marmolado",
  //   blurb: "",
  //   category: "Budines",
  //   featured: true,
  //   variants: [
  //     { id: "porcion", label: "Porción", price: 2000 },
  //     { id: "chico", label: "Chico - 300g", price: 10000 },
  //     { id: "grande", label: "Grande - 500g", price: 13000 },
  //   ],
  // },

  // {
  //   id: "budin-limon",
  //   name: "Budín de Limón",
  //   blurb: "",
  //   category: "Budines",
  //   featured: true,
  //   variants: [
  //     { id: "porcion", label: "Porción", price: 2000 },
  //     { id: "chico", label: "Chico - 300g", price: 10000 },
  //     { id: "grande", label: "Grande - 500g", price: 13000 },
  //   ],
  // },

  // {
  //   id: "budin-banana",
  //   name: "Budín de Banana",
  //   blurb: "",
  //   category: "Budines",
  //   featured: true,
  //   variants: [
  //     { id: "porcion", label: "Porción", price: 2000 },
  //     { id: "chico", label: "Chico - 300g", price: 10000 },
  //     { id: "grande", label: "Grande - 500g", price: 13000 },
  //   ],
  // },
  // {
  //   id: "budin-choco",
  //   name: "Budín de Chocolate",
  //   blurb: "",
  //   category: "Budines",
  //   featured: true,
  //   variants: [
  //     { id: "porcion", label: "Porción", price: 2000 },
  //     { id: "chico", label: "Chico - 300g", price: 10000 },
  //     { id: "grande", label: "Grande - 500g", price: 13000 },
  //   ],
  // },

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

export function productById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

/** "18 cm · $45.000" */
export function variantLabel(product: Product, variant: Variant) {
  return `${variant.label} · ${formatARS(variant.price)}`;
}

export function seeAllLabel(cat: Category) {
  if (cat === "Tortas") return "Ver todas las tortas";
  if (cat === "Tartas") return "Ver todas las tartas";
  if (cat === "Clasicos") return "Ver todas los Clasicos";
  if (cat === "Cookies") return "Ver todas las cookies";
  if (cat === "Budines") return "Ver todos los budines";
  return "Ver todos";
}
