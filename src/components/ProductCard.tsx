import React from 'react';
import { Star, Download, RefreshCcw, ArrowUpRight } from 'lucide-react';
import { Product } from '@/src/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass group rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full hover:border-primary transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isBestSeller && <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] font-bold uppercase tracking-wider">Best Seller</Badge>}
          {product.isTrending && <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] font-bold uppercase tracking-wider">Trending</Badge>}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
           <Button className="w-full bg-white text-black hover:bg-white/90 rounded-lg font-bold gap-2">
             View Details <ArrowUpRight className="w-4 h-4" />
           </Button>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors line-clamp-1 uppercase tracking-tight">{product.title}</h3>
          <span className="text-xl font-bold text-primary">${product.price}</span>
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mb-6 font-light">{product.description}</p>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[9px] px-2 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 uppercase font-bold tracking-tighter">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span>{product.rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>{product.sales} Sales</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
