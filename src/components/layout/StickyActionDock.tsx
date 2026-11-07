"use client";

import Link from "next/link";
import { FileSpreadsheet, FlaskConical, PhoneCall } from "lucide-react";

export default function StickyActionDock() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 pr-0 pointer-events-none">
      {/* 1. Hızlı B2B Teklif Butonu */}
      <Link
        href="/iletisim"
        className="pointer-events-auto group flex items-center justify-end bg-karyag-green hover:bg-karyag-green-dark text-white py-3.5 px-3.5 rounded-l-xl shadow-2xl border-y border-l border-karyag-gold/50 transition-all duration-300"
      >
        <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 ease-out">
          B2B Toptan Teklif Al
        </span>
        <FileSpreadsheet className="w-5 h-5 text-karyag-gold shrink-0" />
      </Link>

      {/* 2. Laboratuvar / COA Analiz Talebi */}
      <Link
        href="/b2b-lojistik"
        className="pointer-events-auto group flex items-center justify-end bg-karyag-steel-dark hover:bg-karyag-steel text-white py-3.5 px-3.5 rounded-l-xl shadow-2xl border-y border-l border-white/15 transition-all duration-300"
      >
        <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-3 text-xs font-bold tracking-wider uppercase text-karyag-gold transition-all duration-300 ease-out">
          TDS & Analiz Spektleri
        </span>
        <FlaskConical className="w-5 h-5 text-karyag-gold shrink-0" />
      </Link>

      {/* 3. Doğrudan Satış Masası / Telefon */}
      <a
        href="tel:+903480000000"
        className="pointer-events-auto group flex items-center justify-end bg-karyag-steel-dark hover:bg-karyag-steel text-white py-3.5 px-3.5 rounded-l-xl shadow-2xl border-y border-l border-white/15 transition-all duration-300"
      >
        <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-3 text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 ease-out">
          Toptan Satış Masası
        </span>
        <PhoneCall className="w-5 h-5 text-white shrink-0" />
      </a>
    </div>
  );
}