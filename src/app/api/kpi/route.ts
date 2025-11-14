import { NextResponse } from "next/server";
import { kpiData } from "@/lib/mock-data";

export async function GET(request: Request) {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 300));

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "arpu";

  return NextResponse.json({
    success: true,
    data: {
      type,
      values: kpiData[type as keyof typeof kpiData] || kpiData.arpu,
    },
  });
}
