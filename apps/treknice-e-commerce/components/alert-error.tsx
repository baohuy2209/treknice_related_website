import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

export function ErrorAlert({
  title = "Có lỗi xảy ra",
  description = "Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại sau.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Alert variant="destructive" className="flex items-start gap-3">
      <AlertCircleIcon className="h-5 w-5" />
      <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </div>
    </Alert>
  );
}
