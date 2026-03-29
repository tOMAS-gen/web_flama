import { services } from "@/data/services";
import { CTAButton } from "@/components/CTAButton";
import {
  MessageCircle,
  ArrowRight,
  Lightbulb,
  Layers,
  Sparkles,
  Flag,
  Truck,
  Shirt,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Cartelería e Identidad Empresarial | FLAMA",
  description:
    "Carteles 3D, corpórea, neón LED, lona, vinilo, ploteo vehicular, indumentaria y fly banner. Todos nuestros servicios en un solo lugar.",
};

const iconMap: Record<string, typeof Lightbulb> = {
  "carteles-3d": Lightbulb,
  corporea: Layers,
  neon: Sparkles,
  "carteleria-lona": Flag,
  vinilo: Layers,
  "ploteo-vehicular": Truck,
  indumentaria: Shirt,
  "fly-banner": Flag,
};

export default function ServiciosPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{
          background: "linear-gradient(160deg, #0F0F1A 0%, #1a1035 40%, #2d1a4e 60%, #1a1035 80%, #0F0F1A 100%)",
        }}
      >
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-20">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-accent-secondary">
            Nuestros servicios
          </span>
          <h1
            className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[48px]"
            style={{
              background: "linear-gradient(105deg, #06B6D4 0%, #ffffff 40%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Todo lo que tu negocio necesita para ser visible
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/50">
            Diseño, producción e instalación en un solo lugar. 8 servicios, un solo proveedor, cero complicaciones.
          </p>
        </div>
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex flex-col gap-20">
            {services.map((s, i) => {
              const Icon = iconMap[s.slug] || Flag;
              const isEven = i % 2 === 0;
              const hasImage = s.gallery.length > 0 || s.heroImage;
              const image = s.gallery[0]?.src || s.heroImage;

              return (
                <div
                  key={s.slug}
                  className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  {hasImage && (
                    <a
                      href={`/servicios/${s.slug}`}
                      className="group relative flex-1 overflow-hidden rounded-2xl bg-foreground"
                    >
                      <div className="relative h-[280px] lg:h-[360px]">
                        <img
                          src={image}
                          alt={s.title}
                          width={800}
                          height={360}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/5" />
                        <div className="absolute bottom-5 left-5 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                          <span className="text-[13px] font-bold text-white/70">
                            {s.title}
                          </span>
                        </div>
                      </div>
                    </a>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold text-foreground lg:text-[28px]">
                        {s.title}
                      </h2>
                    </div>

                    <p className="mt-4 text-[16px] leading-[1.7] text-text-secondary">
                      {s.hook}
                    </p>

                    {/* Variants preview */}
                    {s.variants.length > 1 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.variants.map((v) => (
                          <span
                            key={v.name}
                            className="rounded-full border border-border bg-muted px-3 py-1 text-[12px] font-semibold text-foreground/70"
                          >
                            {v.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Features */}
                    <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2">
                      {s.features.slice(0, 4).map((f) => (
                        <div key={f.label} className="flex items-baseline gap-1.5">
                          <span className="text-[12px] font-bold text-accent">
                            {f.label}:
                          </span>
                          <span className="text-[13px] text-text-secondary">
                            {f.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`/servicios/${s.slug}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-[14px] font-bold text-white transition-all hover:bg-foreground/90"
                    >
                      Ver {s.title.toLowerCase()}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section
        className="relative overflow-hidden py-20 lg:py-24"
        style={{
          background: "linear-gradient(160deg, #0F0F1A 0%, #1a1035 50%, #0F0F1A 100%)",
        }}
      >
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent-secondary/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-20">
          <h2 className="text-3xl font-extrabold text-white lg:text-4xl">
            ¿No sabés cuál elegir?
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/50">
            Contanos qué necesitás y te recomendamos la mejor opción para tu negocio. Presupuesto sin costo, sin compromiso.
          </p>
          <div className="mt-8">
            <CTAButton
              variant="whatsapp"
              icon={<MessageCircle className="h-5 w-5" />}
              className="text-lg px-10 py-5"
            >
              Escribinos por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
