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
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Product Title */}
      <div className="px-3 pt-3">
        <h2 className="text-sm md:text-base font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[2.5em]">
          {product.name}
        </h2>
        {product.note && (
          <p className="mt-1 text-[13px] text-gray-600 leading-snug line-clamp-4 sm:line-clamp-3">
            {product.note}
          </p>
        )}
        {product.videoUrl && (
          <a
            href={product.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-xs font-medium text-[#b45309] hover:underline"
          >
            Video dekho
          </a>
        )}
      </div>

      {/* Retailer Buttons */}
      <div className="p-3 mt-auto flex flex-col gap-2 bg-white">
        {product.amazonUrl && (
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="w-full group/btn relative bg-[#111111] hover:bg-[#FF9900] text-white flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded-xl transition-colors shadow-sm"
            aria-label={`Check price of ${product.name} on Amazon (opens in a new tab)`}
          >
            {/* Retailer logo */}
            <span className="flex shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true">
                <path fill="#ffffff" d="M13.6 15.63c-1.39 1.1-3.23 1.77-5.43 1.77-3.79 0-5.8-2-5.8-5.18 0-3.56 2.53-5.32 6.64-5.32.99 0 2.05.15 3.01.44v-.96c0-1.84-.73-3.08-3.04-3.08-1.57 0-3.04.48-4.22 1.32l-1.07-2.31C5.35 1.14 7.55.51 9.87.51c4.52 0 6.2 2.64 6.2 6.37v9.06h-2.47v-2.03zM10.87 9.01c-.69-.22-1.5-.37-2.28-.37-2.28 0-3.56.92-3.56 2.68 0 1.54.95 2.5 2.75 2.5 1.58 0 2.71-.62 3.23-1.61.15-.3.26-.66.26-1.03V9.01z" />
                <path fill="#FF9900" className="group-hover/btn:fill-white transition-colors" d="M1.08 20.25c3.2 1.94 7.27 2.86 11.2 2.86 3.63 0 7.37-.8 10.64-2.5l-.99-1.9c-2.8 1.43-5.96 2.1-9.15 2.1-3.41 0-6.9-.77-9.5-2.28l-2.2 1.72z" />
              </svg>
            </span>
            
            {/* Label */}
            <span className="font-semibold text-[13px] whitespace-nowrap">Check price<span className="hidden sm:inline"> on Amazon</span></span>
          </a>
        )}
        {product.flipkartUrl && (
          <a
            href={product.flipkartUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="w-full group/btn relative bg-[#047BD5] hover:bg-[#00A1FF] text-white flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded-xl transition-colors shadow-sm"
            aria-label={`Check price of ${product.name} on Flipkart (opens in a new tab)`}
          >
            {/* Retailer logo */}
            <span className="flex shrink-0">
              <svg viewBox="0 0 32 32" className="w-4 h-4 sm:w-5 sm:h-5" fill="#FFE11B" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M26 10H20V7C20 4.791 18.209 3 16 3C13.791 3 12 4.791 12 7V10H6V28C6 29.105 6.895 30 8 30H24C25.105 30 26 29.105 26 28V10ZM14 7C14 5.897 14.897 5 16 5C17.103 5 18 5.897 18 7V10H14V7ZM18.5 14L15 14V16L17.5 16V18.5L15 18.5V23L12 23V18.5L10.5 18.5V16L12 16V13.5C12 11.291 13.791 9.5 16 9.5L18.5 9.5V14Z" />
              </svg>
            </span>
            
            {/* Label */}
            <span className="font-semibold text-[13px] whitespace-nowrap">Check price<span className="hidden sm:inline"> on Flipkart</span></span>
          </a>
        )}
      </div>
    </div>
  );
}
