// src/app/achados-perdidos/page.tsx
export default function AchadosPerdidos() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
        <h1 className="font-title text-4xl text-[#FF7A00] mb-4">Achados e Perdidos</h1>
        <form className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
          <input className="p-2 rounded bg-gray-200 text-black" placeholder="Nome completo" />
          <input className="p-2 rounded bg-gray-200 text-black" type="email" placeholder="Email" />
          <input className="p-2 rounded bg-gray-200 text-black" placeholder="Localização" />
          <input className="p-2 rounded bg-gray-200 text-black" placeholder="Item perdido ou Assédio" />
          <textarea className="p-2 rounded bg-gray-200 text-black" placeholder="Descrição do item ou abusador" />
          <input className="p-2 rounded bg-gray-200 text-black" type="file" />
          <button className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">Enviar</button>
        </form>
      </main>
    );
  }