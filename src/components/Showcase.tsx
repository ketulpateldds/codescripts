import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Layout, Database, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

        <Tabs defaultValue="dashboard" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/5 p-1 h-auto border border-white/10 rounded-2xl">
              {SCRIPT_FEATURES.map((feat) => (
                <TabsTrigger 
                  key={feat.id} 
                  value={feat.id}
                  className="px-8 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl transition-all font-bold gap-2"
                >
                  <feat.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{feat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {SCRIPT_FEATURES.map((feat) => (
            <TabsContent key={feat.id} value={feat.id} className="focus-visible:outline-none focus-visible:ring-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-tight">{feat.title}</h3>
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

                  <Button size="lg" className="rounded-full px-10 bg-white text-black hover:bg-white/90 font-bold h-14">
                    Explore This Feature
                  </Button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors" />
                    <div className="relative rounded-[2.5rem] overflow-hidden glass border-white/10 shadow-2xl">
                      <img 
                        src={feat.image} 
                        alt={feat.title} 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
