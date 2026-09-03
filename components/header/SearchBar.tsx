"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useProductFilters } from "@/lib/hooks/useProductFilters";

export default function SearchBar() {
  const { filters, setSearch } = useProductFilters();
  const [value, setValue] = useState(filters.q);
  const [prevQ, setPrevQ] = useState(filters.q);

  if (filters.q !== prevQ) {
    setPrevQ(filters.q);
    setValue(filters.q);
  }

  useEffect(() => {
    const id = setTimeout(() => {
      if (value !== filters.q) setSearch(value);
    }, 300);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="group relative w-full">
      <Search
        size={18}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-white/80 group-focus-within:text-gray-400"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for products..."
        className="w-full rounded-md border border-white/30 bg-white/10 py-2 pr-4 pl-10 text-sm text-white placeholder:text-white/70 focus:border-transparent focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
}
