import { Building2, Factory, ShieldCheck, Recycle, CheckCircle2 } from "lucide-react";

export default function KurumsalPage() {
  return (
    <div className="bg-white">
      {/* Sayfa Üst Banner */}
      <section className="bg-karyag-steel-dark text-white py-20 px-4 sm:px-8 border-b-4 border-karyag-gold">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-karyag-gold">
            KURUMSAL KİMLİK & YAPI
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl mt-3">
            SADECE BİR ÜRETİM TESİSİ DEĞİL, BÜTÜNSEL BİR SANAYİ SİSTEMİ
          </h1>
          <p className="text-gray-300 text-base max-w-3xl mt-4 leading-relaxed">
            KARYAĞ Gıda San. ve Tic. A.Ş.; zeytinyağı üretimi, pirina değerlendirmesi, ileri rafinasyon ve yan ürünlerin ekonomiye kazandırılması süreçlerini Polateli / Kilis’teki modern entegre tesisinde tek çatı altında buluşturmaktadır.
          </p>
        </div>
      </section>

      {/* 4 Kurumsal Bölüm */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div id="vizyon" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-green bg-karyag-green-light px-3 py-1.5 rounded">
              <Building2 className="w-4 h-4" />
              <span>01 • HAKKIMIZDA & HOLDİNG VİZYONU</span>
            </div>
            <h2 className="font-display font-black text-3xl text-karyag-steel">
              B2B Endüstriyel Güven ve Yüksek Kapasite
            </h2>
            <p className="text-sm text-karyag-steel-muted leading-relaxed">
              KARYAĞ, geleneksel zeytincilik mirasını ağır sanayi ve kimya mühendisliği disipliniyle birleştirmek amacıyla kurulmuştur. Ulusal gıda sanayisine ve küresel ihracat pazarlarına standart kalitede, izlenebilir ve kesintisiz dökme yağ tedariki sağlıyoruz.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-semibold text-karyag-steel">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-karyag-green" /> Tam entegre sıkım, ekstraksiyon ve rafinasyon zinciri</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-karyag-green" /> Uluslararası Gıda Kodeksi (IOOC) standartlarında üretim</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-karyag-green" /> Güçlü sermaye ve sürdürülebilir B2B tedarik yapısı</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-80">
            <img
              src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Karyağ Entegre Tesis"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div id="kalite" className="bg-karyag-bg rounded-3xl p-8 sm:p-12 border border-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <Factory className="w-8 h-8 text-karyag-green mb-3" />
            <h3 className="font-display font-bold text-xl text-karyag-steel mb-2">
              Polateli / Kilis Entegre Tesisi
            </h3>
            <p className="text-xs text-karyag-steel-muted leading-relaxed">
              Güneydoğu ve Doğu Akdeniz zeytin havzasının kalbinde, İskenderun ve Mersin ihracat limanlarına lojistik erişimi yüksek stratejik sanayi üssü.
            </p>
          </div>
          <div>
            <ShieldCheck className="w-8 h-8 text-karyag-green mb-3" />
            <h3 className="font-display font-bold text-xl text-karyag-steel mb-2">
              Laboratuvar & Kalite Kontrol
            </h3>
            <p className="text-xs text-karyag-steel-muted leading-relaxed">
              Tesise giren her parti ham madde ve sevk edilen her tanker; serbest asitlik, peroksit, UV özgül soğurma (K232/K270) ve yağ asitleri kompozisyonu testlerinden geçer.
            </p>
          </div>
          <div id="surdurulebilirlik">
            <Recycle className="w-8 h-8 text-karyag-green mb-3" />
            <h3 className="font-display font-bold text-xl text-karyag-steel mb-2">
              Sıfır Atık & Döngüsel Ekonomi
            </h3>
            <p className="text-xs text-karyag-steel-muted leading-relaxed">
              Logomuzdaki sonsuzluk sembolü; zeytin sıkımından kalan pirinanın yağa ve temiz biyokütle enerjisine dönüştürüldüğü sıfır atık felsefemizi simgeler.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}