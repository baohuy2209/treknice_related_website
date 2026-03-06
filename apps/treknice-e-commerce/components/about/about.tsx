"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function TrekNiceAboutPage() {
  const router = useRouter();
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="w-full py-24 px-6 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge className="text-sm px-4 py-1">Outdoor Brand</Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            TrekNice
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thương hiệu thời trang và phụ kiện trekking dành cho thế hệ trẻ yêu
            khám phá. Không chỉ là sản phẩm, TrekNice mang đến một phong cách
            sống tích cực, tự do và gắn kết với thiên nhiên.
          </p>

          <Button
            size="lg"
            onClick={() => {
              router.push("/products");
            }}
          >
            Khám phá sản phẩm
          </Button>
        </div>
      </section>

      {/* GIỚI THIỆU */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Hành trình của TrekNice</h2>

            <p className="text-muted-foreground leading-relaxed">
              TrekNice ra đời từ sự bùng nổ của xu hướng du lịch trải nghiệm và
              trekking tại Việt Nam. Khi giới trẻ ngày càng tìm kiếm sự cân bằng
              giữa cuộc sống đô thị và thiên nhiên, nhu cầu về những sản phẩm
              trekking tiện dụng, thời trang và dễ tiếp cận ngày càng tăng.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              TrekNice hướng đến việc cung cấp các sản phẩm outdoor tối giản, đa
              năng nhưng vẫn đảm bảo tính thẩm mỹ và chất lượng. Thương hiệu
              không chỉ bán sản phẩm mà còn xây dựng một cộng đồng những người
              yêu khám phá và sống tích cực.
            </p>
          </div>

          <div className="rounded-2xl bg-green-100 h-87.5" />
        </div>
      </section>

      <Separator />

      {/* SỨ MỆNH - TẦM NHÌN */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Tầm nhìn</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground leading-relaxed">
              TrekNice hướng tới trở thành thương hiệu thời trang và phụ kiện
              trekking uy tín tại Việt Nam, nơi kết hợp giữa công năng, thẩm mỹ
              và phong cách sống hiện đại. Thương hiệu mong muốn truyền cảm hứng
              cho thế hệ trẻ kết nối với thiên nhiên và khám phá những hành
              trình ý nghĩa.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sứ mệnh</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground leading-relaxed">
              TrekNice mang đến các sản phẩm giúp khách hàng chuẩn bị tốt nhất
              cho mỗi chuyến trekking, đồng thời truyền cảm hứng về lối sống
              tích cực, có trách nhiệm với môi trường và cộng đồng.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GIÁ TRỊ CỐT LÕI */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Giá trị cốt lõi</h2>

            <p className="text-muted-foreground">
              Những giá trị định hình nên tinh thần của TrekNice
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Nice Mindset</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Tinh thần tích cực, tự do và văn minh trong mọi hành trình.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practical & Simple</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Sản phẩm tối giản, tiện dụng và dễ sử dụng cho mọi chuyến đi.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Express Yourself</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Khuyến khích khách hàng thể hiện phong cách cá nhân.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Care & Responsible</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Tôn trọng thiên nhiên và thúc đẩy du lịch bền vững.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* SẢN PHẨM */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Sản phẩm TrekNice</h2>

            <p className="text-muted-foreground">
              Thiết kế tối ưu cho những chuyến trekking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Trang phục trekking</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                Áo chống nước, quần trekking và trang phục outdoor giúp bảo vệ
                cơ thể trong mọi điều kiện thời tiết.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Giày & Sandals</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                Thiết kế êm ái, bền bỉ, hỗ trợ di chuyển trên nhiều loại địa
                hình khác nhau.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Phụ kiện & Balo</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                Balo trekking, mũ, kính và phụ kiện bảo vệ giúp chuyến đi trở
                nên tiện lợi và an toàn hơn.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* THÔNG ĐIỆP */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">“Sống Nice Trek Mai”</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            TrekNice tin rằng mỗi chuyến trekking không chỉ là hành trình khám
            phá thiên nhiên mà còn là hành trình khám phá bản thân. Khi chúng ta
            sống tích cực, tôn trọng thiên nhiên và tận hưởng từng bước đi, mỗi
            chuyến đi sẽ trở thành một trải nghiệm đáng nhớ.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Bắt đầu hành trình cùng TrekNice
          </h2>

          <p className="text-white/80">
            Chuẩn bị cho chuyến trekking tiếp theo của bạn với những sản phẩm
            tối ưu và phong cách từ TrekNice.
          </p>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              router.push("/products");
            }}
          >
            Xem sản phẩm
          </Button>
        </div>
      </section>
    </main>
  );
}
