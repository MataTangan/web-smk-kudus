import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "SMK Raden Umar Said Kudus — Sekolah Industri Kreatif",
  description:
    "SMK Raden Umar Said (RUS) Kudus, sekolah kejuruan berbasis industri kreatif dan teknologi yang dikelola Djarum Foundation. Program keahlian: Animasi, DKV, RPL, Teknik Grafika.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-plus-jakarta)]">
        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
