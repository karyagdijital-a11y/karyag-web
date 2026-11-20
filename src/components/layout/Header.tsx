"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  ArrowUpRight,
  ChevronDown,
  BookOpen,
  Compass,
  Clock,
  Award,
  Factory,
  FileCheck2,
  Leaf,
} from "lucide-react";

const corporateItems = [
  {
    title: "Hakkımızda",
    desc: "Topraktan doğan asırlık hikayemiz",
    href: "/kurumsal/hakkimizda",
    icon: BookOpen,
  },
  {
    title: "Misyon & Vizyon",
    desc: "Değerlerimiz ve gelecek yolculuğumuz",
    href: "/kurumsal/misyon-vizyon",
    icon: Compass,
  },
  {
    title: "Tarihçe",
    desc: "Kilis'ten bugüne uzanan köklerimiz",
    href: "/kurumsal/tarihce",
    icon: Clock,
  },
  {
    title: "Kalite Politikamız",
    desc: "Saflığı ve özeni koruyan standartlarımız",
    href: "/kurumsal/kalite-politikamiz",
    icon: Award,
  },
  {
    title: "Tesisimiz",
    desc: "Doğayla uyumlu modern üretim yuvamız",
    href: "/kurumsal/tesisimiz",
    icon: Factory,
  },
  {
    title: "Belgelerimiz",
    desc: "Ulusal ve uluslararası güven sertifikalarımız",
    href: "/kurumsal/belgelerimiz",
    icon: FileCheck2,
  },
  {
    title: "Çevre & Sürdürülebilirlik",
    desc: "Sıfır atık ve doğaya saygı felsefemiz",
    href: "/kurumsal/cevre-ve-surdurulebilirlik",
    icon: Leaf,
  },
];

const mainLinks = [
  { name: "Ürünler & Ambalaj", href: "/urunler" },
  { name: "Markalarımız", href: "/marka-mimarimiz" },
  { name: "Private Label & İhracat", href: "/private-label" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [corporateOpen, setCorporateOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCorporateOpen, setMobileCorporateOpen] = useState(true);
  const pathname = usePathname();

  const isCorporateActive = pathname.startsWith("/kurumsal");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Üst Zarif İnce Bilgi Şeridi (Beyaz-Fildişi & Altın) */}
      <div className="bg-karyag-cream/90 border-b border-karyag-gold/20 text-[11px] py-2 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto flex justify-between items-center gap-4 text-karyag-steel-muted">
          <div className="flex items-center gap-2.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-karyag-green shrink-0" />
            <span className="truncate">
              <strong className="text-karyag-steel font-semibold">
                KARYAĞ Gıda San. ve Tic. A.Ş.
              </strong>{" "}
              • Polateli / Kilis
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 shrink-0">
            <Link
              href="/kurumsal/cevre-ve-surdurulebilirlik"
              className="hover:text-karyag-green transition-colors font-medium"
            >
              %100 Sıfır Atık Felsefesi
            </Link>
            <span className="text-karyag-gold/50">|</span>
            <div className="flex items-center gap-1.5 font-semibold text-[11px]">
              <Globe className="w-3.5 h-3.5 text-karyag-gold" />
              <button className="text-karyag-steel hover:text-karyag-gold cursor-pointer">
                TR
              </button>
              <span className="text-stone-300">/</span>
              <button className="text-stone-400 hover:text-karyag-steel cursor-pointer">
                EN
              </button>
              <span className="text-stone-300">/</span>
              <button className="text-stone-400 hover:text-karyag-steel cursor-pointer">
                AR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Navigasyon */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 h-24 flex items-center justify-between gap-6">
        {/* Yatay Kurumsal Logo */}
        <Link href="/" className="flex items-center shrink-0 py-2">
          <Image
            src="/images/logo/k-siyah.png"
            alt="KARYAĞ Gıda Tarım Sanayi"
            width={1500}
            height={433}
            priority
            unoptimized
            className="h-[58px] sm:h-[66px] xl:h-[72px] w-auto object-contain"
          />
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden lg:flex items-center h-full gap-1 xl:gap-2">
          <Link
            href="/"
            className={`relative h-full inline-flex items-center px-3.5 text-[13.5px] font-semibold transition-colors ${
              pathname === "/"
                ? "text-karyag-steel-dark"
                : "text-karyag-steel-muted hover:text-karyag-steel-dark"
            }`}
          >
            <span>Anasayfa</span>
            <span
              className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-karyag-gold transition-all duration-300 ${
                pathname === "/" ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* KURUMSAL — Sade, Animasyonlu ve İkonlu Alt Menü */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setCorporateOpen(true)}
            onMouseLeave={() => setCorporateOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCorporateOpen((prev) => !prev)}
              className={`relative h-full inline-flex items-center gap-1.5 px-3.5 text-[13.5px] font-semibold transition-colors cursor-pointer ${
                isCorporateActive || corporateOpen
                  ? "text-karyag-steel-dark"
                  : "text-karyag-steel-muted hover:text-karyag-steel-dark"
              }`}
            >
              <span>Kurumsal</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-karyag-gold transition-transform duration-300 ${
                  corporateOpen ? "rotate-180" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-karyag-gold transition-all duration-300 ${
                  isCorporateActive || corporateOpen
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </button>

            {/* Açılır Liste */}
            <div
              className={`absolute left-0 top-full pt-2 w-[340px] transition-all duration-300 ease-out origin-top ${
                corporateOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-98 pointer-events-none"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-[0_24px_60px_-15px_rgba(30,35,38,0.16)] border border-karyag-gold/30 p-2.5 overflow-hidden">
                <div className="px-3 pt-2 pb-2.5 mb-1 border-b border-stone-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-karyag-gold-dark">
                    Kurumsal Yapımız
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-karyag-green" />
                </div>

                <ul className="space-y-0.5">
                  {corporateItems.map((item, index) => {
                    const Icon = item.icon;
                    const activeSub = pathname === item.href;
                    return (
                      <li
                        key={item.href}
                        style={{ transitionDelay: `${index * 20}ms` }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setCorporateOpen(false)}
                          className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                            activeSub
                              ? "bg-karyag-gold-light/80"
                              : "hover:bg-karyag-ivory"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                              activeSub
                                ? "bg-karyag-gold text-white"
                                : "bg-karyag-cream text-karyag-gold-dark group-hover:bg-karyag-green group-hover:text-white group-hover:scale-105"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-karyag-steel-dark group-hover:text-karyag-green transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-karyag-steel-muted truncate">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Diğer Ana Linkler */}
          {mainLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative h-full inline-flex items-center px-3.5 text-[13.5px] font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-karyag-steel-dark"
                    : "text-karyag-steel-muted hover:text-karyag-steel-dark"
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-karyag-gold transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Sağ Aksiyon Butonu (Beyaz-Altın Çerçeveli, Hover'da Zeytin Dokunuşlu) */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white hover:bg-karyag-green text-karyag-steel-dark hover:text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full border border-karyag-gold hover:border-karyag-green shadow-2xs transition-all duration-300 group"
          >
            <span>Bizimle İletişime Geçin</span>
            <ArrowUpRight className="w-4 h-4 text-karyag-gold group-hover:text-karyag-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2.5 text-karyag-steel rounded-xl border border-karyag-gold/40 hover:bg-karyag-cream"
          aria-label="Menü"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobil Menü */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 pt-4 pb-8 space-y-2 shadow-xl max-h-[82vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl font-semibold text-sm text-karyag-steel-dark hover:bg-karyag-cream"
          >
            Anasayfa
          </Link>

          <div className="rounded-xl border border-karyag-gold/25 overflow-hidden bg-karyag-ivory">
            <button
              type="button"
              onClick={() => setMobileCorporateOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 font-semibold text-sm text-karyag-steel-dark"
            >
              <span>Kurumsal</span>
              <ChevronDown
                className={`w-4 h-4 text-karyag-gold transition-transform duration-300 ${
                  mobileCorporateOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileCorporateOpen && (
              <div className="px-2 pb-2 space-y-1 border-t border-karyag-gold/15 pt-2">
                {corporateItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white border border-stone-100 text-xs font-semibold text-karyag-steel"
                    >
                      <Icon className="w-4 h-4 text-karyag-gold shrink-0" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl font-semibold text-sm text-karyag-steel-dark hover:bg-karyag-cream"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}