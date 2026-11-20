import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  ArrowRight,
  Factory,
  FlaskConical,
  Package,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Layers,
} from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import ExportMapSection from "@/components/export/ExportMapSection";

export const metadata: Metadata = {
  title: "Private Label & İhracat",
  description:
    "Kendi markanızla zeytinyağı üretimi (Private Label), yüksek kapasiteli dolum altyapısı ve dört kıtaya ihracat çözümleri.",
};

const capacityCards = [
  {
    value: "4 Entegre Hat",
    label: "Sıkım • Rafinasyon • Pirina • Enerji",
    desc: "Ham maddeden nihai ambalaja kadar kesintisiz tek çatı kontrolü.",
    icon: Factory,
  },
  {
    value: "%100 Sıfır Atık",
    label: "Sürdürülebilir Üretim",
    desc: "Avrupa ve küresel zincirlerin çevre kriterlerine tam uyumlu altyapı.",
    icon: ShieldCheck,
  },
  {
    value: "COA & IOOC",
    label: "Laboratuvar Güvencesi",
    desc: "Her partide akredite analiz raporu, şahit numune ve tam izlenebilirlik.",
    icon: FlaskConical,
  },
  {
    value: "Çoklu Ambalaj",
    label: "Cam • Teneke • PET • Dökme",
    desc: "250 ml butik şişeden 24 tonluk Flexitank’a kadar esnek dolum.",
    icon: Package,
  },
];

const plSteps = [
  {
    step: "01",
    title: "Ürün & Reçete Belirleme",
    desc: "Hedef pazarınızın damak tadına ve fiyat segmentine uygun natürel sızma, riviera, rafine veya pirina yağı profili birlikte seçilir.",
  },
  {
    step: "02",
    title: "Ambalaj & Etiket Uyarlaması",
    desc: "Cam, teneke veya PET form seçilir; hedef ülkenin diline, barkod ve gıda mevzuatına uygun etiket tasarımı hazırlanır.",
  },
  {
    step: "03",
    title: "Kontrollü Dolum & Analiz",
    desc: "ISO 9001, ISO 22000 ve HACCP standartlarındaki hatlarımızda azot korumalı dolum yapılır, COA analiz sertifikası düzenlenir.",
  },
  {
    step: "04",
    title: "Gümrük & Küresel Sevkiyat",
    desc: "Paletleme, yükleme kontrolü, menşe ve sağlık sertifikaları tamamlanarak Mersin/İskenderun limanlarından sevk edilir.",
  },
];

export default function PrivateLabelPage() {
  return (
    <div className="bg-karyag-ivory min-h-screen">
      {/* 1. FLU EDİTORYAL BANNER */}
      <section className="relative overflow-hidden border-b border-karyag-gold/30 py-20 sm:py-28 px-4 sm:px-8 bg-[#F6F3EC]">
        <img
          src="/images/mockups/marka-ailesi.jpg"
          alt="KARYAĞ Private Label ve Küresel İhracat"
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
              Private Label & İhracat
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>ÖZEL MARKA ÜRETİMİ & KÜRESEL TEDARİK</span>
            </div>

            <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-karyag-steel-dark leading-[1.12]">
              Kendi Markanız,{" "}
              <span className="italic text-karyag-gold-dark font-medium block sm:inline">
                KARYAĞ Üretim Güvencesi
              </span>
            </h1>

            <p className="text-base sm:text-lg text-karyag-steel/85 leading-relaxed max-w-2xl">
              Ulusal ve uluslararası zincir marketler, distribütörler ve gıda
              markaları için reçete geliştirmeden ambalajlamaya ve ihracat
              belgelerine kadar anahtar teslim Private Label üretim ortağıyız.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ÜRETİM KAPASİTESİ & ÖLÇEK GÜVENİ */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capacityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.value}
                className="bg-white rounded-3xl p-7 border border-stone-200/80 hover:border-karyag-gold shadow-2xs transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-karyag-gold-light text-karyag-gold-dark flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif font-semibold text-2xl text-karyag-steel-dark">
                    {card.value}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-karyag-green mt-1">
                    {card.label}
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-karyag-steel-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 4 ADIMDA PRIVATE LABEL SÜRECİ */}
      <section className="pb-20 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-stone-200/80 shadow-2xs space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
              <Layers className="w-4 h-4 text-karyag-green" />
              <span>ANAHTAR TESLİM SÜREÇ</span>
            </div>
            <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-karyag-steel-dark">
              Dört Adımda Kendi Zeytinyağı Markanızı Hayata Geçirin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-karyag-ivory p-6 sm:p-7 border border-karyag-gold/25 hover:border-karyag-gold transition-colors space-y-3"
              >
                <span className="inline-block font-serif font-bold text-2xl text-karyag-gold">
                  {item.step}
                </span>
                <h3 className="font-serif font-semibold text-xl text-karyag-steel-dark">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-karyag-steel-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* İhracat Dokümantasyon Güvencesi */}
          <div className="rounded-2xl bg-karyag-cream/75 p-6 sm:p-8 border border-karyag-gold/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-green">
                <FileCheck2 className="w-4 h-4 text-karyag-gold-dark" />
                <span>EKSİKSİZ İHRACAT EVRAKLARI</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm text-karyag-steel-dark">
                {[
                  "EUR.1 / Menşe Şahadetnamesi",
                  "Sağlık & Analiz Sertifikası (COA)",
                  "Helal & ISO Uygunluk Belgeleri",
                ].map((doc) => (
                  <span key={doc} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-karyag-green" />
                    <span>{doc}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/iletisim?konu=Private+Label+ve+Ihracat"
              className="inline-flex items-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-semibold uppercase tracking-wider px-7 py-4 rounded-full transition shrink-0 group"
            >
              <span>Private Label Teklifi Al</span>
              <ArrowRight className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. İNTERAKTİF İHRACAT HARİTASI */}
      <ExportMapSection />
    </div>
  );
}