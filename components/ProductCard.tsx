import Image from "next/image";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col border border-[#e8e5df] rounded-[12px] overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 group">
      {/* Product Image Container */}
      <div className="relative w-full aspect-square bg-white overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Retailer Buttons */}
      <div className="p-3 flex flex-col gap-2 bg-white">
        {product.amazonUrl && (
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group/btn relative bg-[#111111] hover:bg-[#FF9900] text-white flex items-center justify-between px-4 py-3 rounded-xl transition-colors shadow-sm"
            aria-label={`Buy on Amazon`}
          >
            {/* Logo and Divider */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="#ffffff" d="M13.6 15.63c-1.39 1.1-3.23 1.77-5.43 1.77-3.79 0-5.8-2-5.8-5.18 0-3.56 2.53-5.32 6.64-5.32.99 0 2.05.15 3.01.44v-.96c0-1.84-.73-3.08-3.04-3.08-1.57 0-3.04.48-4.22 1.32l-1.07-2.31C5.35 1.14 7.55.51 9.87.51c4.52 0 6.2 2.64 6.2 6.37v9.06h-2.47v-2.03zM10.87 9.01c-.69-.22-1.5-.37-2.28-.37-2.28 0-3.56.92-3.56 2.68 0 1.54.95 2.5 2.75 2.5 1.58 0 2.71-.62 3.23-1.61.15-.3.26-.66.26-1.03V9.01z" />
                <path fill="#FF9900" className="group-hover/btn:fill-white transition-colors" d="M1.08 20.25c3.2 1.94 7.27 2.86 11.2 2.86 3.63 0 7.37-.8 10.64-2.5l-.99-1.9c-2.8 1.43-5.96 2.1-9.15 2.1-3.41 0-6.9-.77-9.5-2.28l-2.2 1.72z" />
              </svg>
              <div className="w-[1px] h-6 bg-white/20 group-hover/btn:bg-white/40 transition-colors"></div>
            </div>
            
            {/* Centered Text */}
            <span className="font-semibold text-sm absolute left-1/2 -translate-x-1/2">Amazon</span>
            
            {/* External Link SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-white/50 group-hover/btn:text-white transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
        {product.flipkartUrl && (
          <a
            href={product.flipkartUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group/btn relative bg-[#047BD5] hover:bg-[#00A1FF] text-white flex items-center justify-between px-4 py-3 rounded-xl transition-colors shadow-sm"
            aria-label={`Buy on Flipkart`}
          >
            {/* Logo and Divider */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="#FFE11B">
                <path fillRule="evenodd" clipRule="evenodd" d="M26 10H20V7C20 4.791 18.209 3 16 3C13.791 3 12 4.791 12 7V10H6V28C6 29.105 6.895 30 8 30H24C25.105 30 26 29.105 26 28V10ZM14 7C14 5.897 14.897 5 16 5C17.103 5 18 5.897 18 7V10H14V7ZM18.5 14L15 14V16L17.5 16V18.5L15 18.5V23L12 23V18.5L10.5 18.5V16L12 16V13.5C12 11.291 13.791 9.5 16 9.5L18.5 9.5V14Z" />
              </svg>
              <div className="w-[1px] h-6 bg-white/30 group-hover/btn:bg-white/50 transition-colors"></div>
            </div>
            
            {/* Centered Text */}
            <span className="font-semibold text-sm absolute left-1/2 -translate-x-1/2">Flipkart</span>
            
            {/* External Link SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-white/50 group-hover/btn:text-white transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
