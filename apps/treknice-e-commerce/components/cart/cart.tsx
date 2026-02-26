"use client";

import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#f4f1ed] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <ShoppingBag size={48} className="mx-auto mb-6 text-[#7a6f66]" />
          <h1 className="text-3xl font-serif text-[#2f2a25] mb-4">
            Giỏ hàng trống
          </h1>
          <p className="text-[#7a6f66] mb-8">
            Trang bị phụ kiện cho chuyến đi tiếp theo của bạn cùng TrekNice.
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-3 rounded-full bg-[#4d7c5a] hover:bg-[#3f654a] text-white transition"
          >
            Khám phá sản phẩm
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f1ed]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-[#2f2a25] mb-10">
          Giỏ hàng của bạn
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-6 p-5 bg-white rounded-2xl"
              >
                <Link
                  href={`/products/${item.product.id}`}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0"
                >
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.product.id}`}
                    className="text-lg font-semibold text-[#2f2a25] hover:text-[#4d7c5a]"
                  >
                    {item.product.name}
                  </Link>

                  <p className="text-sm text-[#7a6f66] mt-1">
                    {item.product.shortDescription}
                  </p>

                  {/* Variants */}
                  {Object.entries(item.selectedVariants).length > 0 && (
                    <p className="text-xs text-[#7a6f66] mt-2">
                      {Object.entries(item.selectedVariants)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(" · ")}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-5">
                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full border border-[#ded8d2] flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full border border-[#ded8d2] flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-3 text-[#7a6f66] hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <span className="font-semibold text-[#2f2a25]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-8 h-fit sticky top-24">
            <h3 className="text-xl font-semibold text-[#2f2a25] mb-6">
              Tóm tắt đơn hàng
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-[#7a6f66]">
                <span>Tạm tính</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-[#7a6f66]">
                <span>Vận chuyển</span>
                <span>Miễn phí</span>
              </div>

              <div className="border-t border-[#e7e2dc] pt-4 flex justify-between text-[#2f2a25] font-semibold text-base">
                <span>Tổng cộng</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full text-center mt-8 py-4 rounded-full bg-[#4d7c5a] hover:bg-[#3f654a] text-white transition"
            >
              Thanh toán
            </Link>

            <Link
              href="/products"
              className="block text-center text-sm text-[#7a6f66] hover:text-[#2f2a25] mt-5"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
