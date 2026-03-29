export const contactConfig = {
  phone: {
    display: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "0263 15-473-9193",
    international: process.env.NEXT_PUBLIC_PHONE_INTERNATIONAL ?? "+549263154739193",
    whatsappId: process.env.NEXT_PUBLIC_WHATSAPP_ID ?? "549263154739193",
  },
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "Ladislao Segura 190, M5573 Junín, Mendoza",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "flamastudio.ar",
  mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL ?? "https://maps.app.goo.gl/tDXcngSKQLuvmzuZ7",
  businessHours: process.env.NEXT_PUBLIC_HOURS ?? "Lun a Vie, 9:30–17:30",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://flamastudio.ar",
};

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${contactConfig.phone.whatsappId}`;
  if (!message) return `${base}?text=${encodeURIComponent("Hola FLAMA, me gustaría pedir un presupuesto para...")}`;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const instagramUrl = `https://www.instagram.com/${contactConfig.instagram}`;
