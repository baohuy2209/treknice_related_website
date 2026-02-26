// components/FeaturedCollections.tsx

import Link from "next/link";
import Image from "next/image";
const collections = [
  {
    title: "Balo Trekking",
    description: "Bền bỉ cho mọi cung đường",
    image: "/collections/collection-backpack.png",
    link: "/products?category=Balo",
  },
  {
    title: "Mũ dã ngoại",
    description: "Nhỏ gọn – tiện lợi",
    image: "/collections/collection-hat.png",
    link: "/products?category=Khan+da+nang",
  },
  {
    title: "Phụ Kiện Đi Phượt",
    description: "Trang bị đầy đủ cho hành trình",
    image: "/collections/collection-gear.png",
    link: "/products?category=Phu+kien",
  },
  {
    title: "Áo khoác",
    description: "Thoải mái & linh hoạt",
    image: "/collections/collection-shirt.png",
    link: "/products?category=Quan+ao",
  },
  {
    title: "Quần dã ngoại",
    description: "Thời trang & tiện lợi & phong cách",
    image: "/collections/collection-trouser.png",
    link: "/products?category=Quan+ao",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Danh Mục Nổi Bật
          </h2>
          <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
            Lựa chọn những sản phẩm thiết yếu giúp bạn tự tin chinh phục mọi
            hành trình
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <Link
              key={col.title}
              href={col.link}
              className="group relative overflow-hidden rounded-2xl aspect-4/5"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
                  {col.description}
                </p>
                <h3 className="text-2xl font-semibold">{col.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
