"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useCartHydrated } from "@/lib/hooks/useCartHydrated";

export default function CartBadge() {
  const hydrated = useCartHydrated();
  const count = useCartStore((s) => s.totalItems());

  if (!hydrated || count <= 0) return null;

  return (
    <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
      {count}
    </span>
  );
}
