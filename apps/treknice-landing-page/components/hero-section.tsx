"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Link, PackageCheck, Rocket, ShieldCheck } from "lucide-react"; // Added PackageCheck, Rocket, and ShieldCheck icon imports
import { Reveal } from "./reveal";
import { BlurPanel } from "./blur-panel";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]); // Reduced hero image shrink from 15% to 5%
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const AnimatedText = ({
    text,
    delay = 0,
  }: {
    text: string;
    delay?: number;
  }) => {
    return (
      <span className="leading-tight">
        {text.split(" ").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {char}&nbsp;
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image with Cinematic Effects */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {/* https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u3195299943_une_vue_sur_lespace_toil_--ar_11_--sref_httpss.mj_f1cd1575-c301-46fa-8b30-665ae1ab22a0_3_bloom_subtle_6x.png-EslKdscYhdWOUeP4RBajclEejxh8iO.jpeg */}
        <Image
          src="/hero-section/image1.jpg"
          alt="TRekNice Brand"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white">
          <Reveal>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-6">
              <AnimatedText text="Sống chậm giữa núi rừng" delay={0.5} />
              <br />
              <span className="italic font-light">
                <AnimatedText
                  text="Trekking và khám phá thiên nhiên"
                  delay={1.1}
                />
              </span>
            </h1>
          </Reveal>
          {/* <Reveal
            delay={0.4}
            className="flex gap-4 justify-center items-center"
          >
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-black rounded-full hover:bg-black/80 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Link href="/products">Xem Sản Phẩm</Link>
            </motion.button>
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-black rounded-full hover:bg-black/80 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Link href="/products">Mua Sắm Ngay</Link>
            </motion.button>
          </Reveal> */}
          <Reveal delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              Thoát khỏi nhịp sống đô thị, hòa mình vào rừng núi và không gian
              xanh bất tận.
            </motion.p>
          </Reveal>
        </div>
      </motion.div>

      {/* Info Strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <BlurPanel className="mx-6 mb-6 px-6 py-4 bg-black/24 backdrop-blur-md border-white/20">
          <div className="flex items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-green-400" />
              <span className="text-sm">Miễn phí Ship</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Giao hàng trong 2-3 ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Bảo hành uy tín</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  );
}
