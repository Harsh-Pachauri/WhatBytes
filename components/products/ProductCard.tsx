import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-6"
          />
        </div>
        <div className="flex flex-col gap-1 p-4 pb-0">
          <h3 className="font-medium text-gray-900">{product.title}</h3>
          {product.rating !== undefined && (
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.round(product.rating!)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }
                />
              ))}
            </div>
          )}
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
        </div>
      </Link>
      <div className="p-4 pt-3">
        <button
          type="button"
          className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
