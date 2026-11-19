"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

type HeroSlide = {
  id: number;
  type: "video" | "seamless";
  eyebrow: string;
  titleTop: string;
  titleGold: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryText: string;
  secondaryHref: string;
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const slides: HeroSlide[] = [
  {
    id: 1,
    type: "video",
    eyebrow: "KİLİS’İN KADİM ZEYTİN MİRASI",
    titleTop: "Toprağın Bereketinden",
    titleGold: "Sofralara Süzülen Altın.",
    description:
      "Güneşin ve rüzgârın sabırla büyüttüğü asırlık zeytin ağaçlarının hikâyesini, doğanın özüne dokunmadan ve emeğe duyduğumuz derin saygıyla bugüne taşıyoruz.",
    ctaText: "Hikâyemizi Keşfedin",
    ctaHref: "/kurumsal/hakkimizda",
    secondaryText: "Markalarımız",
    secondaryHref: "/marka-mimarimiz",
    videoSrc: "/videos/hero-kadiva.mp4",
    posterSrc: "/images/story/stage-2-sikim.jpg",
  },
  {
    id: 2,
    type: "seamless",
    eyebrow: "KADİVA • NATÜREL SIZMA SERİSİ",
    titleTop: "Dalındaki Saflıktan",
    titleGold: "Her Damlanın Zarafetine.",
    description:
      "Hasat sabahının serinliğinde özenle toplanan Kilis zeytinlerinden, doğallığını ve meyvemsi aromasını koruyarak elde edilen seçkin natürel sızma koleksiyonumuz.",
    ctaText: "KADİVA’yı Keşfedin",
    ctaHref: "/marka-mimarimiz#kadiva",
    secondaryText: "Üretim Yolculuğumuz",
    secondaryHref: "/faaliyet-alanlarimiz",
    imageSrc: "/images/mockups/kadiva-sise.jpg",
    imageAlt: "KADİVA Natürel Sızma Zeytinyağı Şişeleri",
  },
  {
    id: 3,
    type: "seamless",
    eyebrow: "KAROLİVA • PROFESYONEL & HORECA",
    titleTop: "Yüksek Isıda İstikrar,",
    titleGold: "Mutfaklarda Değişmeyen Ustalık.",
    description:
      "Seçkin restoranlar, oteller ve gıda üreticileri için yüksek ısı dayanımı, berrak yapısı ve her tarifte aynı dengeli performansıyla güvenilir çözüm ortağınız.",
    ctaText: "KAROLİVA’yı Keşfedin",
    ctaHref: "/marka-mimarimiz#karoliva",
    secondaryText: "B2B Lojistik",
    secondaryHref: "/b2b-lojistik",
    imageSrc: "/images/mockups/karoliva-horeca.jpg",
    imageAlt: "KAROLİVA Yüksek Isıya Dayanıklı HoReCa Teneke",
  },
  {
    id: 4,
    type: "seamless",
    eyebrow: "SIFIR ATIK • SONSUZ DÖNGÜ",
    titleTop: "Doğadan Aldığımızı",
    titleGold: "Doğaya Değerle Geri Veriyoruz.",
    description:
      "Bizim dünyamızda hiçbir zerre ziyan olmaz. KARYAĞ çatı güvencesi altında zeytinin her parçası sıfır atık felsefesiyle yeniden toprağa ve temiz enerjiye hayat verir.",
    ctaText: "Çevre & Sürdürülebilirlik",
    ctaHref: "/kurumsal/cevre-ve-surdurulebilirlik",
    secondaryText: "İletişime Geçin",
    secondaryHref: "/iletisim",
    imageSrc: "/images/mockups/marka-ailesi.jpg",
    imageAlt: "KARYAĞ Marka Ailesi: KAROLİVA ve KADİVA",
  },
];

export default function HeroVideoSlider() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, [active, next]);

  const current = slides[active];
  const isVideoSlide = current.type === "video";

  return (
    <section
      className={`relative min-h-[650px] lg:h-[84vh] lg:max-h-[840px] w-full overflow-hidden flex items-center transition-colors duration-700 ${
        isVideoSlide ? "bg-[#181715]" : "bg-[#F3EFE7]"
      }`}
    >
      {/* 1. VİDEO SLAYT ARKA PLANI (Sadece 1. Slayt) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isVideoSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={slides[0].posterSrc}
          className="w-full h-full object-cover object-center"
        >
          <source src={slides[0].videoSrc} type="video/mp4" />
        </video>
        {/* Sol yazı alanı için sinematik kontrast, sağ taraf tamamen canlı kalır */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/80 via-[#171512]/38 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171512]/65 to-transparent" />
      </div>

      {/* 2. SEAMLESS SLAYTLAR İÇİN YUMUŞAK SICAK IŞIK AMBİYANSI */}
      {!isVideoSlide && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F4] via-[#F3EFE7] to-[#EAE3D5] z-0 pointer-events-none" />
          <div className="absolute left-[42%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-karyag-gold/10 blur-[130px] z-0 pointer-events-none" />
        </>
      )}

      {/* 3. ANA İÇERİK SAHNESİ */}
      <div className="relative z-10 max-w-[1380px] mx-auto w-full px-4 sm:px-8 pt-12 pb-28 lg:py-0 lg:pb-12">
        <div
          key={current.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center animate-fade-up"
        >
          {/* Sol: Temiz Hikâye Metni */}
          <div
            className={`${
              isVideoSlide ? "lg:col-span-7" : "lg:col-span-5"
            } space-y-6`}
          >
            <div
              className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase border ${
                isVideoSlide
                  ? "bg-white/10 backdrop-blur-md border-karyag-gold/50 text-karyag-gold-light"
                  : "bg-white/80 border-karyag-gold/40 text-karyag-gold-dark shadow-2xs"
              }`}
            >
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>{current.eyebrow}</span>
            </div>

            <h1
              className={`font-serif font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] ${
                isVideoSlide ? "text-white" : "text-karyag-steel-dark"
              }`}
            >
              {current.titleTop}
              <span
                className={`block italic font-medium mt-1 ${
                  isVideoSlide ? "text-karyag-gold" : "text-karyag-gold-dark"
                }`}
              >
                {current.titleGold}
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-xl font-normal ${
                isVideoSlide ? "text-stone-200/95" : "text-karyag-steel/80"
              }`}
            >
              {current.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={current.ctaHref}
                className={`inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-full shadow-md transition-all duration-300 group ${
                  isVideoSlide
                    ? "bg-karyag-gold hover:bg-karyag-gold-dark text-white"
                    : "bg-karyag-green hover:bg-karyag-green-dark text-white"
                }`}
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={current.secondaryHref}
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-full border transition-all duration-300 ${
                  isVideoSlide
                    ? "bg-white/10 hover:bg-white text-white hover:text-karyag-steel-dark backdrop-blur-md border-white/30"
                    : "bg-white/75 hover:bg-white text-karyag-steel-dark border-karyag-gold/45"
                }`}
              >
                <span>{current.secondaryText}</span>
              </Link>
            </div>
          </div>

          {/* Sağ: Çerçevesiz, Kesilmesiz, Zemine Eriyen Ürün Sahnesi (2-3-4. Slaytlar) */}
          {!isVideoSlide && current.imageSrc && (
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[540px] overflow-hidden">
                <Image
                  src={current.imageSrc}
                  alt={current.imageAlt ?? current.eyebrow}
                  fill
                  priority
                  unoptimized
                  className="object-contain object-center"
                />

                {/* Kenarları Zemine Eriten Yumuşak Geçiş Perdeleri (Sıfır Çerçeve) */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#F3EFE7] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#EFE9DE] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#F5F1EA] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#F2EDE4] to-transparent pointer-events-none" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. ALT SLAYT KONTROLLERİ & İLERLEME ÇUBUKLARI */}
      <div className="absolute bottom-14 inset-x-0 z-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex items-end justify-between gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(idx)}
                className="group flex flex-col items-start gap-2 cursor-pointer"
              >
                <span
                  className={`text-[11px] font-bold tracking-widest transition-colors ${
                    idx === active
                      ? "text-karyag-gold-dark"
                      : isVideoSlide
                      ? "text-white/55 group-hover:text-white"
                      : "text-karyag-steel/45 group-hover:text-karyag-steel-dark"
                  }`}
                >
                  0{idx + 1}
                </span>
                <div
                  className={`w-14 sm:w-20 h-[2px] overflow-hidden rounded-full ${
                    isVideoSlide ? "bg-white/25" : "bg-karyag-steel/15"
                  }`}
                >
                  {idx === active && (
                    <div
                      key={`progress-${active}`}
                      className="h-full w-full bg-karyag-gold animate-slider-progress"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Önceki slayt"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isVideoSlide
                  ? "bg-white/10 hover:bg-karyag-gold backdrop-blur-md border-white/25 hover:border-karyag-gold text-white"
                  : "bg-white/85 hover:bg-karyag-green border-karyag-gold/40 hover:border-karyag-green text-karyag-steel-dark hover:text-white shadow-2xs"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Sonraki slayt"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isVideoSlide
                  ? "bg-white/10 hover:bg-karyag-gold backdrop-blur-md border-white/25 hover:border-karyag-gold text-white"
                  : "bg-white/85 hover:bg-karyag-green border-karyag-gold/40 hover:border-karyag-green text-karyag-steel-dark hover:text-white shadow-2xs"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}