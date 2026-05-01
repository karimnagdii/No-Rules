# "No Rules" Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-impact, futuristic e-commerce prototype for "No Rules" using Next.js, Tailwind CSS, and Framer Motion.

**Architecture:** Next.js App Router for both frontend and mock API. State managed via React context/hooks for the cart. Interactive Cyber-Grid for product display.

**Tech Stack:** Next.js 14+, Tailwind CSS, Framer Motion, Lucide React.

---

### Task 1: Project Initialization

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: Create `package.json` with dependencies**
```json
{
  "name": "no-rules-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest",
    "lucide-react": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "autoprefixer": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest"
  }
}
```

- [ ] **Step 2: Initialize Tailwind and Globals**
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
  --accent: 161 72% 39%; /* #10b981 */
}

body {
  background-color: black;
  color: white;
  overflow-x: hidden;
}

@layer utilities {
  .neon-glow {
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
  }
  .text-neon {
    color: #10b981;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
  }
}
```

- [ ] **Step 3: Setup Basic Layout**
```tsx
// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'No Rules | Defy the Standard',
  description: 'Egyptian Cyberpunk Streetwear',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Commit Initialization**
```bash
git add .
git commit -m "chore: initialize next.js project with tailwind and framer motion"
```

---

### Task 2: Mock API & Types

**Files:**
- Create: `types/product.ts`
- Create: `app/api/products/route.ts`

- [ ] **Step 1: Define Product Type**
```tsx
// types/product.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}
```

- [ ] **Step 2: Implement Mock API Route**
```tsx
// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { Product } from '@/types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Phantom Oversized Tee',
    category: 'T-shirts',
    price: 850,
    image: '/images/phantom-tee.jpg',
    description: 'Heavyweight cotton with cyber-glyph embroidery.'
  },
  {
    id: '2',
    name: 'Neon Rebel Hoodie',
    category: 'Hoodies',
    price: 1450,
    image: '/images/rebel-hoodie.jpg',
    description: 'Neon green detailing with tactical straps.'
  },
  // Add 4 more items to fulfill the 4-6 items requirement
];

export async function GET() {
  return NextResponse.json(products);
}
```

- [ ] **Step 3: Test API**
Run: `curl http://localhost:3000/api/products` (assuming server started)
Expected: JSON array of products.

- [ ] **Step 4: Commit API**
```bash
git add types/product.ts app/api/products/route.ts
git commit -m "feat: add mock products API"
```

---

### Task 3: Core UI Components (Navbar & Hero)

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Minimalist Navbar**
```tsx
// components/Navbar.tsx
'use client';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md">
      <div className="text-2xl font-bold tracking-tighter text-neon">NO RULES</div>
      <div className="flex gap-8 items-center">
        <button className="hover:text-neon transition-colors"><ShoppingCart size={24} /></button>
        <button className="hover:text-neon transition-colors"><Menu size={24} /></button>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Create Hero Section**
```tsx
// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-8xl md:text-[12rem] font-black tracking-tighter text-center leading-none"
      >
        DEFY THE <br /> <span className="text-neon">STANDARD</span>
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 border border-neon text-neon font-bold tracking-widest hover:bg-neon hover:text-black transition-all neon-glow"
      >
        SHOP THE DROP
      </motion.button>
    </section>
  );
}
```

- [ ] **Step 3: Update Main Page**
```tsx
// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Product Grid will go here */}
    </main>
  );
}
```

- [ ] **Step 4: Commit UI**
```bash
git add components/ app/page.tsx
git commit -m "feat: add navbar and hero sections"
```

---

### Task 4: Interactive Cyber-Grid

**Files:**
- Create: `components/ProductCard.tsx`
- Create: `components/ProductGrid.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Product Card with Neon Effects**
```tsx
// components/ProductCard.tsx
'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-zinc-900 border border-zinc-800 p-4 transition-all hover:border-neon hover:neon-glow"
    >
      <div className="aspect-[3/4] bg-black mb-4 overflow-hidden relative">
        {/* IMAGE GENERATION PROMPT:
            A high-fashion streetwear shot of a model wearing a {product.name} in an 
            Egyptian cyberpunk alleyway. Neon green lights reflecting off dark surfaces. 
            Cinematic lighting, 8k resolution, minimalist but rebellious aesthetic. */}
        <div className="w-full h-full bg-zinc-800 flex items-center justify-center italic text-zinc-500 text-sm">
          [Image Placeholder: {product.name}]
        </div>
      </div>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-neon font-mono">EGP {product.price}</p>
      <button className="w-full mt-4 py-2 border border-zinc-700 group-hover:border-neon group-hover:bg-neon group-hover:text-black transition-all">
        ADD TO CART
      </button>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create Product Grid with Fetching**
```tsx
// components/ProductGrid.tsx
'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <section className="px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
```

- [ ] **Step 3: Commit Grid**
```bash
git add components/ProductCard.tsx components/ProductGrid.tsx
git commit -m "feat: implement interactive cyber-grid"
```

---

### Task 5: Shopping Cart Simulation

**Files:**
- Create: `context/CartContext.tsx`
- Create: `components/CartPanel.tsx`
- Modify: `app/layout.tsx`, `components/Navbar.tsx`

- [ ] **Step 1: Create Cart Context**
```tsx
// context/CartContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';
import { Product } from '@/types/product';

type CartItem = Product & { quantity: number };

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
```

- [ ] **Step 2: Wrap Layout with Provider**
- [ ] **Step 3: Implement Cart Panel UI**
- [ ] **Step 4: Connect Navbar Cart Icon**
- [ ] **Step 5: Commit Cart**
```bash
git add context/ components/CartPanel.tsx
git commit -m "feat: implement cart simulation"
```
