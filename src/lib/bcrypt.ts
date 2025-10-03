//essa lib aqui é pra se eu QUISER, hashear minha senha.

import bcrypt from "bcrypt";

const SALT_ROUNDS = 10; // Quanto maior, mais seguro, mas mais lento (10 é bom)

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(data: { hash: string; password: string }) {
  const { hash, password } = data;
  const result = await bcrypt.compare(password, hash);

  return result;
}
