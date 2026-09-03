import { Suspense } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import CartBadge from "./CartBadge";

export default function Header() {
  return (
    <header className="bg-blue-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Whatbytes
        </Link>

        <div className="order-3 w-full sm:order-2 sm:w-auto sm:flex-1">
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>

        <div className="order-2 ml-auto flex items-center gap-3 sm:order-3 sm:ml-0">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full bg-blue-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-800"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <CartBadge count={0} />
          </Link>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900">
            <User size={18} />
          </span>
        </div>
      </div>
    </header>
  );
}
