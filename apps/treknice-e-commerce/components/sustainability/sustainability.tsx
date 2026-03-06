import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function SustainabilityPage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="py-24 px-6 bg-linear-to-b from-green-100 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge className="px-4 py-1">Sustainability</Badge>

          <h1 className="text-4xl md:text-6xl font-bold">
            TrekNice Sustainability
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TrekNice tin rằng mỗi chuyến trekking không chỉ là hành trình khám
            phá thiên nhiên mà còn là trách nhiệm bảo vệ những vùng đất mà chúng
            ta đặt chân tới.
          </p>
        </div>
      </section>

      {/* TRIẾT LÝ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold">Triết lý phát triển bền vững</h2>

          <p className="text-muted-foreground leading-relaxed">
            TrekNice cam kết xây dựng một thương hiệu outdoor không chỉ tập
            trung vào sản phẩm mà còn vào tác động tích cực đối với môi trường
            và cộng đồng. Chúng tôi tin rằng việc kết nối con người với thiên
            nhiên phải đi kèm với trách nhiệm bảo vệ thiên nhiên.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Mỗi sản phẩm, mỗi nội dung truyền thông và mỗi hoạt động của
            TrekNice đều hướng tới mục tiêu lan tỏa lối sống tích cực, tôn trọng
            môi trường và khuyến khích du lịch bền vững.
          </p>
        </div>
      </section>

      <Separator />

      {/* CAM KẾT CHÍNH */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Cam kết của TrekNice</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sản phẩm bền vững</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                TrekNice hợp tác với các nhà sản xuất uy tín để đảm bảo chất
                lượng và độ bền của sản phẩm. Chúng tôi ưu tiên thiết kế các sản
                phẩm có tuổi thọ cao, giúp giảm thiểu việc thay thế thường xuyên
                và hạn chế tác động tiêu cực đến môi trường.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leave No Trace</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                TrekNice tích cực truyền thông về nguyên tắc “Leave No Trace”
                nhằm khuyến khích cộng đồng trekking giữ gìn môi trường tự
                nhiên, không xả rác và tôn trọng hệ sinh thái tại các điểm
                trekking.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Du lịch có trách nhiệm</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                TrekNice khuyến khích khách hàng tham gia vào các hoạt động
                trekking có trách nhiệm, tôn trọng văn hóa địa phương và góp
                phần bảo vệ các khu bảo tồn thiên nhiên.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BẢO VỆ MÔI TRƯỜNG */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl bg-green-100 h-80" />

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Bảo vệ thiên nhiên</h2>

            <p className="text-muted-foreground leading-relaxed">
              TrekNice tin rằng vẻ đẹp của thiên nhiên chính là nguồn cảm hứng
              lớn nhất cho các chuyến trekking. Vì vậy, thương hiệu luôn khuyến
              khích khách hàng sử dụng sản phẩm bền vững và hạn chế rác thải
              nhựa trong các chuyến đi.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Chúng tôi cũng hợp tác với các tổ chức môi trường và các cộng đồng
              trekking để lan tỏa nhận thức về việc bảo vệ hệ sinh thái và duy
              trì vẻ đẹp tự nhiên cho các thế hệ tương lai.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* CỘNG ĐỒNG */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-bold">Cộng đồng “Sống Nice”</h2>

          <p className="text-muted-foreground leading-relaxed">
            TrekNice mong muốn xây dựng một cộng đồng những người trẻ yêu thiên
            nhiên, yêu khám phá và sống có trách nhiệm. Thông qua các chiến dịch
            truyền thông và nội dung chia sẻ kiến thức trekking, TrekNice giúp
            người trẻ chuẩn bị tốt hơn cho mỗi hành trình và hiểu rõ hơn về việc
            bảo vệ môi trường.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Trek cùng trách nhiệm</h2>

          <p className="text-white/80">
            Mỗi chuyến đi đều có thể tạo ra tác động tích cực. Hãy cùng TrekNice
            khám phá thiên nhiên một cách văn minh và bền vững.
          </p>

          <Button variant="secondary" size="lg">
            Khám phá sản phẩm
          </Button>
        </div>
      </section>
    </main>
  );
}
