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
  {
    id: '3',
    name: 'Onyx Cargo Pants',
    category: 'Pants',
    price: 1850,
    image: '/images/cargo-pants.jpg',
    description: 'Water-resistant fabric with neon accent stitching.'
  },
  {
    id: '4',
    name: 'Cyber-Glyph Cap',
    category: 'Caps',
    price: 450,
    image: '/images/cyber-cap.jpg',
    description: 'Distressed denim with glow-in-the-dark embroidery.'
  },
  {
    id: '5',
    name: 'Emerald Tech Jacket',
    category: 'Accessories',
    price: 3200,
    image: '/images/tech-jacket.jpg',
    description: 'Lightweight shell with iridescent emerald finish.'
  },
  {
    id: '6',
    name: 'Midnight Slouchy Jeans',
    category: 'Jeans',
    price: 2100,
    image: '/images/slouchy-jeans.jpg',
    description: 'Faded black denim with a relaxed futuristic cut.'
  }
];

export async function GET() {
  try {
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
