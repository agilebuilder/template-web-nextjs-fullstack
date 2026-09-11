import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: siteConfig.name,
    timestamp: new Date().toISOString(),
  });
}
