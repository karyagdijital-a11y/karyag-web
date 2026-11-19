"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const topics = [
  "Kurumsal Bilgi & İş Birliği",
  "KADİVA — Gurme Natürel Sızma",
  "KAROLİVA — Profesyonel & HoReCa",
  "B2B Dökme Tedarik & İhracat",
  "Analiz Sertifikası (COA / TDS) Talebi",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    topic: topics[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-karyag-ivory rounded-3xl p-10 border border-karyag-gold/35 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-karyag-green-light text-karyag-green flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif font-semibold text-2xl text-karyag-steel-dark">
          Mesajınız Bize Ulaştı
        </h3>
        <p className="text-sm text-karyag-steel-muted max-w-md mx-auto leading-relaxed">
          İlginiz için teşekkür ederiz. Ekibimiz talebinizi inceleyerek en kısa
          sürede sizinle iletişime geçecektir.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              company: "",
              email: "",
              phone: "",
              topic: topics[0],
              message: "",
            });
          }}
          className="inline-flex items-center justify-center mt-2 px-6 py-3 rounded-full border border-karyag-gold text-xs font-bold uppercase tracking-wider text-karyag-steel-dark hover:bg-karyag-gold-light transition cursor-pointer"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-karyag-steel-dark">
            Adınız Soyadınız *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="Örn. Ahmet Yılmaz"
            className="w-full rounded-xl bg-karyag-ivory border border-stone-200 focus:border-karyag-gold focus:bg-white focus:outline-none px-4 py-3.5 text-sm text-karyag-steel-dark transition"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-karyag-steel-dark">
            Firma / Kurum Adı
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            placeholder="Şirketinizin adı"
            className="w-full rounded-xl bg-karyag-ivory border border-stone-200 focus:border-karyag-gold focus:bg-white focus:outline-none px-4 py-3.5 text-sm text-karyag-steel-dark transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-karyag-steel-dark">
            E-posta Adresiniz *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="ornek@firma.com"
            className="w-full rounded-xl bg-karyag-ivory border border-stone-200 focus:border-karyag-gold focus:bg-white focus:outline-none px-4 py-3.5 text-sm text-karyag-steel-dark transition"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-karyag-steel-dark">
            Telefon Numaranız
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+90 (5XX) XXX XX XX"
            className="w-full rounded-xl bg-karyag-ivory border border-stone-200 focus:border-karyag-gold focus:bg-white focus:outline-none px-4 py-3.5 text-sm text-karyag-steel-dark transition"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-karyag-steel-dark">
          İletişim Konusu
        </label>
        <select
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="w-full rounded-xl bg-karyag-ivory border border-stone-200 focus:border-karyag-gold focus:bg-white focus:outline-none px-4 py-3.5 text-sm text-karyag-steel-dark transition"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-karyag-steel-dark">
          Mesajınız *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Talebinizi, ilgilendiğiniz markayı veya iş birliği detaylarınızı kısaca paylaşabilirsiniz..."
          className="w-full rounded-xl bg-karyag-ivory border border-stone-200 focus:border-karyag-gold focus:bg-white focus:outline-none px-4 py-3.5 text-sm text-karyag-steel-dark transition resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-md transition-all cursor-pointer group w-full sm:w-auto"
        >
          <span>Mesajı Gönder</span>
          <Send className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </form>
  );
}