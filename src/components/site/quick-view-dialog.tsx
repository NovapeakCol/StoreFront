import { useEffect, useState } from "react";
import { Check, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/site/star-rating";
import { discountPercent, formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Product, ProductColor } from "@/data/products";

interface QuickViewDialogProps {
  product: Product | null;
  onClose: () => void;
  onAdd: (product: Product, size: string, color: ProductColor) => void;
}

const PERKS = [
  { icon: Truck, label: "Envío gratis desde $2,500" },
  { icon: RotateCcw, label: "Devolución en 30 días" },
  { icon: ShieldCheck, label: "Garantía de por vida" },
];

export const QuickViewDialog = ({ product, onClose, onAdd }: QuickViewDialogProps) => {
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<ProductColor | null>(null);

  useEffect(() => {
    if (!product) return;
    setColor(product.colors[0]);
    setSize(product.sizes.find((option) => !product.soldOutSizes?.includes(option)) ?? "");
  }, [product]);

  const discount = product ? discountPercent(product.price, product.compareAt) : 0;

  return (
    <Dialog open={Boolean(product)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[92vh] max-w-4xl gap-0 overflow-hidden border-border bg-card p-0 sm:rounded-sm">
        {product && (
          <div className="grid max-h-[92vh] grid-cols-1 overflow-y-auto md:grid-cols-2 md:overflow-hidden">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted md:h-full md:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                crossOrigin="anonymous"
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="label-eyebrow absolute left-4 top-4 rounded-xs border border-primary/50 bg-background/85 px-2.5 py-1.5 text-primary backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col overflow-y-auto p-6 md:p-8">
              <p className="label-eyebrow text-muted-foreground">{product.categoryLabel}</p>
              <DialogTitle className="mt-3 font-display text-2xl uppercase leading-[0.95] tracking-[-0.01em] text-foreground md:text-3xl">
                {product.name}
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-muted-foreground">
                {product.tagline}
              </DialogDescription>

              <StarRating
                rating={product.rating}
                reviews={product.reviews}
                showValue
                className="mt-4"
              />

              <div className="mt-5 flex items-end gap-3">
                <span className="font-display text-3xl leading-none tracking-[-0.01em] text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.compareAt && (
                  <span className="pb-0.5 text-sm text-muted-foreground line-through">
                    {formatPrice(product.compareAt)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="label-eyebrow rounded-xs bg-primary px-2 py-1 text-primary-foreground">
                    -{discount}%
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <p className="label-eyebrow text-foreground">Color</p>
                  <p className="label-eyebrow text-muted-foreground">{color?.name}</p>
                </div>
                <div className="mt-3 flex items-center gap-2.5">
                  {product.colors.map((option) => (
                    <button
                      key={option.name}
                      type="button"
                      aria-label={option.name}
                      aria-pressed={color?.name === option.name}
                      onClick={() => setColor(option)}
                      style={{ backgroundColor: option.hex }}
                      className={cn(
                        "h-8 w-8 rounded-full border border-border transition-transform duration-150 ease-standard hover:scale-105",
                        color?.name === option.name && "ring-2 ring-ring ring-offset-2 ring-offset-card",
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <p className="label-eyebrow text-foreground">Talla</p>
                  <button type="button" className="label-eyebrow text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground">
                    Guía de tallas
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {product.sizes.map((option) => {
                    const soldOut = product.soldOutSizes?.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={soldOut}
                        aria-pressed={size === option}
                        onClick={() => setSize(option)}
                        className={cn(
                          "label-eyebrow h-11 rounded-sm border transition-[background-color,color,border-color] duration-150 ease-standard",
                          soldOut &&
                            "cursor-not-allowed border-border/60 text-muted-foreground/40 line-through",
                          !soldOut &&
                            size === option &&
                            "border-transparent bg-primary text-primary-foreground",
                          !soldOut &&
                            size !== option &&
                            "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground",
                        )}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button
                size="lg"
                className="mt-7 w-full"
                disabled={!size || !color}
                onClick={() => color && onAdd(product, size, color)}
              >
                Añadir al carrito · {formatPrice(product.price)}
              </Button>

              <ul className="mt-6 grid gap-3 border-t border-border pt-6">
                {product.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 grid gap-2 border-t border-border pt-6">
                {PERKS.map((perk) => (
                  <li key={perk.label} className="flex items-center gap-3 text-xs text-muted-foreground">
                    <perk.icon className="h-4 w-4 text-primary" />
                    {perk.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
