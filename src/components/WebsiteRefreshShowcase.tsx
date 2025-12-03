import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw } from 'lucide-react';

export const WebsiteRefreshShowcase: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/15 text-white/80 mb-6">
        <RefreshCw className="w-5 h-5" />
        <span className="tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
          New for 2025
        </span>
      </div>

      <h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Our Website Got An Upgrade!
      </h2>

      <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
        This year, we refreshed our website to better showcase how we make "Communication, Simplified". We've introduced
        new interactive tools, customer stories and more! Take a look and let us know what you think!
      </p>

      <motion.a
        href="https://www.vicom-corp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          color: 'var(--color-forest-dark)',
        }}
        whileHover={{ scale: 1.05, boxShadow: 'var(--glow-gold)' }}
        whileTap={{ scale: 0.98 }}
      >
        <ExternalLink className="w-6 h-6" />
        <span>Visit the refreshed site</span>
      </motion.a>
    </div>
  );
};
