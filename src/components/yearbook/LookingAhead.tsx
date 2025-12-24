import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Telescope, Lock, Sparkles } from "lucide-react";

const themes = [
  {
    title: "Autonomous by Design",
    description: "AI evolves from recommending actions to autonomously executing decisions, enabling marketers to operate at machine speed with confidence.",
    icon: "🤖",
  },
  {
    title: "Multi-Agent Intelligence",
    description: "A coordinated system of agents—Segment, Decision, and more—working together to deliver true 1:1 hyper-personalised experiences at scale.",
    icon: "🧠",
  },
  {
    title: "Netcore × Unbxd Synergy",
    description: "Deeper platform integration to drive measurable impact across the full commerce funnel, from discovery to conversion.",
    icon: "🔗",
  },
  {
    title: "Agentic Commerce",
    description: "Shopping and Merchandising Agents autonomously optimise discovery and merchandising, redefining how customers find and engage with products.",
    icon: "🛍️",
  },
  {
    title: "Design 3.0",
    description: "An AI-first UI/UX that reduces complexity, embeds intelligence by default, and elevates marketer outcomes without added effort.",
    icon: "✨",
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
            The future is autonomous: systems that marketers can trust, delegate to, and scale with—without increasing human effort.
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

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-foreground/50 mt-12 max-w-xl mx-auto"
        >
          Strategy evolves. What you see here reflects our current thinking—expect surprises, 
          pivots, and discoveries along the way. That's what makes this work exciting.
        </motion.p>
      </div>
    </section>
  );
}
