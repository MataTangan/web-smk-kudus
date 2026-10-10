export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
            Tentang Kami
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Mengenal Lebih Dekat{" "}
            <span className="text-red-600">SMK Raden Umar Said</span>
          </h1>
        </div>

        {/* Profil Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {/* Profil Sekolah - Large Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-neutral-950 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-600/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                ✦ Profil Sekolah
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                SMK Raden Umar Said Kudus
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed mb-4">
                SMK Raden Umar Said (RUS) Kudus adalah sekolah menengah kejuruan
                yang berfokus pada pengembangan kompetensi di bidang industri
                kreatif dan teknologi. Dikelola oleh Djarum Foundation, sekolah
                ini dirancang untuk mencetak lulusan yang kompeten, kreatif, dan
                siap terjun ke dunia kerja profesional.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed">
                Dengan fasilitas modern berstandar industri dan lingkungan
                belajar yang menyerupai studio serta kantor kreatif, SMK RUS
                memberikan pengalaman pendidikan yang unik dan relevan dengan
                kebutuhan industri masa kini.
              </p>
            </div>
          </div>

          {/* Image Card */}
          <div className="md:col-span-1 lg:col-span-2 bg-neutral-100 rounded-[2rem] overflow-hidden relative min-h-[250px]">
            <img
              src="/sekolah.jpg"
              alt="Gedung SMK Raden Umar Said Kudus"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
          </div>

          {/* Sejarah Card */}
          <div className="md:col-span-2 bg-neutral-100 rounded-[2rem] p-8 md:p-10">
            <span className="inline-block bg-neutral-200 text-neutral-500 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
              Sejarah Singkat
            </span>
            <p className="text-neutral-600 text-base leading-relaxed mb-3">
              {/* // TODO: sesuaikan tahun berdiri dan detail sejarah */}
              SMK Raden Umar Said didirikan sebagai wujud kepedulian Djarum
              Foundation terhadap pengembangan sumber daya manusia di bidang
              industri kreatif. Sekolah ini dinamai Raden Umar Said, seorang
              tokoh seni ukir legendaris asal Kudus yang dikenal dengan
              mahakaryanya dalam seni pahat dan ornamentasi.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              Nama besar Raden Umar Said menjadi inspirasi bagi semangat
              kreativitas yang diusung sekolah ini. Berbekal visi untuk
              menghasilkan generasi kreator berkelas dunia, SMK RUS terus
              berkembang menjadi salah satu SMK terbaik di bidang industri
              kreatif di Indonesia.
            </p>
          </div>

          {/* Alamat Card */}
          <div className="md:col-span-1 lg:col-span-2 bg-red-600 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block bg-white/20 text-white rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                📍 Lokasi
              </span>
              <h3 className="text-xl font-extrabold text-white mb-3">
                Alamat Sekolah
              </h3>
              {/* // TODO: sesuaikan alamat lengkap */}
              <p className="text-white/80 text-base leading-relaxed">
                Jl. Raya Kudus
                <br />
                Kab. Kudus, Jawa Tengah
                <br />
                Indonesia
              </p>
              <div className="mt-4 flex gap-3">
                {/* // TODO: sesuaikan nomor telepon */}
                <span className="bg-white/20 text-white rounded-full px-4 py-1.5 text-xs font-semibold">
                  📞 (0291) 000-0000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Visi */}
          <div className="md:col-span-1 bg-neutral-950 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-10">✦</div>
            <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
              Visi
            </span>
            <p className="text-white text-lg md:text-xl font-bold leading-snug">
              Menjadi lembaga pendidikan kejuruan unggulan yang menghasilkan
              lulusan berkarakter, kreatif, dan berdaya saing global di bidang
              industri kreatif dan teknologi.
            </p>
          </div>

          {/* Misi */}
          <div className="md:col-span-2 bg-neutral-100 rounded-[2rem] p-8 md:p-10">
            <span className="inline-block bg-neutral-200 text-neutral-500 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
              Misi
            </span>
            <ul className="space-y-4">
              {[
                "Menyelenggarakan pendidikan kejuruan berbasis industri kreatif dengan kurikulum yang relevan dan adaptif.",
                "Mengembangkan fasilitas belajar berstandar industri untuk mendukung proses pembelajaran yang optimal.",
                "Membangun kerja sama strategis dengan industri kreatif dan teknologi untuk program link and match.",
                "Membentuk karakter siswa yang profesional, kreatif, inovatif, dan berjiwa wirausaha.",
                "Meningkatkan kompetensi guru dan tenaga kependidikan melalui pelatihan dan sertifikasi berkelanjutan.",
                "Mencetak lulusan yang kompeten dan siap kerja di industri kreatif nasional maupun internasional.",
              ].map((misi, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    {misi}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Program Keahlian Detail */}
        <div className="mb-8">
          <div className="mb-8">
            <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
              Program Keahlian
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              4 Jurusan <span className="text-red-600">Unggulan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Animasi */}
            <div className="bg-red-600 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <span className="inline-block bg-white/20 text-white rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
                  ✦ Animasi
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Animasi
                </h3>
                <p className="text-white/80 text-base leading-relaxed mb-4">
                  Program keahlian Animasi membekali siswa dengan kemampuan
                  membuat konten animasi 2D dan 3D, motion graphics, visual
                  effects, serta storytelling visual. Siswa belajar menggunakan
                  software industri seperti Blender, Adobe After Effects, dan
                  Toon Boom.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["2D Animation", "3D Modeling", "Motion Graphics", "VFX"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="bg-white/20 text-white rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* DKV */}
            <div className="bg-neutral-950 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-10 -left-10 w-32 h-32 bg-red-600/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <span className="inline-block bg-red-600/20 text-red-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
                  ✦ DKV
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Desain Komunikasi Visual
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed mb-4">
                  Program keahlian DKV mengembangkan kemampuan siswa dalam desain
                  grafis, branding, layout, tipografi, fotografi, dan ilustrasi.
                  Lulusan siap berkarir sebagai graphic designer, brand designer,
                  atau creative director.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Graphic Design",
                    "Branding",
                    "Typography",
                    "Photography",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 text-neutral-300 rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RPL */}
            <div className="bg-neutral-100 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <span className="absolute top-6 right-6 text-3xl opacity-10">
                ✦
              </span>
              <span className="inline-block bg-neutral-200 text-neutral-500 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
                RPL
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-950 mb-3">
                Rekayasa Perangkat Lunak
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                Program keahlian RPL melatih siswa dalam pemrograman, web
                development, mobile app development, database, dan software
                engineering. Siswa membangun portofolio nyata melalui proyek
                berbasis industri.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Dev",
                  "Mobile Apps",
                  "Database",
                  "UI/UX",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-neutral-200 text-neutral-600 rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Teknik Grafika */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-neutral-200 relative overflow-hidden">
              <span className="absolute top-6 right-6 text-3xl opacity-10">
                ✦
              </span>
              <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
                Grafika
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-950 mb-3">
                Teknik Grafika
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                Program keahlian Teknik Grafika fokus pada ilmu dan teknik
                percetakan modern, meliputi pre-press, proses cetak offset dan
                digital, finishing, serta manajemen produksi percetakan.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Pre-Press", "Offset Print", "Digital Print", "Finishing"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-neutral-100 text-neutral-600 rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Fasilitas Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-3 lg:col-span-4 mb-2">
            <span className="inline-block bg-red-600/10 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-4">
              Fasilitas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              Fasilitas <span className="text-red-600">Modern</span>
            </h2>
          </div>

          {[
            {
              icon: "🖥️",
              title: "Lab Komputer",
              desc: "Spesifikasi tinggi untuk design, animasi, dan programming",
              color: "bg-neutral-950 text-white",
            },
            {
              icon: "🎬",
              title: "Studio Animasi",
              desc: "Lengkap dengan peralatan motion capture dan green screen",
              color: "bg-red-600 text-white",
            },
            {
              icon: "📸",
              title: "Studio Fotografi",
              desc: "Studio profesional dengan lighting dan backdrop lengkap",
              color: "bg-neutral-100 text-neutral-950",
            },
            {
              icon: "🖨️",
              title: "Workshop Grafika",
              desc: "Mesin cetak offset dan digital berstandar industri",
              color: "bg-white text-neutral-950 border border-neutral-200",
            },
            {
              icon: "📚",
              title: "Perpustakaan Digital",
              desc: "Akses ke ribuan referensi desain, animasi, dan teknologi",
              color: "bg-neutral-100 text-neutral-950",
            },
            {
              icon: "🏃",
              title: "Sarana Olahraga",
              desc: "Lapangan dan fasilitas olahraga untuk pengembangan fisik",
              color: "bg-neutral-950 text-white",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 hover:shadow-xl transition duration-300 ${
                i < 2 ? "md:col-span-1 lg:col-span-2" : ""
              }`}
            >
              <span className="text-3xl mb-4">{item.icon}</span>
              <div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p
                  className={`text-sm ${
                    item.color.includes("text-white")
                      ? "text-white/70"
                      : "text-neutral-500"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ekstrakurikuler */}
        <div className="bg-neutral-100 rounded-[2rem] p-8 md:p-10">
          <span className="inline-block bg-neutral-200 text-neutral-500 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
            Ekstrakurikuler
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 tracking-tight mb-6">
            Kegiatan di Luar <span className="text-red-600">Kelas</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Film Club",
              "Digital Art Community",
              "Game Development",
              "Photography Club",
              "Robotik",
              "Web Dev Community",
              "Musik",
              "English Club",
              "Basket",
              "Futsal",
              "Pramuka",
              "PMR",
            ].map((ekskul) => (
              <span
                key={ekskul}
                className="bg-white text-neutral-700 rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-200 hover:border-red-600 hover:text-red-600 transition duration-300 cursor-default"
              >
                {ekskul}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
