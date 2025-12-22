import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Photo {
  id: string;
  image: string;
  caption: string;
  tag: string;
}

interface FlipbookViewerProps {
  photos: Photo[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function FlipbookViewer({ photos, initialIndex, isOpen, onClose }: FlipbookViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    if (currentIndex < photos.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      rotateY: direction > 0 ? -15 : 15,
      opacity: 0,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      rotateY: direction < 0 ? -15 : 15,
      opacity: 0,
    }),
  };

  if (!isOpen) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop with paper texture */}
      <div 
        className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: "overlay",
        }}
      />
      
      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-10 p-3 bg-cream-100/10 hover:bg-cream-100/20 rounded-full transition-colors"
      >
        <X className="w-6 h-6 text-cream-100" />
      </button>

      {/* Page indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 font-handwritten text-xl text-cream-300/80">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Flipbook container */}
      <div 
        className="relative w-full max-w-3xl mx-4 perspective-1000"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              rotateY: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="relative"
          >
            {/* Album page */}
            <div 
              className="bg-cream-100 rounded-lg shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
              }}
            >
              {/* Photo with Polaroid styling */}
              <div className="p-6 md:p-10">
                <div className="bg-white p-4 pb-16 shadow-lg mx-auto max-w-lg transform rotate-[-1deg]">
                  <img 
                    src={currentPhoto.image} 
                    alt={currentPhoto.caption}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <p className="absolute bottom-6 left-0 right-0 text-center font-handwritten text-2xl text-navy-700">
                    {currentPhoto.caption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPrev(); }}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-3 rounded-full transition-all ${
            currentIndex === 0 
              ? "opacity-30 cursor-not-allowed" 
              : "bg-cream-100/20 hover:bg-cream-100/30 text-cream-100"
          }`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          disabled={currentIndex === photos.length - 1}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-3 rounded-full transition-all ${
            currentIndex === photos.length - 1 
              ? "opacity-30 cursor-not-allowed" 
              : "bg-cream-100/20 hover:bg-cream-100/30 text-cream-100"
          }`}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </motion.div>
  );
}
