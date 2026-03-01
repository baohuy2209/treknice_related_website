"use server";
import { client } from "@/lib/sanity";
export async function getSizeById(id: string) {
  const size = await client.fetch(
    `*[_type == "sizeProductVariant" && _id == "${id}"][0]`,
  );
  return size;
}
