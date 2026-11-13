"use client";

import { useState } from "react";
import { content, type Lang } from "@/lib/content";

const WA = process.env.NEXT_PUBLIC_WA_NUMBER ?? "";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const waLink = (text: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

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
    "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";

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
                <a href={href} className="hover:text-[var(--brand)]">{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-semibold hover:border-[var(--brand)]"
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
        <section id="home" className="bg-gradient-to-br from-[#0b3a5b] via-[var(--brand-dark)] to-[var(--brand)] text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{t.hero.badge}</span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{t.hero.title}</h1>
              <p className="mt-4 max-w-xl text-white/85">{t.hero.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-dark)] hover:bg-slate-100">
                  {t.hero.cta1}
                </a>
                <a href="#portfolio" className="rounded-lg border border-white/60 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  {t.hero.cta2}
                </a>
              </div>
            </div>
            {/* mock console */}
            <div className="rounded-xl bg-slate-900/80 p-4 font-mono text-xs shadow-2xl ring-1 ring-white/10">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <p className="text-green-300">$ deploy --env production</p>
              <p className="text-slate-300">✓ build passed</p>
              <p className="text-slate-300">✓ tests 128/128</p>
              <p className="text-slate-300">✓ security scan: 0 critical</p>
              <p className="text-slate-300">✓ uptime 99.9%</p>
              <p className="mt-2 text-sky-300">→ live on edge network</p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-[var(--brand)]">{s.value}</p>
                <p className="text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">{t.about.title}</h2>
          <p className="mt-4 max-w-3xl text-slate-700">{t.about.body}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-[var(--brand)]">{lang === "id" ? "Visi" : "Vision"}</h3>
              <p className="mt-2 text-sm text-slate-700">{t.about.vision}</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-[var(--brand)]">{lang === "id" ? "Misi" : "Mission"}</h3>
              <p className="mt-2 text-sm text-slate-700">{t.about.mission}</p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold md:text-3xl">{t.process.title}</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-5">
              {t.process.steps.map((s, i) => (
                <li key={s} className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                  <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">{t.services.title}</h2>
          <p className="mt-2 text-slate-600">{t.services.sub}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => (
              <article key={s.title} className="rounded-xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-sm font-bold text-[var(--brand)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold md:text-3xl">{t.why.title}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.why.items.map((s, i) => (
                <div key={s.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <span className="text-sm font-bold text-[var(--brand)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">{t.portfolio.title}</h2>
          <p className="mt-2 text-slate-600">{t.portfolio.sub}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[["all", t.portfolio.all], ...t.portfolio.categories.map((c) => [c, c])].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  filter === key ? "bg-[var(--brand)] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="rounded-xl border border-slate-200 p-6">
                <span className="rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-[var(--brand)]">{p.category}</span>
                <h3 className="mt-3 font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[var(--brand)] hover:underline">
                    {lang === "id" ? "Kunjungi →" : "Visit →"}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold md:text-3xl">{t.industries.title}</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {t.industries.items.map((i) => (
                <div key={i} className="rounded-xl bg-white p-4 text-center text-sm font-semibold shadow-sm ring-1 ring-slate-200">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BANNER */}
        <section className="bg-[var(--brand)] py-12 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">{t.banner.title}</h2>
              <p className="mt-1 text-white/85">{t.banner.sub}</p>
            </div>
            <a
              href={waLink(lang === "id" ? "Halo, saya ingin konsultasi proyek." : "Hello, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-dark)] hover:bg-slate-100"
            >
              {t.banner.cta}
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">{t.contact.title}</h2>
          <p className="mt-2 text-slate-600">{t.contact.sub}</p>
          <div className="mt-8 grid gap-10 md:grid-cols-5">
            <div className="space-y-3 text-sm md:col-span-2">
              <p><strong>WhatsApp:</strong> {WA ? <a className="text-[var(--brand)] hover:underline" href={waLink("")}>+{WA}</a> : "—"}</p>
              <p><strong>Email:</strong> {EMAIL ? <a className="text-[var(--brand)] hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> : "—"}</p>
              <p><strong>{lang === "id" ? "Lokasi" : "Location"}:</strong> Jakarta, Indonesia</p>
              <p><strong>{lang === "id" ? "Jam Kerja" : "Hours"}:</strong> {t.contact.hours}</p>
            </div>
            <form onSubmit={submit} className="space-y-4 md:col-span-3">
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
              <button type="submit" className="rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--brand-dark)]">
                {t.contact.send}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Arianto Eka Putra. {t.footer}
      </footer>
    </>
  );
}
