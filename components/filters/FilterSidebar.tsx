import { Suspense } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import BrandFilter from "./BrandFilter";

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
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900">
                Price
              </p>
              <input
                type="number"
                defaultValue={5000}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </aside>
      </Suspense>
    </div>
  );
}
