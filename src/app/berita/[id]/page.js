import Link from "next/link";
import { notFound } from "next/navigation";
import beritaData from "@/data/berita";

export function generateStaticParams() {
  return beritaData.map((berita) => ({
    id: berita.id,
  }));
}

export default async function BeritaDetailPage({ params }) {
  const { id } = await params;

  const berita = beritaData.find((b) => b.id === id);

  if (!berita) {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-red-600 text-sm font-semibold transition duration-300 mb-8"
        >
          <span>←</span>
          Kembali ke Berita
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
              Berita
            </span>
            <span className="text-neutral-400 text-sm">{berita.tanggal}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            {berita.judul}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="rounded-[2rem] overflow-hidden mb-8">
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="bg-neutral-50 rounded-[2rem] p-8 md:p-10 mb-8">
          {berita.isi.split("\n\n").map((paragraf, index) => (
            <p
              key={index}
              className="text-neutral-600 text-base leading-relaxed mb-4 last:mb-0"
            >
              {paragraf}
            </p>
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-red-600 text-white rounded-full px-6 py-3 font-semibold text-sm transition duration-300"
          >
            <span>←</span>
            Kembali ke Berita
          </Link>

          <div className="flex gap-2">
            <span className="bg-neutral-100 text-neutral-500 rounded-full px-4 py-2 text-xs font-semibold">
              SMK RUS Kudus
            </span>
            <span className="bg-red-600/10 text-red-600 rounded-full px-4 py-2 text-xs font-semibold">
              {berita.tanggal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
