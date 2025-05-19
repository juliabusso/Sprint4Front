// src/app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-[#1D1B20] text-white py-6 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-title text-[#FF7A00]">Nos Trilhos</span>
            <p className="text-xs mt-2 max-w-xs">
              Projeto desenvolvido para a conclusão do Curso em parceria com a CCR, focando na mobilidade de Trens e Itens perdidos entre as estações.
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <a href="#" aria-label="Instagram" className="hover:text-[#FF7A00]">Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:text-[#FF7A00]">Facebook</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#FF7A00]">LinkedIn</a>
          </div>
        </div>
        <div className="text-xs text-center mt-4">
          Desenvolvido por:<br />
          Julia Damasceno Busino - RM569293 - 1TDSPB<br />
          Lucas Almeida de Siqueira - RM946021 - 1TDSPK<br />
          Emanuela Ribeiro Neto - RM549753 - 1TDSPR
        </div>
      </footer>
    );
  }