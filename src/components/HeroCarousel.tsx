"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { CTAButton } from "./CTAButton";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/hero/carteles-3d.jpg",
    tag: "Carteles 3D iluminados",
    headline: "Tu negocio, visible\nde día y de noche",
    sub: "Carteles 3D con LED que trabajan cuando vos descansás.",
    cta: "Pedí tu presupuesto",
  },
  {
    image: "/hero/corporea.jpg",
    tag: "Corpórea",
    headline: "Tu marca, con la\npresencia que merece",
    sub: "Letras corpóreas que transmiten solidez y categoría.",
    cta: "Consultá por tu corpórea",
  },
  {
    image: "/hero/neon.jpg",
    tag: "Neón LED",
    headline: "El efecto que tus\nclientes van a compartir",
    sub: "Neón LED que transforma tu espacio en una experiencia.",
    cta: "Diseñá tu neón",
  },
  {
    image: "/hero/ploteo-vehicular.jpg",
    tag: "Ploteo vehicular",
    headline: "Tu publicidad\nrecorre la ciudad",
    sub: "Miles de impresiones diarias sin costo adicional.",
    cta: "Ploteá tu vehículo",
  },
  {
    image: "/hero/carteleria-lona.jpg",
    tag: "Cartelería en lona",
    headline: "Visible desde\nla primera semana",
    sub: "Lista en 3 a 5 días. La opción más rápida.",
    cta: "Pedí tu cartel",
  },
];

const INTERVAL = 6000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgressKey((k) => k + 1);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, INTERVAL);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      resetTimer();
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning, resetTimer]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "calc(100dvh - 107px)" }}
    >
      {/* ── Full-bleed images ── */}
      {slides.map((s, i) => (
        <div
          key={s.tag}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.tag}
            fill
            className="object-cover"
            style={{
              animation:
                i === current
                  ? `kenburns ${INTERVAL}ms ease-out forwards`
                  : "none",
            }}
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* ── Minimal bottom gradient for text legibility only ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* ── Content pinned to bottom-left ── */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-20">
          <div aria-live="polite" aria-atomic="true">
            {/* Tag */}
            <span
              key={`tag-${current}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md animate-[fadeInUp_0.4s_ease-out]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" aria-hidden="true" />
              {slide.tag}
            </span>

            {/* Headline */}
            <h1
              key={`h1-${current}`}
              className="mt-4 text-[52px] font-black leading-[0.95] tracking-tight text-balance sm:text-[72px] lg:text-[96px] animate-[fadeInUp_0.5s_ease-out_0.08s_both]"
              style={{
                background: "linear-gradient(105deg, #06B6D4 0%, #ffffff 40%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 24px rgba(0,0,0,0.5))",
              }}
            >
              {slide.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="mt-3 max-w-lg text-[16px] leading-relaxed text-white/75 sm:text-[18px] animate-[fadeInUp_0.5s_ease-out_0.16s_both]"
            >
              {slide.sub}
            </p>

            {/* CTA */}
            <div
              key={`cta-${current}`}
              className="mt-6 animate-[fadeInUp_0.5s_ease-out_0.24s_both]"
            >
              <CTAButton
                variant="whatsapp"
                icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
              >
                {slide.cta}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/3 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:top-1/2 lg:left-8"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 top-1/3 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:top-1/2 lg:right-8"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* ── Bottom progress + navigation ── */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        {/* Progress bar */}
        <div className="h-[3px] w-full bg-white/10">
          <div
            key={progressKey}
            className="h-full origin-left bg-linear-to-r from-accent-secondary to-accent"
            style={{
              animation: `hero-progress ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2.5 bg-black/50 py-3 backdrop-blur-sm">
          {slides.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => goTo(i)}
              aria-label={s.tag}
              aria-current={i === current ? "true" : undefined}
              className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-white"
                    : "w-3 bg-white/30 group-hover:bg-white/60"
                }`}
              />
              {i === current && (
                <span className="text-[11px] font-semibold tracking-wide text-white/80">
                  {s.tag}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
