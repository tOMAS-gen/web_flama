"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

const WHATSAPP_URL = whatsappUrl();

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-all hover:bg-whatsapp-hover hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-whatsapp"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
