"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-[#f4f1ed] border-t border-[#e7e2dc]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-serif text-[#2f2a25] mb-4">
          Sẵn Sàng Cho Hành Trình Mới?
        </h2>

        <p className="text-[#7a6f66] text-lg mb-10">
          Nhận thông tin sản phẩm mới, kinh nghiệm đi phượt và ưu đãi độc quyền
          từ TrekNice.
        </p>

        {submitted ? (
          <p className="text-[#4d7c5a] font-medium text-lg">
            🎒 Cảm ơn bạn đã đăng ký! Hẹn gặp bạn trên những cung đường mới.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="flex-1 px-5 py-3 rounded-lg bg-white border border-[#ded8d2] focus:outline-none focus:ring-1 focus:ring-[#4d7c5a]"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4d7c5a] hover:bg-[#3f654a] text-white font-medium transition"
            >
              Đăng ký
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
