import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.pexels.com/photos/19288833/pexels-photo-19288833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="Espresso Machine"
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block border border-zinc-500/50 px-3 py-1 text-xs font-mono tracking-widest text-zinc-300 uppercase backdrop-blur-sm">
              Est. 2024 — Berlin
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.85] mix-blend-difference"
          >
            ROAST.<br/>
            GRIND.<br/>
            REPEAT.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-md text-zinc-300 text-lg leading-relaxed font-light"
          >
            We don't do pumpkin spice. We do distinct, ethically sourced, single-origin roasts in the heart of Kreuzberg.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase rotate-90 origin-right translate-x-2">Scroll</span>
        <div className="h-16 w-[1px] bg-zinc-700 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 w-full h-1/2 bg-white" 
          />
        </div>
      </motion.div>
    </section>
  );
};