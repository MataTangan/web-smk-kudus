"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/berita", label: "Berita" },
    { href: "/kontak", label: "Kontak" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg shadow-neutral-200/50 px-4 md:px-6 py-3 flex items-center justify-between border border-neutral-100">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white font-extrabold text-sm tracking-tighter shrink-0 group-hover:scale-110 transition duration-300">
            RUS
          </div>
          <span className="font-bold text-neutral-950 text-sm hidden sm:inline">
            SMK Raden Umar Said
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                isActive(link.href)
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <Link
          href="/kontak"
          className="hidden md:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 hover:shadow-lg hover:shadow-red-600/25"
        >
          Hubungi Kami
          <span className="text-base">→</span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-neutral-100 transition"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-neutral-950 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-950 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-950 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg shadow-neutral-200/50 p-4 flex flex-col gap-1 border border-neutral-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-2xl text-sm font-semibold transition duration-300 ${
                isActive(link.href)
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300"
          >
            Hubungi Kami
            <span>→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
