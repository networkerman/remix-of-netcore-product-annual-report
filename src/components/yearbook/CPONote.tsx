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
      
      <div className="container mx-auto px-6">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="caption text-primary mb-4 block">Leadership</span>
          <h2 className="section-heading text-foreground mb-6">A Note from the CPO</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            Reflections on how AI transformed our approach to marketing technology in 2025.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-[auto_1fr] gap-6 items-start max-w-5xl mx-auto"
            >
              {/* Left: Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* CPO Photo with Quote Decoration */}
                <div className="relative max-w-sm">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                    <img 
                      src={kedarCpoPhoto} 
                      alt="Kedar Parikh - Chief Product Officer" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Quote Decoration - overlaps top-right corner */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-400 rounded-2xl flex items-center justify-center z-10">
                    <Quote className="w-8 h-8 text-coral-50" />
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground mb-6">
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
                    Show more <ChevronDown size={18} />
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground mb-4">
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
                  <ChevronUp size={18} /> Show less
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
