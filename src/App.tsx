import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductGrid } from './components/ProductGrid';
import { Showcase } from './components/Showcase';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const trendingProducts = PRODUCTS.filter(p => p.isTrending || p.isBestSeller);

  return (
    <div className="min-h-screen selection:bg-primary/30 relative">
      <div className="atmosphere" />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <CategorySection />
        
        <ProductGrid 
          title="Featured Creations" 
          subtitle="Our most powerful software solutions, hand-picked for quality."
          products={featuredProducts} 
        />
        
        <Showcase />
        
        <ProductGrid 
          title="Trending Now" 
          subtitle="Discover what's powering the next generation of digital platforms."
          products={trendingProducts} 
        />

        <Stats />

        <div className="max-w-7xl mx-auto px-6 mt-32 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
              Why Engineers Choose <span className="text-primary italic">Code Scripts</span>
            </h2>
            <p className="text-muted-foreground font-light">The standard in production-ready software architecture.</p>
          </div>
          <Features />
        </div>

        <FAQ />
        
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
