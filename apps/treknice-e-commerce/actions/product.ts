"use server";
import { client } from "@/lib/sanity";
export async function getAllProducts() {
  const products = await client.fetch(`*[_type == "product"]`);
  return products;
}

export const searchProducts = async (searchQuery: string) => {
  const query = `*[_type == "product" && (
    title match "*" + ${searchQuery} + "*" ||
    description match "*" + ${searchQuery} + "*" ||
    category->title match "*" + ${searchQuery} + "*" ||
    category->slug.current match "*" + ${searchQuery} + "*"
  )]`;

  const products = await client.fetch(query);
  return products;
};

export const getProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == "${id}"][0]`;
  const product = await client.fetch(query);
  return product;
};

export const getTopSellingProducts = async () => {
  const query = `
    *[_type == "product"]
      | order(num_sold desc)
      [0...3]
  `;
  return await client.fetch(query);
};
