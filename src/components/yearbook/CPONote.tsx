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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
      
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
                <span className="caption text-primary mb-4 block">Newsletter from the CPO</span>
                
                <h2 className="section-heading text-foreground mb-8">
                  "This year tested us. And we delivered."
                </h2>

                <div className="space-y-6 text-foreground/70 body-large">
                  <p>
                    <strong className="text-foreground">The Year in Review:</strong> 2025 was a year of transformation. 
                    We shipped more features than ever, tackled technical debt that had haunted us for years, 
                    and built foundations that will serve us for the decade ahead.
                  </p>

                  <p>
                    <strong className="text-foreground">The Challenges:</strong> Let's be honest—it wasn't smooth. 
                    We faced resource constraints, shifting priorities, and the eternal tension between speed and quality. 
                    Some bets didn't pay off. That's the reality of building products.
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
                <span className="caption text-primary mb-4 block">Newsletter from the CPO</span>
                <h2 className="section-heading text-foreground mb-4">
                  "This year tested us. And we delivered."
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
                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Introduction</h3>
                  <p className="mb-4">
                    [Placeholder: Opening remarks about the significance of 2025 and setting the tone for the year-end reflection. 
                    Discuss the overarching theme of growth, resilience, and innovation that defined this year.]
                  </p>
                  <p>
                    [Placeholder: Personal note from the CPO about what this year meant to them personally and professionally. 
                    Share a brief anecdote that captures the spirit of the team.]
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Year in Review</h3>
                  <p className="mb-4">
                    2025 was a year of transformation. We shipped more features than ever, tackled technical debt 
                    that had haunted us for years, and built foundations that will serve us for the decade ahead.
                  </p>
                  <p className="mb-4">
                    [Placeholder: Detailed overview of major product launches and updates. Include specific numbers, 
                    such as the number of features shipped, customer feedback scores, and market impact metrics.]
                  </p>
                  <p>
                    [Placeholder: Highlight 2-3 standout moments that defined the year—product launches, customer wins, 
                    or team achievements that deserve special recognition.]
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Challenges We Faced</h3>
                  <p className="mb-4">
                    Let's be honest—it wasn't smooth. We faced resource constraints, shifting priorities, 
                    and the eternal tension between speed and quality. Some bets didn't pay off. That's the reality of building products.
                  </p>
                  <p className="mb-4">
                    [Placeholder: Discuss specific challenges such as market competition, technical hurdles, 
                    or organizational changes. Be honest about what didn't work and why.]
                  </p>
                  <p>
                    [Placeholder: Explain how the team responded to these challenges. What pivots did we make? 
                    What did we learn from our failures?]
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Decisions</h3>
                  <p className="mb-4">
                    [Placeholder: Detail the major strategic decisions made this year—why we chose to focus on 
                    certain product areas, deprioritize others, or enter new markets.]
                  </p>
                  <p className="mb-4">
                    Every major pivot came from listening—to customers, to data, to each other. The decision to double down on 
                    Analytics wasn't easy. The choice to rebuild the WhatsApp editor was costly. But looking back, 
                    these were the right calls.
                  </p>
                  <p>
                    [Placeholder: Share the reasoning behind key decisions. Help the team understand the "why" 
                    behind strategic choices that shaped our roadmap.]
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Team Recognition</h3>
                  <p className="mb-4">
                    The team. Full stop. The way you've grown, the way you've supported each other, 
                    the way you've pushed back when needed and stepped up when it mattered. 
                    That's not something you can ship—it's something you build.
                  </p>
                  <p className="mb-4">
                    [Placeholder: Call out specific team achievements, individual contributions, or cross-functional 
                    collaborations that made a significant impact. This is the place to celebrate our people.]
                  </p>
                  <p>
                    [Placeholder: Mention any awards, recognitions, or milestones achieved by team members. 
                    Celebrate promotions, certifications, or personal achievements.]
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Looking Forward</h3>
                  <p className="mb-4">
                    [Placeholder: Preview of what's coming in 2026. Share the vision without giving away competitive details. 
                    Build excitement for the roadmap ahead.]
                  </p>
                  <p className="mb-4">
                    [Placeholder: Discuss how we plan to build on this year's successes and address ongoing challenges. 
                    What new opportunities are we pursuing?]
                  </p>
                  <p>
                    [Placeholder: Set expectations for the team—what skills will be important, what mindsets will help us succeed, 
                    and how we plan to continue growing together.]
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Closing Note</h3>
                  <blockquote className="border-l-4 border-primary pl-6 italic text-foreground my-8">
                    "To everyone who stayed late, who questioned assumptions, who cared enough to argue—thank you. 
                    This yearbook is yours."
                  </blockquote>
                  <p className="mb-4">
                    [Placeholder: Final thoughts and gratitude. A personal message from the CPO to each team member. 
                    Reflect on the journey and express optimism for the future.]
                  </p>
                  <p className="text-right font-semibold text-foreground mt-8">
                    — Kedar Parikh<br />
                    <span className="font-normal text-foreground/60">Chief Product Officer</span>
                  </p>
                </section>
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
