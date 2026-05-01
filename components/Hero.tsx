'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-8xl md:text-[12rem] font-black tracking-tighter text-center leading-none text-white uppercase"
      >
        DEFY THE <br /> <span className="text-neon">STANDARD</span>
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 border border-neon text-neon font-bold tracking-widest hover:bg-neon hover:text-black transition-all neon-glow uppercase"
      >
        SHOP THE DROP
      </motion.button>
    </section>
  );
}
