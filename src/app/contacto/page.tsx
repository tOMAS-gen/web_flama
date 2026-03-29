import {
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Lightbulb,
  Layers,
  Sparkles,
  Flag,
  Truck,
  Shirt,
} from "lucide-react";
import type { Metadata } from "next";
import { contactConfig, whatsappUrl, instagramUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto — FLAMA Cartelería Mendoza",
  description:
    "Consultá a FLAMA por WhatsApp o visitanos en Ladislao Segura 190, Junín, Mendoza. Lunes a viernes 9:30–17:30 hs.",
};

const WA_BASE = `https://wa.me/${contactConfig.phone.whatsappId}?text=`;

const quickOptions = [
  {
    icon: Lightbulb,
    label: "Carteles 3D",
    sub: "Letras y cajas iluminadas",
    msg: "Hola FLAMA, quiero consultar por un cartel 3D iluminado para mi negocio.",
  },
  {
    icon: Layers,
    label: "Corpórea",
    sub: "Alto impacto y acrílico",
    msg: "Hola FLAMA, quiero consultar por letras corpóreas para mi local.",
  },
  {
    icon: Sparkles,
    label: "Neón LED",
    sub: "Para locales y eventos",
    msg: "Hola FLAMA, quiero consultar por un neón LED para mi espacio.",
  },
  {
    icon: Flag,
    label: "Cartelería — Lona",
    sub: "Front UV, backlight, gran formato",
    msg: "Hola FLAMA, necesito un cartel de lona para mi negocio.",
  },
  {
    icon: Layers,
    label: "Vinilo",
    sub: "Vidrieras y fachadas",
    msg: "Hola FLAMA, quiero consultar por vinilo para mi vidriera.",
  },
  {
    icon: Truck,
    label: "Ploteo Vehicular",
    sub: "Parcial e integral",
    msg: "Hola FLAMA, quiero plotear mi vehículo.",
  },
  {
    icon: Shirt,
    label: "Indumentaria",
    sub: "Remeras, gorras, ropa corporativa",
    msg: "Hola FLAMA, necesito indumentaria con mi logo para mi equipo.",
  },
  {
    icon: Flag,
    label: "Fly Banner",
    sub: "Banderas para eventos",
    msg: "Hola FLAMA, necesito fly banners para un evento.",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: contactConfig.address,
    href: contactConfig.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: contactConfig.phone.display,
    href: `tel:${contactConfig.phone.international}`,
    external: false,
  },
  {
    icon: Clock,
    label: "Horario",
    value: contactConfig.businessHours,
    href: null,
    external: false,
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(160deg, #0F0F1A 0%, #1a1035 40%, #0F0F1A 100%)",
        }}
      >
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-20">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-accent-secondary">
            Contacto
          </span>
          <h1
            className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[48px]"
            style={{
              background:
                "linear-gradient(105deg, #06B6D4 0%, #ffffff 40%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hablemos de tu proyecto
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-white/50">
            Elegí qué necesitás y te contactamos directo por WhatsApp. Sin formularios, sin esperas.
          </p>
        </div>
      </section>

      {/* ═══ OPCIONES DIRECTAS A WHATSAPP ═══ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-foreground lg:text-[32px]">
              ¿Qué necesitás?
            </h2>
            <p className="mt-2 text-[15px] text-text-secondary">
              Tocá una opción y se abre WhatsApp con el mensaje listo
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.label}
                  href={`${WA_BASE}${encodeURIComponent(opt.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:border-whatsapp/30 hover:shadow-lg hover:shadow-whatsapp/5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-whatsapp/15">
                    <Icon className="h-5 w-5 text-accent transition-colors group-hover:text-whatsapp" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-bold text-foreground">{opt.label}</p>
                    <p className="text-[12px] text-text-secondary">{opt.sub}</p>
                  </div>
                  <MessageCircle className="h-4 w-4 shrink-0 text-text-secondary/30 transition-colors group-hover:text-whatsapp" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Consulta general */}
          <div className="mt-6 flex justify-center">
            <a
              href={`${WA_BASE}${encodeURIComponent("Hola FLAMA, quiero hacer una consulta general.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl bg-whatsapp px-8 py-4 text-[16px] font-bold text-white transition-all hover:bg-whatsapp-hover hover:shadow-lg hover:shadow-whatsapp/20"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Otra consulta
              <ArrowUpRight className="h-4 w-4 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ DATOS DE CONTACTO ═══ */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Contact cards */}
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:border-accent/20 hover:shadow-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-wider text-text-secondary">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[15px] font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                );
              }
              return <div key={item.label}>{inner}</div>;
            })}

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:border-accent/20 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-5 w-5 text-accent"
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
              </span>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-text-secondary">
                  Instagram
                </p>
                <p className="mt-0.5 text-[15px] font-semibold text-foreground">
                  @{contactConfig.instagram}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ MAPA ═══ */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.5!2d-68.482!3d-33.137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA4JzEzLjIiUyA2OMKwMjgnNTUuMiJX!5e0!3m2!1ses!2sar!4v1"
          width="100%"
          height="400"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación FLAMA — Junín, Mendoza"
        />
      </section>
    </>
  );
}
