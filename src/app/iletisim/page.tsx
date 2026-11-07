import { MapPin, Mail, Phone, Send, ShieldCheck, Building2 } from "lucide-react";

export default function IletisimPage() {
  return (
    <div className="bg-karyag-bg">
      <section className="bg-karyag-steel-dark text-white py-16 px-4 sm:px-8 border-b-4 border-karyag-gold">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-karyag-gold">
            B2B SATIŞ, İHRACAT & FABRİKA İLETİŞİM
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl mt-3">
            İLETİŞİM VE KURUMSAL TEDARİK FORMU
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-3">
            Dökme zeytinyağı, rafine zeytinyağı ve pirina yağı talepleriniz, yıllık tedarik sözleşmeleri ve numune istekleriniz için doğrudan satış masamızla iletişime geçin.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sol İletişim Bilgileri */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-karyag-green">
                MERKEZ & ENTEGRE ÜRETİM TESİSİ
              </span>
              <h2 className="font-display font-black text-2xl text-karyag-steel mt-1">
                KARYAĞ GIDA SAN. ve TİC. A.Ş.
              </h2>
            </div>

            <div className="space-y-4 text-xs text-karyag-steel">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-karyag-green-light text-karyag-green flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">Fabrika Adresi</div>
                  <div className="text-karyag-steel-muted mt-0.5 leading-relaxed">
                    Güldüzü / Yeşilpınar Mevkii, Polateli Üretim Tesisi, Polateli / KİLİS
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-karyag-green-light text-karyag-green flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">Kurumsal E-Posta</div>
                  <div className="text-karyag-steel-muted mt-0.5">
                    info@karyag.com • satis@karyag.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-karyag-green-light text-karyag-green flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold">B2B Toptan Satış & Santral</div>
                  <div className="text-karyag-steel-muted mt-0.5">
                    +90 (348) 000 00 00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-karyag-steel-dark text-white p-8 rounded-3xl border border-karyag-gold/30 space-y-3">
            <div className="flex items-center gap-2 text-karyag-gold text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>HIZLI TEKLİF PROSEDÜRÜ</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Gönderdiğiniz B2B tedarik talepleri doğrudan yönetim ve endüstriyel satış departmanımıza düşer. Talep ettiğiniz ürün spekti ve tonaja göre güncel fiyat teklifimiz aynı gün içinde iletilir.
            </p>
          </div>
        </div>

        {/* Sağ B2B Teklif Formu */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <h3 className="font-display font-black text-2xl text-karyag-steel mb-6">
            B2B DÖKME YAĞ & TEDARİK TALEP FORMU (RFQ)
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-karyag-steel mb-1.5">
                  Firma Unvanı *
                </label>
                <input
                  type="text"
                  placeholder="Firma Adı"
                  className="w-full text-xs border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-karyag-green"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-karyag-steel mb-1.5">
                  Yetkili Adı Soyadı & Görevi *
                </label>
                <input
                  type="text"
                  placeholder="Ad Soyad / Satınalma Md."
                  className="w-full text-xs border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-karyag-green"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-karyag-steel mb-1.5">
                  Kurumsal E-Posta *
                </label>
                <input
                  type="email"
                  placeholder="isim@firma.com"
                  className="w-full text-xs border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-karyag-green"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-karyag-steel mb-1.5">
                  Telefon Numarası *
                </label>
                <input
                  type="tel"
                  placeholder="+90 (5xx) xxx xx xx"
                  className="w-full text-xs border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-karyag-green"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-karyag-steel mb-1.5">
                  Ürün Grubu
                </label>
                <select className="w-full text-xs border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-karyag-green">
                  <option>Dökme Natürel Sızma Zeytinyağı</option>
                  <option>Rafine Zeytinyağı / Riviera</option>
                  <option>Ham / Rafine Pirina Yağı</option>
                  <option>KADİVA Natürel Seri</option>
                  <option>KAROLİVA Endüstriyel Seri</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-karyag-steel mb-1.5">
                  Sevkiyat Şekli & Tonaj
                </label>
                <select className="w-full text-xs border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-karyag-green">
                  <option>Paslanmaz Çelik Tanker (20-26 Ton)</option>
                  <option>Flexitank 20&apos; FCL (İhracat)</option>
                  <option>IBC Tank (1.000 L) / Çelik Varil</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-karyag-steel mb-1.5">
                Talep Detayları (Asitlik Kriteri, Teslimat Şehri/Ülkesi)
              </label>
              <textarea
                rows={4}
                placeholder="Aradığınız teknik spesifikasyonları ve yaklaşık tonaj bilgisini yazınız..."
                className="w-full text-xs border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-karyag-green"
              />
            </div>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition"
            >
              <Send className="w-4 h-4 text-karyag-gold" />
              <span>TEKLİF TALEBİNİ GÖNDER</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}