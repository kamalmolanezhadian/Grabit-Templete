import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">صفحه ایی پیدا نشد</h1>
      <p className="text-small-regular text-ui-fg-base">
      صفحه ای که سعی کردید به آن دسترسی پیدا کنید وجود ندارد
      </p>
    </div>
  );
}
