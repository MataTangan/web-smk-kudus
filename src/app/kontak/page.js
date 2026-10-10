export default function KontakPage() {
  return (
    <div className="pt-28 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
            Kontak
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
            Hubungi <span className="text-red-600">Kami</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl">
            Punya pertanyaan tentang pendaftaran, program keahlian, atau ingin
            berkunjung? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        {/* Bento Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Address Card */}
          <div className="md:col-span-2 bg-neutral-950 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-600/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                ✦ Alamat
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                SMK Raden Umar Said Kudus
              </h2>
              {/* // TODO: sesuaikan alamat lengkap */}
              <p className="text-neutral-300 text-base leading-relaxed">
                Jl. Raya Kudus
                <br />
                Kabupaten Kudus, Jawa Tengah
                <br />
                Indonesia
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-red-600 rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">
              Telepon
            </span>
            <div className="relative z-10">
              <span className="text-4xl mb-2 block">📞</span>
              {/* // TODO: sesuaikan nomor telepon */}
              <span className="text-xl font-extrabold text-white">
                (0291) 000-0000
              </span>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-neutral-100 rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px]">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wide">
              Email
            </span>
            <div>
              <span className="text-4xl mb-2 block">✉️</span>
              {/* // TODO: sesuaikan email */}
              <span className="text-lg font-extrabold text-neutral-950">
                info@smkrus.sch.id
              </span>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 border border-neutral-200">
            <span className="inline-block bg-neutral-100 text-neutral-500 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
              Jam Operasional
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 rounded-2xl p-5">
                <h4 className="font-bold text-neutral-950 mb-1">
                  Senin — Jumat
                </h4>
                <p className="text-neutral-500 text-sm">07:00 — 16:00 WIB</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-5">
                <h4 className="font-bold text-neutral-950 mb-1">Sabtu</h4>
                <p className="text-neutral-500 text-sm">07:00 — 12:00 WIB</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-5 sm:col-span-2">
                <h4 className="font-bold text-neutral-950 mb-1">
                  Minggu & Hari Libur
                </h4>
                <p className="text-neutral-500 text-sm">Tutup</p>
              </div>
            </div>
          </div>

          {/* Social Media / Quick Info */}
          <div className="md:col-span-1 lg:col-span-2 bg-neutral-950 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-600/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                Informasi PPDB
              </span>
              <h3 className="text-xl font-extrabold text-white mb-3">
                Tertarik Bergabung?
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed mb-4">
                Informasi lengkap mengenai Penerimaan Peserta Didik Baru (PPDB)
                dapat diperoleh dengan menghubungi panitia PPDB melalui nomor
                telepon atau email yang tertera.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold">
                  Animasi
                </span>
                <span className="bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold">
                  DKV
                </span>
                <span className="bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold">
                  RPL
                </span>
                <span className="bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold">
                  Grafika
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-4 bg-neutral-100 rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center min-h-[300px]">
          <span className="text-6xl mb-4">📍</span>
          <h3 className="text-xl font-extrabold text-neutral-950 mb-2">
            Lokasi Kami
          </h3>
          {/* // TODO: sesuaikan dengan embed Google Maps */}
          <p className="text-neutral-500 text-center max-w-md">
            SMK Raden Umar Said Kudus, Jl. Raya Kudus, Kabupaten Kudus, Jawa
            Tengah, Indonesia
          </p>
          <span className="mt-4 bg-neutral-200 text-neutral-500 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wide">
            Peta akan ditambahkan
          </span>
        </div>
      </div>
    </div>
  );
}
