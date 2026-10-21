"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { products } from "@/data/products";

export default function SearchBar({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return products
      .filter(
        (p) => p.name.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower)
      )
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showDropdown = isFocused && suggestions.length > 0;

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="flex items-center rounded-full border border-navy/15 bg-white px-4 py-2.5 shadow-sm transition-shadow focus-within:shadow-md dark:border-white/20 dark:bg-navy-800">
        <FaSearch className="text-navy/50 dark:text-white/50" size={16} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for pens, geometry box, navy badges..."
          aria-label="Search products"
          className="ml-3 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40 dark:text-white dark:placeholder:text-white/40"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="text-navy/40 hover:text-navy dark:text-white/40 dark:hover:text-white"
          >
            <FaTimes size={14} />
          </button>
        )}
      </div>

      {showDropdown && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-navy/10 bg-white p-2 shadow-card-hover dark:border-white/10 dark:bg-navy-800"
        >
          {suggestions.map((product) => (
            <li key={product.id}>
              <a
                href={`#products`}
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-navy-50 dark:hover:bg-navy-700"
              >
                <span className="font-medium text-navy dark:text-white">{product.name}</span>
                <span className="text-xs text-olive">{product.category}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
