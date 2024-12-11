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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <div className="relative inline-block">
          <img
            src="https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/674dc599e481a8899e907632.png"
            alt="VIcom Logo"
            className="h-24 md:h-32 mx-auto mb-8 drop-shadow-xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -top-4 -right-4"
          >
            <Sparkles className="text-yellow-400 w-8 h-8" />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent drop-shadow-sm leading-relaxed py-2">
          Celebrating 2024
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          A year of innovation, dedication, and transformative solutions at VIcom
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoModalOpen(true)}
            className="group flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
          >
            <PlayCircle className="w-5 h-5 group-hover:animate-pulse" />
            <span>A message from our President</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToMessage}
            className="group flex items-center gap-2 bg-transparent border-2 border-white/80 hover:border-white text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto backdrop-blur-sm hover:bg-white/10"
          >
            <MessageSquare className="w-5 h-5 group-hover:animate-pulse" />
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