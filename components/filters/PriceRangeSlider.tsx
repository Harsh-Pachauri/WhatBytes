"use client";

import { useState } from "react";
import { useProductFilters } from "@/lib/hooks/useProductFilters";
import {
  DEFAULT_MAX_PRICE,
  DEFAULT_MIN_PRICE,
} from "@/lib/utils/filterProducts";

const thumbClass =
  "pointer-events-none absolute inset-0 w-full appearance-none bg-transparent " +
  "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 " +
  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white " +
  "[&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer " +
  "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 " +
  "[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 " +
  "[&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:cursor-pointer";

export default function PriceRangeSlider() {
  const { filters, setPrice } = useProductFilters();
  const [range, setRange] = useState({
    min: filters.priceMin,
    max: filters.priceMax,
  });
  const [prevFilters, setPrevFilters] = useState(filters);

  if (
    filters.priceMin !== prevFilters.priceMin ||
    filters.priceMax !== prevFilters.priceMax
  ) {
    setPrevFilters(filters);
    setRange({ min: filters.priceMin, max: filters.priceMax });
  }

  const span = DEFAULT_MAX_PRICE - DEFAULT_MIN_PRICE;
  const minPct = ((range.min - DEFAULT_MIN_PRICE) / span) * 100;
  const maxPct = ((range.max - DEFAULT_MIN_PRICE) / span) * 100;
  const minNearMax = range.max - range.min < span * 0.05;

  const commit = (next: { min: number; max: number }) =>
    setPrice(next.min, next.max);

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">Price</h3>
      <div className="relative h-4 w-full">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-white/30" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-white"
          style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
        />
        <input
          type="range"
          min={DEFAULT_MIN_PRICE}
          max={DEFAULT_MAX_PRICE}
          step={10}
          value={range.min}
          onChange={(e) => {
            const next = {
              ...range,
              min: Math.min(Number(e.target.value), range.max),
            };
            setRange(next);
          }}
          onMouseUp={() => commit(range)}
          onTouchEnd={() => commit(range)}
          onKeyUp={() => commit(range)}
          className={`${thumbClass} ${minNearMax ? "z-20" : "z-10"}`}
          aria-label="Minimum price"
        />
        <input
          type="range"
          min={DEFAULT_MIN_PRICE}
          max={DEFAULT_MAX_PRICE}
          step={10}
          value={range.max}
          onChange={(e) => {
            const next = {
              ...range,
              max: Math.max(Number(e.target.value), range.min),
            };
            setRange(next);
          }}
          onMouseUp={() => commit(range)}
          onTouchEnd={() => commit(range)}
          onKeyUp={() => commit(range)}
          className={`${thumbClass} z-10`}
          aria-label="Maximum price"
        />
      </div>
      <div className="mt-1 flex justify-between text-xs text-blue-100">
        <span>{range.min}</span>
        <span>{range.max}</span>
      </div>
    </div>
  );
}
