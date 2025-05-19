// src/app/cadastro/page.tsx
export default function Cadastro() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="font-title text-4xl text-[#FF7A00] mb-4">Cadastro</h1>
        <form className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
          <input className="p-2 rounded bg-gray-200 text-black" placeholder="Nome completo" />
          <input className="p-2 rounded bg-gray-200 text-black" type="password" placeholder="Senha" />
          <input className="p-2 rounded bg-gray-200 text-black" type="password" placeholder="Repetir senha" />
          <input className="p-2 rounded bg-gray-200 text-black" type="email" placeholder="Email" />
          <input className="p-2 rounded bg-gray-200 text-black" type="date" placeholder="Data Nascimento" />
          <button className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">Criar conta</button>
        </form>
      </main>
    );
  }