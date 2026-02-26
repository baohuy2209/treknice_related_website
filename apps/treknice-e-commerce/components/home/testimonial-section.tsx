// components/TestimonialSection.tsx

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Tuấn",
    text: "Chiếc balo TrekNice mình dùng suốt chuyến trekking Tà Năng. Rất bền, chống nước tốt và đeo cực kỳ thoải mái.",
    rating: 5,
  },
  {
    name: "Trần Hoài Nam",
    text: "Khăn đa năng và đèn pin mình mua dùng trong chuyến đi Hà Giang. Nhỏ gọn nhưng cực kỳ hữu ích.",
    rating: 5,
  },
  {
    name: "Lê Phương Anh",
    text: "Quần áo outdoor mặc rất thoáng và linh hoạt. TrekNice thực sự phù hợp cho những chuyến đi dài ngày.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Khách Hàng Nói Gì Về TrekNice
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Được tin tưởng bởi cộng đồng yêu thích khám phá
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-emerald-500 text-emerald-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-700 leading-relaxed mb-6 italic">
                {t.text}
              </p>

              {/* Name */}
              <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
