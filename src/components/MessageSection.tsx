import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Stars } from 'lucide-react';

export const MessageSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      id="leadership-message"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-4xl mx-auto scroll-mt-8"
    >
      {/* Decorative background elements */}
      <div className="absolute -inset-4 opacity-50 blur-3xl" style={{
        background: 'radial-gradient(circle at top left, var(--color-gold), transparent 50%)',
      }} />

      <div className="relative glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-3xl" style={{ borderColor: 'var(--color-gold)' }} />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-3xl" style={{ borderColor: 'var(--color-gold)' }} />

        <div className="flex items-center justify-center mb-10">
          <Stars className="w-10 h-10 mr-4" style={{ color: 'var(--color-gold)' }} />
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              background: 'linear-gradient(135deg, var(--color-slate), var(--color-forest))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            A Message from our Employee-Owners
          </h2>
        </div>

        <div className="space-y-6" style={{ color: 'var(--color-slate)' }}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            As we close out another remarkable year, we want to express our heartfelt appreciation for your continued partnership with VIcom. As an employee-owned company, every project we complete and every relationship we nurture reflects the personal commitment of our entire team of employee-owners.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            2025 has been a year of meaningful growth, both in the innovative solutions we've delivered and in the expansion of our employee-ownership community. Our mission to help customers and employees flourish has never felt more purposeful, and we're grateful for the role you've played in making this year so impactful.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            As we look toward 2026, we're inspired by new opportunities to innovate, collaborate, and continue exceeding your expectations. Your success remains at the heart of everything we do at VIcom.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            From all of us, thank you for trusting VIcom as your technology partner. We wish you a joyful holiday season and a New Year filled with prosperity and achievement!
          </p>
        </div>

        {/* Decorative bottom accent */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-16 h-1 rounded-full" style={{ background: 'var(--color-gold)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-gold)' }} />
            <div className="w-16 h-1 rounded-full" style={{ background: 'var(--color-gold)' }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};