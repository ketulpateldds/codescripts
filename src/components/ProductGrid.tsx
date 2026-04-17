import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/src/types';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export const ProductGrid = ({ title, subtitle, products }: ProductGridProps) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-muted-foreground text-lg font-light">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2 group cursor-pointer text-primary font-bold uppercase tracking-widest text-xs">
          Explore All Products
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
