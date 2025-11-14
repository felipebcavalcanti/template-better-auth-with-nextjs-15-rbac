import { NextResponse } from "next/server";
import { offersData } from "@/lib/mock-data";

export async function GET() {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    success: true,
    data: offersData,
  });
}
