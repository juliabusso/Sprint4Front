// src/app/duvidas/page.tsx
import Image from "next/image";
import estacaoduvidas01 from "@/img/estacaoduvidas01.png";

export default function Duvidas() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
    
      <h1 className="font-title text-4xl text-[#FF7A00] mb-6 text-center">
        Dúvidas sobre a nossa mobilidade?
      </h1>

      {/* Imagem */}
      <div className="w-full max-w-4xl mb-8">
        <Image
          src={estacaoduvidas01}
          alt="Estação de trem"
          width={1068}
          height={464}
          className="rounded-lg"
        />
      </div>

      {/* FAQ */}
      <div className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <p className="mb-4">
          Aqui estão algumas dúvidas frequentes sobre a CCR e o sistema ferroviário.
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <span className="text-[#FF7A00] font-bold">
              O que é a CCR e quais serviços ela oferece?
            </span>
            <br />
            A CCR administra rodovias, metrôs, trens, barcas e aeroportos no Brasil.
          </li>
          <li>
            <span className="text-[#FF7A00] font-bold">
              Quais rodovias são administradas pela CCR?
            </span>
            <br />
            Consulte o site oficial para a lista completa.
          </li>
          <li>
            <span className="text-[#FF7A00] font-bold">
              Como funciona o pedágio nas rodovias da CCR?
            </span>
            <br />
            O valor depende da categoria do veículo e pode ser pago por meios eletrônicos.
          </li>
          <li>
            <span className="text-[#FF7A00] font-bold">
              O que fazer em caso de emergência na estrada?
            </span>
            <br />
            Acione a CCR pelo telefone de emergência da rodovia ou utilize os canais online.
          </li>
          <li>
            <span className="text-[#FF7A00] font-bold">
              A CCR oferece assistência mecânica ou médica nas rodovias?
            </span>
            <br />
            Sim, há atendimento a emergências com guinchos e ambulâncias.
          </li>
          <li>
            <span className="text-[#FF7A00] font-bold">
              Como posso entrar em contato com a CCR?
            </span>
            <br />
            Através do telefone, site oficial ou aplicativos da empresa.
          </li>
          <li>
            <span className="text-[#FF7A00] font-bold">
              A CCR opera quais transportes urbanos?
            </span>
            <br />
            Metrôs em São Paulo, Salvador e BH, além de barcas no Rio de Janeiro.
          </li>
        </ul>

        {/* Botão */}
        <button className="mt-6 bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">
          Precisa de mais ajuda? Fale com a nossa IA!
        </button>
      </div>
    </main>
  );
}
