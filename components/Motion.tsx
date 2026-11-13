"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./Reveal";

/** Counts "5+" up from 0 when scrolled into view; non-numeric values render as-is. */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\d+)(\D*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, 0.5);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!seen || !m) return;
    const target = Number(m[1]);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen, value]);

  if (!m) return <>{value}</>;
  return (
    <span ref={ref}>
      {n}
      {m[2]}
    </span>
  );
}

/** Steps light up one by one with a progress line connecting them. */
export function ProcessSteps({ steps }: { steps: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const on = useInView(ref, 0.35);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!on) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(steps.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setActive(i);
      if (i >= steps.length) clearInterval(id);
    }, 550);
    return () => clearInterval(id);
  }, [on, steps.length]);

  const progress = steps.length > 1 ? (Math.max(active - 1, 0) / (steps.length - 1)) * 100 : 0;

  return (
    <ol ref={ref} className="relative mt-8 grid gap-4 sm:grid-cols-5">
      <span aria-hidden className="absolute left-[10%] right-[10%] top-8 hidden h-0.5 bg-slate-200 sm:block">
        <span
          className="block h-full bg-[var(--brand)] transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </span>
      {steps.map((s, i) => {
        const lit = i < active;
        return (
          <li
            key={s}
            className={`relative rounded-xl bg-white p-4 text-center shadow-sm ring-1 transition-all duration-500 ${
              lit ? "translate-y-0 opacity-100 ring-[var(--brand)]/40" : "translate-y-4 opacity-40 ring-slate-200"
            }`}
          >
            <span
              className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors duration-500 ${
                lit ? "bg-[var(--brand)] text-white" : "bg-slate-200 text-slate-500"
              }`}
            >
              {lit ? "✓" : i + 1}
            </span>
            <p className="mt-2 text-sm font-semibold">{s}</p>
          </li>
        );
      })}
    </ol>
  );
}
