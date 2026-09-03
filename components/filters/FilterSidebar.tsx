import { Suspense } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import BrandFilter from "./BrandFilter";

export default function FilterSidebar() {
  return (
    <aside className="w-full shrink-0 rounded-xl bg-blue-900 p-5 text-white lg:w-64">
      <h2 className="mb-5 text-lg font-bold">Filters</h2>
      <Suspense fallback={null}>
        <div className="space-y-6">
          <CategoryFilter />
          <PriceRangeSlider />
          <BrandFilter />
        </div>
      </Suspense>
    </aside>
  );
}
