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
            As the year comes to an end, we're filled with genuine gratitude for the trust you've placed in VIcom. Being an employee-owned company means every solution we deliver, every relationship we build, and every success we share carries deep personal meaning for our entire team of employee-owners.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Throughout this year, we've had the privilege of helping so many organizations thrive while continuing to grow our own community of employee-owners. We exist to help our customers and employees flourish and we're proud of what was accomplished in 2024!
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Looking ahead to 2025, we're energized by the possibilities to innovate, serve, and exceed expectations. Your success continues to be the driving force behind everything we do at VIcom. So from all of us here - thank you for choosing VIcom as your technology partner. May your holiday season be filled with joy, and may the New Year bring continued growth and achievement!
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