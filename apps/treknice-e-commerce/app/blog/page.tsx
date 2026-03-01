import { getAllPosts } from "@/actions/post";
import Blog from "@/components/blog/blog";

async function BlogPage() {
  const listBlog = await getAllPosts();
  return <Blog listBlog={listBlog} />;
}

export default BlogPage;
