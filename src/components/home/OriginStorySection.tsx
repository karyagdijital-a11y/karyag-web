"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Sun,
  Droplets,
  Flame,
  Utensils,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

type UsageTab = "kadiva" | "karoliva";

const usageGuides: Record<
  UsageTab,
  {
    brand: string;
    subtitle: string;
    tempLabel: string;
    description: string;
    pairings: string[];
    image: string;
    href: string;
  }
> = {
  kadiva: {
    brand: "KADİVA • Natürel Sızma",
    subtitle: "Soğuk Sunumlar & Gurme Sofralar",
    tempLabel: "Soğuk Kullanım & Bitiriş Dokunuşu",
    description:
      "Kilis’in yüksek aromalı zeytinlerinden soğuk sıkımla elde edilen KADİVA, ısı görmeden tüketildiğinde tüm meyvemsi karakterini ve polifenol zenginliğini sofraya taşır.",
    pairings: [
      "Taze mevsim salataları ve zeytinyağlı mezeler",
      "Sıcak ekşi maya ekmekle kahvaltı sunumları",
      "Izgara balık, sebze ve çorbalarda servis öncesi son dokunuş",
      "Özel soslar, marinasyonlar ve Akdeniz tabakları",
    ],
    image: "/images/mockups/kadiva-sise.jpg",
    href: "/urunler",
  },
  karoliva: {
    brand: "KAROLİVA • Rafine & HoReCa",
    subtitle: "Yüksek Isı & Profesyonel Mutfaklar",
    tempLabel: "210°C+ Yüksek Isı Dayanımı",
    description:
      "Berrak yapısı ve nötr dengesi sayesinde yüksek sıcaklıklarda yanmadan, köpürmeden ve yemeğin kendi lezzetini bastırmadan kusursuz sonuç verir.",
    pairings: [
      "Derin kızartmalar, sote ve yüksek ateşli tava yemekleri",
      "Fırın yemekleri, hamur işleri ve pastane tarifleri",
      "Otel, restoran ve catering mutfaklarında toplu üretim",
      "Konserve, meze ve gıda sanayii imalat hatları",
    ],
    image: "/images/mockups/karoliva-horeca.jpg",
    href: "/urunler",
  },
};

const terroirStats = [
  {
    label: "COĞRAFİ KÖKEN",
    value: "Kilis Yağlık",
    desc: "Yüksek yağ verimi ve karakteristik aromasıyla Anadolu’nun en kıymetli yerel zeytin çeşidi.",
    icon: MapPin,
  },
  {
    label: "GÜNEŞ & İKLİM",
    value: "300+ Gün Güneş",
    desc: "Akdeniz ile Mezopotamya arasındaki mikroklima, meyvenin doğal polifenol dengesini besler.",
    icon: Sun,
  },
  {
    label: "HASAT HASSASİYETİ",
    value: "Aynı Gün Sıkım",
    desc: "Polateli’deki bahçelere komşu tesisimizde zeytin beklemeden, ilk tazeliğiyle işlenir.",
    icon: Droplets,
  },
];

export default function OriginStorySection() {
  const [activeTab, setActiveTab] = useState<UsageTab>("kadiva");
  const guide = usageGuides[activeTab];

  return (
    <section className="py-24 px-4 sm:px-8 bg-white border-t border-stone-200/70">
      <div className="max-w-[1380px] mx-auto space-y-20">
        {/* 1. KİLİS MENŞE EDİTORYAL BLOĞU (Gaea Referansı) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Sol: Görsel Kompozisyon */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/4.3] border border-karyag-gold/35 shadow-[0_24px_60px_-20px_rgba(30,35,38,0.18)]">
              <Image
                src="/images/story/stage-1-hasat.jpg"
                alt="Kilis Zeytin Bahçeleri ve Hasat"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-karyag-gold/35 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-karyag-gold-dark">
                    MENŞEİ • KİLİS / TÜRKİYE
                  </div>
                  <div className="font-serif font-semibold text-base text-karyag-steel-dark">
                    Asırlık Kilis Yağlık Zeytini
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-karyag-green-light text-karyag-green flex items-center justify-center shrink-0">
                  <OliveDropIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Sağ: Menşe Hikâyesi & 3 Özellik */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
                <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
                <span>TOPRAĞIN İMZASI • MENŞE HİKÂYEMİZ</span>
              </div>
              <h2 className="font-serif font-semibold text-3xl sm:text-5xl text-karyag-steel-dark leading-tight">
                Neden{" "}
                <span className="italic text-karyag-gold-dark font-medium">
                  Kilis Zeytini?
                </span>
              </h2>
              <p className="text-sm sm:text-base text-karyag-steel-muted leading-[1.85]">
                Kilis’in kireçli ve mineralce zengin toprakları, yazın kavurucu
                güneşini sonbaharın serin rüzgârlarıyla dengeler. Bu eşsiz
                coğrafyada yetişen <strong>Kilis Yağlık zeytini</strong>, küçük
                tanesinde sakladığı yüksek yağ oranı, dengeli yakıcılığı ve
                kalıcı meyvemsi kokusuyla dünyanın en özel zeytin çeşitleri
                arasında yer alır.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {terroirStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-karyag-ivory rounded-2xl p-5 border border-stone-200/80 hover:border-karyag-gold transition-colors space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-karyag-gold/30 text-karyag-green flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-karyag-gold-dark">
                      {stat.label}
                    </div>
                    <div className="font-serif font-semibold text-lg text-karyag-steel-dark">
                      {stat.value}
                    </div>
                    <p className="text-xs text-karyag-steel-muted leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. MUTFAK & KULLANIM REHBERİ (Monini Referansı) */}
        <div className="bg-karyag-ivory rounded-3xl p-7 sm:p-10 lg:p-12 border border-karyag-gold/30 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                <Utensils className="w-3.5 h-3.5 text-karyag-green" />
                <span>DOĞRU YAĞ, DOĞRU LEZZET</span>
              </div>
              <h3 className="font-serif font-semibold text-2xl sm:text-4xl text-karyag-steel-dark">
                Mutfakta Hangi Seriyi Seçmelisiniz?
              </h3>
            </div>

            {/* Sekme Seçici */}
            <div className="inline-flex bg-white p-1.5 rounded-full border border-karyag-gold/35 shadow-2xs w-fit">
              <button
                type="button"
                onClick={() => setActiveTab("kadiva")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "kadiva"
                    ? "bg-karyag-green text-white shadow-xs"
                    : "text-karyag-steel-muted hover:text-karyag-steel-dark"
                }`}
              >
                <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
                <span>KADİVA (Soğuk & Gurme)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("karoliva")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "karoliva"
                    ? "bg-karyag-steel-dark text-white shadow-xs"
                    : "text-karyag-steel-muted hover:text-karyag-steel-dark"
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-karyag-gold" />
                <span>KAROLİVA (Sıcak & HoReCa)</span>
              </button>
            </div>
          </div>

          {/* Aktif Kullanım Kartı */}
          <div
            key={activeTab}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 animate-fade-up"
          >
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-karyag-cream">
              <Image
                src={guide.image}
                alt={guide.brand}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-karyag-gold-dark bg-karyag-gold-light px-3.5 py-1.5 rounded-full">
                  {guide.tempLabel}
                </span>
              </div>

              <div>
                <h4 className="font-serif font-semibold text-2xl sm:text-3xl text-karyag-steel-dark">
                  {guide.brand}
                </h4>
                <p className="font-serif italic text-base text-karyag-gold-dark mt-1">
                  {guide.subtitle}
                </p>
              </div>

              <p className="text-sm text-karyag-steel-muted leading-relaxed">
                {guide.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {guide.pairings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-[13px] text-karyag-steel-dark bg-karyag-ivory p-3.5 rounded-xl border border-stone-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-karyag-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href={guide.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-steel-dark hover:text-karyag-green transition group"
                >
                  <span>Ambalaj ve Hacim Seçeneklerini Gör</span>
                  <ArrowRight className="w-4 h-4 text-karyag-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}