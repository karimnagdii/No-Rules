'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const menuItems = [
  { name: 'T-Shirts', slug: 't-shirts', count: '12' },
  { name: 'Jeans', slug: 'jeans', count: '08' },
  { name: 'Hoodies', slug: 'hoodies', count: '15' },
  { name: 'Pants', slug: 'pants', count: '06' },
  { name: 'Caps', slug: 'caps', count: '04' },
  { name: 'Accessories', slug: 'accessories', count: '22' },
];

export default function MenuPanel() {
  const { isMenuOpen, setIsMenuOpen } = useCart();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[110]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-full max-w-sm bg-black border-r border-neon/30 z-[120] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-xl font-black italic text-neon">NAVIGATION</div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-neon transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col space-y-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={`/category/${item.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-baseline group text-left cursor-pointer"
                  >
                    <span className="text-zinc-600 text-sm font-mono mr-4">0{index + 1}</span>
                    <span className="text-4xl font-black uppercase tracking-tighter group-hover:text-neon transition-colors text-white">
                      {item.name}
                    </span>
                    <span className="ml-auto text-neon opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">
                      [{item.count} items]
                    </span>
                  </motion.div>
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-zinc-900 pt-8 space-y-4">
              <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">Follow the rebellion</p>
              <div className="flex gap-6 text-sm font-bold uppercase italic hover:text-neon transition-colors cursor-pointer">
                Instagram / TikTok / Twitter
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
