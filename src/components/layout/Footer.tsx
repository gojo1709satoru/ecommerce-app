"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { STORE_ADDRESS, STORE_EMAIL, STORE_PHONE, getWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="bg-navy-800 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-custom flex flex-col items-center gap-4 py-10 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="font-poppins text-xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="mt-1 text-sm text-white/70">
              Get updates on new arrivals, offers, and back-to-school deals.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-gold"
            />
            <button type="submit" className="btn-primary whitespace-nowrap px-5 py-2.5">
              Subscribe
            </button>
          </form>
        </div>
        {subscribed && (
          <p className="pb-4 text-center text-sm text-gold">Thank you for subscribing!</p>
        )}
      </div>

      <div className="container-custom grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
              AA
            </span>
            <span className="font-poppins text-lg font-bold">ARAVINDA AGENCIES</span>
          </span>
          <p className="mt-4 text-sm text-white/70">
            Your one-stop destination for Stationery, School & Office Supplies, Art & Craft, Sports,
            Gifts, and Navy & Coast Guard Uniform Accessories.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
            >
              <FaWhatsapp size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-poppins text-sm font-bold uppercase tracking-wide text-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="#products" className="hover:text-white">Shop Now</Link></li>
            <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-poppins text-sm font-bold uppercase tracking-wide text-gold">
            Categories
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Stationery</li>
            <li>School & Office Supplies</li>
            <li>Art & Craft</li>
            <li>Sports & Games</li>
            <li>Navy & Coast Guard Collection</li>
          </ul>
        </div>

        <div>
          <h4 className="font-poppins text-sm font-bold uppercase tracking-wide text-gold">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-gold" /> {STORE_ADDRESS}
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gold" /> {STORE_PHONE}
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gold" /> {STORE_EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-gold" /> Mon-Sat: 9AM-9PM, Sun: 10AM-6PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} ARAVINDA AGENCIES. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
