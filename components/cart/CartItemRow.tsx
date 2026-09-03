"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem, Product } from "@/lib/types";
import { useCartStore } from "@/lib/store/cartStore";

export default function CartItemRow({
  item,
  product,
}: {
  item: CartItem;
  product: Product;
}) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
      <Link
        href={`/product/${product.id}`}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-50"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="80px"
          className="object-contain p-2"
        />
      </Link>

      <div className="min-w-[140px] flex-1">
        <Link
          href={`/product/${product.id}`}
          className="font-medium text-gray-900 hover:underline"
        >
          {product.title}
        </Link>
        <p className="text-sm text-gray-500">${product.price}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="inline-flex items-center rounded-lg border border-gray-300">
          <button
            type="button"
            onClick={() => updateQuantity(product.id, item.quantity - 1)}
            className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-50"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(product.id, item.quantity + 1)}
            className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-50"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>

        <p className="w-16 shrink-0 text-right font-semibold text-gray-900">
          ${(product.price * item.quantity).toFixed(2)}
        </p>

        <button
          type="button"
          onClick={() => removeItem(product.id)}
          className="shrink-0 text-gray-400 transition-colors hover:text-red-500"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
