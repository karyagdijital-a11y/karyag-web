import Link from "next/link";
import { Truck, Container, PackageCheck, FileCheck2, ArrowRight } from "lucide-react";

export default function B2BLojistikPage() {
  return (
    <div className="bg-white">
      <section className="bg-karyag-steel-dark text-white py-20 px-4 sm:px-8 border-b-4 border-karyag-gold">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-karyag-gold">
            DÖKME YAĞ SEVKIYAT & İHRACAT STANDARTLARI
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl mt-3">
            B2B LOJİSTİK VE ENDÜSTRİYEL TEDARİK ÇÖZÜMLERİ
          </h1>
          <p className="text-gray-300 text-base max-w-3xl mt-4">
            Polateli / Kilis tesisimizden yurt içi gıda sanayisine ve uluslararası limanlara (Mersin & İskenderun) dökme tanker, Flexitank ve IBC üniteleriyle güvenli sevkiyat.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-karyag-bg p-8 rounded-3xl border border-gray-200">
            <Truck className="w-10 h-10 text-karyag-green mb-4" />
            <h3 className="font-display font-bold text-2xl text-karyag-steel mb-2">
              Paslanmaz Çelik Gıda Tankeri
            </h3>
            <p className="text-xs text-karyag-steel-muted leading-relaxed">
              Yurt içi fabrikalar ve dolum tesisleri için 20 - 26 ton kapasiteli, ısı yalıtımlı ve mühürlü AISI 304/316 paslanmaz çelik gıda tankerleriyle kapıdan kapıya teslimat.
            </p>
          </div>

          <div className="bg-karyag-bg p-8 rounded-3xl border border-gray-200">
            <Container className="w-10 h-10 text-karyag-green mb-4" />
            <h3 className="font-display font-bold text-2xl text-karyag-steel mb-2">
              Flexitank (20&apos; Konteyner)
            </h3>
            <p className="text-xs text-karyag-steel-muted leading-relaxed">
              Deniz yolu ihracatlarında 20&apos; FCL konteyner içerisine yerleştirilen tek kullanımlık gıdaya uygun Flexitank sistemleriyle 21 - 24 tonluk ekonomik ve hijyenik küresel sevkiyat.
            </p>
          </div>

          <div className="bg-karyag-bg p-8 rounded-3xl border border-gray-200">
            <PackageCheck className="w-10 h-10 text-karyag-green mb-4" />
            <h3 className="font-display font-bold text-2xl text-karyag-steel mb-2">
              IBC Tank & Çelik Varil
            </h3>
            <p className="text-xs text-karyag-steel-muted leading-relaxed">
              1.000 L paletli IBC tanklar veya 200 kg epoksi kaplamalı çelik variller ile orta ölçekli endüstriyel alıcılara ve ihracat müşterilerine modüler sevkiyat.
            </p>
          </div>
        </div>

        <div className="bg-karyag-steel text-white rounded-3xl p-10 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-karyag-gold text-xs font-bold uppercase tracking-widest">
              <FileCheck2 className="w-4 h-4" />
              <span>KALİTE VE ANALİZ DOKÜMANTASYONU</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              Teknik Spesifikasyon (TDS) ve Analiz Sertifikası (COA)
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Tüm sevkiyatlarımızda serbest yağ asitliği, peroksit değeri, K232/K270, mumsu maddeler ve yağ asitleri dağılımını içeren resmi laboratuvar analiz raporu sunulmaktadır.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-karyag-gold text-karyag-steel-dark font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl shrink-0"
          >
            <span>TDS & Fiyat Teklifi İste</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}