import { Suspense } from "react";
import type { Metadata } from "next";
import { PortfolioGallery } from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "Trabajos de Cartelería en Mendoza — Portfolio FLAMA",
  description:
    "Portfolio de trabajos de FLAMA: carteles 3D, ploteo vehicular, neón, corpórea y vinilos en comercios y empresas de toda Mendoza.",
};

export default function TrabajosPage() {
  return (
    <Suspense>
      <PortfolioGallery />
    </Suspense>
  );
}
