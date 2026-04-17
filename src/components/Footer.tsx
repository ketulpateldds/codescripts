import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Twitter, Github, Linkedin, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <span className="text-white font-bold text-xl leading-none">C</span>
              </div>
              <span className="text-xl font-heading font-bold tracking-tight text-white">
                Code<span className="text-primary font-extrabold">Scripts</span>
              </span>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              We build premium scripts and complete SaaS ecosystems for elite developers and companies worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-muted-foreground hover:text-sky-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-muted-foreground hover:text-red-500 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Marketplace</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newest Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flash Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Categories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">License Details</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-6">Join 10,000+ developers for expert tips and deals.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg font-bold text-xs uppercase transition-colors">Sub</button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/5 mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2026 Code Scripts. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
