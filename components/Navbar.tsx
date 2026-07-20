"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  isArabic: boolean;
  setIsArabic: (value: boolean) => void;
}

export default function Navbar({ isArabic, setIsArabic }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // تنفيذ السكرول عند القدوم من صفحة فرعية برابط يحمل هاش
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const timer = setTimeout(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const navLinks = [
    { id: "work-section", ar: "أعمالنا", en: "Work" },
    { id: "services-section", ar: "خدماتنا", en: "Services" },
    { id: "testimonials-section", ar: "آراء العملاء", en: "Reviews" },
  ];

  return (
    <nav
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#0A0A0A]/95 border-b border-white/10 backdrop-blur-md shadow-lg"
          : "bg-[#0A0A0A]/80 border-b border-white/5 backdrop-blur-md"
      }`}
    >
      <div
        className={`px-6 md:px-16 flex justify-between items-center transition-all duration-500 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-2.5 select-none group">
          <Image
            src="/LOGO.svg"
            alt="2Bro Studio Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:rotate-12"
            priority
          />
          <span className="text-lg sm:text-xl font-bold tracking-wider text-white whitespace-nowrap">
            2Bro <span className="text-[#CCFF00]">Studio</span>
          </span>
        </Link>

        {/* روابط الأقسام — شاشات متوسطة فما فوق */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-neutral-400 hover:text-[#CCFF00] transition-colors duration-300 tracking-wide cursor-pointer"
            >
              {isArabic ? link.ar : link.en}
            </button>
          ))}
        </div>

        {/* الأزرار */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => scrollToSection("contact-section")}
            className="bg-[#CCFF00] text-black text-xs sm:text-sm font-semibold tracking-wide px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-white active:bg-white active:scale-95 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <span className="hidden sm:inline">
              {isArabic ? "تواصل معنا الآن" : "Contact Us Now"}
            </span>
            <span className="sm:hidden">{isArabic ? "تواصل" : "Contact"}</span>
          </button>

          <button
            onClick={() => setIsArabic(!isArabic)}
            aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
            className="text-xs tracking-widest font-mono border border-white/20 px-4 py-1.5 rounded-full hover:border-[#CCFF00] hover:text-[#CCFF00] active:border-[#CCFF00] active:text-[#CCFF00] transition-all duration-300 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]/50 cursor-pointer"
          >
            {isArabic ? "EN" : "AR"}
          </button>

          {/* زر القائمة — موبايل فقط */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-full border border-white/20 hover:border-[#CCFF00] transition-colors cursor-pointer"
          >
            <span
              className={`block w-4 h-[1.5px] bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t ${
          menuOpen
            ? "max-h-60 border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1 bg-[#0A0A0A]/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-start text-sm text-neutral-300 hover:text-[#CCFF00] py-2.5 transition-colors duration-300 cursor-pointer"
            >
              {isArabic ? link.ar : link.en}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
