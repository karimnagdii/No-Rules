import './globals.css';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import CartPanel from '@/components/CartPanel';
import MenuPanel from '@/components/MenuPanel';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'No Rules | Defy the Standard',
  description: 'Egyptian Cyberpunk Streetwear',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log('RootLayout Rendered');
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <CartProvider>
          <Navbar />
          {children}
          <CartPanel />
          <MenuPanel />
        </CartProvider>
      </body>
    </html>
  );
}
