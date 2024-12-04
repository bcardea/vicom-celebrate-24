import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Building2 } from 'lucide-react';

export const RichmondShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de216c55b50f98dc77bc.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21ac19b9c7a3b2d409.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21ac19b97b0fb2d408.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de212896f62da9551127.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21ac19b97119b2d40a.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21e74a49b1c8446e8a.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21846fe5ef4fc20de1.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de2125ee7ba5a999250b.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21cfbe5ef4b1c3df5f.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21846fe52144c20de0.png',
    'https://storage.googleapis.com/msgsndr/MHK41bAGOsh6YKmnFrp7/media/6750de21cfbe5effabc3df5e.png'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="mx-auto flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Building2 className="w-5 h-5" />
        <span>We opened a brand new facility in Richmond, VA. Click here to take a look!</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <div className="relative w-full max-w-6xl mx-auto">
              <motion.button
                className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>

              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`Richmond facility ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <motion.button
                  onClick={previousImage}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </motion.button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <motion.button
                  onClick={nextImage}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </motion.button>
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};