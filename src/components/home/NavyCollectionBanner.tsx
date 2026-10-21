"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaAnchor, FaArrowRight, FaMedal, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: FaMedal, label: "Badges & Medals" },
  { icon: FaShieldAlt, label: "Regulation Footwear" },
  { icon: FaAnchor, label: "Uniform Accessories" },
];

export default function NavyCollectionBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1580130379624-3a069adbfbd5?q=80&w=1600&auto=format&fit=crop"
          alt="Navy and Coast Guard accessories"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="container-custom relative z-10 flex flex-col items-center gap-10 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
            <FaAnchor /> Exclusive Collection
          </span>
          <h2 className="mt-4 font-poppins text-3xl font-bold sm:text-4xl">
            Navy & Coast Guard Collection
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/75 lg:mx-0">
            Authentic uniforms, footwear, headwear, badges, medals, and accessories crafted to
            regulation standards — trusted by Navy and Coast Guard personnel.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium lg:justify-start"
              >
                <Icon className="text-gold" /> {label}
              </div>
            ))}
          </div>
          <Link href="#products" className="btn-primary mt-8 inline-flex">
            Explore Collection <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid flex-1 grid-cols-2 gap-4"
        >
          {[
            "https://images.unsplash.com/photo-1591951425600-8de5f1de9887?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580130601209-4f0087df8dc2?q=80&w=500&auto=format&fit=crop",
          ].map((src, i) => (
            <div
              key={src}
              className={`relative aspect-square overflow-hidden rounded-2xl border-2 border-gold/30 shadow-xl ${
                i % 2 === 1 ? "translate-y-4" : ""
              }`}
            >
              <Image src={src} alt="Navy accessory" fill loading="lazy" className="object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
