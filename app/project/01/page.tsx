"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Brand {
  id: string;
  name: string;
  /** مسار صورة الغلاف المربعة بالشبكة داخل public/identities — اختياري لحين رفعها */
  cover?: string;
  /** مسار صورة طويلة تعرض الهوية كاملة (PNG/WebP) — هذي اللي تفتح بالعرض */
  fullImage?: string;
}

/*
  عشان تضيف براند جديد لهذي القائمة:
  1. حط صورة الغلاف المربعة (1:1) داخل public/identities/ مثلاً: my-brand-cover.webp
  2. صدّر الهوية كصورة واحدة طويلة (PNG أو WebP) من برنامج التصميم مباشرة
     (Illustrator/Photoshop → Export As) وحطها بنفس المجلد، مثلاً:
     my-brand-full.webp
  3. ضيف عنصر جديد بالمصفوفة تحت بنفس الشكل:
     {
       id: "my-brand",
       name: "اسم البراند",
       cover: "/identities/my-brand-cover.webp",
       fullImage: "/identities/my-brand-full.webp",
     }
  إذا ما حطيت أي منهم بعد، الصفحة تعرض بديل مرتب تلقائياً لحين ما ترفعها.
  (لو عندك ملف PDF بس وتبيني أحوّله لك لصورة طويلة، ابعثه لي وأسويها.)
*/
const brands: Brand[] = [
  {
    id: "ZAHER",
    name: "ZAHER",
    cover: "/identities/ZAHER.jpg",
    fullImage: "/identities/ZAHER-full.webp",
  },
  {
    id: "WOW",
    name: "THAM WOW",
    cover: "/identities/WOW.jpg",
    fullImage: "/identities/WOW-full.webp",
  },
  { id: "brand-03", name: "Brand Three" },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

/* مربع الغلاف — يعرض صورة الغلاف، وإذا ما وجدت أو فشل تحميلها يعرض بديل أنيق باسم البراند */
function BrandCover({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(!brand.cover);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black">
        <span className="text-lg sm:text-xl font-bold text-white/30 text-center px-4 uppercase tracking-wide">
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
      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      onError={() => setFailed(true)}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
    />
  );
}

/* نافذة العرض (Lightbox) — تفتح هوية البراند المختار للمشاهدة فقط، مع زوم،
   وبدون أي إمكانية تحميل أو حفظ الصورة (كليك يمين وسحب معطّلين) */
function BrandLightbox({ brand, onClose }: { brand: Brand; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const isPressedRef = useRef(false);
  const dragStart = useRef({ startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 });

  // السحب بالماوس للتنقل داخل الصورة المكبّرة (بدل ما نحصر التحرك بعجلة
  // الماوس اللي تحرك عمودي بس) — نفس إحساس خرائط جوجل: كليك وسحب لأي جهة
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
    // نوقف تحديد النص أثناء السحب عشان ما يصير تحديد عشوائي بالصفحة
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* رأس النافذة */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 shrink-0">
          <span className="text-sm sm:text-base font-bold text-white truncate">
            {brand.name}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {brand.fullImage && (
              <div className="flex items-center gap-1 border border-white/10 rounded-full p-1">
                <button
                  onClick={zoomOut}
                  disabled={zoom <= MIN_ZOOM}
                  aria-label="تصغير"
                  className="w-7 h-7 flex items-center justify-center rounded-full text-white/70 hover:text-[#CCFF00] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  −
                </button>
                <span className="text-[10px] font-mono text-neutral-400 w-9 text-center select-none">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  disabled={zoom >= MAX_ZOOM}
                  aria-label="تكبير"
                  className="w-7 h-7 flex items-center justify-center rounded-full text-white/70 hover:text-[#CCFF00] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            )}
            <button
              onClick={onClose}
              aria-label="إغلاق"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors cursor-pointer shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        {/* منطقة العرض */}
        <div
          ref={scrollAreaRef}
          className={`relative flex-1 bg-neutral-900 overflow-auto select-none ${
            zoom > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
          }`}
          onContextMenu={(e) => e.preventDefault()}
        >
          {brand.fullImage ? (
            /* صورة طويلة بأبعاد غير معروفة مسبقاً لكل براند، تُعرض بعرضها
               الطبيعي (مع إمكانية تكبيرها) داخل نافذة قابلة للتمرير؛
               next/image يحتاج أبعاد ثابتة لا تناسب هذي الحالة */
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
                صورة الهوية لهذا البراند لسا ما رُفعت.
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

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white flex flex-col items-center p-8 md:p-16">
      <div className="max-w-3xl w-full text-center space-y-6 mb-14">
        <span className="text-xs font-mono font-semibold tracking-widest text-[#CCFF00] block">
          {"// CASE STUDY 01"}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
          الهويات البصرية
        </h1>
        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
          مجموعة من الهويات البصرية اللي صممناها لعملائنا. اضغط على أي براند
          لعرض هويته الكاملة مباشرة.
        </p>
      </div>

      {/* شبكة مربعات البراندات */}
      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => setActiveId(brand.id)}
            className="group relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 hover:border-[#CCFF00]/30 active:border-[#CCFF00]/30 bg-neutral-950 transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]/50"
          >
            <BrandCover brand={brand} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 text-xs sm:text-sm font-bold text-white truncate text-center">
              {brand.name}
            </span>
          </button>
        ))}
      </div>

      <div className="pt-12">
        <Link
          href="/"
          className="text-xs font-mono font-semibold uppercase tracking-widest border border-white/10 px-6 py-3 rounded-full hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors"
        >
          ← العودة للرئيسية
        </Link>
      </div>

      {activeBrand && (
        <BrandLightbox brand={activeBrand} onClose={() => setActiveId(null)} />
      )}
    </main>
  );
}
