import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQS = [
  {
    q: "How do I receive updates for my purchased products?",
    a: "All updates are provided free of charge for existence of the product. You will receive an automated email notification and can download the latest version from your account dashboard instantly."
  },
  {
    q: "What programming languages are used?",
    a: "We primarily build with modern full-stack technologies including Next.js, React, Node.js, TypeScript, Go, and Python. Each product page specifies the exact tech stack used."
  },
  {
    q: "Is technical support included with my purchase?",
    a: "Yes! Every single-vendor purchase includes 6 months of dedicated technical support. You can extend this support anytime through your dashboard."
  },
  {
    q: "Can I use these scripts for client projects?",
    a: "Absolutely. Our Regular License allows for one end-product, while our Extended License is perfect for SaaS platforms where users are charged for access."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
          Frequently <span className="text-primary italic">Asked Questions</span>
        </h2>
        <p className="text-muted-foreground font-light">Everything you need to know about our premium products and licenses.</p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQS.map((faq, idx) => (
          <AccordionItem 
            key={idx} 
            value={`item-${idx}`} 
            className="glass px-6 rounded-2xl border-white/5"
          >
            <AccordionTrigger className="text-left text-white font-bold hover:no-underline py-6">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-light pb-6 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
