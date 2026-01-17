import { motion } from 'framer-motion';

export const SpaceGallery = () => {
  return (
    <section className="py-32 bg-zinc-900 text-zinc-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">THE SPACE</h2>
          </div>
          <div className="max-w-xs text-right">
            <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest border-l border-zinc-700 pl-4">
              Concrete / Steel / Greenery<br/>
              No WiFi on Weekends<br/>
              Analog Only
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[120vh] md:h-[80vh]">
          {/* Large Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-zinc-800"
          >
            <img 
              src="https://images.pexels.com/photos/17607975/pexels-photo-17607975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Interior Main"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest">Main Hall</span>
            </div>
          </motion.div>

          {/* Tall Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden bg-zinc-800"
          >
            <img 
              src="https://images.pexels.com/photos/5689498/pexels-photo-5689498.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Pouring"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
          </motion.div>

          {/* Wide Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group overflow-hidden bg-zinc-800"
          >
            <img 
              src="https://images.pexels.com/photos/30669009/pexels-photo-30669009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Roaster"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};