import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 font-montserrat">
      <div className="text-center space-y-8 p-12">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bem-vindo
          </h1>
          <p className="montserrat-semibold-18 text-slate-300">
            Desafio LOOMI - Nortus
          </p>
        </div>
        <div className="flex gap-4 justify-center pt-8">
          <Link
            href="/login"
            className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white montserrat-semibold-18 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Entrar</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
