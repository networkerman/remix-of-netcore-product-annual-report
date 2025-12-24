import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import kedarCpoPhoto from "@/assets/kedar-cpo-photo.png";

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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto"
            >
              {/* Left: Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* CPO Photo */}
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <img 
                    src={kedarCpoPhoto} 
                    alt="Kedar Parikh - Chief Product Officer" 
                    className="w-full h-full object-cover object-top"
                  />
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
                <span className="caption text-primary mb-4 block">A Note from the CPO</span>
                
                <h2 className="section-heading text-foreground mb-8">
                  "In 2025, AI at Netcore moved beyond analysis to actively drive decisions and outcomes for marketers."
                </h2>

                <div className="space-y-6 text-foreground/70 body-large">
                  <p>
                    2025 marked a fundamental shift in how we leveraged AI at Netcore. We moved from analysing data to actively driving decisions and outcomes for marketers.
                  </p>

                  <p>
                    Over the year, we strengthened our data foundation through affinity and propensity models, deeper funnel and RFM analytics, and highly actionable dashboards.
                  </p>

                  <button
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Continue reading <ChevronDown size={18} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              {/* Expanded Header */}
              <div className="text-center mb-12">
                <span className="caption text-primary mb-4 block">A Note from the CPO</span>
                <h2 className="section-heading text-foreground mb-4">
                  "In 2025, AI at Netcore moved beyond analysis to actively drive decisions and outcomes for marketers."
                </h2>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <img 
                    src={kedarCpoPhoto} 
                    alt="Kedar Parikh" 
                    className="w-16 h-16 rounded-full object-cover object-top"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Kedar Parikh</p>
                    <p className="text-foreground/60 text-sm">Chief Product Officer</p>
                  </div>
                </div>
              </div>

              {/* Full Article Content */}
              <article className="prose prose-lg max-w-none text-foreground/80">
                <p className="mb-6">
                  2025 marked a fundamental shift in how we leveraged AI at Netcore. We moved from analysing data to actively driving decisions and outcomes for marketers.
                </p>

                <p className="mb-6">
                  Over the year, we strengthened our data foundation through affinity and propensity models, deeper funnel and RFM analytics, and highly actionable dashboards. This enabled marketers to move decisively from insight to execution.
                </p>

                <p className="mb-6">
                  At the same time, we committed to Agentic AI as a platform strategy. In partnership with Google, we articulated our Agentic AI Stack and launched the Content Agent and Insights Agent—marking a clear evolution of AI from support to action.
                </p>

                <p className="mb-6">
                  What stood out most was not just adoption, but trust. The Insights Agent is now increasingly used for Monday reviews and QBRs, signalling a meaningful shift: customers and CSMs now rely on AI as a credible decision partner.
                </p>

                <p className="text-right font-semibold text-foreground mt-8">
                  — Kedar Parikh<br />
                  <span className="font-normal text-foreground/60">Chief Product Officer</span>
                </p>
              </article>

              {/* Collapse Button */}
              <div className="text-center mt-12">
                <button
                  onClick={() => setExpanded(false)}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  <ChevronUp size={18} /> Collapse article
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
