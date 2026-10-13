"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

export default function PrintDesignPage() {
  const [isArabic, setIsArabic] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("2bro-lang");
    if (saved === "en") setIsArabic(false);
  }, []);

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    localStorage.setItem("2bro-lang", isArabic ? "ar" : "en");
  }, [isArabic]);

  // 1. المستكشف التفاعلي لتصنيفات المطبوعات الأربعة
  const [activeCategory, setActiveCategory] = useState<"stationery" | "packaging" | "marketing" | "events">("stationery");

  const printCategories = {
    stationery: {
      titleAr: "القرطاسية والمراسلات الرسمية الفاخرة",
      titleEn: "Stationery & Corporate Collateral",
      descAr: "كروت العمل التنفيذية، أوراق المراسلات الرسمية (Letterhead)، الأظرف بمختلف المقاسات، فولدرات تقديم العروض، الفواتير، وسندات القبض المعتمدة.",
      descEn: "Executive luxury business cards, branded letterheads, presentation folders, multi-sized envelopes, invoices, and corporate stamps.",
      itemsAr: ["كروت عمل فاخرة", "أوراق رسمية Letterhead", "فولدر عروض مع جيب داخلي", "أظرف مراسلات", "فواتير وسندات"],
      itemsEn: ["Luxury Business Cards", "Corporate Letterheads", "Presentation Folders", "Mailing Envelopes", "Official Invoices"],
      badge: "OFFICE ESSENTIALS",
    },
    packaging: {
      titleAr: "تصاميم التغليف والعلب والأكياس والملصقات",
      titleEn: "Product Packaging, Boxes & Bags",
      descAr: "هندسة خطوط القَص والتكسير (Dielines) لعلب المنتجات الكرتونية، أكياس التسوق الورقية والقماشية، ملصقات وستيكرات التغليف، وبطاقات الأسعار (Hangtags).",
      descEn: "Custom product packaging box dielines, luxury paper shopping bags, branded packaging tape, hangtags, and product label stickers.",
      itemsAr: ["علب وتغليف المنتجات (Boxes)", "أكياس تسوق ورقية فاخرة", "ستيكرات وليبل المنتجات", "تاغات الأسعار Hangtags", "شرائط وتغليف الهدايا"],
      itemsEn: ["Product Box Dielines", "Luxury Shopping Bags", "Stickers & Labels", "Apparel Hangtags", "Branded Packaging Sleeves"],
      badge: "PACKAGING & RETAIL",
    },
    marketing: {
      titleAr: "المطبوعات الترويجية والكتالوجات والبروشورات",
      titleEn: "Marketing Editorial, Catalogs & Brochures",
      descAr: "بروشورات تسويقية ثنائية وثلاثية الطي (Bi-Fold & Tri-Fold)، فلايرات إعلانية، كتالوجات المنتجات، مجلات دورية، وبروفايلات الشركات التعريفية.",
      descEn: "Tri-fold & Bi-fold marketing brochures, promotional flyers, comprehensive product lookbooks, catalogs, and company profile booklets.",
      itemsAr: ["بروشورات مطوية (Tri-Fold / Z-Fold)", "فلايرات إعلانية سريعة", "كتالوجات المنتجات Lookbooks", "بروفايلات الشركات التعريفية", "منشورات وقوائم طعام Menus"],
      itemsEn: ["Tri-Fold & Bi-Fold Brochures", "Promotional Flyers", "Product Lookbooks", "Company Profiles", "Editorial Lookbooks"],
      badge: "MARKETING & SALES",
    },
    events: {
      titleAr: "مطبوعات المعارض والمقاسات الكبرى (Large Format)",
      titleEn: "Events, Exhibitions & Large Format Prints",
      descAr: "بنرات ورول اب المعارض (Roll-ups)، جدران التصوير والبوب اب (Backdrops)، بوسترات إعلانية جدارية، ملصقات السيارات، ولوحات الواجهات الخارجية.",
      descEn: "Exhibition roll-up banners, media wall backdrops, pop-up booth graphics, large format promotional posters, and outdoor signage.",
      itemsAr: ["رول اب المعارض (Roll-ups)", "جدران وخلفيات التصوير Backdrop", "بوسترات إعلانية ضخمة", "لوحات الإعلانات المعلقة", "بنرات ستاندات الفعاليات"],
      itemsEn: ["Exhibition Roll-up Banners", "Event Media Backdrops", "Large Wall Posters", "Hanging Display Signs", "Event Stand Graphics"],
      badge: "LARGE FORMAT & EXPO",
    },
  };

  // 2. معايير جاهزية الطباعة الفنية
  const [specTab, setSpecTab] = useState<"cmyk" | "dieline" | "resolution">("cmyk");

  const techSpecs = {
    cmyk: {
      titleAr: "معايرة الألوان الطباعية بدقة (CMYK & Pantone)",
      titleEn: "CMYK & Pantone Spot Color Matching",
      descAr: "نضبط ألوان ملفاتك على أنظمة الفرز الرباعي CMYK مع أكواد Pantone المعتمدة، لنضمن أن يخرج اللون على الورق مطابقاً تماماً لما تراه على الشاشة دون أي بهتان.",
      descEn: "Strict color grading using calibrated CMYK and certified Pantone spot formulas, guaranteeing vibrant, exact color reproduction without fading.",
      tag: "COLOR ACCURACY",
    },
    dieline: {
      titleAr: "خطوط القَص والثني الدقيقة (Precision Dielines)",
      titleEn: "Vector Dielines & Bleed Margins",
      descAr: "نرسم خطوط قَص وتكسير هندسية متطابقة مع ماكينات الليزر والمطابع (مع هوامش أمان 3mm Bleed)، لتجنب أي إهدار أو قص خاطئ لمحتوى التصميم.",
      descEn: "Engineered vector cutting, creasing, and bleed lines matching professional die-cut machinery, completely eliminating production misalignment.",
      tag: "DIELINE ENGINEERING",
    },
    resolution: {
      titleAr: "دقة متناهية 300 DPI وملفات مفتوحة للمطابع",
      titleEn: "300 DPI Native Output & Master Vectors",
      descAr: "نسلمك ملفات طباعية بأعلى دقة متجهة لا تتأثر بالتكبير (Vector PDF, AI, InDesign)، متضمنة الخطوط المحولة (Outlines) لتكون جاهزة للمطبعة فوراً.",
      descEn: "All files exported at native 300 DPI ultra-high definition with outlined typography in industry-standard formats ready for press execution.",
      tag: "PRINT-READY ASSETS",
    },
  };

  const whatsappNumber = "966500000000";
  const getPackageUrl = (pkgName: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      isArabic
        ? `مرحباً 2Bro Studio، أريد الاستفسار وبدء العمل على (${pkgName}) لمشروعي.`
        : `Hello 2Bro Studio, I would like to inquire about (${pkgName}) for my project.`
    )}`;

  return (
    <div
      className="min-h-screen bg-[#070707] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24 pt-24 overflow-x-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* 1. الناف بار الأصلي للموقع */}
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* شريط خدمات المطبوعات الشاملة اللانهائي */}
      <div className="w-full bg-[#CCFF00]/10 border-y border-[#CCFF00]/20 py-2.5 overflow-hidden select-none">
        <div
          className="flex w-max items-center gap-8 text-xs font-mono font-bold text-[#CCFF00] uppercase"
          style={{
            animation: isArabic ? "marquee-rtl 30s linear infinite" : "marquee 30s linear infinite",
          }}
        >
          {[
            "📦 BESPOKE PACKAGING & PRODUCT BOXES",
            "•",
            "📇 LUXURY STATIONERY & BUSINESS CARDS",
            "•",
            "📑 BROCHURES, CATALOGS & FLYERS",
            "•",
            "🎪 EVENT ROLL-UPS & EXPO BACKDROPS",
            "•",
            "📐 100% PRECISE DIELINES & CMYK SPECS",
            "•",
            "🏷️ CUSTOM STICKERS, LABELS & HANGTAGS",
            "•",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 whitespace-nowrap">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. الهيرو التسويقي الشامل لكافة المطبوعات */}
      <section className="relative pt-10 sm:pt-16 pb-14 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#CCFF00]/[0.04] blur-[140px] pointer-events-none rounded-full animate-pulse" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#CCFF00] mb-6 font-bold shadow-[0_0_20px_rgba(204,255,0,0.1)]">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span>
            {isArabic
              ? "// تصميم كافة المطبوعات التجارية والورقية ومواد التغليف"
              : "// COMPLETE COMMERCIAL PRINT, PACKAGING & EDITORIAL DESIGN"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.25] sm:leading-[1.18] mb-6 tracking-tight">
          {isArabic ? (
            <>
              من كرت العمل وعلب التغليف.. إلى بنرات المعارض:
              <br />
              <span className="text-[#CCFF00]">نصمم كافة مطبوعاتك بدقة متناهية</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                تُبهر العميل وتكون جاهزة للمطابع بدون أخطاء
              </span>
            </>
          ) : (
            <>
              FROM BUSINESS CARDS & BOX PACKAGING.. TO EXPO BANNERS:
              <br />
              <span className="text-[#CCFF00]">WE DESIGN ALL PRINT COLLATERAL</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                ENGINEERED FOR PRESS PERFECTION WITH ZERO ERRORS
              </span>
            </>
          )}
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {isArabic ? (
            <>
              المطبوعات هي الملمس الحقيقي لعلامتك التجارية في أيدي عملائك. سواء كنت تحتاج قرطاسية رسمية، علب وتغليف لمنتجاتك، بروشورات تسويقية، أو بنرات معارض ضخمة؛ في <strong className="text-white">2Bro Studio</strong> نهندس تصاميمك بأعلى معايير الطباعة العالمية.
            </>
          ) : (
            <>
              Print collateral is the tangible reality of your brand. Whether you require executive stationery, product box packaging, sales brochures, or massive exhibition displays, we engineer print assets with absolute precision.
            </>
          )}
        </p>

        {/* الإحصائيات الشاملة للمطبوعات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              +150
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "مطبوعة تجارية وتغليف منفذ" : "Delivered Print & Packaging Works"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              100%
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "دقة خطوط القَص والألوان CMYK" : "Zero-Error Press Tolerances"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              300DPI
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "دقة متجهية فائقة الوضوح" : "Ultra-HD Native Resolution"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              +12
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "تصنيفاً ونوعاً طباعياً نقدمه" : "Print Disciplines Covered"}
            </span>
          </div>
        </div>
      </section>

      {/* 3. المستكشف التفاعلي الشامل لعالم المطبوعات (Print Spectrum Explorer) */}
      <section className="py-14 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // INTERACTIVE PRINT SPECTRUM
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "استكشف خدمات المطبوعات التي نقدمها" : "Explore Our Full Print Spectrum"}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            {isArabic ? "اختر أحد الأقسام لاستعراض ما نصممه من مواد ورقية وتغليفات ومعارض:" : "Click any sector below to inspect deliverables and formats:"}
          </p>

          {/* أزرار التبويبات للتصنيفات الأربعة */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 mt-6">
            {(["stationery", "packaging", "marketing", "events"] as const).map((cat) => {
              const isActive = activeCategory === cat;
              const labels = {
                stationery: isArabic ? "📇 القرطاسية الرسمية" : "Stationery",
                packaging: isArabic ? "📦 التغليف والعلب" : "Packaging & Bags",
                marketing: isArabic ? "📑 البروشورات والكتالوج" : "Brochures & Catalogs",
                events: isArabic ? "🎪 بنرات ورول اب المعارض" : "Expo & Roll-ups",
              };
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isActive ? "bg-[#CCFF00] text-black shadow-md scale-[1.02]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {labels[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* كارت عرض تفاصيل التصنيف المختار */}
        <div className="bg-[#101010] border-2 border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <span className="text-xs font-mono font-bold text-[#CCFF00] px-3.5 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20">
              {printCategories[activeCategory].badge}
            </span>
            <span className="text-xs font-mono text-white/40 font-bold">2BRO PRINT CAPABILITIES</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-snug">
            {isArabic ? printCategories[activeCategory].titleAr : printCategories[activeCategory].titleEn}
          </h3>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl mb-8">
            {isArabic ? printCategories[activeCategory].descAr : printCategories[activeCategory].descEn}
          </p>

          {/* قائمة العناصر التي نصممها في هذا القسم */}
          <div>
            <span className="text-xs font-mono text-white/50 uppercase block mb-3 font-semibold">
              {isArabic ? "ما نصممه لك في هذا القسم:" : "Key deliverables in this category:"}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {(isArabic ? printCategories[activeCategory].itemsAr : printCategories[activeCategory].itemsEn).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/90"
                >
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. معايير جاهزية الطباعة الفنية (Zero-Error Print Engineering) */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // PRESS ENGINEERING STANDARDS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "معايير هندسية تضمن مطبوعات جاهزة للمطابع دون أخطاء" : "Technical Tolerances For Press Perfection"}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            {isArabic ? "لا نترك ملفاتك للصدفة؛ نسلمك ملفات مطابقة لمواصفات ماكينات الطباعة العالمية:" : "Zero guesswork for print operators. Exact tolerances matching global machinery:"}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 max-w-xl mx-auto">
          {(["cmyk", "dieline", "resolution"] as const).map((tab) => {
            const isActive = specTab === tab;
            const labels = {
              cmyk: isArabic ? "معايرة الألوان" : "Color Calibration",
              dieline: isArabic ? "خطوط القَص" : "Vector Dielines",
              resolution: isArabic ? "الدقة المتجهة" : "300 DPI Native",
            };
            return (
              <button
                key={tab}
                onClick={() => setSpecTab(tab)}
                className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive ? "bg-[#CCFF00] text-black shadow-md scale-[1.02]" : "text-white/70 hover:text-white"
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 relative overflow-hidden transition-all duration-500 shadow-xl">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-xs font-mono text-[#CCFF00] font-bold px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20">
              {techSpecs[specTab].tag}
            </span>
            <span className="text-xs font-mono text-white/40">100% PRESS READY</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {isArabic ? techSpecs[specTab].titleAr : techSpecs[specTab].titleEn}
          </h3>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">
            {isArabic ? techSpecs[specTab].descAr : techSpecs[specTab].descEn}
          </p>
        </div>
      </section>

      {/* 5. باقات المطبوعات الشاملة الثلاث */}
      <section className="py-16 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-2">
            // PACKAGES & INVESTMENT
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "باقات تصميم المطبوعات الشاملة" : "Comprehensive Print Design Packages"}
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-2">
            {isArabic ? "اختر النطاق الطباعي الأنسب لاحتياجات علامتك أو منتجاتك:" : "Select the scope tailored for your brand or product line:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* الباقة 1: باقة القرطاسية والمراسلات الرسمية */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">STATIONERY PACK</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة القرطاسية الرسمية" : "Corporate Stationery Pack"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "كل ما تحتاجه شركتك للمراسلات والاجتماعات اليومية والتعاملات الرسمية بأعلى فخامة."
                  : "Essential day-to-day corporate communication collateral engineered with executive elegance."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "كروت العمل التنفيذية الفاخرة (وجهين)" : "Luxury double-sided business cards"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "أوراق المراسلات الرسمية (Letterhead)" : "Corporate letterhead (Print & Word/PDF)"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "أظرف مراسلات رسمية بمقاسين مختلفين" : "2 Custom corporate envelope formats"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "فولدر حفظ الأوراق والعروض مع جيب داخلي" : "Presentation folder with die-cut pocket"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "سندات وفواتير رسمية وأختام الشركة" : "Official receipts, invoices & company stamp"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة القرطاسية الرسمية" : "Corporate Stationery Pack")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب باقة القرطاسية" : "Choose Stationery"}
            </a>
          </div>

          {/* الباقة 2: باقة المطبوعات التسويقية والترويجية (الأكثر طلباً) */}
          <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0E0E0E] border-2 border-[#CCFF00] flex flex-col justify-between shadow-[0_0_35px_rgba(204,255,0,0.15)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black font-extrabold text-[10px] uppercase font-mono px-3.5 py-1 rounded-full tracking-wider whitespace-nowrap">
              {isArabic ? "الأكثر طلباً للترويج والمبيعات" : "MOST POPULAR // MARKETING"}
            </span>

            <div>
              <span className="font-mono text-xs text-[#CCFF00] block mb-2 mt-1">MARKETING & PROMO</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة المطبوعات التسويقية والمعارض" : "Marketing & Promotional Suite"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "لتسويق خدماتك في الفعاليات والمؤتمرات ومراكز البيع عبر بروشورات وكتالوجات ورول اب جذاب."
                  : "High-impact promotional print assets engineered for trade shows, events, and sales presentations."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "بروشورات مطوية فاخرة (Tri-Fold أو Bi-Fold)" : "Luxury folded marketing brochures"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "فلايرات ترويجية للعروض والمنتجات" : "Promotional flyers with high conversion hierarchy"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "بنرات ورول اب المعارض والمؤتمرات (Roll-ups)" : "Exhibition roll-up displays & banners"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "كتالوج منتجات أو بروفايل تعريفي أنيق" : "Product catalog booklet or profile overview"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "ملفات فرز طباعي جاهزة للتنفيذ الفوري" : "Press-ready color separations & master PDFs"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة المطبوعات التسويقية والمعارض" : "Marketing & Promotional Suite")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3.5 rounded-full bg-[#CCFF00] text-black font-extrabold text-xs hover:bg-white transition-all shadow-md active:scale-95"
            >
              {isArabic ? "طلب باقة المطبوعات التسويقية" : "Choose Marketing Suite"}
            </a>
          </div>

          {/* الباقة 3: باقة التغليف والعبوات والمنتجات */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">PACKAGING & RETAIL</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة التغليف والعبوات الشاملة" : "Complete Packaging & Retail Suite"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "لأصحاب المنتجات والمتاجر؛ هندسة علب التغليف، أكياس التسوق، الملصقات، وتغليف الشحن."
                  : "Engineered for physical product brands: custom boxes, luxury retail bags, and product packaging labels."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تصميم علب المنتجات مع خطوط القَص (Dielines)" : "Product box packaging with custom dielines"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "أكياس تسوق ورقية وقماشية فاخرة" : "Bespoke retail shopping paper bags"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "ملصقات وستيكرات التغليف وليبل المنتجات" : "Product packaging labels & sealing stickers"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تاغات الأسعار للملابس والمنتجات (Hangtags)" : "Apparel & product price hangtags"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تحديد الخامات والورق المناسب للتصنيع" : "Material & paper stock manufacturing advisory"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة التغليف والعبوات الشاملة" : "Complete Packaging & Retail Suite")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب باقة التغليف" : "Choose Packaging"}
            </a>
          </div>

        </div>
      </section>

      {/* 6. كارت الإغلاق والـ CTA */}
      <section className="pt-16 pb-12 px-5 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0D0D0D] border border-[#CCFF00]/40 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <div className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] mb-4">
            {isArabic ? "جاهز لطباعة مواد تعكس هيبة علامتك؟" : "Ready to press exceptional print assets?"}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {isArabic ? "امنح مشروعك مطبوعات تفرض احترامها في كل يد" : "Tangible Print Assets That Command Authority"}
          </h2>

          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {isArabic
              ? "تواصل معنا لمناقشة نوع وحجم المطبوعات التي تحتاجها. سنجهز لك ملفات طباعية فاخرة ومطابقة لمواصفات المطابع العالمية لتستلم عملاً يبهرك من اللمسة الأولى."
              : "Connect with us today to outline your print & packaging scope. We deliver flawless, press-ready assets engineered to turn heads."}
          </p>

          <a
            href={getPackageUrl(isArabic ? "استشارة تصميم مطبوعات وتغليف" : "Print & Packaging Consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-black text-sm sm:text-base px-9 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(204,255,0,0.3)] active:scale-95 cursor-pointer"
          >
            <span>{isArabic ? "ابدأ تصميم مطبوعاتك معنا الآن" : "Start Your Print Project Now"}</span>
            <span className="text-xl">{isArabic ? "←" : "→"}</span>
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-[11px] font-mono text-white/50">
            <span>• {isArabic ? "دقة طباعة 300 DPI معتمدة" : "Verified 300 DPI Print Files"}</span>
            <span>• {isArabic ? "ملفات مفتوحة AI و InDesign" : "Master Vector Source Files"}</span>
            <span>• {isArabic ? "جاهزية تامة لماكينات المطابع" : "100% Press Ready Tolerances"}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
