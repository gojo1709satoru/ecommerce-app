"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";
import StarRating from "@/components/ui/StarRating";
import SectionHeader from "@/components/home/SectionHeader";

export default function Testimonials() {
  return (
    <section className="bg-navy-50/60 py-16 dark:bg-navy-800/40 sm:py-20">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="What Our Customers Say"
          subtitle="Trusted by students, parents, teachers, office staff, and Navy & Coast Guard personnel alike."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="card-base flex flex-col gap-3 p-6"
            >
              <FaQuoteLeft className="text-gold" size={20} />
              <p className="text-sm text-ink/80 dark:text-white/80">{t.message}</p>
              <StarRating rating={t.rating} />
              <div className="mt-2 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy dark:text-white">{t.name}</p>
                  <p className="text-xs text-ink/60 dark:text-white/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
