"use client";

import { useState } from "react";
import Link from "next/link";
import { FileCheck2, ZoomIn, X, ShieldCheck, ArrowRight } from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";

export type CertificateItem = {
  code: string;
  name: string;
  scope: string;
  issuer?: string;
};

export default function CertificateGallery({
  certificates,
}: {
  certificates: CertificateItem[];
}) {
  const [selected, setSelected] = useState<CertificateItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {certificates.map((cert) => (
          <button
            key={cert.code}
            type="button"
            onClick={() => setSelected(cert)}
            className="text-left group rounded-2xl bg-karyag-ivory p-6 border border-karyag-gold/35 hover:border-karyag-gold hover:bg-white hover:shadow-md transition-all flex items-start justify-between gap-4 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white border border-karyag-gold/40 text-karyag-green group-hover:bg-karyag-green group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-karyag-gold-dark">
                  {cert.code}
                </span>
                <h3 className="font-semibold text-sm text-karyag-steel-dark mt-0.5">
                  {cert.name}
                </h3>
                <p className="text-xs text-karyag-steel-muted mt-1.5 leading-relaxed">
                  {cert.scope}
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-white border border-stone-200 group-hover:border-karyag-gold text-karyag-steel-muted group-hover:text-karyag-gold-dark flex items-center justify-center shrink-0 transition">
              <ZoomIn className="w-3.5 h-3.5" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Önizleme Modalı */}
      {selected && (
        <div
          className="fixed inset-0 z-[70] bg-karyag-steel-dark/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-8 sm:p-10 border-2 border-karyag-gold/60 shadow-2xl relative space-y-6 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Kapat"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-karyag-ivory hover:bg-karyag-cream text-karyag-steel-dark flex items-center justify-center border border-stone-200 cursor-pointer transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="rounded-2xl bg-karyag-ivory border border-karyag-gold/45 p-7 text-center space-y-3 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white border border-karyag-gold/40 text-karyag-green flex items-center justify-center mx-auto shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.24em] uppercase text-karyag-gold-dark">
                <OliveDropIcon className="w-3 h-3 text-karyag-gold" />
                <span>KARYAĞ GIDA SAN. VE TİC. A.Ş.</span>
              </div>
              <div className="font-serif font-bold text-3xl text-karyag-steel-dark">
                {selected.code}
              </div>
              <div className="text-sm font-semibold text-karyag-green">
                {selected.name}
              </div>
              <p className="text-xs text-karyag-steel-muted leading-relaxed pt-2 max-w-sm mx-auto">
                {selected.scope}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-karyag-steel-muted">
                İhracat ve denetim için resmi kopya talep edebilirsiniz.
              </span>
              <Link
                href={`/iletisim?konu=${encodeURIComponent(
                  `${selected.code} Belge Talebi`
                )}`}
                className="inline-flex items-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition shrink-0"
              >
                <span>PDF Kopya İste</span>
                <ArrowRight className="w-3.5 h-3.5 text-karyag-gold-light" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}