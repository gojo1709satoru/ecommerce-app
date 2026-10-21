export const STORE_PHONE = "+91 98765 43210";
export const STORE_WHATSAPP_NUMBER = "919876543210";
export const STORE_EMAIL = "info@aravindaagencies.in";
export const STORE_ADDRESS = "12, Main Bazaar Road, Near Navy Gate, Visakhapatnam, Andhra Pradesh 530001";

export function getWhatsAppLink(message = "Hi, I would like to know more about your products at ARAVINDA AGENCIES.") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encoded}`;
}
