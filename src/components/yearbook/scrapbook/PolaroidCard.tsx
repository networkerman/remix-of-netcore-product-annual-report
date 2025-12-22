import { motion } from "framer-motion";

interface PolaroidCardProps {
  image: string;
  caption: string;
  rotation?: number;
  tapeColor?: string;
  onClick?: () => void;
}

const tapeColors = [
  "bg-pink-200/80",
  "bg-yellow-200/80",
  "bg-blue-200/80",
  "bg-green-200/80",
  "bg-purple-200/80",
];

export function PolaroidCard({ 
  image, 
  caption, 
  rotation = 0, 
  tapeColor,
  onClick 
}: PolaroidCardProps) {
  const randomTape = tapeColor || tapeColors[Math.floor(Math.random() * tapeColors.length)];
  
  return (
    <motion.div
      className="relative cursor-pointer group flex-shrink-0"
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        zIndex: 10,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      {/* Washi tape */}
      <div 
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 ${randomTape} rotate-[-2deg] z-10`}
        style={{ 
          clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
          opacity: 0.9 
        }}
      />
      
      {/* Polaroid frame */}
      <div className="bg-white p-3 pb-12 shadow-lg shadow-navy-900/20 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-navy-900/30">
        {/* Photo */}
        <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden bg-cream-200">
          <img 
            src={image} 
            alt={caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Caption */}
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <p className="font-handwritten text-lg text-navy-700 px-2 truncate">
            {caption}
          </p>
        </div>
      </div>
      
      {/* Hover CTA overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="bg-navy-800/80 text-cream-100 font-handwritten text-lg px-4 py-2 rounded-full">
          View Memory ✨
        </span>
      </div>
    </motion.div>
  );
}
