import BeritaCard from "@/components/BeritaCard";
import beritaData from "@/data/berita";

export default function BeritaPage() {
  return (
    <div className="pt-28 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
            Berita & Kegiatan
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
            Kabar <span className="text-red-600">Terbaru</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl">
            Ikuti perkembangan terbaru dari SMK Raden Umar Said Kudus, mulai
            dari prestasi siswa, kegiatan sekolah, hingga informasi penting
            lainnya.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {beritaData.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
      </div>
    </div>
  );
}
