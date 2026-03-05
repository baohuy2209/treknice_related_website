"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const materials = [
  {
    id: "forest-trail",
    name: "Forest Trail", // shortened from "Pistachio Green"
    description:
      "Forest Trail được thiết kế cho trekking rừng, phượt đường mòn và những chuyến đi dài ngày giữa thiên nhiên. Chất liệu thoáng khí, nhẹ và bền, phù hợp với môi trường ẩm, địa hình tự nhiên và nhịp di chuyển liên tục.",
    image: "/materials/trekking-forest.jpg",
    backgroundImage: "/materials/trekking-forest.jpg",
    tint: "bg-green-50",
    keyword: [
      "trekking rừng",
      "đi phượt rừng",
      "phượt đường mòn",
      "đồ trekking đi phượt",
      "du lịch khám phá thiên nhiên",
    ],
  },
  {
    id: "alpine-ridge",
    name: "Alpine Ridge", // shortened from "Lunar Gray"
    description:
      "Alpine Ridge dành cho trekking núi cao và những chuyến phượt địa hình trong điều kiện lạnh và gió mạnh. Chất liệu giữ nhiệt, cản gió tốt nhưng vẫn gọn nhẹ, phù hợp cho leo núi, phượt đèo và di chuyển ban đêm.",
    image: "/materials/alpine-ridge.jpg",
    backgroundImage: "/materials/alpine-ridge.jpg",
    tint: "bg-gray-100",
    keyword: [
      "trekking núi cao",
      "đi phượt đèo núi",
      "phượt địa hình",
      "trekking lạnh",
      "đồ phượt núi",
    ],
  },
  {
    id: "desert-route",
    name: "Desert Route", // shortened from "Martian Red"
    description:
      "Desert Route được phát triển cho những chuyến phượt đường dài và trekking trong điều kiện khắc nghiệt. Chất liệu chịu nhiệt, siêu bền, phù hợp với nắng gắt, địa hình khô hạn và những hành trình thử thách giới hạn bản thân.",
    image: "/materials/desert-route.jpg",
    backgroundImage: "/materials/desert-route.jpg",
    tint: "bg-red-50",
    keyword: [
      "đi phượt đường dài",
      "trekking khắc nghiệt",
      "phượt nắng nóng",
      "đồ trekking chịu nhiệt",
      "phượt mạo hiểm",
    ],
  },
];

export function MaterialsSection() {
  const [activeMaterial, setActiveMaterial] = useState("forest-trail");

  const activeMaterialData =
    materials.find((m) => m.id === activeMaterial) || materials[0];

  const AnimatedText = ({
    text,
    delay = 0,
  }: {
    text: string;
    delay?: number;
  }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="materials"
    >
      <div className="absolute inset-0 z-0">
        {materials.map((material) => (
          <motion.div
            key={material.id}
            className="absolute inset-0"
            initial={{ opacity: material.id === activeMaterial ? 1 : 0 }}
            animate={{ opacity: material.id === activeMaterial ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={material.backgroundImage || "/materials/trekking-forest.jpg"}
              alt={`${material.name} interior scene`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute top-30 left-0 right-0 z-10">
        <div className="container-custom text-white">
          <Reveal>
            <div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeMaterial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-bold mb-6 text-7xl"
                >
                  <AnimatedText text={activeMaterialData.name} delay={0.2} />
                </motion.h2>
              </AnimatePresence>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                Mỗi hành trình trekking bắt đầu từ những trang bị dã ngoại chất
                lượng, được lựa chọn kỹ lưỡng với độ bền cao, trọng lượng nhẹ và
                thân thiện với môi trường. Sản phẩm của chúng tôi được thiết kế
                dành cho người yêu trekking, đi phượt và khám phá thiên nhiên,
                đảm bảo hiệu suất và sự an tâm trên mọi cung đường.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-10 max-w-md hidden">
        <Reveal delay={0.3}>
          <blockquote className="pl-0 py-4">
            <p className="text-xl text-white leading-relaxed italic lg:text-base font-medium">
              "Chúng tôi tin vào việc tạo ra những trang bị trekking vượt thời
              gian — càng sử dụng lâu càng bền bỉ, gắn liền với từng hành trình
              đi phượt, lưu giữ dấu ấn và kỷ niệm trên mọi cung đường khám phá."
            </p>
            <footer className="mt-4 text-sm text-white/70">— TrekNice</footer>
          </blockquote>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {materials.map((material) => (
                <motion.button
                  key={material.id}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md",
                    activeMaterial === material.id
                      ? "bg-white text-neutral-900"
                      : "bg-white/20 text-white hover:bg-white/30",
                  )}
                  onClick={() => setActiveMaterial(material.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {material.name}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
