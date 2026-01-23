"use server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "newsletter.json");

export async function subscribeToNewsletter(email: string) {
  try {
    if (!email) {
      return { success: false, message: "Email is required" };
    }

    // Đảm bảo thư mục tồn tại
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Đọc file nếu tồn tại
    const fileData: { email: string; date: string }[] = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : [];

    // (Optional) check trùng email
    const isExists = fileData.some((item) => item.email === email);
    if (isExists) {
      return { success: false, message: "Email already subscribed" };
    }

    fileData.push({
      email,
      date: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), "utf8");

    return { success: true, message: "Subscribed successfully" };
  } catch (error) {
    console.error("Subscribe error:", error);
    return { success: false, message: "Internal server error" };
  }
}
