import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, MonitorSmartphone } from 'lucide-react';

const WEBSITE_URL = 'https://www.vicom-corp.com';

export const WebsiteRefreshFeature: React.FC = () => {
  const openWebsite = () => {
    window.open(WEBSITE_URL, '_blank', 'noopener,noreferrer');
  };

  const highlights = [
    'A modern design that showcases our solutions and services',
    'Streamlined navigation to help you find what you need faster',
    'Fresh resources and success stories from the past year',
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.16), rgba(184, 115, 51, 0.08))',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(212,175,55,0.18),transparent_30%)]" />

        <div className="relative p-10 md:p-12 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-1 space-y-4 text-white">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
                New this year
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                We launched a refreshed VIcom website
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Explore our new digital experience, crafted to make it easier to discover our services, success stories,
                and the people behind them.
              </p>
            </div>

            <ul className="space-y-2 text-white/80">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <Sparkles className="w-4 h-4 text-amber-200" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={openWebsite}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg text-forest-900"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 20px 50px rgba(212, 175, 55, 0.35)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View the refreshed site</span>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.div
            className="w-full md:w-[320px] lg:w-[360px] shrink-0"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-transparent to-amber-500/20" />
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <MonitorSmartphone className="w-24 h-24 text-white/80" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-sm text-white/90">
                <p className="font-semibold tracking-wide">Built for this year and beyond</p>
                <p className="text-white/70">
                  Discover a cleaner, faster way to explore our capabilities—and see how we’re celebrating growth in 2024.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
