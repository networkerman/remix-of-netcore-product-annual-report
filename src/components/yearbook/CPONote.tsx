import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

export function CPONote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="cpo-note"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract Portrait Placeholder */}
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,180,180,0.3),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(239,130,100,0.2),transparent_60%)]" />
              
              {/* Placeholder for CPO Photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-cream-200/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-cream-200/60 text-sm font-medium">[CPO Photo]</p>
                </div>
              </div>
            </div>

            {/* Quote Decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-coral-400 rounded-2xl flex items-center justify-center">
              <Quote className="w-10 h-10 text-coral-50" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="caption text-primary mb-4 block">Newsletter from the CPO</span>
            
            <h2 className="section-heading text-foreground mb-8">
              "This year tested us. And we delivered."
            </h2>

            <div className="space-y-6 text-foreground/70 body-large">
              <p>
                <strong className="text-foreground">The Year in Review:</strong> 2024 was a year of transformation. 
                We shipped more features than ever, tackled technical debt that had haunted us for years, 
                and built foundations that will serve us for the decade ahead.
              </p>

              <p>
                <strong className="text-foreground">The Challenges:</strong> Let's be honest—it wasn't smooth. 
                We faced resource constraints, shifting priorities, and the eternal tension between speed and quality. 
                Some bets didn't pay off. That's the reality of building products.
              </p>

              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6"
                >
                  <p>
                    <strong className="text-foreground">Why We Made These Decisions:</strong> Every major pivot 
                    came from listening—to customers, to data, to each other. The decision to double down on 
                    Analytics wasn't easy. The choice to rebuild the WhatsApp editor was costly. But looking back, 
                    these were the right calls.
                  </p>

                  <p>
                    <strong className="text-foreground">What I'm Proud Of:</strong> The team. Full stop. 
                    The way you've grown, the way you've supported each other, the way you've pushed back 
                    when needed and stepped up when it mattered. That's not something you can ship—it's something you build.
                  </p>

                  <p className="text-foreground font-medium italic border-l-4 border-primary pl-6">
                    "To everyone who stayed late, who questioned assumptions, who cared enough to argue—thank you. 
                    This yearbook is yours."
                  </p>

                  <p className="text-right text-foreground font-semibold">
                    — [CPO Name], Chief Product Officer
                  </p>
                </motion.div>
              )}

              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                {expanded ? (
                  <>
                    Read less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Continue reading <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
