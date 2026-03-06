import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
export default function Contact() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="py-24 px-6 bg-linear-to-b from-green-100 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Liên hệ TrekNice</h1>

          <p className="text-muted-foreground text-lg">
            TrekNice luôn sẵn sàng lắng nghe mọi câu hỏi, góp ý và hợp tác từ
            cộng đồng yêu thích trekking và khám phá thiên nhiên.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <Card>
            <CardHeader>
              <CardTitle>Gửi tin nhắn cho chúng tôi</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Họ và tên</Label>
                <Input placeholder="Nguyễn Văn A" />
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input placeholder="email@example.com" />
              </div>

              <div className="space-y-2">
                <Label>Số điện thoại</Label>
                <Input placeholder="0900 000 000" />
              </div>

              <div className="space-y-2">
                <Label>Nội dung</Label>
                <Textarea
                  placeholder="Bạn muốn hỏi gì về TrekNice?"
                  className="min-h-30"
                />
              </div>

              <Button className="w-full">Gửi liên hệ</Button>
            </CardContent>
          </Card>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Thông tin liên hệ</h2>

              <p className="text-muted-foreground">
                Nếu bạn có câu hỏi về sản phẩm, hợp tác hoặc các hoạt động
                trekking của TrekNice, hãy liên hệ với chúng tôi qua các thông
                tin dưới đây.
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">support@treknice.vn</p>
              </div>

              <div>
                <p className="font-semibold">Hotline</p>
                <p className="text-muted-foreground">0900 123 456</p>
              </div>

              <div>
                <p className="font-semibold">Địa chỉ</p>
                <p className="text-muted-foreground">
                  123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                </p>
              </div>

              <div>
                <p className="font-semibold">Giờ làm việc</p>
                <p className="text-muted-foreground">
                  Thứ 2 - Chủ nhật | 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / COMMUNITY */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Kết nối với cộng đồng TrekNice</h2>

          <p className="text-muted-foreground">
            TrekNice không chỉ là một thương hiệu mà còn là một cộng đồng những
            người yêu thích khám phá thiên nhiên và sống tích cực.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="outline">
              <Link href="https://www.facebook.com/treknice.official">
                Facebook
              </Link>
            </Button>

            <Button variant="outline">
              <Link href="https://www.instagram.com/trekn_ice12/">
                Instagram
              </Link>
            </Button>

            <Button variant="outline">
              <Link href="https://www.tiktok.com/@treknice">TikTok</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
