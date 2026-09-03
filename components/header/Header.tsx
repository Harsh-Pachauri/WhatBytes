import { Suspense } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import CartBadge from "./CartBadge";

export default function Header() {
  return (
    <header className="bg-[#0858A8] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Logo
        </Link>

        <div className="order-3 w-full sm:order-2 sm:w-auto sm:flex-1">
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>

        <div className="order-2 ml-auto flex items-center gap-3 sm:order-3 sm:ml-0">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-md bg-[#002A59] px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <CartBadge />
          </Link>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#002A59]">
            <User size={18} />
          </span>
        </div>
      </div>
    </header>
  );
}
