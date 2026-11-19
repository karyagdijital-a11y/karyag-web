"use client";

import { useEffect, useState } from "react";
import { PhoneCall, ArrowUp } from "lucide-react";

const PHONE_DISPLAY = "+90 348 000 00 00";
const PHONE_HREF = "tel:+903480000000";
const WHATSAPP_HREF =
  "https://wa.me/903480000000?text=Merhaba%2C%20KARYA%C4%9E%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export default function StickyActionDock() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;

      setScrollPercent(progress);
      setShowScrollTop(scrollTop > 260);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dairesel SVG ilerleme halkası hesaplaması
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* 1. ÜST İNCE ALTIN SCROLL İLERLEME ÇUBUĞU */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-karyag-gold via-karyag-gold-dark to-karyag-green transition-[width] duration-150 ease-out"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* 2. SAĞ ALT ÜST ÜSTE YÜZEN AKSİYON BUTONLARI */}
      <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp */}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile İletişime Geç"
          className="group flex items-center bg-white/95 backdrop-blur-md hover:bg-[#1F6E43] text-karyag-steel-dark hover:text-white h-12 rounded-full pl-3.5 pr-3.5 shadow-[0_12px_30px_-8px_rgba(30,35,38,0.22)] border border-karyag-gold/45 hover:border-[#1F6E43] transition-all duration-300"
        >
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[140px] group-hover:opacity-100 group-hover:pr-2.5 text-[11px] font-bold tracking-wider uppercase transition-all duration-300">
            WhatsApp
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-[#1F6E43] group-hover:text-white transition-colors shrink-0"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.34.14 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.29-1.65a11.87 11.87 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.47-4.45 9.88-9.91 9.88Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>

        {/* Hemen Ara */}
        <a
          href={PHONE_HREF}
          aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
          className="group flex items-center bg-white/95 backdrop-blur-md hover:bg-karyag-gold text-karyag-steel-dark hover:text-white h-12 rounded-full pl-3.5 pr-3.5 shadow-[0_12px_30px_-8px_rgba(30,35,38,0.22)] border border-karyag-gold/45 hover:border-karyag-gold transition-all duration-300"
        >
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[140px] group-hover:opacity-100 group-hover:pr-2.5 text-[11px] font-bold tracking-wider uppercase transition-all duration-300">
            Hemen Ara
          </span>
          <PhoneCall className="w-[18px] h-[18px] text-karyag-gold-dark group-hover:text-white transition-colors shrink-0" />
        </a>

        {/* Scroll-to-Top (Dairesel Altın İlerleme Halkalı) */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Yukarı Çık"
          className={`relative w-12 h-12 rounded-full bg-white/95 backdrop-blur-md hover:bg-karyag-steel-dark text-karyag-steel-dark hover:text-white shadow-[0_14px_32px_-8px_rgba(30,35,38,0.25)] flex items-center justify-center transition-all duration-300 cursor-pointer group ${
            showScrollTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* SVG İlerleme Çemberi */}
          <svg
            className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="rgba(200, 162, 74, 0.25)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#C8A24A"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>
          <ArrowUp className="w-4 h-4 text-karyag-gold-dark group-hover:text-karyag-gold-light group-hover:-translate-y-0.5 transition-all relative z-10" />
        </button>
      </div>
    </>
  );
}