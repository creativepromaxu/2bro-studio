"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // العربية هي اللغة الافتراضية (مطابقة لوسم <html lang="ar" dir="rtl">)
  const [isArabic, setIsArabic] = useState(true);

  // استرجاع لغة الزائر المحفوظة من زيارته السابقة
  useEffect(() => {
    const saved = localStorage.getItem("2bro-lang");
    // مزامنة لمرة واحدة مع تفضيل محفوظ خارج React (آمنة ومقصودة)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "en") setIsArabic(false);
  }, []);

  // مزامنة وسم <html> مع اللغة المختارة + حفظ التفضيل
  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    localStorage.setItem("2bro-lang", isArabic ? "ar" : "en");
  }, [isArabic]);

  return (
    <main
      className="bg-[#0A0A0A] min-h-screen text-white flex flex-col justify-between pt-24"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* الهيرو خارج الحاوية المحصورة عرضها (max-w-7xl) عشان يمتد بعرض الشاشة بالكامل */}
      <Hero isArabic={isArabic} />

      <div className="flex-grow w-full max-w-7xl mx-auto px-8 md:px-16">
        <Work isArabic={isArabic} />
        <Services isArabic={isArabic} />
        <Testimonials isArabic={isArabic} />
        <Contact isArabic={isArabic} />
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}
