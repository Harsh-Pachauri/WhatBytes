"use client";

import { useProductFilters } from "@/lib/hooks/useProductFilters";

const categories = [
  { value: "all", label: "All" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "home", label: "Home" },
] as const;

export default function CategoryFilter() {
  const { filters, setCategory } = useProductFilters();

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold">Category</legend>
      <div className="space-y-2">
        {categories.map((c) => (
          <label
            key={c.value}
            className="flex cursor-pointer items-center gap-2 text-sm text-blue-100"
          >
            <input
              type="radio"
              name="category"
              value={c.value}
              checked={filters.category === c.value}
              onChange={() => setCategory(c.value)}
              className="h-4 w-4 accent-white"
            />
            {c.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
