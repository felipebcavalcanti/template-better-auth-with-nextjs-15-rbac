import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  plugins: [jwtClient()],
});

export const { signUp, signOut, signIn, useSession } = authClient;
