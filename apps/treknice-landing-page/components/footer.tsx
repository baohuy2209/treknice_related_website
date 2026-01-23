"use client";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Facebook,
  ArrowUpRight,
  TicketCheckIcon,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { name: "Sản phẩm mới", href: "#" },
      { name: "Trang bị trekking", href: "#" },
      { name: "Đồ đi phượt", href: "#" },
      { name: "Đồng hành cùng bạn", href: "#" },
      { name: "Kinh nghiệm đi phượt", href: "#" },
    ],
    Company: [
      { name: "Về TREKNICE", href: "#" },
      { name: "Triết lý trekking", href: "#" },
      { name: "Bền vững & thiên nhiên", href: "#" },
      { name: "Báo chí & truyền thông", href: "#" },
    ],
    Support: [
      { name: "Liên hệ", href: "#" },
      { name: "Hướng dẫn chọn trang bị", href: "#" },
      { name: "Kinh nghiệm trekking", href: "#" },
      { name: "Vận chuyển", href: "#" },
      { name: "Đổi trả", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={18} />, href: "#" },
    {
      name: "Tiktok",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          width={18}
          height={18}
        >
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.77 4.793 4.793 0 0 1-1.163-3.13h-3.213v13.11a2.5 2.5 0 1 1-2.5-2.5c.23 0 .451.03.663.084V9.15a5.713 5.713 0 0 0-.663-.039 5.713 5.713 0 1 0 5.713 5.713V7.777a8.004 8.004 0 0 0 4.933 1.707V6.686z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      href: "https://www.facebook.com/profile.php?id=61586961535731",
    },
  ];

  return (
    <footer className="py-6 px-4 bg-white/2 border-t border-white/2">
      <div className="container-custom py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                TREKNICE
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                TREKNICE – Trang bị cho trekking và đi phượt, được thiết kế để
                đồng hành cùng bạn trên mọi cung đường.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-900 mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group flex items-center"
                        >
                          {link.name}
                          <ArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 pb-4 border-t border-neutral-200 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-neutral-500 text-center">
            <p>&copy; {currentYear} TrekNice. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-neutral-700 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-neutral-700 transition-colors">
                Điều khoản dịch vụ
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
