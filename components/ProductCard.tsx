// components/ProductCard.tsx
'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-zinc-900 border border-zinc-800 p-4 transition-all hover:border-neon hover:neon-glow"
    >
      <div className="aspect-[3/4] bg-black mb-4 overflow-hidden relative">
        {/* IMAGE GENERATION PROMPT:
            A high-fashion streetwear shot of a model wearing a {product.name} in an 
            Egyptian cyberpunk alleyway. Neon green lights reflecting off dark surfaces. 
            Cinematic lighting, 8k resolution, minimalist but rebellious aesthetic. */}
        <div className="w-full h-full bg-zinc-800 flex items-center justify-center italic text-zinc-500 text-sm text-center px-4">
          [Image Placeholder: {product.name}]
        </div>
      </div>
      <h3 className="text-lg font-bold text-white">{product.name}</h3>
      <p className="text-neon font-mono uppercase text-sm">{product.category}</p>
      <p className="text-white font-bold mt-1">EGP {product.price}</p>
      <button className="w-full mt-4 py-2 border border-zinc-700 text-white font-bold tracking-widest group-hover:border-neon group-hover:bg-neon group-hover:text-black transition-all uppercase text-sm">
        ADD TO CART
      </button>
    </motion.div>
  );
}
