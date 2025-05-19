// src/app/login/page.tsx
export default function Login() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="font-title text-4xl text-[#FF7A00] mb-4">Login</h1>
        <form className="bg-[#1D1B20] p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
          <input className="p-2 rounded bg-gray-200 text-black" type="email" placeholder="Email" />
          <input className="p-2 rounded bg-gray-200 text-black" type="password" placeholder="Senha" />
          <button className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition">Entrar</button>
          <a href="#" className="text-xs text-[#FF7A00] hover:underline text-center mt-2">Esqueci a senha</a>
        </form>
      </main>
    );
  }