import { useCallback, useMemo, useState, type ReactNode } from "react";
import { CartContext, type CartLine } from "@/context/cart-context";
import type { Product, ProductColor } from "@/data/products";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addLine = useCallback(
    (product: Product, size: string, color: ProductColor) => {
      const key = `${product.id}-${size}-${color.name}`;
      setLines((current) => {
        const existing = current.find((line) => line.key === key);
        if (existing) {
          return current.map((line) =>
            line.key === key ? { ...line, quantity: line.quantity + 1 } : line,
          );
        }
        return [...current, { key, product, size, color, quantity: 1 }];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeLine = useCallback((key: string) => {
    setLines((current) => current.filter((line) => line.key !== key));
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setLines((current) =>
      quantity <= 0
        ? current.filter((line) => line.key !== key)
        : current.map((line) => (line.key === key ? { ...line, quantity } : line)),
    );
  }, []);

  const value = useMemo(() => {
    const itemCount = lines.reduce((total, line) => total + line.quantity, 0);
    const subtotal = lines.reduce(
      (total, line) => total + line.product.price * line.quantity,
      0,
    );
    return {
      lines,
      itemCount,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addLine,
      removeLine,
      setQuantity,
    };
  }, [lines, isOpen, openCart, closeCart, addLine, removeLine, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
