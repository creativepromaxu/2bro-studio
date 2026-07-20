"use client";
import React, { useState } from "react";

interface ContactProps {
  isArabic: boolean;
}

export default function Contact({ isArabic }: ContactProps) {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [error, setError] = useState("");

  const targetEmail = "hello@2bro.studio";

  // صياغة نص الرسالة التي ستصل للاستوديو
  const generateMessageBody = () => {
    return isArabic
      ? `مرحباً 2Bro Studio،\n\nلقد قمت بملء نموذج التواصل من الموقع الإلكتروني:\n\n- الاسم: ${name}\n- وسيلة التواصل للعميل: ${contactInfo}\n- تفاصيل المشروع:\n${projectDetails}`
      : `Hello 2Bro Studio,\n\nI filled out the contact form on your website:\n\n- Name: ${name}\n- Client Contact Info: ${contactInfo}\n- Project Details:\n${projectDetails}`;
  };

  // معالج الإرسال الذكي: بريد إلكتروني أو واتساب حسب المدخل
  const handleSmartSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !contactInfo.trim() || !projectDetails.trim()) {
      setError(
        isArabic
          ? "الرجاء تعبئة جميع الحقول أولاً."
          : "Please fill in all fields first."
      );
      return;
    }
    setError("");

    const body = generateMessageBody();
    const lowerContact = contactInfo.trim().toLowerCase();
    const isEmail = lowerContact.includes("@");

    if (isEmail) {
      // --- مسار البريد الإلكتروني حسب النطاق ---
      const subject = isArabic
        ? `طلب مشروع جديد من: ${name}`
        : `New Project Proposal from: ${name}`;

      if (lowerContact.includes("gmail.com")) {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, "_blank", "noopener");
      } else if (
        lowerContact.includes("outlook.com") ||
        lowerContact.includes("hotmail.com")
      ) {
        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${targetEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(outlookUrl, "_blank", "noopener");
      } else {
        // أي بريد آخر: فتح برنامج البريد الافتراضي للجهاز
        window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    } else {
      // --- مسار الواتساب: تنظيف الرقم ودعم الصيغ المحلية والدولية ---
      let cleanNumber = contactInfo.replace(/[^0-9+]/g, "");

      if (cleanNumber.startsWith("+")) {
        // صيغة دولية صريحة: +9665xxxxxxxx
        cleanNumber = cleanNumber.slice(1);
      } else if (cleanNumber.startsWith("00")) {
        // صيغة دولية بالأصفار: 009665xxxxxxxx
        cleanNumber = cleanNumber.slice(2);
      } else if (cleanNumber.startsWith("0")) {
        // صيغة محلية (05xxxxxxxx): إضافة مفتاح السعودية الافتراضي
        cleanNumber = "966" + cleanNumber.slice(1);
      }
      // إذا كُتب بالصيغة الدولية مباشرة (9665xxx) يُترك كما هو

      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${cleanNumber}&text=${encodeURIComponent(body)}&type=phone_number&app_absent=0`;
      window.open(whatsappUrl, "_blank", "noopener");
    }
  };

  const inputClass =
    "w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#CCFF00] transition-colors";

  return (
    <section
      id="contact-section"
      className="w-full py-16 sm:py-20 md:py-28 border-t border-white/5 bg-[#0A0A0A]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* جانب التعريف */}
        <div>
          <span className="text-xs font-mono tracking-[0.2em] text-[#CCFF00] uppercase block mb-3">
            {isArabic ? "// لنبدأ شيئاً عظيماً معاً" : "// CONNECT WITH US"}
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-6">
            {isArabic ? "هل لديك مشروع؟" : "Let's Start a Project."}
          </h2>
          <p className="text-base md:text-lg text-[#888888] font-light leading-relaxed max-w-md mb-10">
            {isArabic
              ? "أدخل بياناتك وسيتعرف النظام تلقائياً على وسيلة تواصلك؛ إذا أدخلت جوالك بصيغة محلية أو دولية سيحوّلك مباشرة لمحادثة واتساب منسقة، وإذا أدخلت بريدك الإلكتروني سيفتح لك نافذة مراسلة جاهزة فوراً."
              : "Enter your details, and the system will intelligently detect your contact method; whether a local or international phone number for WhatsApp, or a ready-to-send email window."}
          </p>

          <div className="space-y-4 max-w-sm pt-8 border-t border-white/5">
            <a
              href={`mailto:${targetEmail}`}
              className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-black hover:border-[#CCFF00]/40 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#666666] uppercase">
                  DIRECT EMAIL
                </span>
                <span className="text-sm font-bold text-white font-mono" dir="ltr">
                  {targetEmail}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* نموذج التواصل */}
        <div className="bg-black border border-white/5 p-8 md:p-10 rounded-3xl relative">
          <form onSubmit={handleSmartSubmit} className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-mono text-[#888888] uppercase mb-2"
              >
                {isArabic ? "الاسم الكريم" : "Your Name"}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder={isArabic ? "إلياس..." : "Elias..."}
              />
            </div>
            <div>
              <label
                htmlFor="contact-info"
                className="block text-xs font-mono text-[#888888] uppercase mb-2"
              >
                {isArabic ? "بريدك الإلكتروني أو رقم جوالك" : "Your Email or Phone Number"}
              </label>
              <input
                id="contact-info"
                name="contact"
                type="text"
                inputMode="email"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className={inputClass}
                placeholder={
                  isArabic
                    ? "اكتب البريد أو رقم الجوال..."
                    : "e.g., name@mail.com or 05xxxxxxxx"
                }
              />
            </div>
            <div>
              <label
                htmlFor="contact-details"
                className="block text-xs font-mono text-[#888888] uppercase mb-2"
              >
                {isArabic ? "أخبرنا عن مشروعك" : "Tell us about your project"}
              </label>
              <textarea
                id="contact-details"
                name="details"
                rows={4}
                required
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder={isArabic ? "تفاصيل الخدمة المطلوبة..." : "Scope of work..."}
              />
            </div>

            {/* رسالة الخطأ داخل الصفحة بدل نافذة alert */}
            {error && (
              <p role="alert" className="text-sm text-red-400 font-medium">
                {error}
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#CCFF00] text-black font-bold text-sm py-4 rounded-xl hover:bg-white active:scale-[0.99] transition-all duration-300 cursor-pointer"
              >
                {isArabic ? "إرسال الطلب الآن" : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
