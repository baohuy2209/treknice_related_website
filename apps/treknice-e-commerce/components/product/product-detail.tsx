"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { Minus, Plus, ShoppingBag, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { Product, SizeProductVariant } from "@/sanity.types";
import { urlFor } from "@/lib/sanity";
import { getCategoryNameById } from "@/actions/productCategory";
import { calculateDiscountPrice } from "./product-card";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import type {
  PortableTextComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import type { TypedObject } from "sanity";
import { Button } from "@/components/ui/button";
type SanityImageValue = {
  asset?: {
    _ref?: string;
  };
  alt?: string;
};
type SanityTableRow = {
  _key?: string;
  cells: string[];
};

type SanityTableValue = {
  rows: SanityTableRow[];
};
type SanityLinkValue = TypedObject & {
  _type: "link";
  href?: string;
};
export interface safeProduct {
  product: Omit<Product, "sizes"> & {
    sizes: SizeProductVariant[];
  };
}
export interface ProductDetailProps {
  product: Omit<Product, "sizes"> & {
    sizes: SizeProductVariant[];
  } | Product;
}
export const components: PortableTextComponents = {
  types: {
    image: ({ value }: PortableTextTypeComponentProps<SanityImageValue>) => {
      const { asset, alt } = value;

      if (!asset?._ref) return null;

      return (
        <figure className="my-3 flex items-center justify-center flex-col gap-2">
          <Image
            src={urlFor(value).width(800).fit("max").auto("format").url()}
            alt={alt ?? "Blog image"}
            width={800}
            height={450}
            className="rounded-xl"
          />

          {alt && (
            <figcaption className="mt-2 text-sm text-center text-gray-500">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },

    table: ({ value }: PortableTextTypeComponentProps<SanityTableValue>) => {
      const { rows } = value;

      if (!rows || rows.length === 0) return null;

      const [header, ...body] = rows;

      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                {header.cells.map((cell, index) => (
                  <th
                    key={index}
                    className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {body.map((row, rowIndex) => (
                <tr
                  key={row._key ?? rowIndex}
                  className="odd:bg-white even:bg-gray-50"
                >
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-200 px-4 py-3 text-sm text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },

  /* ================= MARKS ================= */
  marks: {
    link: ({
      value,
      children,
    }: PortableTextMarkComponentProps<SanityLinkValue>) => {
      const href = value?.href;
      if (!href) return <>{children}</>;

      const isExternal = href.startsWith("http");

      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="
            text-[#4d7c5a]
            font-medium
            underline
            underline-offset-4
            hover:text-[#3f654a]
            transition
          "
        >
          {children}
        </Link>
      );
    },
  },

  /* ================= BLOCK ================= */
  block: {
    h1: ({ children }) => {
      const id =
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined;

      return (
        <h1 className="text-3xl font-bold" id={id}>
          {children}
        </h1>
      );
    },

    h2: ({ children }) => {
      const id =
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined;

      return (
        <h2 className="text-2xl font-bold" id={id}>
          {children}
        </h2>
      );
    },

    h3: ({ children }) => {
      const id =
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined;

      return (
        <h3 className="text-xl font-bold" id={id}>
          {children}
        </h3>
      );
    },

    h4: ({ children }) => {
      const id =
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined;

      return (
        <h4 className="text-lg font-bold" id={id}>
          {children}
        </h4>
      );
    },
  },

  /* ================= LIST ================= */
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="text-base leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-base leading-relaxed">{children}</li>
    ),
  },
};
export default function ProductDetail({ product }: ProductDetailProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const listImage = [
    ...(product.mainImage ? [product.mainImage] : []),
    ...(product.otherImages ?? []),
  ];
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "warranty" | "swap"
  >("description");
  const [categoryProduct, setCategoryProduct] = useState("");

  const [colorSelectedVariants, setColorSelectedVariants] = useState<
    Record<string, string>
  >({});
  const [sizeSelectedVariants, setSizeSelectedVariants] = useState<
    Record<string, string>
  >({});

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product, quantity, colorSelectedVariants, sizeSelectedVariants);
    toast.success(`${product.name} đã thêm vào giỏ hàng`);
  };

  const tabs = [
    { key: "description" as const, label: "Mô tả sản phẩm" },
    { key: "warranty" as const, label: "Bảo hành" },
    { key: "swap" as const, label: "Đổi trả" },
  ];

  React.useEffect(() => {
    getCategoryNameById(product.categories?.[0]?._ref).then((res) => {
      setCategoryProduct(res.title);
    });
  }, [product.categories]);
  React.useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setDragConstraint(containerWidth - trackWidth);
      }
    };
    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);

    return () => window.removeEventListener("resize", calculateConstraints);
  });
  return (
    <main className="min-h-screen bg-[#f4f1ed]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm text-[#7a6f66] hover:text-[#2f2a25] mb-10"
        >
          <ChevronLeft size={16} /> Quay lại cửa hàng
        </Link>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Gallery */}
          <div className="w-full">
            <div className="w-full relative rounded-2xl overflow-hidden aspect-square bg-white mb-4">
              {product.mainImage && (
                <Image
                  src={urlFor(listImage[selectedImage]).url()}
                  alt={product.name!}
                  fill
                  className="aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
            </div>
            <motion.div
              ref={containerRef}
              className="relative overflow-hidden cursor-grab"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                ref={trackRef}
                className="flex space-x-2 px-4 relative overflow-x-auto overflow-y-hidden scrollbar-hide w-max"
                drag="x"
                dragConstraints={{
                  right: 0,
                  left: dragConstraint - 32,
                }}
                dragElastic={15}
                dragSnapToOrigin={false}
              >
                {listImage.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 aspect-square rounded-lg overflow-x-hidden border-2 transition ${
                      selectedImage === i
                        ? "border-[#4d7c5a]"
                        : "border-transparent"
                    }`}
                  >
                    {listImage[i] && (
                      <Image
                        src={urlFor(img).url()}
                        alt="Treknice sản phẩm"
                        fill
                        className="object-cover"
                      />
                    )}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm uppercase tracking-wider text-[#7a6f66] mb-2">
              {categoryProduct}
            </p>

            <h1 className="text-4xl text-[#2f2a25] mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              {product.discountPercents !== 0 && product.price ? (
                <span className="text-2xl font-semibold text-[#2f2a25]">
                  {calculateDiscountPrice(
                    product.price,
                    product.discountPercents!,
                  ).toLocaleString("vi-VN")}{" "}
                  ₫
                </span>
              ) : (
                <span className="text-2xl font-semibold text-[#2f2a25]">
                  {product.price!.toLocaleString("vi-VN")}₫
                </span>
              )}
              {product.discountPercents !== 0 && (
                <span className="text-lg text-[#7a6f66] line-through">
                  {product.price!.toLocaleString("vi-VN")}₫
                </span>
              )}
            </div>

            <p className="text-[#7a6f66] leading-relaxed mb-8">
              {product.subDescription}
            </p>

            {product.colors && (
              <>
                <label className="block mb-2 text-sm font-medium text-[#2f2a25]">
                  Màu sắc
                </label>
                <div className="flex flex-row flex-wrap gap-2">
                  {product.colors!.map((color) => (
                    <div key={color._key} className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() =>
                            setColorSelectedVariants((prev) => ({
                              ...prev,
                              colors: color.colorHex!,
                            }))
                          }
                          className={`px-4 py-2 rounded-full text-sm border transition ${
                            colorSelectedVariants["colors"] === color.colorHex
                              ? "border-[#4d7c5a] bg-[#4d7c5a]/10 text-[#4d7c5a]"
                              : "border-[#ded8d2] hover:border-[#4d7c5a]"
                          }`}
                        >
                          {color.colors}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {product.sizes && (
              <>
                <label className="block mb-2 text-sm font-medium text-[#2f2a25]">
                  Kích cỡ
                </label>
                <div className="flex flex-row flex-wrap gap-2 mb-4">
                  {product.sizes!.map((size) => (
                    <button
                      key={size._id}
                      onClick={() =>
                        setSizeSelectedVariants((prev) => ({
                          ...prev,
                          sizes: size._id!,
                        }))
                      }
                      className={`px-4 py-2 rounded-full text-sm border transition ${
                        sizeSelectedVariants["sizes"] === size._id
                          ? "border-[#4d7c5a] bg-[#4d7c5a]/10 text-[#4d7c5a]"
                          : "border-[#ded8d2] hover:border-[#4d7c5a]"
                      }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block mb-2 text-sm font-medium text-[#2f2a25]">
                Số lượng
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-[#ded8d2] flex items-center justify-center"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-medium w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-[#ded8d2] flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-full bg-[#4d7c5a] hover:bg-[#3f654a] text-white flex items-center justify-center gap-2 text-lg transition"
            >
              <ShoppingBag size={20} />
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20">
          <div className="border-b border-[#ded8d2] flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "border-b-2 border-[#4d7c5a] text-[#2f2a25]"
                    : "text-[#7a6f66]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-8 w-full">
            {activeTab === "description" && (
              <div className="w-full flex flex-col gap-2 mt-4 mb-4">
                <PortableText
                  value={product.descriptionProduct || []}
                  components={components}
                />
              </div>
            )}

            {activeTab === "warranty" && (
              <div className="w-full flex flex-col gap-2 mt-4 mb-4">
                <PortableText
                  value={product.warrantyProduct || []}
                  components={components}
                />
              </div>
            )}

            {activeTab === "swap" && (
              <div className="w-full flex flex-col gap-2 mt-4 mb-4">
                <PortableText
                  value={product.swapProduct || []}
                  components={components}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
