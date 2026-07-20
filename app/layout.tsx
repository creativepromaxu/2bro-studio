import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://2bro.studio"),
  title: {
    default: "2Bro Studio — استوديو تصميم وبرمجة",
    template: "%s | 2Bro Studio",
  },
  description:
    "استوديو إبداعي متكامل يدمج فخامة التصميم الجرافيكي وقوة البرمجة الحديثة لبناء هويات بصرية ومنصات رقمية لا يمكن تجاهلها. Creative Experiences — Design & Code.",
  openGraph: {
    title: "2Bro Studio",
    description: "Creative Experiences. Design & Code.",
    url: "https://2bro.studio",
    siteName: "2Bro Studio",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Tajawal:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
