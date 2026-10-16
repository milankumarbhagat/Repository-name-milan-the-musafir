"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CATEGORIES } from "../data/products";

export default function CategoryChips({ activeSlug }: { activeSlug: string | null }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // On phones the chip row scrolls sideways; bring the selected chip into view
  // without moving the page vertically.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const chip = activeRef.current;
    if (!scroller || !chip) return;
    const target = chip.offsetLeft - (scroller.clientWidth - chip.offsetWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [activeSlug]);

  return (
    <nav
      aria-label="Categories"
      className="sticky top-16 md:top-20 z-40 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100 mt-4 md:mt-6 mb-5 md:mb-8"
    >
      <div
        ref={scrollerRef}
        className="max-w-[1600px] mx-auto px-4 lg:px-8 py-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[{ slug: "", label: "All" }, ...CATEGORIES].map((c) => {
          // activeSlug: "" = All, a slug = that category, null = nothing selected (search results)
          const active = activeSlug !== null && c.slug === activeSlug;
          return (
            <Link
              key={c.slug || "all"}
              ref={active ? activeRef : undefined}
              href={c.slug ? `/?category=${c.slug}` : "/"}
              scroll={false}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {c.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
