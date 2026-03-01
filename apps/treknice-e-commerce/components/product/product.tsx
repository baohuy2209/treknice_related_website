"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/product/product-card";
import { SlidersHorizontal } from "lucide-react";
import { Product, ProductCategory } from "@/sanity.types";

type SortOption = "newest" | "price-asc" | "price-desc";
export interface ProductsProps {
  listProducts: Product[];
  listProductCategories: ProductCategory[];
}
export default function Products({
  listProducts,
  listProductCategories,
}: ProductsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync URL when category changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategory === "All") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }

    router.push(`/products?${params.toString()}`);
  }, [selectedCategory]);

  const filtered = useMemo(() => {
    let result = [...listProducts];

    if (selectedCategory !== "All") {
      result = result.filter(
        (p: Product) => p.categories?.[0]?._ref === selectedCategory,
      );
    }

    result = result.filter(
      (p: Product) => p.price! >= priceRange[0] && p.price! <= priceRange[1],
    );

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price! - b.price!);
        break;
      case "price-desc":
        result.sort((a, b) => b.price! - a.price!);
        break;
      default:
        result.sort(
          (a, b) =>
            new Date(b.publishedAt!).getTime() -
            new Date(a.publishedAt!).getTime(),
        );
    }

    return result;
  }, [selectedCategory, sortBy, priceRange, listProducts]);
  return (
    <main className="min-h-screen bg-[#f4f1ed]">
      {/* Header */}
      <section className="py-20 border-b border-[#e7e2dc] text-center px-6">
        <h1 className="text-4xl font-serif text-[#2f2a25]">
          Sản phẩm TrekNice
        </h1>
        <p className="mt-4 text-[#7a6f66] max-w-xl mx-auto">
          Trang bị đầy đủ cho hành trình khám phá của bạn.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {listProductCategories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setSelectedCategory(cat._id!)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  selectedCategory === cat._id!
                    ? "bg-[#4d7c5a] text-white"
                    : "bg-white border border-[#ded8d2] text-[#2f2a25] hover:bg-[#eae5df]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="sm:hidden flex items-center gap-2 text-[#7a6f66]"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 rounded-lg border border-[#ded8d2] bg-white text-sm"
            >
              <option value="newest">Mới nhất</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
            </select>
          </div>
        </div>

        {/* Price Filter */}
        <div className={`mb-10 ${filtersOpen ? "block" : "hidden sm:block"}`}>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#7a6f66]">Giá:</span>
            <span className="text-sm font-medium text-[#2f2a25]">
              {priceRange[0].toLocaleString("vi-VN")} VNĐ —{" "}
              {priceRange[1].toLocaleString("vi-VN")} VNĐ
            </span>
            <input
              type="range"
              min={0}
              max={500}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="flex-1 max-w-xs accent-[#4d7c5a]"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#7a6f66] text-lg">
              Không tìm thấy sản phẩm phù hợp.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
