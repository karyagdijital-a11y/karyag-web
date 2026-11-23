import Link from "next/link";
import Image from "next/image";
import {
  Recycle,
  Sprout,
  Sun,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import HeroVideoSlider from "@/components/home/HeroVideoSlider";
import CircularStorySection from "@/components/home/CircularStorySection";
import OriginStorySection from "@/components/home/OriginStorySection";
import ExportMapSection from "@/components/export/ExportMapSection";

const valuePillars = [
  {
    title: "%100 Sıfır Atık",
    subtitle: "Sonsuz Döngü",
    desc: "Zeytinin tek bir zerresini dahi ziyan etmeden doğaya yeniden hayat veriyoruz.",
    icon: Recycle,
  },
  {
    title: "Kadim Toprak Mirası",
    subtitle: "Kilis Bereketi",
    desc: "Yüzyıllardır zeytine yurt olmuş bereketli toprakların kültürünü yaşatıyoruz.",
    icon: Sprout,
  },
  {
    title: "Saf ve Özenli Ustalık",
    subtitle: "Altın Damla",
    desc: "Meyvenin özünü ve tazeliğini koruyan hassas işleme anlayışıyla üretiyoruz.",
    icon: OliveDropIcon,
  },
  {
    title: "Yarına Sorumluluk",
    subtitle: "Yaşayan Gelecek",
    desc: "Toprağı, suyu ve emeği koruyarak gelecek nesillere temiz bir miras bırakıyoruz.",
    icon: Sun,
  },
];

const brandStories = [
  {
    badge: "ÇATI MARKA • MİRAS & GÜÇ",
    name: "KARYAĞ",
    logo: "/images/logo/k-siyah.png",
    mockup: "/images/mockups/marka-ailesi.jpg",
    tagline: "Toprağın Bereketi, Geleceğin Güvencesi",
    story:
      "Bütün bir hikâyenin kalbi ve koruyucu çatısı. Kilis’in bereketli topraklarından doğan zeytin kültürünü, sıfır atık vizyonu ve köklü güven anlayışıyla yarınlara taşıyan ana markamız.",
    accentBorder: "hover:border-karyag-green/60",
    badgeStyle: "bg-karyag-green-light text-karyag-green",
    href: "/marka-mimarimiz#karyag",
  },
  {
    badge: "GURME SERİ • DOĞALLIK & ZARAFET",
    name: "KADİVA",
    logo: "/images/logo/kadiva-logo.jpg",
    mockup: "/images/mockups/kadiva-sise.jpg",
    tagline: "Sofralara Süzülen Saf Zarafet",
    story:
      "Güneşin ve toprağın en saf armağanı. Asırlık ağaçların özenle seçilmiş zeytinlerinden damla damla süzülen, her sofraya doğallık, sıcaklık ve incelikli bir lezzet katan seçkin seri.",
    accentBorder: "hover:border-karyag-gold",
    badgeStyle: "bg-karyag-gold-light text-karyag-gold-dark",
    href: "/marka-mimarimiz#kadiva",
  },
  {
    badge: "PROFESYONEL SERİ • USTALIK & İSTİKRAR",
    name: "KAROLİVA",
    logo: "/images/logo/karoliva-logo.jpg",
    mockup: "/images/mockups/karoliva-teneke.jpg",
    tagline: "Büyük Mutfakların Değişmeyen Eşlikçisi",
    story:
      "Lezzete tutkuyla bağlı şeflerin ve seçkin mutfakların en güvenilir yol arkadaşı. Her tarifte aynı berraklığı, yüksek ısı dayanımını ve ustalığı sunmak için özenle hazırlandı.",
    accentBorder: "hover:border-karyag-steel/50",
    badgeStyle: "bg-stone-100 text-karyag-steel",
    href: "/marka-mimarimiz#karoliva",
  },
];

export default function HomePage() {
  return (
    <div className="bg-karyag-ivory">
      {/* 1. PREMIUM VİDEO & EDİTORYAL SLIDER */}
      <HeroVideoSlider />

      {/* 2. SLAYT ALTI İKONLU DEĞERLER BANDI */}
      <section className="relative z-20 -mt-10 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valuePillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-karyag-gold shadow-[0_14px_40px_-15px_rgba(30,35,38,0.1)] hover:shadow-[0_20px_45px_-12px_rgba(200,162,74,0.22)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-karyag-gold via-karyag-green to-karyag-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-karyag-gold-light text-karyag-gold-dark group-hover:bg-karyag-green group-hover:text-white group-hover:rotate-3 flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-karyag-gold-dark">
                      {item.subtitle}
                    </div>
                    <h2 className="font-serif font-semibold text-lg text-karyag-steel-dark mt-0.5">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-karyag-steel-muted leading-relaxed mt-4">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 4 AŞAMALI DÖNGÜSEL ÜRETİM HİKÂYESİ */}
      <CircularStorySection />

      {/* 4. KİLİS MENŞE HİKÂYESİ & MUTFAK KULLANIM REHBERİ */}
      <OriginStorySection />

      {/* 5. GERÇEK LOGOLU & MOCKUPLI ÜÇLÜ MARKA MİMARİSİ */}
      <section className="py-24 px-4 sm:px-8 bg-karyag-ivory border-t border-stone-200/70">
        <div className="max-w-[1380px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
                <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
                <span>MARKA AİLEMİZ</span>
              </div>
              <h2 className="font-serif font-semibold text-3xl sm:text-5xl text-karyag-steel-dark">
                Üç Marka,{" "}
                <span className="italic text-karyag-gold-dark font-medium">
                  Tek Bir Asırlık Sevda
                </span>
              </h2>
            </div>

            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-steel-dark hover:text-karyag-green border-b border-karyag-gold pb-1.5 w-fit transition group"
            >
              <span>Ambalaj Bazlı Kataloğu İncele</span>
              <ArrowRight className="w-4 h-4 text-karyag-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brandStories.map((brand) => (
              <div
                key={brand.name}
                className={`group bg-white rounded-3xl overflow-hidden border border-stone-200/80 ${brand.accentBorder} shadow-xs hover:shadow-[0_24px_55px_-18px_rgba(30,35,38,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* 3:2 Tam Oran Mockup Alanı */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-karyag-cream border-b border-stone-200/60">
                    <Image
                      src={brand.mockup}
                      alt={`${brand.name} Ürün Koleksiyonu`}
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <span
                      className={`absolute top-4 left-4 text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs ${brand.badgeStyle}`}
                    >
                      {brand.badge}
                    </span>
                  </div>

                  <div className="p-7 sm:p-8">
                    {/* 2000x2000 Kare Logolar İçin Dengeli & Şeffaf Harmanı */}
                    <div className="bg-karyag-ivory rounded-2xl border border-stone-200/70 px-5 py-3 mb-5 flex items-center justify-center h-32">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} Resmi Logosu`}
                        width={400}
                        height={400}
                        unoptimized
                        className={`w-auto object-contain mix-blend-multiply ${
                          brand.name === "KARYAĞ" ? "max-h-14" : "max-h-28"
                        }`}
                      />
                    </div>

                    <p className="font-serif italic text-base text-karyag-gold-dark mb-3">
                      {brand.tagline}
                    </p>
                    <p className="text-sm text-karyag-steel-muted leading-relaxed">
                      {brand.story}
                    </p>
                  </div>
                </div>

                <div className="px-7 sm:px-8 pb-7 pt-4 border-t border-stone-200/60">
                  <Link
                    href={brand.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-steel-dark group-hover:text-karyag-green transition-colors"
                  >
                    <span>{brand.name} Hikâyesini Keşfet</span>
                    <ArrowRight className="w-4 h-4 text-karyag-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KÜRESEL İHRACAT HARİTASI */}
      <ExportMapSection />

      {/* 7. ZARİF İŞ BİRLİĞİ & PRIVATE LABEL DAVETİ */}
      <section className="py-20 px-4 sm:px-8 bg-karyag-ivory">
        <div className="max-w-[1380px] mx-auto rounded-3xl bg-white p-10 sm:p-14 border border-karyag-gold/35 shadow-[0_20px_60px_-20px_rgba(200,162,74,0.18)] flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-karyag-gold-light blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-karyag-gold-dark">
              <HeartHandshake className="w-4 h-4 text-karyag-green" />
              <span>GÜVENE DAYALI İŞ BİRLİKLERİ</span>
            </div>
            <h3 className="font-serif font-semibold text-3xl sm:text-4xl text-karyag-steel-dark leading-snug">
              Toprağın Bereketini Birlikte Geleceğe Taşıyalım
            </h3>
            <p className="text-sm sm:text-base text-karyag-steel-muted leading-relaxed">
              Markalarımız, Private Label üretim çözümlerimiz veya uluslararası
              ihracat talepleriniz için ekibimizle her zaman iletişime
              geçebilirsiniz.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2.5 bg-karyag-green hover:bg-karyag-green-dark text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-md transition-all group"
            >
              <span>Bizimle İletişime Geçin</span>
              <ArrowRight className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/private-label"
              className="inline-flex items-center justify-center gap-2 bg-karyag-cream hover:bg-karyag-gold-light text-karyag-steel-dark font-semibold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-full border border-karyag-gold/40 transition-all"
            >
              <span>Private Label & İhracat</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}