// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1D1B20] text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-title text-2xl text-[#FF7A00]">Nos Trilhos</span>
            <p className="text-sm mt-4 text-center md:text-left max-w-xs">
              Projeto desenvolvido para a conclusão do Curso em parceria com a CCR, focando na mobilidade de Trens e Itens perdidos entre as estações.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-6">
              <a href="#" aria-label="Instagram" className="hover:text-[#FF7A00] transition">
                Instagram
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-[#FF7A00] transition">
                Facebook
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#FF7A00] transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm text-center md:text-left">
              Email: contato@nostrilhos.com.br<br />
              Telefone: (11) 1234-5678
            </p>
          </div>
        </div>

        {/* Credits */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="text-sm text-center">
            <p className="mb-2">Desenvolvido por:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <p>Julia Damasceno Busino - RM569293 - 1TDSPB</p>
              <p>Lucas Almeida de Siqueira - RM946021 - 1TDSPK</p>
              <p>Emanuela Ribeiro Neto - RM549753 - 1TDSPR</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}