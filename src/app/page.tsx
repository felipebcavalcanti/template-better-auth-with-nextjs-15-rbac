"use client";

import React from "react";
import Header from "@/components/home/header";
import LeftSidebar from "@/components/home/left-sidebar";
import UserProfileCard from "@/components/home/user-profile-card";
import AISuggestion from "@/components/home/ai-suggestion";
import InsuranceCards from "@/components/home/insurance-cards";
import SmartClassification from "@/components/home/smart-classification";

export default function Home() {

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
    <div className="bg-[#0b1025] w-full min-h-screen relative overflow-hidden">
      <Header />

      <div className="flex w-full h-[calc(100vh-88px)]">
        <LeftSidebar />

        {/* Main Content */}
        <div className="flex flex-1 justify-center px-4 lg:px-8 py-4 lg:py-6 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-[1400px] w-full">
            {/* Left Column - User Profile */}
            <UserProfileCard
              userName="Ricardo Leite"
              products={products}
              profileTags={profileTags}
              capturedPhrases={capturedPhrases}
              appActions={appActions}
            />

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6">
              {/* Top Row */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                <AISuggestion reasonWhyItems={reasonWhyItems} />
                <InsuranceCards />
              </div>
    
              {/* Bottom Row - Classificação inteligente */}
              <SmartClassification />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
