"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useWorkflows } from "@/hooks/use-board-data";

export const KPIChartSection = ()  => {
  const { data: workflowsData, isLoading, error } = useWorkflows();

  if (isLoading) {
    return (
      <section className="flex flex-col w-full lg:w-[470px] items-start gap-6 p-6 lg:p-8 bg-[#252b48] rounded-3xl border border-solid border-[#FFFFFF0D]">
        <div className="montserrat-regular-14 text-slate-400">Carregando...</div>
      </section>
    );
  }

  if (error || !workflowsData) {
    return (
      <section className="flex flex-col w-full lg:w-[470px] items-start gap-6 p-6 lg:p-8 bg-[#252b48] rounded-3xl border border-solid border-[#FFFFFF0D]">
        <div className="montserrat-regular-14 text-red-400">Erro ao carregar dados</div>
      </section>
    );
  }
  return (
    <section className="flex flex-col w-full lg:w-[470px] items-start gap-6 p-6 lg:p-8 bg-[#252b48] rounded-3xl border border-solid border-[#FFFFFF0D]">
      <h2 className="montserrat-bold-20 text-white self-stretch">
        Workflows inteligentes Ativos
      </h2>

      {workflowsData.map((workflow, index) => (
        <Card
          key={index}
          className="flex flex-col items-start gap-4 p-5 relative self-stretch w-full bg-[#1a1f37] rounded-2xl overflow-hidden border border-solid border-[#FFFFFF0D]"
        >
          <CardContent className="p-0 w-full">
            <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <h3 className="montserrat-bold-20 text-white">
                  {workflow.title}
                </h3>

                <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <span className="montserrat-regular-14 text-[#F6FBFC] whitespace-nowrap">
                      Conversão:
                    </span>

                    <span className="montserrat-regular-14 text-[#00db03] whitespace-nowrap">
                      {workflow.conversion}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <span className="montserrat-regular-14 text-[#F6FBFC] whitespace-nowrap">
                      ROI:
                    </span>

                    <span className="montserrat-regular-14 text-[#00db03] whitespace-nowrap">
                      {workflow.roi}
                    </span>
                  </div>
                </div>
              </div>

              <Image
                className="relative w-5 h-5"
                alt="Icon"
                src={workflow.icon1}
                width={20}
                height={20}
              />

              <Image
                className="relative w-5 h-5"
                alt="Icon"
                src={workflow.icon2}
                width={20}
                height={20}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
