"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, ArrowUpRight, MessageCircle } from "lucide-react";
import { contactConfig, whatsappUrl, instagramUrl } from "@/lib/config";

const MAPS_URL = contactConfig.mapsUrl;
const WHATSAPP_URL = whatsappUrl();

const serviceLinks = [
  { name: "Carteles 3D", href: "/servicios/carteles-3d" },
  { name: "Corpórea", href: "/servicios/corporea" },
  { name: "Neón LED", href: "/servicios/neon" },
  { name: "Lona", href: "/servicios/carteleria-lona" },
  { name: "Vinilo", href: "/servicios/vinilo" },
  { name: "Ploteo Vehicular", href: "/servicios/ploteo-vehicular" },
  { name: "Indumentaria", href: "/servicios/indumentaria" },
  { name: "Fly Banner", href: "/servicios/fly-banner" },
];

const companyLinks = [
  { name: "Trabajos", href: "/trabajos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080810]">
      {/* Gradient top accent */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)",
        }}
      />

      {/* Background FLAMA mosaic pattern — 45° rotated */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 opacity-[0.025]"
          style={{
            fontFamily: "Elnath, sans-serif",
            fontSize: "28px",
            lineHeight: 4,
            letterSpacing: "0.5em",
            wordSpacing: "3em",
            color: "white",
            transform: "translate(-50%, -50%) rotate(-45deg)",
            width: "200%",
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="whitespace-nowrap"
              style={{ paddingLeft: i % 2 === 0 ? "0" : "3em" }}
            >
              {"FLAMA ".repeat(15)}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
        {/* ── Top section: logo + tagline + CTA ── */}
        <div className="flex flex-col gap-10 border-b border-white/6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagotipo_r_flat.svg"
              alt="FLAMA"
              width={120}
              height={36}
              loading="lazy"
              className="mb-4 h-9 w-auto invert"
            />
            <p className="text-[15px] leading-relaxed text-white/40">
              Cartelería e identidad empresarial en Mendoza.
              <br />
              Diseño, producción e instalación.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl bg-whatsapp px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-whatsapp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Escribinos por WhatsApp
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 px-5 py-3.5 text-[14px] font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @{contactConfig.instagram}
            </a>
          </div>
        </div>

        {/* ── Link columns ── */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/6 py-12 sm:grid-cols-4 lg:gap-16">
          {/* Servicios */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.15em] text-white/30">
              Servicios
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.15em] text-white/30">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.15em] text-white/30">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-[13px] text-white/50 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-secondary/70" aria-hidden="true" />
                  <span className="leading-snug">
                    {contactConfig.address}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactConfig.phone.international}`}
                  className="flex items-center gap-2.5 text-[13px] text-white/50 transition-colors hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-accent-secondary/70" aria-hidden="true" />
                  {contactConfig.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-white/30">
                <Clock className="h-3.5 w-3.5 shrink-0 text-accent-secondary/50" aria-hidden="true" />
                {contactConfig.businessHours}
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.15em] text-white/30">
              Taller
            </h4>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-white/6 transition-all hover:border-white/15"
            >
              <div className="bg-white/3 px-4 py-3.5">
                <p className="text-[13px] font-semibold text-white/60 group-hover:text-white transition-colors">
                  Junín, Mendoza
                </p>
                <p className="mt-0.5 text-[11px] text-white/25">
                  Taller propio con capacidad completa
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-accent-secondary/60 transition-colors group-hover:text-accent-secondary">
                  Ver en Google Maps
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-[12px] text-white/20" suppressHydrationWarning>
            © {new Date().getFullYear()} FLAMA. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-white/15">
            Identidad empresarial · Junín, Mendoza, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
