"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/contexts/cart-context";
import { Minus, Plus, ShoppingBag, Star, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
interface Props {
  params: { id: string };
}

export default function ProductDetail({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "specs" | "reviews"
  >("description");
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariants);
    toast.success(`${product.name} đã thêm vào giỏ hàng`);
  };

  const tabs = [
    { key: "description" as const, label: "Mô tả" },
    { key: "specs" as const, label: "Thông số" },
    { key: "reviews" as const, label: `Đánh giá (${product.reviews.length})` },
  ];

  return (
    <main className="min-h-screen bg-[#f4f1ed]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm text-[#7a6f66] hover:text-[#2f2a25] mb-10"
        >
          <ChevronLeft size={16} /> Quay lại cửa hàng
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Gallery */}
          <div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-white mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === i
                      ? "border-[#4d7c5a]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt="Treknice sản phẩm"
                    fill
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm uppercase tracking-wider text-[#7a6f66] mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl font-serif text-[#2f2a25] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-semibold text-[#2f2a25]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[#7a6f66] line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-[#7a6f66] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.map((variant) => (
              <div key={variant.type} className="mb-6">
                <label className="block mb-2 text-sm font-medium text-[#2f2a25]">
                  {variant.type}
                </label>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() =>
                        setSelectedVariants((prev) => ({
                          ...prev,
                          [variant.type]: opt,
                        }))
                      }
                      className={`px-4 py-2 rounded-full text-sm border transition ${
                        selectedVariants[variant.type] === opt
                          ? "border-[#4d7c5a] bg-[#4d7c5a]/10 text-[#4d7c5a]"
                          : "border-[#ded8d2] hover:border-[#4d7c5a]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block mb-2 text-sm font-medium text-[#2f2a25]">
                Số lượng
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-[#ded8d2] flex items-center justify-center"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-medium w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-[#ded8d2] flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-full bg-[#4d7c5a] hover:bg-[#3f654a] text-white flex items-center justify-center gap-2 text-lg transition"
            >
              <ShoppingBag size={20} />
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20">
          <div className="border-b border-[#ded8d2] flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "border-b-2 border-[#4d7c5a] text-[#2f2a25]"
                    : "text-[#7a6f66]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-2xl">
            {activeTab === "description" && (
              <p className="text-[#7a6f66]">{product.details}</p>
            )}

            {activeTab === "specs" && (
              <p className="text-[#7a6f66]">{product.ingredients}</p>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {product.reviews.map((review, i) => (
                  <div key={i} className="border-b border-[#ded8d2] pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-[#2f2a25]">
                        {review.name}
                      </span>
                      <span className="text-xs text-[#7a6f66]">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-[#7a6f66]">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
