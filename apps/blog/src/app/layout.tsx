import "./globals.css";
import NextQueryProvider from "@app/NextQueryProvider";
import BodyLayout from "@app/BodyLayout";

export const metadata = {
  title: "뚜 블로그",
  description:
    "뚜 블로그는 다양한 백엔드 관련 정보를 공유하는 공간입니다.",
  keywords: "개발, 백엔드, JAVA, C#, DB",
  openGraph: {
    title: "뚜 블로그",
    description:
      "뚜 블로그는 다양한 백엔드 관련 정보를 공유하는 공간입니다.",
    url: "https://blog.hansolbangul.com",
    type: "website",
    images: [
      {
        url: "https://blog.hansolbangul.com/main_img.webp",
        alt: "뚜썸넬",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <div
          id="toast-root"
          className="fixed right-2/4 transform translate-x-2/4 flex flex-col z-30 w-64 space-y-2"
        />
        <div id="modal-root" className="fixed z-30" />
        <NextQueryProvider>
          <BodyLayout>{children}</BodyLayout>
        </NextQueryProvider>
      </body>
    </html>
  );
}
