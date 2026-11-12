import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { FREE_SHIPPING_THRESHOLD } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export const CartDrawer = () => {
  const { lines, isOpen, closeCart, itemCount, subtotal, removeLine, setQuantity } = useCart();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeCart]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleCheckout = () => {
    toast("Falta conectar el cobro", {
      description: "Pídele a Enter: «activa pagos con Stripe» y este botón cobrará de verdad.",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Carrito">
          <motion.button
            type="button"
            aria-label="Cerrar carrito"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={closeCart}
            className="absolute inset-0 h-full w-full cursor-default bg-background/70 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.65, 0, 0.35, 1] }}
            className="absolute right-0 top-0 flex h-full w-[min(28rem,92vw)] flex-col border-l border-border bg-card shadow-lg"
          >
            <header className="flex items-center justify-between border-b border-border px-5 py-5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-4 w-4 text-primary" />
                <h2 className="label-eyebrow text-foreground">
                  Tu carrito
                  <span className="ml-2 text-muted-foreground">{itemCount} artículos</span>
                </h2>
              </div>
              <Button variant="ghost" size="icon" aria-label="Cerrar carrito" onClick={closeCart}>
                <X />
              </Button>
            </header>

            {lines.length > 0 && (
              <div className="border-b border-border px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="label-eyebrow flex items-center gap-2 text-muted-foreground">
                    <Truck className="h-3.5 w-3.5 text-primary" />
                    {remaining > 0 ? `Faltan ${formatPrice(remaining)} para envío gratis` : "Envío gratis desbloqueado"}
                  </p>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={cn("h-full rounded-full", remaining > 0 ? "bg-primary" : "bg-gradient-volt")}
                  />
                </div>
              </div>
            )}

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-muted">
                  <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                </span>
                <div>
                  <p className="font-display text-xl uppercase tracking-[-0.01em] text-foreground">
                    Carrito vacío
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Explora la colección y arma tu equipo de entrenamiento.
                  </p>
                </div>
                <Button variant="outline" onClick={closeCart} asChild>
                  <a href="#coleccion">Explorar colección</a>
                </Button>
              </div>
            ) : (
              <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
                {lines.map((line) => (
                  <li key={line.key} className="flex gap-4 py-5">
                    <div className="h-20 w-16 shrink-0 overflow-hidden rounded-sm border border-border bg-muted">
                      <img
                        src={line.product.image}
                        alt={line.product.name}
                        crossOrigin="anonymous"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-foreground">
                            {line.product.name}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Talla {line.size} · {line.color.name}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Quitar ${line.product.name}`}
                          onClick={() => removeLine(line.key)}
                          className="text-muted-foreground transition-colors duration-150 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                        <div className="inline-flex items-center rounded-sm border border-border">
                          <button
                            type="button"
                            aria-label="Quitar una unidad"
                            onClick={() => setQuantity(line.key, line.quantity - 1)}
                            className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold tabular-nums text-foreground">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Añadir una unidad"
                            onClick={() => setQuantity(line.key, line.quantity + 1)}
                            className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-display text-base tracking-[-0.01em] text-foreground">
                          {formatPrice(line.product.price * line.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {lines.length > 0 && (
              <footer className="border-t border-border px-5 py-5">
                <div className="flex items-center justify-between">
                  <span className="label-eyebrow text-muted-foreground">Subtotal</span>
                  <span className="font-display text-2xl tracking-[-0.01em] text-foreground">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Impuestos incluidos. Envío calculado en el siguiente paso.
                </p>
                <Button size="lg" className="mt-5 w-full" onClick={handleCheckout}>
                  Finalizar compra
                </Button>
                <Button variant="ghost" size="sm" className="mt-2 w-full" onClick={closeCart}>
                  Seguir comprando
                </Button>
                <p className="mt-4 flex items-center justify-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Pago seguro · Devoluciones 30 días
                </p>
              </footer>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
