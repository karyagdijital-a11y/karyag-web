import Link from "next/link";
import type { Metadata } from "next";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "KARYAĞ Gıda San. ve Tic. A.Ş. Polateli / Kilis üretim yuvamızla iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <div className="bg-karyag-ivory min-h-screen">
      {/* 1. FLU EDİTORYAL BANNER */}
      <section className="relative overflow-hidden border-b border-karyag-gold/30 py-20 sm:py-28 px-4 sm:px-8 bg-[#F6F3EC]">
        <img
          src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1600"
          alt="KARYAĞ İletişim"
          className="absolute inset-0 w-full h-full object-cover blur-[4px] scale-110 opacity-40 select-none pointer-events-none"
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
              İletişim
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>BİZİMLE TANIŞIN</span>
            </div>

            <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-karyag-steel-dark leading-[1.12]">
              Gönül Bağıyla Kurulan{" "}
              <span className="italic text-karyag-gold-dark font-medium block sm:inline">
                Kalıcı İş Birlikleri
              </span>
            </h1>

            <p className="text-base sm:text-lg text-karyag-steel/85 leading-relaxed max-w-2xl">
              Markalarımız, üretim yolculuğumuz, numune veya iş birliği
              talepleriniz için kapımız her zaman açık. Size en kısa sürede
              dönüş yapalım.
            </p>
          </div>
        </div>
      </section>

      {/* 2. İLETİŞİM BİLGİLERİ & FORM */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sol: İletişim Kartları */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-2xs space-y-7">
              <div>
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                  ÜRETİM YUVAMIZ & MERKEZ
                </span>
                <h2 className="font-serif font-semibold text-2xl text-karyag-steel-dark mt-1.5">
                  KARYAĞ Gıda San. ve Tic. A.Ş.
                </h2>
              </div>

              <div className="space-y-5 text-sm text-karyag-steel-muted">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-karyag-gold-light text-karyag-gold-dark flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-karyag-steel-dark">
                      Adres
                    </div>
                    <p className="mt-1 leading-relaxed">
                      Güldüzü / Yeşilpınar Mevkii, Polateli Organize Sanayi
                      Bölgesi Yakını, Polateli / KİLİS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-karyag-gold-light text-karyag-gold-dark flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-karyag-steel-dark">
                      E-posta
                    </div>
                    <p className="mt-1">info@karyag.com</p>
                    <p>satis@karyag.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-karyag-gold-light text-karyag-gold-dark flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-karyag-steel-dark">
                      Web & Telefon
                    </div>
                    <p className="mt-1">www.karyag.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-karyag-green-light text-karyag-green flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-karyag-steel-dark">
                      Çalışma Saatlerimiz
                    </div>
                    <p className="mt-1">Pazartesi – Cumartesi • 08:30 – 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-karyag-cream/85 p-7 border border-karyag-gold/30 space-y-2">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-karyag-green">
                HIZLI GERİ DÖNÜŞ SÖZÜMÜZ
              </div>
              <p className="font-serif italic text-base text-karyag-steel-dark leading-relaxed">
                “İster bir aile sofrası, ister büyük bir tedarik yolculuğu olsun;
                bize ulaşan her mesaj aynı özenle karşılanır.”
              </p>
            </div>
          </div>

          {/* Sağ: İletişim Formu */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-2xs space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                MESAJ BIRAKIN
              </span>
              <h2 className="font-serif font-semibold text-3xl text-karyag-steel-dark mt-1">
                Size Nasıl Yardımcı Olabiliriz?
              </h2>
              <p className="text-sm text-karyag-steel-muted mt-1.5">
                Formu doldurarak talebinizi doğrudan ilgili departmanımıza
                iletebilirsiniz.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}