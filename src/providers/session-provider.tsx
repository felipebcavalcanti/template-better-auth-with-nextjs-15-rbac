"use client";

import { type BetterFetchError } from "@better-fetch/fetch";
import { useSessionStorage } from "@/hooks/use-session-storage";
import { createContext, useContext, ReactNode } from "react";

interface StoredUserData {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
}

interface SessionContextType {
  session: ReturnType<typeof useSessionStorage>["session"];
  userData: StoredUserData | null;
  isPending: boolean;
  error: BetterFetchError | null;
  clearStorage: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const sessionData = useSessionStorage();

  return (
    <SessionContext.Provider value={sessionData}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("Use useSession dentro de um SessionProvider.");
  }
  return context;
}