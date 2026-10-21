"use client";

import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl md:bottom-8 md:right-8"
    >
      <FaWhatsapp size={22} />
      <span className="hidden text-sm font-semibold sm:inline">Order on WhatsApp</span>
    </a>
  );
}
