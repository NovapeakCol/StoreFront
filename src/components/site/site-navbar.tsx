import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, Truck, X } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Colección", href: "#coleccion" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Club", href: "#club" },
];

export const SiteNavbar = () => {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-primary px-4 py-2 text-primary-foreground">
        <Truck className="h-3.5 w-3.5 shrink-0" />
        <p className="label-eyebrow whitespace-nowrap text-[0.6rem] sm:text-[0.68rem]">
          Envío gratis desde $2,500
          <span className="hidden sm:inline"> · Entrega en 24 h</span>
        </p>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-[height,background-color,backdrop-filter,border-color] duration-300 ease-standard",
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-5 md:px-10">
          <div
            className={cn(
              "flex items-center transition-[height] duration-300 ease-standard",
              scrolled ? "h-14" : "h-[72px]",
            )}
          >
            <a href="#inicio" className="flex items-center" aria-label="Veloz, inicio">
              <BrandLogo className="text-[1.5rem] text-foreground" />
            </a>
          </div>

          <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative label-eyebrow text-muted-foreground transition-colors duration-150 ease-standard hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out-quint group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Buscar productos" className="hidden sm:inline-flex">
              <Search />
            </Button>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Abrir carrito, ${itemCount} artículos`}
              className="relative inline-flex h-10 items-center gap-2 rounded-sm px-3 text-muted-foreground transition-colors duration-150 ease-standard hover:bg-accent hover:text-foreground"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="label-eyebrow hidden sm:inline">Carrito</span>
              <motion.span
                key={itemCount}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 20 }}
                className={cn(
                  "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[0.65rem] font-semibold tabular-nums",
                  itemCount > 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground",
                )}
              >
                {itemCount}
              </motion.span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menú"
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-background/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.65, 0, 0.35, 1] }}
              className="absolute left-0 top-0 flex h-full w-[82vw] max-w-sm flex-col border-r border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <BrandLogo className="text-[1.35rem]" />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Cerrar menú"
                  onClick={() => setMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>
              <nav aria-label="Móvil" className="mt-10 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl uppercase tracking-[-0.01em] text-foreground transition-colors duration-150 hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto space-y-3">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setMenuOpen(false);
                    openCart();
                  }}
                >
                  Ver carrito
                </Button>
                <p className="label-eyebrow text-center text-muted-foreground">
                  México · MXN $ · Envío a todo LATAM
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
