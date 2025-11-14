import { NextResponse } from "next/server";
import { segmentBadges } from "@/lib/mock-data";

export async function GET() {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    success: true,
    data: segmentBadges,
  });
}
