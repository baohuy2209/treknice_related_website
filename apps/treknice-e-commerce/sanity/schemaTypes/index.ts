import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { colorProductVariant, productType } from "./productType";
import { productCategoryType } from "./productCategoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    productType,
    productCategoryType,
    colorProductVariant,
  ],
};
export function formatVND(amount: number | string): string {
  if (amount === null || amount === undefined || amount === "") return "0 ₫";

  const value = typeof amount === "string" ? Number(amount) : amount;

  if (isNaN(value)) return "0 ₫";

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);
}
