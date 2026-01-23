"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { BlurPanel } from "./blur-panel";
import { AnimatedText } from "./animated-text";
import { subscribeToNewsletter } from "@/actions/newsletter";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email);
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      subscribeToNewsletter(email).then(async (data) => {
        if (data.success) {
          setIsSubmitted(true);
          setIsValid(true);
        } else {
          setIsSubmitted(false);
          setError(data.message);
        }
      });
    } else {
      setIsValid(false);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white/40 backdrop-blur-md grain-texture">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <BlurPanel className="p-8 lg:p-12 bg-white/40 backdrop-blur-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 ">
                  <AnimatedText text="Luôn đồng hành " delay={0.2} />
                  <span className="italic font-light whitespace-nowrap">
                    <AnimatedText text="trong mọi chuyến đi." delay={0.5} />
                  </span>
                </h2>
                <p className="text-lg text-neutral-600">
                  Nhận thông tin sớm nhất về phụ kiện đi phượt, trekking hay
                  kinh nghiệm đi phượt, các sự kiện thú vị của TrekNice
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-neutral-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsValid(true);
                      }}
                      placeholder="Nhập email của bạn"
                      className={`w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 ${
                        !isValid
                          ? "border-red-300 focus:ring-red-500"
                          : "border-neutral-200"
                      }`}
                    />
                  </div>
                  {error && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {error}
                    </motion.p>
                  )}
                  {!isValid && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Vui lòng nhập đúng định dạng email
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-4 rounded-full font-medium hover:bg-neutral-800 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Đăng ký nhận thông báo
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Chào mừng bạn đến với TrekNice
                  </h3>
                  <p className="text-neutral-600"></p>
                </motion.div>
              )}

              <p className="text-xs text-neutral-500 text-center mt-6">
                Chúng tôi tôn trọng quyền riêng tư của bạn. Bạn có thể hủy đăng
                ký bất cứ lúc nào. Xem{" "}
                <a
                  href="#"
                  className="underline hover:text-neutral-700 transition-colors whitespace-nowrap"
                >
                  Chính sách bảo mật
                </a>
                .
              </p>
            </BlurPanel>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
