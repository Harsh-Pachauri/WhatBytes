"use client";

import { useState } from "react";
import { useProductFilters } from "@/lib/hooks/useProductFilters";
import {
  DEFAULT_MAX_PRICE,
  DEFAULT_MIN_PRICE,
} from "@/lib/utils/filterProducts";

export default function PriceMaxInput() {
  const { filters, setPrice } = useProductFilters();
  const [value, setValue] = useState(String(filters.priceMax));
  const [prevMax, setPrevMax] = useState(filters.priceMax);

  if (filters.priceMax !== prevMax) {
    setPrevMax(filters.priceMax);
    setValue(String(filters.priceMax));
  }

  const commit = () => {
    const parsed = Number(value);
    const max = Number.isFinite(parsed)
      ? Math.min(Math.max(parsed, DEFAULT_MIN_PRICE), DEFAULT_MAX_PRICE)
      : DEFAULT_MAX_PRICE;
    const min = Math.min(filters.priceMin, max);
    setValue(String(max));
    setPrice(min, max);
  };

  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-gray-900">Price</p>
      <input
        type="number"
        min={DEFAULT_MIN_PRICE}
        max={DEFAULT_MAX_PRICE}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.currentTarget.blur();
          }
        }}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
