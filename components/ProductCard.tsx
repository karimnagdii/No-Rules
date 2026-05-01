'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    console.log('Add to cart clicked:', product.name);
    addToCart(product);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-zinc-900 border border-zinc-800 p-4 transition-all hover:border-neon hover:neon-glow"
    >
      <div className="aspect-[3/4] bg-black mb-4 overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-bold text-white">{product.name}</h3>
      <p className="text-neon font-mono uppercase text-sm">{product.category}</p>
      <p className="text-white font-bold mt-1">EGP {product.price}</p>
      <button 
        onClick={handleAdd}
        className="w-full mt-4 py-2 border border-zinc-700 text-white font-bold tracking-widest group-hover:border-neon group-hover:bg-neon group-hover:text-black transition-all uppercase text-sm"
      >
        ADD TO CART
      </button>
    </motion.div>
  );
}
