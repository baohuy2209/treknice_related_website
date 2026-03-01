import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import {
  colorProductVariant,
  productType,
  sizeProductVariant,
} from "./productType";
import { productCategoryType } from "./productCategoryType";
import { order, orderItem, shippingAddress } from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    productType,
    productCategoryType,
    colorProductVariant,
    shippingAddress,
    orderItem,
    order,
    sizeProductVariant,
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
