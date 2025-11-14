import React from "react";
import Header from "@/components/visao/header";
import LeftSidebar from "@/components/visao/left-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0b1025] w-full min-h-screen relative overflow-hidden">
      <Header />
      <LeftSidebar />

      <div className="flex w-full min-h-[calc(100vh-88px)] lg:pl-[114px]">
        {/* Conteúdo Principal - children de cada página */}
        <div className="flex flex-1 justify-center overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
