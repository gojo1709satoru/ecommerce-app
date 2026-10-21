import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductSection from "@/components/home/ProductSection";
import NavyCollectionBanner from "@/components/home/NavyCollectionBanner";
import Testimonials from "@/components/home/Testimonials";
import StoreLocation from "@/components/home/StoreLocation";
import FaqSection from "@/components/home/FaqSection";
import {
  getBestSellers,
  getNewArrivals,
  getByCategory,
  products,
} from "@/data/products";

export default function HomePage() {
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();

  return (
    <>
      <HeroBanner />
      <CategoryGrid />

      <ProductSection
        id="products"
        eyebrow="Top Picks"
        title="Best Sellers"
        subtitle="Our most-loved products, chosen again and again by students, teachers, and offices."
        products={bestSellers.length ? bestSellers : products.slice(0, 4)}
      />

      <ProductSection
        eyebrow="Just In"
        title="New Arrivals"
        subtitle="Fresh stock added regularly — be the first to grab the latest additions."
        products={newArrivals.length ? newArrivals : products.slice(4, 8)}
        tone="muted"
      />

      <NavyCollectionBanner />

      <ProductSection
        eyebrow="Back to School"
        title="School Essentials"
        subtitle="Everything on your child's school supply list, in one convenient place."
        products={getByCategory("School Supplies").length ? getByCategory("School Supplies") : products.slice(0, 4)}
      />

      <ProductSection
        eyebrow="Work Ready"
        title="Office Essentials"
        subtitle="Files, folders, tapes, and everyday office supplies for a productive workplace."
        products={getByCategory("Office Supplies").length ? getByCategory("Office Supplies") : products.slice(4, 8)}
        tone="muted"
      />

      <ProductSection
        eyebrow="Get Creative"
        title="Art & Craft"
        subtitle="Colours, clay, decoration items, and craft essentials for artists of every age."
        products={getByCategory("Art & Craft").length ? getByCategory("Art & Craft") : products.slice(0, 4)}
      />

      <ProductSection
        eyebrow="Play On"
        title="Sports & Games"
        subtitle="Balls, boards, and gear to keep the game going, indoors and out."
        products={getByCategory("Sports & Games").length ? getByCategory("Sports & Games") : products.slice(4, 8)}
        tone="muted"
      />

      <ProductSection
        eyebrow="Thoughtful Picks"
        title="Gift Corner"
        subtitle="Curated gift items and wrapping essentials for every celebration."
        products={getByCategory("Gift Corner").length ? getByCategory("Gift Corner") : products.slice(0, 4)}
      />

      <Testimonials />
      <StoreLocation />
      <FaqSection />
    </>
  );
}
