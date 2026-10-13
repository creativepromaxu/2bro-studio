"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

export default function SocialMediaDesignPage() {
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

  // 1. التفاعل الأول: محاكي الكاروسيل التفاعلي (Instagram Carousel Simulator)
  const [carouselSlide, setCarouselSlide] = useState(0);
  const carouselSlides = [
    {
      step: "01",
      badgeAr: "شريحة الهوك البصري (THE HOOK)",
      badgeEn: "THE VISUAL HOOK",
      titleAr: "كيف تجعل العميل يوقف التمرير في ثانيتين؟",
      titleEn: "How to stop the scroll in under 2 seconds?",
      descAr: "العنوان بخط ضخم ومتباعد، صورة سينمائية مع تباين قوي تخطف انتباه العين وسط آلاف البوستات المكررة.",
      descEn: "Bold typography scale, obsidian-contrast canvas, and high visual tension that halts rapid thumb scrolling.",
    },
    {
      step: "02",
      badgeAr: "شريحة القيمة والفائدة (THE VALUE)",
      badgeEn: "THE VALUE DROP",
      titleAr: "تصميم مريح للعين يسهل قراءته بالكامل",
      titleEn: "Scannable layout engineered to be saved",
      descAr: "تقسيم المعلومات إلى نقاط مرئية بسيطة تمنح القارئ إحساساً بالفائدة الفورية وتدفعه لضغط زر الحفظ (Save).",
      descEn: "Bite-sized typography hierarchy making complex concepts instantly digestible and highly shareable.",
    },
    {
      step: "03",
      badgeAr: "شريحة الإغلاق والطلب (THE CALL TO ACTION)",
      badgeEn: "THE ENGAGEMENT CTA",
      titleAr: "دعوة واضحة تقود الزائر إلى طلب خدمتك",
      titleEn: "Frictionless call to action driving DMs",
      descAr: "نهاية مدروسة توجّه العميل مباشرة لإرسال رسالة خاصة، طلب استشارة، أو حفظ المنشور للرجوع إليه لاحقاً.",
      descEn: "Clear, frictionless prompt driving users straight into your DMs or direct link in bio.",
    },
  ];

  // 2. التفاعل الثاني: مبدّل مقاسات المنصات (Format Switcher)
  const [formatMode, setFormatMode] = useState<"square" | "story" | "banner">("square");

  // 3. التفاعل الثالث: ركائز التصميم الفيروسي
  const [pillarTab, setPillarTab] = useState<"hook" | "grid" | "retention">("hook");

  const pillarsData = {
    hook: {
      titleAr: "الهوك البصري في أول ثانيتين",
      titleEn: "The 2-Second Visual Hook",
      descAr: "المستخدم يمرر مئات البوستات بالدقيقة؛ نصمم لك عناصر غير نمطية تجبر إبهام المتصفح على التوقف لقراءة منشورك.",
      descEn: "Users scroll past hundreds of posts per minute. We engineer disruptive visual contrasts that force the thumb to halt.",
      tag: "STOP-THE-SCROLL",
    },
    grid: {
      titleAr: "تناسق وترتيب شبكة الحساب (Grid)",
      titleEn: "Cohesive Feed Aesthetic",
      descAr: "حسابك هو متجرك وواجهتك؛ نضمن أن تظهر الصفحة ككتلة بصرية واحدة تعكس فخامة واحترافية علامتك التجارية من النظرة الأولى.",
      descEn: "Your profile is your digital magazine cover. We balance colors and layouts so every post reinforces unified brand prestige.",
      tag: "FEED ARCHITECTURE",
    },
    retention: {
      titleAr: "زيادة معدل الحفظ والمشاركة (Saves & Shares)",
      titleEn: "Algorithm-Friendly Retention",
      descAr: "خوارزميات المنصات تكافئ المنشورات المفيدة؛ نصنع تصاميم كاروسيل غنية بالمعلومات تجعل الزوار يحفظونها وينشرونها لغيرهم.",
      descEn: "Social algorithms reward dwell time and bookmarks. Our structured editorial carousels maximize saves and organic reach.",
      tag: "ORGANIC SCALE",
    },
  };

  const whatsappNumber = "966500000000"; // استبدله برقمكم الفعلي
  const getPackageUrl = (pkgName: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      isArabic
        ? `مرحباً 2Bro Studio، أريد الاستفسار وبدء العمل على (${pkgName}) لحساباتي.`
        : `Hello 2Bro Studio, I would like to inquire and get started with (${pkgName}) for my social channels.`
    )}`;

  return (
    <div
      className="min-h-screen bg-[#070707] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24 pt-24 overflow-x-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* 1. الناف بار الأصلي للموقع */}
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* شريط الإلهام البصري اللانهائي */}
      <div className="w-full bg-[#CCFF00]/10 border-y border-[#CCFF00]/20 py-2.5 overflow-hidden select-none">
        <div
          className="flex w-max items-center gap-8 text-xs font-mono font-bold text-[#CCFF00] uppercase"
          style={{
            animation: isArabic ? "marquee-rtl 28s linear infinite" : "marquee 28s linear infinite",
          }}
        >
          {[
            "⚡ STOP-THE-SCROLL VISUAL DESIGN",
            "•",
            "📸 EDITORIAL INSTAGRAM CAROUSELS",
            "•",
            "📱 HIGH-ENGAGEMENT STORY SYSTEMS",
            "•",
            "🔥 BRANDED PROFILE GRID HARMONY",
            "•",
            "🐦 SLEEK X & LINKEDIN GRAPHICS",
            "•",
            "🎨 ZERO RECYCLED CANVA TEMPLATES",
            "•",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 whitespace-nowrap">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. الهيرو التسويقي */}
      <section className="relative pt-10 sm:pt-16 pb-14 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#CCFF00]/[0.04] blur-[140px] pointer-events-none rounded-full animate-pulse" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#CCFF00] mb-6 font-bold shadow-[0_0_20px_rgba(204,255,0,0.1)]">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span>
            {isArabic
              ? "// تصاميم السوشيال ميديا وصناعة المحتوى البصري"
              : "// SOCIAL MEDIA VISUAL DESIGN & CONTENT SYSTEMS"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.25] sm:leading-[1.18] mb-6 tracking-tight">
          {isArabic ? (
            <>
              في زمن التمرير السريع، لديك ثانيتان:
              <br />
              <span className="text-[#CCFF00]">إما أن يتجاهلك الزائر، أو يوقفه تصميمك</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                ويجبره على القراءة والمتابعة والشراء
              </span>
            </>
          ) : (
            <>
              IN RAPID FEEDS, YOU HAVE 2 SECONDS:
              <br />
              <span className="text-[#CCFF00]">STOP THE SCROLL OR BE IGNORED</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                ELEVATING YOUR FEED INTO AN AUTHORITY MAGAZINE
              </span>
            </>
          )}
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {isArabic ? (
            <>
              لا نصنع تصاميم مكررة بقوالب كانفا المبتذلة! في <strong className="text-white">2Bro Studio</strong>، نهندس محتوى بصري سينمائي يمنح حسابك هيبة العلامات التجارية الكبرى، ويرفع معدل الحفظ والمشاركة (Saves & Shares) من أول نظرة.
            </>
          ) : (
            <>
              We reject generic, recycled templates. At <strong className="text-white">2Bro Studio</strong>, we craft scroll-stopping visual assets that establish category dominance and compound audience saves and shares.
            </>
          )}
        </p>

        {/* الإحصائيات الخاصة بالسوشيال ميديا */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              +500
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "تصميم سوشيال ميديا منفذ" : "Crafted Social Assets"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              2s
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "معدل إيقاف التمرير البصري" : "Average Scroll-Stop Speed"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              3.4x
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "ارتفاع معدل الحفظ والمشاركة" : "Saves & Shares Multiplier"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              100%
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "تصاميم حصرية بدون قوالب جاهزة" : "Original Non-Template Art"}
            </span>
          </div>
        </div>
      </section>

      {/* 3. التفاعل الأول: محاكي الكاروسيل التفاعلي (Instagram Carousel Simulator) */}
      <section className="py-14 px-5 sm:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // INTERACTIVE CAROUSEL SIMULATOR
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "جرّب محاكي الكاروسيل: كيف نهندس المنشور؟" : "Interactive Carousel Inspector: Behind The Hook"}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            {isArabic ? "اضغط على الأسهم للتنقل بين الشرائح ومشاهدة هيكلة المحتوى الذي يحقق أعلى انتشار:" : "Navigate slides to inspect how we engineer high-retention carousels:"}
          </p>
        </div>

        {/* كارت محاكاة بوست إنستغرام التفاعلي */}
        <div className="bg-[#101010] border-2 border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* شريط رأس الحساب */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#CCFF00] to-neutral-700 flex items-center justify-center font-bold text-black text-sm">
                2B
              </div>
              <div className="text-start">
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <span>your_brand_official</span>
                  <span className="text-[#CCFF00] text-xs">✓</span>
                </div>
                <div className="text-[10px] font-mono text-white/50">Sponsored / Official Feed</div>
              </div>
            </div>

            {/* مؤشر رقم الشريحة الحالية */}
            <span className="text-xs font-mono font-bold text-[#CCFF00] px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20">
              {carouselSlide + 1} / {carouselSlides.length}
            </span>
          </div>

          {/* محتوى الشريحة المعروضة حالياً */}
          <div className="min-h-[190px] flex flex-col justify-center text-start">
            <span className="text-[11px] font-mono text-[#CCFF00] font-bold tracking-wider uppercase block mb-2">
              {isArabic ? carouselSlides[carouselSlide].badgeAr : carouselSlides[carouselSlide].badgeEn}
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white mb-3 leading-snug">
              {isArabic ? carouselSlides[carouselSlide].titleAr : carouselSlides[carouselSlide].titleEn}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl">
              {isArabic ? carouselSlides[carouselSlide].descAr : carouselSlides[carouselSlide].descEn}
            </p>
          </div>

          {/* أدوات التحكم في التمرير ومؤشرات النقط */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
            {/* مؤشرات الشرائح */}
            <div className="flex items-center gap-1.5">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    carouselSlide === idx ? "w-7 bg-[#CCFF00]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* أزرار السابق والتالي */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCarouselSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Previous Slide"
              >
                {isArabic ? "→" : "←"}
              </button>
              <button
                onClick={() => setCarouselSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Next Slide"
              >
                {isArabic ? "←" : "→"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. التفاعل الثاني: مبدّل مقاسات المنصات (Format Switcher) */}
      <section className="py-14 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // MULTI-FORMAT CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "تغطية بصرية شاملة لكافة أبعاد المنصات" : "Engineered Across Every Social Dimension"}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            {isArabic ? "اختر المقاس لتشاهد كيف نكيّف تصميم علامتك باحترافية على كافة المنصات:" : "Select format to preview how we tailor visual balance for each platform:"}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 mt-6 flex-wrap justify-center">
            <button
              onClick={() => setFormatMode("square")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                formatMode === "square" ? "bg-[#CCFF00] text-black shadow-md" : "text-white/60 hover:text-white"
              }`}
            >
              📸 {isArabic ? "بوست إنستغرام (1:1 / 4:5)" : "Feed Post (1:1 / 4:5)"}
            </button>
            <button
              onClick={() => setFormatMode("story")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                formatMode === "story" ? "bg-[#CCFF00] text-black shadow-md" : "text-white/60 hover:text-white"
              }`}
            >
              📱 {isArabic ? "ستوري وريلز (9:16)" : "Story & Reel Cover (9:16)"}
            </button>
            <button
              onClick={() => setFormatMode("banner")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                formatMode === "banner" ? "bg-[#CCFF00] text-black shadow-md" : "text-white/60 hover:text-white"
              }`}
            >
              🐦 {isArabic ? "غلاف منصة إكس ولينكدإن (16:9)" : "Header Banner (16:9)"}
            </button>
          </div>
        </div>

        {/* عرض الإطار التفاعلي المتكيف حسب المقاس */}
        <div className="flex justify-center transition-all duration-500">
          <div
            className={`transition-all duration-500 bg-[#0F0F0F] border-2 border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative ${
              formatMode === "square"
                ? "w-[340px] sm:w-[420px] aspect-square border-[#CCFF00]/40"
                : formatMode === "story"
                ? "w-[280px] sm:w-[320px] h-[480px] border-[#CCFF00]/40"
                : "w-full max-w-3xl min-h-[220px] border-[#CCFF00]/40"
            }`}
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-[#CCFF00] block mb-2">
                {formatMode === "square" ? "FEED SQUARE // 1080x1080" : formatMode === "story" ? "STORY VERTICAL // 1080x1920" : "PROFILE HEADER // 1500x500"}
              </span>
              <h4 className="text-lg sm:text-2xl font-black text-white leading-snug mb-2">
                {isArabic ? "حضور بصري يفرض هيبة علامتك من أول تمريرة" : "Commanding Authority From The Very First Glance"}
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                {isArabic ? "توزيع عناصري دقيق، فراغات متوازنة، وألوان تعبر عن هوية مشروعك بامتياز." : "Calculated white space, typographic rhythm, and unmistakable brand palette."}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>2BRO STUDIO DESIGN SYSTEM</span>
              <span className="text-[#CCFF00]">✓ PERFECT RATIO</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. التفاعل الثالث: ركائز المحتوى الناجح */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // OUR DESIGN PRINCIPLES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "أسرار التصاميم التي تجذب وتبيع" : "The Core Pillars of High-Performing Content"}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 max-w-xl mx-auto">
          {(["hook", "grid", "retention"] as const).map((tab) => {
            const isActive = pillarTab === tab;
            const labels = {
              hook: isArabic ? "الهوك البصري" : "Visual Hook",
              grid: isArabic ? "تناسق الحساب" : "Grid Cohesion",
              retention: isArabic ? "معدل الحفظ" : "Save Rate",
            };
            return (
              <button
                key={tab}
                onClick={() => setPillarTab(tab)}
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
              {pillarsData[pillarTab].tag}
            </span>
            <span className="text-xs font-mono text-white/40">AUDIENCE PSYCHOLOGY</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {isArabic ? pillarsData[pillarTab].titleAr : pillarsData[pillarTab].titleEn}
          </h3>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">
            {isArabic ? pillarsData[pillarTab].descAr : pillarsData[pillarTab].descEn}
          </p>
        </div>
      </section>

      {/* 6. باقات تصاميم السوشيال ميديا الثلاث */}
      <section className="py-16 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-2">
            // PACKAGES & SCOPE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "باقات تصاميم السوشيال ميديا" : "Social Media Design Packages"}
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-2">
            {isArabic ? "اختر عدد التصاميم المناسب لمعدل نشرك وتفاعل حساباتك:" : "Select the posting volume tailored for your monthly content schedule:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* الباقة 1: باقة البداية (10 تصاميم) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">STARTER // 10 DESIGNS</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة البداية (Starter Kit)" : "Starter Kit (10 Posts)"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "مثالية لتجديد مظهر الحساب، إطلاق خدمات جديدة، أو تثبيت منشورات تعريفية أساسية تزيد الثقة."
                  : "Ideal for profile revamps, single launches, or anchoring core services on your profile."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "10 تصاميم بوستات حصرية (مربع أو عمودي)" : "10 bespoke feed posts (1:1 or 4:5)"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "5 قوالب ستوري تفاعلية متناسقة" : "5 matching interactive story templates"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "أيقونات الهايلايت موحدة (Highlight Covers)" : "Unified Instagram highlight icons"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "صياغة هوكات جذابة مع التصميم" : "Catchy hook copy included with visuals"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة البداية (10 تصاميم)" : "Starter Kit (10 Posts)")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب باقة 10 تصاميم" : "Choose Starter (10)"}
            </a>
          </div>

          {/* الباقة 2: باقة النمو والسيطرة (20 تصميم - الأكثر طلباً) */}
          <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0E0E0E] border-2 border-[#CCFF00] flex flex-col justify-between shadow-[0_0_35px_rgba(204,255,0,0.15)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black font-extrabold text-[10px] uppercase font-mono px-3.5 py-1 rounded-full tracking-wider whitespace-nowrap">
              {isArabic ? "الباقة الأكثر طلباً للنمو" : "MOST POPULAR // GROWTH"}
            </span>

            <div>
              <span className="font-mono text-xs text-[#CCFF00] block mb-2 mt-1">GROWTH // 20 DESIGNS</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة النمو (Growth Feed)" : "Growth Feed (20 Posts)"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "الباقة المتكاملة لنشر منتظم وقوي على مدار الشهر، تجمع بين بوستات الترويج والكاروسيل التعليمي."
                  : "The optimal monthly posting cadence combining promotional posts with high-save carousels."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "20 تصميم بوست وكاروسيل متعدد الشرائح" : "20 bespoke posts & multi-slide carousels"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "12 ستوري إعلاني وتفاعلي للجمهور" : "12 interactive engagement stories"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "تصميم بنر غلاف لحساب إكس أو لينكدإن" : "Custom X or LinkedIn profile header"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "تنسيق متكامل لمظهر شبكة الحساب (Grid)" : "Harmonized 9-grid feed layout planning"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "تسليم سريع مع تعديلات مرنة" : "Priority turnaround & flexible revisions"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة النمو (20 تصميم)" : "Growth Feed (20 Posts)")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3.5 rounded-full bg-[#CCFF00] text-black font-extrabold text-xs hover:bg-white transition-all shadow-md active:scale-95"
            >
              {isArabic ? "طلب باقة 20 تصميماً" : "Choose Growth (20)"}
            </a>
          </div>

          {/* الباقة 3: باقة التميز والنخبة (30 تصميم - بوست يومي) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">ELITE // 30 DESIGNS</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة النخبة (30 تصميم - بوست يومي)" : "Elite Monthly (30 Posts)"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "للعلامات التجارية والشركات التي تتطلب حضوراً يومياً مكثفاً وسيطرة تامة على منصات التواصل."
                  : "Full monthly dominance with daily visual presence, comprehensive story suites, and rush delivery."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "30 تصميم كامل للشهر (بوست يومي)" : "30 full posts (daily active publishing)"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "20 ستوري متنوع للتفاعل والعروض" : "20 varied promotional stories"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تصاميم أغلفة لجميع منصات التواصل" : "Complete header suite for all platforms"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "أولوية قصوى وتسليم دوري أسبوعياً" : "Top priority scheduling & weekly delivery batches"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة النخبة (30 تصميم)" : "Elite Monthly (30 Posts)")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب باقة 30 تصميماً" : "Choose Elite (30)"}
            </a>
          </div>

        </div>
      </section>

      {/* 7. كارت الإغلاق والـ CTA */}
      <section className="pt-16 pb-12 px-5 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0D0D0D] border border-[#CCFF00]/40 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <div className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] mb-4">
            {isArabic ? "جاهز لتمييز حساباتك؟" : "Ready to dominate your feed?"}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {isArabic ? "اجعل محتواك حديث جمهورك المستهدف" : "Turn Passive Scrollers Into Loyal Buyers"}
          </h2>

          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {isArabic
              ? "تواصل معنا لمناقشة هوية حسابك واختيار الباقة الأنسب، وسنبدأ فوراً بصناعة محتوى يوقف التمرير ويبرز فخامة مشروعك."
              : "Connect with us today. We will map out your visual strategy and craft thumb-stopping content tailored to scale your brand."}
          </p>

          <a
            href={getPackageUrl(isArabic ? "استشارة تصاميم السوشيال ميديا" : "Social Media Design Consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-black text-sm sm:text-base px-9 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(204,255,0,0.3)] active:scale-95 cursor-pointer"
          >
            <span>{isArabic ? "ابدأ تصميم محتواك معنا الآن" : "Start Designing Your Feed Now"}</span>
            <span className="text-xl">{isArabic ? "←" : "→"}</span>
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-[11px] font-mono text-white/50">
            <span>• {isArabic ? "تصاميم حصرية 100%" : "100% Original Content"}</span>
            <span>• {isArabic ? "تسليم سريع للملفات" : "Fast Turnaround"}</span>
            <span>• {isArabic ? "أعلى جودة تصدير" : "Ultra HD Exports"}</span>
          </div>
        </div>
      </section>
    </div>
  );
}