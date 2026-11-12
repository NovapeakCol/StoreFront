import { CartProvider } from "@/context/cart-provider";
import { SiteNavbar } from "@/components/site/site-navbar";
import { CartDrawer } from "@/components/site/cart-drawer";
import { HeroSection } from "@/components/site/hero-section";
import { MarqueeStrip } from "@/components/site/marquee-strip";
import { ProductGrid } from "@/components/site/product-grid";
import { PerformanceBand } from "@/components/site/performance-band";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { NewsletterSection } from "@/components/site/newsletter-section";
import { SiteFooter } from "@/components/site/site-footer";

const Index = () => {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteNavbar />
        <main className="flex-1">
          <HeroSection />
          <MarqueeStrip />
          <ProductGrid />
          <PerformanceBand />
          <TestimonialsSection />
          <NewsletterSection />
        </main>
        <SiteFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
