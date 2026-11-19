"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

type HeroSlide = {
  id: number;
  type: "video" | "image";
  eyebrow: string;
  titleTop: string;
  titleGold: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryText: string;
  secondaryHref: string;
  videoSrc?: string;
  imageSrc: string;
};

const slides: HeroSlide[] = [
  {
    id: 1,
    type: "video",
    eyebrow: "KİLİS’İN KADİM ZEYTİN MİRASI",
    titleTop: "Toprağın Bereketinden",
    titleGold: "Asırlık Altın Mirasa.",
    description:
      "Güneşin ve rüzgârın sabırla büyüttüğü asırlık zeytin ağaçlarının hikâyesini, doğanın özüne dokunmadan ve emeğe duyduğumuz derin saygıyla bugüne taşıyoruz.",
    ctaText: "Hikâyemizi Keşfedin",
    ctaHref: "/kurumsal/hakkimizda",
    secondaryText: "Markalarımız",
    secondaryHref: "/marka-mimarimiz",
    videoSrc:
      "https://videos.pexels.com/video-files/4109358/4109358-uhd_2560_1440_25fps.mp4",
    imageSrc: "/images/mockups/marka-ailesi.jpg",
  },
  {
    id: 2,
    type: "image",
    eyebrow: "KADİVA • NATÜREL SIZMA SERİSİ",
    titleTop: "Dalındaki Saflıktan",
    titleGold: "Sofralara Süzülen Zarafet.",
    description:
      "Hasat sabahının serinliğinde özenle toplanan Kilis zeytinlerinden, doğallığını ve meyvemsi aromasını koruyarak elde edilen seçkin natürel sızma koleksiyonumuz.",
    ctaText: "KADİVA’yı Keşfedin",
    ctaHref: "/marka-mimarimiz#kadiva",
    secondaryText: "Üretim Yolculuğumuz",
    secondaryHref: "/faaliyet-alanlarimiz",
    imageSrc: "/images/mockups/kadiva-sise.jpg",
  },
  {
    id: 3,
    type: "image",
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
  },
  {
    id: 4,
    type: "image",
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
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [active, next]);

  const current = slides[active];

  return (
    <section className="relative h-[82vh] min-h-[600px] max-h-[820px] w-full overflow-hidden bg-[#1D201E]">
      {/* Arka Plan Katmanları (1. Slayt Video, 2-3-4. Slaytlar Tam Ekran Flu Arka Plan) */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === active ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        >
          {slide.type === "video" && slide.videoSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={slide.imageSrc}
              className="w-full h-full object-cover animate-slow-zoom"
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.imageSrc}
              alt={slide.eyebrow}
              className="w-full h-full object-cover blur-[3px] scale-105 animate-slow-zoom"
            />
          )}
        </div>
      ))}

      {/* Sıcak Sinematik Kontrast Perdesi */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#1A1A18]/82 via-[#1A1A18]/48 to-[#1A1A18]/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 z-[1] bg-gradient-to-t from-[#1A1A18]/70 to-transparent" />

      {/* Ana İçerik */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 h-full flex flex-col justify-center pb-14">
        <div key={current.id} className="max-w-2xl space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-karyag-gold/50 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-karyag-gold-light uppercase">
            <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
            <span>{current.eyebrow}</span>
          </div>

          <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[62px] leading-[1.12] text-white">
            {current.titleTop}
            <span className="block text-karyag-gold italic font-medium mt-1">
              {current.titleGold}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl font-normal">
            {current.description}
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href={current.ctaHref}
              className="inline-flex items-center gap-3 bg-karyag-gold hover:bg-karyag-gold-dark text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-full shadow-lg transition-all duration-300 group"
            >
              <span>{current.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={current.secondaryHref}
              className="inline-flex items-center gap-2 bg-white/12 hover:bg-white text-white hover:text-karyag-steel-dark backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-full transition-all duration-300"
            >
              <span>{current.secondaryText}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Slayt Kontrolleri & İlerleme Çubukları */}
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
                      ? "text-karyag-gold"
                      : "text-white/55 group-hover:text-white"
                  }`}
                >
                  0{idx + 1}
                </span>
                <div className="w-14 sm:w-20 h-[2px] bg-white/25 overflow-hidden rounded-full">
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
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-karyag-gold backdrop-blur-md border border-white/25 hover:border-karyag-gold text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Sonraki slayt"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-karyag-gold backdrop-blur-md border border-white/25 hover:border-karyag-gold text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}