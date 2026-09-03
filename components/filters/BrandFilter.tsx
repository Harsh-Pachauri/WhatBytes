"use client";

import { products } from "@/lib/data/products";
import { useProductFilters } from "@/lib/hooks/useProductFilters";

const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

export default function BrandFilter() {
  const { filters, toggleBrand } = useProductFilters();

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
              checked={filters.brands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="h-4 w-4 accent-white"
            />
            {brand}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
