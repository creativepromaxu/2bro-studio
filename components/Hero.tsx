"use client";
import React, { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

interface HeroProps {
  isArabic: boolean;
}

export default function Hero({ isArabic }: HeroProps) {
  const tickerEnglish = [
    "100% POSITIVE REVIEWS",
    "24/7 CLIENT ACCESS",
    "40+ PROJECTS SHIPPED",
    "OVER 25 HAPPY CLIENTS",
  ];

  const tickerArabic = [
    "تقييمات إيجابية 100%",
    "تواصل مع العميل 24/7",
    "أكثر من 40 مشروعاً منجزاً",
    "أكثر من 25 عميلاً سعيداً",
  ];

  // مضاعفة المصفوفة لضمان حركة لا نهائية سلسة بدون فجوة
  const items = isArabic ? tickerArabic : tickerEnglish;
  const currentTicker = [...items, ...items];

  const headlineLines = isArabic
    ? ["نصنع هويات بصرية"]
    : ["WE DESIGN BRANDS"];
  const headlineHighlight = isArabic ? "لا يمكن تجاهلها" : "YOU CAN'T IGNORE.";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [tickerRef, tickerVisible] = useReveal<HTMLDivElement>(0.05);

  const videoRef = useRef<HTMLVideoElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  // نسبة تقدّم السكرول داخل منطقة الهيرو المثبتة (0 إلى 1)
  const [progress, setProgress] = useState(0);

  // ضمان تشغيل الفيديو تلقائياً بصمت على جميع المتصفحات (خصوصاً الجوال)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* تجاهل الرفض في حال منع المتصفح للتشغيل التلقائي */
      });
    }
  }, []);

  // الفيديو ثابت تماماً ولا يتأثر بالسكرول إطلاقاً — فقط النصوص والأزرار
  // تظهر تباعاً فوقه (في نفس أماكنها النهائية) حسب تقدّم السكرول داخل القسم المثبّت (sticky)
  useEffect(() => {
    let frame = 0;

    const computeProgress = () => {
      frame = 0;
      const el = pinRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(1);
        return;
      }
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / scrollable, 0), 1);
      setProgress(p);
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(computeProgress);
    };

    computeProgress();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // المرحلة الأولى: الشارة + العنوان + الفقرة (النصف الأول من السكرول)
  const stage1 = Math.min(Math.max(progress / 0.5, 0), 1);
  // المرحلة الثانية: الأزرار (النصف الثاني من السكرول)
  const stage2 = Math.min(Math.max((progress - 0.5) / 0.5, 0), 1);

  return (
    <>
    <section
      ref={pinRef}
      className="relative w-full bg-[#0A0A0A]"
      style={{ height: "220vh" }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* منطقة مثبتة (sticky) بطول الشاشة بالكامل — الفيديو ثابت دائماً بنفس الحجم */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* تدرجات ظلية ثابتة لضمان وضوح النصوص فوق الفيديو */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-black/15" />

        {/* المحتوى فوق الفيديو — كل عنصر بمكانه النهائي، يظهر تدريجياً حسب السكرول */}
        <div className="relative z-10 h-full w-full flex flex-col justify-end px-5 sm:px-8 md:px-12 lg:px-16 pb-10 sm:pb-14 md:pb-20">
          {/* المرحلة الأولى */}
          <div
            style={{
              opacity: stage1,
              transform: `translateY(${(1 - stage1) * 28}px)`,
            }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#CCFF00] block mb-4 md:mb-6 font-bold">
              {isArabic ? "// استوديو إبداعي متكامل" : "// DESIGN & CODE STUDIO"}
            </span>

            <h1
              className={`font-black text-white mb-5 md:mb-7 ${
                isArabic
                  ? "text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]"
                  : "text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] uppercase"
              }`}
            >
              {headlineLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              <span className="block text-[#CCFF00]">{headlineHighlight}</span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-md mb-8 md:mb-10">
              {isArabic ? (
                <>
                  في <span className="font-bold text-white">2Bro Studio</span>
                  ، ندمج بين فخامة التصميم الجرافيكي وقوة البرمجة الحديثة
                  لبناء منصات رقمية فريدة تترك انطباعاً دائمًا.
                </>
              ) : (
                <>
                  At <span className="font-bold text-white">2Bro Studio</span>
                  , we merge high-end visual design with clean code to build
                  standout digital experiences.
                </>
              )}
            </p>
          </div>

          {/* المرحلة الثانية: الأزرار */}
          <div
            className="flex flex-wrap gap-3 md:gap-4"
            style={{
              opacity: stage2,
              transform: `translateY(${(1 - stage2) * 28}px)`,
            }}
          >
            <button
              onClick={() => scrollToSection("contact-section")}
              className="bg-[#CCFF00] text-black font-semibold text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-white active:scale-95 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              {isArabic ? "ابدأ مشروعك معنا" : "Get started"}
            </button>
            <button
              onClick={() => scrollToSection("work-section")}
              className="border border-white/25 text-white font-semibold text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-white/10 active:scale-95 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
            >
              {isArabic ? "رؤية أعمالنا" : "Our Portfolio"}
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* شريط الأرقام المتحرك اللانهائي — خارج منطقة التثبيت تماماً، يظهر فقط بعد اكتمال سكرول الهيرو بالكامل وثابت بمكانه */}
    <div
      ref={tickerRef}
      className={`reveal-fade ${
        tickerVisible ? "is-visible" : ""
      } marquee-pausable w-full overflow-hidden border-t border-b border-white/5 py-5 md:py-6 bg-black/20 backdrop-blur-sm select-none`}
    >
      <div
        className="marquee-track flex w-max items-center gap-8 md:gap-12"
        style={{
          animation: isArabic
            ? "marquee-rtl 22s linear infinite"
            : "marquee 22s linear infinite",
        }}
      >
        {currentTicker.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8 md:gap-12 font-mono text-xs sm:text-sm tracking-[0.15em] text-[#888888] font-bold uppercase whitespace-nowrap"
          >
            <span className="hover:text-[#CCFF00] transition-colors duration-300">
              {item}
            </span>
            <span className="text-[#CCFF00] text-lg font-black" aria-hidden="true">
              *
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
