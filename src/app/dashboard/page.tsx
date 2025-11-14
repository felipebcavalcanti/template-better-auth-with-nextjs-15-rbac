"use client";

import React from "react";
import UserProfileCard from "@/components/visao/user-profile-card";
import AISuggestion from "@/components/visao/ai-suggestion";
import InsuranceCards from "@/components/visao/insurance-cards";
import SmartClassification from "@/components/visao/smart-classification";

export default function Visao() {
  const products = [
    {
      name: "Seguro automóvel",
      price: "R$ 185,90/mês",
      status: "active",
      statusColor: "bg-[#00db03]",
    },
    {
      name: "Seguro Residencial",
      price: "R$ 89,90/mês",
      status: "active",
      statusColor: "bg-[#00db03]",
    },
    {
      name: "Seguro Viagem",
      price: "R$ 230,00/mês",
      status: "inactive",
      statusColor: "bg-[#db3300]",
    },
  ];

  const profileTags = [
    "Família com filhos",
    "Profissional liberal",
    "Investidor",
  ];

  const capturedPhrases = [
    {
      text: "Estava procurando um seguro de vida mais completo para minha família",
      date: "Atendimento do dia 12/05/2025",
    },
    {
      text: "O valor do meu seguro auto está muito caro comparado com outras empresas",
      date: "Atendimento do dia 12/05/2025",
    },
  ];

  const appActions = [
    {
      timeAgo: "45 min atrás",
      action: "Consultou página de planos de saúde",
      details: "Tempo na página 3min e 42 seg",
    },
    {
      timeAgo: "1 dia atrás",
      action: "Iniciou simulação de seguro auto",
      details: "1 dia atrás",
    },
  ];

  const reasonWhyItems = [
    'Cliente tem perfil "profissional liberal" compatível com produto',
    "Idade (35 anos) em faixa de preço competitivo",
    "Cliente já demonstrou preocupação com família em atendimentos",
    "Produto complementa portfólio atual sem sobreposição",
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-[1400px] w-full">
      {/* Coluna da esquerda - User Profile */}
      <UserProfileCard
        userName="Ricardo Leite"
        products={products}
        profileTags={profileTags}
        capturedPhrases={capturedPhrases}
        appActions={appActions}
      />

      {/* Coluna da direita */}
      <div className="flex-1 flex flex-col gap-4 lg:gap-6">
        {/* Linha superior */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <AISuggestion reasonWhyItems={reasonWhyItems} />
          <InsuranceCards />
        </div>

        {/* Classificação inteligente */}
        <SmartClassification />
      </div>
    </div>
  );
}
