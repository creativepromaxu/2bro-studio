"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../../../components/Navbar";

interface Brand {
  id: string;
  name: string;
  category: "luxury" | "modern" | "services";
  categoryAr: string;
  categoryEn: string;
  cover?: string;
  fullImage?: string;
}

const brands: Brand[] = [
  {
    id: "ZAHER",
    name: "ZAHER",
    category: "luxury",
    categoryAr: "هوية تجارية فاخرة",
    categoryEn: "Luxury Commercial Brand",
    cover: "/identities/ZAHER.jpg",
    fullImage: "/identities/ZAHER-full.webp",
  },
  {
    id: "WOW",
    name: "THAM WOW",
    category: "modern",
    categoryAr: "هوية ابتكارية وعصرية",
    categoryEn: "Innovative Modern Brand",
    cover: "/identities/WOW.jpg",
    fullImage: "/identities/WOW-full.webp",
  },
  {
    id: "WASH",
    name: "WASH",
    category: "services",
    categoryAr: "هوية خدمات متميزة",
    categoryEn: "Premium Service Identity",
    cover: "/identities/WASH.jpg",
    fullImage: "/identities/WASH-full.webp",
  },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

function BrandCover({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(!brand.cover);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#121212] to-black">
        <span className="text-lg font-mono font-bold text-white/30 text-center px-4 uppercase tracking-wider">
          {brand.name}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={brand.cover as string}
      alt={brand.name}
      fill
      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      onError={() => setFailed(true)}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
    />
  );
}

function BrandLightbox({
  brand,
  isArabic,
  onClose,
}: {
  brand: Brand;
  isArabic: boolean;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const isPressedRef = useRef(false);
  const dragStart = useRef({ startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 });

  useEffect(() => {
    if (zoom <= 1) return;
    const el = scrollAreaRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isPressedRef.current = true;
      setIsDragging(true);
      dragStart.current = {
        startX: e.clientX,
        startY: e.clientY,
        scrollLeft: el.scrollLeft,
        scrollTop: el.scrollTop,
      };
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isPressedRef.current) return;
      const dx = e.clientX - dragStart.current.startX;
      const dy = e.clientY - dragStart.current.startY;
      el.scrollLeft = dragStart.current.scrollLeft - dx;
      el.scrollTop = dragStart.current.scrollTop - dy;
    };

    const onMouseUp = () => {
      isPressedRef.current = false;
      setIsDragging(false);
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      isPressedRef.current = false;
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [zoom]);

  useEffect(() => {
    if (!isDragging) return;
    document.body.style.userSelect = "none";
    return () => {
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP));

  const categoryText = isArabic ? brand.categoryAr : brand.categoryEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-6xl bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-black/50 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            <span className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
              {brand.name}
            </span>
            {categoryText && (
              <span className="hidden sm:inline-block text-[11px] font-mono text-white/50 border border-white/10 px-2 py-0.5 rounded">
                {categoryText}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {brand.fullImage && (
              <div className="flex items-center gap-1 border border-white/10 rounded-full p-1 bg-white/[0.03]">
                <button
                  onClick={zoomOut}
                  disabled={zoom <= MIN_ZOOM}
                  aria-label={isArabic ? "تصغير" : "Zoom out"}
                  className="w-7 h-7 flex items-center justify-center rounded-full text-white/70 hover:text-[#CCFF00] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  −
                </button>
                <span className="text-[10px] font-mono text-neutral-300 w-9 text-center select-none font-bold">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  disabled={zoom >= MAX_ZOOM}
                  aria-label={isArabic ? "تكبير" : "Zoom in"}
                  className="w-7 h-7 flex items-center justify-center rounded-full text-white/70 hover:text-[#CCFF00] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            )}
            <button
              onClick={onClose}
              aria-label={isArabic ? "إغلاق" : "Close"}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors cursor-pointer shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        <div
          ref={scrollAreaRef}
          className={`relative flex-1 bg-[#060606] overflow-auto select-none ${
            zoom > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
          }`}
          onContextMenu={(e) => e.preventDefault()}
        >
          {brand.fullImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={brand.fullImage}
              alt={brand.name}
              className="block h-auto mx-auto pointer-events-none transition-[width] duration-300 ease-out"
              style={{ width: `${zoom * 100}%`, maxWidth: "none" }}
              draggable={false}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6">
              <span className="text-sm text-neutral-400 font-light">
                {isArabic ? "صورة العرض الكاملة قيد التجهيز." : "Full presentation image is being prepared."}
              </span>
              <span className="text-xs text-neutral-600 font-mono">
                public/identities/{brand.id}-full.webp
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Project01() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeBrand = brands.find((b) => b.id === activeId) ?? null;

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

  // 1. التفاعل الأول: تشريح الهوية البصرية (Brand Anatomy Inspector)
  const [anatomyTab, setAnatomyTab] = useState<"grid" | "type" | "color" | "texture">("grid");

  const anatomyDetails = {
    grid: {
      titleAr: "النسبة الذهبية والهندسة الصارمة",
      titleEn: "Golden Ratio & Structural Grid",
      descAr: "لا نرسم بشكل عشوائي؛ كل انحناء وخط في الشعار مبني على مصفوفة قياسات هندسية تضمن توازناً بصرياً يريح عين المتلقي ويعلق في الذاكرة للأبد.",
      descEn: "Every curve is engineered on a rigorous mathematical grid and golden ratio, ensuring immediate cognitive balance and permanent recall.",
      tag: "GEOMETRY // 1.618",
    },
    type: {
      titleAr: "شخصية الخطوط والوزن البصري",
      titleEn: "Typography Pairing & Hierarchy",
      descAr: "نختار ونعدل خطوطاً عربية وإنجليزية حصرية تمتلك نبرة صوت تطابق فخامة علامتك التجارية، مع تباين واضح بين العناوين الضخمة والنصوص التوضيحية.",
      descEn: "Custom-curated Arabic & Latin typefaces tuned to echo your brand's prestige, establishing instant authority across all mediums.",
      tag: "TYPE ARCHITECTURE",
    },
    color: {
      titleAr: "سيكولوجية التباين والألوان الفاخرة",
      titleEn: "Color Psychology & Contrast Matrix",
      descAr: "لوحة ألوان مدروسة نفسياً؛ ندمج بين الأسود الداكن العميق ولمسات التميّز المعاصرة لتبث في ذهن العميل إحساساً بالنقاء والندرة والقيمة المرتفعة.",
      descEn: "A psychophysically tested palette merging deep architectural obsidian with luminous neon accents to project rarity and value.",
      tag: "CHROMATIC CONTRAST",
    },
    texture: {
      titleAr: "محاكاة المواد وتطبيقات الواقع",
      titleEn: "Tactile Materials & Real-World Mockups",
      descAr: "لا نكتفي بملف رقمي مسطح؛ نعرض لك الهوية مطبقة على خامات الورق الفاخر، الأختام الحرارية (Hot Foil)، والعبوات لترى هيبة مشروعك قبل التنفيذ.",
      descEn: "Experiencing the brand beyond screens: hot foil stamping, embossed textures, and premium tactile packaging before manufacturing.",
      tag: "TACTILE EXPERIENCE",
    },
  };

  // 2. التفاعل الثاني: فلتر تصنيف المشاريع
  const [filterCategory, setFilterCategory] = useState<"all" | "luxury" | "modern" | "services">("all");
  const filteredBrands = brands.filter((b) => filterCategory === "all" || b.category === filterCategory);

  // 3. التفاعل الثالث: خطوات رحلة الـ 4 أسابيع
  const [activeStep, setActiveStep] = useState(0);
  const processSteps = [
    {
      step: "01",
      weekAr: "الأسبوع الأول",
      weekEn: "Week 01",
      titleAr: "البحث، التموضع، وتحديد الشخصية",
      titleEn: "Discovery & Brand Persona",
      descAr: "دراسة المنافسين، تفكيك نقاط القوة، وبناء لوحات الإلهام (Moodboards) لتحديد الاتجاه البصري قبل رسم أي خط.",
      descEn: "Competitor gap analysis, core value excavation, and curated moodboards to establish visual direction.",
    },
    {
      step: "02",
      weekAr: "الأسبوع الثاني",
      weekEn: "Week 02",
      titleAr: "هندسة المفاهيم وتطوير الشعارات",
      titleEn: "Concept Engineering & Logomarks",
      descAr: "صياغة 3 اتجاهات بصرية مبتكرة ومختلفة تماماً لكل منها فكرتها ورمزيتها العميقة لاختيار الأنسب لمشروعك.",
      descEn: "Engineering 3 distinct, strategic design directions with mathematical sketches and concept breakdowns.",
    },
    {
      step: "03",
      weekAr: "الأسبوع الثالث",
      weekEn: "Week 03",
      titleAr: "بناء التطبيقات والمطبوعات والموك اب",
      titleEn: "Application & Tangible Mockups",
      descAr: "تطبيق الهوية المختارة على المطبوعات، التغليف، البطاقات، والمنصات الرقمية لترى علامتك حية على أرض الواقع.",
      descEn: "Translating the selected logo onto packaging, stationery, digital touchpoints, and 3D realistic scenes.",
    },
    {
      step: "04",
      weekAr: "الأسبوع الرابع",
      weekEn: "Week 04",
      titleAr: "الدليل المعياري وتسليم الملفات المفتوحة",
      titleEn: "Brand Guidelines & Master Assets",
      descAr: "تسليم كتاب الهوية الشامل (Brand Book) مع كافة الملفات المصدرية المفتوحة (AI, EPS, SVG, PDF) جاهزة للإنتاج فوراً.",
      descEn: "Delivering the comprehensive Brand Guidelines PDF alongside all open-source production-ready vector assets.",
    },
  ];

  const whatsappNumber = "966500000000";
  const getPackageUrl = (pkgName: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      isArabic
        ? `مرحباً 2Bro Studio، أريد الاستفسار وبدء العمل على (${pkgName}) لمشروعي.`
        : `Hello 2Bro Studio, I would like to inquire and get started with (${pkgName}) for my brand.`
    )}`;

  return (
    <div
      className="min-h-screen bg-[#070707] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24 pt-24 overflow-x-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* 1. الناف بار الأصلي للموقع */}
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* شريط جماليات التصميم والهوية البصرية (Aesthetic Brand Ticker) */}
      <div className="w-full bg-white/[0.02] border-y border-white/5 py-2.5 overflow-hidden select-none">
        <div
          className="flex w-max items-center gap-10 text-xs font-mono tracking-widest text-[#888888] uppercase"
          style={{
            animation: isArabic ? "marquee-rtl 32s linear infinite" : "marquee 32s linear infinite",
          }}
        >
          {[
            "VISUAL PRESTIGE",
            "•",
            "GOLDEN RATIO GEOMETRY",
            "•",
            "BESPOKE TYPOGRAPHY",
            "•",
            "BRAND ARCHITECTURE",
            "•",
            "STRATEGIC POSITIONING",
            "•",
            "TACTILE PACKAGING",
            "•",
            "TIMELESS IDENTITY SYSTEMS",
            "•",
          ].map((item, idx) => (
            <span key={idx} className={item === "•" ? "text-[#CCFF00]" : "hover:text-[#CCFF00] transition-colors"}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. الهيرو التسويقي */}
      <section className="relative pt-10 sm:pt-16 pb-14 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#CCFF00]/[0.04] blur-[140px] pointer-events-none rounded-full" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#CCFF00] mb-6 font-bold shadow-[0_0_20px_rgba(204,255,0,0.1)]">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span>
            {isArabic
              ? "// فلسفة صناعة الهويات : تميز ، مكانة ، وحضور لا يُمحى"
              : "// IDENTITY PHILOSOPHY : PRESTIGE & PRESENCE"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.25] sm:leading-[1.18] mb-6 tracking-tight">
          {isArabic ? (
            <>
              لا نصنع مجرد &quot;شعار عابر&quot;..
              <br />
              <span className="text-[#CCFF00]">نبني أنظمة بصرية تفرض هيبة مشروعك</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                وتمنح علامتك التجارية وزناً لا يُقارن
              </span>
            </>
          ) : (
            <>
              WE DON&apos;T JUST DESIGN LOGOS..
              <br />
              <span className="text-[#CCFF00]">WE ARCHITECT BRAND PRESTIGE</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-4xl font-extrabold mt-2 block">
                THAT ELEVATES MARKET AUTHORITY
              </span>
            </>
          )}
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {isArabic ? (
            <>
              الانطباع الأول لا يتكرر؛ والهوية البصرية المدروسة هي الفارق الحقيقي بين علامة تجارية تُقارن بالأسعار، وعلامة تجارية يختارها العميل بثقة وتفضيل. في <strong className="text-white">2Bro Studio</strong>، نصنع هويات تترك أثراً دائماً.
            </>
          ) : (
            <>
              First impressions never happen twice. A strategic visual identity is the defining edge between a brand competing on price and a brand chosen with absolute loyalty. At <strong className="text-white">2Bro Studio</strong>, we craft identities that leave a lasting mark.
            </>
          )}
        </p>

        {/* الإحصائيات المطلوبة فقط: +20 هوية و +7 قطاعات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-3xl sm:text-5xl font-extrabold text-[#CCFF00] mb-1">
              +20
            </span>
            <span className="text-xs sm:text-sm text-white/80 font-medium">
              {isArabic ? "هوية بصرية ونظام تجاري مكتمل" : "Completed Brand Identities"}
            </span>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-colors flex flex-col items-center text-center">
            <span className="font-mono text-3xl sm:text-5xl font-extrabold text-white mb-1">
              +7
            </span>
            <span className="text-xs sm:text-sm text-white/80 font-medium">
              {isArabic ? "قطاعات تجارية وصناعية شملتها أعمالنا" : "Commercial & Industrial Sectors"}
            </span>
          </div>
        </div>
      </section>

      {/* 3. الإضافة الحركية الجديدة: مستكشف تشريح الهوية البصرية (Brand Anatomy Inspector) */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // INTERACTIVE BRAND ANATOMY
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "تشريح الهوية: كيف نبني علامة لا تُنسى؟" : "Brand Anatomy: How We Craft Timeless Systems"}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            {isArabic ? "انقر على أحد العناصر لاستكشاف معايير الجودة الفنية التي نطبقها في كل مشروع:" : "Click any element below to inspect our visual construction standards:"}
          </p>
        </div>

        {/* أزرار عناصر التشريح */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5">
          {(["grid", "type", "color", "texture"] as const).map((tab) => {
            const isActive = anatomyTab === tab;
            const labels = {
              grid: isArabic ? "الهندسة والنسبة" : "Golden Ratio",
              type: isArabic ? "نظام الخطوط" : "Typography",
              color: isArabic ? "سيكولوجية الألوان" : "Color Psychology",
              texture: isArabic ? "الخامات والواقع" : "Tactile Textures",
            };
            return (
              <button
                key={tab}
                onClick={() => setAnatomyTab(tab)}
                className={`py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
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

        {/* كارت عرض تفاصيل العنصر المختار بحركة سلسة */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-white/10 relative overflow-hidden transition-all duration-500 shadow-xl">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-xs font-mono text-[#CCFF00] font-bold px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20">
              {anatomyDetails[anatomyTab].tag}
            </span>
            <span className="text-xs font-mono text-white/40">2BRO STUDIO CRAFTSMANSHIP</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {isArabic ? anatomyDetails[anatomyTab].titleAr : anatomyDetails[anatomyTab].titleEn}
          </h3>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">
            {isArabic ? anatomyDetails[anatomyTab].descAr : anatomyDetails[anatomyTab].descEn}
          </p>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50">
            <span>• {isArabic ? "مبني بدقة بكسل وخط متجهي (Vector)" : "Engineered at 100% Precision Vector"}</span>
            <span className="text-[#CCFF00] font-bold">100% BESPOKE</span>
          </div>
        </div>
      </section>

      {/* 4. الإضافة الحركية الجديدة: خريطة طريق بناء الهوية (4-Week Creation Roadmap) */}
      <section className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-1">
            // THE 4-WEEK ROADMAP
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "رحلة الـ 4 أسابيع لتصميم هويتك" : "The 4-Week Journey to Your New Identity"}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            {isArabic ? "خطوات واضحة ومنهجية عمل تضمن لك الوصول لهوية تفخر بها:" : "A clear, milestone-driven process from first discovery to final delivery:"}
          </p>
        </div>

        {/* شبكة المراحل الأربع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#14170E] border-[#CCFF00] shadow-[0_0_25px_rgba(204,255,0,0.15)]"
                    : "bg-[#101010] border-white/5 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-black text-[#CCFF00]">{step.step}</span>
                    <span className="text-[11px] font-mono text-white/50">{isArabic ? step.weekAr : step.weekEn}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{isArabic ? step.titleAr : step.titleEn}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{isArabic ? step.descAr : step.descEn}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-mono text-white/40">
                  {isSelected ? "● ACTIVE MILESTONE" : "CLICK TO FOCUS"}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. قسم الباقات الثلاث */}
      <section className="py-16 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest uppercase block mb-2">
            // PACKAGES & SCOPE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isArabic ? "باقات تصميم الهوية البصرية" : "Identity Design Packages"}
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-2">
            {isArabic ? "اختر الباقة الأنسب لمرحلة مشروعك، وسنتولى هندسة تفاصيلها بالكامل" : "Choose the ideal scope for your brand stage"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* الباقة 1: الهوية المصغرة */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">STARTER</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة الهوية المصغرة" : "Essential Identity"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic ? "مثالية للمشاريع الناشئة والمنصات الرقمية التي تحتاج حضوراً سريعاً وأنيقاً بدون مطبوعات." : "Designed for digital-first startups needing quick, sharp brand presence without print assets."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تصميم الشعار الأساسي والفرعي" : "Primary & Secondary Logomark"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "لوحة الألوان المعتمدة وتنسيق الخطوط" : "Color Palette & Typography Pairing"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "نماذج موك اب رقمية للعرض" : "Curated Digital Mockups"}</span>
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <span>✕</span>
                  <span>{isArabic ? "بدون تصاميم مطبوعات ورقية" : "No print assets included"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تسليم بصيغ الويب (PNG, SVG, JPG)" : "Standard digital exports"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة الهوية المصغرة" : "Essential Identity Package")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب باقة الهوية المصغرة" : "Choose Starter"}
            </a>
          </div>

          {/* الباقة 2: الباقة المتوسطة */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <span className="font-mono text-xs text-white/50 block mb-2">STANDARD</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "الباقة المتوسطة" : "Growth Identity"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic ? "تجمع بين قوة الشعار وتجهيز المواد الطباعية الأساسية لظهور احترافي متكامل." : "Balanced package with 6 core print deliverables and mini brand guidelines."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "تصميم الشعار بكامل استخداماته" : "Full Logomark & Variations"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "6 تصاميم طباعية أساسية (كروت، أوراق، أكياس...)" : "6 Core Print Deliverables"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "دليل إرشادي مصغر للهوية (Mini Guideline)" : "Mini Brand Guidelines PDF"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "موك اب واقعي عالي الدقة" : "Realistic 3D Mockup Showcase"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00]">✓</span>
                  <span>{isArabic ? "الملفات الجاهزة للطباعة والويب" : "Print-Ready Vector Files"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "الباقة المتوسطة للهوية" : "Growth Identity Package")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3 rounded-full border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] text-xs font-bold transition-all"
            >
              {isArabic ? "طلب الباقة المتوسطة" : "Choose Standard"}
            </a>
          </div>

          {/* الباقة 3: باقة الهوية الشاملة */}
          <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0E0E0E] border-2 border-[#CCFF00] flex flex-col justify-between shadow-[0_0_35px_rgba(204,255,0,0.15)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black font-extrabold text-[10px] uppercase font-mono px-3.5 py-1 rounded-full tracking-wider whitespace-nowrap">
              {isArabic ? "الباقة الشاملة والأكثر طلباً" : "MOST POPULAR // ELITE"}
            </span>

            <div>
              <span className="font-mono text-xs text-[#CCFF00] block mb-2 mt-1">ULTIMATE</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isArabic ? "باقة الهوية البصرية الشاملة" : "Comprehensive Identity"}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {isArabic ? "النظام الاستراتيجي الكامل للشركات والعلامات التي ترغب في السيطرة وفرض هيبتها بلا تنازلات." : "End-to-end brand architecture with comprehensive guidelines & unlimited assets."}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "بناء الشعار استراتيجياً بكافة صوره وأبعاده" : "Strategic Logomark Architecture"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "دليل هوية بصري كامل وشامل (Full Guidelines)" : "Comprehensive Brand Book & Guidelines"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "منظومة مطبوعات متكاملة وقرطاسية وتغليف" : "Complete Packaging & Stationery Suite"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "قوالب وأصول رقمية للسوشيال ميديا" : "Social Media Digital Design Kit"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "تسليم الملفات المصدرية المفتوحة (AI, EPS, SVG, PDF)" : "100% Open Source Vector Master Files"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-bold">✓</span>
                  <span>{isArabic ? "استشارة وإشراف على مخرجات الطباعة" : "Production & Print Quality Advisory"}</span>
                </div>
              </div>
            </div>

            <a
              href={getPackageUrl(isArabic ? "باقة الهوية الشاملة" : "Comprehensive Identity Suite")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3.5 rounded-full bg-[#CCFF00] text-black font-extrabold text-xs hover:bg-white transition-all shadow-md active:scale-95"
            >
              {isArabic ? "طلب باقة الهوية الشاملة" : "Get Comprehensive Suite"}
            </a>
          </div>

        </div>
      </section>

      {/* 6. معرض المشاريع مع فلتر التصنيف الحركي */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#CCFF00] font-bold tracking-widest block mb-1">
              // CURATED IDENTITY PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {isArabic ? "أعمال وهويات بصرية مختارة" : "Selected Brand Works"}
            </h2>
          </div>

          {/* فلتر التصنيفات التفاعلي */}
          <div className="flex items-center gap-1.5 bg-white/[0.03] p-1 rounded-xl border border-white/5 text-xs font-mono">
            {[
              { id: "all", labelAr: "الكل", labelEn: "All" },
              { id: "luxury", labelAr: "فاخرة", labelEn: "Luxury" },
              { id: "modern", labelAr: "عصرية", labelEn: "Modern" },
              { id: "services", labelAr: "خدمات", labelEn: "Services" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterCategory(btn.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filterCategory === btn.id ? "bg-[#CCFF00] text-black font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                {isArabic ? btn.labelAr : btn.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة الأعمال */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveId(brand.id)}
              className="group relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 hover:border-[#CCFF00]/50 active:border-[#CCFF00]/50 bg-neutral-950 transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]/50 flex flex-col justify-end text-start p-6"
            >
              <BrandCover brand={brand} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="relative z-10 w-full flex items-end justify-between">
                <div>
                  {(brand.categoryAr || brand.categoryEn) && (
                    <span className="text-[10px] font-mono text-[#CCFF00] tracking-wider uppercase block mb-1">
                      {isArabic ? brand.categoryAr : brand.categoryEn}
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#CCFF00] transition-colors truncate">
                    {brand.name}
                  </h3>
                </div>

                <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#CCFF00] group-hover:text-black text-white flex items-center justify-center text-sm transition-all transform group-hover:scale-110 shrink-0">
                  {isArabic ? "↖" : "↗"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 7. كارت الإغلاق والـ CTA */}
      <section className="pt-20 px-5 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0D0D0D] border border-[#CCFF00]/40 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <div className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] mb-4">
            {isArabic ? "جاهز لبناء هويتك القادمة؟" : "Ready to elevate your identity?"}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {isArabic ? "اصنع علامة تجارية لا يمكن تجاهلها" : "Build a Brand That Can't Be Ignored"}
          </h2>

          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            {isArabic
              ? "تواصل معنا لمناقشة أبعاد مشروعك واختيار الباقة الأنسب، وسنبني لك نظاماً بصرياً يمنحك الهيبة في السوق."
              : "Connect with us to outline your vision and select the right scope. We engineer identities built to lead."}
          </p>

          <a
            href={getPackageUrl(isArabic ? "استشارة تصميم هوية" : "Identity Design Consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-black text-sm sm:text-base px-9 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(204,255,0,0.3)] active:scale-95"
          >
            <span>{isArabic ? "ابدأ تصميم هويتك معنا الآن" : "Start Your Identity Now"}</span>
            <span className="text-xl">{isArabic ? "←" : "→"}</span>
          </a>
        </div>
      </section>

      {/* نافذة العرض المنبثقة */}
      {activeBrand && (
        <BrandLightbox
          brand={activeBrand}
          isArabic={isArabic}
          onClose={() => setActiveId(null)}
        />
      )}
    </div>
  );
}