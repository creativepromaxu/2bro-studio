"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useReveal from "../hooks/useReveal";

interface WorkProps {
  isArabic: boolean;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
}

function ProjectCard({
  project,
  index,
  isArabic,
  gridClass,
}: {
  project: Project;
  index: number;
  isArabic: boolean;
  gridClass: string;
}) {
  const [cardRef, cardVisible] = useReveal<HTMLAnchorElement>(0.1);
  const arrow = isArabic ? "←" : "→";
  const viewText = isArabic ? "استعراض القسم" : "View Details";

  const titleShift = isArabic
    ? "group-hover:-translate-x-1.5 group-active:-translate-x-1.5"
    : "group-hover:translate-x-1.5 group-active:translate-x-1.5";

  return (
    <Link
      href={`/project/${project.id}`}
      ref={cardRef}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`reveal-up ${
        cardVisible ? "is-visible" : ""
      } ${gridClass} group relative border border-white/5 bg-black p-5 sm:p-6 rounded-3xl flex flex-col hover:border-[#CCFF00]/30 active:border-[#CCFF00]/30 transition-all duration-500 cursor-pointer overflow-hidden active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]/50`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#CCFF00]/[0.01] to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* صورة القسم — مربعة */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 sm:mb-6 border border-white/5 bg-neutral-900 z-10">
        <Image
          src={`/${project.id}.webp`}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>

      {/* التصنيف والرقم الفسفوري */}
      <div className="flex justify-between items-center z-10 gap-3 mb-4">
        <span className="text-xs font-mono tracking-wider text-[#888888] uppercase block max-w-[75%] mt-1">
          {project.category}
        </span>
        <span className="text-3xl sm:text-4xl font-black font-mono leading-none text-[#CCFF00] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 select-none">
          {project.id}
        </span>
      </div>

      {/* العنوان والوصف والسهم التفاعلي */}
      <div className="z-10 relative flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={`text-xl sm:text-2xl font-bold text-[#CCFF00] mb-2 sm:mb-3 transition-transform duration-300 ${titleShift}`}
          >
            {project.title}
          </h3>
          <p className="text-sm text-[#888888] font-light leading-relaxed group-hover:text-neutral-300 group-active:text-neutral-300 transition-colors duration-500">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-neutral-500 group-hover:text-[#CCFF00] group-active:text-[#CCFF00] transition-all duration-300">
          <span className="text-xs font-mono tracking-wider uppercase select-none">
            {viewText}
          </span>
          <span
            className="text-xl font-light transform transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            {arrow}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Work({ isArabic }: WorkProps) {
  const projects: Project[] = [
    {
      id: "01",
      title: isArabic ? "الهويات البصرية والشعارات" : "Brand Identity & Logo Design",
      category: isArabic ? "التصميم الاستراتيجي" : "Strategic Design",
      description: isArabic
        ? "ابتكار استراتيجيات بصرية متكاملة وصياغة شعارات فريدة تمنح الشركات حضوراً استثنائياً يرسخ في الأذهان."
        : "Crafting complete visual strategies and premium identities that establish a commanding brand presence.",
    },
    {
      id: "02",
      title: isArabic ? "تطوير المواقع والمنصات الرقمية" : "Web & Digital Platforms",
      category: isArabic ? "التطوير والبرمجة" : "Development & Code",
      description: isArabic
        ? "بناء وتطوير مواقع تعريفية ومنصات إلكترونية عالية الأداء باستخدام Next.js، تجمع بين سلاسة الأداء وفخامة التجربة."
        : "Building bespoke, high-performance web systems and portfolios utilizing Next.js with ultra-fluid UX.",
    },
    {
      id: "03",
      title: isArabic ? "تصميمات السوشيال ميديا وبنرات المواقع والمتاجر" : "Social Media & Web Banners",
      category: isArabic ? "المحتوى الرقمي" : "Digital Content",
      description: isArabic
        ? "تصميم محتوى مرئي جذاب لحسابات التواصل الاجتماعي، بالإضافة إلى بنرات احترافية للمواقع والمتاجر الإلكترونية."
        : "Designing engaging visual content for social platforms, alongside professional banners for websites and e-commerce stores.",
    },
    {
      id: "04",
      title: isArabic ? "التصاميم الطباعية" : "Print Design",
      category: isArabic ? "التصميم الإبداعي" : "Creative Design",
      description: isArabic
        ? "تصميم كافة المواد القابلة للطباعة بأعلى معايير الدقة والتايبوجرافي لتناسب مختلف الاحتياجات التجارية والمؤسسية."
        : "Designing all printable materials with the highest standards of precision and typography for diverse business needs.",
    },
    {
      id: "05",
      title: isArabic ? "إدارة الحملات الإعلانية الممولة" : "Paid Advertising Campaigns",
      category: isArabic ? "التسويق الرقمي" : "Digital Growth",
      description: isArabic
        ? "تخطيط وإطلاق حملات إعلانية مستهدفة بدقة عبر المنصات الرقمية لتحقيق أعلى عائد على الإنفاق ونمو المبيعات."
        : "Executing targeted media buying and paid ad strategies heavily optimized to scale business ROI.",
    },
  ];

  const [headerRef, headerVisible] = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="work-section"
      className="w-full py-16 sm:py-20 md:py-28 border-t border-white/5 bg-[#0A0A0A] px-4 md:px-0 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* رأس القسم */}
      <div
        ref={headerRef}
        className={`reveal-up ${
          headerVisible ? "is-visible" : ""
        } mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4`}
      >
        <div>
          <span className="text-xs font-mono tracking-[0.2em] text-[#CCFF00] uppercase block mb-3">
            {isArabic ? "// ركائز الاستوديو الأساسية" : "// OUR CORE PILLARS"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            {isArabic ? "مجالات العمل" : "What We Do"}
          </h2>
        </div>
        <span className="text-xs font-mono text-[#888888] tracking-widest uppercase">
          2Bro Studio © {isArabic ? "2026 تخصصات متكاملة" : "2026 Integrated Services"}
        </span>
      </div>

      {/*
        شبكة المشاريع بنظام 6 أعمدة:
        - الموبايل: عمود واحد.
        - sm: عمودان (البطاقة الأخيرة بعرض كامل للتوازن).
        - lg: 3 بطاقات في الصف، والصف الثاني (بطاقتان) يتوسّط تلقائياً.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 md:gap-8">
        {projects.map((project, index) => {
          let gridClass = "col-span-1 sm:col-span-1 lg:col-span-2";
          if (index === 3) {
            gridClass = "col-span-1 sm:col-span-1 lg:col-start-2 lg:col-span-2";
          }
          if (index === 4) {
            gridClass = "col-span-1 sm:col-span-2 lg:col-span-2";
          }

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isArabic={isArabic}
              gridClass={gridClass}
            />
          );
        })}
      </div>
    </section>
  );
}
