"use server";
import { client } from "@/lib/sanity";

export async function getAllPosts() {
  const posts = await client.fetch(`*[_type == "post"]`);
  return posts;
}

export const getPostById = async (id: string) => {
  const query = `*[_type == "post" && _id == "${id}"][0]`;
  const post = await client.fetch(query);
  return post;
};

export const getPostBySlug = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const post = await client.fetch(query);
  return post;
};
