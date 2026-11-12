import { useState } from "react";
import { Plus, Eye } from "lucide-react";
import { StarRating } from "@/components/site/star-rating";
import { discountPercent, formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Product, ProductColor } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAdd: (product: Product, size: string, color: ProductColor) => void;
}

const availableSizes = (product: Product) =>
  product.sizes.filter((size) => !product.soldOutSizes?.includes(size));

export const ProductCard = ({ product, onQuickView, onAdd }: ProductCardProps) => {
  const [color, setColor] = useState<ProductColor>(product.colors[0]);
  const discount = discountPercent(product.price, product.compareAt);
  const firstSize = availableSizes(product)[0];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-hairline transition-[transform,box-shadow,border-color] duration-300 ease-out-quint hover:-translate-y-1 hover:border-foreground/25 hover:shadow-md">
      <button
        type="button"
        onClick={() => onQuickView(product)}
        aria-label={`Ver ${product.name}`}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          crossOrigin="anonymous"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out-quint group-hover:scale-[1.05]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/5 to-transparent opacity-0 transition-opacity duration-300 ease-standard group-hover:opacity-100"
        />

        {product.badge && (
          <span
            className={cn(
              "label-eyebrow absolute left-3 top-3 inline-flex items-center rounded-xs border px-2.5 py-1.5",
              product.badge.startsWith("-")
                ? "border-primary/50 bg-background/85 text-primary backdrop-blur-sm"
                : "border-transparent bg-primary text-primary-foreground",
            )}
          >
            {product.badge}
          </span>
        )}

        <span
          aria-hidden="true"
          className="label-eyebrow absolute bottom-3 left-3 right-3 inline-flex translate-y-3 items-center justify-center gap-2 rounded-sm border border-foreground/20 bg-background/85 px-4 py-3 text-foreground opacity-0 backdrop-blur-md transition-[transform,opacity] duration-300 ease-out-quint group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye className="h-3.5 w-3.5" />
          Vista rápida
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4">
        <p className="label-eyebrow truncate text-muted-foreground">
          {product.categoryLabel.split(" · ")[0]}
        </p>
        <h3 className="mt-2.5 text-[0.95rem] font-semibold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{product.tagline}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div className="flex items-center gap-1.5" role="group" aria-label="Colores disponibles">
            {product.colors.map((option) => (
              <button
                key={option.name}
                type="button"
                aria-label={option.name}
                aria-pressed={option.name === color.name}
                onClick={() => setColor(option)}
                style={{ backgroundColor: option.hex }}
                className={cn(
                  "h-4 w-4 rounded-full border border-border transition-[box-shadow,transform] duration-150 ease-standard hover:scale-110",
                  option.name === color.name &&
                    "ring-2 ring-ring ring-offset-2 ring-offset-card",
                )}
              />
            ))}
          </div>
          <StarRating rating={product.rating} />
        </div>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-border/70 pt-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg leading-none tracking-[-0.01em] text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.compareAt && (
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </div>
            <p className="mt-1.5 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground sm:text-[0.68rem] sm:tracking-[0.14em]">
              {discount > 0 ? `Ahorras ${discount}%` : `${product.reviews} reseñas`}
            </p>
          </div>

          <button
            type="button"
            aria-label={`Añadir ${product.name} al carrito`}
            onClick={() => firstSize && onAdd(product, firstSize, color)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-secondary text-secondary-foreground transition-[background-color,color,border-color,transform] duration-150 ease-standard hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
