"use client";

import { useEffect, useState } from "react";

type Line = { kind: "code" | "cmd" | "out"; text: string };

const SCRIPT: Line[] = [
  { kind: "code", text: "// LoanController.java" },
  { kind: "code", text: "@RestController" },
  { kind: "code", text: "public class LoanController {" },
  { kind: "code", text: '  @PostMapping("/api/loans")' },
  { kind: "code", text: "  public Loan create(@RequestBody Req r) {" },
  { kind: "code", text: "    return service.create(r);" },
  { kind: "code", text: "  }" },
  { kind: "code", text: "}" },
  { kind: "cmd", text: "npm run build" },
  { kind: "out", text: "✓ compiled successfully" },
  { kind: "out", text: "✓ 128/128 tests passed" },
  { kind: "out", text: "✓ security scan: 0 critical" },
  { kind: "cmd", text: "git push origin main" },
  { kind: "out", text: "→ live on jasa.ariantoekaputra.com" },
];

const TOKEN = /(\/\/.*|"[^"]*"?|@\w+|\b(?:public|class|return|new|private|final)\b)/g;
const KEYWORD = /^(public|class|return|new|private|final)$/;

function highlight(text: string) {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("//")) return <span key={i} className="text-slate-500">{part}</span>;
    if (part.startsWith('"')) return <span key={i} className="text-emerald-300">{part}</span>;
    if (part.startsWith("@")) return <span key={i} className="text-amber-300">{part}</span>;
    if (KEYWORD.test(part)) return <span key={i} className="text-fuchsia-300">{part}</span>;
    return <span key={i}>{part}</span>;
  });
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

function renderLine(line: Line, text: string, key: string | number, typing = false) {
  const caret = typing ? <span className="caret text-sky-300" /> : null;
  if (line.kind === "cmd") {
    return (
      <p key={key} className="whitespace-pre text-white">
        <span className="text-emerald-300">$ </span>
        {text}
        {caret}
      </p>
    );
  }
  if (line.kind === "out") {
    return (
      <p key={key} className="line-in whitespace-pre text-sky-200">
        {text}
      </p>
    );
  }
  return (
    <p key={key} className="whitespace-pre text-slate-200">
      {highlight(text)}
      {caret}
    </p>
  );
}

/** Animated "code being written, then built & deployed" terminal. */
export default function Terminal() {
  const reduced = usePrefersReducedMotion();
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let t: ReturnType<typeof setTimeout>;

    if (idx >= SCRIPT.length) {
      t = setTimeout(() => {
        setIdx(0);
        setChars(0);
      }, 3800);
      return () => clearTimeout(t);
    }

    const line = SCRIPT[idx];
    if (line.kind === "out") {
      t = setTimeout(() => {
        setIdx((i) => i + 1);
        setChars(0);
      }, 420);
    } else if (chars < line.text.length) {
      const speed = line.kind === "cmd" ? 55 : 24;
      t = setTimeout(() => setChars((c) => c + 1), speed);
    } else {
      t = setTimeout(() => {
        setIdx((i) => i + 1);
        setChars(0);
      }, line.kind === "cmd" ? 450 : 180);
    }
    return () => clearTimeout(t);
  }, [idx, chars, reduced]);

  const shown = reduced ? SCRIPT : SCRIPT.slice(0, idx);
  const current = !reduced && idx < SCRIPT.length ? SCRIPT[idx] : null;

  return (
    <div className="rounded-xl bg-slate-900/85 p-4 font-mono text-xs leading-5 shadow-2xl ring-1 ring-white/10">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-[10px] text-slate-400">arianto@dev: ~/project</span>
      </div>
      <div className="min-h-[18.5rem] overflow-hidden">
        {shown.map((l, i) => renderLine(l, l.text, i))}
        {current && current.kind !== "out" && renderLine(current, current.text.slice(0, chars), "cur", true)}
        {(reduced || idx >= SCRIPT.length) && (
          <p className="whitespace-pre text-emerald-300">
            $ <span className="caret text-sky-300" />
          </p>
        )}
      </div>
    </div>
  );
}

/** Types a word, pauses, deletes it, then moves to the next one. */
export function TypedWords({ words }: { words: string[] }) {
  const reduced = usePrefersReducedMotion();
  const [w, setW] = useState(0);
  const [n, setN] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setW(0);
    setN(0);
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    if (reduced) return;
    const word = words[w % words.length] ?? "";
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && n < word.length) {
      t = setTimeout(() => setN(n + 1), 85);
    } else if (!deleting) {
      t = setTimeout(() => setDeleting(true), 1400);
    } else if (n > 0) {
      t = setTimeout(() => setN(n - 1), 40);
    } else {
      setDeleting(false);
      setW((x) => x + 1);
      return;
    }
    return () => clearTimeout(t);
  }, [n, deleting, w, words, reduced]);

  const word = words[w % words.length] ?? "";
  return (
    <span className="text-white">
      {reduced ? words[0] : word.slice(0, n)}
      {!reduced && <span className="caret" />}
    </span>
  );
}
