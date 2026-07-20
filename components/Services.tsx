"use client";
import React from "react";
import useReveal from "../hooks/useReveal";

interface ServicesProps {
  isArabic: boolean;
}

interface Service {
  id: string;
  title: string;
  desc: string;
}

function ServiceRow({
  service,
  index,
  isArabic,
}: {
  service: Service;
  index: number;
  isArabic: boolean;
}) {
  const [rowRef, rowVisible] = useReveal<HTMLDivElement>(0.15);

  return (
    <div
      ref={rowRef}
      style={{ transitionDelay: `${(index % 5) * 70}ms` }}
      className={`reveal-up ${
        rowVisible ? "is-visible" : ""
      } group relative border-t border-white/5 py-7 sm:py-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 px-4 md:px-8 transition-all duration-500 overflow-hidden active:bg-white/[0.02]`}
    >
      {/* توهج خلفي ناعم عند التمرير أو اللمس */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CCFF00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* الرقم والاسم */}
      <div className="flex items-baseline gap-4 sm:gap-6 md:gap-10 z-10">
        <span className="text-xs font-mono text-[#CCFF00] transition-transform duration-300 group-hover:scale-110 group-active:scale-110 inline-block">
          {service.id}
        </span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-300 group-hover:text-white group-active:text-white transition-all duration-500 ease-out">
          {service.title}
        </h3>
      </div>

      {/* الوصف والسهم */}
      <div className="flex items-center gap-6 sm:gap-8 w-full md:w-auto justify-between md:justify-end z-10">
        <p className="max-w-md text-sm md:text-base text-[#888888] font-normal leading-relaxed group-hover:text-neutral-300 group-active:text-neutral-300 transition-colors duration-500">
          {service.desc}
        </p>
        <div
          className="text-neutral-600 group-hover:text-[#CCFF00] group-active:text-[#CCFF00] text-xl md:text-2xl font-light transform transition-all duration-500 ease-out group-hover:rotate-45 group-active:rotate-45 group-hover:scale-110 group-active:scale-110 shrink-0"
          aria-hidden="true"
        >
          {isArabic ? "←" : "→"}
        </div>
      </div>

      {/* خط سفلي متحرك */}
      <div className="absolute bottom-0 start-0 h-[1px] bg-[#CCFF00] w-0 group-hover:w-full group-active:w-full transition-all duration-700 ease-out" />
    </div>
  );
}

export default function Services({ isArabic }: ServicesProps) {
  const servicesList: Service[] = [
    {
      id: "01",
      title: isArabic ? "تصميم الهويات البصرية" : "Brand Identity Design",
      desc: isArabic
        ? "بناء استراتيجيات بصرية متكاملة وشعارات فريدة تعكس هيبة وفخامة مشروعك."
        : "Crafting premium visual identities and unique logos that define your brand's prestige.",
    },
    {
      id: "02",
      title: isArabic ? "تصميم وتطوير مواقع الويب" : "Web Design & Development",
      desc: isArabic
        ? "مواقع تعريفية وشخصية مخصصة وعالية الأداء، مبنية من الصفر وليست قوالب جاهزة."
        : "Bespoke, high-performance informational websites crafted from scratch—no generic templates.",
    },
    {
      id: "03",
      title: isArabic ? "تصميمات السوشيال ميديا" : "Social Media Design",
      desc: isArabic
        ? "صناعة محتوى بصري سينمائي ومبتكر لحساباتك يضمن لك التميز وسط المنافسين."
        : "Creating cinematic, scroll-stopping visual content tailored for your social channels.",
    },
    {
      id: "04",
      title: isArabic ? "تصميم المطبوعات الاحترافية" : "Print & Editorial Design",
      desc: isArabic
        ? "تصميم الكتيبات، بروفايلات الشركات، والمواد الإعلانية الورقية بأعلى جودة بصرية."
        : "Designing high-end brochures, corporate profiles, and premium physical marketing assets.",
    },
    {
      id: "05",
      title: isArabic ? "إدارة الحملات الإعلانية" : "Paid Ads Management",
      desc: isArabic
        ? "إطلاق وإدارة الحملات الممولة على تيك توك وفيسبوك لزيادة مبيعاتك وتحقيق أعلى عائد."
        : "Targeted ad campaigns on TikTok & Facebook optimized to scale your growth and ROI.",
    },
  ];

  const [headerRef, headerVisible] = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="services-section"
      className="w-full py-16 sm:py-20 md:py-28 border-t border-white/5 bg-[#0A0A0A] px-4 md:px-0 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* عنوان القسم */}
      <div
        ref={headerRef}
        className={`reveal-up ${
          headerVisible ? "is-visible" : ""
        } mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4`}
      >
        <div>
          <span className="text-xs font-mono tracking-[0.2em] text-[#CCFF00] uppercase block mb-3">
            {isArabic ? "// طيف التصميم والبرمجة" : "// DESIGN & CODE SPECTRUM"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            {isArabic ? "مجالات الخبرة" : "Our Expertise"}
          </h2>
        </div>
        <div className="text-xs font-mono text-[#888888] tracking-widest hidden md:block">
          2BRO STUDIO / FOCUS AREAS
        </div>
      </div>

      {/* قائمة الخدمات */}
      <div className="flex flex-col border-b border-white/5">
        {servicesList.map((service, index) => (
          <ServiceRow
            key={service.id}
            service={service}
            index={index}
            isArabic={isArabic}
          />
        ))}
      </div>
    </section>
  );
}
