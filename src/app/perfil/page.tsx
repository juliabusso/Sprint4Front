// src/app/perfil/page.tsx
export default function Perfil() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="font-title text-4xl text-[#FF7A00] mb-4">Perfil do Usuário</h1>
        <div className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
          <div className="bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <span className="text-3xl">👤</span>
          </div>
          <div className="w-full">
            <div className="mb-2">Nome: <span className="font-bold">Seu Nome</span></div>
            <div className="mb-2">Email: <span className="font-bold">seu@email.com</span></div>
            <div className="mb-2">Informações: <span className="font-bold">---</span></div>
            <div>Configurações: <span className="font-bold">---</span></div>
          </div>
        </div>
      </main>
    );
  }