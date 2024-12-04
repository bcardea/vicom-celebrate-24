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
      transition={{ duration: 0.8 }}
      className="relative max-w-4xl mx-auto scroll-mt-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md rounded-3xl transform -skew-y-1" />
      <div className="relative p-8 md:p-12">
        <div className="flex items-center justify-center mb-8">
          <Stars className="text-yellow-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            A Message from our Employee-Owners
          </h2>
        </div>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            As the year comes to an end, we're filled with genuine gratitude for the trust you've placed in VIcom. Being an employee-owned company means every solution we deliver, every relationship we build, and every success we share carries deep personal meaning for our entire team of employee-owners.
          </p>
          <p className="text-lg leading-relaxed">
            Throughout this year, we've had the privilege of helping so many organizations thrive while continuing to grow our own community of employee-owners. We exist to help our customers and employees flourish and we’re proud of what was accomplished in 2024!
          </p>
          <p className="text-lg leading-relaxed">
            Looking ahead to 2025, we're energized by the possibilities to innovate, serve, and exceed expectations. Your success continues to be the driving force behind everything we do at VIcom. So from all of us here - thank you for choosing VIcom as your technology partner. May your holiday season be filled with joy, and may the New Year bring continued growth and achievement!
          </p>
        </div>
        
        <div className="mt-8 text-right">
          <p className="font-semibold text-gray-800"></p>
        </div>
      </div>
    </motion.div>
  );
};