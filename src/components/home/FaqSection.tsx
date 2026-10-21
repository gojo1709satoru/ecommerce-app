"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "@/data/faqs";
import SectionHeader from "@/components/home/SectionHeader";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-navy-50/60 py-16 dark:bg-navy-800/40 sm:py-20">
      <div className="container-custom max-w-3xl">
        <SectionHeader
          eyebrow="Need Help?"
          title="Frequently Asked Questions"
          subtitle="Quick answers about our products, orders, and delivery."
        />
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white dark:border-white/10 dark:bg-navy-800"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-navy dark:text-white">{faq.question}</span>
                  <FaChevronDown
                    className={`flex-shrink-0 text-gold-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-4 text-sm text-ink/70 dark:text-white/70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
