import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/providers/session-provider";
import { QueryProvider } from "@/providers/query-provider";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nortus",
  description: "Desafio Nortus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <QueryProvider>
          <SessionProvider>
            {children}
            <Toaster position="top-left" richColors />
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
