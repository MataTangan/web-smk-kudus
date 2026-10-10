import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Bento Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Main Headline Card - spans 2 cols */}
          <div className="md:col-span-2 lg:col-span-2 bg-neutral-950 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[400px] relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                ✦ SMK Berbasis Industri Kreatif
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Wujudkan{" "}
                <span className="text-red-500">Kreativitas</span>
                <br />
                Tanpa Batas
              </h1>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3 mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3 font-semibold text-sm transition duration-300 hover:shadow-lg hover:shadow-red-600/25"
              >
                Tentang Kami
                <span>→</span>
              </Link>
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-6 py-3 font-semibold text-sm transition duration-300 border border-white/20"
              >
                Berita Terbaru
              </Link>
            </div>
          </div>

          {/* School Image Card */}
          <div className="md:col-span-1 lg:col-span-2 md:row-span-2 bg-neutral-100 rounded-[2rem] overflow-hidden relative min-h-[250px] md:min-h-0">
            <img
              src="/sekolah.jpg"
              alt="SMK Raden Umar Said Kudus"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
                📍 Kudus, Jawa Tengah
              </span>
            </div>
          </div>

          {/* Stats Mini Cards Row */}
          <div className="bg-red-600 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[160px]">
            <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">
              Program Keahlian
            </span>
            <div>
              <span className="text-5xl md:text-6xl font-extrabold text-white">4</span>
              <p className="text-white/80 text-sm mt-1">Jurusan Unggulan</p>
            </div>
          </div>

          <div className="bg-neutral-100 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[160px]">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wide">
              Dikelola oleh
            </span>
            <div>
              <span className="text-2xl md:text-3xl font-extrabold text-neutral-950">
                Djarum
              </span>
              <p className="text-neutral-500 text-sm mt-1">Foundation</p>
            </div>
          </div>
        </div>

        {/* Slogan Bar */}
        <div className="mt-4 bg-neutral-950 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg md:text-xl font-bold text-center md:text-left">
            &ldquo;Kreativitas adalah masa depan, dan masa depanmu dimulai di sini.&rdquo;
          </p>
          <div className="flex gap-2">
            <span className="bg-red-600/20 text-red-400 rounded-full px-3 py-1 text-xs font-semibold">
              Animasi
            </span>
            <span className="bg-red-600/20 text-red-400 rounded-full px-3 py-1 text-xs font-semibold">
              DKV
            </span>
            <span className="bg-red-600/20 text-red-400 rounded-full px-3 py-1 text-xs font-semibold">
              RPL
            </span>
            <span className="bg-red-600/20 text-red-400 rounded-full px-3 py-1 text-xs font-semibold">
              Grafika
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
