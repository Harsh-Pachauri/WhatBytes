import FilterSidebar from "@/components/filters/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import EmptyState from "@/components/products/EmptyState";
import { products } from "@/lib/data/products";
import { filterProducts, parseFilters } from "@/lib/utils/filterProducts";

interface HomeProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Home({ searchParams }: HomeProps) {
  const rawParams = await searchParams;
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(rawParams)) {
    if (Array.isArray(value)) {
      value.forEach((v) => usp.append(key, v));
    } else if (value !== undefined) {
      usp.set(key, value);
    }
  }

  const filters = parseFilters(usp);
  const filtered = filterProducts(products, filters);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 bg-[#F9FBFF] px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
      <FilterSidebar />
      <div className="min-w-0 flex-1">
        <h1 className="mb-6 text-3xl font-bold text-[#002A59]">
          Product Listing
        </h1>
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  );
}
