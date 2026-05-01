'use client';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md">
      <div className="text-2xl font-bold tracking-tighter text-neon">NO RULES</div>
      <div className="flex gap-8 items-center text-white">
        <button className="hover:text-neon transition-colors"><ShoppingCart size={24} /></button>
        <button className="hover:text-neon transition-colors"><Menu size={24} /></button>
      </div>
    </nav>
  );
}
