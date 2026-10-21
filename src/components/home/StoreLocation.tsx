"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import SectionHeader from "@/components/home/SectionHeader";
import { STORE_ADDRESS, STORE_PHONE, getWhatsAppLink } from "@/lib/whatsapp";

export default function StoreLocation() {
  return (
    <section className="container-custom py-16 sm:py-20">
      <SectionHeader
        eyebrow="Visit Us"
        title="Store Location"
        subtitle="Drop by our store for personalised assistance and to explore our full range in person."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-navy/10 shadow-card dark:border-white/10"
        >
          <iframe
            title="ARAVINDA AGENCIES store location on Google Maps"
            src="https://www.google.com/maps?q=Visakhapatnam&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "360px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-base flex flex-col gap-5 p-8"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy dark:bg-white/10 dark:text-white">
              <FaMapMarkerAlt />
            </span>
            <div>
              <p className="font-semibold text-navy dark:text-white">Store Address</p>
              <p className="text-sm text-ink/70 dark:text-white/70">{STORE_ADDRESS}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy dark:bg-white/10 dark:text-white">
              <FaClock />
            </span>
            <div>
              <p className="font-semibold text-navy dark:text-white">Store Hours</p>
              <p className="text-sm text-ink/70 dark:text-white/70">
                Mon - Sat: 9:00 AM - 9:00 PM
                <br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy dark:bg-white/10 dark:text-white">
              <FaPhoneAlt />
            </span>
            <div>
              <p className="font-semibold text-navy dark:text-white">Call Us</p>
              <p className="text-sm text-ink/70 dark:text-white/70">{STORE_PHONE}</p>
            </div>
          </div>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
