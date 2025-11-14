import RegisterForm from "@/components/register-form";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 font-montserrat">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="montserrat-bold-24 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Registrar
          </h1>
          <p className="montserrat-regular-14 text-slate-400">
            Crie sua conta
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl shadow-2xl p-8">
          <RegisterForm />

          <div className="mt-6 text-center">
            <p className="montserrat-regular-14 text-slate-400">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="montserrat-regular-14 text-slate-400 hover:text-slate-300 transition-colors"
          >
            ← Voltar para home
          </Link>
        </div>
      </div>
    </main>
  );
}
