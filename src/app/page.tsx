import Link from "next/link";
import {
  Droplets,
  Recycle,
  Truck,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FlaskConical,
  Factory,
  Gauge,
  Award,
  Flame,
  FileCheck2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. TAM EKRAN SİNEMATİK VİDEO HERO SECTION (MOBİL UYUMLU) */}
      <section className="relative min-h-[86vh] flex items-center bg-karyag-steel-dark text-white overflow-hidden border-b-4 border-karyag-gold">
        {/* Arka Plan Pexels Zeytinyağı / Endüstriyel Akış Videosu */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1920"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source
            src="https://videos.pexels.com/video-files/4109358/4109358-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/5738025/5738025-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sinematik Koyu Kurumsal Kontrast Katmanı (Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181C1F]/95 via-[#1E2428]/88 to-[#2A4B26]/65" />
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Hero İçerik Alanı */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sol Ana Slogan & Stratejik Vurgu */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-karyag-gold/50 rounded-full px-4 py-2 text-xs font-bold tracking-widest text-karyag-gold uppercase shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-karyag-gold animate-ping" />
              KARYAĞ GIDA SAN. ve TİC. A.Ş. • POLATELİ / KİLİS
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[64px] leading-[1.04] tracking-wide text-white drop-shadow-sm">
              TOPRAĞIN BEREKETİNDEN{" "}
              <span className="text-karyag-gold block mt-1">
                ENDÜSTRİYEL GÜCE.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-normal">
              Zeytinyağı üretimi, pirina değerlendirmesi ve ileri rafinasyon
              teknolojilerini{" "}
              <strong className="text-white font-semibold underline decoration-karyag-gold decoration-2 underline-offset-4">
                %100 sıfır atık ve döngüsel sanayi
              </strong>{" "}
              modeliyle tek çatı altında buluşturan ulusal ve uluslararası B2B
              üretim üssü.
            </p>

            {/* Aksiyon Butonları */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-3 bg-karyag-green hover:bg-karyag-green-dark text-white font-bold text-sm px-8 py-4.5 rounded-xl shadow-2xl border border-karyag-gold/50 transition-all group"
              >
                <span>B2B DÖKME YAĞ TEKLİFİ AL</span>
                <ArrowRight className="w-4 h-4 text-karyag-gold group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/faaliyet-alanlarimiz"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm px-7 py-4.5 rounded-xl transition-all"
              >
                <span>Entegre Üretim Süreçlerimiz</span>
              </Link>
            </div>

            {/* Alt Güvence Etiketleri */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/15 max-w-xl text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-karyag-gold shrink-0" />
                <span>Çelik Tanker & Flexitank</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-karyag-gold shrink-0" />
                <span>ISO & HACCP Standartları</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-karyag-gold shrink-0" />
                <span>COA Laboratuvar Onaylı</span>
              </div>
            </div>
          </div>

          {/* Sağ Glassmorphism Endüstriyel Kapasite & Çatı Kimlik Paneli */}
          <div className="lg:col-span-5">
            <div className="bg-[#1B2023]/80 backdrop-blur-xl border border-karyag-gold/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-karyag-gold/10 blur-2xl pointer-events-none" />

              <div className="flex flex-col items-center text-center border-b border-white/10 pb-6 mb-6">
                <img
  src="/images/logo/k-dikey.png"
  alt="KARYAĞ Gıda Tarım Sanayi"
  className="h-32 w-auto object-contain mx-auto"
/>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 hover:bg-white/10 transition p-4 rounded-2xl border border-white/10">
                  <Factory className="w-5 h-5 text-karyag-gold mb-2" />
                  <div className="font-display font-black text-2xl text-white">
                    4 Hatlı
                  </div>
                  <div className="text-xs font-semibold text-gray-200 mt-0.5">
                    Entegre Sanayi Döngüsü
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Sıkım • Pirina • Rafinasyon • Enerji
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 transition p-4 rounded-2xl border border-white/10">
                  <Gauge className="w-5 h-5 text-karyag-gold mb-2" />
                  <div className="font-display font-black text-2xl text-white">
                    Yüksek Tonaj
                  </div>
                  <div className="text-xs font-semibold text-gray-200 mt-0.5">
                    Çelik Silo & Depolama
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Azot Korumalı Paslanmaz Tanklar
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 transition p-4 rounded-2xl border border-white/10">
                  <FlaskConical className="w-5 h-5 text-karyag-gold mb-2" />
                  <div className="font-display font-black text-2xl text-white">
                    %99.9
                  </div>
                  <div className="text-xs font-semibold text-gray-200 mt-0.5">
                    Rafinasyon Saflığı
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Fiziksel & Kimyasal Arıtma
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 transition p-4 rounded-2xl border border-white/10">
                  <Award className="w-5 h-5 text-karyag-gold mb-2" />
                  <div className="font-display font-black text-2xl text-white">
                    3 Marka
                  </div>
                  <div className="text-xs font-semibold text-gray-200 mt-0.5">
                    Kurumsal Ekosistem
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    KARYAĞ • KADİVA • KAROLİVA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KURUMSAL SAYIŞLAR & ENDÜSTRİYEL GÜÇ BANTI */}
      <section className="bg-karyag-green text-white py-10 px-4 sm:px-8 border-b border-karyag-gold/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          <div className="pt-4 sm:pt-0 sm:px-6 first:pl-0">
            <div className="text-xs uppercase tracking-widest text-karyag-gold font-bold">
              ÜRETİM MODELİ
            </div>
            <div className="font-display font-black text-3xl mt-1">
              %100 Sıfır Atık
            </div>
            <div className="text-xs text-white/80 mt-1">
              Döngüsel Tarım ve Sanayi Ekosistemi
            </div>
          </div>
          <div className="pt-4 sm:pt-0 sm:px-6">
            <div className="text-xs uppercase tracking-widest text-karyag-gold font-bold">
              STRATEJİK KONUM
            </div>
            <div className="font-display font-black text-3xl mt-1">
              Polateli / KİLİS
            </div>
            <div className="text-xs text-white/80 mt-1">
              Zeytin Havzası ve İhracat Limanlarına Yakınlık
            </div>
          </div>
          <div className="pt-4 sm:pt-0 sm:px-6">
            <div className="text-xs uppercase tracking-widest text-karyag-gold font-bold">
              SEVKIYAT KAPASİTESİ
            </div>
            <div className="font-display font-black text-3xl mt-1">
              Dökme & Tanker
            </div>
            <div className="text-xs text-white/80 mt-1">
              Paslanmaz Çelik Gıda Tankeri, Flexitank & IBC
            </div>
          </div>
          <div className="pt-4 sm:pt-0 sm:px-6">
            <div className="text-xs uppercase tracking-widest text-karyag-gold font-bold">
              KALİTE GÜVENCESİ
            </div>
            <div className="font-display font-black text-3xl mt-1">
              COA & TDS
            </div>
            <div className="text-xs text-white/80 mt-1">
              Her Partide Akredite Laboratuvar Analizi
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO-GRID GÖRSEL FAALİYET ALANLARI */}
      <section className="py-24 px-4 sm:px-8 bg-karyag-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-karyag-green bg-karyag-green-light px-3.5 py-1.5 rounded-md border border-karyag-green/20">
                ENTEGRE SANAYİ ALTYAPIMIZ
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-karyag-steel mt-3">
                DÖRT AŞAMALI DÖNGÜSEL ÜRETİM
              </h2>
            </div>
            <Link
              href="/faaliyet-alanlarimiz"
              className="inline-flex items-center gap-2 text-sm font-bold text-karyag-green hover:text-karyag-green-dark group"
            >
              <span>Tüm Üretim ve Rafinasyon Süreçlerini İncele</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kart 1: Zeytinyağı Üretimi */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-karyag-steel-dark min-h-[360px] flex flex-col justify-end p-8 sm:p-10">
              <img
                src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1200"
                alt="Zeytinyağı Üretimi"
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161A1D] via-[#161A1D]/70 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase bg-karyag-gold text-karyag-steel-dark px-3 py-1 rounded-md">
                    01 • SIKIM VE EKSTRAKSİYON
                  </span>
                  <Droplets className="w-7 h-7 text-karyag-gold" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                  Zeytinyağı Üretimi (Natürel & Ham)
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-5">
                  Kilis coğrafyasının yüksek yağ oranlı zeytinleri, oksidasyonu
                  önleyen kapalı devre modern kontinü hatlarımızda işlenerek
                  natürel sızma ve endüstriyel ham zeytinyağına dönüştürülür.
                </p>
                <Link
                  href="/faaliyet-alanlarimiz#zeytinyagi"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-gold hover:text-white transition"
                >
                  <span>Teknik Detaylar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Kart 2: İleri Rafinasyon Tesisi */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-karyag-steel-dark min-h-[360px] flex flex-col justify-end p-8 sm:p-10">
              <img
                src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="İleri Rafinasyon Tesisi"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161A1D] via-[#161A1D]/75 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase bg-karyag-green text-white px-3 py-1 rounded-md">
                    02 • RAFİNERİ TEKNOLOJİSİ
                  </span>
                  <FlaskConical className="w-7 h-7 text-karyag-gold" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                  İleri Rafinasyon Tesisi
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-5">
                  Yüksek asitli ham zeytinyağı ve pirina yağları; nötralizasyon,
                  ağartma, vinterizasyon ve deodorizasyon hatlarımızda doğal
                  yapısı korunarak berrak, kokusuz ve yüksek dumanlanma noktalı
                  rafine yağa dönüştürülür.
                </p>
                <Link
                  href="/faaliyet-alanlarimiz#rafinasyon"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-gold hover:text-white transition"
                >
                  <span>Rafinasyon Standartlarımız</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Kart 3: Pirina Değerlendirme */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-karyag-steel-dark min-h-[360px] flex flex-col justify-end p-8 sm:p-10">
              <img
                src="https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Pirina Değerlendirme"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161A1D] via-[#161A1D]/75 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase bg-karyag-green text-white px-3 py-1 rounded-md">
                    03 • SIFIR ATIK EKONOMİSİ
                  </span>
                  <Recycle className="w-7 h-7 text-karyag-gold" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                  Pirina İşleme & Ekstraksiyon
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-5">
                  Zeytin sıkımından kalan yaş pirina, kurutma ve ekstraksiyon
                  ünitelerimizde işlenerek ham pirina yağı ve yüksek kalorili
                  ekolojik biyokütle yakıtına (pirina odunu/pelleti)
                  dönüştürülür.
                </p>
                <Link
                  href="/faaliyet-alanlarimiz#pirina"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-gold hover:text-white transition"
                >
                  <span>Döngüsel Üretim Modeli</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Kart 4: B2B Dökme Yağ Lojistiği */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-karyag-steel-dark min-h-[360px] flex flex-col justify-end p-8 sm:p-10">
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="B2B Lojistik"
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161A1D] via-[#161A1D]/75 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase bg-karyag-gold text-karyag-steel-dark px-3 py-1 rounded-md">
                    04 • ULUSAL & KÜRESEL TEDARİK
                  </span>
                  <Truck className="w-7 h-7 text-karyag-gold" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                  B2B Dökme Yağ Lojistiği
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-5">
                  Gıda sanayii, konserve/cips fabrikaları ve uluslararası
                  ithalatçılar için paslanmaz çelik gıda tankerleri, 24 tonluk
                  Flexitank konteynerler ve IBC tanklarla güvenli sevkiyat.
                </p>
                <Link
                  href="/b2b-lojistik"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-gold hover:text-white transition"
                >
                  <span>Lojistik & Tedarik Seçenekleri</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3'LÜ MARKA MİMARİSİ VİTRİNİ (KARYAĞ, KADİVA, KAROLİVA) */}
      <section className="py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-karyag-green bg-karyag-green-light px-4 py-1.5 rounded-md">
              KURUMSAL MARKA AİLEMİZ
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-karyag-steel mt-4">
              ÜÇLÜ MARKA MİMARİSİ
            </h2>
            <p className="text-sm sm:text-base text-karyag-steel-muted mt-3">
              KARYAĞ Gıda Tarım Sanayi çatı güvencesi altında; B2B dökme tedarik,
              natürel sızma mirası ve endüstriyel rafine performans için
              uzmanlaşmış marka yapımız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. KARYAĞ */}
            <div className="bg-karyag-steel-dark text-white rounded-3xl p-9 border-t-8 border-karyag-gold shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-widest uppercase bg-karyag-gold text-karyag-steel-dark px-3 py-1 rounded">
                    ÇATI / HOLDİNG MARKASI
                  </span>
                </div>
                <div className="font-display font-black text-4xl tracking-wider text-white mt-6">
                  KARYAĞ
                </div>
                <div className="text-[10px] tracking-[0.34em] text-karyag-gold font-semibold mt-1 mb-5">
                  GIDA TARIM SANAYİ
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Entegre tesisimizin tüm üretim, rafinasyon, laboratuvar ve
                  yüksek tonajlı B2B dökme yağ sözleşmelerini yürüten ana sanayi
                  kuruluşumuz.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/marka-mimarimiz"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-gold hover:text-white"
                >
                  <span>Çatı Marka Standartları</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 2. KADİVA */}
            <div className="bg-karyag-bg rounded-3xl p-9 border border-gray-200 border-t-8 border-t-karyag-green shadow-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase bg-karyag-green text-white px-3 py-1 rounded">
                  NATÜREL & GURME SERİSİ
                </span>
                <div className="font-display font-black text-4xl tracking-wider text-karyag-green mt-6">
                  KADİVA
                </div>
                <div className="text-[10px] tracking-[0.25em] text-karyag-steel font-bold mt-1 mb-5 uppercase">
                  DOĞALLIK & SIZMA ZEYTİNYAĞI
                </div>
                <p className="text-sm text-karyag-steel-muted leading-relaxed">
                  Kilis topraklarının asırlık zeytin ağaçlarından soğuk sıkım
                  disipliniyle elde edilen, yüksek polifenol ve meyvemsi aroma
                  profiline sahip seçkin natürel seri.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/marka-mimarimiz"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-green hover:text-karyag-green-dark"
                >
                  <span>KADİVA Serisini Keşfet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 3. KAROLİVA */}
            <div className="bg-karyag-bg rounded-3xl p-9 border border-gray-200 border-t-8 border-t-karyag-steel shadow-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase bg-karyag-steel text-white px-3 py-1 rounded">
                  ENDÜSTRİYEL & HORECA SERİSİ
                </span>
                <div className="font-display font-black text-4xl tracking-wider text-karyag-steel mt-6">
                  KAROLİVA
                </div>
                <div className="text-[10px] tracking-[0.25em] text-karyag-gold font-bold mt-1 mb-5 uppercase">
                  RAFİNE & PİRİNA YAĞI ÇÖZÜMLERİ
                </div>
                <p className="text-sm text-karyag-steel-muted leading-relaxed">
                  Gıda imalatçıları, endüstriyel mutfaklar ve ihracat pazarları
                  için yüksek dumanlanma noktası, nötr tat ve maksimum
                  stabilite sunan rafine zeytinyağı ve pirina yağı serisi.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/marka-mimarimiz"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-steel hover:text-karyag-green"
                >
                  <span>KAROLİVA Serisini Keşfet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALT B2B TEKLİF & ANALİZ SERTİFİKASI ÇAĞRI BANTI */}
      <section className="py-16 px-4 sm:px-8 bg-karyag-steel-dark text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-karyag-green-dark via-karyag-green to-[#244420] p-10 sm:p-14 border border-karyag-gold/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-karyag-gold">
              <FileCheck2 className="w-4 h-4" />
              <span>B2B SATINALMA & İHRACAT DEPARTMANI</span>
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
              Yıllık Tedarik Sözleşmeleri ve Dökme Tanker Teklifleri İçin Bizimle İletişime Geçin
            </h3>
            <p className="text-sm text-gray-100 leading-relaxed">
              Üretim prosesinize uygun serbest yağ asitliği, peroksit ve
              spektrofotometrik analiz değerlerine (COA / TDS) sahip numune ve
              tonajlı fiyat teklifi talepleriniz aynı iş günü içinde
              yanıtlanır.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2.5 bg-karyag-gold hover:bg-[#e0bc4c] text-karyag-steel-dark font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition"
            >
              <span>Hemen B2B Teklif İste</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/b2b-lojistik"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-4 rounded-xl border border-white/25 transition"
            >
              <span>Lojistik Standartlarımız</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}