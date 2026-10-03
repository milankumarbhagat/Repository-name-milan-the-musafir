import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbf9f4]">
      <Suspense fallback={<div className="h-20 bg-white" />}>
        <Header />
      </Suspense>
      
      <main className="flex-grow relative flex items-center w-full min-h-[600px] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/404-bg.jpg"
            alt="Mountain Road Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay to ensure text is readable on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f4]/90 via-[#fbf9f4]/70 to-transparent w-full md:w-2/3 lg:w-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 lg:px-16 flex flex-col justify-center h-full pt-12 pb-24">
          <div className="max-w-lg">
            {/* 404 Text with Brush Stroke Effect */}
            <div className="relative inline-block mb-4">
              <span className="relative z-10 text-[120px] leading-none font-black text-gray-800 tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                404
              </span>
              {/* Decorative Brush Stroke Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[70%] bg-[#e5cbb3] opacity-80 -rotate-3 rounded-full blur-[3px] z-0"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Looks like you've taken a <span className="text-[#8c5e3c] font-bold">wrong turn</span>.
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-sm leading-relaxed">
              This road doesn't lead anywhere, but there are plenty of places left to explore at Musafir Store.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/" 
                className="bg-[#9c6a46] hover:bg-[#7a5234] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back to Home
              </Link>

              <Link 
                href="/?category=Gadgets" 
                className="text-[#9c6a46] hover:text-[#7a5234] font-medium transition-colors flex items-center gap-1 group"
              >
                Or explore our top picks
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
