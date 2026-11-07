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
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Building2,
  Recycle,
  Droplets,
  FlaskConical,
  Flame,
  Factory,
  Truck,
  Container,
  PackageCheck,
  FileCheck2,
  Award,
  PhoneCall,
  Download,
  Sparkles,
} from "lucide-react";

type SubItem = {
  code: string;
  title: string;
  desc: string;
  metric: string;
  href: string;
  icon: React.ElementType;
};

type MegaMenuSection = {
  name: string;
  href: string;
  eyebrow?: string;
  headline?: string;
  summary?: string;
  highlightTitle?: string;
  highlightDesc?: string;
  highlightBadge?: string;
  highlightHref?: string;
  items?: SubItem[];
};

const navigation: MegaMenuSection[] = [
  {
    name: "Kurumsal",
    href: "/kurumsal",
    eyebrow: "KURUMSAL YAPI & HOLDİNG VİZYONU",
    headline: "Bütünsel Sanayi Gücü ve Küresel Güven",
    summary:
      "KARYAĞ Gıda San. ve Tic. A.Ş.; zeytinyağı üretimi, pirina ekstraksiyonu ve ileri rafinasyon süreçlerini Polateli / Kilis tesislerinde tek çatı altında birleştirir.",
    highlightBadge: "KURUMSAL DOKÜMAN",
    highlightTitle: "KARYAĞ 2026 Kurumsal Tanıtım & Kapasite Dosyası",
    highlightDesc:
      "Tesis altyapımız, çelik silo kapasitemiz ve uluslararası kalite sertifikalarımızı içeren resmi sunum.",
    highlightHref: "/kurumsal",
    items: [
      {
        code: "01 • HAKKIMIZDA",
        title: "Şirket Profili & Vizyonumuz",
        desc: "B2B endüstriyel tedarik yapımız, yönetim ilkelerimiz ve büyüme stratejimiz.",
        metric: "Çatı Sanayi Yapısı",
        href: "/kurumsal#vizyon",
        icon: Building2,
      },
      {
        code: "02 • ÜRETİM ÜSSÜ",
        title: "Polateli / Kilis Entegre Tesisimiz",
        desc: "Kontinü sıkım, pirina işleme ve rafinasyon ünitelerimizin teknik mimarisi.",
        metric: "4 Entegre Ünite",
        href: "/kurumsal#tesis",
        icon: Factory,
      },
      {
        code: "03 • KALİTE & AR-GE",
        title: "Laboratuvar & Akreditasyon",
        desc: "Her partide COA, serbest asitlik, peroksit ve spektrofotometrik kalite kontrol.",
        metric: "ISO • HACCP • IOOC",
        href: "/kurumsal#kalite",
        icon: ShieldCheck,
      },
      {
        code: "04 • EKOLOJİ",
        title: "Sıfır Atık & Döngüsel Ekonomi",
        desc: "Logomuzdaki sonsuzluk döngüsüyle zeytinin her zerresini değere dönüştüren model.",
        metric: "%100 Sıfır Atık",
        href: "/kurumsal#surdurulebilirlik",
        icon: Recycle,
      },
    ],
  },
  {
    name: "Faaliyet Alanlarımız",
    href: "/faaliyet-alanlarimiz",
    eyebrow: "ENTEGRE ÜRETİM VE RAFİNASYON HATLARIMIZ",
    headline: "Dört Aşamalı Kesintisiz Üretim Zinciri",
    summary:
      "Ham zeytinin tesise girişinden rafine sıvı altına ve temiz biyokütle enerjisine dönüşümüne kadar sıfır kayıplı mühendislik süreci.",
    highlightBadge: "TEKNİK KAPASİTE",
    highlightTitle: "Fiziksel ve Kimyasal İleri Rafinasyon Teknolojisi",
    highlightDesc:
      "Yüksek dumanlanma noktası (210°C+), düşük asitlik (<%0.3) ve uluslararası gıda kodeksine tam uyumlu üretim.",
    highlightHref: "/faaliyet-alanlarimiz#rafinasyon",
    items: [
      {
        code: "ÜNİTE 01",
        title: "Zeytinyağı Üretimi (Natürel & Ham)",
        desc: "Kilis zeytinlerinden modern kontinü sistemlerle soğuk sıkım sızma ve ham yağ üretimi.",
        metric: "Yüksek Polifenol",
        href: "/faaliyet-alanlarimiz#zeytinyagi",
        icon: Droplets,
      },
      {
        code: "ÜNİTE 02",
        title: "İleri Rafinasyon Tesisi",
        desc: "Nötralizasyon, ağartma, vinterizasyon ve deodorizasyon ile saf rafine yağ üretimi.",
        metric: "%99.9 Saflık",
        href: "/faaliyet-alanlarimiz#rafinasyon",
        icon: FlaskConical,
      },
      {
        code: "ÜNİTE 03",
        title: "Pirina Değerlendirme & Ekstraksiyon",
        desc: "Zeytin sıkımından kalan pirinanın işlenerek ham pirina yağına dönüştürülmesi.",
        metric: "Kapalı Devre Hat",
        href: "/faaliyet-alanlarimiz#pirina",
        icon: Recycle,
      },
      {
        code: "ÜNİTE 04",
        title: "Biyokütle & Yenilenebilir Enerji",
        desc: "Yağı alınmış kuru pirina ve çekirdeğin yüksek kalorili ekolojik yakıta dönüşümü.",
        metric: "Yeşil Enerji",
        href: "/faaliyet-alanlarimiz#biyokutle",
        icon: Flame,
      },
    ],
  },
  {
    name: "Marka Mimarimiz",
    href: "/marka-mimarimiz",
    eyebrow: "3'LÜ KURUMSAL MARKA EKOSİSTEMİ",
    headline: "Çatı Güvencesi ve Uzmanlaşmış Ticari Markalar",
    summary:
      "Dökme endüstriyel tedarikten gurme natürel sızma serisine ve profesyonel mutfak (HoReCa) yağlarına uzanan marka yapımız.",
    highlightBadge: "MARKA STRATEJİSİ",
    highlightTitle: "KARYAĞ Çatısı Altında KADİVA ve KAROLİVA",
    highlightDesc:
      "Ulusal ve uluslararası pazarlarda her tüketim ve sanayi segmentine özel konumlandırılmış tescilli ürün mimarisi.",
    highlightHref: "/marka-mimarimiz",
    items: [
      {
        code: "ÇATI MARKA",
        title: "KARYAĞ Gıda Tarım Sanayi",
        desc: "B2B dökme tanker, Flexitank ve endüstriyel tonajlı yağ tedarikinin ana güvencesi.",
        metric: "Holding / B2B",
        href: "/marka-mimarimiz",
        icon: Factory,
      },
      {
        code: "ALT MARKA • 01",
        title: "KADİVA (Natürel & Gurme Serisi)",
        desc: "Kilis coğrafyasının kadim zeytin mirasını taşıyan natürel sızma ve erken hasat serisi.",
        metric: "Natürel Sızma",
        href: "/marka-mimarimiz",
        icon: Sparkles,
      },
      {
        code: "ALT MARKA • 02",
        title: "KAROLİVA (Endüstriyel & HoReCa)",
        desc: "Gıda sanayii ve profesyonel mutfaklar için yüksek ısı dayanımlı rafine ve pirina yağı serisi.",
        metric: "Endüstriyel Seri",
        href: "/marka-mimarimiz",
        icon: Award,
      },
      {
        code: "ÖZEL ÜRETİM",
        title: "Endüstriyel & İhracat Çözümleri",
        desc: "Yurt dışı ithalatçılar ve gıda fabrikaları için spesifik asitlik/kalite reçeteleri.",
        metric: "Global Tedarik",
        href: "/iletisim",
        icon: Globe,
      },
    ],
  },
  {
    name: "B2B Lojistik & Tedarik",
    href: "/b2b-lojistik",
    eyebrow: "ULUSAL VE KÜRESEL DÖKME YAĞ LOJİSTİĞİ",
    headline: "Mühürlü, İzlenebilir ve Yüksek Tonajlı Sevkiyat",
    summary:
      "Polateli / Kilis tesisimizden yurt içi fabrikalara ve Mersin / İskenderun limanları üzerinden dünya pazarlarına kesintisiz lojistik.",
    highlightBadge: "LABORATUVAR ONAYLI",
    highlightTitle: "Her Sevkiyatta Resmi COA & TDS Sertifikası",
    highlightDesc:
      "Tanker dolumu öncesi mühürlü numune ve akredite laboratuvar analiz raporu ile %100 standart kalite garantisi.",
    highlightHref: "/b2b-lojistik",
    items: [
      {
        code: "KARAYOLU • YURT İÇİ",
        title: "Paslanmaz Çelik Gıda Tankerleri",
        desc: "20 - 26 ton kapasiteli, ısı yalıtımlı AISI 304/316 paslanmaz çelik tankerlerle teslimat.",
        metric: "20 - 26 Ton / Tanker",
        href: "/b2b-lojistik",
        icon: Truck,
      },
      {
        code: "DENİZYOLU • İHRACAT",
        title: "Flexitank Konteyner (20' FCL)",
        desc: "Tek kullanımlık gıda sınıfı Flexitank üniteleriyle 24 tona kadar ekonomik deniz sevkiyatı.",
        metric: "21 - 24 Ton / FCL",
        href: "/b2b-lojistik",
        icon: Container,
      },
      {
        code: "MODÜLER SEVKIYAT",
        title: "IBC Tank (1.000 L) & Çelik Varil",
        desc: "Paletli kompozit IBC tanklar ve 200 kg epoksi kaplı çelik varillerle güvenli sevkiyat.",
        metric: "1.000 L / 200 Kg",
        href: "/b2b-lojistik",
        icon: PackageCheck,
      },
      {
        code: "TEKNİK SPEKTLER",
        title: "TDS & Analiz Sertifikası (COA)",
        desc: "Natürel sızma, rafine zeytinyağı ve pirina yağı kimyasal parametre tabloları.",
        metric: "PDF Spekt Talebi",
        href: "/iletisim",
        icon: FileCheck2,
      },
    ],
  },
  {
    name: "İletişim",
    href: "/iletisim",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>("Kurumsal");
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();

  const currentMegaData = navigation.find(
    (item) => item.name === activeMega && item.items
  );

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-white border-b border-gray-200/90 shadow-sm relative"
        onMouseLeave={() => setActiveMega(null)}
      >
        {/* 1. ÜST ENDÜSTRİYEL BİLGİ BARI */}
        <div className="bg-karyag-steel-dark text-white text-[11px] py-2 px-4 sm:px-8 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-4">
            <div className="flex items-center gap-2.5 text-gray-300 font-medium truncate">
              <span className="inline-block w-2 h-2 rounded-full bg-karyag-gold animate-pulse shrink-0" />
              <span className="truncate">
                <strong className="text-white font-semibold">KARYAĞ GIDA SAN. ve TİC. A.Ş.</strong> • Entegre Zeytinyağı, Pirina & Rafinasyon Üssü (Polateli / KİLİS)
              </span>
            </div>

            <div className="hidden xl:flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-gray-300 bg-white/5 px-3 py-1 rounded border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-karyag-gold" />
                <span>ISO 9001 • ISO 22000 • HACCP • COA ONAYLI</span>
              </div>

              <span className="text-white/20">|</span>

              <Link
                href="/iletisim"
                className="flex items-center gap-1.5 text-karyag-gold hover:text-white font-semibold tracking-wider uppercase transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>TDS & Spesifikasyon Talep Et</span>
              </Link>

              <span className="text-white/20">|</span>

              <div className="flex items-center gap-1.5 font-bold text-[11px]">
                <Globe className="w-3.5 h-3.5 text-karyag-gold" />
                <button className="text-white hover:text-karyag-gold cursor-pointer">TR</button>
                <span className="text-gray-600">/</span>
                <button className="text-gray-400 hover:text-white cursor-pointer">EN</button>
                <span className="text-gray-600">/</span>
                <button className="text-gray-400 hover:text-white cursor-pointer">AR</button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. ANA NAVİGASYON BARI (1500x433 LOGO TAM SIĞDIRILMIŞ) */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-26 flex items-center justify-between gap-4 xl:gap-8">
          {/* Sol: 1500x433 (3.46:1 Oranlı) Yatay Kurumsal Logo - Kesilme Yok */}
          <Link
            href="/"
            onMouseEnter={() => setActiveMega(null)}
            className="flex items-center shrink-0 py-2"
          >
            <Image
              src="/images/logo/k-siyah.png"
              alt="KARYAĞ Gıda Tarım Sanayi"
              width={1500}
              height={433}
              priority
              unoptimized
              className="h-[64px] sm:h-[74px] xl:h-[82px] w-auto object-contain"
            />
          </Link>

          {/* Orta: Tek Satır Kurumsal Menü Öğeleri */}
          <nav className="hidden lg:flex items-center h-full gap-0.5 xl:gap-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const isHovered = activeMega === item.name;
              const hasMega = Boolean(item.items);

              return (
                <div
                  key={item.name}
                  className="h-full flex items-center"
                  onMouseEnter={() =>
                    setActiveMega(hasMega ? item.name : null)
                  }
                >
                  <Link
                    href={item.href}
                    className={`relative h-full inline-flex items-center gap-1.5 px-3 xl:px-4 text-[13.5px] font-bold whitespace-nowrap transition-colors ${
                      isHovered || isActive
                        ? "text-karyag-green"
                        : "text-karyag-steel hover:text-karyag-green"
                    }`}
                  >
                    <span>{item.name}</span>
                    {hasMega && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isHovered
                            ? "rotate-180 text-karyag-gold"
                            : "text-gray-400"
                        }`}
                      />
                    )}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[3px] rounded-t-full transition-all duration-300 ${
                        isHovered
                          ? "bg-karyag-gold opacity-100"
                          : isActive
                          ? "bg-karyag-green opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Sağ: B2B Teklif & Tedarik Aksiyon Butonu (Ekran Dışına Taşmaz) */}
          <div
            className="hidden lg:flex items-center shrink-0"
            onMouseEnter={() => setActiveMega(null)}
          >
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-bold tracking-wider uppercase px-5 xl:px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all border border-karyag-gold/50 whitespace-nowrap group"
            >
              <span>B2B TEKLİF & TEDARİK</span>
              <ArrowUpRight className="w-4 h-4 text-karyag-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-karyag-steel rounded-xl border border-gray-200 hover:bg-gray-50"
            aria-label="Menü"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 3. HERO ÜZERİNE AÇILAN (ABSOLUTE OVERLAY) MEGA-MENÜ PERDESİ */}
        <div
          className={`hidden lg:grid absolute left-0 right-0 top-full z-50 transition-all duration-300 ease-out bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.45)] overflow-hidden ${
            currentMegaData
              ? "grid-rows-[1fr] opacity-100 translate-y-0 border-b-4 border-b-karyag-gold"
              : "grid-rows-[0fr] opacity-0 -translate-y-1 border-t-0 pointer-events-none"
          }`}
        >
          <div className="min-h-0">
            {currentMegaData && (
              <div className="max-w-[1440px] mx-auto px-8 py-10 grid grid-cols-12 gap-8 items-stretch">
                <div className="col-span-3 bg-karyag-bg rounded-2xl p-7 border border-gray-200/80 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-karyag-green bg-karyag-green-light px-3 py-1 rounded border border-karyag-green/20">
                      {currentMegaData.eyebrow}
                    </span>
                    <h3 className="font-display font-black text-2xl text-karyag-steel mt-4 leading-snug">
                      {currentMegaData.headline}
                    </h3>
                    <p className="text-xs text-karyag-steel-muted mt-3 leading-relaxed">
                      {currentMegaData.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <Link
                      href={currentMegaData.href}
                      onClick={() => setActiveMega(null)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-green hover:text-karyag-green-dark group"
                    >
                      <span>{currentMegaData.name} Sayfasına Git</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="col-span-6 grid grid-cols-2 gap-4">
                  {currentMegaData.items?.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setActiveMega(null)}
                        className="group relative bg-white hover:bg-karyag-bg rounded-2xl p-5 border border-gray-200 hover:border-karyag-green/60 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-karyag-steel-muted group-hover:text-karyag-green transition">
                              {sub.code}
                            </span>
                            <span className="text-[10px] font-bold bg-karyag-green-light text-karyag-green px-2.5 py-0.5 rounded-full">
                              {sub.metric}
                            </span>
                          </div>

                          <div className="flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-karyag-green-light text-karyag-green group-hover:bg-karyag-green group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-base text-karyag-steel group-hover:text-karyag-green transition-colors">
                                {sub.title}
                              </h4>
                              <p className="text-xs text-karyag-steel-muted mt-1 leading-relaxed">
                                {sub.desc}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-karyag-steel group-hover:text-karyag-green">
                          <span>Detaylı İncele</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-karyag-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="col-span-3 bg-karyag-steel-dark text-white rounded-2xl p-7 border border-karyag-gold/40 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-karyag-gold/10 blur-2xl pointer-events-none" />

                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-karyag-gold text-karyag-steel-dark px-2.5 py-1 rounded">
                      {currentMegaData.highlightBadge}
                    </span>
                    <h4 className="font-display font-black text-xl text-white mt-4 leading-snug">
                      {currentMegaData.highlightTitle}
                    </h4>
                    <p className="text-xs text-gray-300 mt-2.5 leading-relaxed">
                      {currentMegaData.highlightDesc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 mt-6 border-t border-white/10">
                    <Link
                      href="/iletisim"
                      onClick={() => setActiveMega(null)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl border border-karyag-gold/40 transition"
                    >
                      <span>B2B Fiyat & Spekt İste</span>
                      <ArrowRight className="w-3.5 h-3.5 text-karyag-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. MOBİL AKORDİYON MENÜ */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full z-50 bg-white border-t border-gray-200 px-4 pt-4 pb-8 space-y-2 shadow-2xl max-h-[85vh] overflow-y-auto">
            {navigation.map((item) => {
              const isOpen = mobileAccordion === item.name;
              return (
                <div
                  key={item.name}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-karyag-bg/50"
                >
                  <div className="flex items-center justify-between px-4 py-3.5 bg-white">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-display font-bold text-base text-karyag-steel"
                    >
                      {item.name}
                    </Link>
                    {item.items && (
                      <button
                        onClick={() =>
                          setMobileAccordion(isOpen ? null : item.name)
                        }
                        className="p-1.5 rounded-lg bg-karyag-green-light text-karyag-green"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.items && isOpen && (
                    <div className="px-4 py-3 space-y-2.5 border-t border-gray-100 bg-karyag-bg">
                      {item.items.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-gray-200/80"
                          >
                            <Icon className="w-4 h-4 text-karyag-green shrink-0 mt-0.5" />
                            <div>
                              <div className="text-xs font-bold text-karyag-steel">
                                {sub.title}
                              </div>
                              <div className="text-[11px] text-karyag-steel-muted mt-0.5">
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3">
              <Link
                href="/iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-karyag-green text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl shadow-md"
              >
                <span>B2B TEKLİF & TEDARİK FORMU</span>
                <ArrowUpRight className="w-4 h-4 text-karyag-gold" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mega Menü Açıkken Karartma Katmanı */}
      {currentMegaData && (
        <div
          className="hidden lg:block fixed inset-0 bg-karyag-steel-dark/50 backdrop-blur-[3px] z-40 transition-opacity duration-300"
          onMouseEnter={() => setActiveMega(null)}
        />
      )}
    </>
  );
}