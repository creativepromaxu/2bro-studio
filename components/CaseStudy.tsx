import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CaseStudyProps {
  num: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

/**
 * قالب موحّد لصفحات دراسات الحالة (المشاريع) —
 * عنوان + وصف عربي + صورة المشروع + زر العودة.
 */
export default function CaseStudy({
  num,
  title,
  description,
  image,
  imageAlt,
}: CaseStudyProps) {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white flex flex-col items-center justify-center p-8 md:p-16">
      <div className="max-w-3xl w-full text-center space-y-6 my-8">
        <span className="text-xs font-mono font-semibold tracking-widest text-[#CCFF00] block" dir="ltr">
          {`// CASE STUDY ${num}`}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight" dir="ltr">
          {title}
        </h1>
        <p
          className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto"
          dir="rtl"
          lang="ar"
        >
          {description}
        </p>

        {image && (
          <div className="relative w-full aspect-square max-w-xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#CCFF00]/5 mt-10">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 768px) 90vw, 576px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="pt-8">
          <Link
            href="/"
            className="inline-block text-xs font-mono font-semibold uppercase tracking-widest border border-white/10 px-8 py-4 rounded-full hover:border-[#CCFF00] hover:text-[#CCFF00] hover:bg-[#CCFF00]/5 transition-all duration-300"
            dir="ltr"
          >
            ← Back to main
          </Link>
        </div>
      </div>
    </main>
  );
}
