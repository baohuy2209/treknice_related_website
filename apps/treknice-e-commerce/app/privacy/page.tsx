import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col">
      <section className="py-24 px-6 bg-linear-to-b from-green-100 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Chính sách bảo mật</h1>

          <p className="text-muted-foreground text-lg">
            TrekNice cam kết bảo vệ thông tin cá nhân của khách hàng khi sử dụng
            website và dịch vụ của chúng tôi.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Thông tin chúng tôi thu thập</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Khi bạn sử dụng website TrekNice, chúng tôi có thể thu thập một
                số thông tin sau:
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>Họ tên</li>
                <li>Email</li>
                <li>Số điện thoại</li>
                <li>Địa chỉ giao hàng</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Mục đích sử dụng thông tin</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              Thông tin khách hàng được sử dụng để xử lý đơn hàng, hỗ trợ khách
              hàng, cải thiện trải nghiệm mua sắm và cung cấp thông tin về sản
              phẩm mới hoặc chương trình khuyến mãi của TrekNice.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Bảo mật thông tin</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              TrekNice cam kết không chia sẻ hoặc bán thông tin cá nhân của
              khách hàng cho bên thứ ba nếu không có sự đồng ý của khách hàng,
              trừ khi có yêu cầu từ cơ quan pháp luật.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Quyền của khách hàng</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              Khách hàng có quyền yêu cầu chỉnh sửa, cập nhật hoặc xóa thông tin
              cá nhân của mình khỏi hệ thống của TrekNice.
            </CardContent>
          </Card>

          <Separator />

          <div className="text-center space-y-3">
            <p className="text-muted-foreground">
              Nếu bạn có câu hỏi về chính sách bảo mật, vui lòng liên hệ:
            </p>

            <p className="font-medium">
              Email:
              <Link
                href="mailto:treknice.official@gmail.com"
                className="ml-1 hover:underline"
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
