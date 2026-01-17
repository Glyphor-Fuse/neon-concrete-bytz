import { MapPin, Clock, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">VISIT</h3>
            <div className="flex gap-3 text-zinc-400">
              <MapPin className="w-5 h-5 shrink-0" />
              <address className="not-italic leading-relaxed">
                Oranienstraße 189<br />
                10999 Berlin<br />
                Kreuzberg
              </address>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">HOURS</h3>
            <div className="flex gap-3 text-zinc-400">
              <Clock className="w-5 h-5 shrink-0" />
              <ul className="space-y-1">
                <li className="flex justify-between w-32"><span>Mon-Fri</span> <span>08-18</span></li>
                <li className="flex justify-between w-32"><span>Sat-Sun</span> <span>09-17</span></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">CONTACT</h3>
            <div className="space-y-3 text-zinc-400">
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" /> @kreuzberg.roast
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5" /> hello@kbrg.coffee
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">NEWSLETTER</h3>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="email@address.com" 
                className="bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-zinc-600 transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-zinc-50 text-zinc-950 px-4 py-3 text-sm font-bold tracking-wide uppercase hover:bg-zinc-200 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono uppercase tracking-widest">
          <span>© 2024 Kreuzberg Roastery.</span>
          <span>Berlin Industrial Minimalist.</span>
        </div>
      </div>
    </footer>
  );
};