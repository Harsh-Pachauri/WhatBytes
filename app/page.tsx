import FilterSidebar from "@/components/filters/FilterSidebar";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
      <FilterSidebar />
      <div className="flex flex-1 items-center justify-center text-gray-500">
        Product grid coming soon.
      </div>
    </main>
  );
}
