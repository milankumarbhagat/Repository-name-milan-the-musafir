import Image from "next/image";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const q = typeof resolvedParams.q === 'string' ? resolvedParams.q : '';
  const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : '';

  let filteredProducts = products;

  if (category) {
    // Basic mapping: match exact or fuzzy match "Car Accessories" -> "Car & Road Trip"
    filteredProducts = filteredProducts.filter(p => {
      const pCat = p.category.toLowerCase();
      const sCat = category.toLowerCase();
      if (sCat === "car accessories" && pCat.includes("car")) return true;
      if (sCat === "gadgets" && pCat.includes("creator")) return true;
      return pCat.includes(sCat);
    });
  }

  if (q) {
    const searchLower = q.toLowerCase();
    filteredProducts = filteredProducts.filter(p => {
      const matchName = p.name.toLowerCase().includes(searchLower);
      const matchTags = p.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ?? false;
      return matchName || matchTags;
    });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header currentCategory={category} searchQuery={q} />

      {/* Hero Banner Section */}
      <section className="w-full relative bg-gray-100">
        <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] md:aspect-[4/1] lg:aspect-[5/1] xl:aspect-[6/1]">
          <Image
            src="/banner.jpg"
            alt="Milan The Musafir - Honest Reviews. Smart Finds. Better Journeys."
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <main className="flex-grow flex flex-col items-center py-12">
        <div className="w-full max-w-7xl px-4 mb-10 text-center flex flex-col items-center">
          {/* Mountain Icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gray-800 mb-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-8 4 5 5-9 4 11H3z" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {q ? `Search Results for "${q}"` : category ? `Category: ${category}` : 'Our Top Picks'}
          </h1>
          <p className="text-gray-500">
            {q ? `Showing results matching your search.` : category ? `Browsing our top picks in ${category}.` : 'Discover essential travel gear, tools, and creator equipment.'}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-16 text-center px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-300 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 max-w-md">
              {q 
                ? `We couldn't find anything matching "${q}". Try adjusting your search term or browse our categories.`
                : `We don't have any products in the "${category}" category right now. Please check back later!`
              }
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}