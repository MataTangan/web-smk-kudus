import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <div className="group bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden rounded-2xl m-3">
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-2">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-neutral-100 text-neutral-500 rounded-full px-3 py-1 text-xs font-semibold">
            Berita
          </span>
          <span className="text-neutral-400 text-xs">{berita.tanggal}</span>
        </div>

        <h3 className="font-bold text-neutral-950 text-base leading-snug mb-2 line-clamp-2 group-hover:text-red-600 transition duration-300">
          {berita.judul}
        </h3>

        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {berita.ringkasan}
        </p>

        <Link
          href={`/berita/${berita.id}`}
          className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-red-600 text-white rounded-full px-5 py-2.5 text-xs font-semibold transition duration-300"
        >
          Baca Selengkapnya
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
