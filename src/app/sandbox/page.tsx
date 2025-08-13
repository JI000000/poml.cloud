"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight">Sandbox</h1>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/templates">Templates</Link>
        </nav>
      </header>
      <main className="flex-1 grid grid-rows-[auto_1fr] md:grid-cols-2 gap-0">
        <section className="p-4 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 min-h-[40vh]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium">Editor (.poml)</h2>
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
        </section>
      </main>
    </div>
  );
}


