import React from 'react';
import Link from 'next/link';

export default function Project01() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white flex flex-col items-center justify-start p-8 md:p-16 select-none font-sans">
      
      {/* 1. Header Section */}
      <div className="max-w-3xl text-center space-y-6 mb-16 mt-8">
        <span className="text-xs font-mono tracking-widest text-[#CCFF00] block">
          // CASE STUDY 01
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Link UP Identity
        </h1>
        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
          بناء استراتيجية بصرية متكاملة وشعار فريد يعكس قوة وحضور منصة Link UP الرقمية في السوق، مع تصميم واجهة مستخدم تتناغم تماماً مع الهوية وتوفر تجربة استخدام استثنائية.
        </p>
      </div>

      {/* 2. Device Mockup with iframe (First Method) */}
      <div className="w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl shadow-[#CCFF00]/5 mb-16 relative group">
        
        {/* Browser Header / Top Bar */}
        <div className="h-10 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 relative">
          <div className="flex gap-2 z-10">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          {/* URL Bar */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/50 text-white/40 text-[11px] font-mono px-6 py-1.5 rounded-md border border-white/5">
              https://www.linkupksa.com
            </div>
          </div>
        </div>

        {/* The iframe */}
        <div className="h-[65vh] w-full bg-white relative">
          {/* Loading placeholder (optional, shows before iframe loads) */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#111] -z-10 text-neutral-500 font-mono text-sm">
            Loading Live Preview...
          </div>
          <iframe 
            src="https://www.linkupksa.com" 
            className="w-full h-full border-none"
            title="Link UP Live Preview"
            loading="lazy"
          />
        </div>
      </div>

      {/* 3. Project Highlights / Features Grid */}
      <div className="w-full max-w-5xl mx-auto mb-16">
        <h3 className="text-xl font-bold mb-8 text-center md:text-right border-b border-white/10 pb-4">
          تفاصيل التنفيذ البرمجي والتصميمي
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right" dir="rtl">
          
          {/* Feature: Language */}
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h4 className="text-[#CCFF00] font-bold mb-3 text-lg">اللغتين العربية والإنجليزية</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              تم بناء واجهة المستخدم (UI) لتدعم الاتجاهين (RTL & LTR) بشكل ديناميكي، مما يضمن تجربة قراءة وتصفح سلسة للمستخدمين باللغتين دون أي تشوه في التنسيق.
            </p>
          </div>

          {/* Feature: Light/Dark Mode */}
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h4 className="text-[#CCFF00] font-bold mb-3 text-lg">الوضع الفاتح والداكن</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              توفير تجربة بصرية مريحة للعين عبر دمج الوضعين (Light & Dark Mode) بانسجام تام، مع مراعاة تباين الألوان في كلا الوضعين للحفاظ على وضوح المحتوى.
            </p>
          </div>

          {/* Feature: Banners */}
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h4 className="text-[#CCFF00] font-bold mb-3 text-lg">تصميم البنرات الإعلانية</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              لم نكتفِ بتصميم الموقع فحسب، بل قمنا بتصميم كافة البنرات والرسومات الداخلية لتتوافق تماماً مع لغة التصميم الخاصة بالهوية البصرية للمشروع.
            </p>
          </div>

          {/* Feature: Brand Identity */}
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h4 className="text-[#CCFF00] font-bold mb-3 text-lg">التناغم مع الهوية البصرية</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              تم توظيف الألوان الأساسية والثانوية، بالإضافة إلى الخطوط الهندسية الخاصة بـ Link UP في جميع أجزاء الموقع، ليصبح الموقع امتداداً رقمياً حقيقياً للهوية.
            </p>
          </div>

        </div>
      </div>

      {/* 4. Footer / Back Button */}
      <div className="pt-8">
        <Link 
          href="/" 
          className="text-xs font-mono uppercase tracking-widest border border-white/10 px-8 py-4 rounded-full hover:border-[#CCFF00] hover:text-[#CCFF00] hover:bg-[#CCFF00]/5 transition-all duration-300"
        >
          ← Back to main
        </Link>
      </div>

    </main>
  );
}