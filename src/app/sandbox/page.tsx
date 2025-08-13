"use client";
import { useEffect, useRef, useState } from "react";
// removed page-local nav; global layout handles header/footer

function decodeState(hash: string): string | null {
  try {
    if (!hash) return null;
    const b64 = hash.startsWith("#") ? hash.slice(1) : hash;
    const decoded = atob(b64);
    return decoded;
  } catch {
    return null;
  }
}

function encodeState(text: string): string {
  try {
    return btoa(text);
  } catch {
    return "";
  }
}

const DEFAULT_POML = `<poml>
  <role>You are a patient teacher.</role>
  <task>Explain photosynthesis using the image.</task>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Photosynthesis_equation.svg" alt="Diagram" />
  <output-format>Under 80 words, friendly tone.</output-format>
</poml>`;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderLight(poml: string): string {
  const getTagText = (tag: string) => {
    const m = poml.match(new RegExp(`<${tag}>([\s\S]*?)<\/${tag}>`, "i"));
    return m ? m[1].trim() : "";
  };
  const imgs = Array.from(poml.matchAll(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi)).map((m) => m[1]);
  const role = getTagText("role");
  const task = getTagText("task");
  const fmt = getTagText("output-format");
  let html = "";
  if (role) html += `<div><strong>Role</strong><div class="mt-1">${escapeHtml(role)}</div></div>`;
  if (task) html += `<div class="mt-3"><strong>Task</strong><div class="mt-1">${escapeHtml(task)}</div></div>`;
  if (fmt) html += `<div class="mt-3"><strong>Output format</strong><div class="mt-1">${escapeHtml(fmt)}</div></div>`;
  if (imgs.length) {
    html += `<div class="mt-3"><strong>Images</strong><div class="mt-2 flex gap-3 flex-wrap">`;
    for (const src of imgs) {
      const esc = escapeHtml(src);
      html += `<img src="${esc}" alt="" style="max-width:200px;max-height:140px;border:1px solid #e5e7eb;border-radius:8px;padding:4px;background:#fff"/>`;
    }
    html += `</div></div>`;
  }
  if (!html) {
    html = `<div class="opacity-70">No previewable content detected. Add &lt;role&gt;, &lt;task&gt;, &lt;output-format&gt; or &lt;img&gt;.</div>`;
  }
  html += `<div class="mt-4 text-xs opacity-70">Lite preview. For full fidelity, run with an LLM locally using the official SDKs.</div>`;
  return html;
}

export default function SandboxPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const monacoRef = useRef<null | typeof import("monaco-editor")>(null);
  const editorRef = useRef<null | import("monaco-editor").editor.IStandaloneCodeEditor>(null);
  const [pomlText, setPomlText] = useState<string>(DEFAULT_POML);
  const [previewHtml, setPreviewHtml] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const initial = decodeState(window.location.hash) ?? DEFAULT_POML;
    setPomlText(initial);
  }, []);

  useEffect(() => {
    let disposed = false;
    (async () => {
      if (!containerRef.current) return;
      if (!monacoRef.current) {
        monacoRef.current = await import("monaco-editor");
      }
      if (!containerRef.current || disposed) return;
      const editor = monacoRef.current.editor.create(containerRef.current, {
        value: pomlText,
        language: "xml",
        theme: "vs-light",
        minimap: { enabled: false },
        fontSize: 14,
        automaticLayout: true,
      });
      editorRef.current = editor;
      const sub = editor.onDidChangeModelContent(() => {
        const value = editor.getValue();
        setPomlText(value);
      });
      return () => {
        sub.dispose();
        editor.dispose();
      };
    })();
    return () => {
      disposed = true;
    };
  }, [pomlText]);

  useEffect(() => {
    try {
      setError("");
      const html = renderLight(pomlText);
      setPreviewHtml(html);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg);
      setPreviewHtml("");
    }
  }, [pomlText]);

  const updateUrl = () => {
    const encoded = encodeState(pomlText);
    if (encoded) {
      history.replaceState(null, "", `#${encoded}`);
    }
  };

  const [ollamaDetected, setOllamaDetected] = useState<boolean | null>(null);
  const [running, setRunning] = useState(false);
  const [runOutput, setRunOutput] = useState<string>("");
  const enableLocal = process.env.NEXT_PUBLIC_ENABLE_LOCAL === '1';
  useEffect(() => {
    if (!enableLocal) { setOllamaDetected(false); return; }
    let canceled = false;
    fetch("/api/ollama/health")
      .then((r) => r.json())
      .then((data) => { if (!canceled) setOllamaDetected(!!data?.ok); })
      .catch(() => { if (!canceled) setOllamaDetected(false); });
    return () => { canceled = true; };
  }, [enableLocal]);

  const runLocal = async (): Promise<void> => {
    if (!ollamaDetected || running) return;
    setRunning(true);
    setRunOutput("");
    try {
      const r = await fetch("/api/run", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ poml: pomlText }) });
      const data = await r.json();
      if (data?.ok) setRunOutput(data.output ?? ""); else setRunOutput(data?.error ?? "Run failed");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Run failed";
      setRunOutput(msg);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 grid grid-rows-[auto_1fr] md:grid-cols-2 gap-0">
        <section className="p-4 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 min-h-[40vh]">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-medium">Editor (.poml)</h1>
            <div className="flex items-center gap-2">
              <button onClick={updateUrl} className="text-xs rounded-md px-2 py-1 border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5">Share URL</button>
            </div>
          </div>
          <div ref={containerRef} className="w-full h-[50vh] md:h-[calc(100vh-140px)]" />
          {error && (
            <div className="mt-2 text-xs text-red-600">{error}</div>
          )}
        </section>
        <section className="p-4">
          <h2 className="font-medium mb-2">Preview</h2>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-4 bg-white text-black overflow-auto" dangerouslySetInnerHTML={{ __html: previewHtml }} />
          {enableLocal && (
            <div className="mt-4 text-xs opacity-80">
              {ollamaDetected === null && "Detecting local runtime..."}
              {ollamaDetected === false && (
                <span>
                  Local mode not detected. Install Ollama: brew install ollama → ollama serve → ollama pull llama3.1
                </span>
              )}
              {ollamaDetected === true && (
                <span>Local mode available (Ollama detected at localhost:11434).</span>
              )}
            </div>
          )}
          <div className="mt-3">
            <button disabled={!enableLocal || !ollamaDetected || running} onClick={runLocal} className={`text-sm rounded-md px-3 py-2 border ${(enableLocal && ollamaDetected) ? "border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5" : "opacity-60 cursor-not-allowed border-black/10"}`}>{running?"Running...":"Run (Local)"}</button>
          </div>
          {runOutput && (
            <div className="mt-3 text-sm rounded-lg border border-black/10 dark:border-white/15 p-3 whitespace-pre-wrap">{runOutput}</div>
          )}
        </section>
      </main>
    </div>
  );
}


