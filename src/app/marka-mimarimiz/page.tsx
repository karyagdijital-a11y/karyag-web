import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function MarkaMimarimizPage() {
  return (
    <div className="bg-white">
      <section className="bg-karyag-steel-dark text-white py-20 px-4 sm:px-8 border-b-4 border-karyag-gold">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-karyag-gold">
            KURUMSAL MARKA SİSTEMİ
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl mt-3">
            KARYAĞ ÇATISI VE ALT TİCARİ MARKALARIMIZ
          </h1>
          <p className="text-gray-300 text-base max-w-3xl mt-4">
            KARYAĞ Gıda San. ve Tic. A.Ş. ana sanayi güvencesi altında; B2B dökme tedarik, natürel sızma zeytinyağı ve endüstriyel rafine yağ pazarlarına özel geliştirilen üçlü marka mimarimiz.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        {/* KARYAĞ */}
        <div className="bg-karyag-steel-dark text-white rounded-3xl p-10 sm:p-12 border-l-8 border-karyag-gold shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-karyag-gold">
            ANA ÇATI VE HOLDİNG MARKASI
          </span>
          <h2 className="font-display font-black text-4xl mt-2">
            KARYAĞ GIDA TARIM SANAYİ
          </h2>
          <p className="text-sm text-gray-300 mt-4 max-w-3xl leading-relaxed">
            Üretim tesisimizin, rafinerimizin ve kurumsal B2B dökme yağ (tanker, Flexitank, IBC) operasyonlarımızın çatı markasıdır. Ulusal ve uluslararası endüstriyel alıcılara yüksek tonajlı tedarik güvencesi sunar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* KADİVA */}
          <div className="bg-karyag-bg rounded-3xl p-10 border border-gray-200 border-t-8 border-t-karyag-green flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-karyag-green">
                ALT TİCARİ MARKA 01 • NATÜREL SERİ
              </span>
              <h3 className="font-display font-black text-4xl text-karyag-green mt-2">
                KADİVA
              </h3>
              <p className="text-sm text-karyag-steel-muted mt-4 leading-relaxed">
                Kilis coğrafyasının kadim zeytin mirasını ve doğallığını temsil eden natürel sızma zeytinyağı markamızdır. Erken hasat, soğuk sıkım ve yüksek polifenol değerleriyle gurme tüketime ve seçkin ihracat pazarlarına hitap eder.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-karyag-steel">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-karyag-green" /> Natürel Sızma & Erken Hasat Zeytinyağı</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-karyag-green" /> Yöresel Kilis Zeytini Karakteri & Yüksek Polifenol</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/iletisim" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-green">
                <span>KADİVA Toptan & İhracat Talebi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* KAROLİVA */}
          <div className="bg-karyag-bg rounded-3xl p-10 border border-gray-200 border-t-8 border-t-karyag-gold flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-karyag-steel">
                ALT TİCARİ MARKA 02 • ENDÜSTRİYEL & HORECA SERİSİ
              </span>
              <h3 className="font-display font-black text-4xl text-karyag-steel mt-2">
                KAROLİVA
              </h3>
              <p className="text-sm text-karyag-steel-muted mt-4 leading-relaxed">
                İleri rafinasyon teknolojimizle üretilen rafine zeytinyağı, riviera ve rafine pirina yağı markamızdır. Yüksek ısı dayanımı, kızartma performansı ve standart kalite arayan gıda fabrikaları ile profesyonel mutfaklar (HoReCa) için tasarlanmıştır.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-karyag-steel">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-karyag-gold" /> Rafine Zeytinyağı, Riviera & Rafine Pirina Yağı</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-karyag-gold" /> Gıda Endüstrisi ve HoReCa İçin Yüksek Stabilite</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/iletisim" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-steel">
                <span>KAROLİVA Endüstriyel Tedarik Talebi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}