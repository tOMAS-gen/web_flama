import { HeroCarousel } from "@/components/HeroCarousel";
import { CTAButton } from "@/components/CTAButton";
import { ServicesSection } from "@/components/ServicesSection";
import {
  MessageCircle,
  PencilRuler,
  Wrench,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultá por WhatsApp",
    description: "Mandanos una foto de tu fachada o vehículo y contanos qué necesitás. Te respondemos el mismo día.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Recibís diseño y presupuesto",
    description: "Te enviamos propuesta gráfica y presupuesto sin costo. Ajustamos hasta que te convenza.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Producción e instalación",
    description: "Fabricamos en taller propio e instalamos en tu local. Todo incluido, sin sorpresas.",
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* ═══════════ SERVICIOS ═══════════ */}
      <ServicesSection />

      {/* ═══════════ CIFRAS ═══════════ */}
      <section className="relative overflow-hidden bg-muted py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
            {[
              { value: "+200", label: "Trabajos realizados", sub: "en toda la provincia" },
              { value: "100%", label: "Taller propio", sub: "diseño + producción + instalación" },
              { value: "24hs", label: "Respuesta", sub: "presupuesto sin compromiso" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:px-8">
                <p
                  className="text-5xl font-extrabold tracking-tight lg:text-6xl"
                  style={{
                    background: "linear-gradient(90deg, #06B6D4, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[15px] font-bold text-foreground">{stat.label}</p>
                <p className="mt-0.5 text-[13px] text-text-secondary">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESO ═══════════ */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          {/* Header */}
          <div className="text-center">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Proceso
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance text-foreground lg:text-[42px]">
              De tu idea al cartel instalado
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-text-secondary">
              3 pasos simples. Sin vueltas.
            </p>
          </div>

          {/* Timeline steps */}
          <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+32px)] right-[calc(-50%+32px)] top-8 hidden h-px bg-linear-to-r from-accent/30 to-accent-secondary/30 sm:block" />
                  )}

                  {/* Icon circle */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-linear-to-br from-accent/10 to-accent-secondary/10">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    {/* Step number badge */}
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[260px] text-[14px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="relative overflow-hidden bg-surface-dark py-24 lg:py-32">
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent-secondary/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-20">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-accent-secondary">
            Empezá hoy
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance text-white lg:text-5xl">
            ¿Tenés un local o empresa
            <br />
            en Mendoza?
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/45">
            Contanos qué necesitás y te armamos una propuesta sin costo. Diseño gratis, presupuesto en el día.
          </p>
          <div className="mt-10">
            <CTAButton
              variant="whatsapp"
              icon={<MessageCircle className="h-5 w-5" />}
              className="text-lg px-10 py-5"
            >
              Escribir por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
