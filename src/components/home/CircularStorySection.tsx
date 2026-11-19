"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sprout,
  Droplets,
  Recycle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

const stages = [
  {
    step: "01",
    tag: "Hasat & Toprağa Saygı",
    title: "Asırlık Dallardan İlk Buluşma",
    story:
      "Kilis’in bereketli topraklarında güneşle olgunlaşan zeytinler, ağacın doğasına ve meyvenin tazeliğine özen gösterilerek hasat edilir. Hikâyemiz, toprağa duyduğumuz minnetle başlar.",
    image: "/images/story/stage-1-hasat.jpg",
    href: "/faaliyet-alanlarimiz#zeytinyagi",
    icon: Sprout,
  },
  {
    step: "02",
    tag: "Nazik Sıkım & Ustalık",
    title: "Altın Damlanın Doğuşu",
    story:
      "Tazeliğini yitirmeden işlenen her zeytin tanesi, doğal aromasını ve özündeki canlılığı koruyan nazik bir süreçle saf zeytinyağına dönüşür.",
    image: "/images/story/stage-2-sikim.jpg",
    href: "/faaliyet-alanlarimiz#rafinasyon",
    icon: Droplets,
  },
  {
    step: "03",
    tag: "Berraklık & Denge",
    title: "Doğallıktan Gelen Kusursuz Saflık",
    story:
      "Modern arıtma ustalığımız sayesinde her damla; berraklığı, dengeli karakteri ve değişmeyen kalitesiyle sofralardan seçkin mutfaklara uzanmaya hazır hale gelir.",
    image: "/images/story/stage-3-berraklik.jpg",
    href: "/faaliyet-alanlarimiz#pirina",
    icon: OliveDropIcon,
  },
  {
    step: "04",
    tag: "Sıfır Atık & Yeniden Hayat",
    title: "Doğaya Dönen Sonsuz Döngü",
    story:
      "Sıkım sonrası geriye kalan zeytin çekirdeği ve doğal posa asla atık değildir; yeniden değerlendirilerek temiz enerjiye ve toprağı besleyen değere dönüşür.",
    image: "/images/story/stage-4-sifir-atik.jpg",
    href: "/kurumsal/cevre-ve-surdurulebilirlik",
    icon: Recycle,
  },
];

export default function CircularStorySection() {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <section className="py-24 px-4 sm:px-8 bg-karyag-ivory">
      <div className="max-w-[1380px] mx-auto">
        {/* Başlık Alanı */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>DOĞANIN RİTMİYLE ÜRETİM</span>
            </div>
            <h2 className="font-serif font-semibold text-3xl sm:text-5xl text-karyag-steel-dark leading-tight">
              Dört Aşamada{" "}
              <span className="italic text-karyag-gold-dark font-medium">
                Döngüsel Hikâyemiz
              </span>
            </h2>
            <p className="text-sm sm:text-base text-karyag-steel-muted leading-relaxed">
              Zeytinin toprağından başlayıp yeniden doğaya hayat vererek
              tamamlanan, her aşaması özenle işlenmiş kesintisiz yolculuğumuz.
            </p>
          </div>

          <Link
            href="/faaliyet-alanlarimiz"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-karyag-steel-dark hover:text-karyag-green border-b border-karyag-gold pb-1.5 w-fit transition-colors group"
          >
            <span>Tüm Süreci Keşfedin</span>
            <ArrowUpRight className="w-4 h-4 text-karyag-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* İlerleme Göstergeli 4 Aşamalı Kart Izgarası */}
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-10 right-10 h-[1px] bg-karyag-gold/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
            {stages.map((item, idx) => {
              const Icon = item.icon;
              const isActive = hovered === idx;

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setHovered(idx)}
                  className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col ${
                    isActive
                      ? "border-karyag-gold shadow-[0_24px_50px_-15px_rgba(200,162,74,0.22)] -translate-y-2"
                      : "border-stone-200/80 shadow-xs hover:border-karyag-gold/60"
                  }`}
                >
                  {/* Üst Görsel Alanı */}
                  <div className="relative h-56 overflow-hidden bg-karyag-cream">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Adım Numarası */}
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-karyag-steel-dark text-xs font-bold tracking-widest px-3 py-1.5 rounded-full border border-karyag-gold/40 shadow-sm">
                      {item.step}
                    </span>

                    {/* Yüzen İkon Madalyonu */}
                    <div
                      className={`absolute -bottom-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border transition-all duration-300 ${
                        isActive
                          ? "bg-karyag-green text-white border-karyag-green scale-110"
                          : "bg-white text-karyag-gold-dark border-karyag-gold/30"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Alt Hikâye İçeriği */}
                  <div className="p-6 pt-8 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-karyag-gold-dark">
                        {item.tag}
                      </span>
                      <h3 className="font-serif font-semibold text-xl text-karyag-steel-dark mt-2 mb-3 group-hover:text-karyag-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-karyag-steel-muted leading-relaxed">
                        {item.story}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-stone-100">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-xs font-bold text-karyag-steel-dark group-hover:text-karyag-gold-dark transition-colors"
                      >
                        <span>Hikâyeyi Oku</span>
                        <ArrowRight className="w-3.5 h-3.5 text-karyag-gold group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}