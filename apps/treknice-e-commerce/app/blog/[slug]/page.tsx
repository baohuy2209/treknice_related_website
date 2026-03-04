import { getPostBySlug } from "@/actions/post";
import BlogDetail from "@/components/blog/blog-detail";

async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return <BlogDetail post={post} />;
}
export default BlogDetailPage;
