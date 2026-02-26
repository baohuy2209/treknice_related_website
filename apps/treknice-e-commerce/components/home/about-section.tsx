// components/AboutSection.tsx

import Image from "next/image";
import { Mountain, Compass, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Mountain,
    title: "Bền bỉ",
    desc: "Thiết kế chắc chắn, chịu được mọi điều kiện khắc nghiệt.",
  },
  {
    icon: Compass,
    title: "Sẵn sàng khám phá",
    desc: "Trang bị đầy đủ cho mọi hành trình – từ rừng sâu đến đỉnh núi.",
  },
  {
    icon: ShieldCheck,
    title: "An toàn & tin cậy",
    desc: "Chất lượng được kiểm định kỹ lưỡng trước khi đến tay bạn.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hình ảnh */}
          <div className="relative rounded-2xl overflow-hidden aspect-4/3">
            <Image
              src="/assets/about-story.jpg"
              alt="Hành trình khám phá cùng TrekNice"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Nội dung */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Đồng Hành Cùng Bạn Trên Mọi Cung Đường
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
              TrekNice ra đời với mong muốn mang đến những phụ kiện đi phượt
              chất lượng, bền bỉ và thực sự hữu ích. Chúng tôi tin rằng mỗi
              chuyến đi là một hành trình khám phá bản thân, và bạn xứng đáng
              được trang bị những sản phẩm đáng tin cậy nhất.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.title} className="text-center sm:text-left">
                  <v.icon
                    size={32}
                    className="text-emerald-600 mx-auto sm:mx-0 mb-4"
                  />
                  <h4 className="text-lg font-semibold text-neutral-900">
                    {v.title}
                  </h4>
                  <p className="text-sm text-neutral-600 mt-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
