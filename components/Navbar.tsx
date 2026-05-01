'use client';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { setIsOpen, items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md">
      <div className="text-2xl font-bold tracking-tighter text-neon">NO RULES</div>
      <div className="flex gap-8 items-center text-white">
        <button 
          onClick={() => setIsOpen(true)}
          className="hover:text-neon transition-colors relative"
        >
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-neon text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
        <button className="hover:text-neon transition-colors"><Menu size={24} /></button>
      </div>
    </nav>
  );
}
