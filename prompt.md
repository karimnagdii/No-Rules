Act as a Senior Full-Stack Developer and UI/UX Designer. Your task is to generate the complete frontend and backend code for an e-commerce platform for an Egyptian clothing brand called "No Rules".

**Architecture & Tech Stack:**
*   **Framework:** Next.js (App Router). This will handle both the React frontend and the backend API routes.
*   **Frontend Styling:** Tailwind CSS.
*   **Animations:** Framer Motion.
*   **Icons:** Lucide React.
*   **Backend Data:** Next.js API Routes (e.g., `/api/products`). Implement secure, well-structured endpoints. Create a mock array of product data to serve from the API.

**Design System & Aesthetic:**
*   **Vibe:** Simple, elegant, subtly futuristic, rebellious yet refined.
*   **Color Palette:** Deep true black (#000000) background. Neon/Emerald green for accents, call-to-action buttons, and hover states. Crisp white or light gray for typography.
*   **Typography:** Sans-serif, clean, modern (e.g., Inter or Space Grotesk).

**Frontend Core Components:**
1.  **Interactive Navigation:** Sticky, minimalist navbar. Links need a sleek green underline or glow effect on hover.
2.  **Hero Section:** Bold landing area featuring the "No Rules" brand name, the tagline "Defy the Standard", and a call-to-action button with a fluid hover or futuristic pulse animation.
3.  **Product Grid:** Fetch data from your backend API route. Display 4 to 6 clothing items. Use Framer Motion so items smoothly "pop up" or fade in from the bottom on scroll. Cards should elegantly scale up with a soft green shadow on hover.

**Image Asset Handling:**
*   Do NOT use standard Unsplash or stock image URLs.
*   Instead, for every image `src` placeholder in the frontend, write a detailed 2-3 sentence **Image Generation Prompt** inside a multi-line comment directly above it. These prompts must describe custom, high-fashion streetwear photography fitting the "No Rules" Egyptian cyberpunk/elegant aesthetic so I can generate them separately.

**Code Output Rules:**
*   Provide the code organized by file path (e.g., `app/page.tsx`, `app/api/products/route.ts`, `components/Navbar.tsx`).
*   Ensure the backend API includes basic error handling and returns standard JSON responses.
*   Code must be fully responsive (mobile-first).
*   Output the raw, complete code without leaving lazy comments like "Add more logic here".
