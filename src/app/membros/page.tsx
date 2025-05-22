// src/app/membros/page.tsx
"use client"; // Adicionado para componentes interativos

import Image from 'next/image';

// Definindo a interface para os membros
interface Membro {
  nome: string;
  rm: string;
  turma: string;
  cargo: string;
  imagem: string;
}

export default function Membros() {
  // Tipando o array de membros
  const membros: Membro[] = [
    {
      nome: "Julia Damasceno Busino",
      rm: "RM569293",
      turma: "1TDSPB",
      cargo: "Desenvolvedora Frontend",
      imagem: "/img/julia.jpeg"
    },
    {
      nome: "Lucas Almeida de Siqueira",
      rm: "RM946021",
      turma: "1TDSPK",
      cargo: "Desenvolvedor Frontend",
      imagem: "/img/lucas.jpeg"
    },
    {
      nome: "Henrique Marques Sladkevicius",
      rm: "RM560698",
      turma: "TDSPA",
      cargo: "Desenvolvedora Frontend",
      imagem: "/img/sla.jpeg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="font-title text-4xl text-[#FF7A00] mb-8">Nossa Equipe</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        {membros.map((membro) => (
          <div 
            key={membro.rm}
            className="bg-[#1D1B20] rounded-lg p-6 shadow-lg hover:transform hover:scale-105 transition"
          >
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-700 mb-4 flex items-center justify-center overflow-hidden">
                <Image 
                  src={membro.imagem} 
                  alt={`Foto de ${membro.nome}`}
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
              </div>
              <h2 className="text-xl font-bold text-[#FF7A00] mb-2">{membro.nome}</h2>
              <p className="text-gray-300 mb-1">{membro.cargo}</p>
              <p className="text-sm text-gray-400">RM: {membro.rm}</p>
              <p className="text-sm text-gray-400">Turma: {membro.turma}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-4xl px-4 text-center">
        <h2 className="text-2xl text-[#FF7A00] mb-4">Sobre o Projeto</h2>
        <p className="text-gray-300">
          Este projeto foi desenvolvido como parte do curso em parceria com a CCR, 
          focando na mobilidade de Trens e Itens perdidos entre as estações. 
          Nossa equipe trabalhou em conjunto para criar uma solução que melhora 
          a experiência dos usuários do sistema ferroviário.
        </p>
      </div>
    </main>
  );
}
