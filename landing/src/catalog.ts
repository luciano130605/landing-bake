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
  price: number;
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
  percent: 30, 
};

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
      { id: "10", label: "10 cm", price: 10000 },
      { id: "18", label: "18 cm", price: 35000 },
      { id: "20", label: "20 cm", price: 42000 },
      { id: "24", label: "24 cm", price: 50000 },
    ],
  },
  {
    id: "Brownie-ddl",
    name: "Brownie, dulce de leche y crema",
    blurb: "",
    category: "Tortas",
    featured: true,
    variants: [
      { id: "10", label: "10 cm", price: 10000 },
      { id: "18", label: "18 cm", price: 40000 },
      { id: "20", label: "20 cm", price: 45000 },
      { id: "24", label: "24 cm", price: 52000 },
    ],
  },
  {
    id: "pastafrola-mem",
    name: "Pastafrola de Membrillo",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "7", label: "Cuadrado - 7x7", price: 5000 },
      { id: "12", label: "Chica - 12cm", price: 10000 },
      { id: "18", label: "Mediana - 18cm", price: 17000 },
      { id: "26", label: "Grande - 26cm", price: 25000 },
    ],
  },
  {
    id: "pastafrola-bat",
    name: "Pastafrola de Batata",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "7", label: "Cuadrado - 7x7", price: 5000 },
      { id: "12", label: "Chica - 12cm", price: 10000 },
      { id: "18", label: "Mediana - 18cm", price: 17000 },
      { id: "26", label: "Grande - 26cm", price: 25000 },
    ],
  },
  {
    id: "pastafrola-ddl",
    name: "Pastafrola de Dulce de leche",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "7", label: "Cuadrado - 7x7", price: 5500 },
      { id: "12", label: "Chica - 12cm", price: 12000 },
      { id: "18", label: "Mediana - 18cm", price: 19000 },
      { id: "26", label: "Grande - 26cm", price: 30000 },
    ],
  },
  {
    id: "tarta-ricota",
    name: "Tarta de ricota",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "10", label: "Individual - 10cm", price: 7000 },
      { id: "12", label: "Chica - 12cm", price: 10000 },
      { id: "18", label: "Mediana - 18cm", price: 17000 },
      { id: "26", label: "Grande - 26cm", price: 25000 },
    ],
  },
  {
    id: "tarta-ricota-ddl",
    name: "Tarta de ricota con Dulce de leche",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "10", label: "Individual - 10cm", price: 8000 },
      { id: "12", label: "Chica - 12cm", price: 12000 },
      { id: "18", label: "Mediana - 18cm", price: 20000 },
      { id: "26", label: "Grande - 26cm", price: 30000 },
    ],
  },
  {
    id: "tarta-coco-ddl",
    name: "Tarta de coco y Dulce de leche",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "10", label: "Individual - 10cm", price: 8000 },
      { id: "12", label: "Chica - 12cm", price: 12000 },
      { id: "18", label: "Mediana - 18cm", price: 20000 },
      { id: "26", label: "Grande - 26cm", price: 30000 },
    ],
  },
  {
    id: "lemon-pie",
    name: "Lemon pie",
    blurb: "",
    category: "Tartas",
    featured: true,
    variants: [
      { id: "10", label: "Individual - 10cm", price: 10000 },
      { id: "12", label: "Chica - 12cm", price: 15000 },
      { id: "18", label: "Mediana - 18cm", price: 25000 },
      { id: "26", label: "Grande - 26cm", price: 38000 },
    ],
  },

  {
    id: "pepas-ddl",
    name: "Pepas de dulce de leche",
    blurb: "Masa de vainilla o chocolate",
    category: "Clasicos",
    featured: true,
    variants: [
      { id: "media-vainilla", label: "Media docena · vainilla", price: 6000 },
      { id: "media-choco", label: "Media docena · choco", price: 6000 },
      { id: "docena-vainilla", label: "Docena · vainilla", price: 8000 },
      { id: "docena-choco", label: "Docena · choco", price: 8000 },
    ],
  },

  {
    id: "pepas-mem",
    name: "Pepas de Membrillo",
    blurb: "Masa de vainilla o chocolate",
    category: "Clasicos",
    featured: true,
    variants: [
      { id: "media-vainilla", label: "Media docena · vainilla", price: 6000 },
      { id: "media-choco", label: "Media docena · choco", price: 6000 },
      { id: "docena-vainilla", label: "Docena · vainilla", price: 8000 },
      { id: "docena-choco", label: "Docena · choco", price: 8000 },
    ],
  },
  {
    id: "pepas-batata",
    name: "Pepas de Batata",
    blurb: "Masa de vainilla o chocolate",
    category: "Clasicos",
    featured: true,
    variants: [
      { id: "media-vainilla", label: "Media docena · vainilla", price: 6000 },
      { id: "media-choco", label: "Media docena · choco", price: 6000 },
      { id: "docena-vainilla", label: "Docena · vainilla", price: 8000 },
      { id: "docena-choco", label: "Docena · choco", price: 8000 },
    ],
  },
  {
    id: "Scons",
    name: "Scons dulces",
    blurb: "",
    category: "Clasicos",
    featured: true,
    variants: [
      { id: "media", label: "Media docena", price: 8000 },
      { id: "docena", label: "Docena", price: 12000 },
    ],
  },
  {
    id: "brownie",
    name: "Brownie",
    blurb: "",
    category: "Clasicos",
    featured: true,
    variants: [
      { id: "7", label: "Cuadrado . 7x7", price: 4000 },
    ],
  },

  {
    id: "cookie-chips",
    name: "Cookie Choco chips",
    blurb: "Base de vainilla con chips de chocolate. Rellena de ganache de chocolate",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4000 },
      { id: "rellena", label: "Rellena", price: 5000 },
    ],
  },
  {
    id: "cookie-bronwnie",
    name: "Cookie Brownie",
    blurb: "Base de brownie con chips de chocolate. Rellena de dulce de leche",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4000 },
      { id: "rellena", label: "Rellena", price: 5000 },
    ],
  },
  {
    id: "cookie-oreo",
    name: "Cookie Oreo",
    blurb: "Base de vainilla con trozos de Oreo. Rellena de ganache de chocolate",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4000 },
      { id: "rellena", label: "Rellena", price: 5000 },
    ],
  },
  {
    id: "cookie-limon",
    name: "Cookie Limón",
    blurb: "Base de limón con semillas de amapola. Rellena de crema de limón",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4000 },
      { id: "rellena", label: "Rellena", price: 5000 },
    ],
  },
  {
    id: "cookie-red",
    name: "Cookie Red Velvet",
    blurb: "Base de vainilla con tono rojo y chips de chocolate blanco. Rellena de crema de cheesecake",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4000 },
      { id: "rellena", label: "Rellena", price: 5000 },
    ],
  },
  {
    id: "cookie-kinder",
    name: "Cookie Kinder",
    blurb: "Base de vainilla con trozos de Kinder y chips de chocolate. Rellena de crema de avellanas",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4500 },
      { id: "rellena", label: "Rellena", price: 5500 },
    ],
  },
  {
    id: "cookie-bonobon",
    name: "Cookie Bon o Bon",
    blurb: "Base de vainilla con trozos de Bon o Bon. Rellena con pasta de Bon o Bon",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4500 },
      { id: "rellena", label: "Rellena", price: 5500 },
    ],
  },
  {
    id: "cookie-ferrero",
    name: "Cookie Ferrero Rocher",
    blurb: "Base de chocolate con maní crocante. Rellena con crema de avellanas",
    category: "Cookies",
    featured: true,
    variants: [
      { id: "simple", label: "Simple", price: 4500 },
      { id: "rellena", label: "Rellena", price: 5500 },
    ],
  },
  {
    id: "budin-vainilla",
    name: "Budín de vainilla",
    blurb: "",
    category: "Budines",
    featured: true,
    variants: [
      { id: "porcion", label: "Porción", price: 2000 },
      { id: "chico", label: "Chico - 300g", price: 10000 },
      { id: "grande", label: "Grande - 500g", price: 13000 },
    ],
  },
  {
    id: "budin-marmolado",
    name: "Budín marmolado",
    blurb: "",
    category: "Budines",
    featured: true,
    variants: [
      { id: "porcion", label: "Porción", price: 2000 },
      { id: "chico", label: "Chico - 300g", price: 10000 },
      { id: "grande", label: "Grande - 500g", price: 13000 },
    ],
  },

  {
    id: "budin-limon",
    name: "Budín de Limón",
    blurb: "",
    category: "Budines",
    featured: true,
    variants: [
      { id: "porcion", label: "Porción", price: 2000 },
      { id: "chico", label: "Chico - 300g", price: 10000 },
      { id: "grande", label: "Grande - 500g", price: 13000 },
    ],
  },

  {
    id: "budin-banana",
    name: "Budín de Banana",
    blurb: "",
    category: "Budines",
    featured: true,
    variants: [
      { id: "porcion", label: "Porción", price: 2000 },
      { id: "chico", label: "Chico - 300g", price: 10000 },
      { id: "grande", label: "Grande - 500g", price: 13000 },
    ],
  },
  {
    id: "budin-choco",
    name: "Budín de Chocolate",
    blurb: "",
    category: "Budines",
    featured: true,
    variants: [
      { id: "porcion", label: "Porción", price: 2000 },
      { id: "chico", label: "Chico - 300g", price: 10000 },
      { id: "grande", label: "Grande - 500g", price: 13000 },
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
  if (cat === "Tartas") return "Ver todas las tartas";
  if (cat === "Clasicos") return "Ver todas los Clasicos";
  if (cat === "Cookies") return "Ver todas las cookies";
  if (cat === "Budines") return "Ver todos los budines";
  return "Ver todos";
}
