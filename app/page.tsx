"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [isArabic, setIsArabic] = useState(true);

  // استرجاع لغة الزائر المحفوظة
  useEffect(() => {
    const saved = localStorage.getItem("2bro-lang");
    if (saved === "en") setIsArabic(false);
  }, []);

  // مزامنة وسم html مع اللغة
  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    localStorage.setItem("2bro-lang", isArabic ? "ar" : "en");
  }, [isArabic]);

  // حفظ واسترجاع مكان السكرول عند الرجوع بالمتصفح
  useEffect(() => {
    const STORAGE_KEY = "2bro-home-scroll-y";

    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const restoreScroll = () => {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const targetY = parseInt(saved, 10);
      if (isNaN(targetY) || targetY <= 0) return;

      const startTime = Date.now();
      const interval = setInterval(() => {
        const canScroll = document.documentElement.scrollHeight >= targetY;
        const timeout = Date.now() - startTime > 1800;

        if (canScroll || timeout) {
          window.scrollTo({
            top: targetY,
            behavior: "instant",
          });
          clearInterval(interval);
        }
      }, 50);
    };

    let saveTimeout: NodeJS.Timeout;
    const saveScroll = () => {
      if (window.scrollY > 50) {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
          sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
        }, 80);
      }
    };

    restoreScroll();
    window.addEventListener("popstate", restoreScroll);
    window.addEventListener("scroll", saveScroll, { passive: true });

    return () => {
      clearTimeout(saveTimeout);
      window.removeEventListener("popstate", restoreScroll);
      window.removeEventListener("scroll", saveScroll);
    };
  }, []);

  return (
    <main
      className="bg-[#0A0A0A] min-h-screen text-white flex flex-col justify-between pt-24"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* الهيرو بعرض الشاشة الكامل */}
      <Hero isArabic={isArabic} />

      <div className="flex-grow w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <Services isArabic={isArabic} />
        <Testimonials isArabic={isArabic} />
        <Contact isArabic={isArabic} />
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}