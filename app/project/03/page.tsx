"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

export default function WebDevelopmentPage() {
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

  // 1. محاكي استعراض الشاشات (كمبيوتر وجوال)
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");

  // 2. مميزات التصميم الذكي بالـ AI
  const [featureTab, setFeatureTab] = useState<"speed" | "design" | "responsive">("speed");

  const aiFeatures = {
    speed: {
      metric: "3 - 5 أيام",
      metricEn: "3 - 5 Days",
      labelAr: "مدة استلام موقعك بالكامل",
      labelEn: "Average Turnaround Time",
      titleAr: "تسليم قياسي وسريع بدون مماطلة",
      titleEn: "Lightning Fast Delivery",
      descAr: "باستخدام أحدث تقنيات وأدوات الذكاء الاصطناعي، نختصر أسابيع وشهور الانتظار المملة إلى أيام معدودة، لنطلق موقعك التعريفي على الهواء مباشرة بأعلى كفاءة.",
      descEn: "Leveraging cutting-edge AI design workflows to compress months of waiting into just a few days, launching your presence swiftly.",
    },
    design: {
      metric: "100%",
      metricEn: "100%",
      labelAr: "تصميم عصري متناسق مع هويتك",
      labelEn: "Brand-Aligned Aesthetic",
      titleAr: "تصاميم فخمة تليق بمكانتك",
      titleEn: "Modern Cinematic Aesthetics",
      descAr: "نبتكر لك واجهات بصرية أنيقة، متدرجة الألوان، وسهلة القراءة تبرز خدماتك أو سيرتك الذاتية وتزرع الثقة الفورية في ذهن كل من يزور موقعك.",
      descEn: "Crafting modern layouts with refined typography and color balance that project prestige and build instant visitor trust.",
    },
    responsive: {
      metric: "100%",
      metricEn: "100%",
      labelAr: "توافق تام مع شاشات الهواتف",
      labelEn: "Mobile-First Perfection",
      titleAr: "تصفح سلس على كل الأجهزة",
      titleEn: "Flawless on Every Screen",
      descAr: "أكثر من 85% من زوارك يتصفحون من الجوال؛ لذا نضمن أن يظهر موقعك بانسيابية تامة، وسرعة فائقة بدون أي بطء أو تشوه في العناصر.",
      descEn: "Over 85% of your audience visits via mobile. We guarantee an ultra-smooth, lightweight experience across all smartphone screens.",
    },
  };

  const whatsappNumber = "966500000000"; // استبدله برقمكم الفعلي
  const getPackageUrl = (pkgName: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      isArabic
        ? `مرحباً 2Bro Studio، أريد الاستفسار وتصميم (${pkgName}) لمشروعي.`
        : `Hello 2Bro Studio, I would like to inquire about designing a (${pkgName}).`
    )}`;

  return (
    <div
      className="min-h-screen bg-[#070707] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24 pt-24 overflow-x-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* 1. الناف بار الأصلي للموقع */}
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* شريط المزايا الذكية اللانهائي */}
      <div className="w-full bg-[#CCFF00]/10 border-y border-[#CCFF00]/20 py-2.5 overflow-hidden select-none">
        <div
          className="flex w-max items-center gap-8 text-xs font-mono font-bold text-[#CCFF00] uppercase"
          style={{
            animation: isArabic ? "marquee-rtl 30s linear infinite" : "marquee 30s linear infinite",
          }}
        >
          {[
            "⚡ AI-POWERED MODERN WEB DESIGN",
            "•",
            "🚀 FAST 3-5 DAYS DELIVERY",
            "•",
            "📱 100% MOBILE RESPONSIVE",
            "•",
            "🎯 HIGH IMPACT INFORMATIONAL SITES",
            "•",
            "💼 CORPORATE & PERSONAL PROFILES",
            "•",
            "✨ CLEAN, MODERN & SLEEK VISUALS",
            "•",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 whitespace-nowrap">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. الهيرو التسويقي الصادق والمقنع */}
      <section className="relative pt-10 sm:pt-16 pb-14 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#CCFF00]/[0.04] blur-[140px] pointer-events-none rounded-full animate-pulse" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#CCFF00] mb-6 font-bold shadow-[0_0_20px_rgba(204,255,0,0.1)]">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span>
            {isArabic
              ? "// تصميم المواقع التعريفية الذكية بالذكاء الاصطناعي"
              : "// AI-POWERED MODERN SHOWCASE & PROFILE WEBSITES"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.25] sm:leading-[1.18] mb-6 tracking-tight">
          {isArabic ? (
            <>
              موقع تعريفي فخم لشركتك أو شخصيتك
              <br />
              <span className="text-[#CCFF00]">مصمم بأحدث أدوات الذكاء الاصطناعي</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                في أيام معدودة وبتكلفة ذكية ومدروسة
              </span>
            </>
          ) : (
            <>
              PRESTIGIOUS SHOWCASE WEBSITES
              <br />
              <span className="text-[#CCFF00]">POWERED BY NEXT-GEN AI</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                DELIVERED IN DAYS WITH SMART VALUE
              </span>
            </>
          )}
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {isArabic ? (
            <>
              لا تحتاج لانتظار شهور ودفع مبالغ طائلة للحصول على واجهة رقمية مشرفة! نصمم لك مواقع تعريفية حديثة، سريعة، ومبهرة تعرض خدماتك وأعمالك وتمنح مشروعك مصداقية فورية أمام عملائك.
            </>
          ) : (
            <>
              You do not need to wait months or overpay for a standout web presence. We craft modern, fast, and elegant informational websites that establish instant trust with your clients.
            </>
          )}
        </p>

        {/* الإحصائيات والمزايا الحقيقية */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              3 - 5
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "أيام متوسط مدة التسليم" : "Days Average Delivery"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              100%
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "متوافق وسلس على الجوال" : "Mobile Fluid & Responsive"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              24/7
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "حضور دائم لعلامتك على الويب" : "Always-On Online Presence"}
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              AI
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              {isArabic ? "مدعوم بالذكاء الاصطناعي الحديث" : "Next-Gen AI Workflows"}
            </span>
          </div>
        </div>
      </section>

      {/* 3. محاكي استعراض الشاشات (كمبيوتر وجوال) */}
      <section className="py-14 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // INTERACTIVE VIEWPORT SIMULATOR
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "موقعك سيبدو مبهراً على كل شاشة" : "Pixel-Perfect on Desktop & Mobile"}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            {isArabic ? "بدّل بين وضع الجوال والكمبيوتر لمشاهدة كيف يظهر الموقع التعريفي بوضوح وأناقة:" : "Toggle viewports to see how your profile site seamlessly adapts:"}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 mt-6">
            <button
              onClick={() => setViewportMode("desktop")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewportMode === "desktop"
                  ? "bg-[#CCFF00] text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>🖥️</span>
              <span>{isArabic ? "كمبيوتر ولابتوب (Desktop)" : "Desktop View"}</span>
            </button>
            <button
              onClick={() => setViewportMode("mobile")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewportMode === "mobile"
                  ? "bg-[#CCFF00] text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>📱</span>
              <span>{isArabic ? "هاتف ذكي (Mobile)" : "Mobile View"}</span>
            </button>
          </div>
        </div>

        {/* إطار المحاكي التفاعلي */}
        <div className="flex justify-center transition-all duration-500">
          <div
            className={`transition-all duration-500 bg-[#0E0E0E] border-2 border-white/15 rounded-3xl overflow-hidden shadow-2xl relative ${
              viewportMode === "desktop"
                ? "w-full max-w-4xl p-6 sm:p-8"
                : "w-[340px] sm:w-[380px] p-5 border-[#CCFF00]/40 shadow-[0_0_40px_rgba(204,255,0,0.1)]"
            }`}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono text-white/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="bg-black/60 px-4 py-1 rounded-full text-[10px] text-white/70 border border-white/5 truncate max-w-[200px]">
                https://yourbrand.com
              </span>
              <span className="text-[#CCFF00]">SSL ✓</span>
            </div>

            <div className="space-y-4 text-start">
              <div className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] text-[10px] font-mono font-bold">
                {isArabic ? "موقع تعريفي حديث" : "MODERN SHOWCASE"}
              </div>
              <h3 className={`font-black text-white leading-tight ${viewportMode === "desktop" ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                {isArabic ? "نبني لك حضوراً رقمياً يسبق منافسيك" : "Architecting Digital Presence That Leads"}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed max-w-lg">
                {isArabic
                  ? "صفحة تعريفية فخمة توضح خدماتك، سابقة أعمالك، ووسائل التواصل المباشرة لتسهيل تواصل العملاء معك فوراً."
                  : "An elegant showcase presenting your services, work portfolio, and instant WhatsApp booking link."}
              </p>
              <div className="flex gap-2 pt-2">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#CCFF00] text-black text-[11px] font-bold">
                  {isArabic ? "تواصل معنا" : "Contact Us"}
                </span>
                <span className="px-3.5 py-1.5 rounded-lg border border-white/20 text-white text-[11px] font-semibold">
                  {isArabic ? "مشاهدة الأعمال" : "View Portfolio"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. تفاصيل العمل بالذكاء الاصطناعي */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // WHY AI-POWERED DESIGN?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "لماذا التصميم بالذكاء الاصطناعي أفضل لموقعك؟" : "Why Choose AI-Driven Web Design?"}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 max-w-xl mx-auto">
          {(["speed", "design", "responsive"] as const).map((tab) => {
            const isActive = featureTab === tab;
            const labels = {
              speed: isArabic ? "السرعة القياسية" : "Fast Delivery",
              design: isArabic ? "جمالية التصميم" : "Visual Quality",
              responsive: isArabic ? "انسيابية الجوال" : "Mobile Fit",
            };
            return (
              <button
                key={tab}
                onClick={() => setFeatureTab(tab)}
                className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#CCFF00] text-black shadow-md scale-[1.02]"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 relative overflow-hidden transition-all duration-500 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest block mb-1">
                2BRO ADVANTAGE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {isArabic ? aiFeatures[featureTab].titleAr : aiFeatures[featureTab].titleEn}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-center shrink-0">
              <span className="text-[10px] font-mono text-white/50 block mb-0.5">
                {isArabic ? aiFeatures[featureTab].labelAr : aiFeatures[featureTab].labelEn}
              </span>
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#CCFF00]">
                {isArabic ? aiFeatures[featureTab].metric : aiFeatures[featureTab].metricEn}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl mt-6">
            {isArabic ? aiFeatures[featureTab].descAr : aiFeatures[featureTab].descEn}
          </p>
        </div>
      </section>

      {/* 5. الباقات الثلاث الحقيقية (شخصي / شركات / صفحة هبوط) */}
      <section className="py-16 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-2">
            // PACKAGES & INVESTMENT
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "باقات تصميم المواقع التعريفية" : "Profile & Showcase Web Packages"}
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-2">
            {isArabic ? "اختر نوع الموقع المناسب لطبيعة ظهورك المطلوب على الويب:" : "Select the package that fits your required presence:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* الباقة 1: الموقع الشخصي / بورتفوليو */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">PERSONAL PROFILE</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة الموقع الشخصي (Portfolio)" : "Personal Brand & Portfolio"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "مثالية للمستشارين، المدربين، الأطباء، والمبدعين لعرض سيرتهم الذاتية وأعمالهم وروابط التواصل."
                  : "Ideal for consultants, creators, and professionals showcasing portfolio, bio, and social channels."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تصميم عصري يبرز خبراتك وإنجازاتك" : "Sleek personal bio & achievements section"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "معرض احترافي لعرض نماذج الأعمال" : "Visual portfolio showcase gallery"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "ربط بجميع منصات السوشيال ميديا" : "Social links & digital business card"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "زر مباشر للمحادثة عبر واتساب" : "Instant WhatsApp booking button"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تسليم سريع خلال 3 أيام عمل" : "3-Day Fast Turnaround"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة الموقع الشخصي" : "Personal Portfolio Package")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب باقة الموقع الشخصي" : "Choose Personal"}
            </a>
          </div>

          {/* الباقة 2: موقع الشركات التعريفي */}
          <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0E0E0E] border-2 border-[#CCFF00] flex flex-col justify-between shadow-[0_0_35px_rgba(204,255,0,0.15)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black font-extrabold text-[10px] uppercase font-mono px-3.5 py-1 rounded-full tracking-wider whitespace-nowrap">
              {isArabic ? "الباقة الأكثر طلباً للشركات" : "MOST POPULAR // CORPORATE"}
            </span>

            <div>
              <span className="font-mono text-xs text-[#CCFF00] block mb-2 mt-1">COMPANY PROFILE</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة موقع الشركات والمؤسسات" : "Corporate Profile Website"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "المقر الرقمي الكامل لشركتك؛ أقسام من نحن، خدماتنا، رؤيتنا، مشاريعنا، وموقع المقر ونموذج التواصل."
                  : "The definitive showcase website for businesses, clinics, and firms establishing authoritative presence."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "أقسام كاملة: من نحن، خدماتنا، عملائنا" : "Complete sections: About, Services, Clients"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "تصميم متناسق 100% مع ألوان وشعار شركتك" : "Fully tailored to your corporate brand"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "خريطة المقر + بيانات التواصل والواتساب" : "Google Map embed + contact info"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "دعم اللغتين (عربي / إنجليزي)" : "Bilingual setup (Arabic / English)"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "تسليم خلال 4 - 5 أيام عمل فقط" : "4-5 Days Express Delivery"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة موقع الشركات والمؤسسات" : "Corporate Website Package")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3.5 rounded-full bg-[#CCFF00] text-black font-extrabold text-xs hover:bg-white transition-all shadow-md active:scale-95"
            >
              {isArabic ? "طلب باقة موقع الشركات" : "Get Corporate Site"}
            </a>
          </div>

          {/* الباقة 3: صفحة الهبوط الذكية */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">SMART LANDING PAGE</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "صفحة الهبوط التعريفية (One-Page)" : "Smart Landing Page"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic
                  ? "صفحة واحدة سينمائية ومركزة مخصصة لخدمة معينة أو إطلاق مبادرة تهدف لجمع استفسارات العملاء فوراً."
                  : "A focused single-page landing layout designed to explain a specific service and drive direct inquiries."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تصميم صفحة واحدة سريعة وجذابة" : "Single cinematic high-impact page"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "شرح مميزات وفوائد الخدمة بوضوح" : "Clear service features & value breakdown"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "أزرار دعوة لاتخاذ إجراء (CTA) واضحة" : "Conversion-focused CTAs to WhatsApp"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تسليم سريع خلال يومين إلى 3 أيام" : "2-3 Days Fast Delivery"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة صفحة الهبوط التعريفية" : "Landing Page Package")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب صفحة الهبوط" : "Choose Landing Page"}
            </a>
          </div>

        </div>
      </section>

      {/* 6. كارت الإغلاق والـ CTA */}
      <section className="pt-16 pb-12 px-5 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0D0D0D] border border-[#CCFF00]/40 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <div className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] mb-4">
            {isArabic ? "جاهز لإطلاق موقعك التعريفي؟" : "Ready to launch your showcase site?"}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {isArabic ? "امنح مشروعك الحضور الرقمي الذي يستحقه" : "Give Your Brand the Presence It Deserves"}
          </h2>

          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {isArabic
              ? "تواصل معنا لمناقشة أبعاد موقعك ونوع الباقة التي تناسبك. سنصمم لك موقعاً سريعاً، فخماً، ويعكس تميزك في أيام معدودة."
              : "Connect with us today. We will design an elegant, fast, and prestigious showcase site delivered in days."}
          </p>

          <a
            href={getPackageUrl(isArabic ? "استشارة تصميم موقع تعريفي" : "Showcase Website Consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-black text-sm sm:text-base px-9 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(204,255,0,0.3)] active:scale-95 cursor-pointer"
          >
            <span>{isArabic ? "ابدأ تصميم موقعك معنا الآن" : "Start Your Website Now"}</span>
            <span className="text-xl">{isArabic ? "←" : "→"}</span>
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-[11px] font-mono text-white/50">
            <span>• {isArabic ? "تسليم سريع 3 - 5 أيام" : "3-5 Days Delivery"}</span>
            <span>• {isArabic ? "تصميم ذكي متجاوب 100%" : "100% Mobile Fluid"}</span>
            <span>• {isArabic ? "بدون تكاليف برمجية مبالغة" : "Smart Transparent Value"}</span>
          </div>
        </div>
      </section>
    </div>
  );
}