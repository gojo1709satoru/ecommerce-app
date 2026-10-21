import type { Metadata } from "next";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ContactForm from "@/app/contact/ContactForm";
import { STORE_ADDRESS, STORE_EMAIL, STORE_PHONE, getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us | ARAVINDA AGENCIES",
  description:
    "Get in touch with ARAVINDA AGENCIES for stationery, school, office, art & craft, sports, gift, and Navy & Coast Guard accessory enquiries.",
};

const contactDetails = [
  { icon: FaMapMarkerAlt, label: "Store Address", value: STORE_ADDRESS },
  { icon: FaPhoneAlt, label: "Phone", value: STORE_PHONE },
  { icon: FaWhatsapp, label: "WhatsApp", value: STORE_PHONE },
  { icon: FaEnvelope, label: "Email", value: STORE_EMAIL },
  { icon: FaClock, label: "Store Hours", value: "Mon-Sat: 9AM-9PM | Sun: 10AM-6PM" },
];

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero-pattern py-20 text-white">
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Contact Us
          </span>
          <h1 className="mt-4 font-poppins text-4xl font-bold sm:text-5xl">We&apos;d Love to Hear From You</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Reach out for product enquiries, bulk orders, or general questions — our team is happy
            to help.
          </p>
        </div>
      </section>

      <section className="container-custom grid grid-cols-1 gap-10 py-16 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <div className="card-base flex flex-col gap-5 p-8">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy dark:bg-white/10 dark:text-white">
                  <Icon />
                </span>
                <div>
                  <p className="font-semibold text-navy dark:text-white">{label}</p>
                  <p className="text-sm text-ink/70 dark:text-white/70">{value}</p>
                </div>
              </div>
            ))}
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
              <FaWhatsapp /> Order via WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-card dark:border-white/10">
            <iframe
              title="ARAVINDA AGENCIES location on Google Maps"
              src="https://www.google.com/maps?q=Visakhapatnam&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
