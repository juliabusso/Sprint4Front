// src/app/components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rotas", label: "Verificação das Linhas" },
  { href: "/achados-perdidos", label: "Achados e Perdidos" },
  { href: "/mapa", label: "Mapa" },
  { href: "/duvidas", label: "Dúvidas" },
  { href: "/membros", label: "Membros" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1D1B20] text-white w-full shadow-lg relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/img/logonostrilhos.png" alt="Nos Trilhos" className="h-10 w-10 rounded-full bg-white" />
          <span className="font-title text-2xl text-[#FF7A00]">Nos Trilhos</span>
        </div>
        {/* Botão do menu mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {/* Menu desktop */}
        <nav className="hidden md:flex gap-2 flex-wrap items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="px-3 py-1 rounded hover:bg-[#FF7A00] hover:text-black transition">
              {link.label}
            </Link>
          ))}
          <Link href="/cadastro" className="ml-2 px-3 py-1 rounded bg-[#FF7A00] text-black font-bold hover:bg-white hover:text-[#FF7A00] transition">
            Crie sua conta
          </Link>
        </nav>
      </div>
      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#1D1B20] p-4 flex flex-col gap-2 md:hidden z-50">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded hover:bg-[#FF7A00] hover:text-black transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cadastro"
            className="px-3 py-2 rounded bg-[#FF7A00] text-black font-bold hover:bg-white hover:text-[#FF7A00] transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Crie sua conta
          </Link>
        </nav>
      )}
    </header>
  );
}