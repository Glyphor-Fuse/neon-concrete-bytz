import { motion } from 'framer-motion';

const MenuCategory = ({ title, items }: { title: string, items: { name: string, price: string, desc?: string }[] }) => (
  <div className="mb-16">
    <h3 className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase mb-8 border-b border-zinc-800 pb-2">
      {title}
    </h3>
    <ul className="space-y-6">
      {items.map((item, idx) => (
        <motion.li 
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group flex flex-col"
        >
          <div className="flex justify-between items-baseline w-full">
            <span className="text-2xl font-medium tracking-tight group-hover:text-zinc-400 transition-colors">{item.name}</span>
            <div className="flex-grow mx-4 border-b border-zinc-800 border-dashed relative top-[-6px] opacity-30" />
            <span className="font-mono text-zinc-400">{item.price}</span>
          </div>
          {item.desc && <span className="text-sm text-zinc-600 mt-1 font-mono">{item.desc}</span>}
        </motion.li>
      ))}
    </ul>
  </div>
);

export const MenuSection = () => {
  return (
    <section className="py-32 bg-zinc-950 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">THE MENU</h2>
          <p className="text-zinc-400 max-w-lg leading-relaxed">
            Curated daily. Our beans are sourced directly from farmers we know by name, roasted in small batches on a vintage Probat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-24">
          <div>
            <MenuCategory 
              title="Black"
              items={[
                { name: "Espresso", price: "3.00", desc: "Double shot. The standard." },
                { name: "Long Black", price: "3.50", desc: "Hot water, double espresso." },
                { name: "Batch Brew", price: "4.00", desc: "Rotating single origin." },
                { name: "V60 Pour Over", price: "6.50", desc: "Hand poured. Allow 10 mins." },
                { name: "Cold Brew", price: "5.00", desc: "Steeped 24h. Tokyo style." },
              ]}
            />
          </div>
          <div>
            <MenuCategory 
              title="White"
              items={[
                { name: "Cortado", price: "3.80", desc: "1:1 ratio. Glass." },
                { name: "Flat White", price: "4.20", desc: "Thin foam. 6oz." },
                { name: "Cappuccino", price: "4.20", desc: "Thick foam. Chocolate dust." },
                { name: "Oat Flat", price: "4.80", desc: "Oatly Barista Edition." },
              ]}
            />
            <MenuCategory 
              title="Not Coffee"
              items={[
                { name: "Matcha Latte", price: "5.50", desc: "Ceremonial grade. Kyoto." },
                { name: "Cascara Soda", price: "4.50", desc: "Coffee cherry tea, sparkling." },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};