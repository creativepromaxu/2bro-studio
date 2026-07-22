import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// خط Alexandria (ملف الخط الفعلي المرفوع بمجلد public/Alexandria) — يدعم
// العربية والإنجليزية بكل أوزانه (100 إلى 900) عبر متغير CSS واحد، ومحمّل
// محلياً بدون أي اعتماد على الإنترنت وقت البناء
const alexandria = localFont({
  src: "../public/Alexandria/Alexandria-VariableFont_wght.ttf",
  variable: "--font-alexandria",
  display: "swap",
});

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
    <html lang="ar" dir="rtl" className={alexandria.variable}>
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
