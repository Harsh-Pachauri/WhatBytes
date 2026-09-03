"use client";

import { useSyncExternalStore } from "react";
import { useCartStore } from "@/lib/store/cartStore";

function subscribeHydration(callback: () => void) {
  const unsubHydrate = useCartStore.persist.onHydrate(callback);
  const unsubFinish = useCartStore.persist.onFinishHydration(callback);
  return () => {
    unsubHydrate();
    unsubFinish();
  };
}

function getHydrated() {
  return useCartStore.persist.hasHydrated();
}

function getServerHydrated() {
  return false;
}

export default function CartBadge() {
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    getHydrated,
    getServerHydrated,
  );
  const count = useCartStore((s) => s.totalItems());

  if (!hydrated || count <= 0) return null;

  return (
    <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
      {count}
    </span>
  );
}
