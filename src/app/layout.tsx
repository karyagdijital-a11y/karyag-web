import type { Metadata } from "next";
import { Roboto, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyActionDock from "@/components/layout/StickyActionDock";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KARYAĞ | Toprağın Bereketinden Gelen Asırlık Miras",
    template: "%s | KARYAĞ Gıda Tarım Sanayi",
  },
  description:
    "Kilis'in kadim zeytin mirasını doğaya saygılı, sıfır atık felsefesiyle geleceğe taşıyan KARYAĞ, KADİVA ve KAROLİVA marka ailesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${roboto.variable} ${montserrat.variable} ${playfair.variable}`}
    >
      <body
        className="min-h-screen flex flex-col bg-[#FCFBFA] text-karyag-steel selection:bg-karyag-gold/30 selection:text-karyag-steel-dark"
        suppressHydrationWarning
      >
        <Header />
        <StickyActionDock />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}