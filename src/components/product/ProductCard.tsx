"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import type { Product } from "@/data/products";
import StarRating from "@/components/ui/StarRating";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const discount = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="card-base group relative flex flex-col overflow-hidden"
    >
      {product.tag && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-olive px-3 py-1 text-xs font-semibold text-white shadow">
          {product.tag}
        </span>
      )}
      <button
        onClick={() => toggleWishlist(product)}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        aria-pressed={wishlisted}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow transition-colors duration-200 hover:bg-white dark:bg-navy-700/90 dark:text-gold"
      >
        {wishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </button>

      <div className="relative aspect-square w-full overflow-hidden bg-navy-50 dark:bg-navy-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-olive dark:text-olive-300">
          {product.category}
        </span>
        <h3 className="font-poppins text-sm font-semibold leading-snug text-navy dark:text-white line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-ink/60 dark:text-white/60">({product.reviewCount})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-navy dark:text-gold">₹{product.price}</span>
          {product.mrp && (
            <>
              <span className="text-sm text-ink/40 line-through dark:text-white/40">₹{product.mrp}</span>
              <span className="text-xs font-semibold text-olive">{discount}% off</span>
            </>
          )}
        </div>

        <span
          className={`text-xs font-medium ${
            product.availability === "In Stock"
              ? "text-olive"
              : product.availability === "Limited Stock"
              ? "text-gold-600"
              : "text-red-500"
          }`}
        >
          {product.availability}
        </span>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center rounded-full border border-navy/15 dark:border-white/20">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="px-2 py-1 text-navy dark:text-white"
            >
              <FaMinus size={10} />
            </button>
            <span className="w-6 text-center text-sm font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
              className="px-2 py-1 text-navy dark:text-white"
            >
              <FaPlus size={10} />
            </button>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            onClick={() => addToCart(product, quantity)}
            className="flex items-center justify-center gap-1.5 rounded-full border-2 border-navy px-3 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-navy"
          >
            <FaShoppingCart size={12} /> Add
          </button>
          <button
            onClick={() => addToCart(product, quantity)}
            className="rounded-full bg-gold px-3 py-2 text-xs font-semibold text-navy shadow-gold transition-colors duration-200 hover:bg-gold-400"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
