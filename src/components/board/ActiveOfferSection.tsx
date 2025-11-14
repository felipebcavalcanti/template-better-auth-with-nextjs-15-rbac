"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useOffers } from "@/hooks/use-board-data";

export const ActiveOffersSection = () => {
  const { data: offersData, isLoading, error } = useOffers();

  if (isLoading) {
    return (
      <div className="flex flex-col items-start gap-4 p-6 lg:p-8 bg-[#252b48] rounded-3xl border border-solid border-[#FFFFFF0D] w-full">
        <div className="montserrat-regular-14 text-slate-400">Carregando...</div>
      </div>
    );
  }

  if (error || !offersData) {
    return (
      <div className="flex flex-col items-start gap-4 p-6 lg:p-8 bg-[#252b48] rounded-3xl border border-solid border-[#FFFFFF0D] w-full">
        <div className="montserrat-regular-14 text-red-400">Erro ao carregar dados</div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start gap-4 p-6 lg:p-8 bg-[#252b48] rounded-3xl border border-solid border-[#FFFFFF0D] w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="montserrat-bold-20 text-white">
          Ranking de ofertas ativas
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-[#2DB3C8] hover:bg-[#2DB3C8]/90"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14L11 11M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-none hover:bg-transparent">
            <TableHead className="montserrat-regular-14 text-[#F6FBFC]">
              Oferta
            </TableHead>
            <TableHead className="text-right montserrat-regular-14 text-[#F6FBFC]">
              Conversão
            </TableHead>
            <TableHead className="text-right montserrat-regular-14 text-[#F6FBFC]">
              Receita
            </TableHead>
            <TableHead className="text-right montserrat-regular-14 text-[#F6FBFC]">
              Feedback
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offersData.map((offer, index) => (
            <TableRow
              key={`offer-${index}`}
              className="border-[#FFFFFF0D] hover:bg-[#FFFFFF05] transition-colors"
            >
              <TableCell className="montserrat-semibold-18 text-white py-4">
                {offer.name}
              </TableCell>
              <TableCell className="text-right montserrat-semibold-18 text-white py-4">
                {offer.conversion}
              </TableCell>
              <TableCell className="text-right montserrat-semibold-18 text-white py-4">
                {offer.revenue}
              </TableCell>
              <TableCell className="text-right montserrat-semibold-18 text-white py-4">
                {offer.feedback}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
