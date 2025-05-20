// src/app/rotas/page.tsx
"use client";
import GoogleMapDirections from "../components/GoogleMapDirections";

export default function Rotas() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="font-title text-4xl text-[#FF7A00] mb-4">Planejamento de Rotas</h1>
      <div className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-2xl mb-8">
        <p className="mb-4">Planeje sua rota escolhendo o tipo de transporte e preferências abaixo:</p>
        <form className="flex flex-col gap-4">
          <select className="p-2 rounded bg-gray-200 text-black">
            <option>Mais rápida</option>
            <option>Caminhar menos</option>
            <option>Menos trocas</option>
          </select>
          <div className="flex gap-2 flex-wrap">
            <label><input type="checkbox" /> Ônibus</label>
            <label><input type="checkbox" /> Metrô</label>
            <label><input type="checkbox" /> Trem</label>
            <label><input type="checkbox" /> Barca</label>
            <label><input type="checkbox" /> Carros particulares</label>
          </div>
          <button className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">Finalizar</button>
        </form>
      </div>
      {/* Novo bloco: Google Maps Directions */}
      <div className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl text-[#FF7A00] mb-4">Veja o trajeto no mapa</h2>
        <GoogleMapDirections apiKey="AIzaSyDsu65tLsu-gvCKvLx_DdWf0PJHtFD8TLM" />
      </div>
    </main>
  );
}