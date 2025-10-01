"use client";

import { useSessionStorage } from "@/hooks/use-session-storage";
import { Button } from "./ui/button";

export function ProfileClient() {
  const { session, userData, isPending, clearStorage } = useSessionStorage();

  if (isPending) {
    return (
      <div className="mt-4 w-full max-w-2xl">
        <p className="text-center">Carregando sessão...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="mt-4 w-full max-w-2xl">
        <p className="text-center">Nenhuma sessão encontrada</p>
      </div>
    );
  }

  return (
    <div className="mt-4 w-full max-w-2xl space-y-4">
      <div className="bg-green-500/10 border border-green-500 rounded p-3">
        <p className="text-sm text-green-700 dark:text-green-400">
          ✅ Dados sincronizados com localStorage (chave: &quot;better-auth-user&quot;)
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Dados do Usuário (do localStorage):</h2>
        <div className="bg-muted p-4 rounded space-y-2">
          <p>
            <strong>Nome:</strong> {userData?.name || session.user.name}
          </p>
          <p>
            <strong>Email:</strong> {userData?.email || session.user.email}
          </p>
          <p>
            <strong>ID:</strong> {userData?.id || session.user.id}
          </p>
          <p>
            <strong>Email Verificado:</strong>{" "}
            {userData?.emailVerified ? "Sim" : "Não"}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Session Completa (da API):</h2>
        <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Dados do localStorage:</h2>
        <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
          {JSON.stringify(userData, null, 2)}
        </pre>
      </div>

      <Button
        variant="outline"
        onClick={() => {
          clearStorage();
          window.location.reload();
        }}
        className="w-full"
      >
        🗑️ Limpar localStorage e recarregar
      </Button>
    </div>
  );
}
