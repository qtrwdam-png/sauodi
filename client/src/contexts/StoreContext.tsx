/**
 * فلسفة الملف: سلوك تجارة إلكترونية واضح ومباشر، مع سلة سريعة ومحفوظة محلياً
 * دون إضافة أنماط تفاعل لا تنتمي إلى مرجع Masheed Gate.
 */

import type { Product } from "@/data/catalog";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  product: Product;
  quantity: number;
};

type StoreContextValue = {
  cart: CartItem[];
  cartCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

function readCart(): CartItem[] {
  try {
    const stored = localStorage.getItem("masheed_cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => readCart());

  useEffect(() => {
    localStorage.setItem("masheed_cart", JSON.stringify(cart));
  }, [cart]);

  const value = useMemo<StoreContextValue>(() => {
    const addToCart = (product: Product, quantity = 1) => {
      setCart((current) => {
        const existing = current.find((item) => item.product.id === product.id);
        if (existing) {
          return current.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + Math.max(1, quantity) }
              : item,
          );
        }
        return [...current, { product, quantity: Math.max(1, quantity) }];
      });
    };

    const removeFromCart = (productId: string) => {
      setCart((current) => current.filter((item) => item.product.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }
      setCart((current) =>
        current.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item,
        ),
      );
    };

    return {
      cart,
      cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart: () => setCart([]),
    };
  }, [cart]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}

