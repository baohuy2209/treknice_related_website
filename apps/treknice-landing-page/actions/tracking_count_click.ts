"use server";

import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "click-count.json");

type ClickType = "buy_now" | "view_product";

export async function increaseClick(type: ClickType) {
  // đọc file
  const data = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf8"))
    : { buy_now: 0, view_product: 0 };

  // cộng thêm 1
  data[type] = (data[type] ?? 0) + 1;

  // ghi lại file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // ❗ trả PLAIN OBJECT (tránh lỗi React Server)
  return { success: true, count: data[type] };
}
