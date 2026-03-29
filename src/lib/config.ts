export const contactConfig = {
  phone: {
    display: "__PHONE_DISPLAY__",
    international: "__PHONE_INTERNATIONAL__",
    whatsappId: "__WHATSAPP_ID__",
  },
  address: "__ADDRESS__",
  instagram: "__INSTAGRAM__",
  mapsUrl: "__MAPS_URL__",
  businessHours: "__HOURS__",
  siteUrl: "https://flamastudio.ar",
};

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${contactConfig.phone.whatsappId}`;
  if (!message) return `${base}?text=${encodeURIComponent("Hola FLAMA, me gustaría pedir un presupuesto para...")}`;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const instagramUrl = `https://www.instagram.com/${contactConfig.instagram}`;
