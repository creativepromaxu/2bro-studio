"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useReveal from "../hooks/useReveal";

interface ServicesProps {
  isArabic: boolean;
}

export default function Services({ isArabic }: ServicesProps) {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>(0.15);
  const [featuredRef, featuredVisible] = useReveal<HTMLDivElement>(0.1);
  const [gridRef, gridVisible] = useReveal<HTMLDivElement>(0.1);

  // استعادة موضع السكرول عند الرجوع بالمتصفح
  useEffect(() => {
    const savedSection = sessionStorage.getItem("lastVisitedSection");
    if (savedSection === "services-section") {
      const timer = setTimeout(() => {
        const el = document.getElementById("services-section");
        if (el) {
          el.scrollIntoView({ behavior: "instant" });
          sessionStorage.removeItem("lastVisitedSection");
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // حفظ موضع السكرول قبل الانتقال لصفحة المشروع
  const handleServiceClick = () => {
    sessionStorage.setItem("lastVisitedSection", "services-section");
    sessionStorage.setItem("2bro-home-scroll-y", String(window.scrollY));
  };

  return (
    <section
      id="services-section"
      className="w-full py-20 sm:py-28 border-t border-white/5 bg-[#0A0A0A] px-4 sm:px-6 lg:px-12 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* عنوان القسم */}
      <div
        ref={headerRef}
        className={`reveal-up ${
          headerVisible ? "is-visible" : ""
        } mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4`}
      >
        <div>
          <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#CCFF00] uppercase block mb-3">
            {isArabic ? "// مجالات التخصص والخبرة" : "// AREAS OF EXPERTISE"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {isArabic ? "خدمات تصنع الفارق" : "Core Capabilities"}
          </h2>
        </div>
        <div className="text-xs font-mono font-semibold text-[#888888] tracking-widest hidden md:block">
          2BRO STUDIO / SPECIALIZED SOLUTIONS
        </div>
      </div>

      {/* 1. الكرتين الكبار في الأعلى */}
      <div
        ref={featuredRef}
        className={`reveal-up ${
          featuredVisible ? "is-visible" : ""
        } grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8`}
      >
        {/* خدمة 01: تصميم الهويات البصرية -> /project/01 */}
        <Link
          href="/project/01"
          onClick={handleServiceClick}
          className="group relative bg-[#111111]/90 hover:bg-[#141414] border border-white/10 hover:border-[#CCFF00]/50 rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-pointer block"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#CCFF00]/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-[#CCFF00]/[0.08] transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-[#CCFF00] font-bold tracking-widest px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20">
                01 // {isArabic ? "الهويات والأنظمة البصرية" : "IDENTITY & SYSTEMS"}
              </span>
              <span className="text-neutral-500 group-hover:text-[#CCFF00] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-2xl font-light">
                {isArabic ? "↖" : "↗"}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#CCFF00] transition-colors duration-300">
              {isArabic ? "تصميم الهويات البصرية" : "Brand Identity Design"}
            </h3>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {isArabic
                ? "بناء أنظمة بصرية استراتيجية وشعارات أيقونية تمنح علامتك التجارية الهيبة والتفوق التنافسي في السوق."
                : "Architecting iconic visual identities and strategic brand guidelines that elevate market authority and prestige."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {[
              isArabic ? "الأدلة البصرية" : "Brand Guidelines",
              isArabic ? "تطوير الشعارات" : "Logomarks",
              isArabic ? "فلسفة الألوان والخطوط" : "Typography & Palette",
              isArabic ? "الأصول الرقمية" : "Digital Assets",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono text-white/50 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>

        {/* خدمة 02: إدارة الحملات الإعلانية -> /project/02 */}
        <Link
          href="/project/02"
          onClick={handleServiceClick}
          className="group relative bg-[#111111]/90 hover:bg-[#141414] border border-white/10 hover:border-[#CCFF00]/50 rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-pointer block"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#CCFF00]/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-[#CCFF00]/[0.08] transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-[#CCFF00] font-bold tracking-widest px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20">
                02 // {isArabic ? "الحملات والأداء" : "GROWTH & MEDIA BUYING"}
              </span>
              <span className="text-neutral-500 group-hover:text-[#CCFF00] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-2xl font-light">
                {isArabic ? "↖" : "↗"}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#CCFF00] transition-colors duration-300">
              {isArabic ? "إدارة الحملات الإعلانية" : "Paid Ads Management"}
            </h3>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              {isArabic
                ? "تخطيط وإطلاق حملات ممولة مبنية على تحليل البيانات عبر منصات السوشيال بميزانيات تفوق 4 ملايين ريال لتحقيق أعلى عائد استثماري (ROAS)."
                : "Data-engineered paid media buying across top ad channels with +4M SAR managed spend, maximizing ROI and conversions."}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-xs font-mono text-white/50">
              {isArabic ? "المنصات المُدارة:" : "Supported Networks:"}
            </span>
            <div className="flex items-center gap-2.5 text-white/60">
              {/* Google */}
              <span className="p-1.5 rounded-lg bg-white/5 group-hover:text-[#CCFF00] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </span>
              {/* Meta */}
              <span className="p-1.5 rounded-lg bg-white/5 group-hover:text-[#CCFF00] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </span>
              {/* TikTok */}
              <span className="p-1.5 rounded-lg bg-white/5 group-hover:text-[#CCFF00] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </span>
              {/* Snapchat */}
              <span className="p-1.5 rounded-lg bg-white/5 group-hover:text-[#CCFF00] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.298 2c-3.608 0-6.19 2.705-6.19 6.204 0 .783.219 2.378.506 3.088.118.29-.026.495-.296.67-.488.318-1.28.705-1.932 1.096-.341.205-.59.508-.43 1.01.176.549.916.748 1.545.834.336.046.545.241.52.56-.056.702-.686 2.583-2.615 2.977-.384.079-.533.364-.326.687.525.82 2.157 1.344 3.988 1.483.24.018.423.155.518.374.397.917 1.464 1.026 2.355 1.026.792 0 1.637-.17 2.357-.594.341-.2.723-.198 1.069.006.71.417 1.541.588 2.321.588.89 0 1.958-.109 2.355-1.026.096-.219.278-.356.518-.374 1.831-.139 3.463-.663 3.988-1.483.207-.323.058-.608-.326-.687-1.929-.394-2.559-2.275-2.615-2.977-.025-.319.184-.514.52-.56.629-.086 1.369-.285 1.545-.834.16-.502-.089-.805-.43-1.01-.652-.391-1.444-.778-1.932-1.096-.27-.175-.414-.38-.296-.67.287-.71.506-2.305.506-3.088C18.488 4.705 15.906 2 12.298 2z" />
                </svg>
              </span>
              {/* X */}
              <span className="p-1.5 rounded-lg bg-white/5 group-hover:text-[#CCFF00] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* 2. شبكة الخدمات الثلاث المتبقية */}
      <div
        ref={gridRef}
        className={`reveal-up ${
          gridVisible ? "is-visible" : ""
        } grid grid-cols-1 md:grid-cols-3 gap-6`}
      >
        {/* خدمة 03: مواقع الويب -> /project/03 */}
        <Link
          href="/project/03"
          onClick={handleServiceClick}
          className="group relative bg-[#0E0E0E] hover:bg-[#121212] border border-white/5 hover:border-[#CCFF00]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer block"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#CCFF00] font-semibold">
                03
              </span>
              <span className="text-white/40 group-hover:text-[#CCFF00] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform text-lg">
                {isArabic ? "←" : "→"}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#CCFF00] transition-colors">
              {isArabic ? "تصميم وتطوير المواقع" : "Web Design & Dev"}
            </h4>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed group-hover:text-white/80 transition-colors">
              {isArabic
                ? "مواقع تعريفية وتجارية مخصصة وعالية السرعة مبنية بأحدث تقنيات الويب دون قوالب مسبقة."
                : "Bespoke, blazingly fast websites built from scratch to elevate your online experience."}
            </p>
          </div>
        </Link>

        {/* خدمة 04: تصميمات السوشيال ميديا -> /project/04 */}
        <Link
          href="/project/04"
          onClick={handleServiceClick}
          className="group relative bg-[#0E0E0E] hover:bg-[#121212] border border-white/5 hover:border-[#CCFF00]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer block"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#CCFF00] font-semibold">
                04
              </span>
              <span className="text-white/40 group-hover:text-[#CCFF00] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform text-lg">
                {isArabic ? "←" : "→"}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#CCFF00] transition-colors">
              {isArabic ? "تصاميم السوشيال ميديا" : "Social Media Design"}
            </h4>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed group-hover:text-white/80 transition-colors">
              {isArabic
                ? "صناعة محتوى بصري سينمائي وجذاب لمنصاتك يوقف التمرير ويجذب انتباه عملائك المستهدفين."
                : "Scroll-stopping social content crafted with high visual aesthetics to dominate your feed."}
            </p>
          </div>
        </Link>

        {/* خدمة 05: المطبوعات والبروفايل -> /project/05 */}
        <Link
          href="/project/05"
          onClick={handleServiceClick}
          className="group relative bg-[#0E0E0E] hover:bg-[#121212] border border-white/5 hover:border-[#CCFF00]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer block"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#CCFF00] font-semibold">
                05
              </span>
              <span className="text-white/40 group-hover:text-[#CCFF00] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform text-lg">
                {isArabic ? "←" : "→"}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#CCFF00] transition-colors">
              {isArabic ? "المطبوعات وبروفايل الشركات" : "Print & Editorial"}
            </h4>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed group-hover:text-white/80 transition-colors">
              {isArabic
                ? "إخراج بروفايلات الشركات، الكتيبات الفاخرة، ومواد التغليف بأعلى معايير الطباعة الحديثة."
                : "Premium corporate company profiles, lookbooks, and high-end marketing editorial prints."}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}