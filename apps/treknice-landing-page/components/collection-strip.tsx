"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./reveal";

const collections = [
  {
    id: "khan-da-nang",
    name: "Khăn đa năng",
    image: "/collection/khan-da-nang/khan-da-nang.png",
    count: "8 sản phẩm",
  },
  {
    id: "vo-trekking",
    name: "Vớ giữ ấm",
    image: "/collection/vo-trekking/vo-giu-am.png",
    count: "6 sản phẩm",
  },
  {
    id: "bao-tay",
    name: "Bao tay",
    image: "/collection/bao-tay/bao-tay.png",
    count: "4 sản phẩm",
  },
  {
    id: "gang-ong-tay",
    name: "Găng ống tay",
    image: "/collection/gang-ong-tay/gang-ong-tay.png",
    count: "5 sản phẩm",
  },
  {
    id: "khan-che-mat",
    name: "Khăn che mặt",
    image: "/collection/khan-che-mat/khan-che-mat.png",
    count: "7 sản phẩm",
  },
  {
    id: "balo",
    name: "Balo",
    image: "/collection/balo/balo.png",
    count: "3 sản phẩm",
  },
  {
    id: "ao-khoac",
    name: "Áo khoác",
    image: "/collection/ao-khoac/ao-khoac.png",
    count: "4 sản phẩm",
  },
  {
    id: "mu-chong-nang",
    name: "Mũ chống nắng",
    image: "/collection/mu-chong-nang/mu-chong-nang.png",
    count: "6 sản phẩm",
  },
  {
    id: "tui-mini",
    name: "Túi mini",
    image: "/collection/tui-mini/tui-mini.png",
    count: "5 sản phẩm",
  },
  {
    id: "ao-mua",
    name: "Áo mưa",
    image: "/collection/ao-mua/ao-mua.png",
    count: "8 sản phẩm",
  },
  {
    id: "binh-nuoc",
    name: "Bình nước",
    image: "/collection/binh-nuoc/binh-nuoc.jpg",
    count: "8 sản phẩm",
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
              className="flex-shrink-0 w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
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
