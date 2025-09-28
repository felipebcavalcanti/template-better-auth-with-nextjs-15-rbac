/*
 *Criado para evitar multiplas instancias do Prisma Client no ambiente de desenvolvimento, ou seja,
 * quando o hot reload do Next.js estiver ativo, ele criar uma conexao so, uma instancia e nao criar varias a cada requisicao.
 */

import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
