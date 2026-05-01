import './globals.css';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import CartPanel from '@/components/CartPanel';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'No Rules | Defy the Standard',
  description: 'Egyptian Cyberpunk Streetwear',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <CartProvider>
          {children}
          <CartPanel />
        </CartProvider>
      </body>
    </html>
  );
}
