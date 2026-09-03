"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Product } from "@/lib/types";
import { useCartStore } from "@/lib/store/cartStore";
import QuantitySelector from "./QuantitySelector";

export default function ProductInfo({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    addItem(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-blue-600 capitalize">
          {product.category}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          {product.title}
        </h1>
        <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
      </div>

      {product.rating !== undefined && (
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.round(product.rating!)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }
            />
          ))}
          <span className="ml-1 text-sm text-gray-500">
            {product.rating.toFixed(1)} out of 5
          </span>
        </div>
      )}

      <p className="text-3xl font-bold text-gray-900">${product.price}</p>

      <p className="leading-relaxed text-gray-600">{product.description}</p>

      <div>
        <p className="mb-2 text-sm font-semibold text-gray-900">Quantity</p>
        <QuantitySelector value={qty} onChange={setQty} max={product.stock} />
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-2 w-full rounded-lg bg-[#005EB7] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
      >
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}
