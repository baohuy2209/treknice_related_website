"use client";
import { getAuthorById } from "@/actions/author";
import { urlFor } from "@/lib/sanity";
import { Post } from "@/sanity.types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ErrorAlert } from "../alert-error";
import { getCategoryPostNameById } from "@/actions/postCategory";
type BlogCardProps = {
  post: Post;
};

function BlogCard({ post }: BlogCardProps) {
  const [author, setAuthor] = React.useState("");
  const [categoryBlog, setCategoryBlog] = React.useState("");
  const [error, setError] = React.useState("");
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
  return (
    <Link key={post._id} href={`/blog/${post._id}`} className="group">
      <div className="rounded-2xl overflow-hidden aspect-3/2 mb-4 bg-white">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title ?? "Nội dung bài viết"}
            width={500}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>

      <p className="text-xs uppercase tracking-wider font-medium text-[#4d7c5a] mb-2">
        {categoryBlog}
      </p>

      <h3 className="text-xl font-semibold text-[#2f2a25] group-hover:text-[#4d7c5a] transition leading-tight mb-2">
        {post.title}
      </h3>

      <p className="text-sm text-[#7a6f66] line-clamp-2">
        {post.subDescription}
      </p>

      <div className="flex items-center gap-2 mt-3 text-xs text-[#7a6f66]">
        <span>{author}</span>
        <span>·</span>
        <span>{post.timeRead} phút</span>
      </div>
      {error && <ErrorAlert title="Lỗi tải dữ liệu" description={error} />}
    </Link>
  );
}

export default BlogCard;
