import { useState } from "react";
import {
  Menu,
  X,
  Car,
  Users,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  Wrench,
  CreditCard,
  Headphones,
} from "lucide-react";

// ─── Dummy Data ────────────────────────────────────────────────────────────────
const cars = [
  {
    id: 1,
    name: "Toyota Innova Reborn",
    type: "MPV",
    capacity: 7,
    price: 650000,
    rating: 4.9,
    reviews: 128,
    features: ["AC Double", "Full Musik", "GPS"],
    badge: "Populer",
    badgeColor: "bg-blue-600",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    name: "Toyota Hiace Premio",
    type: "Minibus",
    capacity: 14,
    price: 950000,
    rating: 4.8,
    reviews: 87,
    features: ["AC Double", "Reclining Seat", "Monitor TV"],
    badge: "Kapasitas Besar",
    badgeColor: "bg-emerald-600",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    name: "Toyota Avanza Veloz",
    type: "MPV",
    capacity: 7,
    price: 450000,
    rating: 4.7,
    reviews: 214,
    features: ["AC", "Full Musik", "Kamera Mundur"],
    badge: "Terjangkau",
    badgeColor: "bg-amber-500",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    name: "Mitsubishi Pajero Sport",
    type: "SUV",
    capacity: 7,
    price: 850000,
    rating: 5.0,
    reviews: 56,
    features: ["4WD", "Panoramic Roof", "GPS Premium"],
    badge: "Premium",
    badgeColor: "bg-purple-600",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 5,
    name: "Suzuki Ertiga",
    type: "MPV",
    capacity: 7,
    price: 380000,
    rating: 4.6,
    reviews: 162,
    features: ["AC", "Full Musik", "Child Lock"],
    badge: null,
    gradient: "from-sky-500 to-cyan-600",
  },
  {
    id: 6,
    name: "Toyota ELF Long",
    type: "Minibus",
    capacity: 16,
    price: 1150000,
    rating: 4.8,
    reviews: 43,
    features: ["AC Double", "Reclining Seat", "Toilet"],
    badge: "Wisata",
    badgeColor: "bg-rose-500",
    gradient: "from-rose-500 to-red-600",
  },
];

const features = [
  {
    icon: Shield,
    title: "Sopir Profesional",
    desc: "Semua sopir kami telah bersertifikat, berpengalaman, dan mengenal rute terbaik untuk perjalanan nyaman Anda.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: CreditCard,
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi. Harga yang tertera adalah harga final yang Anda bayar.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Wrench,
    title: "Armada Terawat",
    desc: "Kendaraan kami rutin diservis dan dirawat agar selalu dalam kondisi prima dan aman untuk perjalanan Anda.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Headphones,
    title: "Layanan 24/7",
    desc: "Tim support kami siap membantu Anda kapan saja dan di mana saja, bahkan di tengah perjalanan sekalipun.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const stats = [
  { value: "5.000+", label: "Pelanggan Puas" },
  { value: "12+", label: "Tahun Pengalaman" },
  { value: "50+", label: "Armada Tersedia" },
  { value: "4.9★", label: "Rating Kepuasan" },
];

// ─── Helper ────────────────────────────────────────────────────────────────────
const formatPrice = (p) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p);

// ─── Car Illustration SVG ──────────────────────────────────────────────────────
function CarIllustration({ gradient, className }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 rounded-2xl`} />
      <svg viewBox="0 0 220 100" className="w-full h-full px-6" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`g-${gradient}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {/* Body */}
        <rect x="20" y="45" width="180" height="40" rx="8" fill="#1e3a5f" />
        {/* Roof */}
        <path d="M55 45 Q75 18 145 22 Q170 22 180 45Z" fill="#2563eb" />
        {/* Windows */}
        <rect x="65" y="25" width="35" height="18" rx="3" fill="#bae6fd" opacity="0.8" />
        <rect x="107" y="23" width="45" height="20" rx="3" fill="#bae6fd" opacity="0.8" />
        {/* Wheels */}
        <circle cx="60" cy="85" r="14" fill="#1e293b" />
        <circle cx="60" cy="85" r="8" fill="#64748b" />
        <circle cx="60" cy="85" r="3" fill="#94a3b8" />
        <circle cx="160" cy="85" r="14" fill="#1e293b" />
        <circle cx="160" cy="85" r="8" fill="#64748b" />
        <circle cx="160" cy="85" r="3" fill="#94a3b8" />
        {/* Headlights */}
        <rect x="192" y="53" width="10" height="8" rx="2" fill="#fde68a" opacity="0.9" />
        <rect x="16" y="53" width="10" height="8" rx="2" fill="#fca5a5" opacity="0.7" />
        {/* Door lines */}
        <line x1="105" y1="45" x2="105" y2="83" stroke="#4b6fa3" strokeWidth="1.5" />
        {/* Grille */}
        <rect x="192" y="65" width="10" height="12" rx="2" fill="#334155" />
      </svg>
    </div>
  );
}

// ─── Hero Background SVG ───────────────────────────────────────────────────────
function HeroIllustration() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Road */}
      <svg viewBox="0 0 700 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#eff6ff" />
          </linearGradient>
          <linearGradient id="road" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="700" height="500" fill="url(#sky)" />

        {/* Mountains / Hills */}
        <path d="M0 300 Q100 180 200 260 Q280 180 360 240 Q440 160 520 220 Q600 160 700 200 L700 500 L0 500Z" fill="#bfdbfe" opacity="0.4" />
        <path d="M0 340 Q150 230 300 300 Q420 230 560 280 Q640 240 700 260 L700 500 L0 500Z" fill="#93c5fd" opacity="0.35" />

        {/* Ground */}
        <rect x="0" y="370" width="700" height="130" fill="#e2e8f0" />

        {/* Road */}
        <path d="M0 390 Q350 360 700 395 L700 500 L0 500Z" fill="url(#road)" />

        {/* Road dashes */}
        <rect x="80" y="435" width="50" height="6" rx="3" fill="#f8fafc" opacity="0.6" />
        <rect x="210" y="430" width="50" height="6" rx="3" fill="#f8fafc" opacity="0.6" />
        <rect x="340" y="427" width="50" height="6" rx="3" fill="#f8fafc" opacity="0.6" />
        <rect x="470" y="430" width="50" height="6" rx="3" fill="#f8fafc" opacity="0.6" />
        <rect x="590" y="435" width="50" height="6" rx="3" fill="#f8fafc" opacity="0.6" />

        {/* Clouds */}
        <ellipse cx="120" cy="80" rx="60" ry="25" fill="white" opacity="0.8" />
        <ellipse cx="155" cy="70" rx="45" ry="22" fill="white" opacity="0.8" />
        <ellipse cx="80" cy="85" rx="40" ry="18" fill="white" opacity="0.8" />

        <ellipse cx="500" cy="60" rx="70" ry="28" fill="white" opacity="0.7" />
        <ellipse cx="540" cy="50" rx="50" ry="24" fill="white" opacity="0.7" />
        <ellipse cx="460" cy="65" rx="45" ry="20" fill="white" opacity="0.7" />

        {/* Trees */}
        <rect x="30" y="340" width="10" height="35" fill="#6b7280" />
        <ellipse cx="35" cy="330" rx="22" ry="28" fill="#16a34a" />

        <rect x="650" y="345" width="10" height="30" fill="#6b7280" />
        <ellipse cx="655" cy="335" rx="20" ry="25" fill="#15803d" />

        <rect x="580" y="350" width="8" height="25" fill="#6b7280" />
        <ellipse cx="584" cy="340" rx="16" ry="22" fill="#22c55e" />

        {/* Main Car */}
        <g transform="translate(220, 340) scale(1.6)">
          <rect x="0" y="28" width="130" height="30" rx="6" fill="#1e3a5f" />
          <path d="M20 28 Q40 8 100 10 Q118 10 128 28Z" fill="#2563eb" />
          <rect x="28" y="13" width="26" height="14" rx="2" fill="#bae6fd" opacity="0.85" />
          <rect x="60" y="11" width="36" height="16" rx="2" fill="#bae6fd" opacity="0.85" />
          <circle cx="25" cy="59" r="12" fill="#0f172a" />
          <circle cx="25" cy="59" r="7" fill="#64748b" />
          <circle cx="25" cy="59" r="2.5" fill="#94a3b8" />
          <circle cx="105" cy="59" r="12" fill="#0f172a" />
          <circle cx="105" cy="59" r="7" fill="#64748b" />
          <circle cx="105" cy="59" r="2.5" fill="#94a3b8" />
          <rect x="124" y="34" width="8" height="6" rx="1.5" fill="#fde68a" />
          <rect x="-4" y="34" width="8" height="6" rx="1.5" fill="#fca5a5" opacity="0.7" />
          <line x1="70" y1="28" x2="70" y2="57" stroke="#4b6fa3" strokeWidth="1" />
        </g>

        {/* Sun */}
        <circle cx="620" cy="90" r="40" fill="#fde68a" opacity="0.6" />
        <circle cx="620" cy="90" r="28" fill="#fbbf24" opacity="0.7" />

        {/* Location pins */}
        <g transform="translate(380, 200)">
          <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 12 32 12 32C12 32 24 18.6 24 12C24 5.4 18.6 0 12 0Z" fill="#2563eb" />
          <circle cx="12" cy="12" r="5" fill="white" />
        </g>
      </svg>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Armada", href: "#armada" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:bg-blue-700 transition-colors">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Travel<span className="text-blue-600">ku</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#kontak"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5"
            >
              Pesan Sekarang
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 pt-2 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold text-center rounded-xl transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Tersedia 24 Jam · Sopir Berpengalaman</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Jelajahi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Destinasi Impian
            </span>{" "}
            bersama Travelku
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
            Sewa mobil dengan sopir profesional, armada terawat, dan harga transparan. Perjalanan wisata, bisnis, atau
            bandara — kami siap melayani Anda.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Sopir Resmi", "Asuransi Perjalanan", "Harga Terbaik"].map((b) => (
              <div key={b} className="flex items-center gap-1.5 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#armada"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/50 hover:shadow-blue-700/50 hover:-translate-y-1 text-base"
            >
              Lihat Armada
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#kontak"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all hover:-translate-y-1 text-base backdrop-blur-sm"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-blue-500/5 rounded-3xl" />
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden p-4 h-[420px]">
            <HeroIllustration />
          </div>

          {/* Floating cards */}
          <div className="absolute -left-6 bottom-12 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-[180px]">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">4.9 / 5.0</p>
              <p className="text-slate-500 text-xs">1,200+ Review</p>
            </div>
          </div>

          <div className="absolute -right-4 top-12 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-[190px]">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">5.000+</p>
              <p className="text-slate-500 text-xs">Pelanggan Puas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-extrabold text-xl">{s.value}</p>
              <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Car Card ──────────────────────────────────────────────────────────────────
function CarCard({ car }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      {/* Car Illustration area */}
      <div className={`relative h-44 bg-gradient-to-br ${car.gradient} p-2`}>
        {car.badge && (
          <span className={`absolute top-3 left-3 z-10 ${car.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
            {car.badge}
          </span>
        )}
        <CarIllustration gradient={car.gradient} className="w-full h-full" />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="font-bold text-slate-800 text-lg leading-tight">{car.name}</h3>
            <p className="text-sm text-slate-400 font-medium">{car.type}</p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg shrink-0">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-amber-600">{car.rating}</span>
          </div>
        </div>

        {/* Capacity */}
        <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-2 mb-3">
          <Users className="w-4 h-4" />
          <span>{car.capacity} Penumpang</span>
          <span className="mx-1.5 text-slate-300">·</span>
          <span className="text-slate-400">{car.reviews} ulasan</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {car.features.map((f) => (
            <span key={f} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-100 font-medium">
              {f}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <p className="text-blue-600 font-extrabold text-xl">{formatPrice(car.price)}</p>
            <p className="text-slate-400 text-xs">/ hari</p>
          </div>
          <a
            href={`https://wa.me/6282394263103?text=${encodeURIComponent(`Halo Travelku, saya ingin menyewa *${car.name}* (${car.capacity} kursi). Apakah unit tersedia?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 group-hover:scale-105"
          >
            Sewa
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Car Showcase Section ──────────────────────────────────────────────────────
function ShowcaseSection() {
  return (
    <section id="armada" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            🚗 Showcase Armada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4">
            Pilih Kendaraan <span className="text-blue-600">Terbaik</span> untuk Anda
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Armada kami terawat, nyaman, dan siap mengantarkan Anda ke mana saja dengan aman.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-2xl transition-all duration-200">
            Lihat Semua Armada
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Features / Why Us Section ─────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section id="fitur" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            ✨ Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4">
            Mengapa Memilih <span className="text-blue-600">Travelku?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Kami berkomitmen memberikan pengalaman perjalanan terbaik dengan layanan yang bisa Anda andalkan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${f.color}`} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Siap Memulai Perjalanan Anda?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          Hubungi kami sekarang dan dapatkan penawaran terbaik untuk perjalanan wisata, bisnis, maupun transfer bandara.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#kontak"
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Pesan Sekarang
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/30 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4" />
            WhatsApp Kami
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Travel<span className="text-blue-400">ku</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Layanan sewa mobil dan perjalanan wisata terpercaya dengan sopir profesional dan armada terawat. Melayani seluruh Indonesia.
            </p>
            <div className="flex gap-3 mt-5">
              {["Facebook", "Instagram", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label={s}
                >
                  <span className="text-xs font-bold">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2.5 text-sm">
              {["Sewa Mobil Harian", "Wisata & Tour", "Antar Jemput Bandara", "Wedding Car", "Sewa Jangka Panjang"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white hover:pl-1 transition-all">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Jl. Raya Wisata No. 88,<br />Kota Anda, Indonesia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-white transition">+62 812-3456-7890</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:halo@travelku.id" className="hover:text-white transition">halo@travelku.id</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Travelku. Semua hak dilindungi.
          </p>
          <div className="flex gap-5 text-sm">
            <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
