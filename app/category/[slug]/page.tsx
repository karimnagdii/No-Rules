'use client';
import { useEffect, useState, use } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Convert slug back to readable category name
  const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products?category=${encodeURIComponent(categoryName)}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <main className="bg-black min-h-screen pt-32 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-neon font-mono uppercase tracking-[0.3em] mb-4">Archive / {categoryName}</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic border-l-8 border-neon pl-6">
            {categoryName}
          </h1>
        </motion.div>

        {loading ? (
          <div className="text-center py-24 text-neon animate-pulse uppercase tracking-widest">
            Fetching {categoryName} Data...
          </div>
        ) : error ? (
          <div className="text-center py-24 text-red-500 uppercase tracking-widest border border-red-500">
            SYSTEM ERROR: UNABLE TO ACCESS DATABASE
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24 text-zinc-500 uppercase tracking-widest border border-zinc-800 italic">
            No items found in this sector.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
