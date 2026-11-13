"use client";

import { useState } from "react";
import { content, type Lang } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Terminal, { TypedWords } from "@/components/Terminal";
import { CountUp, ProcessSteps } from "@/components/Motion";

const WA = process.env.NEXT_PUBLIC_WA_NUMBER ?? "";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const waLink = (text: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const TYPED: Record<Lang, string[]> = {
  id: ["Website Company Profile", "Aplikasi Web", "REST API Backend", "Sistem Kasir (POS)", "Portal Berita", "LMS Online"],
  en: ["Company Website", "Web Application", "REST API Backend", "POS System", "News Portal", "Online LMS"],
};

export default function Site() {
  const [lang, setLang] = useState<Lang>("id");
  const [filter, setFilter] = useState("all");
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const t = content[lang];

  const navItems = [
    ["#home", t.nav.home],
    ["#about", t.nav.about],
    ["#services", t.nav.services],
    ["#why", t.nav.why],
    ["#portfolio", t.nav.portfolio],
    ["#contact", t.nav.contact],
  ];

  const projects =
    filter === "all" ? t.portfolio.items : t.portfolio.items.filter((p) => p.category === filter);

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `${t.contact.name}: ${form.name}`,
      `${t.contact.email}: ${form.email}`,
      `${t.contact.service}: ${form.service}`,
      `${t.contact.budget}: ${form.budget}`,
      `${t.contact.timeline}: ${form.timeline}`,
      "",
      form.message,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const input =
    "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";

  const card =
    "rounded-xl border border-slate-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--brand)]/40";

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-bold text-[var(--brand-dark)]">
            Arianto<span className="text-[var(--brand)]">.dev</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-[var(--brand)]">{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-semibold transition hover:border-[var(--brand)]"
              aria-label="Toggle language"
            >
              {lang === "id" ? "ID | en" : "id | EN"}
            </button>
            <button
              onClick={() => setMenu(!menu)}
              className="rounded-md border border-slate-300 px-2.5 py-1 text-sm md:hidden"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </nav>
        {menu && (
          <ul className="border-t border-slate-200 bg-white px-4 py-2 md:hidden">
            {navItems.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setMenu(false)} className="block py-2 text-sm font-medium">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-[#0b3a5b] via-[var(--brand-dark)] to-[var(--brand)] text-white"
        >
          <div aria-hidden className="blob pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
          <div
            aria-hidden
            className="blob pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl"
            style={{ animationDelay: "-6s" }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="fade-up inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                {t.hero.badge}
              </span>
              <h1 className="fade-up mt-4 text-3xl font-extrabold leading-tight md:text-5xl" style={{ "--d": "150ms" } as React.CSSProperties}>
                {t.hero.title}
              </h1>
              <p className="fade-up mt-5 font-mono text-sm text-sky-200" style={{ "--d": "300ms" } as React.CSSProperties}>
                <span className="text-emerald-300">$ </span>build <TypedWords words={TYPED[lang]} />
              </p>
              <p className="fade-up mt-4 max-w-xl text-white/85" style={{ "--d": "450ms" } as React.CSSProperties}>
                {t.hero.sub}
              </p>
              <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ "--d": "600ms" } as React.CSSProperties}>
                <a href="#contact" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-dark)] transition hover:-translate-y-0.5 hover:bg-slate-100">
                  {t.hero.cta1}
                </a>
                <a href="#portfolio" className="rounded-lg border border-white/60 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10">
                  {t.hero.cta2}
                </a>
              </div>
            </div>
            <div className="fade-up" style={{ "--d": "400ms" } as React.CSSProperties}>
              <Terminal />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
            {t.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="text-center">
                <p className="text-2xl font-extrabold text-[var(--brand)]">
                  <CountUp value={s.value} />
                </p>
                <p className="text-sm text-slate-600">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-3xl">{t.about.title}</h2>
            <p className="mt-4 max-w-3xl text-slate-700">{t.about.body}</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal className={card}>
              <h3 className="font-semibold text-[var(--brand)]">{lang === "id" ? "Visi" : "Vision"}</h3>
              <p className="mt-2 text-sm text-slate-700">{t.about.vision}</p>
            </Reveal>
            <Reveal delay={120} className={card}>
              <h3 className="font-semibold text-[var(--brand)]">{lang === "id" ? "Misi" : "Mission"}</h3>
              <p className="mt-2 text-sm text-slate-700">{t.about.mission}</p>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-2xl font-bold md:text-3xl">{t.process.title}</h2>
            </Reveal>
            <ProcessSteps key={lang} steps={t.process.steps} />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-3xl">{t.services.title}</h2>
            <p className="mt-2 text-slate-600">{t.services.sub}</p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => (
              <Reveal as="article" key={s.title} delay={(i % 3) * 120} className={card}>
                <span className="text-sm font-bold text-[var(--brand)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-2xl font-bold md:text-3xl">{t.why.title}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.why.items.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 120}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-[var(--brand)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-3xl">{t.portfolio.title}</h2>
            <p className="mt-2 text-slate-600">{t.portfolio.sub}</p>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-2">
            {[["all", t.portfolio.all], ...t.portfolio.categories.map((c) => [c, c])].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  filter === key ? "bg-[var(--brand)] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal as="article" key={`${filter}-${p.name}`} delay={(i % 3) * 120} className={card}>
                <span className="rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-[var(--brand)]">{p.category}</span>
                <h3 className="mt-3 font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[var(--brand)] hover:underline">
                    {lang === "id" ? "Kunjungi →" : "Visit →"}
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-2xl font-bold md:text-3xl">{t.industries.title}</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {t.industries.items.map((i, idx) => (
                <Reveal
                  key={i}
                  delay={(idx % 4) * 90}
                  className="rounded-xl bg-white p-4 text-center text-sm font-semibold shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:ring-[var(--brand)]/50"
                >
                  {i}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BANNER */}
        <section className="bg-[var(--brand)] py-12 text-white">
          <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">{t.banner.title}</h2>
              <p className="mt-1 text-white/85">{t.banner.sub}</p>
            </div>
            <a
              href={waLink(lang === "id" ? "Halo, saya ingin konsultasi proyek." : "Hello, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-dark)] transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {t.banner.cta}
            </a>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-3xl">{t.contact.title}</h2>
            <p className="mt-2 text-slate-600">{t.contact.sub}</p>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-5">
            <Reveal className="space-y-3 text-sm md:col-span-2">
              <p><strong>WhatsApp:</strong> {WA ? <a className="text-[var(--brand)] hover:underline" href={waLink("")}>+{WA}</a> : "—"}</p>
              <p><strong>Email:</strong> {EMAIL ? <a className="text-[var(--brand)] hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> : "—"}</p>
              <p><strong>{lang === "id" ? "Lokasi" : "Location"}:</strong> Jakarta, Indonesia</p>
              <p><strong>{lang === "id" ? "Jam Kerja" : "Hours"}:</strong> {t.contact.hours}</p>
            </Reveal>
            <Reveal delay={150} className="md:col-span-3">
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required className={input} placeholder={t.contact.name} value={form.name} onChange={update("name")} />
                  <input type="email" className={input} placeholder={t.contact.email} value={form.email} onChange={update("email")} />
                </div>
                <select required className={input} value={form.service} onChange={update("service")}>
                  <option value="">{t.contact.service}</option>
                  {t.services.items.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={input} placeholder={t.contact.budget} value={form.budget} onChange={update("budget")} />
                  <input className={input} placeholder={t.contact.timeline} value={form.timeline} onChange={update("timeline")} />
                </div>
                <textarea required rows={4} className={input} placeholder={t.contact.message} value={form.message} onChange={update("message")} />
                <button
                  type="submit"
                  className="rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
                >
                  {t.contact.send}
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Arianto Eka Putra. {t.footer}
      </footer>
    </>
  );
}
