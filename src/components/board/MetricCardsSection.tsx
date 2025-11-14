"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useMetrics } from "@/hooks/use-board-data";

export const MetricCardsSection = () => {
  const { data: metricCards, isLoading, error } = useMetrics();

  if (isLoading) {
    return (
      <div className="flex flex-col items-start gap-4 w-full lg:w-[470px]">
        <div className="montserrat-regular-14 text-slate-400">
          Carregando métricas...
        </div>
      </div>
    );
  }

  if (error || !metricCards) {
    return (
      <div className="flex flex-col items-start gap-4 w-full lg:w-[470px]">
        <div className="montserrat-regular-14 text-red-400">
          Erro ao carregar métricas
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4 w-full lg:w-[470px]">
      <div className="flex items-center gap-4 relative w-full flex-[0_0_auto]">
        {metricCards.slice(0, 2).map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-6 p-5 relative bg-[#252b48] rounded-2xl overflow-hidden border border-solid border-[#FFFFFF0D] flex-1 h-[128px]"
          >
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-3 relative w-full flex-[0_0_auto]">
                <div className="montserrat-regular-14 text-[#F6FBFC] whitespace-nowrap">
                  {card.title}
                </div>

                <div className="flex items-center relative w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-bold text-white text-3xl tracking-[0] leading-none whitespace-nowrap">
                      {card.value}
                    </div>
                  </div>
                </div>

                <div className={`montserrat-regular-14 ${card.changeColor}`}>
                  {card.change}
                </div>
              </div>

              {card.hasUpArrow && (
                <div className="absolute top-[73px] left-[134px] w-[87px] h-[68px]">
                  <Image
                    className="top-0 left-0 w-[87px] h-[55px] absolute object-cover"
                    alt="Arrowup"
                    src="https://c.animaapp.com/mggl9kj3au5esw/img/arrowup-2.png"
                    width={80}
                    height={80}
                  />
                  <Image
                    className="-top-1 -left-1 w-[95px] h-[59px] blur-[2px] absolute object-cover"
                    alt="Arrowup"
                    src="https://c.animaapp.com/mggl9kj3au5esw/img/arrowup-2.png"
                    width={80}
                    height={80}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-4 relative w-full flex-[0_0_auto]">
        {metricCards.slice(2, 4).map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-6 p-5 relative bg-[#252b48] rounded-2xl overflow-hidden border border-solid border-[#FFFFFF0D] flex-1 h-[128px]"
          >
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-3 relative w-full flex-[0_0_auto]">
                <div className="montserrat-regular-14 text-[#F6FBFC] whitespace-nowrap">
                  {card.title}
                </div>

                <div className="flex items-center relative w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-bold text-white text-3xl tracking-[0] leading-none whitespace-nowrap">
                      {card.value}
                    </div>
                  </div>
                </div>

                <div className={`montserrat-regular-14 ${card.changeColor}`}>
                  {card.change}
                </div>
              </div>

              {card.hasDownArrow && (
                <>
                  <Image
                    className="top-[45px] left-[124px] w-[103px] h-[83px] absolute object-cover"
                    alt="Arrowdown"
                    src="https://c.animaapp.com/mggl9kj3au5esw/img/arrowdown-2.png"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="top-10 left-[119px] w-[108px] h-[88px] blur-[2.5px] absolute object-cover"
                    alt="Arrowdown"
                    src="https://c.animaapp.com/mggl9kj3au5esw/img/arrowdown-2.png"
                    width={40}
                    height={40}
                  />
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
