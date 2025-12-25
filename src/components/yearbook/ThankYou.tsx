import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, PartyPopper, Sparkles } from "lucide-react";

export function ThankYou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [celebrated, setCelebrated] = useState(false);

  return (
    <section
      id="thank-you"
      ref={ref}
      className="py-32 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 text-cream-100 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-teal-500/10 via-transparent to-transparent blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-coral-400/10 via-transparent to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-coral-400">
              <Heart className="text-cream-50" size={36} />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Thank You,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-coral-400">
              Netcorians
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-cream-300/80 leading-relaxed mb-12"
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
            <p className="text-cream-400 italic mb-8">
              "Take a moment to reflect on your journey this year. What are you most proud of?"
            </p>
          </motion.div>

          {/* Celebration Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1 }}
            onClick={() => setCelebrated(true)}
            disabled={celebrated}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 ${
              celebrated
                ? "bg-gradient-to-r from-teal-500 to-coral-400 text-cream-50 scale-110"
                : "bg-cream-100 text-navy-800 hover:scale-105"
            }`}
          >
            {celebrated ? (
              <>
                <PartyPopper size={24} />
                You Made It! 🎉
              </>
            ) : (
              <>
                <Sparkles size={24} />
                Celebrate Completing the Yearbook
              </>
            )}
          </motion.button>

          {/* Celebration Message */}
          {celebrated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 rounded-2xl bg-teal-500/20 border border-teal-500/30"
            >
              <p className="text-teal-300 font-medium">
                🎊 Congratulations on exploring the entire 2025 Product Yearbook! 
                Here's to an even better 2026.
              </p>
            </motion.div>
          )}

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-20 pt-8 border-t border-cream-100/10"
          >
            <p className="text-cream-500 text-sm">
              Made with ❤️ by the Product Team
            </p>
            <p className="text-cream-600 text-xs mt-2">
              Netcore Product Yearbook 2025 • Internal Use Only
            </p>
          </motion.div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-teal-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-coral-400/20" />
    </section>
  );
}
