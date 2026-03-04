"use client";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Post } from "@/sanity.types";
import React from "react";
import { getAuthorById } from "@/actions/author";
import { urlFor } from "@/lib/sanity";
import { ErrorAlert } from "../alert-error";
import { getCategoryPostNameById } from "@/actions/postCategory";
import { PortableText } from "next-sanity";
import { components } from "../product/product-detail";
export interface BlogDetailProps {
  post: Post;
}
export function formatDateVN(dateString: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}
const BlogDetail = ({ post }: BlogDetailProps) => {
  const [author, setAuthor] = React.useState("");
  const [error, setError] = React.useState("");
  const [categoryBlog, setCategoryBlog] = React.useState("");

  React.useEffect(() => {
    if (!post.author?._ref) {
      setError("Không tìm thấy tác giả");
      setAuthor("Không tác giả");
      return;
    }

    getAuthorById(post.author._ref).then((res) => {
      if (!res) {
        setError("Đang có lỗi từ phía server");
        setAuthor("Không tác giả");
      }
      setAuthor(res.name);
    });
    getCategoryPostNameById(post.categories![0]._ref).then((res) => {
      setCategoryBlog(res.title);
    });
  }, [post]);
  if (!post) {
    return (
      <main className="container-page section-padding text-center">
        <h1 className="heading-section text-foreground">
          Không tìm thấy bài viết nào
        </h1>
        <Link href="/blog" className="btn-primary inline-block mt-6">
          Quay trở lại danh mục bài viết
        </Link>
      </main>
    );
  }
  return (
    <main className="min-h-screen py-4">
      <div className="container-page py-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft size={16} /> Quay lại
        </Link>
      </div>

      <div className="container-page max-w-3xl mx-auto pb-16">
        <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">
          {categoryBlog}
        </p>
        <h1 className="heading-display text-foreground mb-6">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
          <span>{author}</span>
          <span>·</span>
          <span>{formatDateVN(post.publishedAt!)}</span>
          <span>·</span>
          <span>{post.timeRead} phút</span>
        </div>

        <div className="rounded-xl relative overflow-hidden aspect-video mb-4">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title ?? "Nội dung bài viết"}
              fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </div>
      </div>
      <div className="container-page max-w-3xl mx-auto mb-4">
        <PortableText value={post.body || []} components={components} />
      </div>
      {error && <ErrorAlert title="Lỗi tải dữ liệu" description={error} />}
    </main>
  );
};

export default BlogDetail;
