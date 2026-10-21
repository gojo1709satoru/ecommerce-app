"use client";

import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeader from "@/components/home/SectionHeader";

interface ProductSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  products: Product[];
  tone?: "light" | "muted";
  viewAllHref?: string;
}

export default function ProductSection({
  id,
  eyebrow,
  title,
  subtitle,
  products,
  tone = "light",
  viewAllHref,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${tone === "muted" ? "bg-navy-50/60 dark:bg-navy-800/40" : ""}`}
    >
      <div className="container-custom">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} viewAllHref={viewAllHref} />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
