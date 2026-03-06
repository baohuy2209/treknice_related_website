import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="py-24 px-6 bg-linear-to-b from-green-100 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Câu hỏi thường gặp</h1>

          <p className="text-muted-foreground text-lg">
            Những thắc mắc phổ biến khi mua sắm và sử dụng sản phẩm tại
            TrekNice.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Làm thế nào để đặt hàng tại TrekNice?</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              Bạn có thể đặt hàng trực tiếp trên website hoặc thông qua các kênh
              mạng xã hội chính thức của TrekNice như Instagram hoặc TikTok.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Thời gian giao hàng mất bao lâu?</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              Thời gian giao hàng thông thường từ 1–5 ngày làm việc tùy khu vực.
              Chi tiết có thể xem tại trang chính sách vận chuyển.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tôi có thể đổi hoặc trả sản phẩm không?</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              TrekNice hỗ trợ đổi trả nếu sản phẩm lỗi hoặc không đúng với đơn
              hàng đã đặt. Vui lòng liên hệ với chúng tôi trong vòng 24 giờ sau
              khi nhận hàng.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Sản phẩm TrekNice có phù hợp cho người mới trekking?
              </CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              Các sản phẩm của TrekNice được thiết kế dành cho cả người mới bắt
              đầu trekking lẫn người có kinh nghiệm. Chúng tôi cũng cung cấp các
              combo dành cho người mới.
            </CardContent>
          </Card>

          <Separator />

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Nếu bạn còn câu hỏi khác, hãy liên hệ với TrekNice.
            </p>

            <p className="font-medium">
              📱 Hotline:
              <Link href="tel:0375686583" className="hover:underline ml-1">
                0375 686 583
              </Link>
            </p>

            <p className="font-medium">
              📩 Email:
              <Link
                href="mailto:treknice.official@gmail.com"
                className="hover:underline ml-1"
              >
                treknice.official@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
