import { PackageSearch } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white py-20 text-center shadow-sm">
      <PackageSearch size={40} className="text-gray-300" />
      <h3 className="text-lg font-semibold text-gray-900">
        No products found
      </h3>
      <p className="max-w-sm text-sm text-gray-500">
        Try adjusting your filters or search term to find what you&apos;re
        looking for.
      </p>
    </div>
  );
}
