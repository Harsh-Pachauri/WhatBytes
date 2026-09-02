import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
      />
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full rounded-full bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
