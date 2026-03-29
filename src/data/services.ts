export interface ServiceVariant {
  name: string;
  description: string;
  image?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  headline: string;
  sub: string;
  hook: string;
  cta: string;
  variants: ServiceVariant[];
  gallery: { src: string; alt: string }[];
  timeline: string;
  features: { label: string; value: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "carteles-3d",
    title: "Carteles 3D Iluminados",
    seoTitle: "Carteles 3D Iluminados en Mendoza — Letras y Cajas de Luz | FLAMA",
    seoDescription: "Carteles 3D con LED para tu negocio en Mendoza. Letras iluminadas y cajas de luz. Diseño, producción e instalación. Presupuesto sin cargo.",
    heroImage: "/hero/carteles-3d.jpg",
    headline: "El cartel que trabaja\npor vos, de noche",
    sub: "Carteles 3D con LED que hacen visible tu negocio las 24 horas. Diseño, producción e instalación incluida.",
    hook: "Cada noche sin cartel iluminado es una noche que tus competidores te ganan clientes. El 70% de las decisiones de compra se toman por lo que se ve desde la calle.",
    cta: "Pedí tu presupuesto",
    variants: [
      {
        name: "Letras 3D Iluminadas",
        description: "Letras en polyfan o PVC espumado con tiras LED internas. Luz frontal o de bordes. Frente con vinilo impreso o de corte. Ideales para fachadas comerciales.",
        image: "/servicios/gallery/entre2cafe-fachada.jpg",
      },
      {
        name: "Caja 3D Iluminada",
        description: "Volumen traslúcido frontlit o backlit con letras, logos o figuras en relieve. Máxima visibilidad nocturna. Ideal para locales gastronómicos y comercios.",
        image: "/servicios/gallery/torito-nocturna.jpg",
      },
    ],
    gallery: [
      { src: "/servicios/carteles-3d.jpg", alt: "Mario Flores Repuestos — Letras 3D" },
      { src: "/servicios/gallery/entre2cafe-fachada.jpg", alt: "Entre 2 Café — Letras 3D" },
      { src: "/servicios/gallery/torito-nocturna.jpg", alt: "Carnes El Torito — Caja 3D nocturna" },
      { src: "/servicios/gallery/angelo-atardecer.jpg", alt: "Angelo Resto Bar — Caja 3D" },
      { src: "/servicios/gallery/crabs-frontal.jpg", alt: "Crabs Burger — Caja 3D temática" },
    ],
    timeline: "8 a 12 días hábiles",
    features: [
      { label: "Durabilidad", value: "+5 años en exterior" },
      { label: "LED", value: "+50.000 horas de vida útil" },
      { label: "Garantía", value: "LED modular reemplazable" },
      { label: "Incluye", value: "Diseño + producción + instalación" },
    ],
  },
  {
    slug: "corporea",
    title: "Corpórea",
    seoTitle: "Carteles Corpóreos en Mendoza — Alto Impacto y Acrílico | FLAMA",
    seoDescription: "Letras corpóreas en alto impacto, acrílico e iluminadas. Terminación premium para tu marca. Taller propio en Mendoza.",
    heroImage: "/servicios/corporea.jpg",
    headline: "Tu marca, con la\npresencia que merece",
    sub: "Letras corpóreas con terminación premium que transmiten solidez y categoría. La diferencia entre un local y una marca.",
    hook: "Un cartel corpóreo no es un gasto: es una inversión que dura más de 10 años y define cómo perciben tu negocio desde el primer vistazo.",
    cta: "Consultá por tu corpórea",
    variants: [
      {
        name: "Alto Impacto",
        description: "Frente liso en termoplástico. Resistente a la intemperie. Alta durabilidad y terminación profesional.",
        image: "/servicios/corporea.jpg",
      },
      {
        name: "Alto Impacto Ploteado",
        description: "Vinilo impreso sobre frente de alto impacto. Permite gráficas full color sobre la corpórea.",
        image: "/servicios/gallery/fullpadel-detalle.jpg",
      },
      {
        name: "Acrílico",
        description: "Frente en acrílico cristalino de 3mm o 5mm. Terminación premium contemporánea. El acabado más elegante.",
        image: "/servicios/gallery/brio-frontal.jpg",
      },
      {
        name: "Iluminada de Fondo",
        description: "Cualquier variante con LED retroiluminado. Efecto halo que destaca la marca de noche.",
        image: "/servicios/gallery/losandino-neon.jpg",
      },
    ],
    gallery: [
      { src: "/servicios/corporea.jpg", alt: "King Chicken — Corpórea alto impacto" },
      { src: "/servicios/gallery/fullpadel-detalle.jpg", alt: "Full Padel Outdoor — Corpórea ploteada" },
      { src: "/servicios/gallery/brio-frontal.jpg", alt: "Brío Bazar — Corpórea acrílico" },
      { src: "/servicios/gallery/losandino-neon.jpg", alt: "Los Andino — Iluminada de fondo" },
      { src: "/servicios/gallery/sanmarino-atardecer.jpg", alt: "Aberturas San Marino — Alto impacto" },
    ],
    timeline: "10 a 15 días hábiles",
    features: [
      { label: "Durabilidad", value: "+10 años" },
      { label: "Terminaciones", value: "Alto impacto, acrílico, ploteado" },
      { label: "Iluminación", value: "Retroiluminado opcional" },
      { label: "Incluye", value: "Diseño + producción + instalación" },
    ],
  },
  {
    slug: "neon",
    title: "Neón LED",
    seoTitle: "Carteles Neón LED en Mendoza — Neón para Locales y Eventos | FLAMA",
    seoDescription: "Neón LED para bares, restaurantes y eventos en Mendoza. Efecto neón moderno, bajo consumo, diseño personalizado.",
    heroImage: "/servicios/neon.jpg",
    headline: "El efecto que tus\nclientes van a compartir",
    sub: "Neón LED que transforma tu espacio en una experiencia. Cada foto que sacan tus clientes es publicidad gratis en redes.",
    hook: "Un neón no es solo decoración: es el elemento que convierte un local común en un lugar donde la gente quiere estar y compartir. Se paga solo con cada historia de Instagram.",
    cta: "Diseñá tu neón",
    variants: [
      {
        name: "Neón Acrílico",
        description: "Tubo LED flexible adherido al contorno de una figura en acrílico cortado. Base de 2mm. El clásico efecto neón con tecnología moderna.",
        image: "/servicios/neon.jpg",
      },
      {
        name: "Neón LED Flexible",
        description: "Tubo neón flexible 12V para retroiluminación, contornos y decoración. Ideal para instalaciones decorativas de gran escala.",
        image: "/servicios/gallery/andes-neon.jpg",
      },
    ],
    gallery: [
      { src: "/servicios/neon.jpg", alt: "Entre 2 Café Show — Neón rojo y blanco" },
      { src: "/servicios/gallery/corona-neon.jpg", alt: "Corona — Neón azul iluminado" },
      { src: "/servicios/gallery/andes-neon.jpg", alt: "Andes — Letra A neón dorado" },
    ],
    timeline: "10 a 15 días hábiles",
    features: [
      { label: "Consumo", value: "80% menos que neón de gas" },
      { label: "Mantenimiento", value: "Casi nulo" },
      { label: "Diseño", value: "Cualquier forma o tipografía" },
      { label: "Incluye", value: "Diseño + producción + instalación" },
    ],
  },
  {
    slug: "carteleria-lona",
    title: "Cartelería — Lona",
    seoTitle: "Carteles de Lona en Mendoza — Lona Front UV y BackLight | FLAMA",
    seoDescription: "Carteles de lona para locales en Mendoza. Impresión UV, backlight, gran formato. Producción en 3-5 días.",
    heroImage: "/servicios/carteleria-lona.jpg",
    headline: "Visible desde\nla primera semana",
    sub: "Cartelería en lona lista en 3 a 5 días. La opción más rápida para que tu negocio deje de pasar desapercibido.",
    hook: "¿Sabías que un local sin cartel pierde hasta el 50% de los clientes que pasan caminando? Con una lona profesional, tu negocio se hace visible desde el primer día.",
    cta: "Pedí tu cartel de lona",
    variants: [
      {
        name: "Lona Front UV",
        description: "Impresión exterior resistente a la intemperie. La opción estándar para fachadas. Colores vivos y durables.",
        image: "/servicios/carteleria-lona.jpg",
      },
      {
        name: "Lona BackLight",
        description: "Lona traslúcida para cajas de luz. Visibilidad nocturna sin piezas 3D. Ideal para drugstores y kioscos.",
        image: "/servicios/carteleria-lona.jpg",
      },
      {
        name: "Gran Formato / Ruta",
        description: "Lonas de gran escala para medianeras, rutas y edificios. Máximo impacto visual a distancia.",
        image: "/servicios/gallery/redalcorta-vial.jpg",
      },
    ],
    gallery: [
      { src: "/servicios/carteleria-lona.jpg", alt: "Clásico & Moderno — Lona iluminada" },
      { src: "/servicios/gallery/redalcorta-vial.jpg", alt: "Red Alcorta — Cartel de ruta" },
      { src: "/servicios/gallery/franko-frontal.jpg", alt: "Mecánica Franko — Lona fachada" },
    ],
    timeline: "3 a 5 días hábiles",
    features: [
      { label: "Producción", value: "La más rápida: 3-5 días" },
      { label: "Opciones", value: "Front UV, BackLight, gran formato" },
      { label: "Estructura", value: "Caño 15/15, 20/20 o madera" },
      { label: "Incluye", value: "Diseño + impresión + instalación" },
    ],
  },
  {
    slug: "vinilo",
    title: "Vinilo",
    seoTitle: "Vinilo para Vidrieras y Fachadas en Mendoza | FLAMA",
    seoDescription: "Vinilo de corte, impreso y microperforado para vidrieras y fachadas en Mendoza. Instalación profesional incluida.",
    heroImage: "/servicios/vinilo.jpg",
    headline: "Tu vidriera,\ntu mejor vendedor",
    sub: "Vinilo profesional que transforma tu vidriera de 'local cerrado' a marca activa. Diseño e instalación incluidos.",
    hook: "Una vidriera vacía comunica abandono. Una vidriera con vinilo profesional comunica marca, confianza y actividad. La primera impresión se forma en 3 segundos.",
    cta: "Consultá por vinilo",
    variants: [
      {
        name: "Vinilo de Corte",
        description: "Oracal 651 premium o Mitoplast económico. Letras y formas recortadas. Disponible en fibra de carbono para efecto texturado.",
        image: "/servicios/vinilo.jpg",
      },
      {
        name: "Vinilo Impreso",
        description: "Impresión full color sobre vinilo. Opciones: estándar, base gris, microperforado (ve de adentro, opaco de afuera), con placa PVC o acrílico.",
        image: "/servicios/gallery/inkferno-vidriera.jpg",
      },
      {
        name: "Esmerilado",
        description: "Efecto vidrio esmerilado para privacidad sin perder luz. Disponible en anchos de 60 a 150cm.",
        image: "/servicios/vinilo.jpg",
      },
    ],
    gallery: [
      { src: "/servicios/vinilo.jpg", alt: "Autoservicio Espejo — Vinilo microperforado" },
      { src: "/servicios/gallery/inkferno-vidriera.jpg", alt: "InkFerno Tattoo — Vinilo impreso" },
      { src: "/servicios/gallery/torito-vinilo.jpg", alt: "Carnes El Torito — Vinilo en mostrador" },
    ],
    timeline: "5 a 8 días hábiles",
    features: [
      { label: "Tipos", value: "Corte, impreso, microperforado, esmerilado" },
      { label: "Premium", value: "Oracal 651 para máxima durabilidad" },
      { label: "Montaje", value: "Sobre vidrio, PVC, aluminio o acrílico" },
      { label: "Incluye", value: "Diseño + material + colocación" },
    ],
  },
  {
    slug: "ploteo-vehicular",
    title: "Ploteo Vehicular",
    seoTitle: "Ploteo Vehicular en Mendoza — Autos, Furgonetas y Camiones | FLAMA",
    seoDescription: "Ploteo vehicular parcial e integral en Mendoza. Diseño adaptado a tu vehículo. Colocación profesional incluida.",
    heroImage: "/hero/ploteo-vehicular.jpg",
    headline: "Tu publicidad\nrecorre la ciudad",
    sub: "Tu vehículo ya circula todos los días. Con ploteo, cada viaje genera miles de impresiones sin costo adicional.",
    hook: "Un vehículo sin plotear es un cartel en blanco que recorre la ciudad todos los días. ¿Cuántas personas ven tu vehículo por día? Con ploteo, cada uno es un potencial cliente.",
    cta: "Ploteá tu vehículo",
    variants: [
      {
        name: "Ploteo Parcial",
        description: "Cabina, laterales o parte trasera. Punto de entrada ideal para empezar a comunicar tu marca en la calle.",
        image: "/servicios/gallery/granjeros-trasera.jpg",
      },
      {
        name: "Ploteo Integral",
        description: "Vehículo completo. Máximo impacto visual. Transforma tu vehículo en una publicidad móvil profesional.",
        image: "/servicios/ploteo-vehicular.jpg",
      },
    ],
    gallery: [
      { src: "/servicios/ploteo-vehicular.jpg", alt: "Granjeros del Este — Ploteo camión" },
      { src: "/servicios/gallery/paullaver-hiace.jpg", alt: "Paul Llaver — Toyota Hiace" },
      { src: "/servicios/gallery/granjeros-trasera.jpg", alt: "Granjeros del Este — Vista trasera" },
      { src: "/servicios/gallery/gustavo-cisterna.jpg", alt: "Transporte Gustavo — Camión cisterna" },
    ],
    timeline: "5 a 10 días hábiles",
    features: [
      { label: "Diseño", value: "Adaptado a tu vehículo, incluido" },
      { label: "Colocación", value: "En taller o a domicilio" },
      { label: "Remoción", value: "Retiro de vinilo existente incluido" },
      { label: "Flotas", value: "Descuento por cantidad" },
    ],
  },
  {
    slug: "indumentaria",
    title: "Indumentaria Empresarial",
    seoTitle: "Indumentaria Empresarial en Mendoza — Remeras y Gorras con Logo | FLAMA",
    seoDescription: "Ropa corporativa con tu logo en Mendoza. Remeras, gorras, buzos, camisas. Sin mínimo de unidades. Vectorización incluida.",
    heroImage: "/servicios/corporea.jpg",
    headline: "Tu equipo,\ntu imagen",
    sub: "Indumentaria corporativa que transmite profesionalismo. Desde 3 unidades, con vectorización de logo incluida.",
    hook: "Un equipo sin uniforme parece improvisado. Un equipo uniformado transmite organización, confianza y pertenencia. Tus clientes lo notan.",
    cta: "Consultá por indumentaria",
    variants: [
      {
        name: "Remeras",
        description: "Algodón 1 color (serigrafía) o DTF full color. La base de cualquier uniforme corporativo.",
      },
      {
        name: "Gorras y Accesorios",
        description: "Gorras trucker con tu logo. Complemento ideal para equipos en exterior.",
      },
      {
        name: "Ropa de Trabajo",
        description: "Camisas RISTOP reforzadas, chalecos polar, pantalones cargo. Para equipos que necesitan durabilidad.",
      },
      {
        name: "Premium",
        description: "Buzos algodón frizado, camperón trucker corderito, chombas piqué. Para marcas que buscan diferenciarse.",
      },
    ],
    gallery: [],
    timeline: "5 a 10 días hábiles",
    features: [
      { label: "Mínimo", value: "Desde 3 unidades" },
      { label: "Logo", value: "Vectorización incluida" },
      { label: "Técnicas", value: "Serigrafía y DTF full color" },
      { label: "Catálogo", value: "9 prendas disponibles" },
    ],
  },
  {
    slug: "fly-banner",
    title: "Fly Banner",
    seoTitle: "Fly Banner en Mendoza — Banderas para Eventos y Locales | FLAMA",
    seoDescription: "Fly banners tipo gota para eventos, ferias y promociones en Mendoza. Estructura metálica incluida. Mínimo 2 unidades.",
    heroImage: "/servicios/carteleria-lona.jpg",
    headline: "Presencia instantánea\nen cada evento",
    sub: "Banderas tipo gota con estructura metálica incluida. Reutilizables en cada feria, evento o promo.",
    hook: "En una feria, los stands sin banners son invisibles. Un par de fly banners marca tu territorio y atrae la mirada antes que cualquier otra cosa.",
    cta: "Pedí tus fly banners",
    variants: [
      {
        name: "Fly Banner S",
        description: "1.7m de alto total. Bandera de 1.2m × 0.6m. Impresión full color sobre tela. Estructura metálica tipo gota incluida. Mínimo 2 unidades.",
      },
    ],
    gallery: [
      { src: "/servicios/gallery/fitgym-fly-banner.jpg", alt: "Fly banner FitGym — tipo gota con estructura metálica" },
    ],
    timeline: "3 a 5 días hábiles",
    features: [
      { label: "Tamaño", value: "1.7m alto, bandera 1.2×0.6m" },
      { label: "Estructura", value: "Metálica tipo gota, incluida" },
      { label: "Mínimo", value: "2 unidades" },
      { label: "Reutilizable", value: "Usalo en cada evento" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
