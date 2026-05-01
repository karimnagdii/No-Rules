// components/ProductGrid.tsx
'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/products')
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
  }, []);

  if (loading) return <div className="text-center py-24 text-neon animate-pulse uppercase tracking-widest">Initialising Grid...</div>;
  if (error) return <div className="text-center py-24 text-red-500 uppercase tracking-widest border border-red-500 m-6">SYSTEM ERROR: UNABLE TO FETCH DATA</div>;

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase italic border-l-4 border-neon pl-4">Latest Drop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
