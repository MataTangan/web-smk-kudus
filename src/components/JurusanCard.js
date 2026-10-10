export default function JurusanCard({ jurusan }) {
  const colorVariants = {
    red: "bg-red-600 text-white",
    black: "bg-neutral-950 text-white",
    light: "bg-neutral-100 text-neutral-950",
    white: "bg-white text-neutral-950 border border-neutral-200",
  };

  const variant = colorVariants[jurusan.color] || colorVariants.light;

  return (
    <div
      className={`${variant} rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:-translate-y-1 hover:shadow-xl transition duration-300 relative overflow-hidden group`}
    >
      {/* Decorative star */}
      <span className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 group-hover:rotate-45 transition duration-500">
        ✦
      </span>

      <div>
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4 ${
            jurusan.color === "red" || jurusan.color === "black"
              ? "bg-white/20"
              : "bg-neutral-200"
          }`}
        >
          {jurusan.singkatan}
        </span>
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight leading-tight">
          {jurusan.nama}
        </h3>
      </div>

      <p
        className={`text-sm leading-relaxed mt-4 ${
          jurusan.color === "red" || jurusan.color === "black"
            ? "text-white/70"
            : "text-neutral-500"
        }`}
      >
        {jurusan.deskripsi}
      </p>
    </div>
  );
}
