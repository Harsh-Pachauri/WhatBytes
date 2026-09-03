"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  DEFAULT_MAX_PRICE,
  DEFAULT_MIN_PRICE,
  parseFilters,
} from "../utils/filterProducts";

export function useProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(() => parseFilters(searchParams), [searchParams]);

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  const setCategory = useCallback(
    (category: string) =>
      setParam("category", category === "all" ? null : category),
    [setParam],
  );

  const setPrice = useCallback(
    (min: number, max: number) =>
      setParam(
        "price",
        min <= DEFAULT_MIN_PRICE && max >= DEFAULT_MAX_PRICE
          ? null
          : `${min}-${max}`,
      ),
    [setParam],
  );

  const setSearch = useCallback((q: string) => setParam("q", q), [setParam]);

  const toggleBrand = useCallback(
    (brand: string) => {
      const next = filters.brands.includes(brand)
        ? filters.brands.filter((b) => b !== brand)
        : [...filters.brands, brand];
      setParam("brand", next.length ? next.join(",") : null);
    },
    [filters.brands, setParam],
  );

  return { filters, setCategory, setPrice, setSearch, toggleBrand };
}
