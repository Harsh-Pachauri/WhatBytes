import { Suspense } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import BrandFilter from "./BrandFilter";
import PriceMaxInput from "./PriceMaxInput";

export default function FilterSidebar() {
  return (
    <div className="flex w-full shrink-0 flex-col gap-4 lg:w-64">
      <Suspense fallback={null}>
        <aside className="rounded-xl bg-[#0858A8] p-5 text-white">
          <h2 className="mb-5 text-lg font-bold">Filters</h2>
          <div className="space-y-6">
            <CategoryFilter />
            <PriceRangeSlider />
          </div>
        </aside>

        <aside className="rounded-xl bg-white p-5 shadow-sm">
          <div className="space-y-6">
            <BrandFilter />
            <PriceMaxInput />
          </div>
        </aside>
      </Suspense>
    </div>
  );
}
