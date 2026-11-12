import { createContext, useContext } from "react";
import type { Product, ProductColor } from "@/data/products";

export interface CartLine {
  key: string;
  product: Product;
  size: string;
  color: ProductColor;
  quantity: number;
}

export interface CartContextValue {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addLine: (product: Product, size: string, color: ProductColor) => void;
  removeLine: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
};
