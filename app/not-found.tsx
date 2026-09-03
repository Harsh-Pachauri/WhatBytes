import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
      <p className="text-sm text-gray-500">
        We couldn&apos;t find the product you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Back to shopping
      </Link>
    </main>
  );
}
