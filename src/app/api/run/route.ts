import { NextResponse } from "next/server";

function extractTag(text: string, tag: string): string | null {
  const m = text.match(new RegExp(`<${tag}>([\s\S]*?)<\/${tag}>`, "i"));
  return m ? m[1].trim() : null;
}

function buildPromptFromPoml(poml: string): string {
  const role = extractTag(poml, "role");
  const task = extractTag(poml, "task");
  const format = extractTag(poml, "output-format");
  const parts: string[] = [];
  if (role) parts.push(`Role: ${role}`);
  if (task) parts.push(`Task: ${task}`);
  if (format) parts.push(`Output format: ${format}`);
  return parts.join("\n\n") || poml;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const poml: string = body?.poml ?? "";
    if (!poml || typeof poml !== "string") {
      return NextResponse.json({ ok: false, error: "Missing 'poml' string in body" }, { status: 400 });
    }
    const prompt = buildPromptFromPoml(poml);

    const model = process.env.OLLAMA_MODEL || "llama3.1";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const r: Response = await fetch("http://127.0.0.1:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, prompt, stream: false }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!r.ok) {
        const text = await r.text();
        return NextResponse.json({ ok: false, error: `Ollama error: ${r.status} ${text}` }, { status: 502 });
      }
      const data = await r.json();
      return NextResponse.json({ ok: true, output: data?.response ?? "" });
    } catch (e: unknown) {
      clearTimeout(timeout);
      const msg = e instanceof Error ? e.message : "Local runtime not available";
      return NextResponse.json({ ok: false, error: msg }, { status: 503 });
    }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unexpected error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}


