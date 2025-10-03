"use client";

import ReturnButton from "@/components/return-button";
import { useParams } from "next/navigation";

export default function ProfilePage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ReturnButton href="/" label="home" />
        <p className="mb-2">ID da URL: {id}</p>
      </div>
    </div>
  );
}
