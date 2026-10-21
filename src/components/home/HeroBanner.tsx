"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaShieldAlt, FaTruck, FaMedal } from "react-icons/fa";

const highlights = [
  { icon: FaShieldAlt, label: "Trusted Since 2001" },
  { icon: FaTruck, label: "Fast Local Delivery" },
  { icon: FaMedal, label: "Genuine Navy Accessories" },
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1600&auto=format&fit=crop"
          alt="Stationery and office supplies background"
          fill
          priority
          className="object-cover opacity-25"
        />
      </div>

      {/* Decorative gold ring */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[3px] border-gold/30" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full border-[3px] border-olive-300/30" />

      <div className="container-custom relative z-10 flex flex-col items-center gap-10 py-20 text-center sm:py-28 lg:flex-row lg:items-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
            Stationery • School • Office • Navy & Coast Guard
          </span>
          <h1 className="mt-5 font-poppins text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Everything You Need <span className="text-gold">Under One Roof</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg lg:mx-0">
            Stationery • School Supplies • Office Essentials • Art & Craft • Sports • Gifts • Navy
            & Coast Guard Accessories
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link href="#products" className="btn-primary w-full sm:w-auto">
              Shop Now <FaArrowRight />
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto">
              <FaPhoneAlt /> Contact Us
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium text-white backdrop-blur lg:justify-start"
              >
                <Icon className="text-gold" /> {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex-1"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-gold/40 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=900&auto=format&fit=crop"
              alt="Assorted stationery and school supplies"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-card sm:-left-10">
            <p className="text-2xl font-bold text-navy">1000+</p>
            <p className="text-xs font-medium text-ink/60">Products Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
