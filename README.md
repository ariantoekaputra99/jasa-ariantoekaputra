# Jasa Arianto Eka Putra

Website company profile jasa pembuatan website & software, dibangun dengan **Next.js (App Router) + TypeScript + Tailwind CSS v4**, di-deploy di **Vercel**.

Live: https://jasa.ariantoekaputra.com

## Fitur
- Single-page: Hero, Tentang, Proses, Layanan, Mengapa Saya, Portofolio (filter), Industri, Kontak
- Toggle bahasa ID / EN (konten di `lib/content.ts`)
- Form kontak → membuka WhatsApp dengan pesan terisi
- SEO: metadata, Open Graph, `robots.txt`, `sitemap.xml`

## Menjalankan lokal
```bash
npm install
cp .env.example .env.local   # isi nomor WA & email
npm run dev
```

## Environment variables
| Nama | Keterangan |
|---|---|
| `NEXT_PUBLIC_WA_NUMBER` | Nomor WhatsApp, format `628xxxxxxxxxx` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email kontak publik |
| `NEXT_PUBLIC_SITE_URL` | URL situs (untuk SEO) |

## Deploy
Push ke `main` → Vercel build & deploy otomatis. Domain: `jasa.ariantoekaputra.com` (CNAME ke `cname.vercel-dns.com`).
