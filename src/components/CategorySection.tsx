import React from 'react';
import * as LucideIcons from 'lucide-react';
import { CATEGORIES } from '@/src/data';
import { motion } from 'motion/react';

export const CategorySection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, idx) => {
          const IconComponent = (LucideIcons as any)[cat.icon];
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass glass-hover p-8 rounded-3xl group cursor-pointer border border-white/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                {IconComponent && <IconComponent className="w-7 h-7" />}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.count} premium products</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
