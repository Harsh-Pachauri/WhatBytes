import { Product, ProductFilters } from "../types";

export const DEFAULT_MIN_PRICE = 0;
export const DEFAULT_MAX_PRICE = 1000;

interface SearchParamsLike {
  get(key: string): string | null;
}

export function parseFilters(params: SearchParamsLike): ProductFilters {
  const category = params.get("category") ?? "all";

  const priceParam = params.get("price");
  let priceMin = DEFAULT_MIN_PRICE;
  let priceMax = DEFAULT_MAX_PRICE;
  if (priceParam) {
    const [minPart, maxPart] = priceParam.split("-");
    const parsedMin = Number(minPart);
    const parsedMax = Number(maxPart);
    if (Number.isFinite(parsedMin)) priceMin = parsedMin;
    if (Number.isFinite(parsedMax)) priceMax = parsedMax;
  }

  const q = params.get("q") ?? "";

  const brandParam = params.get("brand");
  const brands = brandParam ? brandParam.split(",").filter(Boolean) : [];

  return { category, priceMin, priceMax, q, brands };
}

export function filterProducts(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  const query = filters.q.trim().toLowerCase();

  return products.filter((p) => {
    if (filters.category !== "all" && p.category !== filters.category) {
      return false;
    }
    if (p.price < filters.priceMin || p.price > filters.priceMax) {
      return false;
    }
    if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
      return false;
    }
    if (query && !p.title.toLowerCase().includes(query)) {
      return false;
    }
    return true;
  });
}
