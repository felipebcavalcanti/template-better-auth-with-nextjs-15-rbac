import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { jwt } from "better-auth/plugins";
import prisma from "./prisma";
import { hashPassword, verifyPassword } from "@/lib/argontwo";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    password: {
      //aqui eu poderia passar as opcoes do better-auth
      hash: hashPassword,
      verify: verifyPassword,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutos de cache no cookie
    },
  },
  plugins: [
    jwt({
      // O JWT será gerado e pode ser acessado via header ou endpoint
      // O cookie de sessão continuará funcionando normalmente
    }),
  ],
});
