// app/not-found.tsx

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f1ed] px-6">
      <div className="text-center">

        <h1 className="text-6xl font-bold text-[#2f2a25] mb-6">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-[#2f2a25] mb-4">
          Lạc đường rồi sao?
        </h2>

        <p className="text-[#7a6f66] mb-8 max-w-md mx-auto">
          Có vẻ bạn đang tìm một cung đường chưa tồn tại.
          Hãy quay về trang chủ TrekNice và tiếp tục hành trình nhé.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-[#4d7c5a] hover:bg-[#3f654a] text-white font-medium transition"
        >
          Về Trang Chủ
        </Link>

      </div>
    </div>
  )
}