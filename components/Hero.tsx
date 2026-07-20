"use client";
import React, { useEffect, useRef } from "react";
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

  const [contentRef, contentVisible] = useReveal<HTMLDivElement>(0.1);
  const [tickerRef, tickerVisible] = useReveal<HTMLDivElement>(0.05);

  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* الفيديو الخلفي الكبير */}
      <div className="relative w-full h-[92svh] min-h-[560px] max-h-[1000px] overflow-hidden">
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

        {/* تدرجات ظلية لضمان وضوح النصوص فوق الفيديو */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-black/15" />

        {/* المحتوى فوق الفيديو */}
        <div
          ref={contentRef}
          className={`reveal-up ${
            contentVisible ? "is-visible" : ""
          } relative z-10 h-full w-full flex flex-col justify-end px-5 sm:px-8 md:px-12 lg:px-16 pb-10 sm:pb-14 md:pb-20`}
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
              <span
                key={i}
                className={`line-reveal ${contentVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {line}
              </span>
            ))}
            <span
              className={`line-reveal ${
                contentVisible ? "is-visible" : ""
              } text-[#CCFF00]`}
              style={{ transitionDelay: `${headlineLines.length * 90}ms` }}
            >
              {headlineHighlight}
            </span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-md mb-8 md:mb-10">
            {isArabic ? (
              <>
                في <span className="font-bold text-white">2Bro Studio</span>،
                ندمج بين فخامة التصميم الجرافيكي وقوة البرمجة الحديثة لبناء
                منصات رقمية فريدة تترك انطباعاً دائمًا.
              </>
            ) : (
              <>
                At <span className="font-bold text-white">2Bro Studio</span>,
                we merge high-end visual design with clean code to build
                standout digital experiences.
              </>
            )}
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
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

      {/* شريط الأرقام المتحرك اللانهائي */}
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
    </section>
  );
}
