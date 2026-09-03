"use client";

import { useState } from "react";
import { useProductFilters } from "@/lib/hooks/useProductFilters";
import { DEFAULT_MAX_PRICE } from "@/lib/utils/filterProducts";

const MIN = 0;

export default function PriceRangeSlider() {
  const { filters, setPrice } = useProductFilters();
  const [value, setValue] = useState(filters.price);
  const [prevPrice, setPrevPrice] = useState(filters.price);

  if (filters.price !== prevPrice) {
    setPrevPrice(filters.price);
    setValue(filters.price);
  }

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">Price</h3>
      <input
        type="range"
        min={MIN}
        max={DEFAULT_MAX_PRICE}
        step={10}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        onMouseUp={() => setPrice(value)}
        onTouchEnd={() => setPrice(value)}
        onKeyUp={() => setPrice(value)}
        className="w-full accent-blue-500"
      />
      <div className="mt-1 flex justify-between text-xs text-blue-200">
        <span>{MIN}</span>
        <span>{value}</span>
      </div>
    </div>
  );
}
