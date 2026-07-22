"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
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

  // حفظ واسترجاع موضع السكرول بالصفحة الرئيسية يدوياً — لازم لأن قسم الهيرو
  // طويل جداً (220vh) ومثبّت (sticky)، وهذا يمنع Next.js من استرجاع موضع
  // السكرول تلقائياً بشكل صحيح عند الرجوع (زر Back) من صفحة مشروع.
  //
  // ملاحظة مهمة: Next.js أحياناً يبقي هذي الصفحة محفوظة بالكاش الخاص فيه
  // (Router Cache) بدل ما يعيد تحميلها من الصفر عند الرجوع، وهذا يعني إن
  // useEffect(..., []) العادي ما يتكرر تنفيذه. لهذا نعتمد على حدث popstate
  // (يصير مع أي ضغطة Back/Forward فعلية بالمتصفح بغض النظر عن الكاش) بدل ما
  // نعتمد بس على وقت تحميل المكوّن.
  useEffect(() => {
    const STORAGE_KEY = "2bro-home-scroll-y";

    const restoreScroll = () => {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const targetY = parseInt(saved, 10);

      // ننتظر لحين ما ارتفاع الصفحة الفعلي يكفي للوصول للموضع المطلوب
      // (يعني قسم الهيرو الطويل رجع فعلاً بالـ DOM)، بدل ما نسكرول فوراً
      // وياخذ موضع غير دقيق
      let attempts = 0;
      const tryScroll = () => {
        attempts += 1;
        const tall = document.body.scrollHeight >= targetY + window.innerHeight;
        if (tall || attempts > 30) {
          window.scrollTo(0, targetY);
        } else {
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
    };

    const saveScroll = () => {
      sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
    };

    // استرجاع فوري لو المكوّن انعاد تحميله من الصفر (مو من الكاش)
    restoreScroll();

    window.addEventListener("popstate", restoreScroll);
    window.addEventListener("scroll", saveScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);

    return () => {
      saveScroll();
      window.removeEventListener("popstate", restoreScroll);
      window.removeEventListener("scroll", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);

  return (
    <main
      className="bg-[#0A0A0A] min-h-screen text-white flex flex-col justify-between pt-24"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* الهيرو خارج الحاوية المحصورة عرضها (max-w-7xl) عشان يمتد بعرض الشاشة بالكامل */}
      <Hero isArabic={isArabic} />

      <div className="flex-grow w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <Work isArabic={isArabic} />
        <Testimonials isArabic={isArabic} />
        <Contact isArabic={isArabic} />
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}
