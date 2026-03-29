"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import {
  projects,
  serviceFilters,
  sectorFilters,
  type ServiceFilter,
  type SectorFilter,
} from "@/data/portfolio";

const WA_BASE = "https://wa.me/5402631547393?text=";

export function PortfolioGallery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeService = (searchParams.get("servicio") ?? "todos") as ServiceFilter;
  const activeSector = (searchParams.get("sector") ?? "todos") as SectorFilter;

  const setFilter = useCallback(
    (key: "servicio" | "sector", value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "todos") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const resetFilters = useCallback(() => {
    router.replace("?", { scroll: false });
  }, [router]);

  const filtered = projects.filter((p) => {
    const matchService =
      activeService === "todos" || p.service === activeService;
    const matchSector =
      activeSector === "todos" || p.sector === activeSector;
    return matchService && matchSector;
  });

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
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-accent-secondary">
                Portfolio
              </span>
              <h1
                className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[48px]"
                style={{
                  background:
                    "linear-gradient(105deg, #06B6D4 0%, #ffffff 40%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nuestros trabajos
              </h1>
              <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-white/50">
                Cada proyecto es diseñado, producido e instalado por nosotros.
                Acá podés ver el resultado.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { value: "+200", label: "Trabajos" },
                { value: "24", label: "Clientes" },
                { value: "8", label: "Servicios" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="text-3xl font-extrabold tabular-nums"
                    style={{
                      background: "linear-gradient(90deg, #06B6D4, #7C3AED)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[12px] font-semibold text-white/35">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FILTROS ═══ */}
      <section
        className="sticky top-[103px] z-30 py-4"
        style={{
          background: "linear-gradient(90deg, #0d0d1a, #150f28, #0d0d1a)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          marginTop: "-1px",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-16">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-widest text-white/20">Servicio</span>
            {serviceFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter("servicio", f.key)}
                aria-pressed={activeService === f.key}
                className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                  activeService === f.key
                    ? "bg-white/15 text-white shadow-[0_0_12px_rgba(124,58,237,0.3)] border border-white/20"
                    : "text-white/35 border border-transparent hover:bg-white/5 hover:text-white/60"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-widest text-white/20">Sector</span>
            {sectorFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter("sector", f.key)}
                aria-pressed={activeSector === f.key}
                className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                  activeSector === f.key
                    ? "text-white border border-accent/50 bg-accent/20 shadow-[0_0_12px_rgba(124,58,237,0.25)]"
                    : "text-white/35 border border-transparent hover:bg-white/5 hover:text-white/60"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALERÍA ═══ */}
      <section className="relative bg-[#0e0e1c] py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-16">
          {/* Results count */}
          <p className="mb-5 text-[12px] font-medium text-white/25" role="status" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "trabajo" : "trabajos"}
            {activeService !== "todos" &&
              ` en ${serviceFilters.find((f) => f.key === activeService)?.label}`}
            {activeSector !== "todos" &&
              ` · ${sectorFilters.find((f) => f.key === activeSector)?.label}`}
          </p>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[16px] text-white/50">
                No hay trabajos con esos filtros.
              </p>
              <button
                onClick={resetFilters}
                className="mt-3 text-[14px] font-semibold text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                Ver todos los trabajos
              </button>
            </div>
          ) : (
            <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
              {filtered.map((project) => {
                const waMsg = encodeURIComponent(
                  `Hola FLAMA, vi el trabajo de ${project.client} (${project.work}) y me interesa algo similar para mi negocio.`
                );
                return (
                  <a
                    key={project.image}
                    href={`${WA_BASE}${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mb-3 block overflow-hidden rounded-xl break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <img
                      src={project.image}
                      alt={`${project.client} — ${project.work}`}
                      className="block w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Bottom info */}
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-4 pt-16">
                      <h3
                        className="text-[14px] font-bold text-white leading-tight"
                        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
                      >
                        {project.client}
                      </h3>
                      <p className="text-[11px] text-white/50">
                        {project.work}
                      </p>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-[13px] font-bold text-white shadow-xl">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Quiero algo así
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-[#0e0e1c] py-20 lg:py-24">
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent-secondary/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-20">
          <h2 className="text-3xl font-extrabold text-balance text-white lg:text-4xl">
            ¿Querés un resultado así para tu negocio?
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/50">
            Mandanos una foto de tu fachada o contanos tu idea. Te armamos una
            propuesta sin costo.
          </p>
          <div className="mt-8">
            <CTAButton
              variant="whatsapp"
              icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
              className="text-lg px-10 py-5"
            >
              Pedí tu presupuesto
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
