import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";
export default function Blog() {
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
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="rounded-2xl overflow-hidden aspect-3/2 mb-4 bg-white">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <p className="text-xs uppercase tracking-wider font-medium text-[#4d7c5a] mb-2">
                {post.category}
              </p>

              <h3 className="text-xl font-semibold text-[#2f2a25] group-hover:text-[#4d7c5a] transition leading-tight mb-2">
                {post.title}
              </h3>

              <p className="text-sm text-[#7a6f66] line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 mt-3 text-xs text-[#7a6f66]">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
