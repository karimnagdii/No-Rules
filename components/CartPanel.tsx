'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPanel() {
  const { items, removeFromCart, isOpen, setIsOpen, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-neon/30 z-50 shadow-[0_0_50px_rgba(0,255,255,0.1)] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-neon/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-neon" size={24} />
                <h2 className="text-2xl font-black uppercase italic tracking-tighter">Inventory</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-neon/10 text-zinc-400 hover:text-neon transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500 uppercase tracking-widest text-sm space-y-4">
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center opacity-50">
                    <ShoppingBag size={24} />
                  </div>
                  <p>Cart is Empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-24 bg-zinc-900 border border-zinc-800 relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold uppercase tracking-tight text-sm mb-1">{item.name}</h3>
                        <p className="text-neon text-xs font-mono tracking-widest uppercase">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-mono tracking-tighter text-zinc-400">
                          {item.quantity} X EGP {item.price}
                        </p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-600 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-neon/20 bg-zinc-900/50">
                <div className="flex justify-between items-end mb-6">
                  <p className="text-zinc-400 uppercase text-xs tracking-widest">Subtotal</p>
                  <p className="text-3xl font-black italic tracking-tighter text-neon">EGP {total.toFixed(2)}</p>
                </div>
                <button className="w-full py-4 bg-neon text-black font-black uppercase tracking-widest hover:bg-white transition-colors relative overflow-hidden group">
                  <span className="relative z-10 italic">Checkout_System</span>
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
