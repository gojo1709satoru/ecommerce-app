"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCategories } from "@/data/categories";
import SectionHeader from "@/components/home/SectionHeader";

export default function CategoryGrid() {
  return (
    <section className="container-custom py-16 sm:py-20">
      <SectionHeader
        eyebrow="Shop by Category"
        title="Featured Categories"
        subtitle="From classroom essentials to Navy uniform accessories — explore our complete range."
      />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {featuredCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`#products`}
                className="card-base group relative flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow">
                    <Icon size={16} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins text-sm font-bold text-navy dark:text-white">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink/60 dark:text-white/60 line-clamp-1">
                    {category.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-olive">
                    {category.productCount}+ Products
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
