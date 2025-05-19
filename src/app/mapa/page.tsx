// src/app/mapa/page.tsx
export default function Mapa() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
        <h1 className="font-title text-4xl text-[#FF7A00] mb-4">Mapa Ferroviário</h1>
        <div className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-2xl flex flex-col items-center">
          <p className="mb-4">Veja as linhas e trajetos disponíveis:</p>
          <img src="/mapa-exemplo.png" alt="Mapa ferroviário" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </main>
    );
  }