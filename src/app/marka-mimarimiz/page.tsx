import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

export const metadata: Metadata = {
  title: "Marka Mimarimiz",
  description:
    "KARYAĞ çatı güvencesi altında sofralara zarafet katan KADİVA ve profesyonel mutfakların güven ortağı KAROLİVA.",
};

const brandFamily = [
  {
    id: "karyag",
    name: "KARYAĞ",
    role: "ÇATI MARKA • MİRAS & DÖNGÜSEL GÜÇ",
    tagline: "Toprağın Bereketinden Geleceğe Uzanan Kök",
    accentLine: "bg-karyag-green",
    badgeClass: "bg-karyag-green-light text-karyag-green",
    logo: "/images/logo/k-siyah.png",
    mockups: [
      {
        src: "/images/mockups/marka-ailesi.jpg",
        caption: "KARYAĞ Çatısı Altında Bütüncül Ürün Ailesi",
      },
    ],
    story: [
      "KARYAĞ, bütün bir marka ailemizin kalbi, vicdanı ve koruyucu çatısıdır. Kilis’in bereketli topraklarında kök salan bu büyük yapı; zeytinyağı üretiminden pirina değerlendirmesine ve temiz biyokütle enerjisine kadar her halkayı sıfır atık bilinciyle yönetir.",
      "Ulusal ve uluslararası iş ortaklarımız için yüksek tonajlı tedarikin, şeffaf laboratuvar güvencesinin ve kesintisiz sanayi disiplininin temsilcisi olan KARYAĞ, alt markalarımız KADİVA ve KAROLİVA’ya güç ve itibar verir.",
    ],
    attributes: [
      "Çatı kuruluş güvencesi ve entegre tesis altyapısı",
      "%100 sıfır atık ve döngüsel üretim felsefesi",
      "Ulusal ve küresel B2B dökme tedarik uzmanlığı",
    ],
  },
  {
    id: "kadiva",
    name: "KADİVA",
    role: "GURME SERİ • DOĞALLIK & ZARAFET",
    tagline: "Kilis’in Asırlık Ağaçlarından Sofralara Süzülen Saf Altın",
    accentLine: "bg-karyag-gold",
    badgeClass: "bg-karyag-gold-light text-karyag-gold-dark",
    logo: "/images/logo/kadiva-logo.jpg",
    mockups: [
      {
        src: "/images/mockups/kadiva-sise.jpg",
        caption: "Natürel Sızma 500 ml Koyu Cam Şişe Serisi",
      },
      {
        src: "/images/mockups/kadiva-seri.jpg",
        caption: "Cam Şişe, Hediye Kutusu & Butik Teneke Koleksiyonu",
      },
    ],
    story: [
      "KADİVA, doğallığın en zarif ve en seçkin yorumudur. Adını toprağın kadim mirasına duyduğumuz hayranlıktan alan bu özel seri, hasat sabahının tazeliğini ve zeytinin en saf aromasını sofralara taşımak için doğdu.",
      "Özenle seçilmiş zeytinlerin soğuk sıkım inceliğiyle işlenmesi sonucu ortaya çıkan KADİVA; meyvemsi karakteri, dengeli yakıcılığı ve altın parlaklığıyla her sofrayı bir lezzet şölenine dönüştürür.",
    ],
    attributes: [
      "Seçkin natürel sızma ve erken hasat koleksiyonu",
      "Yüksek polifenol ve zengin meyvemsi aroma profili",
      "Butik cam şişe, kutu ve özel teneke ambalaj estetiği",
    ],
  },
  {
    id: "karoliva",
    name: "KAROLİVA",
    role: "PROFESYONEL & HORECA SERİSİ • USTALIK & İSTİKRAR",
    tagline: "Büyük Mutfakların ve Şeflerin Değişmeyen Yol Arkadaşı",
    accentLine: "bg-karyag-steel",
    badgeClass: "bg-stone-100 text-karyag-steel-dark",
    logo: "/images/logo/karoliva-logo.jpg",
    mockups: [
      {
        src: "/images/mockups/karoliva-teneke.jpg",
        caption: "5L Metal Teneke & 750 ml Cam Şişe Serisi",
      },
      {
        src: "/images/mockups/karoliva-horeca.jpg",
        caption: "Yüksek Isıya Dayanıklı HoReCa Mutfak Çözümü",
      },
    ],
    story: [
      "Profesyonel bir mutfakta en büyük güven, her gün ve her tarifte aynı kusursuz sonucu alabilmektir. KAROLİVA; şeflerin, seçkin restoranların, otellerin ve gıda üreticilerinin yüksek temposuna eşlik etmek üzere özenle geliştirildi.",
      "Yüksek ısıya karşı üstün dayanımı, berrak yapısı ve yemeklerin kendi lezzetini gölgelemeyen dengeli karakteriyle KAROLİVA, rafine zeytinyağı ve pirina yağı çözümlerinde profesyonellerin vazgeçilmez tercihi olur.",
    ],
    attributes: [
      "HoReCa ve gıda sanayiine özel yüksek ısı performansı",
      "Her partide aynı berraklık, denge ve tat tutarlılığı",
      "5L ve 18L dayanıklı metal teneke ambalaj seçenekleri",
    ],
  },
];

export default function MarkaMimarimizPage() {
  return (
    <div className="bg-karyag-ivory min-h-screen">
      {/* 1. FLU EDİTORYAL BANNER */}
      <section className="relative overflow-hidden border-b border-karyag-gold/30 py-20 sm:py-28 px-4 sm:px-8 bg-[#F6F3EC]">
        <img
          src="/images/mockups/marka-ailesi.jpg"
          alt="KARYAĞ, KADİVA ve KAROLİVA Marka Ailesi"
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
              Marka Mimarimiz
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>ÜÇLÜ MARKA EKOSİSTEMİMİZ</span>
            </div>

            <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-karyag-steel-dark leading-[1.12]">
              Üç Özgün Kimlik,{" "}
              <span className="italic text-karyag-gold-dark font-medium block sm:inline">
                Tek Bir Asırlık Sevda
              </span>
            </h1>

            <p className="text-base sm:text-lg text-karyag-steel/85 leading-relaxed max-w-2xl">
              Aynı bereketli topraktan doğan ama farklı beklentilere incelikle
              yanıt veren marka ailemizle, gurme sofralardan dev mutfaklara kadar
              aynı güveni taşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ÜÇ MARKANIN HİKÂYE & MOCKUP VİTRİNİ */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto space-y-14">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-karyag-gold/30 shadow-2xs flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-karyag-gold-light text-karyag-gold-dark flex items-center justify-center shrink-0">
              <Quote className="w-5 h-5" />
            </div>
            <p className="font-serif italic text-lg sm:text-xl text-karyag-steel-dark leading-relaxed">
              “Her markamız, zeytinin farklı bir yüzünü anlatır: KARYAĞ köklü
              gücünü, KADİVA saf zarafetini, KAROLİVA ise mutfaktaki sarsılmaz
              ustalığını temsil eder.”
            </p>
          </div>

          <div className="space-y-14">
            {brandFamily.map((brand) => (
              <article
                key={brand.id}
                id={brand.id}
                className="scroll-mt-32 bg-white rounded-3xl border border-stone-200/80 shadow-2xs overflow-hidden"
              >
                <div className={`h-1.5 w-full ${brand.accentLine}`} />

                <div className="p-8 sm:p-12 lg:p-14 space-y-10">
                  {/* Üst: Logo + Hikâye */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Sol: Resmi Logo Kartı (2000x2000 Kare & Yatay Uyumlu) */}
                    <div className="lg:col-span-4 bg-karyag-ivory rounded-2xl p-8 border border-karyag-gold/25 flex flex-col items-center text-center space-y-5">
                      <span
                        className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full ${brand.badgeClass}`}
                      >
                        {brand.role}
                      </span>

                      <div className="w-full bg-white rounded-2xl border border-stone-200/70 px-6 py-4 flex items-center justify-center h-44">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} Resmi Logosu`}
                          width={400}
                          height={400}
                          unoptimized
                          className={`w-auto object-contain mix-blend-multiply ${
                            brand.id === "karyag" ? "max-h-16" : "max-h-36"
                          }`}
                        />
                      </div>

                      <p className="font-serif italic text-sm text-karyag-gold-dark leading-relaxed">
                        {brand.tagline}
                      </p>
                    </div>

                    {/* Sağ: Hikâye & Özellikler */}
                    <div className="lg:col-span-8 space-y-6">
                      <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-karyag-steel-dark">
                        {brand.name} Hikâyesi
                      </h2>

                      <div className="space-y-4 text-sm sm:text-[15.5px] text-karyag-steel/90 leading-[1.85]">
                        {brand.story.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                        {brand.attributes.map((attr) => (
                          <div
                            key={attr}
                            className="bg-karyag-ivory rounded-xl p-4 border border-karyag-gold/25 flex items-start gap-2.5 text-xs text-karyag-steel-dark leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-karyag-green shrink-0 mt-0.5" />
                            <span>{attr}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Alt: 3:2 Tam Oran Ürün Mockup Galerisi */}
                  <div
                    className={`grid grid-cols-1 ${
                      brand.mockups.length > 1
                        ? "md:grid-cols-2"
                        : "max-w-4xl mx-auto"
                    } gap-6 pt-6 border-t border-stone-100`}
                  >
                    {brand.mockups.map((mockup) => (
                      <figure
                        key={mockup.src}
                        className="group rounded-2xl overflow-hidden border border-stone-200/80 bg-karyag-cream/50"
                      >
                        <div className="relative aspect-[3/2] w-full overflow-hidden">
                          <Image
                            src={mockup.src}
                            alt={mockup.caption}
                            fill
                            unoptimized
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <figcaption className="px-5 py-3.5 bg-white border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-karyag-steel-dark">
                          <span className="inline-flex items-center gap-2">
                            <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
                            <span>{mockup.caption}</span>
                          </span>
                          <Link
                            href="/iletisim"
                            className="text-karyag-gold-dark hover:text-karyag-green inline-flex items-center gap-1 transition shrink-0 ml-3"
                          >
                            <span>Bilgi Al</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}