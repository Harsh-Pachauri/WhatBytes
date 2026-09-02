"use client";

import { useState } from "react";
import { products } from "@/lib/data/products";

const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

export default function BrandFilter() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (brand: string) => {
    setSelected((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold">Brand</legend>
      <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
        {brands.map((brand) => (
          <label
            key={brand}
            className="flex cursor-pointer items-center gap-2 text-sm text-blue-100"
          >
            <input
              type="checkbox"
              checked={selected.includes(brand)}
              onChange={() => toggle(brand)}
              className="h-4 w-4 accent-white"
            />
            {brand}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
