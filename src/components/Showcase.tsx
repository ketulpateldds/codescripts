import { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Layout, Database, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const SCRIPT_FEATURES = [
  {
    id: 'dashboard',
    label: 'Modern Dashboards',
    icon: Layout,
    title: 'Analytics at your fingertips',
    description: 'Every script comes with a professionally designed admin panel to manage your business with zero technical hurdles.',
    image: 'https://picsum.photos/seed/dash/1200/800',
    points: ['Real-time statistics', 'User management', 'Revenue tracking', 'Custom settings']
  },
  {
    id: 'backend',
    label: 'Scalable Backend',
    icon: Database,
    title: 'Engineered for scalability',
    description: 'Robust server architecture using Node.js or Go to ensure your platform runs smoothly even with millions of active users.',
    image: 'https://picsum.photos/seed/server/1200/800',
    points: ['High performance', 'API first design', 'Database optimization', 'Secure authentication']
  },
  {
    id: 'mobile',
    label: 'Native Mobile',
    icon: Smartphone,
    title: 'Cross-platform ready',
    description: 'Native experience for iOS and Android built with React Native, integrated perfectly with your web platform.',
    image: 'https://picsum.photos/seed/mobile/1200/800',
    points: ['Push notifications', 'Offline support', 'Camera integration', 'App store ready']
  }
];

export const Showcase = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="py-32 overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight">
            High Precision <span className="text-primary italic">Architecture</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            We don't just sell code. We provide complete ecosystems built with the latest industry standards.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 p-1.5 flex gap-1.5 border border-white/10 rounded-2xl relative overflow-hidden">
              {SCRIPT_FEATURES.map((feat) => {
                const isActive = activeTab === feat.id;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveTab(feat.id)}
                    className={cn(
                      "relative px-6 md:px-8 py-3 rounded-xl transition-all duration-300 font-bold gap-2.5 flex items-center z-10 cursor-pointer outline-none",
                      isActive
                        ? "text-white"
                        : "text-muted-foreground hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-black rounded-xl -z-10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          mass: 1,
                        }}
                      />
                    )}
                    <feat.icon
                      className={cn(
                        "w-4 h-4 transition-all duration-300",
                        isActive
                          ? "scale-110 text-primary"
                          : "opacity-70 group-hover:opacity-100",
                      )}
                    />
                    <span className="hidden sm:inline tracking-tight">
                      {feat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-16">
            <AnimatePresence mode="wait">
              {SCRIPT_FEATURES.map((feat) => 
                feat.id === activeTab && (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                  >
                    <div className="order-2 lg:order-1">
                      <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                        {feat.title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-10 font-light leading-relaxed">
                        {feat.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {feat.points.map((point) => (
                          <div key={point} className="flex items-center gap-3 text-white/90">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                            <span className="font-medium">{point}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        size="lg"
                        className="rounded-full px-10 bg-white text-black hover:bg-white/90 font-bold h-14 group transition-all duration-300 hover:scale-105"
                      >
                        Explore This Feature
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="inline-block ml-2"
                        >
                          →
                        </motion.span>
                      </Button>
                    </div>

                    <div className="order-1 lg:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
                        <div className="relative rounded-[2.5rem] overflow-hidden glass border-white/10 shadow-2xl">
                          <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6 }}
                            src={feat.image}
                            alt={feat.title}
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
