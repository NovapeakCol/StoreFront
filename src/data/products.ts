export type CategoryId = "todo" | "mujer" | "hombre" | "calzado" | "accesorios";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: Exclude<CategoryId, "todo">;
  categoryLabel: string;
  price: number;
  compareAt?: number;
  image: string;
  badge?: string;
  colors: ProductColor[];
  sizes: string[];
  soldOutSizes?: string[];
  rating: number;
  reviews: number;
  description: string;
  details: string[];
}

export const FREE_SHIPPING_THRESHOLD = 2500;

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "mujer", label: "Mujer" },
  { id: "hombre", label: "Hombre" },
  { id: "calzado", label: "Calzado" },
  { id: "accesorios", label: "Accesorios" },
];

const BLACK: ProductColor = { name: "Negro Obsidiana", hex: "#101010" };
const CARBON: ProductColor = { name: "Carbón", hex: "#3A3A3A" };
const VOLT: ProductColor = { name: "Volt", hex: "#C9FF1A" };
const BONE: ProductColor = { name: "Hueso", hex: "#E9E4D8" };

export const PRODUCTS: Product[] = [
  {
    id: "aerolithe-tight",
    name: "Aerolithe Compression Tight",
    tagline: "Compresión progresiva 22 mmHg",
    category: "mujer",
    categoryLabel: "Mujer · Running",
    price: 1890,
    compareAt: 2360,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-leggings_416802a3.png",
    badge: "-20%",
    colors: [BLACK, CARBON, VOLT],
    sizes: ["XS", "S", "M", "L", "XL"],
    soldOutSizes: ["XS"],
    rating: 4.9,
    reviews: 412,
    description:
      "Segunda piel de compresión progresiva que estabiliza el músculo en cada zancada. Tejido italiano de doble capa con tratamiento anti-olor y cintura alta que no se mueve.",
    details: [
      "Tejido de doble capa con 22 mmHg de compresión",
      "Bolsillo lateral para teléfono y llaves",
      "Costuras planas selladas anti-roce",
      "Anti-olor permanente, sin percloroetileno",
    ],
  },
  {
    id: "vantablack-run-2",
    name: "Vantablack Run 02",
    tagline: "Retorno energético del 88%",
    category: "calzado",
    categoryLabel: "Calzado · Running",
    price: 3450,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-sneaker_9cc658c9.png",
    badge: "Nuevo",
    colors: [BLACK, VOLT, BONE],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    soldOutSizes: ["38", "44"],
    rating: 4.8,
    reviews: 187,
    description:
      "Placa de carbono curva sobre espuma supercrítica. La geometría de balancín empuja cada pisada hacia adelante, ideal para series largas y ritmos sostenidos.",
    details: [
      "Placa de carbono con geometría de balancín",
      "Entresuela supercrítica de 39 mm",
      "Upper de punto ingenieril de una pieza",
      "258 g en talla 42",
    ],
  },
  {
    id: "thermocore-zip",
    name: "Thermocore Zip Hoodie",
    tagline: "Térmico con ventilación dirigida",
    category: "hombre",
    categoryLabel: "Hombre · Training",
    price: 2490,
    compareAt: 2890,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-hoodie_fcb7986f.png",
    colors: [BLACK, CARBON],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 268,
    description:
      "Capa media técnica que retiene calor donde lo necesitas y lo expulsa donde no. Perforaciones láser en la espalda y cuello alto con mitad de cierre.",
    details: [
      "Interior cepillado con mecha de grafito",
      "Perforaciones láser de ventilación",
      "Puños y dobladillo elásticos sellados",
      "Corte atlético que no limita el hombro",
    ],
  },
  {
    id: "motion-support-bra",
    name: "Motion Support Bra",
    tagline: "Soporte alto, cero rebote",
    category: "mujer",
    categoryLabel: "Mujer · Training",
    price: 1290,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-sports-bra_a6686a9c.png",
    badge: "Nuevo",
    colors: [BLACK, VOLT, BONE],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 534,
    description:
      "Construcción de soporte alto con tirantes tipo racerback y copa de doble capa. Diseñado con 120 atletas para correr sin ajustar nada a mitad del entrenamiento.",
    details: [
      "Soporte alto certificado en laboratorio",
      "Espuma de copa sin costuras, extraíble",
      "Tejido de secado en 18 minutos",
      "Aros y ganchos forrados anti-roce",
    ],
  },
  {
    id: "flux-tee",
    name: "Flux Training Tee",
    tagline: "Barrera de sudor de 18 min",
    category: "hombre",
    categoryLabel: "Hombre · Training",
    price: 890,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-tee_bb785667.png",
    colors: [BLACK, CARBON, BONE],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    reviews: 891,
    description:
      "Corte slim con panel trasero de malla y tratamiento hidrófobo. Se siente ligero incluso cuando el entrenamiento ya pasó de la hora.",
    details: [
      "Tratamiento hidrófobo sin PFC",
      "Panel de malla en espalda y axilas",
      "Costuras planas flatlock",
      "Corte slim, talla recomendada la habitual",
    ],
  },
  {
    id: "sprint-7-short",
    name: "Sprint 7\" Short",
    tagline: "Ripstop ultraligero con bolsillo con cierre",
    category: "hombre",
    categoryLabel: "Hombre · Running",
    price: 1190,
    compareAt: 1390,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-shorts_500607a6.png",
    colors: [BLACK, CARBON],
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["XL"],
    rating: 4.8,
    reviews: 326,
    description:
      "Ripstop de 7 pulgadas con forro interior de compresión ligera. El corte inferior láser elimina cualquier roce en distancias largas.",
    details: [
      "Ripstop 4-way stretch de 92 g",
      "Forro interior de compresión ligera",
      "Bolsillo con cierre para llaves",
      "Cintura elástica con cordón interno",
    ],
  },
  {
    id: "windshield-pro",
    name: "Windshield Pro Shell",
    tagline: "Cortavientos empaquetable, 118 g",
    category: "hombre",
    categoryLabel: "Unisex · Outdoor",
    price: 2290,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-windbreaker_4f258a3a.png",
    badge: "Nuevo",
    colors: [BLACK, VOLT],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 142,
    description:
      "Nylon ripstop con membrana que corta el viento sin dejar de respirar. Se comprime en su propio bolsillo para llevarla siempre contigo.",
    details: [
      "Membrana cortavientos de 10 000 g/m²",
      "Se guarda en su bolsillo interno",
      "Capucha ajustable con cordón elástico",
      "Reflectivos 360° para entrenar de noche",
    ],
  },
  {
    id: "duffel-35",
    name: "Duffel 35L",
    tagline: "Bolsa de entrenamiento resistente al agua",
    category: "accesorios",
    categoryLabel: "Accesorios · Gear",
    price: 1690,
    compareAt: 1990,
    image: "https://cdn.enter.pro/resources/uid_100678664/veloz-duffel_9ce34b66.png",
    colors: [BLACK],
    sizes: ["35 L"],
    rating: 4.9,
    reviews: 208,
    description:
      "Coated de 900D resistente al agua con compartimento ventilado para calzado. La correa se convierte en mochila en dos movimientos.",
    details: [
      "Tejido coated 900D con TPU",
      "Compartimento ventilado para calzado",
      "Correa convertible mochila",
      "Base reforzada anti-desgarre",
    ],
  },
];
