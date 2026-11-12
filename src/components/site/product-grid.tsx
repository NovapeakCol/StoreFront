import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ProductCard } from "@/components/site/product-card";
import { CategoryFilter } from "@/components/site/category-filter";
import { QuickViewDialog } from "@/components/site/quick-view-dialog";
import { SectionHeading } from "@/components/site/section-heading";
import { CATEGORIES, PRODUCTS, type CategoryId, type Product, type ProductColor } from "@/data/products";
import { useCart } from "@/context/cart-context";

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export const ProductGrid = () => {
  const { addLine } = useCart();
  const [active, setActive] = useState<CategoryId>("todo");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const counts = useMemo(() => {
    return CATEGORIES.reduce(
      (accumulator, category) => ({
        ...accumulator,
        [category.id]:
          category.id === "todo"
            ? PRODUCTS.length
            : PRODUCTS.filter((product) => product.category === category.id).length,
      }),
      {} as Record<CategoryId, number>,
    );
  }, []);

  const visible = useMemo(
    () => (active === "todo" ? PRODUCTS : PRODUCTS.filter((product) => product.category === active)),
    [active],
  );

  const handleAdd = (product: Product, size: string, color: ProductColor) =>
    addLine(product, size, color);

  return (
    <section id="coleccion" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Colección 2026"
          title="Equipo para no negociar"
          description="Ocho piezas construidas con tejidos técnicos italianos y japoneses. Cada referencia se prueba 200 horas antes de entrar al catálogo."
          action={
            <p className="label-eyebrow shrink-0 text-muted-foreground">
              Mostrando <span className="text-foreground">{visible.length}</span> de {PRODUCTS.length}
            </p>
          }
        />
      </div>

      <div className="sticky top-14 z-30 mt-8 border-y border-border bg-background/90 py-3 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <CategoryFilter
            categories={CATEGORIES}
            active={active}
            counts={counts}
            onChange={setActive}
          />
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1400px] px-5 md:px-10">
        <motion.div
          key={active}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {visible.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard product={product} onQuickView={setQuickView} onAdd={handleAdd} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QuickViewDialog
        product={quickView}
        onClose={() => setQuickView(null)}
        onAdd={(product, size, color) => {
          handleAdd(product, size, color);
          setQuickView(null);
        }}
      />
    </section>
  );
};
