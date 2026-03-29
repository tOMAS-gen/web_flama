"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Lightbulb,
  Layers,
  Sparkles,
  Flag,
  Truck,
  Shirt,
} from "lucide-react";

const services = [
  {
    title: "Carteles 3D Iluminados",
    description: "Letras y cajas con LED",
    image: "/servicios/carteles-3d.jpg",
    href: "/servicios/carteles-3d",
    icon: Lightbulb,
    hook: "El cartel que tus vecinos van a querer copiar. Visible las 24 horas, incluso cuando tu local está cerrado.",
  },
  {
    title: "Corpórea",
    description: "Alto impacto, acrílico e iluminada",
    image: "/servicios/corporea.jpg",
    href: "/servicios/corporea",
    icon: Layers,
    hook: "La diferencia entre un local y una marca. Transmite solidez y dura más de 10 años.",
  },
  {
    title: "Neón LED",
    description: "Gastronomía y eventos",
    image: "/servicios/neon.jpg",
    href: "/servicios/neon",
    icon: Sparkles,
    hook: "Cada cliente que saca una foto es publicidad gratis. El neón se paga solo.",
  },
  {
    title: "Cartelería — Lona",
    description: "Front UV, backlight, gran formato",
    image: "/servicios/carteleria-lona.jpg",
    href: "/servicios/carteleria-lona",
    icon: Flag,
    hook: "Lista en 3 a 5 días. La opción más rápida para empezar a ser visible ya.",
  },
  {
    title: "Vinilo",
    description: "Corte, impreso, microperforado",
    image: "/servicios/vinilo.jpg",
    href: "/servicios/vinilo",
    icon: Layers,
    hook: "Transformá tu vidriera de \"local cerrado\" a \"marca activa\".",
  },
  {
    title: "Ploteo Vehicular",
    description: "Parcial e integral para flotas",
    image: "/servicios/ploteo-vehicular.jpg",
    href: "/servicios/ploteo-vehicular",
    icon: Truck,
    hook: "Tu vehículo ya circula todos los días. Cada viaje genera miles de impresiones.",
  },
  {
    title: "Indumentaria",
    description: "Remeras, gorras, ropa corporativa",
    image: "/servicios/indumentaria.jpg",
    href: "/servicios/indumentaria",
    icon: Shirt,
    hook: "Equipo uniformado = profesionalismo. Desde 3 unidades, logo vectorizado incluido.",
  },
  {
    title: "Fly Banner",
    description: "Banderas tipo gota",
    image: "/trabajos/fitgym-fly-banner.jpg",
    href: "/servicios/fly-banner",
    icon: Flag,
    hook: "Reutilizable en cada evento, feria o promo. Estructura metálica incluida.",
  },
];

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: "0px", ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function FadeIn({
  children,
  className,
  from = "bottom",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  from?: "bottom" | "left" | "right";
  delay?: number;
}) {
  const { ref, visible } = useInView();

  const translate = {
    bottom: visible ? "translateY(0)" : "translateY(28px)",
    left: visible ? "translateX(0)" : "translateX(-56px)",
    right: visible ? "translateX(0)" : "translateX(56px)",
  }[from];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden py-28 lg:py-40"
      style={{
        background:
          "linear-gradient(160deg, #0F0F1A 0%, #1a1035 35%, #2d1a4e 55%, #1a1035 75%, #0F0F1A 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">

        {/* ── Encabezado ── */}
        <FadeIn className="mb-20 text-center" from="bottom">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance text-white lg:text-[42px]">
            Todo lo que tu negocio necesita
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-white/60">
            Diseño, producción e instalación en un solo lugar. Sin intermediarios.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent-secondary" aria-hidden="true" />
            <span className="text-[12px] font-semibold text-white/50">8 servicios</span>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <span className="text-[12px] font-semibold text-white/50">Diseño · Producción · Instalación</span>
          </div>
        </FadeIn>

        {/* ── Filas alternantes ── */}
        <div className="flex flex-col gap-2">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            const Icon = s.icon;
            const num = String(i + 1).padStart(2, "0");

            return (
              <div key={s.href} className="group relative">
                {/* Separador */}
                {i > 0 && <div className="mb-2 h-px bg-white/[0.06]" />}

                <div className="grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
                  {/* ── Imagen ── */}
                  <FadeIn
                    className={isEven ? "order-first" : "order-first lg:order-last"}
                    from={isEven ? "left" : "right"}
                  >
                    <Link
                      href={s.href}
                      className="block overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <img
                        src={s.image}
                        alt=""
                        width={780}
                        height={520}
                        loading="lazy"
                        className="h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-[280px] lg:h-[360px]"
                      />
                    </Link>
                  </FadeIn>

                  {/* ── Texto ── */}
                  <FadeIn
                    className={`flex flex-col ${isEven ? "order-last" : "order-last lg:order-first"}`}
                    from={isEven ? "right" : "left"}
                    delay={100}
                  >
                    {/* Número decorativo */}
                    <span
                      className="mb-3 select-none font-black tabular-nums leading-none text-white/[0.06]"
                      style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
                      aria-hidden="true"
                    >
                      {num}
                    </span>

                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent-secondary">
                        {s.description}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white lg:text-[32px] lg:leading-tight">
                      {s.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-relaxed text-white/55">
                      {s.hook}
                    </p>

                    <Link
                      href={s.href}
                      className="group/link mt-7 inline-flex items-center gap-2 self-start rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-bold text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-accent-secondary/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      Ver servicio
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
