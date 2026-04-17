import React from 'react';
import { Search, ChevronRight, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Floating UI Elements Container */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-5 pointer-events-none hidden lg:block">
        <div className="relative w-full h-full">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-12%] top-[15%] w-64 h-32 glass rounded-3xl -rotate-12 opacity-60 border-white/20 shadow-primary/10 shadow-2xl"
          >
            <div className="p-6 space-y-4">
              <div className="w-1/2 h-2 bg-white/30 rounded-full" />
              <div className="w-full h-2 bg-white/10 rounded-full" />
              <div className="w-3/4 h-2 bg-white/10 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[-12%] top-[20%] w-72 h-48 glass rounded-[2.5rem] rotate-12 hidden xl:block opacity-60 border-white/20 shadow-indigo-500/10 shadow-2xl"
          >
            <div className="p-8 space-y-6">
              <div className="w-full h-24 bg-white/10 rounded-2xl" />
              <div className="w-1/2 h-2 bg-white/30 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 mb-8 mt-5">
            <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">Premium Software for Modern Teams</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-8 leading-[1.1] text-gradient">
            Modern Code for <br />
            <span className="text-glow">Modern Teams.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            The premium destination for first-party, high-performance software. Built with TypeScript, Tailwind, and luxury in mind.
          </p>

          {/* Hero Search Box */}
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="glass p-2 rounded-2xl border-white/10 shadow-2xl flex items-center">
              <div className="flex-1 flex items-center px-4 gap-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search 1,200+ scripts..." 
                  className="bg-transparent border-none outline-none w-full text-white text-lg placeholder:text-muted-foreground/60"
                />
              </div>
              <Button size="lg" className="rounded-xl px-8 bg-white text-black hover:bg-white/90 font-bold h-12">
                Browse
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-20 opacity-60">
            <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> Instant Deployment</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Code Review Verified</div>
            <div className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Lifetime Updates</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
