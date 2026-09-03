"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  onChange: (qty: number) => void;
  max?: number;
}

export default function QuantitySelector({
  value,
  onChange,
  max,
}: QuantitySelectorProps) {
  const update = (next: number) => {
    onChange(Math.max(1, max ? Math.min(next, max) : next));
  };

  return (
    <div className="inline-flex items-center rounded-lg border border-gray-300">
      <button
        type="button"
        onClick={() => update(value - 1)}
        className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-50"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        onClick={() => update(value + 1)}
        className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-50"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
