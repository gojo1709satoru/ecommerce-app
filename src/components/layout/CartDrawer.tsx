"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-navy-900/50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl dark:bg-navy-900"
          >
            <div className="flex items-center justify-between border-b border-navy/10 p-5 dark:border-white/10">
              <h2 className="font-poppins text-lg font-bold text-navy dark:text-white">
                Your Cart ({items.length})
              </h2>
              <button onClick={closeCart} aria-label="Close cart" className="text-navy dark:text-white">
                <FaTimes size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <p className="mt-10 text-center text-ink/60 dark:text-white/60">Your cart is empty.</p>
              ) : (
                <ul className="flex flex-col gap-4">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-3">
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-navy-50 dark:bg-navy-700">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-sm font-semibold text-navy dark:text-white line-clamp-2">
                          {product.name}
                        </p>
                        <p className="text-sm font-bold text-gold-600">₹{product.price}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="rounded-full border border-navy/15 px-2 text-xs dark:border-white/20"
                          >
                            -
                          </button>
                          <span className="text-sm">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="rounded-full border border-navy/15 px-2 text-xs dark:border-white/20"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            aria-label="Remove item"
                            className="ml-auto text-red-400 hover:text-red-600"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-navy/10 p-5 dark:border-white/10">
                <div className="mb-4 flex items-center justify-between text-sm font-semibold text-navy dark:text-white">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <button className="btn-primary w-full">Proceed to Checkout</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
