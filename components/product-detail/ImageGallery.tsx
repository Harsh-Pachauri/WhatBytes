import Image from "next/image";
import { Product } from "@/lib/types";

export default function ImageGallery({ product }: { product: Product }) {
  return (
    <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-white shadow-sm lg:w-[26rem]">
      <Image
        src={product.image}
        alt={product.title}
        fill
        sizes="(min-width: 1024px) 26rem, 100vw"
        className="object-contain p-10"
        priority
      />
    </div>
  );
}
