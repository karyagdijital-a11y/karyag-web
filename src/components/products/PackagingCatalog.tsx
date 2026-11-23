"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

type CategoryId =
  | "all"
  | "cam"
  | "teneke"
  | "pet"
  | "dokme"
  | "private-label";

type ProductItem = {
  id: string;
  category: Exclude<CategoryId, "all">;
  brand: "KADİVA" | "KAROLİVA" | "KARYAĞ";
  badge: string;
  title: string;
  oilType: string;
  volumes: string[];
  usageNote: string;
  image: string;
  highlights: string[];
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "Tüm Ürünler" },
  { id: "cam", label: "Cam Şişe" },
  { id: "teneke", label: "Metal Teneke" },
  { id: "pet", label: "PET Ambalaj" },
  { id: "dokme", label: "Dökme & Endüstriyel" },
  { id: "private-label", label: "Private Label" },
];

const products: ProductItem[] = [
  {
    id: "kadiva-cam-sizma",
    category: "cam",
    brand: "KADİVA",
    badge: "GURME • KOYU CAM ŞİŞE",
    title: "Natürel Sızma Zeytinyağı",
    oilType: "Soğuk Sıkım • Düşük Asitlik",
    volumes: ["250 ml", "500 ml", "750 ml", "1 L"],
    usageNote:
      "Kahvaltılar, taze salatalar, soğuk mezeler ve bitiriş dokunuşları için ideal meyvemsi denge.",
    image: "/images/mockups/kadiva-sise.jpg",
    highlights: [
      "Işığa karşı koruyucu koyu yeşil cam şişe",
      "Doğal mantar veya sızdırmaz gıda kapak seçeneği",
      "İhracat ve perakende raflarına hazır tasarım",
    ],
  },
  {
    id: "kadiva-erken-hasat",
    category: "teneke",
    brand: "KADİVA",
    badge: "ERKEN HASAT • BUTİK TENEKE",
    title: "Erken Hasat Natürel Sızma",
    oilType: "Yüksek Polifenol • Sınırlı Rekolte",
    volumes: ["1 L", "2 L", "3 L", "5 L"],
    usageNote:
      "Ekim–Kasım hasadının taze yeşil aroması; gurme sofralar ve hediye sunumları için özel seri.",
    image: "/images/mockups/kadiva-seri.jpg",
    highlights: [
      "Hava ve ışık temasını sıfırlayan laklı gıda tenekesi",
      "Aile tüketimi ve butik şarküteriler için ideal hacimler",
      "Özel kutulu ve hediyelik ihracat seçeneği",
    ],
  },
  {
    id: "karoliva-horeca-5l",
    category: "teneke",
    brand: "KAROLİVA",
    badge: "HORECA • PROFESYONEL MUTFAK",
    title: "Yüksek Isıya Dayanıklı Rafine & Riviera",
    oilType: "Yüksek Dumanlanma Noktası • Nötr Denge",
    volumes: ["5 L", "10 L", "18 L"],
    usageNote:
      "Otel, restoran, catering ve yüksek tempolu profesyonel mutfaklarda her tarifte aynı berrak sonuç.",
    image: "/images/mockups/karoliva-horeca.jpg",
    highlights: [
      "Kızartma ve sıcak yemeklerde yüksek ısı stabilitesi",
      "Yemeğin kendi aromasını baskılamayan berrak karakter",
      "Sağlam kulplu ve istiflemeye uygun endüstriyel teneke",
    ],
  },
  {
    id: "karoliva-endustriyel-18l",
    category: "teneke",
    brand: "KAROLİVA",
    badge: "ENDÜSTRİYEL • GIDA SANAYİİ",
    title: "Rafine Pirina & Endüstriyel Seri",
    oilType: "Maksimum Stabilite • Ekonomik Performans",
    volumes: ["5 L", "18 L"],
    usageNote:
      "Fırın, pastane, konserve ve toplu yemek üreticileri için yüksek verimli ve standart kalite.",
    image: "/images/mockups/karoliva-teneke.jpg",
    highlights: [
      "Her partide resmi COA analiz raporu güvencesi",
      "Yüksek ısıda köpürme ve koku yapmayan saf yapı",
      "Paletli yurt içi ve ihracat sevkiyatına uygun",
    ],
  },
  {
    id: "karyag-pet-seri",
    category: "pet",
    brand: "KAROLİVA",
    badge: "PERAKENDE & İHRACAT • PET",
    title: "Hafif & Pratik PET Ambalaj Serisi",
    oilType: "Natürel Sızma • Riviera • Pirina",
    volumes: ["1 L", "2 L", "3 L", "5 L"],
    usageNote:
      "Uluslararası market zincirleri ve kırılma riskinin istenmediği lojistik hatlar için ekonomik çözüm.",
    image: "/images/story/stage-3-berraklik.jpg",
    highlights: [
      "UV korumalı yeşil veya şeffaf gıda sınıfı PET",
      "Konteyner yüklemesinde yüksek adet avantajı",
      "Pazar talebine göre kulplu ve ergonomik şişe formları",
    ],
  },
  {
    id: "karyag-dokme-lojistik",
    category: "dokme",
    brand: "KARYAĞ",
    badge: "B2B • DÖKME & YÜKSEK TONAJ",
    title: "Tanker, Flexitank & IBC Dökme Tedarik",
    oilType: "Natürel Sızma • Ham • Rafine • Pirina",
    volumes: ["200 Kg Varil", "1.000 L IBC", "24 Ton Flexitank", "26 Ton Tanker"],
    usageNote:
      "Gıda fabrikaları, dolum tesisleri ve uluslararası ithalatçılar için mühürlü ve izlenebilir tonajlı tedarik.",
    image: "/images/story/stage-2-sikim.jpg",
    highlights: [
      "AISI 304/316 paslanmaz çelik gıda tankerleri",
      "Mersin & İskenderun limanlarından hızlı Flexitank yükleme",
      "Müşteri spesifikasyonuna özel asitlik ve peroksit reçetesi",
    ],
  },
  {
    id: "karyag-private-label",
    category: "private-label",
    brand: "KARYAĞ",
    badge: "ÖZEL MARKA • ANAHTAR TESLİM",
    title: "Kendi Markanızla Üretim (Private Label)",
    oilType: "Tüm Zeytinyağı & Pirina Segmentleri",
    volumes: ["Cam", "Teneke", "PET", "Özel Kutu"],
    usageNote:
      "Yurt içi ve yurt dışı zincir marketler ile distribütörler için etiket tasarımından ihracat evraklarına tam destek.",
    image: "/images/mockups/marka-ailesi.jpg",
    highlights: [
      "Hedef ülke diline ve mevzuatına uygun etiketleme",
      "ISO 9001, ISO 22000, HACCP ve Helal belgeli dolum",
      "Düşük/yüksek hacimli esnek üretim ve düzenli termin",
    ],
  },
];

export default function PackagingCatalog() {
  const [selected, setSelected] = useState<CategoryId>("all");

  const filtered =
    selected === "all"
      ? products
      : products.filter((item) => item.category === selected);

  return (
    <div className="space-y-12">
      {/* Filtre Sekmeleri */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selected === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelected(cat.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                isActive
                  ? "bg-karyag-green text-white border-karyag-green shadow-md"
                  : "bg-white text-karyag-steel-dark border-karyag-gold/35 hover:border-karyag-gold hover:bg-karyag-gold-light/60"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 hover:border-karyag-gold shadow-2xs hover:shadow-[0_24px_55px_-18px_rgba(200,162,74,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* 3:2 Tam Oran Görsel Alanı */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-karyag-cream border-b border-stone-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-karyag-steel-dark text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border border-karyag-gold/40 shadow-xs">
                  {product.badge}
                </span>

                <span className="absolute bottom-4 right-4 bg-karyag-steel-dark/85 backdrop-blur-md text-karyag-gold-light text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                  {product.brand}
                </span>
              </div>

              {/* İçerik */}
              <div className="p-7 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-karyag-gold-dark">
                    <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
                    <span>{product.oilType}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-karyag-steel-dark mt-1.5 group-hover:text-karyag-green transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-karyag-steel-muted leading-relaxed mt-2.5">
                    {product.usageNote}
                  </p>
                </div>

                {/* Ambalaj Hacim Rozetleri */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-karyag-steel-muted">
                    Mevcut Hacim & Seçenekler
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.volumes.map((vol) => (
                      <span
                        key={vol}
                        className="px-2.5 py-1 rounded-lg bg-karyag-ivory border border-karyag-gold/30 text-[11px] font-semibold text-karyag-steel-dark"
                      >
                        {vol}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Öne Çıkan Özellikler */}
                <ul className="space-y-2 pt-4 border-t border-stone-100">
                  {product.highlights.map((hl) => (
                    <li
                      key={hl}
                      className="flex items-start gap-2 text-xs text-karyag-steel-dark/90"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-karyag-green shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Alt Aksiyon */}
            <div className="px-7 pb-7 pt-2">
              <Link
                href={`/iletisim?konu=${encodeURIComponent(product.title)}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-karyag-ivory hover:bg-karyag-green text-karyag-steel-dark hover:text-white text-xs font-bold uppercase tracking-wider py-3.5 px-5 rounded-full border border-karyag-gold/45 hover:border-karyag-green transition-all duration-300 group/btn"
              >
                <span>Teklif & Numune İste</span>
                <ArrowRight className="w-4 h-4 text-karyag-gold group-hover/btn:text-karyag-gold-light group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}