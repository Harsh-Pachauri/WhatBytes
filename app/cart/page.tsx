"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import { useCartHydrated } from "@/lib/hooks/useCartHydrated";
import { products } from "@/lib/data/products";
import CartItemRow from "@/components/cart/CartItemRow";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  const hydrated = useCartHydrated();
  const items = useCartStore((s) => s.items);
  const itemCount = useCartStore((s) => s.totalItems());
  const subtotal = useCartStore((s) => s.totalPrice(products));

  if (!hydrated) {
    return null;
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-3 px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Your cart is empty
        </h1>
        <p className="text-sm text-gray-500">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
        {items.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return (
            <CartItemRow key={item.productId} item={item} product={product} />
          );
        })}
      </div>
      <CartSummary itemCount={itemCount} subtotal={subtotal} />
    </main>
  );
}
