import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative group">
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-50 transition-opacity group-hover:opacity-70" />
      
      <div className="glass rounded-[3rem] p-12 md:p-24 text-center border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl glass border-white/10 flex items-center justify-center text-primary border-glow">
              <Rocket className="w-10 h-10 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tight">
            Ready to Accelerate <br />
            <span className="text-primary italic">Your Development?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
            Join thousands of professional developers building high-end applications with our premier code scripts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-12 bg-primary hover:bg-primary/90 text-white font-bold h-16 text-lg shadow-2xl shadow-primary/30">
              Browse All Products
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full px-12 text-white hover:bg-white/5 font-bold h-16 text-lg">
              Talk to Our Experts
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
