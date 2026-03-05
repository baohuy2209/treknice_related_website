// components/FeaturedCollections.tsx

import Link from "next/link";
import Image from "next/image";
const collections = [
  {
    title: "Balo Trekking",
    description: "Bền bỉ cho mọi cung đường",
    image: "/collections/collection-backpack.png",
    link: "/products?category=91c4c41e-9f73-4bc0-8a79-c812a58dee10",
  },
  {
    title: "Mũ dã ngoại",
    description: "Nhỏ gọn – tiện lợi",
    image: "/collections/collection-hat.png",
    link: "/products?category=93ee324e-efe2-443c-94e6-eda17c5426cd",
  },
  {
    title: "Phụ kiện Trekking",
    description: "Trang bị đầy đủ cho hành trình",
    image: "/collections/collection-gear.png",
    link: "/products?category=93ee324e-efe2-443c-94e6-eda17c5426cd",
  },
  {
    title: "Áo khoác",
    description: "Thoải mái & linh hoạt",
    image: "/collections/collection-shirt.png",
    link: "/products?category=d102a4bd-473d-484a-8abd-d4419819d238",
  },
  {
    title: "Quần dã ngoại",
    description: "Thời trang & tiện lợi & phong cách",
    image: "/collections/collection-trouser.png",
    link: "/products?category=d102a4bd-473d-484a-8abd-d4419819d238",
  },
  {
    title: "Kính trekking",
    description: "Bảo vệ mắt khi di chuyển ngoài trời",
    image: "/collections/collection-glass.png",
    link: "/products?category=17a187b2-ac73-49ea-961a-37953048deab",
  },
  {
    title: "Găng tay trekking",
    description: "Tăng độ bám và bảo vệ tay",
    image: "/collections/collection-glove.png",
    link: "/products?category=09b9dec6-f6af-432e-9179-4570dbb047de",
  },
  {
    title: "Tất trekking",
    description: "Êm ái cho những chặng đường dài",
    image: "/collections/collection-tat.png",
    link: "/products?category=178358a7-cbe8-4c7d-a981-4e53cc58dd66",
  },
  {
    title: "Giày dép trekking",
    description: "Bám địa hình – vững bước hành trình",
    image: "/collections/collection-shoes.png",
    link: "/products?category=5b4f4aaa-21b1-44b6-ba9a-a00105a34a9c",
  },
  {
    title: "Túi dã ngoại",
    description: "Nhỏ gọn và tiện lợi cho mọi chuyến đi",
    image: "/collections/collection-bag.png",
    link: "/products?category=d089276b-8389-4c6d-af62-f99252aaf249",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.title}
              href={col.link}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="aspect-square object-contain transition-transform duration-700 group-hover:scale-110 w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition duration-300" />

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
