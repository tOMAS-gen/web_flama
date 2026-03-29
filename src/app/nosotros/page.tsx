import { CTAButton } from "@/components/CTAButton";
import {
  MessageCircle,
  PencilRuler,
  Hammer,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos — FLAMA Identidad Empresarial, Junín Mendoza",
  description:
    "FLAMA es una empresa de cartelería e identidad empresarial con taller propio en Junín, Mendoza. Diseño, producción e instalación integral.",
};

const clients = {
  gastronomia: [
    "Carnes El Torito",
    "Brío Bazar",
    "Entre 2 Café",
    "King Chicken",
    "Angelo Resto Bar",
    "Crabs Burger",
    "Los Andino",
  ],
  comercio: [
    "Mario Flores Repuestos",
    "Aberturas San Marino",
    "City Moda Multishop",
    "Clásico & Moderno",
    "Autoservicio Espejo",
    "Full Padel Outdoor",
    "InkFerno Tattoo",
  ],
  transporte: [
    "Paul Llaver Neumáticos",
    "Granjeros del Este",
    "Transporte Gustavo",
    "Red Alcorta",
  ],
};

const steps = [
  {
    icon: PencilRuler,
    title: "Diseño",
    description:
      "Recibimos tu pedido, diseñamos o vectorizamos el arte. Te mostramos renders para que apruebes antes de producir.",
  },
  {
    icon: Hammer,
    title: "Producción propia",
    description:
      "Fabricamos todo en nuestro taller en Junín. No tercerizamos. Control total de calidad y tiempos.",
  },
  {
    icon: MapPin,
    title: "Instalación",
    description:
      "Colocamos en tu local, en cualquier punto de Mendoza. Equipo propio, sin subcontratar.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        style={{
          background:
            "linear-gradient(160deg, #0F0F1A 0%, #1a1035 40%, #0F0F1A 100%)",
        }}
      >
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        {/* Elnath watermark */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 select-none opacity-[0.025]"
          aria-hidden="true"
          style={{
            fontFamily: "Elnath, sans-serif",
            fontSize: "clamp(150px, 20vw, 300px)",
            lineHeight: 0.8,
            color: "white",
            transform: "translate(5%, 20%)",
          }}
        >
          FLAMA
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-20">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-accent-secondary">
            Nosotros
          </span>
          <h1
            className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[48px]"
            style={{
              background:
                "linear-gradient(105deg, #06B6D4 0%, #ffffff 40%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Todo lo que hace visible a tu negocio
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/50">
            Identidad empresarial en Mendoza desde Junín. Taller propio, equipo
            propio, sin intermediarios.
          </p>
        </div>
      </section>

      {/* ═══ QUIÉNES SOMOS ═══ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                La empresa
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-balance text-foreground lg:text-[36px] lg:leading-tight">
                Hacemos cartelería e identidad empresarial desde Junín, Mendoza
              </h2>
              <div className="mt-6 space-y-4 text-[16px] leading-[1.8] text-text-secondary">
                <p>
                  FLAMA nació con una idea simple: que cada negocio en Mendoza
                  pueda tener presencia visual profesional sin tener que buscar
                  tres proveedores distintos.
                </p>
                <p>
                  Diseñamos, producimos e instalamos. Todo sale de nuestro
                  taller. Eso nos permite controlar la calidad, cumplir los
                  plazos y mantener los precios competitivos.
                </p>
                <p>
                  Trabajamos con comercios, gastronómicos, distribuidoras de
                  bebidas, transportes y cualquier negocio que necesite hacerse
                  visible — desde la fachada hasta el vehículo, la vidriera y el
                  uniforme.
                </p>
              </div>
            </div>

            {/* Image / Stats card */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-foreground">
                <img
                  src="/servicios/carteles-3d.jpg"
                  alt="Trabajo FLAMA — Cartel 3D iluminado"
                  width={800}
                  height={400}
                  loading="lazy"
                  className="h-[320px] w-full object-cover lg:h-[400px]"
                />
              </div>
              {/* Floating stats card */}
              <div
                className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 p-6 backdrop-blur-xl lg:-left-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,15,26,0.95), rgba(26,16,53,0.95))",
                }}
              >
                <div className="flex gap-8">
                  {[
                    { value: "+200", label: "Trabajos" },
                    { value: "100%", label: "Taller propio" },
                    { value: "Toda", label: "Mendoza" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p
                        className="text-2xl font-extrabold"
                        style={{
                          background:
                            "linear-gradient(90deg, #06B6D4, #7C3AED)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[11px] font-semibold text-white/40">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MODELO DE TRABAJO ═══ */}
      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Modelo integral
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-balance text-foreground lg:text-[36px]">
              Sin intermediarios, sin demoras
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-text-secondary">
              Todo pasa por nuestras manos. Eso significa control de calidad,
              tiempos reales y un solo responsable.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-border bg-white p-8 text-center"
                >
                  {/* Number */}
                  <span className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[12px] font-bold text-white">
                    {i + 1}
                  </span>

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-[17px] font-extrabold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CLIENTES ═══ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Clientes
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-foreground lg:text-[36px]">
              Confían en nosotros
            </h2>
          </div>

          {/* Distributor highlight */}
          <div
            className="mx-auto mt-12 max-w-3xl rounded-2xl p-8 text-center sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, #0F0F1A, #1a1035, #0F0F1A)",
            }}
          >
            <p className="text-[17px] leading-relaxed text-white/70">
              Proveedor instalado de{" "}
              <span className="font-bold text-white">
                Cervecería y Maltería Quilmes de Mendoza
              </span>{" "}
              y{" "}
              <span className="font-bold text-white">Grupo Panela</span> para
              cartelería de punto de venta en toda la provincia.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[15px] font-bold tracking-wide text-white/30">
              {[
                "Quilmes",
                "Andes",
                "Pepsi",
                "Corona",
                "Stella Artois",
                "Michelob Ultra",
              ].map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>

          {/* Client sectors */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                sector: "Gastronomía",
                items: clients.gastronomia,
              },
              {
                sector: "Comercio",
                items: clients.comercio,
              },
              {
                sector: "Transporte y logística",
                items: clients.transporte,
              },
            ].map((group) => (
              <div
                key={group.sector}
                className="rounded-2xl border border-border p-6"
              >
                <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wider text-accent">
                  {group.sector}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((name) => (
                    <li
                      key={name}
                      className="text-[14px] text-text-secondary"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UBICACIÓN ═══ */}
      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Ubicación
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground lg:text-[36px] lg:leading-tight">
                Taller propio en Junín, cobertura en toda Mendoza
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-text-secondary">
                Nuestro taller está en Ladislao Segura 190, Junín. Desde ahí
                fabricamos y salimos a instalar a cualquier punto de la
                provincia. Sin subcontratar, sin intermediarios.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { label: "Dirección", value: "Ladislao Segura 190, Junín, Mendoza" },
                  { label: "Teléfono", value: "0263 15-473-9193" },
                  { label: "Horario", value: "Lunes a Viernes, 9:30 a 17:30" },
                  { label: "Instagram", value: "@flamastudio.ar" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline gap-2"
                  >
                    <span className="text-[12px] font-bold text-accent">
                      {item.label}:
                    </span>
                    <span className="text-[14px] text-text-secondary">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="https://maps.app.goo.gl/bXJztkjjrgxnZ3LfA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-[14px] font-bold text-white transition hover:bg-foreground/90"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Ver en Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Map embed placeholder */}
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.5!2d-68.482!3d-33.137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA4JzEzLjIiUyA2OMKwMjgnNTUuMiJX!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación FLAMA — Junín, Mendoza"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section
        className="relative overflow-hidden py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(160deg, #0F0F1A 0%, #1a1035 50%, #0F0F1A 100%)",
        }}
      >
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent-secondary/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-20">
          <h2 className="text-3xl font-extrabold text-white lg:text-4xl">
            ¿Tenés un negocio en Mendoza?
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/50">
            Contanos qué necesitás. Te armamos una propuesta sin costo y sin
            compromiso.
          </p>
          <div className="mt-8">
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
