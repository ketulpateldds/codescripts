import React from 'react';
import { motion } from 'motion/react';

const STATS = [
  { label: 'Total Products', value: '1,250+', color: 'text-primary' },
  { label: 'Happy Developers', value: '45,800+', color: 'text-indigo-400' },
  { label: 'Active Downloads', value: '1.2M+', color: 'text-purple-400' },
  { label: 'Avg. Support Time', value: '< 12h', color: 'text-emerald-400' },
];

export const Stats = () => {
  return (
    <section className="py-20 my-24 border-y border-white/10 bg-white/[0.02] backdrop-blur-3xl relative z-10 box-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-xl md:text-2xl font-heading font-extrabold text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold leading-none mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
          <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-8 ml-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">Trusted Platforms:</span>
            <div className="flex gap-4 opacity-40">
              <div className="w-20 h-4 bg-white/10 rounded" />
              <div className="w-16 h-4 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
