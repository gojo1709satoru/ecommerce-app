"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaMoon,
  FaSun,
  FaChevronDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "@/components/layout/SearchBar";
import { megaMenu } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useTheme } from "@/context/ThemeContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const { totalItems, openCart } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur dark:bg-navy-900/95"
          : "bg-white dark:bg-navy-900"
      }`}
    >
      {/* Top strip */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="container-custom flex items-center justify-between py-1.5 text-xs">
          <p>Trusted Store for Stationery, School, Office & Navy Essentials since 2001</p>
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="hover:text-gold transition-colors">
              📞 +91 98765 43210
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              <FaWhatsapp /> WhatsApp Order
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-custom flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-bold text-gold">
            AA
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-poppins text-lg font-bold text-navy dark:text-white">
              ARAVINDA AGENCIES
            </span>
            <span className="text-[11px] uppercase tracking-wide text-olive dark:text-olive-300">
              Everything Under One Roof
            </span>
          </span>
        </Link>

        <div className="hidden max-w-xl flex-1 lg:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-navy-700 sm:flex"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <Link
            href="#"
            aria-label="Wishlist"
            className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-navy-700 sm:flex"
          >
            <FaHeart />
            {wishlistItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link
            href="#"
            aria-label="Account"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-navy-700 sm:flex"
          >
            <FaUser />
          </Link>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-navy-600"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy dark:border-white/20 dark:text-white lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <nav className="hidden border-t border-navy/10 dark:border-white/10 lg:block">
        <div className="container-custom flex items-center gap-6">
          {navLinks
            .filter((l) => l.label === "Home")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-semibold text-navy hover:text-gold-600 dark:text-white"
              >
                {l.label}
              </Link>
            ))}
          {megaMenu.map((menu) => (
            <div
              key={menu.slug}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.slug)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 py-3 text-sm font-semibold text-navy transition-colors hover:text-gold-600 dark:text-white">
                {menu.title} <FaChevronDown size={10} />
              </button>
              <AnimatePresence>
                {activeMenu === menu.slug && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full z-40 grid w-[640px] grid-cols-3 gap-6 rounded-2xl border border-navy/10 bg-white p-6 shadow-card-hover dark:border-white/10 dark:bg-navy-800"
                  >
                    {menu.columns.map((col) => (
                      <div key={col.heading}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gold-600">
                          {col.heading}
                        </p>
                        <ul className="space-y-1.5">
                          {col.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="#products"
                                className="text-sm text-ink/80 transition-colors hover:text-navy dark:text-white/80 dark:hover:text-gold"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {navLinks
            .filter((l) => l.label !== "Home")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-semibold text-navy hover:text-gold-600 dark:text-white"
              >
                {l.label}
              </Link>
            ))}
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-50 w-80 max-w-full overflow-y-auto bg-white p-6 shadow-2xl dark:bg-navy-900 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-poppins text-lg font-bold text-navy dark:text-white">Menu</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
                className="text-navy dark:text-white"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="mt-4">
              <SearchBar />
            </div>
            <div className="mt-6 flex flex-col gap-1">
              <Link href="/" className="rounded-lg px-2 py-2 font-semibold text-navy dark:text-white">
                Home
              </Link>
              {megaMenu.map((menu) => (
                <details key={menu.slug} className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 font-semibold text-navy dark:text-white">
                    {menu.title} <FaChevronDown className="transition-transform group-open:rotate-180" size={10} />
                  </summary>
                  <div className="ml-2 mt-1 flex flex-col gap-1 border-l border-navy/10 pl-3 dark:border-white/10">
                    {menu.columns.flatMap((c) => c.items).map((item) => (
                      <Link key={item} href="#products" className="py-1 text-sm text-ink/80 dark:text-white/80">
                        {item}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              <Link href="/about" className="rounded-lg px-2 py-2 font-semibold text-navy dark:text-white">
                About
              </Link>
              <Link href="/contact" className="rounded-lg px-2 py-2 font-semibold text-navy dark:text-white">
                Contact
              </Link>
            </div>
            <button
              onClick={toggleTheme}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-navy/15 py-2.5 text-sm font-semibold text-navy dark:border-white/20 dark:text-white"
            >
              {isDark ? <FaSun /> : <FaMoon />} Toggle Theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
