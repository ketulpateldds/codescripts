import React from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-heading font-extrabold tracking-tighter text-white uppercase italic">
            Code Scripts<span className="text-primary">.</span>
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-glow transition-colors" />
          <Input 
            placeholder="Search 1,200+ scripts..." 
            className="pl-10 bg-white/5 border-white/10 text-sm focus-visible:ring-primary focus-visible:border-primary transition-all rounded-lg h-10 w-full"
          />
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Categories</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
        </div>

        {/* Auth & CTA */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-white hover:bg-white/5">Login</Button>
            <Button className="rounded-lg px-6 font-bold bg-white text-black hover:bg-white/90">
              Get Started
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="relative group text-white hover:bg-white/5">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[10px] flex items-center justify-center font-bold text-white">0</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
