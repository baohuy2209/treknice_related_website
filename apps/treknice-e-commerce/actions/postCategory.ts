"use server";
import { client } from "@/lib/sanity";
export const getCategoryPostNameById = async (id?: string) => {
  if (!id) return null;

  const query = `
    *[_type == "category" && _id == $id][0]{
      _id,
      title,
      slug
    }
  `;

  return await client.fetch(query, { id });
};
