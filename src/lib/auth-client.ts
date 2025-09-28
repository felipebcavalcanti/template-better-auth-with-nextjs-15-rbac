import { createAuthClient } from "better-auth/react";
const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
});

export const { signUp } = authClient;
