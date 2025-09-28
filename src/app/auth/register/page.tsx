import RegisterForm from "@/components/register-form";

export default function Page() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-background">
      <p className="text-xl mb-4">REGISTER</p>
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-md shadow-md bg-white">
        <RegisterForm />
      </div>
    </main>
  );
}
