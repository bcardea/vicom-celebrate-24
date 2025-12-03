import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PlayCircle, MessageSquare } from 'lucide-react';
import { VideoModal } from './VideoModal';

export const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToMessage = () => {
    const messageSection = document.getElementById('leadership-message');
    messageSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10"
      >
        {/* Logo with staggered animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block mb-12"
        >
          <img
            src="https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/674dc599e481a8899e907632.png"
            alt="VIcom Logo"
            className="h-28 md:h-36 mx-auto drop-shadow-2xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6"
          >
            <Sparkles className="w-10 h-10" style={{ color: 'var(--color-gold)' }} />
          </motion.div>
        </motion.div>

        {/* Main heading with dramatic reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight py-2"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(135deg, var(--color-cream) 0%, var(--color-gold-light) 50%, var(--color-cream) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 30px rgba(212, 175, 55, 0.3)',
          }}
        >
          Celebrating 2025
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-1 mx-auto mb-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-cream)',
            fontWeight: 500,
            letterSpacing: '0.02em'
          }}
        >
          A year of innovation, dedication, and transformative solutions at VIcom
        </motion.p>

        {/* CTA Buttons with staggered entrance */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, boxShadow: 'var(--glow-gold)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsVideoModalOpen(true)}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full shadow-xl transition-all duration-300 w-full md:w-auto overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--color-forest-dark)',
            }}
          >
            <PlayCircle className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">A message from our President</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, borderColor: 'var(--color-gold)' }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToMessage}
            className="group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 w-full md:w-auto backdrop-blur-md"
            style={{
              border: '2px solid var(--color-gold)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--color-cream)',
              background: 'rgba(10, 61, 44, 0.3)',
            }}
          >
            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Read Employee-Owner's Message</span>
          </motion.button>
        </div>
      </motion.div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6759c94fda8c391f9840e593.mp4"
      />
    </div>
  );
};