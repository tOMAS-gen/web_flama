"use client";

import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import {
  MessageCircle,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import type { ServiceData } from "@/data/services";

export function ServicePage({ service }: { service: ServiceData }) {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative w-full overflow-hidden bg-black"
        style={{ height: "clamp(400px, 60vh, 560px)" }}
      >
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          style={{ animation: "kenburns 8s ease-out forwards" }}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-20">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              {service.title}
            </span>
            <h1
              className="mt-2 max-w-2xl text-[32px] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]"
              style={{
                background: "linear-gradient(105deg, #06B6D4 0%, #ffffff 40%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 24px rgba(0,0,0,0.5))",
              }}
            >
              {service.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
              {service.sub}
            </p>
            <div className="mt-6">
              <CTAButton
                variant="whatsapp"
                icon={<MessageCircle className="h-5 w-5" />}
              >
                {service.cta}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOOK / POR QUÉ ═══ */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold text-foreground lg:text-3xl">
              ¿Por qué {service.title.toLowerCase()}?
            </h2>
            <p className="mt-5 text-[17px] leading-[1.8] text-text-secondary">
              {service.hook}
            </p>
          </div>

          {/* Feature pills */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {service.features.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-border bg-muted p-5 text-center"
              >
                <p className="text-[13px] font-bold uppercase tracking-wider text-accent">
                  {f.label}
                </p>
                <p className="mt-1 text-[15px] font-semibold text-foreground">
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VARIANTES ═══ */}
      {service.variants.length > 1 && (
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Opciones
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-balance text-foreground lg:text-[36px]">
                Elegí la variante que necesitás
              </h2>
            </div>

            <div
              className={`grid grid-cols-1 gap-5 ${
                service.variants.length === 2
                  ? "md:grid-cols-2"
                  : service.variants.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {service.variants.map((v) => (
                <div
                  key={v.name}
                  className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:border-accent/20 hover:shadow-lg"
                >
                  {v.image && (
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={v.image}
                        alt={v.name}
                        width={600}
                        height={200}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      <h3
                        className="absolute bottom-4 left-5 text-lg font-extrabold text-white"
                        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                      >
                        {v.name}
                      </h3>
                    </div>
                  )}
                  <div className="p-5">
                    {!v.image && (
                      <h3 className="mb-2 text-lg font-extrabold text-foreground">
                        {v.name}
                      </h3>
                    )}
                    <p className="text-[14px] leading-relaxed text-text-secondary">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ GALERÍA ═══ */}
      {service.gallery.length > 0 && (
        <section
          className="py-20 lg:py-24"
          style={{
            background: "linear-gradient(160deg, #0F0F1A 0%, #1a1035 35%, #2d1a4e 55%, #1a1035 75%, #0F0F1A 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Portfolio
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-balance text-white lg:text-[36px]">
                Trabajos realizados
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.gallery.map((img) => (
                <div
                  key={img.src}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative h-[240px]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={240}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <p className="absolute bottom-4 left-4 text-[13px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ PLAZO + CTA ═══ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto max-w-2xl">
            {/* Timeline card */}
            <div className="mb-10 flex items-center gap-5 rounded-2xl border border-border bg-muted p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Clock className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[13px] font-bold uppercase tracking-wider text-accent">
                  Plazo de entrega
                </p>
                <p className="mt-0.5 text-[18px] font-extrabold text-foreground">
                  {service.timeline}
                </p>
              </div>
            </div>

            {/* Includes checklist */}
            <div className="mb-10 rounded-2xl border border-border bg-white p-6">
              <h3 className="mb-4 text-[15px] font-bold text-foreground">
                Siempre incluye:
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Diseño gráfico sin costo",
                  "Presupuesto sin compromiso",
                  "Producción en taller propio",
                  "Instalación profesional",
                  "Renders previos para aprobación",
                  "50% de seña para iniciar",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-secondary" aria-hidden="true" />
                    <span className="text-[14px] text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Big CTA */}
            <div
              className="rounded-2xl p-8 text-center sm:p-10"
              style={{
                background: "linear-gradient(135deg, #0F0F1A, #1a1035, #0F0F1A)",
              }}
            >
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                ¿Necesitás {service.title.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] text-white/50">
                Mandanos una foto de tu fachada o contanos tu idea. Te enviamos diseño y presupuesto sin costo.
              </p>
              <div className="mt-6">
                <CTAButton
                  variant="whatsapp"
                  icon={<MessageCircle className="h-5 w-5" />}
                  className="text-lg px-10 py-5"
                >
                  {service.cta}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <ServiceFAQ title={service.title} />
    </>
  );
}

/* ── FAQ Accordion ── */
function ServiceFAQ({ title }: { title: string }) {
  const faqs = [
    {
      q: `¿Cuánto cuesta un ${title.toLowerCase()}?`,
      a: "El precio depende del tamaño, materiales y complejidad del diseño. Mandanos una foto o medidas por WhatsApp y te pasamos presupuesto en el día, sin compromiso.",
    },
    {
      q: "¿El diseño tiene costo?",
      a: "No. El diseño gráfico está incluido. Trabajamos la propuesta con vos hasta que quede como querés, antes de producir.",
    },
    {
      q: "¿Hacen la instalación?",
      a: "Sí. Diseño, producción e instalación, todo incluido. Tenemos taller propio en Junín y trabajamos en toda la provincia de Mendoza.",
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "Solo mandanos una foto de tu fachada, vehículo o espacio por WhatsApp, contanos tu idea, y nosotros nos encargamos del resto. Seña del 50% para iniciar producción.",
    },
  ];

  return (
    <section className="border-t border-border bg-muted py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-20">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-foreground">
          Preguntas frecuentes
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        <span className="text-[15px] font-semibold text-foreground">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 pb-5 pt-3">
          <p className="text-[14px] leading-relaxed text-text-secondary">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
