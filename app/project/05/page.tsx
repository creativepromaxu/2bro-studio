import React from 'react';
import Link from 'next/link';

export default function Project05() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white flex flex-col items-center justify-center p-8 select-none">
      <div className="max-w-xl text-center space-y-6">
        <span className="text-xs font-mono tracking-widest text-[#CCFF00] block">// CASE STUDY 05</span>
        <h1 className="text-4xl md:text-5xl font-black uppercase">Paid Ads Acquisition</h1>
        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          إطلاق وهندسة الحملات الإعلانية المدفوعة والممولة على منصتي تيك توك وفيسبوك، واستهداف الجمهور بدقة عالية لتحقيق أعلى معدل عائد على الإنفاق الإعلاني (ROI).
        </p>
        <div className="pt-6">
          <Link href="/" className="text-xs font-mono uppercase tracking-widest border border-white/10 px-6 py-3 rounded-full hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors">
            ← Back to main
          </Link>
        </div>
      </div>
    </main>
  );
}