import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ArrowRight, ShieldCheck, PackageCheck } from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import PackagingCatalog from "@/components/products/PackagingCatalog";

export const metadata: Metadata = {
  title: "Ürünler & Ambalaj Kataloğu",
  description:
    "Cam şişe, metal teneke, PET, dökme tanker/Flexitank ve Private Label seçenekleriyle KARYAĞ, KADİVA ve KAROLİVA ürün kataloğu.",
};

export default function UrunlerPage() {
  return (
    <div className="bg-karyag-ivory min-h-screen">
      {/* 1. FLU EDİTORYAL BANNER */}
      <section className="relative overflow-hidden border-b border-karyag-gold/30 py-20 sm:py-28 px-4 sm:px-8 bg-[#F6F3EC]">
        <img
          src="/images/mockups/kadiva-seri.jpg"
          alt="KARYAĞ Ürün ve Ambalaj Kataloğu"
          className="absolute inset-0 w-full h-full object-cover blur-[4px] scale-110 opacity-45 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBFA]/96 via-[#FCFBFA]/84 to-[#F6F3EC]/50 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FCFBFA] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1380px] mx-auto">
          <div className="inline-flex items-center gap-2 text-xs text-karyag-steel-muted mb-6 bg-white/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-karyag-gold/25">
            <Link href="/" className="hover:text-karyag-gold-dark transition">
              Anasayfa
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-karyag-gold" />
            <span className="text-karyag-steel-dark font-semibold">
              Ürünler & Ambalaj
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>AMBALAJ BAZLI ÜRÜN KATALOĞU</span>
            </div>

            <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-karyag-steel-dark leading-[1.12]">
              Sofradan Sanayiye{" "}
              <span className="italic text-karyag-gold-dark font-medium block sm:inline">
                Her İhtiyaca Özel Sunum
              </span>
            </h1>

            <p className="text-base sm:text-lg text-karyag-steel/85 leading-relaxed max-w-2xl">
              Butik cam şişelerden yüksek hacimli endüstriyel tenekelere,
              ihracata hazır PET serilerden dökme tankerlere kadar tüm ürün
              seçeneklerimizi ambalaj tipine göre inceleyin.
            </p>
          </div>
        </div>
      </section>

      {/* 2. İNTERAKTİF AMBALAJ KATALOĞU */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto">
          <PackagingCatalog />
        </div>
      </section>

      {/* 3. ÖZEL MARKA (PRIVATE LABEL) YÖNLENDİRME BANDI */}
      <section className="pb-20 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-karyag-gold/35 shadow-2xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-green">
              <PackageCheck className="w-4 h-4 text-karyag-gold" />
              <span>ÖZEL MARKA & İHRACAT ÇÖZÜMLERİ</span>
            </div>
            <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-karyag-steel-dark">
              Kendi Markanızla Üretim Yapmak İster misiniz?
            </h2>
            <p className="text-sm text-karyag-steel-muted leading-relaxed">
              Hedef pazarınızın ambalaj, etiket ve analiz standartlarına uygun
              anahtar teslim Private Label üretim sürecimizi inceleyin.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/private-label"
              className="inline-flex items-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-semibold uppercase tracking-wider px-7 py-4 rounded-full transition group"
            >
              <span>Private Label & İhracat</span>
              <ArrowRight className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/b2b-lojistik"
              className="inline-flex items-center gap-2 bg-karyag-cream hover:bg-karyag-gold-light text-karyag-steel-dark text-xs font-semibold uppercase tracking-wider px-6 py-4 rounded-full border border-karyag-gold/40 transition"
            >
              <ShieldCheck className="w-4 h-4 text-karyag-gold-dark" />
              <span>Lojistik Standartları</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}