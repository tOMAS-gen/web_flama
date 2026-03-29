export type ServiceFilter = "todos" | "carteles-3d" | "corporea" | "neon" | "lona" | "vinilo" | "ploteo" | "fly-banner";
export type SectorFilter = "todos" | "gastronomia" | "comercio" | "transporte" | "distribuidoras";
export type CardSize = "sm" | "md" | "lg";

export interface Project {
  image: string;
  client: string;
  work: string;
  service: ServiceFilter;
  sector: SectorFilter;
  size?: CardSize;
}

export const serviceFilters: { key: ServiceFilter; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "carteles-3d", label: "Carteles 3D" },
  { key: "corporea", label: "Corpórea" },
  { key: "neon", label: "Neón" },
  { key: "lona", label: "Lona / Caja de luz" },
  { key: "vinilo", label: "Vinilo" },
  { key: "ploteo", label: "Ploteo Vehicular" },
  { key: "fly-banner", label: "Fly Banner" },
];

export const sectorFilters: { key: SectorFilter; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "gastronomia", label: "Gastronomía" },
  { key: "comercio", label: "Comercio" },
  { key: "transporte", label: "Transporte" },
  { key: "distribuidoras", label: "Distribuidoras" },
];

export const projects: Project[] = [
  // ── Clientes directos ──
  { image: "/trabajos/mario-flores-repuestos-letras-3d-iluminadas.jpg", client: "Mario Flores Repuestos", work: "Letras 3D iluminadas", service: "carteles-3d", sector: "comercio", size: "lg" },
  { image: "/trabajos/entre-2-cafe-y-resto-bar-pizzeria-letras-3d-iluminadas.jpg", client: "Entre 2 Café", work: "Letras 3D iluminadas", service: "carteles-3d", sector: "gastronomia" },
  { image: "/trabajos/entre-2-cafe-y-resto-bar-pizzeria-neon.jpg", client: "Entre 2 Café Show", work: "Neón rojo y blanco", service: "neon", sector: "gastronomia", size: "lg" },
  { image: "/trabajos/carnes-el-torito-caja-3d-iluminada.jpg", client: "Carnes El Torito", work: "Caja 3D iluminada", service: "carteles-3d", sector: "gastronomia", size: "md" },
  { image: "/trabajos/carnes-el-torito-carteleria-de-precios.jpg", client: "Carnes El Torito", work: "Cartelería de precios", service: "vinilo", sector: "gastronomia", size: "sm" },
  { image: "/trabajos/carnes-el-torito-vinilo.jpg", client: "Carnes El Torito", work: "Vinilo mostrador", service: "vinilo", sector: "gastronomia", size: "sm" },
  { image: "/trabajos/king-chicken-corporea-alto-impacto.jpg", client: "King Chicken", work: "Corpórea alto impacto", service: "corporea", sector: "gastronomia", size: "lg" },
  { image: "/trabajos/brio-bazar-corporea-acrilico.jpg", client: "Brío Bazar", work: "Corpórea acrílico", service: "corporea", sector: "comercio", size: "lg" },
  { image: "/trabajos/brio-bazar-caja-de-luz.jpg", client: "Brío Bazar", work: "Caja de luz", service: "lona", sector: "comercio", size: "md" },
  { image: "/trabajos/los-andino-corporea-iluminada-de-fondo.jpg", client: "Los Andino", work: "Corpórea iluminada de fondo", service: "corporea", sector: "gastronomia", size: "md" },
  { image: "/trabajos/angelo-resto-bar-caja-3d-iluminada.jpg", client: "Angelo Resto Bar", work: "Caja 3D iluminada", service: "carteles-3d", sector: "gastronomia", size: "md" },
  { image: "/trabajos/crabs-burger-caja-3d-iluminada.jpg", client: "Crabs Burger", work: "Caja 3D temática", service: "carteles-3d", sector: "gastronomia", size: "sm" },
  { image: "/trabajos/full-padel-outdoor-corporea-alto-impacto-ploteado.jpg", client: "Full Padel Outdoor", work: "Corpórea ploteada", service: "corporea", sector: "comercio", size: "md" },
  { image: "/trabajos/aberturas-san-marino-corporea-alto-impacto.jpg", client: "Aberturas San Marino", work: "Corpórea alto impacto", service: "corporea", sector: "comercio", size: "md" },
  { image: "/trabajos/city-moda-multishop-corporea-alto-impacto.jpg", client: "City Moda Multishop", work: "Corpórea alto impacto", service: "corporea", sector: "comercio", size: "sm" },
  { image: "/trabajos/drugstore-mj-food-corporea.jpg", client: "Drugstore MJ Food", work: "Corpórea", service: "corporea", sector: "comercio", size: "sm" },
  { image: "/trabajos/don-francisco-hospedaje-chapa-cortada-iluminada.jpg", client: "Don Francisco Hospedaje", work: "Chapa cortada iluminada", service: "carteles-3d", sector: "comercio", size: "sm" },
  { image: "/trabajos/clasico-moderno-lona-iluminada.jpg", client: "Clásico & Moderno", work: "Lona iluminada", service: "lona", sector: "comercio", size: "lg" },
  { image: "/trabajos/red-alcorta-lona-cartel-de-ruta.jpg", client: "Red Alcorta", work: "Cartel de ruta gran formato", service: "lona", sector: "comercio", size: "md" },
  { image: "/trabajos/mecanica-franko-lona.jpg", client: "Mecánica Franko", work: "Lona fachada", service: "lona", sector: "comercio", size: "sm" },
  { image: "/trabajos/auditorio-el-bet-el-lona-iluminada.jpg", client: "Auditorio El Bet-El", work: "Lona iluminada gran formato", service: "lona", sector: "comercio", size: "md" },
  { image: "/trabajos/salon-de-eventos-imperium-caja-de-luz.jpg", client: "Salón Imperium", work: "Caja de luz", service: "lona", sector: "comercio", size: "sm" },
  { image: "/trabajos/salon-de-eventos-imperium-lona.jpg", client: "Salón Imperium", work: "Lona impresa", service: "lona", sector: "comercio", size: "sm" },
  { image: "/trabajos/autoservicio-espejo-caja-3d-iluminada.jpg", client: "Autoservicio Espejo", work: "Caja 3D — logo", service: "carteles-3d", sector: "comercio", size: "sm" },
  { image: "/trabajos/autoservicio-espejo-lona.jpg", client: "Autoservicio Espejo", work: "Lona fachada", service: "lona", sector: "comercio", size: "sm" },
  { image: "/trabajos/autoservicio-espejo-vinilo-microperforado.jpg", client: "Autoservicio Espejo", work: "Vinilo microperforado", service: "vinilo", sector: "comercio", size: "md" },
  { image: "/trabajos/inkferno-tattoo-vinilo-impreso.jpg", client: "InkFerno Tattoo", work: "Vinilo impreso vidriera", service: "vinilo", sector: "comercio", size: "md" },
  { image: "/trabajos/paul-llaver-neumaticos-ploteo-vehicular.jpg", client: "Paul Llaver Neumáticos", work: "Ploteo integral", service: "ploteo", sector: "transporte", size: "lg" },
  { image: "/trabajos/granjeros-del-este-ploteo-vehicular.jpg", client: "Granjeros del Este", work: "Ploteo camiones", service: "ploteo", sector: "transporte", size: "md" },
  { image: "/trabajos/transporte-gustavo-ploteo-vehicular.jpg", client: "Transporte Gustavo", work: "Ploteo camión cisterna", service: "ploteo", sector: "transporte", size: "sm" },
  { image: "/trabajos/fitgym-fly-banner.jpg", client: "FitGym", work: "Fly banner tipo gota", service: "fly-banner", sector: "comercio", size: "md" },

  // ── Distribuidora de Bebidas — Quilmes ──
  { image: "/trabajos/distribuidora-de-bebidas-quilmes-letras-3d-iluminadas-local-quilmes.jpg", client: "Local Quilmes", work: "Letras 3D iluminadas", service: "carteles-3d", sector: "distribuidoras", size: "lg" },
  { image: "/trabajos/distribuidora-de-bebidas-quilmes-letras-3d-y-vinilo-vereda-este.jpg", client: "Vereda Este", work: "Letras 3D + vinilo Quilmes", service: "carteles-3d", sector: "distribuidoras", size: "md" },

  // ── Distribuidora de Bebidas — Andes ──
  { image: "/trabajos/distribuidora-de-bebidas-andes-corporea-andes-estacion-belgrano.jpg", client: "Andes Estación Belgrano", work: "Corpórea Andes", service: "corporea", sector: "distribuidoras", size: "md" },
  { image: "/trabajos/distribuidora-de-bebidas-andes-neon.jpg", client: "Andes", work: "Neón letra A dorada", service: "neon", sector: "distribuidoras", size: "md" },
  { image: "/trabajos/distribuidora-de-bebidas-andes-caja-de-luz-oporto.jpg", client: "Oporto", work: "Caja de luz Andes", service: "lona", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-andes-vinilo-local-de-cervezas.jpg", client: "Local Andes Origen", work: "Vinilo fachada", service: "vinilo", sector: "distribuidoras", size: "sm" },

  // ── Distribuidora de Bebidas — Pepsi ──
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-caja-3d-iluminada-logo-pepsi.jpg", client: "Local Pepsi", work: "Logo Pepsi 3D iluminado", service: "carteles-3d", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-caja-de-luz-drugstore-24hs.jpg", client: "Drugstore 24hs", work: "Caja de luz Pepsi", service: "lona", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-caja-de-luz-kiosco-cesar.jpg", client: "Kiosco César", work: "Caja de luz Pepsi", service: "lona", sector: "distribuidoras", size: "md" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-caja-de-luz-y-letras-3d-tomas-thomas.jpg", client: "Tomas Thomas", work: "Caja de luz + Letras 3D Pepsi", service: "carteles-3d", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-caja-de-luz-y-vinilo-la-esquina.jpg", client: "La Esquina", work: "Caja de luz + vinilo Pepsi", service: "lona", sector: "distribuidoras", size: "md" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-corporea-y-vinilo-maxikiosco-el-general.jpg", client: "Maxikiosco El General", work: "Corpórea + vinilo Pepsi", service: "corporea", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-lona-iluminada-standby-drugstore.jpg", client: "StandBy Drugstore", work: "Lona iluminada Pepsi", service: "lona", sector: "distribuidoras", size: "lg" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-lona-y-toldos-drugstore-dardo.jpg", client: "Drugstore Dardo", work: "Lona + toldos Pepsi", service: "lona", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-varios-locales-pepsi.jpg", client: "Locales Pepsi", work: "Cartelería varios", service: "lona", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-vinilo-fenix-minimarket.jpg", client: "Fenix Minimarket", work: "Vinilo Pepsi", service: "vinilo", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-pepsi-vinilo-impreso-pepsi-black.jpg", client: "Pepsi Black", work: "Vinilo impreso exhibidor", service: "vinilo", sector: "distribuidoras", size: "sm" },

  // ── Distribuidora de Bebidas — Corona ──
  { image: "/trabajos/distribuidora-de-bebidas-corona-neon.jpg", client: "Corona", work: "Neón LED", service: "neon", sector: "distribuidoras", size: "lg" },
  { image: "/trabajos/distribuidora-de-bebidas-corona-arco-decorativo.jpg", client: "Corona", work: "Arco decorativo evento", service: "corporea", sector: "distribuidoras", size: "md" },

  // ── Distribuidora de Bebidas — Stella / Michelob / Grupo Panela ──
  { image: "/trabajos/distribuidora-de-bebidas-stella-artois-caja-de-luz-cantina-a-gogo.jpg", client: "Cantina a Gogó", work: "Caja de luz Stella Artois", service: "lona", sector: "distribuidoras", size: "md" },
  { image: "/trabajos/distribuidora-de-bebidas-michelob-ultra-corporea-full-padel.jpg", client: "Full Padel — Michelob", work: "Corpórea Michelob Ultra", service: "corporea", sector: "distribuidoras", size: "sm" },
  { image: "/trabajos/distribuidora-de-bebidas-grupo-panela-corporea-full-padel.jpg", client: "Full Padel — Grupo Panela", work: "Corpórea Grupo Panela", service: "corporea", sector: "distribuidoras", size: "sm" },
];

export function getServiceBySlug(slug: string) {
  return null; // unused here, defined in services.ts
}
