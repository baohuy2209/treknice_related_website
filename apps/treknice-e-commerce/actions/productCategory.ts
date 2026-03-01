"use server";
import { client } from "@/lib/sanity";
export async function getAllProductCategories() {
  try {
    const productCategories = await client.fetch(
      `*[_type == "productCategory"]`,
    );
    return productCategories;
  } catch (e) {
    console.log(e);
  }
}

export const getCategoryBySlug = async (slug: string) => {
  const query = `*[_type == "productCategory" && slug.current == ${slug}][0]`;
  const category = await client.fetch(query);
  return category;
};

export const getCategoryNameById = async (id?: string) => {
  if (!id) return null;

  const query = `
    *[_type == "productCategory" && _id == $id][0]{
      _id,
      title,
      slug
    }
  `;

  return await client.fetch(query, { id });
};
