'use client';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

import Link from 'next/link';

export default function Navbar() {
  const { setIsOpen, setIsMenuOpen, items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleCartClick = () => {
    console.log('Cart icon clicked');
    setIsOpen(true);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center bg-black/80 border-b border-zinc-900">
      <Link href="/" className="text-2xl font-bold tracking-tighter text-neon">
        NO RULES
      </Link>
      <div className="flex gap-8 items-center text-white">
        <button 
          onClick={handleCartClick}
          className="hover:text-neon transition-colors relative"
        >
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-neon text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
        <button 
          onClick={() => {
            console.log('Menu icon clicked');
            setIsMenuOpen(true);
          }}
          className="hover:text-neon transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
