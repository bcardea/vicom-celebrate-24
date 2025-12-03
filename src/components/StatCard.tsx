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

      // More sophisticated confetti with gold and cream colors
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { x, y },
        colors: ['#D4AF37', '#E8C96F', '#F5F1E8', '#B8941F', '#0F5C42'],
        disableForReducedMotion: true,
        useWorker: true,
        ticks: 300,
        gravity: 0.8,
        scalar: 1.2,
      });

      // Second burst for extra delight
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x, y },
          colors: ['#D4AF37', '#F5F1E8'],
          disableForReducedMotion: true,
          useWorker: true,
          startVelocity: 25,
        });
      }, 150);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: 20 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={handleReveal}
      className="relative group cursor-pointer perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        className="relative h-full min-h-[320px] overflow-hidden glass-effect p-8 rounded-3xl shadow-2xl hover:shadow-[0_20px_80px_rgba(212,175,55,0.3)] transition-all duration-500 border-2 flex flex-col"
        style={{
          borderColor: isRevealed ? 'var(--color-gold)' : 'rgba(212, 175, 55, 0.2)',
          transform: isRevealed ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        {/* Animated background glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15), transparent 70%)',
          }}
        />

        {/* Shimmer effect on hover */}
        {!isRevealed && (
          <div className="absolute inset-0 group-hover:shimmer" />
        )}

        {/* Corner accent */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl transition-all duration-700 opacity-20 group-hover:opacity-40"
          style={{
            background: 'radial-gradient(circle, var(--color-gold), var(--color-copper))',
            transform: isRevealed ? 'scale(1.5)' : 'scale(1)',
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className="text-4xl mb-6"
            style={{ color: 'var(--color-forest)' }}
            animate={isRevealed ? {
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            } : {}}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3
            className="text-xl md:text-2xl mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--color-slate)',
            }}
          >
            {title}
          </h3>

          {/* Value reveal */}
          <AnimatePresence mode="wait">
            {isRevealed ? (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl md:text-6xl font-bold"
                style={{
                  fontFamily: 'var(--font-display)',
                  background: 'linear-gradient(135deg, var(--color-gold-dark), var(--color-gold), var(--color-gold-light))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 10px rgba(212, 175, 55, 0.3))',
                }}
              >
                {value.toLocaleString()}{suffix}
              </motion.div>
            ) : (
              <motion.div
                key="unrevealed"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative"
              >
                {/* Mystery box effect */}
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="px-6 py-3 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--color-forest-dark)',
                      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    Click to Reveal
                  </motion.div>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ color: 'var(--color-gold)', fontSize: '1.5rem' }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Revealed state decorative elements */}
        {isRevealed && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-3 h-3 rounded-full"
              style={{ background: 'var(--color-gold)' }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute bottom-4 left-4 w-2 h-2 rounded-full"
              style={{ background: 'var(--color-gold-light)' }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};