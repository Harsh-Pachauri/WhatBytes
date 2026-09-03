"use client";

import { useSyncExternalStore } from "react";
import { useCartStore } from "../store/cartStore";

function subscribe(callback: () => void) {
  const unsubHydrate = useCartStore.persist.onHydrate(callback);
  const unsubFinish = useCartStore.persist.onFinishHydration(callback);
  return () => {
    unsubHydrate();
    unsubFinish();
  };
}

function getSnapshot() {
  return useCartStore.persist.hasHydrated();
}

function getServerSnapshot() {
  return false;
}

export function useCartHydrated() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
