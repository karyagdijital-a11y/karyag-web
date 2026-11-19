import Link from "next/link";
import type { Metadata } from "next";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import {
  Truck,
  Container,
  PackageCheck,
  FileCheck2,
  ShieldCheck,
  MapPin,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Lojistik & Tedarik",
  description:
    "Polateli / Kilis üretim üssümüzden yurt içi ve dünya pazarlarına paslanmaz çelik tanker, Flexitank ve IBC çözümleriyle güvenli sevkiyat.",
};

const logisticsModes = [
  {
    code: "YURT İÇİ KARAYOLU",
    title: "Paslanmaz Çelik Gıda Tankerleri",
    capacity: "20 – 26 Ton / Sevkiyat",
    icon: Truck,
    desc: "Gıda sınıfı AISI 304/316 paslanmaz çelikten üretilmiş, ısı dengesini koruyan ve her dolumda hijyen mührüyle kapatılan tankerlerimizle fabrikaların kapısına doğrudan teslimat sağlıyoruz.",
    points: [
      "Dolum öncesi ve sonrası mühürlü güvenlik zinciri",
      "Ürünün doğallığını koruyan ısı yalıtımlı tank yapısı",
      "Türkiye genelinde zamanında ve planlı sevkiyat",
    ],
  },
  {
    code: "KÜRESEL DENİZYOLU İHRACATI",
    title: "Flexitank Konteyner Çözümleri",
    capacity: "21 – 24 Ton / 20' FCL",
    icon: Container,
    desc: "Mersin ve İskenderun limanlarına olan stratejik yakınlığımız sayesinde, tek kullanımlık gıda onaylı Flexitank sistemleriyle uluslararası pazarlara güvenli ve ekonomik deniz sevkiyatı gerçekleştiriyoruz.",
    points: [
      "Hava temasını kesen tek kullanımlık steril sistem",
      "Mersin ve İskenderun limanlarından hızlı yükleme",
      "Uluslararası ihracat ve gümrük standartlarına tam uyum",
    ],
  },
  {
    code: "MODÜLER & ESNEK TEDARİK",
    title: "IBC Tank & Epoksi Çelik Variller",
    capacity: "1.000 L IBC • 200 Kg Varil",
    icon: PackageCheck,
    desc: "Orta ölçekli gıda üreticileri, otel zincirleri ve özel reçeteli imalat yapan iş ortaklarımız için paletli IBC tanklar ve gıda uyumlu çelik varillerle kolay depolanabilir çözümler sunuyoruz.",
    points: [
      "Forklift ve depo içi kullanıma hazır paletli düzen",
      "İhtiyaca göre parti bazlı esnek sipariş planlaması",
      "Sızdırmaz, ışık geçirmeyen ve güvenli ambalaj yapısı",
    ],
  },
];

const assuranceSteps = [
  {
    step: "01",
    title: "Özel Reçete & Planlama",
    desc: "İş ortağımızın üretim ihtiyacına uygun ürün profili, asitlik dengesi ve yıllık tedarik takvimi birlikte belirlenir.",
  },
  {
    step: "02",
    title: "Akredite Analiz & Mühür",
    desc: "Yükleme öncesinde her partiden şahit numune alınır; resmi analiz raporu (COA) ve teknik veri dosyası (TDS) hazırlanır.",
  },
  {
    step: "03",
    title: "İzlenebilir Güvenli Teslimat",
    desc: "Polateli’den yola çıkan her sevkiyat, varış noktasına kadar şeffaf iletişim ve zamanında teslimat güvencesiyle takip edilir.",
  },
];

export default function B2BLojistikPage() {
  return (
    <div className="bg-karyag-ivory min-h-screen">
      {/* 1. FLU EDİTORYAL BANNER */}
      <section className="relative overflow-hidden border-b border-karyag-gold/30 py-20 sm:py-28 px-4 sm:px-8 bg-[#F6F3EC]">
        <img
          src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="KARYAĞ Ulusal ve Küresel Lojistik Ağı"
          className="absolute inset-0 w-full h-full object-cover blur-[4px] scale-110 opacity-40 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBFA]/96 via-[#FCFBFA]/85 to-[#F6F3EC]/55 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FCFBFA] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1380px] mx-auto">
          <div className="inline-flex items-center gap-2 text-xs text-karyag-steel-muted mb-6 bg-white/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-karyag-gold/25">
            <Link href="/" className="hover:text-karyag-gold-dark transition">
              Anasayfa
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-karyag-gold" />
            <span className="text-karyag-steel-dark font-semibold">
              B2B Lojistik & Tedarik
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>ULUSAL & KÜRESEL TEDARİK AĞI</span>
            </div>

            <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-karyag-steel-dark leading-[1.12]">
              Emaneti Koruyan{" "}
              <span className="italic text-karyag-gold-dark font-medium block sm:inline">
                Kesintisiz Yolculuk
              </span>
            </h1>

            <p className="text-base sm:text-lg text-karyag-steel/85 leading-relaxed max-w-2xl">
              Üretimde gösterdiğimiz inceliği, yolda da aynı titizlikle
              sürdürüyoruz. Polateli / Kilis’teki tesisimizden yurt içi
              fabrikalara ve Akdeniz limanları üzerinden dünya sofralarına kadar
              her damla aynı saflıkla ulaşır.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LOJİSTİK ÇÖZÜM KARTLARI */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {logisticsModes.map((mode) => {
              const Icon = mode.icon;
              return (
                <div
                  key={mode.title}
                  className="group bg-white rounded-3xl p-8 sm:p-9 border border-stone-200/80 hover:border-karyag-gold shadow-2xs hover:shadow-[0_24px_55px_-18px_rgba(200,162,74,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-8"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-karyag-gold-light text-karyag-gold-dark group-hover:bg-karyag-green group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold bg-karyag-ivory text-karyag-steel-dark px-3 py-1.5 rounded-full border border-karyag-gold/35">
                        {mode.capacity}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-karyag-gold-dark">
                        {mode.code}
                      </span>
                      <h2 className="font-serif font-semibold text-2xl text-karyag-steel-dark mt-1.5">
                        {mode.title}
                      </h2>
                    </div>

                    <p className="text-sm text-karyag-steel-muted leading-relaxed">
                      {mode.desc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-6 border-t border-stone-100">
                    {mode.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-karyag-steel-dark"
                      >
                        <CheckCircle2 className="w-4 h-4 text-karyag-green shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* 3. GÜVENCE VE SÜREÇ ADIMLARI */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-stone-200/80 shadow-2xs space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                  <ShieldCheck className="w-4 h-4 text-karyag-green" />
                  <span>ŞEFFAF TEDARİK DİSİPLİNİ</span>
                </div>
                <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-karyag-steel-dark">
                  Siparişten Teslimata Üç Adımda Güven
                </h2>
              </div>

              <div className="inline-flex items-center gap-2.5 bg-karyag-ivory px-4 py-2.5 rounded-full border border-karyag-gold/30 text-xs font-semibold text-karyag-steel-dark">
                <MapPin className="w-4 h-4 text-karyag-gold" />
                <span>Polateli / Kilis • Akdeniz Limanlarına Yakın Konum</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {assuranceSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-karyag-ivory rounded-2xl p-6 sm:p-7 border border-karyag-gold/25 space-y-3"
                >
                  <span className="inline-block font-serif font-bold text-2xl text-karyag-gold">
                    {item.step}
                  </span>
                  <h3 className="font-serif font-semibold text-xl text-karyag-steel-dark">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-karyag-steel-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* COA & TDS Alt Daveti */}
            <div className="rounded-2xl bg-karyag-cream/75 p-6 sm:p-8 border border-karyag-gold/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="w-11 h-11 rounded-xl bg-white border border-karyag-gold/35 text-karyag-green flex items-center justify-center shrink-0 mt-0.5">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-karyag-steel-dark">
                    Analiz Sertifikası (COA) ve Numune Talebi
                  </h3>
                  <p className="text-xs sm:text-sm text-karyag-steel-muted mt-1 leading-relaxed">
                    Yıllık tedarik sözleşmeleri, teknik spesifikasyon dosyaları
                    veya dökme sevkiyat teklifi için satış ekibimizle doğrudan
                    iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-semibold uppercase tracking-wider px-7 py-4 rounded-full transition shrink-0 group"
              >
                <span>Teklif & Spekt İste</span>
                <ArrowRight className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}