// src/app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#1D1B20] text-center py-8 md:py-12 px-4">
        <h1 className="font-title text-4xl md:text-5xl lg:text-6xl text-[#FF7A00] mb-2">Nos Trilhos</h1>
        <p className="italic text-base md:text-lg lg:text-xl text-white mb-4">Desencarrilhou? A gente arruma</p>
        <img src="/img/logonostrilhos.png" alt="Logo" className="mx-auto h-16 md:h-20 lg:h-24 mb-4" />
      </section>

      {/* About Section */}
      <section className="w-full max-w-4xl mt-8 px-4">
        <div className="bg-[#1D1B20] rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center">
          <img 
            src="/img/station.png" 
            alt="CCR" 
            className="w-full md:w-64 h-48 object-cover rounded-lg" 
          />
          <div className="flex-1 text-left">
            <h2 className="text-xl md:text-2xl text-[#FF7A00] mb-2">CCR, mobilidade para o Brasil.</h2>
            <p className="text-sm md:text-base mb-4">
              A CCR é um grupo brasileiro que atua no setor de mobilidade urbana, rodovias, aeroportos e serviços. 
              Nosso objetivo é conectar pessoas e cidades, promovendo soluções inovadoras para o transporte público.
            </p>
            <button className="w-full md:w-auto bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">
              Acesse
            </button>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="w-full max-w-4xl mt-8 px-4">
        <h2 className="text-xl md:text-2xl text-[#FF7A00] mb-4">Verificação dos Status das Linhas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#1D1B20] rounded-lg p-4 shadow hover:transform hover:scale-105 transition">
            <img 
              src="/img/imgpage1.png" 
              alt="Linha de Metrô" 
              className="w-full h-32 object-cover rounded mb-2" 
            />
            <h3 className="text-lg text-[#FF7A00]">Linhas de Metrô</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li>Verde: Operação normal</li>
              <li>Vermelha: Atrasos</li>
              <li>Amarela: Manutenção</li>
            </ul>
          </div>
          <div className="bg-[#1D1B20] rounded-lg p-4 shadow hover:transform hover:scale-105 transition">
            <img 
              src="/img/imgpage2.png" 
              alt="Combate a Ambulantes" 
              className="w-full h-32 object-cover rounded mb-2" 
            />
            <h3 className="text-lg text-[#FF7A00]">Combate a Ambulantes</h3>
            <p className="text-sm mt-2">Ações de fiscalização e segurança nas estações.</p>
          </div>
          <div className="bg-[#1D1B20] rounded-lg p-4 shadow hover:transform hover:scale-105 transition sm:col-span-2 lg:col-span-1">
            <img 
              src="/img/trem01.png" 
              alt="Segurança" 
              className="w-full h-32 object-cover rounded mb-2" 
            />
            <h3 className="text-lg text-[#FF7A00]">Você não está sozinho</h3>
            <p className="text-sm mt-2">Equipe de apoio disponível em todas as estações.</p>
          </div>
        </div>
      </section>

      {/* Lost Items Section */}
      <section className="w-full max-w-4xl mt-8 px-4 mb-8">
        <h2 className="text-xl md:text-2xl text-[#FF7A00] mb-4">Item Perdido – Ajude-nos a Encontrá-lo!</h2>
        <div className="bg-[#1D1B20] rounded-lg p-4 md:p-6 shadow text-center">
          <p className="text-sm md:text-base mb-6">
            Se você encontrou um objeto perdido, alguém pode estar desesperado tentando recuperá-lo. 
            Verifique se há alguma identificação e entregue em um local apropriado.
          </p>
          <button className="w-full md:w-auto bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">
            Saiba mais
          </button>
        </div>
      </section>
    </div>
  );
}