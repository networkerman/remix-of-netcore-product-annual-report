import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

export function ThankYou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="thank-you"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Floating Blob Animations */}
      <motion.div
        animate={{
          x: [0, 250, -200, 280, -150, 200, 0],
          y: [0, -200, 180, -120, 250, -180, 0],
          scale: [1, 1.06, 0.94, 1.05, 0.97, 1.03, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-teal-300/20 via-transparent to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -200, 180, -250, 150, -180, 0],
          y: [0, 200, -150, 180, -200, 150, 0],
          scale: [1, 0.95, 1.04, 0.96, 1.05, 0.98, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-coral-300/15 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-coral-500">
              <Heart className="text-white" size={36} />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground"
          >
            Thank You,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-400 to-coral-500">
              Netcorians
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-foreground/70 leading-relaxed mb-12"
          >
            To everyone who shipped, designed, documented, debated, and cared enough 
            to make 2025 remarkable—this yearbook is for you. Every feature, every fix, 
            every late night and early morning has led us here.
          </motion.p>

          {/* Call to Reflect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <p className="text-foreground/60 italic mb-8">
              "Take a moment to reflect on your journey this year. What are you most proud of?"
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-20 pt-8 border-t border-border"
          >
            <p className="text-foreground/50 text-sm">
              Made with ❤️ by the Product Team
            </p>
            <p className="text-foreground/40 text-xs mt-2">
              Netcore Product Yearbook 2025 • Internal Use Only
            </p>
          </motion.div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-coral-400/20" />
    </section>
  );
}
