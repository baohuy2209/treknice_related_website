// components/Hero.tsx

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/hero-section.jpg"
          alt="TrekNice - Phụ kiện Trekking chất lượng"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sống Nice, Trek Mai
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
          Chuẩn bị gọn nhẹ cho mọi chuyến đi – từ trekking rừng núi, cắm trại
          cuối tuần đến roadtrip ngẫu hứng. TrekNice mang đến phụ kiện đủ bền –
          đủ tiện – đủ đẹp, giúp bạn tự tin trải nghiệm và lưu giữ trọn vẹn vibe
          chuyến đi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition duration-300"
          >
            Khám Phá Sản Phẩm
          </Link>

          <Link
            href="/about"
            className="border border-white/60 text-white px-8 py-3 rounded-full font-medium transition duration-300 hover:bg-white hover:text-black"
          >
            Câu Chuyện TrekNice
          </Link>
        </div>
      </div>
    </section>
  );
}
