"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ max }: { max?: number }) {
  const [qty, setQty] = useState(1);

  const update = (next: number) => {
    setQty(Math.max(1, max ? Math.min(next, max) : next));
  };

  return (
    <div className="inline-flex items-center rounded-lg border border-gray-300">
      <button
        type="button"
        onClick={() => update(qty - 1)}
        className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-50"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="w-10 text-center text-sm font-medium">{qty}</span>
      <button
        type="button"
        onClick={() => update(qty + 1)}
        className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-50"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
