// src/app/components/Header.tsx
"use client";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rotas", label: "Verificação das Linhas" },
  { href: "/achados-perdidos", label: "Achados e Perdidos" },
  { href: "/mapa", label: "Mapa" },
  { href: "/duvidas", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className="bg-[#1D1B20] text-white w-full shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Nos Trilhos" className="h-10 w-10 rounded-full bg-white" />
          <span className="font-title text-2xl text-[#FF7A00]">Nos Trilhos</span>
        </div>
        <nav className="flex gap-2 flex-wrap">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="px-3 py-1 rounded hover:bg-[#FF7A00] hover:text-black transition">
              {link.label}
            </Link>
          ))}
          <Link href="/cadastro" className="ml-2 px-3 py-1 rounded bg-[#FF7A00] text-black font-bold hover:bg-white hover:text-[#FF7A00] transition">Crie sua conta</Link>
        </nav>
      </div>
    </header>
  );
}