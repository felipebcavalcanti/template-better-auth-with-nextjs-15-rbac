//essa lib aqui é pra se eu QUISER, hashear minha senha.

import { hash, verify, type Options } from "@node-rs/argon2";

const opts: Options = {
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
  outputLen: 32,
};

export async function hashPassword(password: string) {
  return await hash(password, opts);
}

export async function verifyPassword(data: { hash: string; password: string }) {
  const { hash, password } = data;
  const result = await verify(hash, password, opts);

  return result;
}
