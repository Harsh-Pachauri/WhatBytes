import FilterSidebar from "@/components/filters/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/lib/data/products";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
      <FilterSidebar />
      <div className="min-w-0 flex-1">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
