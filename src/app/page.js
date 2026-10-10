import Link from "next/link";
import Hero from "@/components/Hero";
import JurusanCard from "@/components/JurusanCard";
import BeritaCard from "@/components/BeritaCard";
import beritaData from "@/data/berita";

const jurusanList = [
  {
    singkatan: "Animasi",
    nama: "Animasi",
    deskripsi:
      "Pelajari seni animasi 2D & 3D, motion graphics, dan storytelling visual untuk industri film, game, dan media digital.",
    color: "red",
  },
  {
    singkatan: "DKV",
    nama: "Desain Komunikasi Visual",
    deskripsi:
      "Kuasai desain grafis, branding, tipografi, fotografi, dan komunikasi visual untuk kebutuhan industri kreatif modern.",
    color: "black",
  },
  {
    singkatan: "RPL",
    nama: "Rekayasa Perangkat Lunak",
    deskripsi:
      "Bangun keahlian pemrograman, web development, mobile apps, dan software engineering dengan standar industri.",
    color: "light",
  },
  {
    singkatan: "Grafika",
    nama: "Teknik Grafika",
    deskripsi:
      "Dalami teknik cetak, pre-press, finishing, dan manajemen produksi percetakan dengan teknologi terkini.",
    color: "white",
  },
];

export default function Home() {
  const beritaTerbaru = beritaData.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Sambutan Section */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Sambutan Card */}
            <div className="bg-neutral-100 rounded-[2rem] p-8 md:p-10">
              <span className="inline-block bg-neutral-200 text-neutral-500 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                Sambutan
              </span>
              {/* // TODO: sesuaikan nama kepala sekolah */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
                Selamat Datang di{" "}
                <span className="text-red-600">SMK Raden Umar Said</span> Kudus
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                Kami berkomitmen untuk mencetak generasi kreatif yang siap
                menghadapi tantangan industri 4.0. Dengan kurikulum berbasis
                industri dan fasilitas berstandar profesional, kami mempersiapkan
                siswa untuk menjadi kreator dan inovator di bidang industri
                kreatif dan teknologi.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                Didukung oleh Djarum Foundation, setiap siswa mendapatkan
                kesempatan belajar langsung dari para profesional industri dan
                mengakses fasilitas modern yang menyerupai lingkungan kerja
                sesungguhnya.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-600 rounded-[2rem] p-6 flex flex-col justify-between min-h-[160px]">
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">
                  Fokus
                </span>
                <div>
                  <span className="text-2xl md:text-3xl font-extrabold text-white">
                    Industri
                  </span>
                  <p className="text-white/80 text-sm">Kreatif & Teknologi</p>
                </div>
              </div>

              <div className="bg-neutral-950 rounded-[2rem] p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl" />
                <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wide">
                  Fasilitas
                </span>
                <div className="relative z-10">
                  <span className="text-2xl md:text-3xl font-extrabold text-white">
                    Modern
                  </span>
                  <p className="text-neutral-400 text-sm">Standar Industri</p>
                </div>
              </div>

              <div className="col-span-2 bg-white rounded-[2rem] p-6 border border-neutral-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white text-xl shrink-0">
                  ✦
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950">Lulusan Siap Kerja</h4>
                  <p className="text-neutral-500 text-sm">
                    Kurikulum dirancang bersama partner industri kreatif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Keahlian / Jurusan */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
                Program Keahlian
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Empat Jurusan{" "}
                <span className="text-red-600">Unggulan</span>
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-red-600 text-sm font-semibold transition duration-300"
            >
              Selengkapnya tentang jurusan
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {jurusanList.map((jurusan, index) => (
              <JurusanCard key={index} jurusan={jurusan} />
            ))}
          </div>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
                Berita & Kegiatan
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Berita{" "}
                <span className="text-red-600">Terbaru</span>
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-red-600 text-white rounded-full px-6 py-3 font-semibold text-sm transition duration-300"
            >
              Lihat Semua Berita
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beritaTerbaru.map((berita) => (
              <BeritaCard key={berita.id} berita={berita} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-600 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                Siap Bergabung dengan Kami? ✦
              </h2>
              <p className="text-white/80 text-base">
                Daftarkan dirimu dan mulai perjalanan menuju karir di industri kreatif.
              </p>
            </div>
            <Link
              href="/kontak"
              className="relative z-10 inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-red-600 rounded-full px-8 py-4 font-bold text-sm transition duration-300 shrink-0 hover:shadow-lg"
            >
              Hubungi Kami
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
