"use client";
import { Post } from "@/sanity.types";
import BlogCard from "./blog-card";
export interface BlogInterface {
  listBlog: Post[];
}
export default function Blog({ listBlog }: BlogInterface) {
  return (
    <main className="min-h-screen bg-[#f4f1ed]">
      {/* Header */}
      <section className="py-20 border-b border-[#e7e2dc] text-center px-6">
        <h1 className="text-4xl font-serif text-[#2f2a25]">TrekNice Journal</h1>
        <p className="mt-4 text-[#7a6f66] max-w-xl mx-auto">
          Kinh nghiệm đi phượt, review phụ kiện và những câu chuyện trên hành
          trình khám phá.
        </p>
      </section>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listBlog.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
