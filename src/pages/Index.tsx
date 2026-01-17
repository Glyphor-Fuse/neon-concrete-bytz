import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { SpaceGallery } from '../components/SpaceGallery';
import { Footer } from '../components/Footer';
import { Menu as MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-white"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="text-2xl font-bold tracking-tighter">KBRG.</a>
        
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#" className="hover:opacity-50 transition-opacity">Beans</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Menu</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Space</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Visit</a>
        </div>

        <button className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
};

export default function Index() {
  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      
      <Hero />

      {/* Philosophy / Intro - Inline for simplicity */}
      <section className="py-24 md:py-32 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
              UNCOMPROMISING<br/>QUALITY SINCE<br/>FOREVER.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed"
          >
            <p>
              We believe in the raw potential of the bean. No syrups, no gimmicks. Just heat, time, and precision.
            </p>
            <p>
              Located in the industrial heart of Berlin, our space reflects our philosophy: stripped back, essential, and brutally honest.
            </p>
            <div className="pt-4">
              <a href="#" className="inline-block border-b border-white text-white pb-1 font-mono text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">
                Read our manifesto
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <MenuSection />
      
      <SpaceGallery />

      <Footer />
    </main>
  );
}