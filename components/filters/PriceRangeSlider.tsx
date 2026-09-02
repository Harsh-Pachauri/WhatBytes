"use client";

import { useState } from "react";

const MIN = 0;
const MAX = 1000;

export default function PriceRangeSlider() {
  const [value, setValue] = useState(MAX);

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">Price</h3>
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={10}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-blue-500"
      />
      <div className="mt-1 flex justify-between text-xs text-blue-200">
        <span>{MIN}</span>
        <span>{value}</span>
      </div>
    </div>
  );
}
