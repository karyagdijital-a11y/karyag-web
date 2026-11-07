import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-karyag-steel-dark text-white border-t-4 border-karyag-gold">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* 1. Sütun (4 Birim): Koyu Zemin Dikey Logo (/images/logo/k-dikey.png) */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/k-dikey.png"
              alt="KARYAĞ Gıda Tarım Sanayi"
              width={190}
              height={135}
              className="h-28 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
            Zeytinyağı üretimi, pirina değerlendirmesi ve ileri rafinasyon
            süreçlerini %100 sıfır atık prensibiyle tek çatı altında birleştiren
            entegre sanayi kuruluşu.
          </p>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-karyag-gold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <ShieldCheck className="w-4 h-4 text-karyag-gold shrink-0" />
            <span>ISO 9001 • ISO 22000 • HACCP • IOOC</span>
          </div>
        </div>

        {/* 2. Sütun (3 Birim): Faaliyet Alanları */}
        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold tracking-widest uppercase text-karyag-gold mb-5 border-b border-white/10 pb-2.5">
            Entegre Üretim & Rafinasyon
          </h3>
          <ul className="space-y-3 text-xs text-gray-300 font-medium">
            <li>
              <Link
                href="/faaliyet-alanlarimiz#zeytinyagi"
                className="hover:text-karyag-gold transition"
              >
                Zeytinyağı Üretimi (Natürel & Ham)
              </Link>
            </li>
            <li>
              <Link
                href="/faaliyet-alanlarimiz#rafinasyon"
                className="hover:text-karyag-gold transition"
              >
                İleri Rafinasyon Tesisi
              </Link>
            </li>
            <li>
              <Link
                href="/faaliyet-alanlarimiz#pirina"
                className="hover:text-karyag-gold transition"
              >
                Pirina Değerlendirme & Ekstraksiyon
              </Link>
            </li>
            <li>
              <Link
                href="/faaliyet-alanlarimiz#biyokutle"
                className="hover:text-karyag-gold transition"
              >
                Biyokütle & Yenilenebilir Enerji
              </Link>
            </li>
            <li>
              <Link
                href="/b2b-lojistik"
                className="hover:text-karyag-gold transition"
              >
                B2B Dökme Yağ Lojistiği (Tanker / Flexitank)
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Sütun (2 Birim): Marka Mimarisi */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold tracking-widest uppercase text-karyag-gold mb-5 border-b border-white/10 pb-2.5">
            Marka Mimarimiz
          </h3>
          <ul className="space-y-3 text-xs text-gray-300">
            <li>
              <Link href="/marka-mimarimiz" className="group block">
                <span className="font-bold text-white group-hover:text-karyag-gold transition block">
                  KARYAĞ
                </span>
                <span className="text-[11px] text-gray-400">
                  Çatı Sanayi & B2B Tedarik
                </span>
              </Link>
            </li>
            <li>
              <Link href="/marka-mimarimiz" className="group block">
                <span className="font-bold text-white group-hover:text-karyag-gold transition block">
                  KADİVA
                </span>
                <span className="text-[11px] text-gray-400">
                  Doğallık & Natürel Sızma
                </span>
              </Link>
            </li>
            <li>
              <Link href="/marka-mimarimiz" className="group block">
                <span className="font-bold text-white group-hover:text-karyag-gold transition block">
                  KAROLİVA
                </span>
                <span className="text-[11px] text-gray-400">
                  Endüstriyel & Profesyonel Seri
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Sütun (3 Birim): Fabrika & Merkez İletişim */}
        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold tracking-widest uppercase text-karyag-gold mb-5 border-b border-white/10 pb-2.5">
            Üretim Üssü & İletişim
          </h3>
          <ul className="space-y-3.5 text-xs text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-karyag-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Güldüzü / Yeşilpınar Mevkii, Polateli Organize Sanayi Bölgesi
                Yakını, Polateli / KİLİS
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-karyag-gold shrink-0" />
              <span>info@karyag.com • satis@karyag.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-karyag-gold shrink-0" />
              <span>www.karyag.com</span>
            </li>
          </ul>

          <div className="mt-6">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 text-xs font-bold text-karyag-gold hover:text-white transition"
            >
              <span>B2B Tedarik & Teklif Formu</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Telif Barı */}
      <div className="border-t border-white/10 bg-[#181C1F] py-5 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <div>
            © 2026 <strong className="text-white">KARYAĞ Gıda San. ve Tic. A.Ş.</strong> Tüm hakları saklıdır.
          </div>
          <div className="text-[11px] text-gray-500">
            Kurumsal Kimlik & Web Mimarisi:{" "}
            <span className="text-gray-300 font-semibold">Ela Teknoloji</span>
          </div>
        </div>
      </div>
    </footer>
  );
}