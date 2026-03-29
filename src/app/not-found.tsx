import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-107px)] items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0A0A1A 0%, #1a1035 50%, #0A0A1A 100%)",
      }}
    >
      {/* Background FLAMA watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
        style={{
          fontFamily: "Elnath, sans-serif",
          fontSize: "clamp(200px, 30vw, 450px)",
          lineHeight: 1,
          color: "rgba(255,255,255,0.03)",
        }}
      >
        404
      </div>

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent-secondary/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
        <p
          className="text-8xl font-extrabold tracking-tight sm:text-9xl"
          style={{
            background: "linear-gradient(105deg, #06B6D4, #ffffff 50%, #7C3AED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 24px rgba(124,58,237,0.3))",
          }}
        >
          404
        </p>

        <h1 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
          Esta página no existe
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-white/50">
          Puede que el link esté roto o que la página haya sido movida. Pero tu cartel sí puede existir.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <CTAButton
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" />}
            className="text-[14px] px-6 py-3.5"
          >
            Escribinos
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
