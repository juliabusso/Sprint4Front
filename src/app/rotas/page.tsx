// src/app/rotas/page.tsx
"use client";
import GoogleMapDirections from "../components/GoogleMapDirections";

export default function Rotas() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-6 md:py-10 px-4">
      <h1 className="font-title text-3xl md:text-4xl text-[#FF7A00] mb-6 text-center">Planejamento de Rotas</h1>
      
      <div className="bg-[#1D1B20] p-4 md:p-8 rounded-lg shadow-lg w-full max-w-2xl mb-6 md:mb-8">
        <p className="mb-4 text-sm md:text-base">Planeje sua rota escolhendo o tipo de transporte e preferências abaixo:</p>
        <form className="flex flex-col gap-4">
          <select className="p-2 rounded bg-gray-200 text-black w-full">
            <option>Mais rápida</option>
            <option>Caminhar menos</option>
            <option>Menos trocas</option>
          </select>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Ônibus</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Metrô</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Trem</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Barca</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer sm:col-span-2 md:col-span-1">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Carros particulares</span>
            </label>
          </div>
          
          <button className="w-full md:w-auto bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">
            Finalizar
          </button>
        </form>
      </div>

      {/* Google Maps Directions */}
      <div className="bg-[#1D1B20] p-4 md:p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl md:text-2xl text-[#FF7A00] mb-4 text-center">Veja o trajeto no mapa</h2>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <GoogleMapDirections apiKey="AIzaSyDsu65tLsu-gvCKvLx_DdWf0PJHtFD8TLM" />
        </div>
      </div>
    </main>
  );
}