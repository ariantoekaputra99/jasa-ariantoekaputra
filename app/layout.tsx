import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jasa.ariantoekaputra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jasa Pembuatan Website & Software | Arianto Eka Putra",
  description:
    "Jasa pembuatan website, aplikasi web, backend Java Spring Boot, integrasi sistem, UI/UX, dan konsultasi keamanan IT untuk bisnis dan UMKM.",
  keywords: [
    "jasa pembuatan website",
    "jasa software house",
    "jasa aplikasi web",
    "spring boot",
    "konsultan IT",
    "jasa website UMKM",
  ],
  openGraph: {
    title: "Jasa Pembuatan Website & Software",
    description: "Website, aplikasi web, backend, dan konsultasi IT untuk bisnis Anda.",
    url: siteUrl,
    siteName: "Jasa Arianto Eka Putra",
    locale: "id_ID",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1d6fa5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
