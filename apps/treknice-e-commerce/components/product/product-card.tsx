// components/ProductCard.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/sanity.types";
import { urlFor } from "@/lib/sanity";
import React from "react";
import { getCategoryNameById } from "@/actions/productCategory";
interface ProductCardProps {
  product: Product;
}
export function isNewTag(publishedAt: string, days: number = 3): boolean {
  if (!publishedAt) return false;

  const publishedDate = new Date(publishedAt).getTime();
  const now = Date.now();

  const diffInDays = (now - publishedDate) / (1000 * 60 * 60 * 24);

  return diffInDays < days;
}
export function isBestSeller(
  sold: number | undefined,
  threshold: number = 100,
): boolean {
  if (!sold || sold <= 0) return false;
  return sold > threshold;
}
export function calculateDiscountPrice(
  originalPrice: number,
  discountPercent: number,
): number {
  if (originalPrice < 0) return 0;
  if (discountPercent <= 0) return originalPrice;
  if (discountPercent >= 100) return 0;

  const discountAmount = (originalPrice * discountPercent) / 100;
  return Math.round(originalPrice - discountAmount);
}
export default function ProductCard({ product }: ProductCardProps) {
  const [categoryProduct, setCategoryProduct] = React.useState("");
  React.useEffect(() => {
    getCategoryNameById(product.categories?.[0]?._ref).then((res) => {
      setCategoryProduct(res.title);
    });
  }, []);
  return (
    <Link
      href={`/products/${product._id}`}
      className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={urlFor(product.mainImage!).url()}
          alt={product.name! ?? "Tên sản phẩm"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge NEW */}
        {isNewTag(product._createdAt) && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
            Mới
          </span>
        )}

        {/* Badge Best Seller */}
        {isBestSeller(product.num_sold) && !isNewTag(product._createdAt) && (
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Bán chạy
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {product.categories?.[0]?._ref && (
          <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
            {categoryProduct}
          </p>
        )}

        <h3 className="text-lg font-semibold text-neutral-900 leading-tight">
          {product.name}
        </h3>

        <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
          {product.subDescription}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-neutral-900 font-semibold text-base">
            {calculateDiscountPrice(
              product.price!,
              product.discountPercents!,
            ).toLocaleString("vi-VN")}
            ₫
          </span>

          <span className="text-neutral-400 text-sm line-through">
            {product.price!.toLocaleString("vi-VN")}₫
          </span>
        </div>
      </div>
    </Link>
  );
}
