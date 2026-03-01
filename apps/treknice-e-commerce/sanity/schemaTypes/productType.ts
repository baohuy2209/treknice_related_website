import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { formatVND } from "./index";
export const colorProductVariant = defineType({
  name: "colorProductVariant",
  title: "Color Product Variant",
  type: "object",
  fields: [
    defineField({
      name: "colors",
      title: "Colors",
      type: "string",
    }),
    defineField({
      name: "colorHex",
      title: "Color Hex",
      type: "string",
    }),
  ],
});
export const sizeProductVariant = defineType({
  name: "sizeProductVariant",
  title: "Size Product Variant",
  type: "document",
  fields: [
    defineField({
      name: "size",
      title: "Size",
      type: "string",
    }),
  ],
});
export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "subDescription",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "num_inventory",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "views",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "num_sold",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "colors",
      type: "array",
      of: [
        defineArrayMember({
          type: "colorProductVariant",
        }),
      ],
    }),
    defineField({
      name: "sizes",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "sizeProductVariant" },
        }),
      ],
    }),
    defineField({
      name: "discountPercents",
      title: "Discount Percents",
      type: "number",
      initialValue: 15,
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "otherImages",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "productCategory" },
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "descriptionProduct",
      type: "blockContent",
    }),
    defineField({
      name: "warrantyProduct",
      type: "blockContent",
    }),
    defineField({
      name: "swapProduct",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "name",
      price: "price",
      media: "mainImage",
    },
    prepare(selection) {
      const { price } = selection;
      return { ...selection, subtitle: `${formatVND(price)}` };
    },
  },
});
