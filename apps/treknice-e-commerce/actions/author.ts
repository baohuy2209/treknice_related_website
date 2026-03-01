"use server";
import { client } from "@/lib/sanity";
export const getAuthorById = async (id: string) => {
  const query = `*[_type == "author" && _id == "${id}"][0]`;
  const author = await client.fetch(query);
  return author;
};
