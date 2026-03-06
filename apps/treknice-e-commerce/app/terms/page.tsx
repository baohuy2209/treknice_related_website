import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="flex flex-col">
      <section className="py-24 px-6 bg-linear-to-b from-green-100 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Điều khoản sử dụng</h1>

          <p className="text-muted-foreground text-lg">
            Khi truy cập và sử dụng website TrekNice, bạn đồng ý tuân thủ các
            điều khoản và điều kiện được quy định dưới đây.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Quy định chung</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              Website TrekNice cung cấp thông tin sản phẩm trekking và các dịch
              vụ liên quan. Người dùng cần tuân thủ các quy định khi sử dụng hệ
              thống website.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Quyền và trách nhiệm của người dùng</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              Người dùng cam kết cung cấp thông tin chính xác khi đặt hàng và
              không sử dụng website cho mục đích vi phạm pháp luật.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Quyền của TrekNice</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              TrekNice có quyền thay đổi nội dung website, sản phẩm, giá bán
              hoặc chính sách mà không cần thông báo trước.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Giới hạn trách nhiệm</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              TrekNice không chịu trách nhiệm đối với những thiệt hại phát sinh
              do việc sử dụng website không đúng mục đích hoặc vi phạm điều
              khoản sử dụng.
            </CardContent>
          </Card>

          <Separator />

          <div className="text-center space-y-3">
            <p className="text-muted-foreground">
              Mọi thắc mắc về điều khoản sử dụng vui lòng liên hệ:
            </p>

            <p className="font-medium">
              📩 Email:
              <Link
                href="mailto:treknice.official@gmail.com"
                className="ml-1 hover:underline"
              >
                treknice.official@gmail.com
              </Link>
            </p>

            <p className="font-medium">
              📱 Hotline:
              <Link href="tel:0375686583" className="ml-1 hover:underline">
                0375 686 583
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
