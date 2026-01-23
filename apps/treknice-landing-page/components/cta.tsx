import { increaseClick } from "@/actions/tracking_count_click";
import { Button } from "@/components/ui/button";
import { Backpack, MapPin, Mountain } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="grain-texture py-20 relative w-[90%] mx-auto overflow-hidden ">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Main Heading */}
        <h2 className="max-w-4xl font-bold tracking-tight text-neutral-900 mb-4 text-6xl leading-tight">
          Trang Bị Hoàn Hảo
          <span className="block font-bold italic">Cho Mọi Hành Trình</span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-600 mb-10 max-w-2xl text-lg sm:text-xl md:text-2xl">
          Phụ kiện trekking & phượt chất lượng cao, từ ba lô chuyên dụng đến
          dụng cụ cắm trại. Sẵn sàng chinh phục mọi địa hình cùng TrekNice
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            onClick={() => increaseClick("buy_now")}
            size="lg"
            className="group relative overflow-hidden bg-black px-8 py-6 text-lg font-semibold text-white shadow-2xl transition-all hover:shadow-black/50 hover:scale-105"
          >
            <Backpack className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
            Mua Sắm Ngay
          </Button>

          <Button
            onClick={() => increaseClick("view_product")}
            variant="outline"
            className="border-2 border-white/30 bg-white/10 px-8 py-6 text-lg font-semibold text-black backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 shadow-2xl"
          >
            <Mountain className="mr-2 h-5 w-5" />
            Xem Sản Phẩm
          </Button>
        </div>
      </div>
    </section>
  );
}
