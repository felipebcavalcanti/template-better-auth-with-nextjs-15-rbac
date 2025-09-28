import ReturnButton from "@/components/return-button";
import SignOutButton from "@/components/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-xl mb-4">Access Denied</h1>
        <p className="text-center">You must be logged in to view this page.</p>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background">
      <ReturnButton href="/" label="Home" />
      <h1 className="text-xl">Profile Page - Protected</h1>

      <SignOutButton />
      <pre className="text-sm overflow-x-clip">
        {JSON.stringify(session, null, 3)}
      </pre>
    </div>
  );
}
