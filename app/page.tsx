import Image from "next/image";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import CategoryChips from "../components/CategoryChips";
import { products, getCategory } from "../data/products";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const q = typeof resolvedParams.q === 'string' ? resolvedParams.q : '';
  const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : '';

  let filteredProducts = products;

  const activeCategory = getCategory(category);

  // Unknown or old category links (e.g. "Car Accessories", "Apparel") fall back to all products
  if (activeCategory) {
    filteredProducts = filteredProducts.filter((p) => p.category === activeCategory.slug);
  }

  if (q) {
    const searchLower = q.toLowerCase();
    filteredProducts = filteredProducts.filter(p => {
      const matchName = p.name.toLowerCase().includes(searchLower);
      const matchTags = p.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ?? false;
      return matchName || matchTags;
    });
  }

  // On a category page, keep the visitor browsing with picks from other categories
  const morePicks = activeCategory && !q ? products.filter((p) => p.category !== activeCategory.slug).slice(0, 8) : [];

  const heading = q ? `"${q}" ke results` : activeCategory ? activeCategory.label : "Meri Top Picks";
  const subheading = q
    ? "Naam ya tag se match hone wale products."
    : activeCategory
      ? activeCategory.description
      : "Raahi ka setup, shooting gear aur road trip ki cheezein. Har pick ke saath meri honest line.";

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header searchQuery={q} />

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

      <main className="flex-grow flex flex-col pb-10 md:pb-16">
        {/* Section intro: left aligned, compact */}
        <section className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 pt-6 md:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b45309]">
            {q ? "Search" : activeCategory ? "Category" : "Musafir Store"}
          </p>
          <div className="mt-1 flex items-center gap-3">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
              {heading}
            </h1>
            <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs md:text-sm font-medium text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? "pick" : "picks"}
            </span>
          </div>
          <p className="mt-1 md:mt-2 max-w-2xl text-sm md:text-base text-gray-600">{subheading}</p>
        </section>

        {/* Category chips: the only category navigation, sticky under the header */}
        <CategoryChips activeSlug={q ? null : activeCategory?.slug ?? ""} />

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-16 text-center px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-300 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 max-w-md">
              {`We couldn't find anything matching "${q}". Try adjusting your search term or browse our categories.`}
            </p>
          </div>
        )}
        {morePicks.length > 0 && (
          <section aria-labelledby="more-picks" className="w-full mt-12 md:mt-16">
            <div className="max-w-[1600px] mx-auto px-4 lg:px-8 mb-4 md:mb-6">
              <h2 id="more-picks" className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                Baaki picks bhi dekho
              </h2>
              <p className="mt-1 text-sm md:text-base text-gray-600">Doosri categories ki kuch aur cheezein.</p>
            </div>
            <ProductGrid products={morePicks} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}