import React from 'react';
import Link from 'next/link';

export default function Project02() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white flex flex-col items-center justify-center p-8 select-none">
      <div className="max-w-xl text-center space-y-6">
        <span className="text-xs font-mono font-semibold tracking-widest text-[#CCFF00] block">{"// CASE STUDY 02"}</span>
        <h1 className="text-4xl md:text-5xl font-bold uppercase">Digital Platform Build</h1>
        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          بناء وتطوير منصة رقمية عالية الأداء باستخدام Next.js من الصفر، بتصميم واجهة مستخدم مخصصة تجمع بين سلاسة الأداء وفخامة التجربة على جميع الأجهزة.
        </p>
        <div className="pt-6">
          <Link href="/" className="text-xs font-mono font-semibold uppercase tracking-widest border border-white/10 px-6 py-3 rounded-full hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors">
            ← Back to main
          </Link>
        </div>
      </div>
    </main>
  );
}