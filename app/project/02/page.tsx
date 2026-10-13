"use client";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../../components/Navbar";

export default function PaidAdsPage() {
  const [activePlatform, setActivePlatform] = useState<"snapchat" | "tiktok" | "meta" | "google">("snapchat");
  const [isPaused, setIsPaused] = useState(false);

  // إدارة اللغة
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

  // 1. حركة التبديل التلقائي للمنصات مع مؤشر تقدم
  const platformsList: ("snapchat" | "tiktok" | "meta" | "google")[] = ["snapchat", "tiktok", "meta", "google"];
  
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePlatform((prev) => {
        const nextIdx = (platformsList.indexOf(prev) + 1) % platformsList.length;
        return platformsList[nextIdx];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // 2. حاسبة العائد التفاعلية (ROAS Calculator)
  const [budget, setBudget] = useState(25000);
  const estimatedMultiplier = budget >= 50000 ? 8.2 : budget >= 20000 ? 7.6 : 6.8;
  const estimatedRevenue = Math.round(budget * estimatedMultiplier);
  const estimatedOrders = Math.round(estimatedRevenue / 195);
  const estimatedSavings = Math.round(budget * 0.38);

  // 3. سلايدر دراسات الحالة
  const [caseIndex, setCaseIndex] = useState(0);
  const caseStudies = [
    {
      brandAr: "متجر عطور فاخرة (الرياض)",
      brandEn: "Luxury Fragrance Brand (Riyadh)",
      budget: "45,000 ر.س",
      revenue: "382,000 ر.س",
      roas: "8.48x",
      storyAr: "ركزنا على زوايا الثبات والفخامة عبر إعلانات السناب شات وتيك توك UGC، مع تحسين سلة الشراء بنقرة واحدة.",
      storyEn: "Executed high-prestige UGC angles on Snapchat & TikTok, pairing creatives with a 1-click frictionless checkout.",
      badge: "+750% إيرادات",
    },
    {
      brandAr: "براند أزياء وعبايات خليجية",
      brandEn: "Gulf Fashion & Abaya Brand",
      budget: "30,000 ر.س",
      revenue: "228,000 ر.س",
      roas: "7.60x",
      storyAr: "خفضنا تكلفة الحصول على الطلب (CPA) من 85 ر.س إلى 36 ر.س بمضاعفة هوكات الريلز وإعلانات Advantage+.",
      storyEn: "Reduced acquisition cost (CPA) from 85 to 36 SAR by testing 18 Reels hooks under Meta Advantage+ campaigns.",
      badge: "-58% تكلفة العميل",
    },
    {
      brandAr: "متجر إلكترونيات وإكسسوارات ذكية",
      brandEn: "Smart Tech & Accessories Store",
      budget: "60,000 ر.س",
      revenue: "414,000 ر.س",
      roas: "6.90x",
      storyAr: "السيطرة على محرك بحث جوجل (PMax) وربط تتبع سيرفر CAPI، مما رفع تكرار الشراء بنسبة 42%.",
      storyEn: "Dominated high-intent Google PMax search and implemented Server-Side CAPI, lifting repeat order rate by 42%.",
      badge: "+240% طلبات شهرية",
    },
  ];

  // بيانات المنصات
  const platformsData = {
    snapchat: {
      name: "Snapchat Ads",
      roas: "8.96x",
      avgRoas: "5.4x",
      highlightAr: "الأقوى للمتاجر السعودية والخليجية ومبيعات الدفع عند الاستلام والعروض الحصرية.",
      highlightEn: "The strongest channel for GCC & Saudi eCommerce, impulse purchases, and flash deals.",
      stats: [
        { labelAr: "أفضل عائد إعلاني محقق", labelEn: "Peak ROAS Achieved", value: "8.96x" },
        { labelAr: "انخفاض تكلفة النقرة (CPC)", labelEn: "CPC Reduction", value: "-38%" },
        { labelAr: "معدل إتمام الطلب", labelEn: "Checkout Rate", value: "4.8%" },
      ],
      featuresAr: [
        "استهداف دقيق للمتسوقين الفعليين بالمدن السعودية",
        "إعلانات Story Ads تفاعلية وهوكات قوية",
        "ربط تتبع متقدم Pixel + CAPI لمنع تسرب البيانات",
      ],
      featuresEn: [
        "Hyper-targeted Saudi & GCC high-intent shopper cohorts",
        "Engaging Story & Spotlight Ads with high-converting hooks",
        "Advanced Server-Side CAPI tracking to eliminate data loss",
      ],
    },
    tiktok: {
      name: "TikTok Ads",
      roas: "7.85x",
      avgRoas: "4.9x",
      highlightAr: "صناعة رغبة الشراء الفورية عبر فيديوهات UGC وهوكات تكسر تردد العميل.",
      highlightEn: "Triggering instant checkout intent through native UGC creatives and thumb-stopping hooks.",
      stats: [
        { labelAr: "أفضل عائد إعلاني محقق", labelEn: "Peak ROAS Achieved", value: "7.85x" },
        { labelAr: "معدل مشاهدة الفيديو للثانية 3", labelEn: "3-Sec Hook Rate", value: "+44%" },
        { labelAr: "تخفيض تكلفة الاستحواذ (CPA)", labelEn: "CPA Reduction", value: "-45%" },
      ],
      featuresAr: [
        "اختبار مستمر للزوايا الإعلانية (Creative Testing)",
        "إعلانات Spark Ads عبر حسابات مؤثرين موثوقة",
        "استهداف الجماهير الأكثر تفاعلاً وشراءً",
      ],
      featuresEn: [
        "Rapid Creative & Hook Testing Framework",
        "High-trust Spark Ads leveraging authentic creator accounts",
        "Behavioral targeting focused on verified buyers",
      ],
    },
    meta: {
      name: "Meta Ads (Instagram & Facebook)",
      roas: "8.02x",
      avgRoas: "5.8x",
      highlightAr: "ماكينة الاستقرار والتوسع (Scale) الأكبر للمتاجر وبناء الولاء وإعادة الاستهداف.",
      highlightEn: "The primary engine for long-term predictability, retargeting funnels, and aggressive scale.",
      stats: [
        { labelAr: "أفضل عائد إعلاني محقق", labelEn: "Peak ROAS Achieved", value: "8.02x" },
        { labelAr: "عائد حملات إعادة الاستهداف", labelEn: "Retargeting ROAS", value: "11.4x" },
        { labelAr: "متوسط قيمة السلة (AOV)", labelEn: "Average Order Value", value: "+32%" },
      ],
      featuresAr: [
        "هيكلة إعلانية قائمة على ميزة Advantage+ الحديثة",
        "استهداف الجماهير المشابهة للمشترين الحقيقيين (LAL)",
        "قمع تسويقي متكامل من التعريف إلى الشراء المتكرر",
      ],
      featuresEn: [
        "Modern Advantage+ scalable account architecture",
        "Precision Lookalike audiences built from high-LTV buyers",
        "Multi-touch dynamic retargeting for repeat conversions",
      ],
    },
    google: {
      name: "Google Ads",
      roas: "6.69x",
      avgRoas: "4.2x",
      highlightAr: "صيد العملاء الجاهزين للشراء حالاً الذين يبحثون باسم المنتج أو البراند في جوجل.",
      highlightEn: "Capturing bottom-of-funnel high-intent buyers searching directly for products & brand keywords.",
      stats: [
        { labelAr: "أفضل عائد إعلاني محقق", labelEn: "Peak ROAS Achieved", value: "6.69x" },
        { labelAr: "نية الشراء (Intent Rate)", labelEn: "Buyer Intent Rate", value: "High 98%" },
        { labelAr: "معدل التحويل على المتجر", labelEn: "Store Conversion Rate", value: "5.6%" },
      ],
      featuresAr: [
        "حملات Performance Max بأحدث خوارزميات الذكاء الاصطناعي",
        "حماية علامتك التجارية من منافسيك على محرك البحث",
        "إعلانات Shopping لعرض المنتجات والأسعار مباشرة",
      ],
      featuresEn: [
        "AI-driven Performance Max multi-channel scaling",
        "Aggressive Brand Protection and competitor search capture",
        "Google Shopping asset optimization with live inventory sync",
      ],
    },
  };

  const whatsappNumber = "966500000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isArabic
      ? `مرحباً 2Bro Studio، أريد الاستفادة من فحص الحساب الإعلاني والمتجر المجاني لمشروعي بميزانية شهرية متوقعة (${budget.toLocaleString()} ر.س).`
      : `Hello 2Bro Studio, I would like to request a free audit with an estimated monthly budget of (${budget.toLocaleString()} SAR).`
  )}`;

  const tickerItemsAr = [
    "⚡ متجر عطور: تم تحقيق 8.48x ROAS",
    "🔥 براند عبايات: انخفاض تكلفة الطلب إلى 36 ر.س",
    "🚀 ميزانيات مدارة تفوق 4,000,000 ر.س",
    "🎯 تيك توك: معدل تحويل 4.8% في حملات UGC",
    "📈 متجر إلكترونيات: +280% نمو في المبيعات الشهرية",
    "✨ سناب شات: مبيعات تجاوزت 380,000 ر.س في 40 يوم",
  ];

  const tickerItemsEn = [
    "⚡ Fragrance Brand: 8.48x ROAS Achieved",
    "🔥 Fashion Brand: CPA dropped to 36 SAR",
    "🚀 +4,000,000 SAR Managed Ad Spend",
    "🎯 TikTok: 4.8% Conversion Rate via UGC Hooks",
    "📈 Consumer Tech: +280% MoM Revenue Scale",
    "✨ Snapchat: 380,000+ SAR in 40 Days",
  ];

  const tickerList = isArabic ? tickerItemsAr : tickerItemsEn;
  const currentTicker = [...tickerList, ...tickerList];

  return (
    <div
      className="min-h-screen bg-[#070707] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24 pt-24 overflow-x-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* الناف بار الأصلي */}
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* شريط الإنجازات والنتائج الحية اللانهائي (Live Metrics Ticker) */}
      <div className="w-full bg-[#CCFF00]/10 border-y border-[#CCFF00]/20 py-2.5 overflow-hidden select-none">
        <div
          className="flex w-max items-center gap-8 text-xs font-mono font-bold text-[#CCFF00] uppercase"
          style={{
            animation: isArabic ? "marquee-rtl 28s linear infinite" : "marquee 28s linear infinite",
          }}
        >
          {currentTicker.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-white/40">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* الهيرو الرئيسي */}
      <section className="relative pt-10 sm:pt-16 pb-16 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        {/* أضواء نيون حركية في الخلفية */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#CCFF00]/[0.05] blur-[140px] pointer-events-none rounded-full animate-pulse" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#CCFF00] mb-6 font-bold shadow-[0_0_20px_rgba(204,255,0,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span>
            {isArabic
              ? "// ماكينة مضاعفة الإيرادات للمتاجر الإلكترونية"
              : "// PERFORMANCE MARKETING & REVENUE SCALING ENGINE"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.25] sm:leading-[1.2] mb-6 tracking-tight">
          {isArabic ? (
            <>
              نساعد المتاجر تكشف <span className="text-[#CCFF00]">الخلل الحقيقي</span>:
              <br />
              الإعلان، المحتوى، أم المتجر؟
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl md:text-5xl font-extrabold mt-2 block">
                ثم نحوله لخطة ترفع المبيعات وتخفض تكلفة العميل
              </span>
            </>
          ) : (
            <>
              WE PINPOINT THE <span className="text-[#CCFF00]">REAL BOTTLENECK</span>:
              <br />
              THE AD, THE CREATIVE, OR THE STORE?
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl md:text-5xl font-extrabold mt-2 block">
                ENGINEERING GROWTH THAT MAXIMIZES ROAS
              </span>
            </>
          )}
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {isArabic ? (
            <>
              أغلب المتاجر تصرف ميزانيات ضخمة لكن الأرباح لا ترتفع! المشكلة غالباً ليست في الإعلان وحده؛ بل في زوايا الرسالة، تفاصيل صفحة المنتج، أو سلاسة تجربة الشراء. 
              <span className="text-white font-medium block mt-1">
                نحن لا نضغط &quot;زر إطلاق&quot;، بل ندير منظومة شراء متكاملة مبنية على العائد المالي (ROAS).
              </span>
            </>
          ) : (
            <>
              Most brands burn ad spend without scaling profits. The leak is rarely just ad setup—it is messaging, product friction, or offer structure. 
              <span className="text-white font-medium block mt-1">
                We do not just run ads; we engineer profitable acquisition systems.
              </span>
            </>
          )}
        </p>

        {/* كارت التدقيق المجاني */}
        <div className="relative max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1C1A0D] to-[#111111] border border-[#CCFF00]/40 shadow-[0_15px_50px_rgba(204,255,0,0.12)] mb-12 overflow-hidden text-center transform hover:scale-[1.01] transition-transform">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#CCFF00]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-block bg-[#CCFF00] text-black text-xs font-black px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            {isArabic ? "عرض محدود للشركاء الجدد" : "LIMITED EXCLUSIVE OFFER"}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            {isArabic
              ? "احصل على تدقيق شامل ومجاني لمتجرك وحساباتك الإعلانية"
              : "Claim a Free Comprehensive Store & Ad Account Audit"}
          </h2>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 max-w-lg mx-auto">
            {isArabic
              ? "سنراجع حملاتك السابقة، زوايا محتواك، صفحة المنتج، وسلة الشراء لنوضح لك أين يتسرب مالك بالضبط، مع خطة فورية لبدء مضاعفة النتائج."
              : "We audit past campaign structures, creative hooks, product friction, and checkout flow to show exactly where budget leaks."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-extrabold text-sm px-7 py-3.5 rounded-full hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg active:scale-95 cursor-pointer"
            >
              <span>{isArabic ? "اطلب تحليل متجرك مجاناً الآن" : "Claim Your Free Audit Now"}</span>
              <span className="text-lg">{isArabic ? "←" : "→"}</span>
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto text-xs font-bold text-white/80 hover:text-white px-5 py-3.5 rounded-full border border-white/10 hover:border-white/30 transition-all bg-white/[0.02]"
            >
              {isArabic ? "احسب أرباحك المتوقعة ↓" : "Calculate Estimated Profit ↓"}
            </a>
          </div>
        </div>

        {/* الإحصائيات الأربعة الكبرى مع هوفر متفاعل */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              +4,000,000
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "ر.س إجمالي الميزانيات المدارة" : "SAR Managed Ad Spend"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              +4
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "سنوات خبرة متخصصة بالمتاجر" : "Years eCommerce Experience"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              7.91x
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "متوسط العائد الإعلاني (ROAS)" : "Average Client ROAS"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              +300%
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "متوسط زيادة مبيعات شركائنا" : "Average Revenue Growth"}
            </span>
          </div>
        </div>
      </section>

      {/* حاسبة العائد التفاعلية العبقرية (Interactive ROAS Calculator) */}
      <section id="calculator" className="py-16 px-5 sm:px-8 max-w-4xl mx-auto scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141414] via-[#101010] to-[#0A0A0A] border-2 border-[#CCFF00]/40 shadow-[0_0_40px_rgba(204,255,0,0.1)] relative overflow-hidden">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
              // INTERACTIVE PROFIT SIMULATOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {isArabic ? "احسب العائد المتوقع لمتجرك مع 2Bro Studio" : "Simulate Your Revenue Scale With 2Bro Studio"}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              {isArabic ? "حرّك السلايدر لتحديد ميزانيتك وشاهد تقديرات الأرباح المحققة بناءً على نتائجنا:" : "Adjust your estimated monthly budget to view projected returns:"}
            </p>
          </div>

          {/* عنصر السلايدر التفاعلي */}
          <div className="mb-10 max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-3 font-mono font-bold">
              <span className="text-xs text-white/70">
                {isArabic ? "الميزانية الشهرية المقترحة:" : "Monthly Ad Budget:"}
              </span>
              <span className="text-2xl sm:text-3xl text-[#CCFF00]">
                {budget.toLocaleString()} {isArabic ? "ر.س" : "SAR"}
              </span>
            </div>

            <input
              type="range"
              min="5000"
              max="100000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-3 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
            />
            <div className="flex justify-between text-[10px] font-mono text-white/40 mt-2">
              <span>5,000 ر.س</span>
              <span>50,000 ر.س</span>
              <span>100,000 ر.س</span>
            </div>
          </div>

          {/* لوحة النتائج التقديرية المحسوبة فورياً */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-black/60 border border-white/10 text-center mb-8">
            <div className="p-3">
              <span className="text-[11px] font-mono text-white/50 block mb-1">
                {isArabic ? "الإيرادات التقديرية (Revenue)" : "Projected Revenue"}
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#CCFF00]">
                +{estimatedRevenue.toLocaleString()} {isArabic ? "ر.س" : "SAR"}
              </span>
            </div>

            <div className="p-3 border-y sm:border-y-0 sm:border-x border-white/10">
              <span className="text-[11px] font-mono text-white/50 block mb-1">
                {isArabic ? "الطلبات المقدرة (Orders)" : "Estimated Orders"}
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                ~{estimatedOrders.toLocaleString()} {isArabic ? "طلب" : "orders"}
              </span>
            </div>

            <div className="p-3">
              <span className="text-[11px] font-mono text-white/50 block mb-1">
                {isArabic ? "متوسط العائد التقديري (ROAS)" : "Target ROAS Multiplier"}
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#CCFF00]">
                {estimatedMultiplier}x
              </span>
            </div>
          </div>

          <div className="text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-full hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg active:scale-95"
            >
              <span>{isArabic ? `ابدأ بهذه الخطة (${budget.toLocaleString()} ر.س)` : `Scale with ${budget.toLocaleString()} SAR`}</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* قسم المقارنة الحية: قبل وبعد 2Bro Studio */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // THE COMPARISON
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "الفرق بين الإعلان العشوائي ومنظومة 2Bro Studio" : "Traditional Agencies vs. 2Bro Growth Engine"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* قبل */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#121212]/70 border border-red-500/20 relative">
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 font-mono text-xs font-bold mb-4">
              {isArabic ? "✕ مع إدارة الإعلانات التقليدية" : "✕ Typical Freelancers & Agencies"}
            </span>
            <div className="space-y-4 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold text-base">✕</span>
                <span>{isArabic ? "صرف ميزانيات إعلانية بدون مبيعات تغطي التكلفة." : "Ad spend burns with fragile, negative returns."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold text-base">✕</span>
                <span>{isArabic ? "التعامل مع الإعلان كـ 'زر تشغيل' وإهمال زوايا المحتوى وصفحة المنتج." : "Treating ads as a button, ignoring creative hooks and store friction."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold text-base">✕</span>
                <span>{isArabic ? "ارتفاع مستمر في تكلفة العميل (CAC) كلما تم رفع الميزانية." : "CAC spikes uncontrollably whenever budget is increased."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold text-base">✕</span>
                <span>{isArabic ? "تقارير معقدة بمصطلحات غير مفهومة بدون أثر حقيقي في البنك." : "Vague reports with vanity metrics and zero bank deposit growth."}</span>
              </div>
            </div>
          </div>

          {/* بعد */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14170E] to-[#0E100A] border-2 border-[#CCFF00] relative shadow-[0_0_30px_rgba(204,255,0,0.15)]">
            <span className="inline-block px-3 py-1 rounded-full bg-[#CCFF00] text-black font-mono text-xs font-black mb-4">
              {isArabic ? "✓ مع منظومة 2Bro Studio" : "✓ The 2Bro Growth Ecosystem"}
            </span>
            <div className="space-y-4 text-xs sm:text-sm text-white/90">
              <div className="flex items-start gap-2.5">
                <span className="text-[#CCFF00] font-bold text-base">✓</span>
                <span>{isArabic ? "عوائد ROAS مضاعفة تتجاوز 6x و 8x مبنية على شراء فعلي وليس نقرات وهمية." : "Compounded 6x - 8x ROAS anchored in real, profitable checkout volume."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#CCFF00] font-bold text-base">✓</span>
                <span>{isArabic ? "هندسة هوكات إعلانية وسكربتات تلمس مشكلة العميل وتدفعه للشراء الفوري." : "Engineered video scripts & thumb-stopping UGC addressing buyer pain points."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#CCFF00] font-bold text-base">✓</span>
                <span>{isArabic ? "توسيع ذكي ومربح للميزانية في أوقات الذروة مع تقليل تكلفة العميل." : "Calculated budget scaling in peak windows while dropping acquisition costs."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#CCFF00] font-bold text-base">✓</span>
                <span>{isArabic ? "تقارير أسبوعية شديدة الوضوح تركز على المبيعات وصافي الأرباح." : "Transparent financial reports focusing strictly on net revenue scale."}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المنصات مع مؤشر تقدم وتبديل تلقائي (Auto-Cycling Platform Showcase) */}
      <section
        id="platforms"
        className="py-16 px-5 sm:px-8 max-w-5xl mx-auto scroll-mt-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#CCFF00] mb-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
            <span>{isArabic ? "// التنقل التلقائي للمنصات (ضع الماوس للتثبيت)" : "// AUTO-ROTATING BENCHMARKS (HOVER TO PAUSE)"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "عوائد حقيقية ومحققة عبر كافة المنصات" : "Demonstrated ROAS Across All Major Channels"}
          </h2>
        </div>

        {/* أزرار المنصات مع خط زمني متحرك */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5">
          {platformsList.map((plat) => {
            const isActive = activePlatform === plat;
            return (
              <button
                key={plat}
                onClick={() => setActivePlatform(plat)}
                className={`relative py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-[#CCFF00] text-black shadow-md scale-[1.02]"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{platformsData[plat].name}</span>
                {/* شريط التقدم عند تفعيل التبديل التلقائي */}
                {isActive && !isPaused && (
                  <span className="absolute bottom-0 left-0 h-[3px] bg-black/40 w-full animate-[progress_5s_linear]" />
                )}
              </button>
            );
          })}
        </div>

        {/* كارت عرض تفاصيل المنصة */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 relative overflow-hidden transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest block mb-2">
                {isArabic ? "المنصة المعروضة حالياً" : "CURRENT CHANNEL"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {platformsData[activePlatform].name}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                {isArabic ? platformsData[activePlatform].highlightAr : platformsData[activePlatform].highlightEn}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end bg-black/50 border border-white/10 p-5 rounded-2xl shrink-0">
              <span className="text-[11px] font-mono text-white/50 mb-1">
                {isArabic ? "أفضل عائد إعلاني محقق (Top ROAS)" : "Peak Recorded ROAS"}
              </span>
              <span className="font-mono text-4xl sm:text-5xl font-black text-[#CCFF00]">
                {platformsData[activePlatform].roas}
              </span>
              <span className="text-[10px] text-white/60 mt-1">
                {isArabic ? `متوسط العائد المستقر: ${platformsData[activePlatform].avgRoas}` : `Stable Average: ${platformsData[activePlatform].avgRoas}`}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {platformsData[activePlatform].stats.map((st, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-mono text-xl sm:text-2xl font-black text-white mb-1">
                  {st.value}
                </div>
                <div className="text-xs text-white/60">
                  {isArabic ? st.labelAr : st.labelEn}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/70 uppercase tracking-widest mb-3 font-semibold">
              {isArabic ? "استراتيجياتنا المتبعة في هذه المنصة:" : "Channel-Specific Levers:"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(isArabic ? platformsData[activePlatform].featuresAr : platformsData[activePlatform].featuresEn).map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-white/80"
                >
                  <span className="text-[#CCFF00] font-bold mt-0.5">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* سلايدر تفاعلي لقصص النجاح (Interactive Case Studies Slider) */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[#CCFF00] tracking-widest uppercase block mb-1 font-bold">
              // VERIFIED CASE STUDIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {isArabic ? "قصص نجاح بالأرقام الموثقة" : "Documented Client Wins"}
            </h2>
          </div>

          {/* أسهم التبديل التفاعلية */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCaseIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
              aria-label="Previous Case"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center transition-all cursor-pointer"
            >
              {isArabic ? "→" : "←"}
            </button>
            <span className="text-xs font-mono text-white/50 px-2">
              {caseIndex + 1} / {caseStudies.length}
            </span>
            <button
              onClick={() => setCaseIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
              aria-label="Next Case"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center transition-all cursor-pointer"
            >
              {isArabic ? "←" : "→"}
            </button>
          </div>
        </div>

        {/* كارت قصة النجاح النشطة */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 relative overflow-hidden transition-all duration-500">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs font-bold">
              {caseStudies[caseIndex].badge}
            </span>
            <span className="text-xs font-mono text-white/40">
              {isArabic ? "حملة مكتملة وموسعة" : "Executed & Scaled"}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {isArabic ? caseStudies[caseIndex].brandAr : caseStudies[caseIndex].brandEn}
          </h3>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isArabic ? caseStudies[caseIndex].storyAr : caseStudies[caseIndex].storyEn}
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/50 border border-white/5 text-center">
            <div>
              <span className="text-[10px] font-mono text-white/50 block mb-1">
                {isArabic ? "الميزانية المصروفة" : "Spend"}
              </span>
              <span className="font-mono text-base sm:text-xl font-bold text-white">
                {caseStudies[caseIndex].budget}
              </span>
            </div>
            <div className="border-x border-white/10">
              <span className="text-[10px] font-mono text-white/50 block mb-1">
                {isArabic ? "الإيرادات المحققة" : "Revenue"}
              </span>
              <span className="font-mono text-base sm:text-xl font-bold text-[#CCFF00]">
                {caseStudies[caseIndex].revenue}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-white/50 block mb-1">
                {isArabic ? "العائد الإعلاني" : "ROAS"}
              </span>
              <span className="font-mono text-base sm:text-xl font-bold text-[#CCFF00]">
                {caseStudies[caseIndex].roas}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* كارت الإغلاق والـ CTA النهائي */}
      <section className="pt-16 pb-12 px-5 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0D0D0D] border border-[#CCFF00]/40 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <div className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] mb-4">
            {isArabic ? "جاهز لرفع أرقامك؟" : "Ready to scale your numbers?"}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {isArabic ? "لا تترك ميزانيتك الإعلانية للتجربة والخطأ" : "Stop Burning Ad Spend on Guesswork"}
          </h2>

          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {isArabic
              ? "تواصل معنا الآن مباشرة. سنراجع حساباتك الإعلانية ومتجرك مجاناً ونعطيك تشخيصاً حقيقياً ومباشراً للخلل والحل في أقل من 24 ساعة."
              : "Connect with us today. We will audit your ad accounts and store for free and deliver actionable diagnostic steps within 24 hours."}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-black text-sm sm:text-base px-9 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(204,255,0,0.3)] active:scale-95 cursor-pointer"
          >
            <span>{isArabic ? "احجز جلستك واستلم تقرير التدقيق مجاناً" : "Book Your Session & Claim Free Audit Report"}</span>
            <span className="text-xl">{isArabic ? "←" : "→"}</span>
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-[11px] font-mono text-white/50">
            <span>• {isArabic ? "جلسة تشخيص مجانية 100%" : "100% Free Diagnostic Session"}</span>
            <span>• {isArabic ? "خطة عمل واضحة" : "Actionable Roadmap"}</span>
            <span>• {isArabic ? "بدون أي التزام مسبق" : "Zero Obligation"}</span>
          </div>
        </div>
      </section>
    </div>
  );
}