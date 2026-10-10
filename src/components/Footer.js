import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white rounded-t-[2rem] mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-extrabold text-sm">
                RUS
              </div>
              <span className="font-extrabold text-xl">SMK Raden Umar Said</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-6">
              Sekolah Menengah Kejuruan berbasis industri kreatif dan teknologi
              yang dikelola oleh Djarum Foundation. Mencetak lulusan kompeten dan
              siap kerja di industri kreatif.
            </p>
            <div className="flex gap-3">
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
                Animasi
              </span>
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
                DKV
              </span>
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
                RPL
              </span>
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
                Grafika
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-neutral-300">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Tentang Kami" },
                { href: "/berita", label: "Berita" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white text-sm transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-neutral-300">
              Kontak
            </h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              {/* // TODO: sesuaikan alamat lengkap */}
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">📍</span>
                Jl. Raya Kudus, Kab. Kudus, Jawa Tengah
              </li>
              {/* // TODO: sesuaikan nomor telepon */}
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">📞</span>
                (0291) 000-0000
              </li>
              {/* // TODO: sesuaikan email */}
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✉️</span>
                info@smkrus.sch.id
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            © 2026 SMK Raden Umar Said Kudus. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs flex items-center gap-1">
            Dikelola oleh{" "}
            <span className="text-red-500 font-semibold">Djarum Foundation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
