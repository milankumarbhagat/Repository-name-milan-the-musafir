"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function HeaderContent({ 
  currentCategory = "",
  searchQuery = ""
}: { 
  currentCategory?: string,
  searchQuery?: string
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(searchQuery);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          params.set('q', inputValue);
        } else {
          params.delete('q');
        }
        router.push(`/?${params.toString()}`);
      }
    }, 400); // 400ms delay

    return () => clearTimeout(timer);
  }, [inputValue, router, searchParams, searchQuery]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] py-3 relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex justify-between items-center md:h-20 h-14">
        {/* Left: Logo */}
        <Link href="/" className="relative h-10 w-36 md:h-16 md:w-56 flex items-center justify-start flex-shrink-0">
          <Image
            src="/brand-logo.png"
            alt="Milan The Musafir"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        
        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-800 text-sm">
          <Link href="/" className={`py-1 hover:text-gray-900 transition-colors ${!currentCategory ? 'text-gray-900 border-b-2 border-[#f59e0b]' : ''}`}>Home</Link>
          <Link href="/?category=Car%20Accessories" className={`py-1 hover:text-gray-900 transition-colors ${currentCategory === 'Car Accessories' ? 'text-gray-900 border-b-2 border-[#f59e0b]' : ''}`}>Car Accessories</Link>
          <Link href="/?category=Gadgets" className={`py-1 hover:text-gray-900 transition-colors ${currentCategory === 'Gadgets' ? 'text-gray-900 border-b-2 border-[#f59e0b]' : ''}`}>Gadgets</Link>
          <Link href="/?category=Apparel" className={`py-1 hover:text-gray-900 transition-colors ${currentCategory === 'Apparel' ? 'text-gray-900 border-b-2 border-[#f59e0b]' : ''}`}>Apparel</Link>
        </nav>

        {/* Right: Search */}
        <div className="hidden md:flex items-center w-48 lg:w-64 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search products..." 
            className="w-full pl-9 pr-4 py-2 bg-[#f3f4f6] border border-[#e5e7eb] rounded-[8px] text-sm text-[#374151] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] transition-shadow"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -mr-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 z-50">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search products..." 
              className="w-full pl-9 pr-4 py-2.5 bg-[#f3f4f6] border border-[#e5e7eb] rounded-[8px] text-sm text-[#374151] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] transition-shadow"
            />
          </div>
          
          <nav className="flex flex-col font-medium text-gray-800 text-[15px]">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className={`py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${!currentCategory ? 'text-[#f59e0b] bg-[#fffaf0]' : ''}`}>Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/?category=Car%20Accessories" className={`py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${currentCategory === 'Car Accessories' ? 'text-[#f59e0b] bg-[#fffaf0]' : ''}`}>Car Accessories</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/?category=Gadgets" className={`py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${currentCategory === 'Gadgets' ? 'text-[#f59e0b] bg-[#fffaf0]' : ''}`}>Gadgets</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/?category=Apparel" className={`py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${currentCategory === 'Apparel' ? 'text-[#f59e0b] bg-[#fffaf0]' : ''}`}>Apparel</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Header(props: any) {
  return (
    <Suspense fallback={<div className="h-[104px] w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]" />}>
      <HeaderContent {...props} />
    </Suspense>
  );
}
