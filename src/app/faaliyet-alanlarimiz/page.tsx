import Link from "next/link";
import type { Metadata } from "next";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import {
  Droplets,
  Recycle,
  Flame,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Faaliyet Alanlarımız",
  description:
    "Zeytinin dalından saf zeytinyağına, berrak rafinasyondan sıfır atık biyokütle enerjisine uzanan dört aşamalı döngüsel hikâyemiz.",
};

const activityStages = [
  {
    id: "zeytinyagi",
    number: "01",
    eyebrow: "HASAT & NAZİK SIKIM",
    title: "Zeytinyağı Üretimi",
    subtitle: "Sabahın Serinliğinden Kehribar Damlalara",
    icon: Droplets,
    image:
      "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1400",
    paragraphs: [
      "Her hasat mevsimi, Kilis’in güneşle olgunlaşmış zeytin bahçelerinde sessiz bir bayram gibi başlar. Dallarından zedelenmeden toplanan zeytinler, tazeliğini ve canlı meyvemsi kokusunu kaybetmeden Polateli’deki üretim yuvamıza ulaşır.",
      "Kapalı devre modern sistemlerimizde meyvenin doğasına hürmet edilerek gerçekleştirilen sıkım süreci, zeytinin özündeki şifayı, dengeli aromasını ve doğal karakterini korur. Böylece hem gurme sofralara layık natürel sızma hem de ileri süreçler için yüksek saflıkta ham zeytinyağı elde edilir.",
    ],
    highlights: [
      "Hasat sonrası bekletmeden, ilk tazeliğiyle işleme",
      "Doğal aromayı ve polifenol zenginliğini koruyan hassas sıkım",
      "Hava ve ışık temasını kesen hijyenik kapalı devre akış",
    ],
  },
  {
    id: "rafinasyon",
    number: "02",
    eyebrow: "BERRAKLIK & DENGE USTALIĞI",
    title: "İleri Rafinasyon Tesisi",
    subtitle: "Doğal Özü Koruyan İncelikli Arıtma",
    icon: OliveDropIcon,
    image:
      "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1400",
    paragraphs: [
      "Her zeytin tanesi aynı kaderi paylaşmaz; yüksek asit oranına sahip ham yağlar, ancak sabırlı ve incelikli bir arıtma ustalığıyla berrak bir değere dönüşebilir. Tesisimizdeki ileri rafinasyon hattı, doğanın bu armağanını en dengeli ve saf haline kavuşturmak için çalışır.",
      "Kokusuz, berrak ve yüksek ısıya karşı olağanüstü dirençli rafine yağlarımız; profesyonel mutfakların ve gıda dünyasının aradığı değişmeyen istikrarı sunar. Her damlada hissedilen o sakin denge, modern mühendisliğin doğayla kurduğu uyumlu diyaloğun eseridir.",
    ],
    highlights: [
      "Uluslararası gıda kodeksine tam uyumlu yüksek saflık",
      "Yüksek ısı dayanımı ve profesyonel mutfaklarda kusursuz stabilite",
      "Her partide kayıtlı ve izlenebilir laboratuvar güvencesi",
    ],
  },
  {
    id: "pirina",
    number: "03",
    eyebrow: "SIFIR KAYIP • İKİNCİ ARMAĞAN",
    title: "Pirina Değerlendirme & Ekstraksiyon",
    subtitle: "Zeytinin Hiçbir Zerresini Ziyan Etmeyen Bilinç",
    icon: Recycle,
    image:
      "https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=1400",
    paragraphs: [
      "Zeytinyağı sıkımı sona erdiğinde birçokları için süreç biter; KARYAĞ içinse doğaya duyulan vefanın en anlamlı bölümü yeni başlar. Sıkımdan geriye kalan yaş pirina, bizim gözümüzde asla bir atık değil; toprağın bize sunduğu ikinci bir hazinedir.",
      "Özenle kurutulan ve kapalı sistemlerde değerlendirilen pirinadan elde edilen ham pirina yağı, rafinasyon sürecinden geçerek profesyonel mutfaklara ve sanayiye yüksek performanslı bir değer olarak yeniden kazandırılır.",
    ],
    highlights: [
      "Çevreye tek damla zarar bırakmayan kapalı devre değerlendirme",
      "Ham zeytin posasından yüksek katma değerli doğal geri kazanım",
      "Bölge zeytin üreticileri için sürdürülebilir ekosistem desteği",
    ],
  },
  {
    id: "biyokutle",
    number: "04",
    eyebrow: "YENİLENEBİLİR YAŞAM ENERJİSİ",
    title: "Biyokütle & Temiz Enerji",
    subtitle: "Topraktan Gelen Sıcaklık, Yeniden Hayata Döner",
    icon: Flame,
    image:
      "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1400",
    paragraphs: [
      "Döngüsel yolculuğumuzun son halkasında, yağı tamamen alınmış kuru zeytin çekirdeği ve doğal posa, yüksek ısı verimine sahip temiz biyokütle yakıtına dönüşür. Böylece zeytin ağacının güneşte biriktirdiği enerji, yeniden ısıya ve üretime can verir.",
      "Fosil yakıtlara doğa dostu bir alternatif oluşturan bu son adım, KARYAĞ amblemindeki sonsuzluk işaretini gerçeğe dönüştürür: Doğadan aldığımızı, doğaya hiçbir yük bırakmadan yeniden hayata katarız.",
    ],
    highlights: [
      "Yüksek kalorili, doğa dostu ve yenilenebilir biyokütle kaynağı",
      "Karbon ayak izini azaltan çevre dostu döngüsel enerji modeli",
      "%100 sıfır atık hedefini tamamlayan kesintisiz üretim halkası",
    ],
  },
];

export default function FaaliyetAlanlarimizPage() {
  return (
    <div className="bg-karyag-ivory min-h-screen">
      {/* 1. FLU EDİTORYAL BANNER */}
      <section className="relative overflow-hidden border-b border-karyag-gold/30 py-20 sm:py-28 px-4 sm:px-8 bg-[#F6F3EC]">
        <img
          src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1600"
          alt="KARYAĞ Döngüsel Üretim Yolculuğu"
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
              Faaliyet Alanlarımız
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <Leaf className="w-3.5 h-3.5 text-karyag-green" />
              <span>ENTEGRE & DÖNGÜSEL ÜRETİM</span>
            </div>

            <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-karyag-steel-dark leading-[1.12]">
              Zeytinin Dört Aşamalı{" "}
              <span className="italic text-karyag-gold-dark font-medium block sm:inline">
                Sonsuz Yolculuğu
              </span>
            </h1>

            <p className="text-base sm:text-lg text-karyag-steel/85 leading-relaxed max-w-2xl">
              Topraktan hasat edilen tek bir zeytin tanesinin, hiçbir zerresini
              kaybetmeden saf altına ve temiz enerjiye dönüştüğü dört halkalı
              yaşam döngümüzü keşfedin.
            </p>
          </div>

          {/* Hızlı Bölüm Geçiş Çubuğu */}
          <div className="mt-10 flex flex-wrap gap-3">
            {activityStages.map((stage) => (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                className="inline-flex items-center gap-2 bg-white/85 hover:bg-karyag-green text-karyag-steel-dark hover:text-white backdrop-blur-md px-4 py-2.5 rounded-full text-xs font-semibold border border-karyag-gold/35 hover:border-karyag-green transition-all shadow-2xs"
              >
                <span className="text-karyag-gold-dark font-bold">
                  {stage.number}
                </span>
                <span>{stage.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DÖRT AŞAMALI DETAYLI HİKÂYE BÖLÜMLERİ */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto space-y-16 sm:space-y-24">
          {activityStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={stage.id}
                id={stage.id}
                className="scroll-mt-32 bg-white rounded-3xl border border-stone-200/80 shadow-2xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Görsel Taraf */}
                <div
                  className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden group ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/92 backdrop-blur-md px-4 py-2 rounded-full border border-karyag-gold/40 shadow-sm">
                    <span className="text-xs font-bold tracking-widest text-karyag-gold-dark">
                      AŞAMA {stage.number}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/95 text-karyag-green flex items-center justify-center shadow-lg border border-karyag-gold/30">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Hikâye İçerik Tarafı */}
                <div
                  className={`lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                      {stage.eyebrow}
                    </span>
                    <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-karyag-steel-dark leading-tight">
                      {stage.title}
                    </h2>
                    <p className="font-serif italic text-lg text-karyag-gold-dark">
                      {stage.subtitle}
                    </p>

                    <div className="pt-2 space-y-4 text-sm sm:text-[15.5px] text-karyag-steel/90 leading-[1.85]">
                      {stage.paragraphs.map((text, pIdx) => (
                        <p key={pIdx}>{text}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-karyag-ivory rounded-2xl p-6 border border-karyag-gold/25 space-y-3">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-karyag-green">
                      Bu Aşamada Öne Çıkanlar
                    </div>
                    <ul className="space-y-2.5">
                      {stage.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-karyag-steel-dark"
                        >
                          <CheckCircle2 className="w-4 h-4 text-karyag-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. ALT DAVET BANDI */}
      <section className="pb-20 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-karyag-gold/35 shadow-2xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
              ÜRETİM GÜCÜMÜZLE TANIŞIN
            </span>
            <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-karyag-steel-dark">
              Döngüsel Üretimimizin Ürünlerine Göz Atın
            </h3>
            <p className="text-sm text-karyag-steel-muted leading-relaxed">
              Bu dört aşamalı özenli yolculuğun hayat verdiği marka ailemizi ve
              her birinin özgün hikâyesini yakından inceleyebilirsiniz.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/marka-mimarimiz"
              className="inline-flex items-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-semibold uppercase tracking-wider px-7 py-4 rounded-full transition group"
            >
              <span>Marka Mimarimiz</span>
              <ArrowRight className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-karyag-cream hover:bg-karyag-gold-light text-karyag-steel-dark text-xs font-semibold uppercase tracking-wider px-6 py-4 rounded-full border border-karyag-gold/40 transition"
            >
              <span>İletişime Geçin</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}