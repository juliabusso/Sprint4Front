// src/app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full bg-[#1D1B20] text-center py-10">
        <h1 className="font-title text-5xl text-[#FF7A00] mb-2">Nos Trilhos</h1>
        <p className="italic text-lg text-white mb-4">Desencarrilhou? A gente arruma</p>
        <img src="/img/logonostrilhos.png" alt="Logo" className="mx-auto h-20 mb-4" />
      </section>
      <section className="w-full max-w-4xl mt-8 px-4">
        <div className="bg-[#1D1B20] rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center">
          <img src="/img/station.png" alt="CCR" className="w-64 h-48 object-cover rounded-lg" />
          <div className="flex-1 text-left">
            <h2 className="text-2xl text-[#FF7A00] mb-2">CCR, mobilidade para o Brasil.</h2>
            <p className="mb-2">
              A CCR é um grupo brasileiro que atua no setor de mobilidade urbana, rodovias, aeroportos e serviços. 
              Nosso objetivo é conectar pessoas e cidades, promovendo soluções inovadoras para o transporte público.
            </p>
            <button className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">Acesse</button>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl mt-8 px-4">
        <h2 className="text-2xl text-[#FF7A00] mb-4">Verificação dos Status das Linhas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1D1B20] rounded-lg p-4 shadow">
            <img src="/img/imgpage1.png" alt="Linha de Metrô" className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-lg text-[#FF7A00]">Linhas de Metrô</h3>
            <ul className="text-sm mt-2">
              <li>Verde: Operação normal</li>
              <li>Vermelha: Atrasos</li>
              <li>Amarela: Manutenção</li>
            </ul>
          </div>
          <div className="bg-[#1D1B20] rounded-lg p-4 shadow">
            <img src="/img/imgpage2.png" alt="Combate a Ambulantes" className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-lg text-[#FF7A00]">Combate a Ambulantes</h3>
            <p className="text-sm mt-2">Ações de fiscalização e segurança nas estações.</p>
          </div>
          <div className="bg-[#1D1B20] rounded-lg p-4 shadow">
            <img src="/img/trem01.png" alt="Segurança" className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-lg text-[#FF7A00]">Você não está sozinho</h3>
            <p className="text-sm mt-2">Equipe de apoio disponível em todas as estações.</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl mt-8 px-4">
        <h2 className="text-2xl text-[#FF7A00] mb-4">Item Perdido – Ajude-nos a Encontrá-lo!</h2>
        <div className="bg-[#1D1B20] rounded-lg p-6 shadow text-center">
          <p className="mb-4">
            Se você encontrou um objeto perdido, alguém pode estar desesperado tentando recuperá-lo. 
            Verifique se há alguma identificação e entregue em um local apropriado.
          </p>
          <button className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">Saiba mais</button>
        </div>
      </section>
    </div>
  );
}