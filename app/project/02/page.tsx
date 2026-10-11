"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function PaidAdsPage() {
  // المنصة المختارة في قسم عوائد المنصات
  const [activePlatform, setActivePlatform] = useState<"snapchat" | "tiktok" | "meta" | "google">("snapchat");

  // بيانات المنصات الإعلانية ونتائجها
  const platformsData = {
    snapchat: {
      name: "Snapchat Ads",
      roas: "8.96x",
      avgRoas: "5.4x",
      highlight: "الأقوى للمتاجر السعودية والخليجية ومبيعات الدفع عند الاستلام والعروض الحصرية.",
      color: "#FFFC00",
      stats: [
        { label: "أفضل عائد إعلاني محقق", value: "8.96x" },
        { label: "انخفاض تكلفة النقرة (CPC)", value: "-38%" },
        { label: "معدل إتمام الطلب", value: "4.8%" },
      ],
      features: [
        "استهداف دقيق للمتسوقين الفعليين بالمدن السعودية",
        "إعلانات Story Ads تفاعلية وهوكات قوية",
        "ربط تتبع متقدم Pixel + CAPI لمنع تسرب البيانات",
      ],
    },
    tiktok: {
      name: "TikTok Ads",
      roas: "7.85x",
      avgRoas: "4.9x",
      highlight: "صناعة رغبة الشراء الفورية عبر فيديوهات UGC وهوكات تكسر تردد العميل.",
      color: "#00F2FE",
      stats: [
        { label: "أفضل عائد إعلاني محقق", value: "7.85x" },
        { label: "معدل مشاهدة الفيديو للثانية 3", value: "+44%" },
        { label: "تخفيض تكلفة الاستحواذ (CPA)", value: "-45%" },
      ],
      features: [
        "اختبار مستمر للزوايا الإعلانية (Creative Testing)",
        "إعلانات Spark Ads عبر حسابات مؤثرين موثوقة",
        "استهداف الجماهير الأكثر تفاعلاً وشراءً",
      ],
    },
    meta: {
      name: "Meta Ads (Instagram & Facebook)",
      roas: "8.02x",
      avgRoas: "5.8x",
      highlight: "ماكينة الاستقرار والتوسع (Scale) الأكبر للمتاجر وبناء الولاء وإعادة الاستهداف.",
      color: "#0081FB",
      stats: [
        { label: "أفضل عائد إعلاني محقق", value: "8.02x" },
        { label: "عائد حملات إعادة الاستهداف", value: "11.4x" },
        { label: "متوسط قيمة السلة (AOV)", value: "+32%" },
      ],
      features: [
        "هيكلة إعلانية قائمة على ميزة Advantage+ الحديثة",
        "استهداف الجماهير المشابهة للمشترين الحقيقيين (LAL)",
        "قمع تسويقي متكامل من التعريف إلى الشراء المتكرر",
      ],
    },
    google: {
      name: "Google Ads",
      roas: "6.69x",
      avgRoas: "4.2x",
      highlight: "صيد العملاء الجاهزين للشراء حالاً الذين يبحثون باسم المنتج أو البراند في جوجل.",
      color: "#EA4335",
      stats: [
        { label: "أفضل عائد إعلاني محقق", value: "6.69x" },
        { label: "نية الشراء (Intent Rate)", value: "High 98%" },
        { label: "معدل التحويل على المتجر", value: "5.6%" },
      ],
      features: [
        "حملات Performance Max بأحدث خوارزميات الذكاء الاصطناعي",
        "حماية علامتك التجارية من منافسيك على محرك البحث",
        "إعلانات Shopping لعرض المنتجات والأسعار مباشرة",
      ],
    },
  };

  // رابط واتساب مباشر محفز للطلب
  const whatsappNumber = "966500000000"; // يمكنك استبداله برقمكم
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "مرحباً 2Bro Studio، أريد الاستفادة من فحص الحساب الإعلاني والمتجر المجاني لمشروعي."
  )}`;

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24" dir="rtl">
      
      {/* 1. الشريط العلوي والرجوع */}
      <header className="sticky top-0 z-50 bg-[#070707]/80 backdrop-blur-xl border-b border-white/5 px-5 sm:px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-[#CCFF00] transition-colors"
        >
          <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#CCFF00]/10 transition-colors">
            ←
          </span>
          <span>العودة للرئيسية</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-[11px] font-mono text-white/70 uppercase tracking-widest font-semibold">
            GROWTH & ADS ECOSYSTEM
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex bg-[#CCFF00] text-black font-bold text-xs px-4 py-2 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
        >
          طلب فحص مجاني
        </a>
      </header>

      {/* 2. الهيرو الرئيسي: الرسالة والوعد التسويقي الصادم */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        {/* توهج خلفي */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#CCFF00]/[0.04] blur-[120px] pointer-events-none rounded-full" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#CCFF00] mb-6">
          <span>// ماكينة مضاعفة الإيرادات للمتاجر الإلكترونية</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.25] sm:leading-[1.2] mb-6 tracking-tight">
          نساعد المتاجر تكشف <span className="text-[#CCFF00]">الخلل الحقيقي</span>:
          <br />
          الإعلان، المحتوى، أم المتجر؟
          <br />
          <span className="text-white/90 text-2xl sm:text-4xl md:text-5xl font-extrabold mt-2 block">
            ثم نحوله لخطة ترفع المبيعات وتخفض تكلفة العميل
          </span>
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          أغلب المتاجر تصرف ميزانيات ضخمة لكن الأرباح لا ترتفع! المشكلة غالباً ليست في الإعلان وحده؛ بل في زوايا الرسالة، تفاصيل صفحة المنتج، أو سلاسة تجربة الشراء. 
          <span className="text-white font-medium block mt-1">
            نحن لا نضغط "زر إطلاق"، بل ندير منظومة شراء متكاملة مبنية على العائد المالي (ROAS).
          </span>
        </p>

        {/* كارت العرض المجاني الذهبي (مثل الصور ولكن بفخامة استوديو) */}
        <div className="relative max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1C1A0D] to-[#111111] border border-[#CCFF00]/30 shadow-[0_10px_40px_rgba(204,255,0,0.08)] mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-block bg-[#CCFF00] text-black text-xs font-black px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            عرض محدود للشركاء الجدد
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            احصل على تدقيق شامل ومجاني لمتجرك وحساباتك الإعلانية
          </h2>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 max-w-lg mx-auto">
            سنراجع حملاتك السابقة، زوايا محتواك، صفحة المنتج، وسلة الشراء لنوضح لك أين يتسرب مالك بالضبط، مع خطة فورية لبدء مضاعفة النتائج.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-extrabold text-sm px-7 py-3.5 rounded-full hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg active:scale-95"
            >
              <span>اطلب تحليل متجرك مجاناً الآن</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.768.815 2.796.815 3.179 0 5.765-2.587 5.767-5.766.002-3.181-2.584-5.768-5.767-5.768zm0 10.42c-.93 0-1.74-.27-2.45-.71l-.18-.11-1.8.47.48-1.76-.12-.19c-.49-.78-.75-1.52-.75-2.35 0-2.61 2.12-4.73 4.73-4.73 2.61 0 4.73 2.12 4.73 4.73 0 2.61-2.12 4.73-4.73 4.73z" />
              </svg>
            </a>

            <a
              href="#platforms"
              className="w-full sm:w-auto text-xs font-bold text-white/80 hover:text-white px-5 py-3.5 rounded-full border border-white/10 hover:border-white/30 transition-all bg-white/[0.02]"
            >
              استعرض نتائج المنصات ↓
            </a>
          </div>
        </div>

        {/* 3. كروت الإحصائيات الأربعة الكبرى */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              +6,000,000
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              ر.س إجمالي الميزانيات المدارة
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              +4
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              سنوات خبرة متخصصة بالمتاجر
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-[#CCFF00] mb-1">
              7.91x
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              متوسط العائد الإعلاني (ROAS)
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/5 flex flex-col items-center text-center">
            <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-1">
              +300%
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium">
              متوسط زيادة مبيعات شركائنا
            </span>
          </div>
        </div>
      </section>

      {/* 4. قسم: ليش إعلاناتنا تحقق أرقام غير عادية؟ (The Difference) */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-[#111111] via-[#141414] to-[#111111] border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              لماذا نحن مختلفون؟ ولماذا نقدر نساعدك تكبر؟
            </h3>
          </div>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
            لأننا لا نتعامل مع الحملات كـ "مجرد زر تشغيل" وننتظر المعجزة! ارتفاع تكلفة الشراء غالبًا ينتج عن حلقة مفقودة بين <strong className="text-white">الفكرة الإعلانية، قوة العرض، وصفحة المنتج</strong>. نحن نصلح المنظومة بالكامل لنتأكد أن كل ريال تدفعه في الإعلان يعود لك بأعلى مضاعف ربحي ممكن.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00] font-bold text-sm">✓</span>
              <span>نختبر زوايا الشراء الأكثر إقناعاً للعميل</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00] font-bold text-sm">✓</span>
              <span>توسيع الميزانيات فقط في الأيام والساعات الرابحة</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00] font-bold text-sm">✓</span>
              <span>تقارير شفافة يومية وأسبوعية بدون مصطلحات معقدة</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. قسم عوائد المنصات (مبني مثل الصورة 3 ولكن تفاعلي وفاخر) */}
      <section id="platforms" className="py-16 px-5 sm:px-8 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-[#CCFF00] tracking-widest uppercase block mb-2 font-bold">
            // PLATFORM BREAKDOWN & ROAS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            عوائد حقيقية ومحققة عبر كافة منصات السوشيال
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-2">
            اختر المنصة لرؤية أفضل النتائج المحققة واستراتيجيتنا المتبعة فيها:
          </p>
        </div>

        {/* أزرار اختيار المنصة */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5">
          {(["snapchat", "tiktok", "meta", "google"] as const).map((plat) => {
            const isActive = activePlatform === plat;
            return (
              <button
                key={plat}
                onClick={() => setActivePlatform(plat)}
                className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#CCFF00] text-black shadow-md scale-[1.02]"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{platformsData[plat].name}</span>
              </button>
            );
          })}
        </div>

        {/* كارت عرض تفاصيل المنصة الفعالة */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 relative overflow-hidden transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest block mb-2">
                المنصة النشطة
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {platformsData[activePlatform].name}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                {platformsData[activePlatform].highlight}
              </p>
            </div>

            {/* رقم الـ ROAS العملاق */}
            <div className="flex flex-col items-start md:items-end bg-black/40 border border-white/5 p-5 rounded-2xl shrink-0">
              <span className="text-[11px] font-mono text-white/50 mb-1">
                أفضل عائد إعلاني محقق (Top ROAS)
              </span>
              <span className="font-mono text-4xl sm:text-5xl font-black text-[#CCFF00]">
                {platformsData[activePlatform].roas}
              </span>
              <span className="text-[10px] text-white/60 mt-1">
                متوسط العائد المستقر: {platformsData[activePlatform].avgRoas}
              </span>
            </div>
          </div>

          {/* الإحصائيات الثلاث للمنصة */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {platformsData[activePlatform].stats.map((st, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-mono text-xl sm:text-2xl font-black text-white mb-1">
                  {st.value}
                </div>
                <div className="text-xs text-white/60">{st.label}</div>
              </div>
            ))}
          </div>

          {/* ما تشمله إدارة هذه المنصة */}
          <div>
            <h4 className="text-xs font-mono text-white/70 uppercase tracking-widest mb-3 font-semibold">
              ما الذي نفعله في هذه المنصة لتحقيق هذه الأرقام؟
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {platformsData[activePlatform].features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-black/30 border border-white/5 text-xs text-white/80"
                >
                  <span className="text-[#CCFF00] font-bold mt-0.5">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. الركائز الثلاث لتحقيق النمو (مثل الصور 2 و 3) */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#CCFF00] tracking-widest uppercase block mb-2 font-bold">
            // OUR 3-PILLAR FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            منظومة النمو الثلاثية التي نطبقها في كل متجر
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* الركيزة 1 */}
          <div className="p-7 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#CCFF00] font-bold mb-3 block">
                01 / الحملات والأداء
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                إدارة الحملات واستهداف المشترين
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                بناء هيكلة حساب إعلاني احترافية مع قمع بيعي (Funnel) واضح يختبر المنتجات ويكشف أسرع الطرق لتحقيق مبيعات متتالية ومستقرة.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex flex-col gap-2 text-xs text-white/60">
              <span>• اختبار يومي للجمهور الصحيح</span>
              <span>• مراقبة معدلات التحويل وتكلفة النقرة</span>
              <span>• توسيع الحملات الرابحة دون حرق الميزانية</span>
            </div>
          </div>

          {/* الركيزة 2 */}
          <div className="p-7 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#CCFF00] font-bold mb-3 block">
                02 / صناعة المحتوى
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                محتوى وهوكات إعلانية تبيع
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                الإعلان لا ينجح بصور عادية! نكتب سكربتات إعلانية تخاطب ألم العميل وتبرز الحل بطريقة تكسر التمرير وتدفعه لطلب المنتج حالاً.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex flex-col gap-2 text-xs text-white/60">
              <span>• كتابة هوكات قوية تخطف الانتباه</span>
              <span>• زوايا تسويقية تركز على مشكلة العميل</span>
              <span>• نصوص إعلانية محفزة لقرار الشراء السريع</span>
            </div>
          </div>

          {/* الركيزة 3 */}
          <div className="p-7 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#CCFF00] font-bold mb-3 block">
                03 / تجربة المتجر (CRO)
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                تحسين المتجر وسلاسة الطلب
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                نزيل أي عائق في المتجر يجعل الزائر يتردد قبل الدفع؛ تحسين صفحة المنتج، إبراز الضمان، وإزالة التشتيت في سلة الشراء.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex flex-col gap-2 text-xs text-white/60">
              <span>• وضوح صور ومزايا وصف المنتج</span>
              <span>• تقليل التشتيت في صفحة الدفع</span>
              <span>• رفع متوسط قيمة السلة (AOV) بالعروض</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. دراسات حالة سريعة تزرع الثقة الفورية */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-[#CCFF00] tracking-widest uppercase block mb-2 font-bold">
            // REAL CASE STUDIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            نتائج حديثة من حملات أدرناها لشركائنا
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-white/5">
            <span className="text-xs font-mono text-[#CCFF00] block mb-2">متجر عطور ومستحضرات</span>
            <div className="text-2xl font-black font-mono text-white mb-1">ROAS 8.44x</div>
            <p className="text-xs text-white/60 leading-relaxed mt-2">
              صرف 42,000 ر.س وحقق مبيعات تجاوزت 354,000 ر.س خلال 40 يوماً فقط عبر تركيز الحملات على زوايا الفخامة وتكتيكات السناب شات وتيك توك.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-white/5">
            <span className="text-xs font-mono text-[#CCFF00] block mb-2">براند أزياء وعبايات</span>
            <div className="text-2xl font-black font-mono text-white mb-1">CPA -52%</div>
            <p className="text-xs text-white/60 leading-relaxed mt-2">
              تم خفض تكلفة الحصول على الطلب من 78 ر.س إلى 37 ر.س مع مضاعفة عدد الطلبات اليومية 3 أضعاف عبر تحسين صفحة المنتج وهوكات ريلز.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-white/5">
            <span className="text-xs font-mono text-[#CCFF00] block mb-2">متجر إلكترونيات وإكسسوارات</span>
            <div className="text-2xl font-black font-mono text-white mb-1">+280% نمو شهري</div>
            <p className="text-xs text-white/60 leading-relaxed mt-2">
              إعادة بناء هيكلة Google Performance Max و Meta Ads مما رفع متوسط سلة المشتريات ومعدل تكرار الشراء من العملاء القدامى.
            </p>
          </div>
        </div>
      </section>

      {/* 8. البلوك النهائي الحاسم: دعوة للعمل مع نموذج الواتساب المباشر */}
      <section className="pt-16 pb-12 px-5 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0D0D0D] border border-[#CCFF00]/40 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <div className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] mb-4">
            جاهز لرفع أرقامك؟
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            لا تترك ميزانيتك الإعلانية للتجربة والخطأ
          </h2>

          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            تواصل معنا الآن مباشرة. سنراجع حساباتك الإعلانية ومتجرك مجاناً ونعطيك تشخيصاً حقيقياً ومباشراً للخلل والحل في أقل من 24 ساعة.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-black text-sm sm:text-base px-9 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(204,255,0,0.3)] active:scale-95"
          >
            <span>احجز جلستك واستلم تقرير التدقيق مجاناً</span>
            <span className="text-xl">←</span>
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-[11px] font-mono text-white/50">
            <span>• جلسة تشخيص مجانية 100%</span>
            <span>• خطة عمل واضحة</span>
            <span>• بدون أي التزام مسبق</span>
          </div>
        </div>
      </section>

    </div>
  );
}