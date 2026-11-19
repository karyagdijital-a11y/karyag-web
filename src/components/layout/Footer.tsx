import Link from "next/link";
import Image from "next/image";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import {
  MapPin,
  Phone,
  Mail,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

const corporateFooterLinks = [
  { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
  { label: "Misyon & Vizyon", href: "/kurumsal/misyon-vizyon" },
  { label: "Tarihçe", href: "/kurumsal/tarihce" },
  { label: "Kalite Politikamız", href: "/kurumsal/kalite-politikamiz" },
  { label: "Tesisimiz", href: "/kurumsal/tesisimiz" },
  { label: "Belgelerimiz", href: "/kurumsal/belgelerimiz" },
  { label: "Çevre & Sürdürülebilirlik", href: "/kurumsal/cevre-ve-surdurulebilirlik" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-karyag-steel border-t border-karyag-gold/35">
      {/* Üst İnce Altın-Yeşil Zarif Vurgu Çizgisi */}
      <div className="h-[3px] w-full bg-gradient-to-r from-karyag-cream via-karyag-gold to-karyag-green/60" />

      {/* Ana Footer Alanı */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* 1. Sütun (4 Birim): Marka Hikâyesi & Açık Zemin Yatay Logo */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/k-siyah.png"
              alt="KARYAĞ Gıda Tarım Sanayi"
              width={1500}
              height={433}
              unoptimized
              className="h-[62px] w-auto object-contain"
            />
          </Link>

          <p className="text-xs sm:text-[13.5px] text-karyag-steel-muted leading-relaxed max-w-sm">
            Kilis’in asırlık zeytin mirasını doğaya saygılı, sıfır atık
            felsefesiyle geleceğe taşıyan; toprağın bereketini saf bir ustalığa
            dönüştüren marka ailesi.
          </p>

          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-wider text-karyag-green bg-karyag-green-light/80 px-3.5 py-2 rounded-full border border-karyag-green/20">
            <Leaf className="w-3.5 h-3.5 text-karyag-green shrink-0" />
            <span>%100 Sıfır Atık • Doğaya Saygılı Üretim</span>
          </div>
        </div>

        {/* 2. Sütun (3 Birim): Kurumsal Sayfalar */}
        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark mb-5 pb-2.5 border-b border-karyag-gold/25">
            Kurumsal
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-[13px] text-karyag-steel-muted font-medium">
            {corporateFooterLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 hover:text-karyag-green transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-karyag-gold group-hover:bg-karyag-green transition-colors" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Sütun (2 Birim): Marka Ailemiz & Keşfet */}
        <div className="lg:col-span-2">
          <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark mb-5 pb-2.5 border-b border-karyag-gold/25">
            Marka Ailemiz
          </h3>
          <ul className="space-y-3.5 text-xs">
            <li>
              <Link href="/marka-mimarimiz" className="group block">
                <span className="font-bold text-karyag-steel-dark group-hover:text-karyag-green transition block">
                  KARYAĞ
                </span>
                <span className="text-[11px] text-karyag-steel-muted">
                  Çatı Marka & Miras
                </span>
              </Link>
            </li>
            <li>
              <Link href="/marka-mimarimiz" className="group block">
                <span className="font-bold text-karyag-steel-dark group-hover:text-karyag-gold-dark transition block">
                  KADİVA
                </span>
                <span className="text-[11px] text-karyag-steel-muted">
                  Gurme Natürel Sızma
                </span>
              </Link>
            </li>
            <li>
              <Link href="/marka-mimarimiz" className="group block">
                <span className="font-bold text-karyag-steel-dark group-hover:text-karyag-green transition block">
                  KAROLİVA
                </span>
                <span className="text-[11px] text-karyag-steel-muted">
                  Profesyonel & Mutfak Serisi
                </span>
              </Link>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-stone-100 space-y-2 text-xs font-medium text-karyag-steel-muted">
            <Link
              href="/faaliyet-alanlarimiz"
              className="block hover:text-karyag-green transition"
            >
              Faaliyet Alanlarımız
            </Link>
            <Link
              href="/b2b-lojistik"
              className="block hover:text-karyag-green transition"
            >
              B2B Lojistik
            </Link>
          </div>
        </div>

        {/* 4. Sütun (3 Birim): Üretim Yuvamız & İletişim */}
        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark mb-5 pb-2.5 border-b border-karyag-gold/25">
            Üretim Yuvamız & İletişim
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-[13px] text-karyag-steel-muted">
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
              className="inline-flex items-center gap-2 bg-karyag-cream hover:bg-karyag-green text-karyag-steel-dark hover:text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full border border-karyag-gold/50 hover:border-karyag-green transition-all duration-300 group"
            >
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold group-hover:text-karyag-gold-light" />
              <span>Bizimle İletişime Geçin</span>
              <ArrowUpRight className="w-4 h-4 text-karyag-gold group-hover:text-karyag-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Telif Barı (Sıcak Krem Zemin) */}
      <div className="border-t border-karyag-gold/20 bg-karyag-cream/75 py-5 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-karyag-steel-muted">
          <div>
            © 2026{" "}
            <strong className="text-karyag-steel-dark font-semibold">
              KARYAĞ Gıda San. ve Tic. A.Ş.
            </strong>{" "}
            Tüm hakları saklıdır.
          </div>
          <div className="text-[11px] text-karyag-steel-muted">
            Kurumsal Kimlik & Web Mimarisi:{" "}
            <span className="text-karyag-steel-dark font-semibold">
              Ela Teknoloji
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}