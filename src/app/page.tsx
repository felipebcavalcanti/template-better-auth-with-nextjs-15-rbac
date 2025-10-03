"use client";

import React from "react";

// Importações de componentes UI
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const navigationItems = [
    {
      icon: "https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-2.svg",
      isActive: true,
    },
    {
      icon: "https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-5.svg",
      isActive: false,
    },
    {
      icon: "https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-6.svg",
      isActive: false,
    },
  ];

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
      {/* Header */}
      <header className="w-full h-[88px] flex items-center bg-[#20273e]">
        <div className="flex w-full max-w-[1440px] mx-auto px-4 lg:px-12 items-center justify-between">
          <div className="font-semibold text-[#f6f8fc] text-lg lg:text-xl tracking-[0] leading-6">
            Visão 360º
          </div>

          <div className="inline-flex items-center gap-3">
            <Avatar className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1876d2]">
              <AvatarFallback className="bg-[#1876d2] text-blue-50 font-semibold text-base lg:text-lg">
                AC
              </AvatarFallback>
            </Avatar>

            <div className="hidden lg:flex flex-col items-start gap-0.5">
              <div className="font-normal text-blue-50 text-sm tracking-[0] leading-5">
                Ana Cardoso
              </div>

              <div className="font-semibold text-[#eff6ff80] text-xs tracking-[0] leading-4">
                Vendedora
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex w-full h-[calc(100vh-88px)]">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex h-full items-end bg-[#20273e] rounded-[0px_40px_40px_0px] overflow-hidden shadow-[4px_0px_20px_#00000033] relative">
          <div className="flex flex-col w-[114px] items-center justify-between py-9 px-5 relative self-stretch z-[1] rounded-[0px_23px_26px_0px] overflow-hidden">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Image
                className="w-10 h-10 object-cover"
                alt="Logo"
                src="https://c.animaapp.com/mfyg6szb9gzN4V/img/chatgpt-image-15-de-mai--de-2025--12-25-13-1.png"
                width={40}
                height={40}
              />
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col items-center gap-10">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`h-[60px] w-[60px] rounded-xl ${
                    item.isActive
                      ? "bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2]"
                      : "bg-[#ffffff0d] hover:bg-[#ffffff1a]"
                  }`}
                >
                  <Image
                    className="w-6 h-6"
                    alt="Navigation icon"
                    src={item.icon}
                    width={24}
                    height={24}
                  />
                </Button>
              ))}
            </nav>

            {/* User Avatar */}
            <Avatar className="w-12 h-12 bg-[#1876d2]">
              <AvatarFallback className="bg-[#1876d2] text-blue-50 text-base font-semibold">
                AC
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Background gradient effect */}
          <div
            className="absolute w-[calc(100%_+_256px)] top-[115px] left-[41px] h-[959px] z-0 rounded-[10px] rotate-180 blur-[25px] opacity-10"
            style={{
              background: 'conic-gradient(from 164deg at 50% 50%, rgba(66,232,255,0) 26%, rgba(255,126,171,0) 52%, rgba(48,131,255,0) 76%, rgba(113,71,255,0) 100%)'
            }}
          />
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 justify-center px-4 lg:px-8 py-4 lg:py-6 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-[1400px] w-full">
            {/* Left Column - User Profile */}
            <div className="w-full lg:w-[520px] bg-[#ffffff05] rounded-3xl border border-solid border-[#ffffff1a] p-4 lg:p-6 relative h-fit">
              {/* User Name */}
              <div className="text-center mb-5">
                <h2 className="font-bold text-[#f6f8fc] text-xl tracking-[0] leading-6">
                  Ricardo Leite
                </h2>
              </div>

              {/* User Action Buttons */}
              <div className="flex items-center justify-center gap-8 mb-6">
                <Button
                  variant="ghost"
                  className="flex flex-col items-center gap-2 p-2 hover:bg-[#ffffff0d] rounded-xl"
                >
                  <Image className="w-6 h-6" alt="Phone" src="https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-4.svg" width={24} height={24} />
                  <span className="font-normal text-blue-50 text-xs tracking-[0] leading-4 text-center whitespace-nowrap">
                    Telefonar
                  </span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex flex-col items-center gap-2 p-2 hover:bg-[#ffffff0d] rounded-xl"
                >
                  <Image className="w-6 h-6" alt="Email" src="https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-3.svg" width={24} height={24} />
                  <span className="font-normal text-blue-50 text-xs tracking-[0] leading-4 text-center whitespace-nowrap">
                    Enviar e-mail
                  </span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex flex-col items-center gap-2 p-2 hover:bg-[#ffffff0d] rounded-xl"
                >
                  <Image className="w-6 h-6" alt="More" src="https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-8.svg" width={24} height={24} />
                  <span className="font-normal text-blue-50 text-xs tracking-[0] leading-4 text-center whitespace-nowrap">
                    Ver mais
                  </span>
                </Button>
              </div>

              {/* Products Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5">
                    Produtos
                  </h3>
                  <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
                    <ChevronRightIcon className="w-5 h-5 text-[#f6f8fc]" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {products.map((product, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${product.statusColor}`} />
                      <div className="flex-1">
                        <div className="font-normal text-blue-50 text-sm tracking-[0] leading-5">
                          {product.name}
                        </div>
                      </div>
                      <div className="font-semibold text-blue-50 text-sm tracking-[0] leading-5">
                        {product.price}
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
                        <ExternalLinkIcon className="w-[18px] h-[18px] text-[#f6f8fc]" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

              {/* Profile Section */}
              <div className="mb-6">
                <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5 mb-3">
                  Perfil
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileTags.map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-[#1876d2] hover:bg-[#1876d2]/80 text-blue-50 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

              {/* Frases captadas */}
              <div className="mb-6">
                <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5 mb-3">
                  Frases captadas
                </h3>
                <div className="space-y-2.5">
                  {capturedPhrases.map((phrase, index) => (
                    <Card
                      key={index}
                      className="bg-[#ffffff0d] border-none rounded-[0px_12px_12px_12px]"
                    >
                      <CardContent className="p-3">
                        <div className="font-normal text-blue-50 text-sm tracking-[0] leading-[1.3] mb-1.5">
                          &quot;{phrase.text}&quot;
                        </div>
                        <div className="font-semibold text-[#eff6ff80] text-[10px] tracking-[0] leading-3">
                          {phrase.date}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

              {/* Ações no app */}
              <div>
                <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5 mb-3">
                  Ações no app
                </h3>
                <div className="space-y-3">
                  {appActions.map((action, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-normal text-[#eff6ff80] text-[10px] tracking-[0] leading-3">
                        {action.timeAgo}
                      </div>
                      <div className="font-normal text-blue-50 text-sm tracking-[0] leading-5">
                        {action.action}
                      </div>
                      <div className="font-semibold text-[#eff6ff80] text-[10px] tracking-[0] leading-3">
                        {action.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6">
              {/* Top Row */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Sugestão da IA */}
                <div className="w-full lg:w-[629px] h-auto lg:h-[530px] bg-[#ffffff0d] rounded-3xl border border-solid border-[#f6f8fc1a] p-4 lg:p-8 overflow-y-auto">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 mb-6 lg:mb-8">
                    <h2 className="font-bold text-white text-xl lg:text-[26px] tracking-[0] leading-6 lg:leading-8">
                      Sugestão da IA
                    </h2>
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-4 py-2 bg-[#f6f8fc1a] rounded-full text-white text-xs font-semibold hover:bg-[#f6f8fc26]"
                      >
                        NBX
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-4 py-2 bg-[#f6f8fc1a] rounded-full text-white text-xs font-semibold hover:bg-[#f6f8fc26]"
                      >
                        NBA
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-4 py-2 bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] rounded-full text-white text-xs font-semibold hover:bg-[#1876d2]"
                      >
                        NBO
                      </Button>
                    </div>
                  </div>

                  <Card className="bg-[#ffffff0d] border-none rounded-2xl">
                    <CardContent className="p-8">
                      <div className="mb-8">
                        <h3 className="font-semibold text-white text-lg tracking-[0] leading-6 mb-3">
                          Oferta recomendada
                        </h3>
                        <p className="font-normal text-white text-sm tracking-[0] leading-5">
                          Seguro de vida individual com cobertura por doenças graves
                        </p>
                      </div>

                      <div className="flex gap-12 mb-8">
                        <div>
                          <div className="font-semibold text-[#ffffff80] text-xs tracking-[0] leading-4 mb-3">
                            Valor recomendado
                          </div>
                          <div className="font-semibold text-white text-[22px] tracking-[0] leading-6">
                            R$ 127,50/mês
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-[#ffffff80] text-xs tracking-[0] leading-4 mb-3">
                            Probabilidade de conversão
                          </div>
                          <div className="font-semibold text-[#00db03] text-[22px] tracking-[0] leading-6" style={{ textShadow: '0px 0px 10px rgba(0, 220, 4, 0.27)' }}>
                            78%
                          </div>
                        </div>
                      </div>

                      <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                      <div className="mb-8">
                        <h4 className="font-semibold text-white text-lg tracking-[0] leading-6 mb-5">
                          Reason Why
                        </h4>
                        <ul className="space-y-3">
                          {reasonWhyItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="bg-[#22abdd] shadow-[0px_0px_4px_#22abdd] w-2 h-2 rounded-full flex-shrink-0 mt-1.5" />
                              <span className="font-normal text-white text-sm tracking-[0] leading-5">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-center">
                        <Button className="bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2] hover:shadow-[0px_0px_15px_#1876d2] text-white px-8 py-3 rounded-full">
                          <span className="font-semibold text-xs tracking-[0] leading-4">
                            Simular conversa com IA
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Insurance Cards */}
                <div className="w-full lg:w-[312px] space-y-4 lg:space-y-6">
                  <Card className="border border-solid border-[#f6f8fc1a] rounded-3xl p-4 lg:p-8" style={{
                    background: 'linear-gradient(180deg, rgba(42,151,212,1) 0%, rgba(58,183,215,1) 100%)'
                  }}>
                    <CardContent className="p-0">
                      <div className="mb-8">
                        <h3 className="font-bold text-white text-xl tracking-[0] leading-6 mb-3">
                          Seguro de vida individual
                        </h3>
                        <p className="font-normal text-white text-sm tracking-[0] leading-5">
                          Proteção financeira completa com cobertura por morte e doenças graves
                        </p>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="font-semibold text-[#ffffffb2] text-xs tracking-[0] leading-4 mb-2">
                            Por apenas:
                          </div>
                          <div className="font-semibold text-white text-xl tracking-[0] leading-6">
                            R$ 127,50/mês
                          </div>
                        </div>
                        <Button className="bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2] text-white px-5 py-2.5 rounded-full">
                          <span className="font-semibold text-xs tracking-[0] leading-4">
                            Simular
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#ffffff0d] border border-solid border-[#ffffff80] rounded-3xl p-8">
                    <CardContent className="p-0">
                      <div className="mb-8">
                        <h3 className="font-bold text-white text-xl tracking-[0] leading-6 mb-3">
                          Upgrade do seguro residencial
                        </h3>
                        <p className="font-normal text-white text-sm tracking-[0] leading-5">
                          Plano Completo com proteção contra danos elétricos e assistência 24h
                        </p>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="font-semibold text-[#ffffff80] text-xs tracking-[0] leading-4 mb-2">
                            Por apenas:
                          </div>
                          <div className="font-semibold text-white text-xl tracking-[0] leading-6">
                            R$ 127,50/mês
                          </div>
                        </div>
                        <Button className="border border-solid border-[#ffffff80] text-white px-5 py-2.5 rounded-full bg-transparent hover:bg-[#ffffff0d]">
                          <span className="font-semibold text-xs tracking-[0] leading-4">
                            Simular
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Row - Classificação inteligente */}
              <div className="w-full lg:w-[965px] h-auto lg:h-[320px] border border-solid border-[#ffffff1a] rounded-3xl p-4 lg:p-6" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(153,153,153,0.05) 100%)'
        }}>
                <h2 className="font-bold text-white text-lg lg:text-xl tracking-[0] leading-5 lg:leading-6 mb-4 lg:mb-6">
                  Classificação inteligente
                </h2>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 ">
                  {/* Premium Card */}
                  <Card className="w-full lg:w-[332px] h-auto lg:h-[216px] bg-[#1a2332] border-0 rounded-2xl p-6">
                    <CardContent className="p-0 flex flex-col justify-between h-full">
                      <div className="flex flex-col items-center">
                        <div className="relative w-[156px] h-[110px] flex items-center justify-center mb-2">
                          {/* Círculo central cinza - Fill: D9D9D9 */}
                          {/* <div className="absolute w-[104px] h-[104px] top-[16px] rounded-full" style={{
                            background: '#D9D9D9'
                          }}></div> */}

                          {/* SVG para os arcos - Stroke: F6F8FC com 25% opacity, Weight: 12 */}
                          <svg className="absolute w-[156px] h-[110px]" viewBox="0 0 156 110" fill="none">
                            {/* Arco cinza direito (parte superior direita) */}
                            <path
                              d="M 78 18 A 58 58 0 0 1 138 78"
                              stroke="rgba(246, 248, 252, 0.25)"
                              strokeWidth="12"
                              fill="none"
                              strokeLinecap="round"
                            />
                            {/* Arco azul esquerdo (parte superior esquerda) */}
                            <path
                              d="M 18 78 A 58 58 0 0 1 78 18"
                              stroke="#5b9ceb"
                              strokeWidth="12"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>

                          {/* Diamante centralizado */}
                          <div className="relative z-10 text-[32px] mt-4">
                            💎
                          </div>
                        </div>
                        <div className="font-semibold text-[#9ca3af] text-base tracking-[0] leading-5">
                          Premium
                        </div>
                      </div>

                      <div className="flex justify-between items-end gap-3 mt-4">
                        <div className="flex-1">
                          <div className="font-semibold text-[#6b7280] text-[10px] tracking-[0] leading-3 mb-1">
                            Life time value
                          </div>
                          <div className="font-bold text-white text-base tracking-tight leading-5">
                            R$ 24.580,00
                          </div>
                        </div>

                        <div className="w-px h-[40px] bg-[#374151]" />

                        <div className="flex-1 text-right">
                          <div className="font-semibold text-[#6b7280] text-[10px] tracking-[0] leading-3 mb-1">
                            Probabilidade de churn
                          </div>
                          <div className="font-bold text-[#22c55e] text-base tracking-tight leading-5" style={{ textShadow: '0px 0px 8px rgba(34, 197, 94, 0.4)' }}>
                            11%
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Score Cards */}
                  <div className="flex-1 space-y-3 lg:space-y-4">
                    <Card className="bg-[#ffffff0d] rounded-2xl border-0 p-4 lg:p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-normal text-white text-sm tracking-[0] leading-5">
                            Score de expansão
                          </span>
                          <Badge className="bg-[#00a602] text-white text-xs font-medium px-3 py-1 rounded-full">
                            Alto
                          </Badge>
                        </div>
                        <div className="relative w-full">
                          <div className="w-full h-2 bg-[#ffffff1a] rounded-full" />
                          <div className="absolute top-0 left-0 h-2 bg-[#00db03] rounded-full shadow-[0px_4px_4px_#00dc0440]" style={{ width: '85%' }} />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#ffffff0d] rounded-2xl border-0 p-4 lg:p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-3 lg:mb-4">
                          <span className="font-normal text-white text-sm tracking-[0] leading-5">
                            Score de retenção
                          </span>
                          <Badge className="bg-[#c29e00] text-white text-xs font-medium px-3 py-1 rounded-full">
                            Médio
                          </Badge>
                        </div>
                        <div className="relative w-full">
                          <div className="w-full h-2 bg-[#ffffff1a] rounded-full" />
                          <div className="absolute top-0 left-0 h-2 bg-[#e7bc00] rounded-full shadow-[0px_4px_4px_#e7bd0040]" style={{ width: '50%' }} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
