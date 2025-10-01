import ReturnButton from "@/components/return-button";
import SignOutButton from "@/components/sign-out-button";

export default function Page() {
  
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background">
      <ReturnButton href="/" label="Home" />
      <h1 className="text-xl mb-4">Profile Page - Protected</h1>

      <SignOutButton />

    </div>
  );
}