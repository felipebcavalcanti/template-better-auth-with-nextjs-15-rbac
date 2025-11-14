"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useSegments } from "@/hooks/use-board-data";

export const DashboardSummarySection = () => {
  const { data, isLoading, error } = useSegments();

  if (isLoading) {
    return (
      <Card className="w-full lg:w-[470px] bg-[#252b48] border-[#FFFFFF0D] rounded-3xl">
        <CardContent className="flex items-center justify-center p-6 lg:p-8">
          <div className="montserrat-regular-14 text-slate-400">Carregando...</div>
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="w-full lg:w-[470px] bg-[#252b48] border-[#FFFFFF0D] rounded-3xl">
        <CardContent className="flex items-center justify-center p-6 lg:p-8">
          <div className="montserrat-regular-14 text-red-400">Erro ao carregar dados</div>
        </CardContent>
      </Card>
    );
  }

  const segmentBadges = data.slice(0, 3);
  const segmentBadgesRow2 = data.slice(3, 5);
  return (
    <Card className="w-full lg:w-[470px] bg-[#252b48] border-[#FFFFFF0D] rounded-3xl">
      <CardContent className="flex flex-col items-center gap-6 p-6 lg:p-8">
        <header className="w-full">
          <h2 className="montserrat-bold-20 text-white">
            Mapa de impacto por segmento
          </h2>
        </header>

        <div className="flex flex-col items-center gap-6 w-full">
          <Image
            className="w-[160px] h-[160px]"
            alt="Donut chart"
            src="https://c.animaapp.com/mggl9kj3au5esw/img/donut-chart.svg"
             width={160}
            height={160}
          />

          <div className="flex flex-col items-center gap-3 w-full">
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="inline-flex items-start gap-2">
                {segmentBadges.map((segment, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="h-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1f37] rounded-[100px] border-[#FFFFFF0D] hover:bg-[#FFFFFF0D] transition-colors cursor-pointer"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${segment.color} ${segment.shadow}`}
                    />
                    <span className="montserrat-regular-14 text-white whitespace-nowrap">
                      {segment.label}
                    </span>
                  </Badge>
                ))}
              </div>

              <div className="inline-flex items-start gap-2">
                {segmentBadgesRow2.map((segment, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="h-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1f37] rounded-[100px] border-[#FFFFFF0D] hover:bg-[#FFFFFF0D] transition-colors cursor-pointer"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${segment.color} ${segment.shadow}`}
                    />
                    <span className="montserrat-regular-14 text-white whitespace-nowrap">
                      {segment.label}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Button className="h-10 w-full bg-[#2DB3C8] hover:bg-[#25a0b3] rounded-[100px] shadow-[0px_0px_10px_#2DB3C8] transition-colors">
          <span className="montserrat-semibold-18 text-white whitespace-nowrap">
            Analisar segmentos
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
