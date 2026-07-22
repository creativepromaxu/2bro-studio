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

/* بطاقة مشروع كبيرة موحّدة — صورة + نص جنب بعض بحجم بارز يتناسب مع
   ضخامة فيديو الهيرو، وتتبادل جهة الصورة كل بطاقة لإعطاء إيقاع بصري */
function ProjectCard({
  project,
  index,
  isArabic,
  reverse,
}: {
  project: Project;
  index: number;
  isArabic: boolean;
  reverse: boolean;
}) {
  const [cardRef, cardVisible] = useReveal<HTMLAnchorElement>(0.1);
  const arrow = isArabic ? "←" : "→";
  const viewText = isArabic ? "استعراض المشروع" : "View Project";

  return (
    <Link
      href={`/project/${project.id}`}
      ref={cardRef}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`reveal-up ${
        cardVisible ? "is-visible" : ""
      } group relative grid md:grid-cols-2 gap-6 md:gap-10 items-stretch border border-white/5 hover:border-[#CCFF00]/30 active:border-[#CCFF00]/30 bg-black rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-500 overflow-hidden active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]/50`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#CCFF00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div
        className={`relative w-full aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 z-10 order-1 md:order-none ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={`/${project.id}.webp`}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, 45vw"
          className="object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <div
        className={`relative z-10 flex flex-col justify-center py-2 md:py-6 ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mb-5 md:mb-8">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#888888] uppercase">
            {project.category}
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-black font-mono leading-none text-[#CCFF00] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 select-none">
            {project.id}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5 tracking-tight leading-[1.05]">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-[#888888] font-light leading-relaxed max-w-lg mb-6 md:mb-10 group-hover:text-neutral-300 group-active:text-neutral-300 transition-colors duration-500">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-neutral-500 group-hover:text-[#CCFF00] group-active:text-[#CCFF00] transition-all duration-300">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase select-none">
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
      className="w-full py-16 sm:py-20 md:py-28 border-t border-white/5 bg-[#0A0A0A] overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* رأس القسم */}
      <div
        ref={headerRef}
        className={`reveal-up ${
          headerVisible ? "is-visible" : ""
        } mb-10 sm:mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4`}
      >
        <div>
          <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#CCFF00] uppercase block mb-3">
            {isArabic ? "// أبرز أعمالنا" : "// SELECTED WORK"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
            {isArabic ? "مجالات العمل" : "What We Do"}
          </h2>
        </div>
        <span className="text-xs font-mono font-semibold text-[#888888] tracking-widest uppercase">
          2Bro Studio © {isArabic ? "2026 تخصصات متكاملة" : "2026 Integrated Services"}
        </span>
      </div>

      {/* قائمة المشاريع — كل بطاقة بنفس الحجم البارز، تتبادل جهة الصورة */}
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isArabic={isArabic}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
