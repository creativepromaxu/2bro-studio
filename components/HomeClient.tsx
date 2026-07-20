"use client";
import React, { useCallback, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Work from "./Work";
import Services from "./Services";
import Testimonials from "./Testimonials"; // آراء العملاء
import Contact from "./Contact";
import Footer from "./Footer";

interface HomeClientProps {
  initialIsArabic: boolean;
}

const LANG_COOKIE = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export default function HomeClient({ initialIsArabic }: HomeClientProps) {
  const [isArabic, setIsArabicState] = useState(initialIsArabic);

  // تحديث اللغة محلياً + حفظها في كوكي حتى تتذكرها الصفحة بعد أي تحديث (Refresh)
  const setIsArabic = useCallback((value: boolean) => {
    setIsArabicState(value);
    if (typeof document !== "undefined") {
      document.cookie = `${LANG_COOKIE}=${
        value ? "ar" : "en"
      }; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
    }
  }, []);

  return (
    <main
      className="bg-[#0A0A0A] min-h-screen text-white flex flex-col justify-between pt-24"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      <div className="flex-grow w-full max-w-7xl mx-auto px-8 md:px-16">
        <Hero isArabic={isArabic} />
        <Work isArabic={isArabic} />
        <Services isArabic={isArabic} />

        {/* قسم آراء العملاء المضاف حديثاً */}
        <Testimonials isArabic={isArabic} />

        <Contact isArabic={isArabic} />
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}
