import { NextResponse } from "next/server";

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);
  try {
    const r = await fetch("http://127.0.0.1:11434/api/tags", { signal: controller.signal });
    clearTimeout(timeout);
    return NextResponse.json({ ok: r.ok });
  } catch {
    clearTimeout(timeout);
    return NextResponse.json({ ok: false });
  }
}



