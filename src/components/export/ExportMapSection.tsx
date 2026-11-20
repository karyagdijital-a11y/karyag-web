"use client";

import { useState } from "react";
import { Globe2, Anchor, Ship, MapPin, CheckCircle2 } from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

type RegionKey = "avrupa" | "ortadogu" | "amerika" | "asya";

type ExportRegion = {
  key: RegionKey;
  name: string;
  subtitle: string;
  transit: string;
  modes: string;
  desc: string;
  cx: number;
  cy: number;
  pathD: string;
  highlights: string[];
};

// Polateli / Kilis referans noktası (SVG 1000x480 koordinatları)
const ORIGIN = { x: 582, y: 186 };

const regions: ExportRegion[] = [
  {
    key: "avrupa",
    name: "Avrupa Birliği & İngiltere",
    subtitle: "Yüksek Kalite & Private Label Pazarı",
    transit: "7 – 14 Gün Denizyolu / Karayolu",
    modes: "Flexitank • 20' FCL • Karayolu TIR",
    desc: "Avrupa gıda kodeksine tam uyumlu natürel sızma ve rafine serilerimizle zincir marketler ve gıda sanayiine kesintisiz sevkiyat.",
    cx: 488,
    cy: 132,
    pathD: "M 582 186 Q 535 128 488 132",
    highlights: [
      "AB standartlarında tam izlenebilirlik ve COA belgesi",
      "Çok dilli özel etiketleme (EN, DE, FR, NL)",
      "Hızlı karayolu ve Akdeniz liman bağlantısı",
    ],
  },
  {
    key: "ortadogu",
    name: "Orta Doğu & Körfez (MENA)",
    subtitle: "Kilis’ten Doğrudan Lojistik Avantajı",
    transit: "3 – 10 Gün Karayolu / Denizyolu",
    modes: "Teneke • PET • IBC • Tanker",
    desc: "Coğrafi yakınlığımız ve Helal Gıda sertifikasyonumuz sayesinde Körfez ve Orta Doğu pazarlarına yüksek hız ve tazelikle erişim.",
    cx: 632,
    cy: 235,
    pathD: "M 582 186 Q 618 202 632 235",
    highlights: [
      "Helal sertifikalı üretim ve Arapça/İngilizce ambalaj",
      "Sıcak iklime dayanıklı 5L & 18L teneke çözümleri",
      "İskenderun ve karayolu kapılarından kısa termin",
    ],
  },
  {
    key: "amerika",
    name: "Kuzey & Güney Amerika",
    subtitle: "Gurme Perakende & Dökme İhracat",
    transit: "22 – 30 Gün Okyanus Denizyolu",
    modes: "20' FCL Flexitank • Paletli Cam & Teneke",
    desc: "Mersin Limanı üzerinden doğrudan okyanus hatlarıyla ABD, Kanada ve Latin Amerika ithalatçılarına yüksek tonajlı ve butik teslimat.",
    cx: 238,
    cy: 174,
    pathD: "M 582 186 Q 410 75 238 174",
    highlights: [
      "Uzun deniz yolculuğuna uygun azot korumalı dolum",
      "FDA uyumlu etiket ve ihracat dokümantasyonu",
      "24 tonluk tek kullanımlık steril Flexitank yükleme",
    ],
  },
  {
    key: "asya",
    name: "Asya-Pasifik & Uzak Doğu",
    subtitle: "Yükselen Gurme & HoReCa Talebi",
    transit: "24 – 35 Gün Denizyolu",
    modes: "Cam Şişe • Butik Teneke • Flexitank",
    desc: "Akdeniz beslenme kültürüne ilgi duyan Japonya, Güney Kore ve Asya-Pasifik pazarlarına yüksek polifenollü KADİVA ve KAROLİVA serileri.",
    cx: 805,
    cy: 205,
    pathD: "M 582 186 Q 705 130 805 205",
    highlights: [
      "Premium cam şişe ve özel hediye kutulu sunum",
      "Uluslararası zeytinyağı kodeksine (IOOC) tam uyum",
      "Düzenli konteyner konsolidasyonu ve şeffaf takip",
    ],
  },
];

export default function ExportMapSection() {
  const [activeKey, setActiveKey] = useState<RegionKey>("avrupa");
  const current = regions.find((r) => r.key === activeKey) ?? regions[0];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white border-y border-stone-200/70">
      <div className="max-w-[1380px] mx-auto space-y-12">
        {/* Başlık */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>KÜRESEL İHRACAT & LOJİSTİK AĞI</span>
            </div>
            <h2 className="font-serif font-semibold text-3xl sm:text-5xl text-karyag-steel-dark leading-tight">
              Polateli / Kilis’ten{" "}
              <span className="italic text-karyag-gold-dark font-medium">
                Dünya Pazarlarına
              </span>
            </h2>
            <p className="text-sm sm:text-base text-karyag-steel-muted leading-relaxed">
              Mersin ve İskenderun limanlarına olan stratejik yakınlığımızla,
              zeytinin bereketini dört kıtaya zamanında ve eksiksiz güvenle
              ulaştırıyoruz.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-karyag-ivory px-5 py-3 rounded-2xl border border-karyag-gold/30 text-xs font-semibold text-karyag-steel-dark">
            <Anchor className="w-4 h-4 text-karyag-green shrink-0" />
            <span>Mersin & İskenderun Liman Bağlantılı Hızlı İhracat</span>
          </div>
        </div>

        {/* Harita + Bölge Detay Kartı */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sol: Stilize İnteraktif Dünya Haritası */}
          <div className="lg:col-span-8 bg-karyag-ivory rounded-3xl border border-karyag-gold/30 p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Bölge Seçim Butonları */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
              {regions.map((reg) => {
                const isActive = reg.key === activeKey;
                return (
                  <button
                    key={reg.key}
                    type="button"
                    onClick={() => setActiveKey(reg.key)}
                    className={`px-3.5 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                      isActive
                        ? "bg-karyag-green text-white border-karyag-green shadow-xs"
                        : "bg-white text-karyag-steel-dark border-stone-200 hover:border-karyag-gold"
                    }`}
                  >
                    {reg.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>

            {/* Stilize Vektör Harita */}
            <div className="relative w-full aspect-[1000/480]">
              <svg
                viewBox="0 0 1000 480"
                className="w-full h-full"
                role="img"
                aria-label="KARYAĞ Küresel İhracat Haritası"
              >
                {/* İnce Koordinat Izgarası */}
                <g stroke="#E7E1D4" strokeWidth="1" strokeDasharray="3 5">
                  <line x1="0" y1="120" x2="1000" y2="120" />
                  <line x1="0" y1="240" x2="1000" y2="240" />
                  <line x1="0" y1="360" x2="1000" y2="360" />
                  <line x1="250" y1="0" x2="250" y2="480" />
                  <line x1="500" y1="0" x2="500" y2="480" />
                  <line x1="750" y1="0" x2="750" y2="480" />
                </g>

                {/* Stilize Kıta Silüetleri (Fildişi/Taş Tonu) */}
                <g fill="#EAE4D7" stroke="#DCD4C3" strokeWidth="1.2">
                  {/* Kuzey Amerika */}
                  <path d="M 90 95 L 180 70 L 295 85 L 330 135 L 285 190 L 245 225 L 210 235 L 175 195 L 125 165 Z" />
                  {/* Güney Amerika */}
                  <path d="M 245 250 L 315 265 L 355 320 L 320 405 L 280 445 L 255 380 L 235 305 Z" />
                  {/* Avrupa */}
                  <path d="M 435 90 L 520 75 L 575 100 L 560 155 L 505 168 L 455 162 L 430 135 Z" />
                  {/* Afrika */}
                  <path d="M 445 190 L 535 182 L 590 220 L 605 285 L 560 390 L 515 405 L 485 335 L 440 260 Z" />
                  {/* Anadolu & Orta Doğu & Asya */}
                  <path d="M 555 165 L 615 150 L 710 105 L 845 110 L 895 165 L 855 245 L 775 275 L 715 245 L 665 265 L 615 255 L 580 205 Z" />
                  {/* Avustralya */}
                  <path d="M 790 325 L 885 320 L 915 375 L 865 415 L 795 395 Z" />
                </g>

                {/* İhracat Rotaları */}
                {regions.map((reg) => {
                  const isActive = reg.key === activeKey;
                  return (
                    <g key={reg.key}>
                      <path
                        d={reg.pathD}
                        fill="none"
                        stroke={isActive ? "#C8A24A" : "#C8A24A"}
                        strokeOpacity={isActive ? 0.95 : 0.3}
                        strokeWidth={isActive ? 2.6 : 1.4}
                        strokeDasharray={isActive ? "none" : "5 5"}
                        className="transition-all duration-300"
                      />
                      {/* Hedef Bölge Noktası */}
                      <g
                        onClick={() => setActiveKey(reg.key)}
                        className="cursor-pointer"
                      >
                        {isActive && (
                          <circle
                            cx={reg.cx}
                            cy={reg.cy}
                            r="16"
                            fill="#C8A24A"
                            opacity="0.22"
                          />
                        )}
                        <circle
                          cx={reg.cx}
                          cy={reg.cy}
                          r={isActive ? 7 : 5}
                          fill={isActive ? "#3A6D33" : "#C8A24A"}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                      </g>
                    </g>
                  );
                })}

                {/* Merkez: Polateli / Kilis */}
                <g>
                  <circle
                    cx={ORIGIN.x}
                    cy={ORIGIN.y}
                    r="18"
                    fill="#3A6D33"
                    opacity="0.16"
                  />
                  <circle
                    cx={ORIGIN.x}
                    cy={ORIGIN.y}
                    r="8"
                    fill="#3A6D33"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                  />
                  <rect
                    x={ORIGIN.x - 54}
                    y={ORIGIN.y - 34}
                    width="108"
                    height="22"
                    rx="11"
                    fill="#1E2326"
                  />
                  <text
                    x={ORIGIN.x}
                    y={ORIGIN.y - 19}
                    textAnchor="middle"
                    fill="#FBF7EC"
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="0.8"
                  >
                    POLATELİ / KİLİS
                  </text>
                </g>
              </svg>
            </div>

            {/* Alt Özet Şeridi */}
            <div className="pt-4 mt-2 border-t border-karyag-gold/20 flex flex-wrap items-center justify-between gap-4 text-[11px] text-karyag-steel-muted">
              <span className="inline-flex items-center gap-2 font-semibold text-karyag-steel-dark">
                <MapPin className="w-3.5 h-3.5 text-karyag-green" />
                Üretim Merkezi: Polateli OSB Yakını, Kilis
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-karyag-gold" />
                Bölge seçerek lojistik detaylarını inceleyin
              </span>
            </div>
          </div>

          {/* Sağ: Seçili Bölge Detay Kartı */}
          <div className="lg:col-span-4 bg-karyag-ivory rounded-3xl border border-karyag-gold/35 p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase bg-white text-karyag-gold-dark px-3 py-1.5 rounded-full border border-karyag-gold/35">
                SEÇİLİ İHRACAT HATTI
              </span>

              <div>
                <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-karyag-steel-dark">
                  {current.name}
                </h3>
                <p className="font-serif italic text-sm text-karyag-gold-dark mt-1">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm text-karyag-steel-muted leading-relaxed">
                {current.desc}
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <div className="bg-white rounded-2xl p-4 border border-stone-200/70">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-karyag-steel-muted">
                    Tahmini Transit Süresi
                  </div>
                  <div className="text-sm font-bold text-karyag-steel-dark mt-0.5 flex items-center gap-2">
                    <Ship className="w-4 h-4 text-karyag-gold" />
                    <span>{current.transit}</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-stone-200/70">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-karyag-steel-muted">
                    Sevkiyat Modelleri
                  </div>
                  <div className="text-sm font-bold text-karyag-steel-dark mt-0.5">
                    {current.modes}
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2.5 pt-5 border-t border-karyag-gold/20">
              {current.highlights.map((hl) => (
                <li
                  key={hl}
                  className="flex items-start gap-2.5 text-xs text-karyag-steel-dark"
                >
                  <CheckCircle2 className="w-4 h-4 text-karyag-green shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}