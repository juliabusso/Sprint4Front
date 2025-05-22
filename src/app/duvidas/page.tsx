// src/app/duvidas/page.tsx
export default function Duvidas() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
        <h1 className="font-title text-4xl text-[#FF7A00] mb-4">Dúvidas sobre a nossa mobilidade?</h1>
        <div className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <p className="mb-4">Aqui estão algumas dúvidas frequentes sobre a CCR e o sistema ferroviário.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="text-[#FF7A00] font-bold">O que a CCR é e quais serviços ela oferece?</span> <br />A CCR administra rodovias, metrôs, trens, barcas e aeroportos no Brasil.</li>
            <li><span className="text-[#FF7A00] font-bold">Quais rodovias são administradas pela CCR?</span> <br />Consulte o site oficial para a lista completa.</li>
            <li><span className="text-[#FF7A00] font-bold">Como funciona o pedágio nas rodovias da CCR?</span> <br />O valor depende da categoria do veículo e pode ser pago por meios eletrônicos.</li>
            <li><span className="text-[#FF7A00] font-bold">A CCR oferece assistência mecânica ou médica nas rodovias?</span> <br />Sim, serviços de atendimento e emergência estão disponíveis.</li>
          </ul>
          <button className="mt-6 bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">Precisa de mais ajuda? Fale com a nossa IA!</button>
        </div>
      </main>
    );
  }