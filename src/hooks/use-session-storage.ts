"use client";

import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

interface StoredUserData {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
}

const STORAGE_KEY = "better-auth-user";

/**
 O Better-auth sincroniza com o useSession os dados no localStorage.
 */
export function useSessionStorage() {
  const { data: session, isPending, error } = useSession();
  const [userData, setUserData] = useState<StoredUserData | null>(null);

  // Carregar dados do localStorage quando o componente monta
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        setUserData(JSON.parse(storedData));
      } catch (e) {
        console.error("Erro ao ler localStorage:", e);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Sincronizar com localStorage quando a sessão mudar

  useEffect(() => {
    if (session?.user) {
      const userToStore: StoredUserData = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        emailVerified: session.user.emailVerified,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(userToStore));
      setUserData(userToStore);

      console.log("Dados do usuário salvos no localStorage:", userToStore);

    } else if (!isPending && !session) {
      // Limpa localStorage quando não há sessão
      localStorage.removeItem(STORAGE_KEY);
      setUserData(null);
      console.log("Dados removidos do localStorage");
    }
  }, [session, isPending]);

  return {
    session,
    userData,
    isPending,
    error,
    clearStorage: () => {
      localStorage.removeItem(STORAGE_KEY);
      setUserData(null);
    },
  };
}
