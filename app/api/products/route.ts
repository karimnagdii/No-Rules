// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@/types/product';

const products: Product[] = [
  // T-Shirts (12 items)
  { id: 't1', name: 'Phantom Oversized Tee', category: 'T-Shirts', price: 850, image: '/images/t1.jpg', description: 'Heavyweight cotton with cyber-glyph embroidery.' },
  { id: 't2', name: 'Neon Glitch Tee', category: 'T-Shirts', price: 750, image: '/images/t2.jpg', description: 'Distorted logo print in high-vis emerald.' },
  { id: 't3', name: 'Cyber-Pharaoh Tee', category: 'T-Shirts', price: 950, image: '/images/t3.jpg', description: 'Ancient symbols meets futuristic typography.' },
  { id: 't4', name: 'Void Static Tee', category: 'T-Shirts', price: 800, image: '/images/t4.jpg', description: 'Minimalist black-on-black textured print.' },
  { id: 't5', name: 'Rebel Signal Tee', category: 'T-Shirts', price: 850, image: '/images/t5.jpg', description: 'Back-print featuring the No Rules manifesto.' },
  { id: 't6', name: 'Emerald Cipher Tee', category: 'T-Shirts', price: 900, image: '/images/t6.jpg', description: 'Reflective green ink on premium jersey.' },
  { id: 't7', name: 'Onyx Box Tee', category: 'T-Shirts', price: 700, image: '/images/t7.jpg', description: 'Structured heavy cotton in a boxy cut.' },
  { id: 't8', name: 'Data Stream Tee', category: 'T-Shirts', price: 820, image: '/images/t8.jpg', description: 'Vertical neon accents on the side seams.' },
  { id: 't9', name: 'Guerilla Script Tee', category: 'T-Shirts', price: 780, image: '/images/t9.jpg', description: 'Hand-drawn brand script in puff print.' },
  { id: 't10', name: 'Zero Logic Tee', category: 'T-Shirts', price: 850, image: '/images/t10.jpg', description: 'Front-pocket detail with neon stitching.' },
  { id: 't11', name: 'Vector Arch Tee', category: 'T-Shirts', price: 920, image: '/images/t11.jpg', description: 'Large architectural print on the reverse.' },
  { id: 't12', name: 'Neon Horizon Tee', category: 'T-Shirts', price: 880, image: '/images/t12.jpg', description: 'Split-tone emerald and black paneling.' },

  // Jeans (8 items)
  { id: 'j1', name: 'Midnight Slouchy Jeans', category: 'Jeans', price: 2100, image: '/images/j1.jpg', description: 'Faded black denim with a relaxed futuristic cut.' },
  { id: 'j2', name: 'Cyber-Rip Denim', category: 'Jeans', price: 2400, image: '/images/j2.jpg', description: 'Distressed jeans with neon under-layers.' },
  { id: 'j3', name: 'Onyx Tapered Denim', category: 'Jeans', price: 1950, image: '/images/j3.jpg', description: 'Slim fit with articulated knee panels.' },
  { id: 'j4', name: 'Neon Selvedge Jeans', category: 'Jeans', price: 2800, image: '/images/j4.jpg', description: 'Raw denim with emerald green inner seams.' },
  { id: 'j5', name: 'Guerilla Cargo Jeans', category: 'Jeans', price: 2300, image: '/images/j5.jpg', description: 'Hybrid denim-cargo with multiple utility pockets.' },
  { id: 'j6', name: 'Void Wash Denim', category: 'Jeans', price: 2150, image: '/images/j6.jpg', description: 'Heavy stone-wash in deep grey/black.' },
  { id: 'j7', name: 'Emerald Stitch Jeans', category: 'Jeans', price: 2000, image: '/images/j7.jpg', description: 'Subtle neon green top-stitching throughout.' },
  { id: 'j8', name: 'Tactical Flare Denim', category: 'Jeans', price: 2600, image: '/images/j8.jpg', description: 'Adjustable leg opening with tech zippers.' },

  // Hoodies (15 items)
  { id: 'h1', name: 'Neon Rebel Hoodie', category: 'Hoodies', price: 1450, image: '/images/h1.jpg', description: 'Neon green detailing with tactical straps.' },
  { id: 'h2', name: 'Phantom Cloak Hoodie', category: 'Hoodies', price: 1600, image: '/images/h2.jpg', description: 'Extra large hood with face-mask integration.' },
  { id: 'h3', name: 'Static Pulse Hoodie', category: 'Hoodies', price: 1350, image: '/images/h3.jpg', description: 'Brushed fleece with holographic print.' },
  { id: 'h4', name: 'Onyx Tech Hoodie', category: 'Hoodies', price: 1800, image: '/images/h4.jpg', description: 'Water-repellent fabric for urban exploration.' },
  { id: 'h5', name: 'Emerald Core Hoodie', category: 'Hoodies', price: 1500, image: '/images/h5.jpg', description: 'Minimalist chest logo in high-density print.' },
  { id: 'h6', name: 'Zero Rule Hoodie', category: 'Hoodies', price: 1400, image: '/images/h6.jpg', description: 'Heavyweight loopback cotton construction.' },
  { id: 'h7', name: 'Cyber-Glyph Hoodie', category: 'Hoodies', price: 1550, image: '/images/h7.jpg', description: 'Sleeve embroidery with ancient cyber-glyphs.' },
  { id: 'h8', name: 'Vector Flux Hoodie', category: 'Hoodies', price: 1650, image: '/images/h8.jpg', description: 'Geometric paneling in tonal black and grey.' },
  { id: 'h9', name: 'Neon Drift Hoodie', category: 'Hoodies', price: 1420, image: '/images/h9.jpg', description: 'Reflective drawstrings and logo.' },
  { id: 'h10', name: 'Void Archive Hoodie', category: 'Hoodies', price: 1700, image: '/images/h10.jpg', description: 'Signature high-neck tech collar design.' },
  { id: 'h11', name: 'Guerilla Zip Hoodie', category: 'Hoodies', price: 1580, image: '/images/h11.jpg', description: 'Full-zip with tactical chest webbing.' },
  { id: 'h12', name: 'Emerald Peak Hoodie', category: 'Hoodies', price: 1490, image: '/images/h12.jpg', description: 'Contrast emerald lining inside the hood.' },
  { id: 'h13', name: 'Static Shield Hoodie', category: 'Hoodies', price: 1620, image: '/images/h13.jpg', description: 'Windproof outer shell with fleece lining.' },
  { id: 'h14', name: 'Rebel Flow Hoodie', category: 'Hoodies', price: 1380, image: '/images/h14.jpg', description: 'Distressed hem for a worn-in aesthetic.' },
  { id: 'h15', name: 'Alpha Cyber Hoodie', category: 'Hoodies', price: 1850, image: '/images/h15.jpg', description: 'Limited edition heavy tech-fleece.' },

  // Pants (6 items)
  { id: 'p1', name: 'Onyx Cargo Pants', category: 'Pants', price: 1850, image: '/images/p1.jpg', description: 'Water-resistant fabric with neon accent stitching.' },
  { id: 'p2', name: 'Cyber-Jogger V1', category: 'Pants', price: 1600, image: '/images/p2.jpg', description: 'Tapered fit with reflective calf panels.' },
  { id: 'p3', name: 'Emerald Tech Trousers', category: 'Pants', price: 2200, image: '/images/p3.jpg', description: 'Futuristic tailoring with magnetic buckles.' },
  { id: 'p4', name: 'Void Utility Pants', category: 'Pants', price: 1950, image: '/images/p4.jpg', description: '10-pocket system for maximum storage.' },
  { id: 'p5', name: 'Neon Grid Track-pants', category: 'Pants', price: 1500, image: '/images/p5.jpg', description: 'Lightweight nylon with neon side piping.' },
  { id: 'p6', name: 'Guerilla Tactical Pants', category: 'Pants', price: 2400, image: '/images/p6.jpg', description: 'Reinforced panels and adjustable fit.' },

  // Caps (4 items)
  { id: 'c1', name: 'Cyber-Glyph Cap', category: 'Caps', price: 450, image: '/images/c1.jpg', description: 'Distressed denim with glow-in-the-dark embroidery.' },
  { id: 'c2', name: 'Neon Logo Beanie', category: 'Caps', price: 350, image: '/images/c2.jpg', description: 'Classic knit in deep black with neon green logo.' },
  { id: 'c3', name: 'Onyx Stealth Cap', category: 'Caps', price: 500, image: '/images/c3.jpg', description: 'Water-repellent tech fabric with minimal branding.' },
  { id: 'c4', name: 'Emerald Vector Snapback', category: 'Caps', price: 550, image: '/images/c4.jpg', description: 'Structured fit with large neon vector graphic.' },

  // Accessories (22 items)
  { id: 'a1', name: 'Emerald Tech Jacket', category: 'Accessories', price: 3200, image: '/images/a1.jpg', description: 'Lightweight shell with iridescent emerald finish.' },
  { id: 'a2', name: 'Neon Webbing Belt', category: 'Accessories', price: 350, image: '/images/a2.jpg', description: 'Industrial-strength nylon with tactical buckle.' },
  { id: 'a3', name: 'Cyber-Chest Rig', category: 'Accessories', price: 950, image: '/images/a3.jpg', description: 'Functional streetwear vest with multiple compartments.' },
  { id: 'a4', name: 'Emerald Lens Visor', category: 'Accessories', price: 1200, image: '/images/a4.jpg', description: 'Futuristic eyewear with high-vis emerald tint.' },
  { id: 'a5', name: 'Onyx Utility Mask', category: 'Accessories', price: 400, image: '/images/a5.jpg', description: 'Breathable tech-mask for urban environments.' },
  { id: 'a6', name: 'Void Tech Backpack', category: 'Accessories', price: 2400, image: '/images/a6.jpg', description: 'Modular storage system with laptop protection.' },
  { id: 'a7', name: 'Neon Glyph Scarf', category: 'Accessories', price: 500, image: '/images/a7.jpg', description: 'Oversized knit with ancient Egyptian cyber-glyphs.' },
  { id: 'a8', name: 'Emerald Carabiner Set', category: 'Accessories', price: 250, image: '/images/a8.jpg', description: 'Set of 3 tactical clips in signature neon.' },
  { id: 'a9', name: 'Cyber-Gloves V1', category: 'Accessories', price: 650, image: '/images/a9.jpg', description: 'Touch-screen compatible with reinforced knuckles.' },
  { id: 'a10', name: 'Neon Signal Socks', category: 'Accessories', price: 180, image: '/images/a10.jpg', description: 'Premium cotton with neon branding on the heel.' },
  { id: 'a11', name: 'Void Duffle Bag', category: 'Accessories', price: 2100, image: '/images/a11.jpg', description: 'Heavy-duty bag for long-range missions.' },
  { id: 'a12', name: 'Emerald Keychain Lanyard', category: 'Accessories', price: 220, image: '/images/a12.jpg', description: 'Long lanyard with high-vis branding.' },
  { id: 'a13', name: 'Onyx Tech Wallet', category: 'Accessories', price: 550, image: '/images/a13.jpg', description: 'RFID blocking with minimalist cyber design.' },
  { id: 'a14', name: 'Neon Glyph Phone Case', category: 'Accessories', price: 300, image: '/images/a14.jpg', description: 'Impact-resistant shell with neon graphics.' },
  { id: 'a15', name: 'Cyber-Pharaoh Necklace', category: 'Accessories', price: 850, image: '/images/a15.jpg', description: 'Laser-cut steel pendant on a heavy chain.' },
  { id: 'a16', name: 'Emerald Grid Tote', category: 'Accessories', price: 450, image: '/images/a16.jpg', description: 'Durable canvas with neon grid print.' },
  { id: 'a17', name: 'Void Archive Ring', category: 'Accessories', price: 600, image: '/images/a17.jpg', description: 'Matte black steel with neon emerald inlay.' },
  { id: 'a18', name: 'Guerilla Face Paint', category: 'Accessories', price: 250, image: '/images/a18.jpg', description: 'Neon green cosmetic for high-impact looks.' },
  { id: 'a19', name: 'Neon Signal Umbrella', category: 'Accessories', price: 800, image: '/images/a19.jpg', description: 'Reflective canopy with glowing neon handle.' },
  { id: 'a20', name: 'Cyber-Egyptian Cap', category: 'Accessories', price: 550, image: '/images/a2.jpg', description: 'Additional headwear for full tactical kits.' },
  { id: 'a21', name: 'Emerald Tech Pins', category: 'Accessories', price: 150, image: '/images/a21.jpg', description: 'Set of enamel pins featuring brand icons.' },
  { id: 'a22', name: 'Void Patch Set', category: 'Accessories', price: 280, image: '/images/a22.jpg', description: 'Velcro-backed patches for custom gear.' },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let filteredProducts = products;
    if (category) {
      filteredProducts = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    return NextResponse.json(filteredProducts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
