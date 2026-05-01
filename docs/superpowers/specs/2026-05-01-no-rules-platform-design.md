# Design Spec: "No Rules" E-commerce Platform

## 1. Overview
"No Rules" is an Egyptian clothing brand specializing in rebellious yet refined streetwear. The platform is designed to be a high-impact, futuristic e-commerce experience that defies standard retail conventions.

## 2. Goals & Success Criteria
- **Brand Impact:** Establish a "rebellious yet refined" aesthetic through a deep black and neon green palette.
- **Interactive Experience:** Use a "Cyber-Grid" layout that feels alive and responsive to user interaction.
- **Functionality:** Provide a seamless browsing and shopping experience, including a functional cart simulation.

## 3. Architecture & Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (for "pop-up" effects and interactive states)
- **Icons:** Lucide React
- **State Management:** React `useState` and `useEffect` for the cart simulation.
- **Backend:** Next.js API Routes (`/api/products`) with mock product data.

## 4. Visual Design
- **Color Palette:**
  - Background: Deep True Black (#000000)
  - Accents/CTA: Neon/Emerald Green (#10b981)
  - Typography: Crisp White/Light Gray
- **Typography:** Sans-serif, modern (Inter or Space Grotesk).
- **Interactive Elements:**
  - Cyber-Grid: Product cards with neon glow effects and scaling on hover.
  - Navigation: Minimalist sticky navbar with sleek hover effects.

## 5. Components & Features
- **Hero Section:** Bold landing with brand tagline "Defy the Standard" and futuristic pulse animations.
- **Cyber-Grid Product Display:**
  - 4-6 initial items fetched from `/api/products`.
  - Categories: T-shirts, Jeans, Hoodies, Pants, Caps, Accessories.
  - Framer Motion "scroll-in" animations.
- **Shopping Cart:**
  - Slide-out panel for cart management.
  - Add/Remove items functionality.
  - Checkout simulation (summary view).
- **Image Strategy:** Detailed AI prompts for high-fashion Egyptian cyberpunk streetwear photography.

## 6. Data Model (Mock API)
`GET /api/products` returns:
```json
[
  {
    "id": "1",
    "name": "Phantom Oversized Tee",
    "category": "T-shirts",
    "price": 850,
    "image": "/images/phantom-tee.jpg",
    "description": "Heavyweight cotton with cyber-glyph embroidery."
  },
  ...
]
```
