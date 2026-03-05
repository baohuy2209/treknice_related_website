"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./reveal";

const collections = [
  {
    id: "balo",
    name: "Balo Trekking",
    image: "/collections/collection-backpack.png",
    count: "3 sản phẩm",
    link: "/products?category=91c4c41e-9f73-4bc0-8a79-c812a58dee10",
  },
  {
    id: "mu-chong-nang",
    name: "Mũ dã ngoại",
    image: "/collections/collection-hat.png",
    count: "6 sản phẩm",
    link: "/products?category=93ee324e-efe2-443c-94e6-eda17c5426cd",
  },
  {
    id: "phu-kien-trekking",
    name: "Phụ kiện Trekking",
    image: "/collections/collection-gear.png",
    count: "8 sản phẩm",
    link: "/products?category=93ee324e-efe2-443c-94e6-eda17c5426cd",
  },
  {
    id: "ao-khoac",
    name: "Áo khoác",
    image: "/collections/collection-shirt.png",
    count: "4 sản phẩm",
    link: "/products?category=d102a4bd-473d-484a-8abd-d4419819d238",
  },
  {
    id: "quan-trekking",
    name: "Quần dã ngoại",
    image: "/collections/collection-trouser.png",
    count: "4 sản phẩm",
    link: "/products?category=d102a4bd-473d-484a-8abd-d4419819d238",
  },
  {
    id: "kinh-trekking",
    name: "Kính trekking",
    image: "/collections/collection-glass.png",
    count: "3 sản phẩm",
    link: "/products?category=17a187b2-ac73-49ea-961a-37953048deab",
  },
  {
    id: "bao-tay",
    name: "Găng tay trekking",
    image: "/collections/collection-glove.png",
    count: "4 sản phẩm",
    link: "/products?category=09b9dec6-f6af-432e-9179-4570dbb047de",
  },
  {
    id: "vo-trekking",
    name: "Tất trekking",
    image: "/collections/collection-tat.png",
    count: "6 sản phẩm",
    link: "/products?category=178358a7-cbe8-4c7d-a981-4e53cc58dd66",
  },
  {
    id: "giay-trekking",
    name: "Giày dép trekking",
    image: "/collections/collection-shoes.png",
    count: "5 sản phẩm",
    link: "/products?category=5b4f4aaa-21b1-44b6-ba9a-a00105a34a9c",
  },
  {
    id: "tui-mini",
    name: "Túi dã ngoại",
    image: "/collections/collection-bag.png",
    count: "5 sản phẩm",
    link: "/products?category=d089276b-8389-4c6d-af62-f99252aaf249",
  },
];

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const itemWidth = 320; // 320px (w-80) + 32px gap = 352px per item
  const totalWidth = collections.length * (itemWidth + 32) - 32; // subtract last gap
  const containerWidth =
    typeof window !== "undefined" ? window.innerWidth : 1200;
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48); // add padding

  return (
    <section ref={containerRef} className="py-20 lg:py-32 overflow-hidden">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">
              Danh mục sản phẩm
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Khám phá các sản phẩm trekking chất lượng cao, thiết kế tối ưu cho
              leo núi, đi bộ đường dài và chinh phục thiên nhiên.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="shrink-0 w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold tracking-wider mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-sm opacity-90">{collection.count}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-neutral-500">
          ← Drag to explore collections →
        </p>
      </div>
    </section>
  );
}
