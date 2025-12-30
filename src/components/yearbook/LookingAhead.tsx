import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Telescope } from "lucide-react";

export function LookingAhead() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="looking-ahead"
      ref={ref}
      className="py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-cream-100 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Floating Blob Animations */}
      <motion.div
        animate={{
          x: [0, 250, -200, 280, -150, 200, 0],
          y: [0, -200, 180, -120, 250, -180, 0],
          scale: [1, 1.06, 0.94, 1.05, 0.97, 1.03, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-500/25 via-cyan-400/10 to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -200, 180, -250, 150, -180, 0],
          y: [0, 200, -150, 180, -200, 150, 0],
          scale: [1, 0.95, 1.04, 0.96, 1.05, 0.98, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-coral-400/20 via-coral-300/5 to-transparent blur-3xl pointer-events-none"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Telescope className="text-teal-400" size={32} />
          </div>
          <span className="caption text-teal-400 mb-4 block">A Glimpse of Tomorrow</span>
          <h2 className="section-heading text-cream-100 mb-6">Looking Ahead to 2026</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            The future is autonomous: systems that marketers can trust, delegate to, and scale with—without increasing human effort.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-16 max-w-2xl mx-auto relative px-12"
        >
          {/* Opening Quote Mark */}
          <span className="absolute top-0 left-0 text-7xl text-teal-500/30 font-serif leading-none select-none">"</span>
          
          <p className="text-xl md:text-2xl text-cream-100/80 italic leading-relaxed">
            Strategy evolves. What you see here reflects our current thinking—expect surprises, 
            pivots, and discoveries along the way. That's what makes this work exciting.
          </p>
          
          {/* Closing Quote Mark */}
          <span className="absolute bottom-4 right-0 text-7xl text-teal-500/30 font-serif leading-none select-none">"</span>
          
        </motion.div>
      </div>
    </section>
  );
}
