"use client";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="container-page section-padding text-center py-6">
        <ShoppingBag size={48} className="text-muted-foreground mx-auto mb-4" />
        <h1 className="heading-section text-foreground mb-4">
          Giỏ hàng bạn đang trống
        </h1>
        <p className="text-muted-foreground mb-8">
          Khám phá các sản phẩm, phụ kiện treking tại TrekNice
        </p>
        <Link href="/products" className="btn-primary inline-block">
          Mua sắm
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-8 sm:py-12">
        <h1 className="heading-display text-foreground mb-8">Giỏ hàng</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.product._id}
                className="flex gap-4 sm:gap-6 p-4 bg-card rounded-xl"
              >
                <Link
                  href={`/products/${item.product._id}`}
                  className="w-24 h-24 relative sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0"
                >
                  {item.product.mainImage && (
                    <Image
                      src={urlFor(item.product.mainImage).url()}
                      alt={item.product.name!}
                      fill
                      className="aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.product._id}`}
                    className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.product.subDescription}
                  </p>
                  {Object.entries(item.selectedVariants).length > 0 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {Object.entries(item.selectedVariants)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(" · ")}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product._id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product._id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.product._id)}
                        className="ml-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <span className="font-medium text-foreground">
                      {(item.product.price! * item.quantity).toLocaleString(
                        "vi-VN",
                      )}{" "}
                      VNĐ
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-card rounded-xl p-6 h-fit sticky top-24">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Thông tin đặt hàng
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Giá trị sản phẩm</span>
                <span>{totalPrice.toLocaleString("vi-VN")} VNĐ</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-foreground font-medium text-base">
                <span>Tổng tiền thanh toán</span>
                <span>{totalPrice.toLocaleString("vi-VN")} VNĐ</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="btn-primary w-full mt-6 inline-block text-center"
            >
              Thanh toán
            </Link>
            <Link
              href="/products"
              className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
