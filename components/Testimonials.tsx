"use client";
import React from "react";

interface TestimonialsProps {
  isArabic: boolean;
}

export default function Testimonials({ isArabic }: TestimonialsProps) {
  // 10 عملاء متنوعين يغطون خدمات الاستوديو الخمس بالكامل
  const baseReviews = [
    { id: 1, rating: "5.0/5", name: isArabic ? "أحمد الرميح" : "Tomas E.", company: "ONYX SKINCARE", textAr: "عمل نظيف وسريع متوافق مع الهوية تماماً من المسودة الأولى.", textEn: "Clean, fast, and on-brand from the very first draft. Perfect job." },
    { id: 2, rating: "5.0/5", name: isArabic ? "صوفيا ر." : "Sofia R.", company: "STUDIO TERRA", textAr: "ذوق بصري رفيع جداً وتنفيذ سريع. أحببنا العمل معاً.", textEn: "Sharp taste, fast execution, zero ego. We loved working together." },
    { id: 3, rating: "5/5", name: isArabic ? "دانيال م." : "Daniel M.", company: "KAIRO", textAr: "أخيراً أصبح موقعنا يمثلنا تماماً. هذا هو ما يفعله التصميم المخصص.", textEn: "It finally looks like us. That's what good design should do." },
    { id: 4, rating: "5/5", name: isArabic ? "ريلي جيمس" : "Riley James", company: "NOVA", textAr: "كل تفصيل كان مقصوداً وله معنى. واجهات سريعة ومثيرة للإعجاب.", textEn: "Every detail felt intentional. The Next.js speed is incredible." },
    { id: 5, rating: "5.0/5", name: isArabic ? "خالد العتيبي" : "Khaled A.", company: "APEX MARKETING", textAr: "الحملات الإعلانية على تيك توك غيرت أرقام مبيعاتنا بالكامل.", textEn: "TikTok ad campaigns completely scaled our revenue in record time." },
    { id: 6, rating: "5/5", name: isArabic ? "لينا الشريف" : "Lina SH.", company: "ELEVATE STUDIO", textAr: "تصميم المطبوعات وبروفايل الشركة قمة في الفخامة والترتيب.", textEn: "Corporate profile design is exceptionally premium and high-end." },
    { id: 7, rating: "5.0/5", name: isArabic ? "ماركوس ف." : "Marcus V.", company: "RAW AUDIO", textAr: "استوديو مبدع يفهم احتياج السوق ويقدم واجهات سينمائية.", textEn: "Creative studio that delivers stunning cinematic web interfaces." },
    { id: 8, rating: "5/5", name: isArabic ? "سلطان القحطاني" : "Sultan Q.", company: "SAUDI VENTURES", textAr: "التزام تام بالوقت، وهندسة البراندنج عندهم فريدة وجريئة.", textEn: "Absolute commitment to deadlines. Outstanding branding engineering." },
    { id: 9, rating: "5.0/5", name: isArabic ? "إيما هانسن" : "Emma Hansen", company: "NORDIC LIGHT", textAr: "تصميمات السوشيال ميديا جذابة جداً وجعلت حساباتنا تبرز كلياً.", textEn: "Social media assets are scroll-stopping. Highly recommended." },
    { id: 10, rating: "5/5", name: isArabic ? "عبدالعزيز الماجد" : "Abdulaziz M.", company: "AL-MAJED LAW", textAr: "موقعنا التعريفي سريع جداً وبتصميم مستوٍ فاخر خالٍ من التعقيد.", textEn: "Bespoke informational website, fast and clean minimalist layout." },
  ];

  // تكرار الكروت لضمان الدوران الدائري بدون انقطاع
  const currentTickerReviews = [...baseReviews, ...baseReviews];

  return (
    <section
      id="testimonials-section"
      className="w-full py-16 sm:py-20 md:py-28 border-t border-white/5 bg-[#0A0A0A] overflow-hidden"
    >
      {/* العناوين العلوية */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          {isArabic ? "موضع ثقة الشركات الطموحة" : "Trusted By Ambitious Teams"}
        </h2>
        <p className="text-xs font-mono font-semibold tracking-widest text-[#CCFF00] uppercase">
          {isArabic ? "آراء وتقييمات العملاء" : "Feedback from clients"}
        </p>
      </div>

      {/* منطقة العرض مع تلاشي الأطراف — تتوقف الحركة عند مرور المؤشر */}
      <div className="marquee-pausable relative w-full select-none before:absolute before:top-0 before:left-0 before:w-20 md:before:w-40 before:h-full before:bg-gradient-to-r before:from-[#0A0A0A] before:to-transparent before:z-20 after:absolute after:top-0 after:right-0 after:w-20 md:after:w-40 after:h-full after:bg-gradient-to-l after:from-[#0A0A0A] after:to-transparent after:z-20">
        <div
          className="marquee-track flex w-max gap-6"
          style={{
            animation: isArabic
              ? "marquee-rtl 45s linear infinite"
              : "marquee 45s linear infinite",
          }}
        >
          {currentTickerReviews.map((review, index) => (
            <div
              key={index}
              className="w-[290px] md:w-[360px] shrink-0 bg-[#121212] border border-white/5 p-8 rounded-3xl flex flex-col justify-between h-80 hover:border-[#CCFF00]/20 transition-colors duration-300"
              dir={isArabic ? "rtl" : "ltr"}
            >
              <div>
                <div className="flex items-center gap-2 mb-6 font-mono font-semibold text-xs text-neutral-500">
                  <span>{review.rating}</span>
                  <span className="text-[#CCFF00] text-sm" aria-hidden="true">
                    ★★★★★
                  </span>
                </div>
                <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  {isArabic ? review.textAr : review.textEn}
                </p>
              </div>

              {/* ذيل الكرت */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-[10px] text-neutral-400 font-mono font-bold uppercase shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-bold text-white truncate">
                    {review.name}
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#CCFF00] mt-0.5 uppercase truncate">
                    {review.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
