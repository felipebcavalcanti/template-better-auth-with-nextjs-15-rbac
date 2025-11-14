import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { hashPassword,verifyPassword } from "./bcrypt";
import { nextCookies } from "better-auth/next-js";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    password: {
      //aqui eu poderia passar as opções do better-auth
      hash: hashPassword,
      verify: verifyPassword,
    },
  },
  session: {
    strategy: "jwt", // Usa apenas JWT, sem armazenar sessões no banco
    expiresIn: 60 * 60 * 24 * 7, // 7 dias
    updateAge: 60 * 60 * 24, // Atualiza o token a cada 24h
    jwtConfig: {
      algorithm: "HS256",
    },
  },
  plugins: [nextCookies()],
  
});
