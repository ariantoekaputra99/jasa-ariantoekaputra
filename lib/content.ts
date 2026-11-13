export type Lang = "id" | "en";

type Item = { title: string; desc: string };
type Project = { name: string; category: string; desc: string; url?: string };

export type Content = {
  nav: { home: string; about: string; services: string; why: string; portfolio: string; contact: string };
  hero: { badge: string; title: string; sub: string; cta1: string; cta2: string };
  stats: { value: string; label: string }[];
  about: { title: string; body: string; vision: string; mission: string };
  process: { title: string; steps: string[] };
  services: { title: string; sub: string; items: Item[] };
  why: { title: string; items: Item[] };
  portfolio: { title: string; sub: string; all: string; categories: string[]; items: Project[] };
  industries: { title: string; items: string[] };
  banner: { title: string; sub: string; cta: string };
  contact: {
    title: string;
    sub: string;
    name: string;
    email: string;
    service: string;
    budget: string;
    timeline: string;
    message: string;
    send: string;
    hours: string;
  };
  footer: string;
};

export const content: Record<Lang, Content> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      why: "Mengapa Saya",
      portfolio: "Portofolio",
      contact: "Kontak",
    },
    hero: {
      badge: "Software House Personal • Jakarta",
      title: "Bangun produk digital yang andal, aman, dan siap tumbuh",
      sub: "Jasa pembuatan website, aplikasi web, backend microservice, dan konsultasi keamanan IT untuk bisnis dan UMKM.",
      cta1: "Mulai Konsultasi Gratis",
      cta2: "Lihat Portofolio",
    },
    stats: [
      { value: "5+", label: "Tahun Pengalaman" },
      { value: "Java", label: "Spring Boot & Microservice" },
      { value: "Next.js", label: "Web Modern & Cepat" },
      { value: "Security", label: "Pentest & Vulnerability" },
    ],
    about: {
      title: "Tentang Kami",
      body: "Saya Arianto Eka Putra, software engineer dengan pengalaman backend Java Spring Boot, microservice, serta vulnerability management dan penetration testing. Saya membantu bisnis mengubah ide menjadi produk digital yang rapi, aman, dan mudah dikembangkan.",
      vision: "Menjadi mitra teknologi tepercaya yang membuat solusi digital berkualitas terjangkau bagi semua skala bisnis.",
      mission: "Mengirim software yang bersih, aman, terdokumentasi, dan tepat waktu dengan komunikasi yang transparan.",
    },
    process: {
      title: "Pengerjaan End-to-End",
      steps: ["Konsultasi", "Desain", "Bangun", "Deploy", "Rawat"],
    },
    services: {
      title: "Layanan",
      sub: "Solusi lengkap dari ide hingga produksi.",
      items: [
        { title: "Website & Web App", desc: "Company profile, landing page, toko online, dan aplikasi web berbasis Next.js yang cepat dan SEO-friendly." },
        { title: "Backend & API", desc: "REST API dan microservice dengan Java Spring Boot, PostgreSQL, dan arsitektur yang skalabel." },
        { title: "Custom Software", desc: "Sistem kasir (POS), LMS, portal berita, dan aplikasi internal sesuai alur bisnis Anda." },
        { title: "Integrasi Sistem", desc: "Hubungkan aplikasi, payment gateway, WhatsApp, dan layanan pihak ketiga dengan aman." },
        { title: "UI/UX Design", desc: "Antarmuka yang bersih, responsif, dan mudah digunakan di semua perangkat." },
        { title: "Konsultasi & Keamanan IT", desc: "Review arsitektur, audit kerentanan, dan penetration testing dasar untuk aplikasi Anda." },
      ],
    },
    why: {
      title: "Mengapa Memilih Saya",
      items: [
        { title: "Berpengalaman di Perbankan", desc: "Terbiasa membangun layanan dengan standar kualitas dan keamanan tinggi." },
        { title: "Security-First", desc: "Latar belakang cyber security membuat produk Anda dibangun dengan aman sejak awal." },
        { title: "Komunikasi Transparan", desc: "Progres jelas, estimasi realistis, tanpa biaya tersembunyi." },
        { title: "Teknologi Modern", desc: "Next.js, Spring Boot, PostgreSQL, dan deploy cloud yang mudah dirawat." },
        { title: "Harga Terjangkau", desc: "Paket fleksibel untuk UMKM hingga perusahaan." },
        { title: "Dukungan Purna Jual", desc: "Perawatan, perbaikan bug, dan pengembangan lanjutan setelah rilis." },
      ],
    },
    portfolio: {
      title: "Portofolio",
      sub: "Beberapa proyek yang pernah dikerjakan.",
      all: "Semua",
      categories: ["Website", "Aplikasi"],
      items: [
        { name: "NewBee Agency", category: "Website", desc: "Landing page agensi digital untuk UMKM.", url: "https://newbee.ariantoekaputra.com" },
        { name: "Profil Irman Gusman", category: "Website", desc: "Website profil tokoh dengan desain profesional." },
        { name: "Berita Online", category: "Website", desc: "Portal berita online dengan manajemen konten." },
        { name: "BeePos", category: "Aplikasi", desc: "Aplikasi point-of-sale untuk usaha ritel dan kuliner." },
        { name: "BeeShop", category: "Aplikasi", desc: "Platform toko online dengan katalog dan keranjang." },
        { name: "Akademi LMS", category: "Aplikasi", desc: "Learning management system untuk kursus online." },
      ],
    },
    industries: {
      title: "Industri yang Dilayani",
      items: ["Fintech", "Pendidikan", "Retail", "Media & Berita", "Kuliner", "Jasa Profesional", "UMKM", "Pemerintahan"],
    },
    banner: {
      title: "Konsultasi Gratis untuk Proyek Anda",
      sub: "Ceritakan kebutuhan Anda, kami bantu rancang solusi dan estimasinya.",
      cta: "Chat via WhatsApp",
    },
    contact: {
      title: "Hubungi Kami",
      sub: "Isi formulir, pesan akan terkirim melalui WhatsApp.",
      name: "Nama",
      email: "Email",
      service: "Jenis Layanan",
      budget: "Perkiraan Budget",
      timeline: "Target Waktu",
      message: "Ceritakan proyek Anda",
      send: "Kirim via WhatsApp",
      hours: "Senin – Jumat, 09.00 – 17.00 WIB",
    },
    footer: "Seluruh hak cipta dilindungi.",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      why: "Why Me",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      badge: "Personal Software House • Jakarta",
      title: "Build reliable, secure digital products that are ready to grow",
      sub: "Websites, web apps, microservice backends, and IT security consulting for businesses and SMEs.",
      cta1: "Start Free Consultation",
      cta2: "View Portfolio",
    },
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "Java", label: "Spring Boot & Microservices" },
      { value: "Next.js", label: "Modern, Fast Web" },
      { value: "Security", label: "Pentest & Vulnerability" },
    ],
    about: {
      title: "About Us",
      body: "I'm Arianto Eka Putra, a software engineer with backend experience in Java Spring Boot, microservices, vulnerability management and penetration testing. I help businesses turn ideas into clean, secure, maintainable digital products.",
      vision: "To be a trusted technology partner delivering quality digital solutions that are affordable for every business size.",
      mission: "Ship clean, secure, documented software on time, with transparent communication.",
    },
    process: {
      title: "End-to-End Delivery",
      steps: ["Consult", "Design", "Build", "Deploy", "Maintain"],
    },
    services: {
      title: "Services",
      sub: "Complete solutions from idea to production.",
      items: [
        { title: "Website & Web App", desc: "Company profiles, landing pages, online stores and web apps built on Next.js, fast and SEO-friendly." },
        { title: "Backend & API", desc: "REST APIs and microservices with Java Spring Boot, PostgreSQL and scalable architecture." },
        { title: "Custom Software", desc: "POS, LMS, news portals and internal apps tailored to your workflow." },
        { title: "System Integration", desc: "Securely connect apps, payment gateways, WhatsApp and third-party services." },
        { title: "UI/UX Design", desc: "Clean, responsive interfaces that are easy to use on any device." },
        { title: "IT Consulting & Security", desc: "Architecture review, vulnerability audits and basic penetration testing." },
      ],
    },
    why: {
      title: "Why Choose Me",
      items: [
        { title: "Banking Experience", desc: "Used to building services under strict quality and security standards." },
        { title: "Security-First", desc: "A cyber security background means your product is built securely from day one." },
        { title: "Transparent Communication", desc: "Clear progress, realistic estimates, no hidden costs." },
        { title: "Modern Stack", desc: "Next.js, Spring Boot, PostgreSQL and cloud deploys that are easy to maintain." },
        { title: "Affordable", desc: "Flexible packages from SMEs to enterprises." },
        { title: "After-Sales Support", desc: "Maintenance, bug fixes and further development after launch." },
      ],
    },
    portfolio: {
      title: "Portfolio",
      sub: "A selection of projects I've worked on.",
      all: "All",
      categories: ["Website", "Application"],
      items: [
        { name: "NewBee Agency", category: "Website", desc: "Digital agency landing page for SMEs.", url: "https://newbee.ariantoekaputra.com" },
        { name: "Irman Gusman Profile", category: "Website", desc: "Professional profile website." },
        { name: "Berita Online", category: "Website", desc: "Online news portal with content management." },
        { name: "BeePos", category: "Application", desc: "Point-of-sale app for retail and F&B." },
        { name: "BeeShop", category: "Application", desc: "Online store platform with catalog and cart." },
        { name: "Akademi LMS", category: "Application", desc: "Learning management system for online courses." },
      ],
    },
    industries: {
      title: "Industries Served",
      items: ["Fintech", "Education", "Retail", "Media & News", "F&B", "Professional Services", "SME", "Government"],
    },
    banner: {
      title: "Free Consultation for Your Project",
      sub: "Tell us what you need and we'll help shape the solution and estimate.",
      cta: "Chat on WhatsApp",
    },
    contact: {
      title: "Contact Us",
      sub: "Fill in the form; your message is sent via WhatsApp.",
      name: "Name",
      email: "Email",
      service: "Service Type",
      budget: "Estimated Budget",
      timeline: "Target Timeline",
      message: "Tell us about your project",
      send: "Send via WhatsApp",
      hours: "Mon – Fri, 09:00 – 17:00 WIB",
    },
    footer: "All rights reserved.",
  },
};
