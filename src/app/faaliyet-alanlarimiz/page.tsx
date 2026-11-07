import { Droplets, FlaskConical, Recycle, Flame, CheckCircle2 } from "lucide-react";

const units = [
  {
    id: "zeytinyagi",
    code: "ÜNİTE 01",
    title: "Zeytinyağı Üretim Tesisi (Natürel & Ham)",
    desc: "Bölgenin seçkin zeytinlerinden 2 fazlı ve 3 fazlı modern kontinü sistemlerle soğuk sıkım natürel sızma zeytinyağı ve rafinasyona uygun ham zeytinyağı üretimi.",
    specs: ["Düşük Polifenol Kaybı", "Paslanmaz Çelik İklimlendirmeli Silolar", "Yüksek Günlük Zeytin İşleme Kapasitesi"],
    icon: Droplets,
  },
  {
    id: "rafinasyon",
    code: "ÜNİTE 02",
    title: "İleri Rafinasyon Tesisi",
    desc: "Yüksek asitli ham zeytinyağı ve ham pirina yağının; degumming, nötralizasyon, ağartma, vinterizasyon ve deodorizasyon aşamalarıyla uluslararası standartlarda rafine edilmesi.",
    specs: ["Maksimum %0.3 Serbest Yağ Asitliği (Rafine)", "Yüksek Dumanlanma Noktası (210°C+)", "Nötr Tat, Koku ve Altın Berraklık"],
    icon: FlaskConical,
  },
  {
    id: "pirina",
    code: "ÜNİTE 03",
    title: "Pirina Değerlendirme ve Ekstraksiyon",
    desc: "Zeytinyağı fabrikalarından çıkan yaş pirinanın döner fırınlarda kurutularak çözücü ekstraksiyon yöntemiyle ham pirina yağına dönüştürülmesi.",
    specs: ["Tam Kapalı Devre Ekstraksiyon", "Yüksek Verimli Yağ Geri Kazanımı", "Rafinasyon Tesisi ile Doğrudan Entegrasyon"],
    icon: Recycle,
  },
  {
    id: "biyokutle",
    code: "ÜNİTE 04",
    title: "Biyokütle Enerjisi & Yan Ürünler",
    desc: "Yağı alınmış kuru pirinanın (prina küspesi) ve zeytin çekirdeğinin yüksek kalorili, çevre dostu endüstriyel katı yakıt olarak ekonomiye kazandırılması.",
    specs: ["Yüksek Kalorili Ekolojik Yakıt", "Düşük Kül ve Nem Oranı", "%100 Sıfır Atık Üretim Döngüsü"],
    icon: Flame,
  },
];

export default function FaaliyetAlanlarimizPage() {
  return (
    <div className="bg-karyag-bg">
      <section className="bg-karyag-steel-dark text-white py-20 px-4 sm:px-8 border-b-4 border-karyag-gold">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-karyag-gold">
            ÜRETİM & MÜHENDİSLİK ALTYAPISI
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl mt-3">
            FAALİYET ALANLARIMIZ VE ÜRETİM ÜNİTELERİMİZ
          </h1>
          <p className="text-gray-300 text-base max-w-3xl mt-4">
            KARYAĞ Gıda Tarım Sanayi, ham maddeden son ürüne kadar tüm aşamaları kendi bünyesinde gerçekleştiren 4 ana endüstriyel üniteden oluşur.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        {units.map((u) => {
          const Icon = u.icon;
          return (
            <div
              key={u.id}
              id={u.id}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-karyag-green-light text-karyag-green px-3.5 py-1.5 rounded-md">
                  <Icon className="w-4 h-4" />
                  <span>{u.code}</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-karyag-steel">
                  {u.title}
                </h2>
                <p className="text-sm text-karyag-steel-muted leading-relaxed">
                  {u.desc}
                </p>
              </div>
              <div className="lg:col-span-4 bg-karyag-bg p-6 rounded-2xl border border-gray-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-karyag-steel border-b border-gray-200 pb-2">
                  Teknik Standartlar & Kapasite
                </div>
                {u.specs.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-xs font-semibold text-karyag-steel">
                    <CheckCircle2 className="w-4 h-4 text-karyag-green shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}