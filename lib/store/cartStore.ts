import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "../types";

interface CartState {
  items: CartItem[];
  addItem: (productId: string, qty?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clear: () => void;
  totalItems: () => number;
  totalPrice: (catalog: Product[]) => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (productId, qty = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.productId === productId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === productId
                  ? { ...i, quantity: i.quantity + qty }
                  : i,
              ),
            };
          }
          return { items: [...state.items, { productId, quantity: qty }] };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        }));
      },

      updateQuantity: (productId, qty) => {
        if (qty <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity: qty } : i,
          ),
        }));
      },

      clear: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: (catalog) =>
        get().items.reduce((sum, i) => {
          const product = catalog.find((p) => p.id === i.productId);
          return product ? sum + product.price * i.quantity : sum;
        }, 0),
    }),
    {
      name: "whatbytes-cart-v1",
    },
  ),
);
