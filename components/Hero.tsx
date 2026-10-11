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
    "+4M SAR AD SPEND MANAGED",
  ];

  const tickerArabic = [
    "تقييمات إيجابية 100%",
    "تواصل مع العميل 24/7",
    "أكثر من 40 مشروعاً منجزاً",
    "أكثر من 25 عميلاً سعيداً",
    "أكثر من 4 ملايين ر.س حملات مدارة",
  ];

  const items = isArabic ? tickerArabic : tickerEnglish;
  const currentTicker = [...items, ...items];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [tickerRef, tickerVisible] = useReveal<HTMLDivElement>(0.05);

  const videoRef = useRef<HTMLVideoElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // تشغيل الفيديو تلقائياً بصمت
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  // حساب نسبة السكرول لإخفاء المحتوى فقط
  useEffect(() => {
    let frame = 0;

    const computeProgress = () => {
      frame = 0;
      const el = pinRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
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

  // يبدأ ظاهر تماماً (opacity: 1) ويختفي تدريجياً مع السكرول
  const contentOpacity = Math.max(1 - progress * 1.5, 0);
  const contentTranslateY = progress * -60;

  return (
    <>
      <section
        ref={pinRef}
        className="relative w-full bg-[#0A0A0A]"
        style={{ height: "170vh" }}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* منطقة الـ Sticky التي تحتوي الفيديو والمحتوى */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
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

          {/* طبقات تظليل سينمائية تضمن قراءة النصوص */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/35" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

          {/* محتوى الهيرو الرئيسي */}
          <div
            className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-transform ease-out will-change-transform"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentTranslateY}px)`,
              pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
            }}
          >
            {/* الشعار الترحيبي المصغر في الأعلى */}
            <div className="text-center mb-6 lg:mb-10">
              <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-[#CCFF00] font-bold bg-[#CCFF00]/10 border border-[#CCFF00]/25 px-3.5 py-1.5 rounded-full">
                {isArabic
                  ? "// وكالة رقمية متكاملة : تصميم ، برمجة ، ونمو إعلاني"
                  : "// 2BRO STUDIO : DESIGN, DEV & GROWTH"}
              </span>
            </div>

            {/* الشبكة الثلاثية (يمين: هويات - وسط: إحصائيات - يسار: إعلانات) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              
              {/* القسم الأول: تصميم الهويات والبرمجة */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-start">
                <span className="text-[11px] font-mono tracking-widest uppercase text-white/50 mb-2 font-semibold">
                  {isArabic ? "01 / هويات وبرمجة" : "01 / BRAND & CODE"}
                </span>

                <h1
                  className={`font-black text-white mb-3 ${
                    isArabic
                      ? "text-2xl sm:text-3xl xl:text-4xl leading-snug"
                      : "text-2xl sm:text-3xl xl:text-4xl leading-tight uppercase tracking-tight"
                  }`}
                >
                  {isArabic ? (
                    <>
                      نصنع هويات بصرية <br className="hidden sm:inline" />
                      <span className="text-[#CCFF00]">لا يمكن تجاهلها</span>
                    </>
                  ) : (
                    <>
                      WE DESIGN BRANDS <br className="hidden sm:inline" />
                      <span className="text-[#CCFF00]">YOU CAN'T IGNORE</span>
                    </>
                  )}
                </h1>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm mb-5">
                  {isArabic
                    ? "ندمج بين قوة التصميم المعاصر والحلول البرمجية الذكية لنبني حضوراً رقمياً فخماً ومؤثراً."
                    : "Merging refined brand aesthetics with cutting-edge code to engineer remarkable digital platforms."}
                </p>

                <button
                  onClick={() => scrollToSection("services-section")}
                  className="border border-white/25 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] font-semibold text-xs px-5 py-2.5 rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer hover:bg-white/5 active:scale-95"
                >
                  {isArabic ? "استعرض أعمالنا ←" : "Explore Portfolio →"}
                </button>
              </div>

              {/* القسم الأوسط: الأرقام والإحصائيات */}
              <div className="lg:col-span-4 flex flex-row lg:flex-col justify-around lg:justify-center items-center gap-4 lg:gap-5 py-4 lg:py-6 px-3 bg-white/[0.03] lg:bg-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-md">
                
                {/* الإحصائية 1: ميزانية الحملات */}
                <div className="text-center">
                  <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#CCFF00] tracking-tight">
                    +4,000,000
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-white/80 mt-1">
                    {isArabic ? "ر.س ميزانيات إعلانية مدارة" : "SAR Managed Ad Spend"}
                  </div>
                </div>

                <div className="w-px h-8 lg:w-24 lg:h-px bg-white/10" />

                {/* الإحصائية 2: المشاريع المنجزة */}
                <div className="text-center">
                  <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    +40
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-white/80 mt-1">
                    {isArabic ? "مشروعاً وعملاً منجزاً" : "Shipped Projects"}
                  </div>
                </div>

                <div className="w-px h-8 lg:w-24 lg:h-px bg-white/10" />

                {/* الإحصائية 3: العملاء */}
                <div className="text-center">
                  <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#CCFF00] tracking-tight">
                    +25
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-white/80 mt-1">
                    {isArabic ? "عميلاً وشريك نجاح" : "Satisfied Clients"}
                  </div>
                </div>
              </div>

              {/* القسم الثالث: إدارة الحملات الإعلانية ومنصات السوشال */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-end">
                <span className="text-[11px] font-mono tracking-widest uppercase text-white/50 mb-2 font-semibold">
                  {isArabic ? "02 / حملات وأداء" : "02 / PERFORMANCE ADS"}
                </span>

                <h2
                  className={`font-black text-white mb-3 ${
                    isArabic
                      ? "text-2xl sm:text-3xl xl:text-4xl leading-snug"
                      : "text-2xl sm:text-3xl xl:text-4xl leading-tight uppercase tracking-tight"
                  }`}
                >
                  {isArabic ? (
                    <>
                      إدارة حملات إعلانية <br className="hidden sm:inline" />
                      <span className="text-[#CCFF00]">تحقق عوائد حقيقية</span>
                    </>
                  ) : (
                    <>
                      DATA-DRIVEN ADS <br className="hidden sm:inline" />
                      <span className="text-[#CCFF00]">THAT PRINT ROI</span>
                    </>
                  )}
                </h2>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm mb-4">
                  {isArabic
                    ? "استراتيجيات نمو ممولة واستحواذ دقيقة مبنية على البيانات لتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS)."
                    : "High-yield acquisition & scaling campaigns across all major networks, engineered for maximum ROAS."}
                </p>

                {/* أيقونات منصات السوشيال ميديا */}
                <div className="flex items-center gap-3 mb-5 text-white/70">
                  {/* Google */}
                  <span title="Google Ads" className="p-1.5 rounded-lg bg-white/5 hover:text-[#CCFF00] hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </span>

                  {/* Meta */}
                  <span title="Meta (Facebook & Instagram)" className="p-1.5 rounded-lg bg-white/5 hover:text-[#CCFF00] hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </span>

                  {/* TikTok */}
                  <span title="TikTok" className="p-1.5 rounded-lg bg-white/5 hover:text-[#CCFF00] hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </span>

                  {/* Snapchat */}
                  <span title="Snapchat" className="p-1.5 rounded-lg bg-white/5 hover:text-[#CCFF00] hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.298 2c-3.608 0-6.19 2.705-6.19 6.204 0 .783.219 2.378.506 3.088.118.29-.026.495-.296.67-.488.318-1.28.705-1.932 1.096-.341.205-.59.508-.43 1.01.176.549.916.748 1.545.834.336.046.545.241.52.56-.056.702-.686 2.583-2.615 2.977-.384.079-.533.364-.326.687.525.82 2.157 1.344 3.988 1.483.24.018.423.155.518.374.397.917 1.464 1.026 2.355 1.026.792 0 1.637-.17 2.357-.594.341-.2.723-.198 1.069.006.71.417 1.541.588 2.321.588.89 0 1.958-.109 2.355-1.026.096-.219.278-.356.518-.374 1.831-.139 3.463-.663 3.988-1.483.207-.323.058-.608-.326-.687-1.929-.394-2.559-2.275-2.615-2.977-.025-.319.184-.514.52-.56.629-.086 1.369-.285 1.545-.834.16-.502-.089-.805-.43-1.01-.652-.391-1.444-.778-1.932-1.096-.27-.175-.414-.38-.296-.67.287-.71.506-2.305.506-3.088C18.488 4.705 15.906 2 12.298 2z" />
                    </svg>
                  </span>

                  {/* X (Twitter) */}
                  <span title="X (Twitter)" className="p-1.5 rounded-lg bg-white/5 hover:text-[#CCFF00] hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </span>
                </div>

                <button
                  onClick={() => scrollToSection("contact-section")}
                  className="bg-[#CCFF00] text-black font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full hover:bg-white active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] cursor-pointer"
                >
                  {isArabic ? "أطلق حملتك ومشروعك معنا" : "Scale Your Brand Now"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* شريط الأرقام المتحرك اللانهائي */}
      <div
        ref={tickerRef}
        className={`reveal-fade ${
          tickerVisible ? "is-visible" : ""
        } marquee-pausable w-full overflow-hidden border-t border-b border-white/5 py-5 md:py-6 bg-black/40 backdrop-blur-md select-none`}
      >
        <div
          className="marquee-track flex w-max items-center gap-8 md:gap-12"
          style={{
            animation: isArabic
              ? "marquee-rtl 25s linear infinite"
              : "marquee 25s linear infinite",
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