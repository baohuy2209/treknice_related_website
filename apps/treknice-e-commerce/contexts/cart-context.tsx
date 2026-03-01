"use client";
import { Product, SizeProductVariant } from "@/sanity.types";
import React, { createContext, useContext, useState, useCallback } from "react";

export interface CartItem {
  product: Omit<Product, "sizes"> & {
    sizes: SizeProductVariant[];
  } | Product;
  quantity: number;
  colorSelectedVariants?: Record<string, string>;
  sizeSelectedVariants?: Record<string, string>;
}

interface CartContextType {
  items: CartItem[];
  addItem: (
    product: Omit<Product, "sizes"> & {
      sizes: SizeProductVariant[];
    } | Product,
    quantity: number,
    variants: Record<string, string>,
  ) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback(
    (
      product: Omit<Product, "sizes"> & {
        sizes: SizeProductVariant[];
      } | Product,
      quantity: number,
      variants: Record<string, string>,
    ) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.product._id === product._id);
        if (existing) {
          return prev.map((i) =>
            i.product._id === product._id
              ? {
                  ...i,
                  quantity: i.quantity + quantity,
                  selectedVariants: variants,
                }
              : i,
          );
        }
        return [...prev, { product, quantity, selectedVariants: variants }];
      });
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product._id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.product._id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product._id === productId ? { ...i, quantity } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price! * i.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
