// components/BestSellers.tsx

import Link from "next/link";
import ProductCard from "@/components/product/product-card";
import { Product } from "@/sanity.types";

export default function BestSellers({ products }: { products: Product[] }) {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Sản Phẩm Bán Chạy
            </h2>
            <p className="mt-4 text-neutral-600 text-lg">
              Được cộng đồng TrekNice tin dùng trên mọi hành trình
            </p>
          </div>

          <Link
            href="/products"
            className="hidden sm:inline-block text-sm font-semibold text-emerald-600 hover:text-black transition uppercase tracking-wider"
          >
            Xem tất cả →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-block border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full font-medium hover:bg-emerald-600 hover:text-white transition"
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
