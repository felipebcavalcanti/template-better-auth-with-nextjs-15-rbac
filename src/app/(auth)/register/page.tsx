import RegisterForm from "@/components/register-form";
import ReturnButton from "@/components/return-button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-background">
      <ReturnButton href="/" label="Home" />
      <p className="text-xl mb-4">
        REGISTER
      </p>
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-md shadow-md bg-white">
        <RegisterForm />
        
        <p className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
