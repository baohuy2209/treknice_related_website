// components/ProductCard.tsx

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge NEW */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
            Mới
          </span>
        )}

        {/* Badge Best Seller */}
        {product.isBestSeller && !product.isNew && (
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Bán chạy
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 leading-tight">
          {product.name}
        </h3>

        <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-neutral-900 font-semibold text-base">
            {product.price.toLocaleString("vi-VN")}₫
          </span>

          {product.originalPrice && (
            <span className="text-neutral-400 text-sm line-through">
              {product.originalPrice.toLocaleString("vi-VN")}₫
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
