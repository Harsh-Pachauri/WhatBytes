"use client";

import { products } from "@/lib/data/products";
import { useProductFilters } from "@/lib/hooks/useProductFilters";

const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

export default function BrandFilter() {
  const { filters, toggleBrand } = useProductFilters();

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold text-gray-900">
        Brand
      </legend>
      <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
        {brands.map((brand) => (
          <label
            key={brand}
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="h-4 w-4 accent-blue-600"
            />
            {brand}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
