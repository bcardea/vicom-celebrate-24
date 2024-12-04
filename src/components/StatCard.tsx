import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  delay: number;
  suffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, delay, suffix = '' }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleReveal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isRevealed && cardRef.current) {
      setIsRevealed(true);
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x, y },
        colors: ['#ff0000', '#00ff00', '#ffffff'],
        disableForReducedMotion: true,
        useWorker: true,
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onClick={handleReveal}
      className="relative group cursor-pointer"
    >
      <div
        ref={cardRef}
        className="relative overflow-hidden bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
      >
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-red-500/20 to-green-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
        
        <div className="relative">
          <div className="text-3xl text-red-600/90 mb-4">{icon}</div>
          <h3 className="text-xl font-medium text-gray-800 mb-4">{title}</h3>
          
          <AnimatePresence>
            {isRevealed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-4xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent"
              >
                {value.toLocaleString()}{suffix}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl font-medium text-gray-400 flex items-center justify-center space-x-2"
              >
                <span>Click to Reveal</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};