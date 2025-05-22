'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EsqueciSenha() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email de recuperação
    setMensagem('Se o email existir em nossa base, você receberá as instruções para recuperar sua senha.');
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
        <h1 className="font-title text-4xl text-[#FF7A00] mb-4 text-center">Recuperar Senha</h1>
        <p className="text-center text-sm text-gray-400 mb-4">
          Digite seu email para receber as instruções de recuperação
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-2 rounded bg-gray-200 text-black"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {mensagem && (
            <div className="text-sm text-center text-[#FF7A00]">
              {mensagem}
            </div>
          )}

          <button
            type="submit"
            className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition"
          >
            Enviar instruções
          </button>

          <Link
            href="/login"
            className="text-xs text-[#FF7A00] hover:underline text-center mt-2"
          >
            Voltar para o login
          </Link>
        </form>
      </div>
    </main>
  );
} 