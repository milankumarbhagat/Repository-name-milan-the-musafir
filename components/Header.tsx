"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function HeaderContent({ searchQuery = "" }: { searchQuery?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(searchQuery);
  const [isSearchOpen, setIsSearchOpen] = useState(Boolean(searchQuery));

  // Keep input in sync if query changes from outside (e.g. back button)
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== searchQuery) {
        const params = new URLSearchParams(searchParams.toString());
        if (inputValue) {
          params.set("q", inputValue);
        } else {
          params.delete("q");
        }
        const qs = params.toString();
        router.push(qs ? `/?${qs}` : "/");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [inputValue, router, searchParams, searchQuery]);

  const searchInput = (autoFocus: boolean) => (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <SearchIcon />
      </div>
      <input
        type="search"
        value={inputValue}
        autoFocus={autoFocus}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className="w-full pl-9 pr-4 py-2.5 bg-[#f3f4f6] border border-[#e5e7eb] rounded-[8px] text-sm text-[#374151] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] transition-shadow"
      />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex justify-between items-center gap-4 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="relative h-10 w-36 md:h-14 md:w-52 flex items-center justify-start flex-shrink-0">
          <Image
            src="/brand-logo.png"
            alt="Milan The Musafir"
            fill
            sizes="(max-width: 767px) 144px, 208px"
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Search: inline on tablet/desktop */}
        <div className="hidden md:block w-64 lg:w-80">{searchInput(false)}</div>

        {/* Search toggle on phones */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-gray-700 rounded-lg hover:bg-gray-100"
          onClick={() => setIsSearchOpen((open) => !open)}
          aria-label={isSearchOpen ? "Close search" : "Search products"}
          aria-expanded={isSearchOpen}
        >
          {isSearchOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <SearchIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Phone search bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3">{searchInput(!searchQuery)}</div>
      )}
    </header>
  );
}

export default function Header(props: { searchQuery?: string }) {
  return (
    <Suspense fallback={<div className="h-16 md:h-20 w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]" />}>
      <HeaderContent {...props} />
    </Suspense>
  );
}
