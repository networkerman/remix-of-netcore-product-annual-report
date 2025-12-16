import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Telescope, Lock, Sparkles } from "lucide-react";

const themes = [
  {
    title: "AI-Native Everything",
    description: "Moving from AI as a feature to AI as foundation. Every product touchpoint will be smarter.",
    icon: "🤖",
  },
  {
    title: "Platform Consolidation",
    description: "One platform, infinite possibilities. Breaking down walls between CE, CPaaS, and Unbxd.",
    icon: "🔗",
  },
  {
    title: "Developer Experience",
    description: "If developers don't love us, we've failed. 2025 is the year we become their favorite platform.",
    icon: "💻",
  },
  {
    title: "Global Scale",
    description: "New markets, new challenges, new opportunities. Taking Netcore everywhere.",
    icon: "🌍",
  },
];

export function LookingAhead() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="looking-ahead"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Telescope className="text-primary" size={32} />
          </div>
          <span className="caption text-primary mb-4 block">A Glimpse of Tomorrow</span>
          <h2 className="section-heading text-foreground mb-6">Looking Ahead to 2026</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            These aren't commitments—they're directions. Where we're pointing, 
            what we're excited about, and the bets we're making on the future.
          </p>
        </motion.div>

        {/* Confidential Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Lock size={16} />
            <span className="text-sm font-medium">Internal Preview • Subject to Change</span>
          </div>
        </motion.div>

        {/* Strategic Themes */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{theme.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{theme.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{theme.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Teaser Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            {/* Blurred/Abstract Visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800">
              <div className="absolute inset-0 backdrop-blur-md">
                {/* Abstract Shapes */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-teal-500/30 blur-2xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-coral-400/30 blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
              </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="mx-auto text-cream-200 mb-4" size={40} />
                <p className="text-cream-200 text-2xl font-bold mb-2">2026</p>
                <p className="text-cream-300/70">The best is yet to come</p>
              </div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center text-foreground/50 mt-12 max-w-xl mx-auto"
        >
          Strategy evolves. What you see here reflects our current thinking—expect surprises, 
          pivots, and discoveries along the way. That's what makes this work exciting.
        </motion.p>
      </div>
    </section>
  );
}
