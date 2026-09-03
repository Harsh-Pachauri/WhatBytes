import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/lib/data/products";
import ImageGallery from "@/components/product-detail/ImageGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        aria-label="Back to product listing"
        className="mb-6 inline-flex text-[#002A59] transition-opacity hover:opacity-70"
      >
        <ArrowLeft size={22} />
      </Link>
      <div className="flex flex-col gap-8 lg:flex-row">
        <ImageGallery product={product} />
        <ProductInfo product={product} />
      </div>
    </main>
  );
}
