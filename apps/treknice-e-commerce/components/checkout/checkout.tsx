"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/cart-context";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  // ✅ Order success
  if (placed) {
    return (
      <main className="container-page section-padding text-center">
        <CheckCircle size={64} className="text-primary mx-auto mb-6" />
        <h1 className="heading-section text-foreground mb-4">
          Đặt hàng thành công!
        </h1>
        <p className="text-muted-foreground text-body-lg mb-8">
          Cảm ơn bạn đã mua hàng tại TrekNice. Chúng tôi sẽ gửi email xác nhận
          sớm nhất.
        </p>
        <Link href="/products" className="btn-primary inline-block">
          Tiếp tục mua sắm
        </Link>
      </main>
    );
  }

  // ✅ Empty cart
  if (items.length === 0) {
    return (
      <main className="container-page section-padding text-center">
        <h1 className="heading-section text-foreground mb-4">
          Chưa có sản phẩm để thanh toán
        </h1>
        <Link href="/products" className="btn-primary inline-block">
          Xem sản phẩm
        </Link>
      </main>
    );
  }

  const fields = [
    { name: "firstName", label: "Họ", type: "text", half: true },
    { name: "lastName", label: "Tên", type: "text", half: true },
    { name: "email", label: "Email", type: "email", half: false },
    { name: "phone", label: "Số điện thoại", type: "tel", half: false },
    { name: "address", label: "Địa chỉ", type: "text", half: false },
    { name: "city", label: "Thành phố", type: "text", half: true },
    { name: "state", label: "Tỉnh / Bang", type: "text", half: true },
    { name: "zip", label: "Mã bưu điện", type: "text", half: true },
    { name: "country", label: "Quốc gia", type: "text", half: true },
  ];

  return (
    <main className="min-h-screen">
      <div className="container-page py-8 sm:py-12">
        <h1 className="heading-display text-foreground mb-8">Thanh toán</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Shipping info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Thông tin giao hàng
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((f) => (
                <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-card rounded-xl p-6 h-fit sticky top-24">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Tóm tắt đơn hàng
            </h3>

            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.product._id}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="text-foreground">
                    ${(item.product.price! * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-3 flex justify-between text-foreground font-medium">
              <span>Tổng cộng</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button type="submit" className="btn-primary w-full mt-6">
              Đặt hàng
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
