import LoginForm from "@/components/login-form";
import ReturnButton from "@/components/return-button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-background">
      <ReturnButton href="/" label="Home" />
      <p className="text-xl mb-4">Login</p>
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-md shadow-md bg-white">
        <LoginForm />
        <p className="text-muted-foreground text-sm">
          Dont have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
