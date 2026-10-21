"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card-base flex flex-col gap-4 p-8">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-navy dark:text-white">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full rounded-xl border border-navy/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold dark:border-white/20"
          placeholder="Your name"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-navy dark:text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-xl border border-navy/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold dark:border-white/20"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-navy dark:text-white">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-xl border border-navy/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold dark:border-white/20"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-navy dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full rounded-xl border border-navy/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold dark:border-white/20"
          placeholder="How can we help you?"
        />
      </div>
      <button type="submit" className="btn-primary self-start">
        <FaPaperPlane /> Send Message
      </button>
      {submitted && (
        <p className="text-sm font-medium text-olive">
          Thank you! Your message has been recorded. We will get back to you soon.
        </p>
      )}
    </form>
  );
}
