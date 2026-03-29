"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import { contactConfig, whatsappUrl } from "@/lib/config";

const WHATSAPP_URL = whatsappUrl();
const MAPS_URL = contactConfig.mapsUrl;

const services = [
  { name: "Carteles 3D Iluminados", href: "/servicios/carteles-3d", tag: "Estrella" },
  { name: "Corpórea", href: "/servicios/corporea", tag: null },
  { name: "Neón LED", href: "/servicios/neon", tag: null },
  { name: "Cartelería — Lona", href: "/servicios/carteleria-lona", tag: null },
  { name: "Vinilo", href: "/servicios/vinilo", tag: null },
  { name: "Ploteo Vehicular", href: "/servicios/ploteo-vehicular", tag: null },
  { name: "Indumentaria", href: "/servicios/indumentaria", tag: null },
  { name: "Fly Banner", href: "/servicios/fly-banner", tag: null },
];

const navLinks = [
  { name: "Trabajos", href: "/trabajos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* ── Gradient LED strip ── */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, #06B6D4, #7C3AED, #06B6D4, #7C3AED)",
          backgroundSize: "200% 100%",
          animation: "gradient-shift 6s ease infinite",
        }}
      />

      {/* ── Top bar — dark, industrial ── */}
      <div className="bg-[#0F0F1A] text-[#A0A0B8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-20">
          <div className="flex items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[12px] tracking-wide transition-colors hover:text-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-1 rounded"
            >
              <MessageCircle className="h-3 w-3 text-whatsapp transition-colors group-hover:text-whatsapp" aria-hidden="true" />
              <span className="hidden sm:inline">{contactConfig.phone.display}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <span className="h-3 w-px bg-[#2A2A45]" />

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[12px] tracking-wide transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1 rounded"
            >
              <MapPin className="h-3 w-3 text-accent-secondary transition-colors group-hover:text-white" aria-hidden="true" />
              <span className="hidden md:inline">{contactConfig.address}</span>
              <span className="md:hidden">Junín, Mendoza</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-[12px] tracking-wide">
            <Clock className="h-3 w-3 text-accent-secondary" aria-hidden="true" />
            <span className="hidden sm:inline">{contactConfig.businessHours}</span>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_24px_rgba(26,26,46,0.08)]" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-20">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagotipo.svg"
              alt="FLAMA"
              className="h-8 w-auto transition-transform duration-200 hover:scale-[1.02]"
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Servicios dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="group relative flex items-center gap-1 px-4 py-2 text-[14px] font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded-lg"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Servicios
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
                <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-accent transition-transform duration-200 group-hover:scale-x-100" />
              </button>

              {/* Dropdown */}
              {servicesOpen && (
                <div
                  className="absolute -left-4 top-full pt-3"
                  style={{ animation: "slide-down 0.15s ease-out" }}
                >
                  <div className="w-72 overflow-hidden rounded-2xl border border-[#E5E7EB]/80 bg-white shadow-[0_16px_48px_rgba(26,26,46,0.12)]">
                    {/* Gradient top edge inside dropdown */}
                    <div
                      className="h-[2px] w-full"
                      style={{
                        background: "linear-gradient(90deg, #06B6D4, #7C3AED)",
                      }}
                    />
                    <div className="py-1.5">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="group/item flex items-center justify-between px-5 py-2.5 transition-colors hover:bg-[#F8F5FF]"
                        >
                          <span className="text-[13px] font-medium text-foreground/70 transition-colors group-hover/item:text-accent">
                            {s.name}
                          </span>
                          {s.tag && (
                            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                              {s.tag}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border/60 bg-[#FAFAFE] px-5 py-3">
                      <Link
                        href="/servicios"
                        className="flex items-center gap-1.5 text-[12px] font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                      >
                        Ver todos los servicios
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-[14px] font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-accent transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:inline-flex"
            style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Pedí tu presupuesto
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen
              ? <X className="h-5 w-5 text-foreground" aria-hidden="true" />
              : <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="border-t border-border/40 bg-white lg:hidden overscroll-contain"
          style={{ animation: "slide-down 0.2s ease-out" }}
        >
          <div className="mx-auto max-w-7xl px-5 pb-8 pt-4">
            {/* Servicios */}
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
              Servicios
            </p>
            <div className="grid grid-cols-2 gap-1">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[13px] font-medium text-foreground/70 transition-colors hover:bg-[#F8F5FF] hover:text-accent"
                >
                  {s.name}
                </Link>
              ))}
            </div>

            <div className="my-4 h-px bg-border/60" />

            {/* Nav links */}
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[14px] font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="my-4 h-px bg-border/60" />

            {/* Contact info */}
            <div className="flex flex-col gap-3 px-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-foreground/60 transition-colors hover:text-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp rounded"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-whatsapp/10">
                  <MessageCircle className="h-3.5 w-3.5 text-whatsapp" aria-hidden="true" />
                </div>
                {contactConfig.phone.display}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-foreground/60 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-secondary/8">
                  <MapPin className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
                </div>
                {contactConfig.address}
              </a>
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Pedí tu presupuesto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
