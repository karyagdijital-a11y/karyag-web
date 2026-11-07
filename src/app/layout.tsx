import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "KARYAĞ Gıda San. ve Tic. A.Ş. | Gıda Tarım Sanayi",
    template: "%s | KARYAĞ Gıda Tarım Sanayi",
  },
  description:
    "Zeytinyağı üretimi, pirina değerlendirmesi ve ileri rafinasyon süreçlerini sıfır atık prensibiyle tek çatı altında birleştiren B2B entegre sanayi üssü. Polateli / Kilis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-karyag-steel selection:bg-karyag-green selection:text-white" suppressHydrationWarning>
        <Header />
        <StickyActionDock />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}