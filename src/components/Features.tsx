import React from 'react';
import { Shield, Zap, Code, Headphones, Globe, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: Code,
    title: 'Precision Engineered',
    desc: 'Every line of code is written by senior engineers with performance and scalability in mind.'
  },
  {
    icon: Shield,
    title: 'Commercial Grade Security',
    desc: 'Enterprise-level security audits on all authentication and data processing modules.'
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    desc: 'Optimized for Core Web Vitals to ensure your application feels snappy and modern.'
  },
  {
    icon: Headphones,
    title: 'Elite Technical Support',
    desc: 'Expert support from the developers who actually wrote the code.'
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    desc: 'Built with internationalization and globally distributed traffic in mind.'
  },
  {
    icon: Clock,
    title: 'Instant Download',
    desc: 'Get your full source code immediately after purchase, with all documentation.'
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feat, idx) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 rounded-[2.5rem] glass glass-hover relative group transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-12 -translate-y-12 transition-transform group-hover:scale-150 duration-700" />
            
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <feat.icon className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight">{feat.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
