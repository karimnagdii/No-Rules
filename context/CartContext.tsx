'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';

export type CartItem = Product & { quantity: number };

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log('Cart isOpen status:', isOpen);
  }, [isOpen]);

  useEffect(() => {
    console.log('Menu isMenuOpen status:', isMenuOpen);
  }, [isMenuOpen]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse cart items', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (items.length > 0 || localStorage.getItem('cartItems')) {
      localStorage.setItem('cartItems', JSON.stringify(items));
    }
  }, [items]);

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      isOpen, 
      setIsOpen, 
      isMenuOpen, 
      setIsMenuOpen, 
      total 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
