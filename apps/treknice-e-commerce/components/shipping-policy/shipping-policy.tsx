import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function ShippingPolicy() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="py-24 px-6 bg-linear-to-b from-green-100 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Chính sách vận chuyển
          </h1>

          <p className="text-muted-foreground text-lg">
            TrekNice cam kết mang đến trải nghiệm mua sắm thuận tiện và minh
            bạch với dịch vụ vận chuyển nhanh chóng, an toàn để bạn luôn sẵn
            sàng cho mọi chuyến trekking.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Phạm vi vận chuyển */}
          <Card>
            <CardHeader>
              <CardTitle>1. Phạm vi giao hàng</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                TrekNice hỗ trợ giao hàng trên toàn lãnh thổ Việt Nam thông qua
                các đối tác vận chuyển uy tín.
              </p>

              <p>
                Khách hàng có thể nhận hàng tại nhà riêng, văn phòng hoặc bất kỳ
                địa chỉ nhận hàng hợp lệ nào được cung cấp trong quá trình đặt
                hàng.
              </p>

              <p>
                Tất cả sản phẩm TrekNice đều được đóng gói cẩn thận để đảm bảo
                an toàn trong quá trình vận chuyển, đặc biệt với các sản phẩm
                trekking và outdoor.
              </p>
            </CardContent>
          </Card>

          {/* Thời gian vận chuyển */}
          <Card>
            <CardHeader>
              <CardTitle>2. Thời gian vận chuyển</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Thời gian giao hàng dự kiến phụ thuộc vào khu vực nhận hàng:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Khu vực nội thành: 1 – 2 ngày làm việc</li>
                <li>Các tỉnh/thành khác: 3 – 5 ngày làm việc</li>
                <li>Khu vực vùng sâu, vùng xa: 5 – 7 ngày làm việc</li>
              </ul>

              <p>
                Trong một số trường hợp đặc biệt như thời tiết xấu, dịp lễ tết
                hoặc sự cố từ đơn vị vận chuyển, thời gian giao hàng có thể kéo
                dài hơn dự kiến.
              </p>
            </CardContent>
          </Card>

          {/* Phí vận chuyển */}
          <Card>
            <CardHeader>
              <CardTitle>3. Phí vận chuyển</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Phí vận chuyển được tính dựa trên khu vực giao hàng và khối
                lượng đơn hàng.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Miễn phí vận chuyển cho các đơn hàng đạt điều kiện khuyến mãi
                </li>
                <li>
                  Đơn hàng tiêu chuẩn: phí vận chuyển từ 20.000 – 40.000 VNĐ
                </li>
              </ul>

              <p>
                Phí vận chuyển cụ thể sẽ được hiển thị rõ ràng trong quá trình
                thanh toán trước khi khách hàng xác nhận đơn hàng.
              </p>
            </CardContent>
          </Card>

          {/* Kiểm tra hàng */}
          <Card>
            <CardHeader>
              <CardTitle>4. Kiểm tra hàng khi nhận</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                TrekNice khuyến khích khách hàng kiểm tra tình trạng sản phẩm
                ngay khi nhận hàng để đảm bảo quyền lợi của mình.
              </p>

              <p>
                Nếu phát hiện sản phẩm bị lỗi, hư hỏng hoặc không đúng với đơn
                hàng đã đặt, vui lòng liên hệ với TrekNice trong vòng
                <strong> 24 giờ </strong>
                để được hỗ trợ xử lý nhanh chóng.
              </p>
            </CardContent>
          </Card>

          {/* Trường hợp giao hàng không thành công */}
          <Card>
            <CardHeader>
              <CardTitle>5. Trường hợp giao hàng không thành công</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Trong trường hợp đơn vị vận chuyển không thể liên hệ với khách
                hàng hoặc giao hàng không thành công, đơn hàng có thể được hoàn
                về kho của TrekNice.
              </p>

              <p>
                Khi đó, đội ngũ hỗ trợ của TrekNice sẽ chủ động liên hệ lại để
                xác nhận việc giao lại hoặc xử lý đơn hàng theo yêu cầu của
                khách hàng.
              </p>
            </CardContent>
          </Card>

          <Separator />

          {/* Liên hệ */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách vận chuyển, vui lòng
              liên hệ TrekNice để được hỗ trợ.
            </p>

            <p className="font-medium">
              📱 Hotline:{" "}
              <Link href="tel:0375686583" className="hover:underline">
                0375 686 583
              </Link>
            </p>

            <p className="font-medium">
              📩 Email:{" "}
              <Link
                href="mailto:treknice.official@gmail.com"
                className="hover:underline"
              >
                treknice.official@gmail.com
              </Link>
            </p>

            <p className="font-medium">
              📧 Instagram:{" "}
              <Link
                href="https://instagram.com/trekn_ice12"
                target="_blank"
                className="hover:underline"
              >
                trekn_ice12
              </Link>
            </p>

            <p className="font-medium">
              🔎 TikTok:{" "}
              <Link
                href="https://tiktok.com/@treknice"
                target="_blank"
                className="hover:underline"
              >
                @treknice
              </Link>
            </p>

            <p className="font-medium">
              🌐 Website:{" "}
              <Link
                href="https://treknice-landing-page.vercel.app/"
                target="_blank"
                className="hover:underline"
              >
                treknice-landing-page.vercel.app
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ShippingPolicy;
