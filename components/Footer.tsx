import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-10 mt-10 border-t border-black">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

        {/* Brand Section */}
        <div className="flex flex-col items-start gap-5 md:col-span-6 lg:col-span-5">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-8 4 5 5-9 4 11H3z" />
            </svg>
            <span className="text-white font-bold text-2xl tracking-tight">Milan The Musafir</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-gray-400">
            Curating the best travel gear, smart gadgets, and car accessories. Honest reviews for better journeys.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-5 md:col-span-3 lg:col-span-2 lg:col-start-8">
          <h4 className="text-white font-semibold tracking-widest text-xs uppercase">Legal</h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors w-fit">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors w-fit">Terms of Service</Link>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex flex-col gap-5 md:col-span-3 lg:col-span-3">
          <h4 className="text-white font-semibold tracking-widest text-xs uppercase">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@milanthemusafir/shorts" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/milanthemusafir/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 mt-10 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Milan The Musafir. All rights reserved.</p>
        <p className="text-gray-600">As an Amazon & Flipkart affiliate, we may earn a commission from qualifying purchases.</p>
      </div>
    </footer>
  );
}
