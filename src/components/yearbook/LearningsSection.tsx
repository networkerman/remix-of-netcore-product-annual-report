import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, ArrowRight, Lightbulb } from "lucide-react";

const learnings = [
  {
    category: "Process",
    mistake: "[Placeholder: Biggest process mistake]",
    lesson: "What we learned and how we changed our approach",
    change: "[Placeholder: Specific process change implemented]",
  },
  {
    category: "Technical",
    mistake: "[Placeholder: Technical decision we'd revisit]",
    lesson: "The trade-offs we didn't anticipate",
    change: "[Placeholder: How we handle similar decisions now]",
  },
  {
    category: "Communication",
    mistake: "[Placeholder: Communication gap that cost us]",
    lesson: "Assumptions are expensive",
    change: "[Placeholder: New communication protocol]",
  },
  {
    category: "Planning",
    mistake: "[Placeholder: Estimation or scoping failure]",
    lesson: "Optimism bias is real",
    change: "[Placeholder: Updated planning approach]",
  },
  {
    category: "Prioritization",
    mistake: "[Placeholder: Feature we built too early/late]",
    lesson: "Timing matters as much as execution",
    change: "[Placeholder: New prioritization framework]",
  },
];

export function LearningsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="learnings"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cream-200/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="caption text-primary mb-4 block">Honest Reflection</span>
          <h2 className="section-heading text-foreground mb-6">Biggest Learnings</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            We don't just celebrate wins—we learn from what didn't work. 
            Here are the lessons that shaped how we'll work in 2026.
          </p>
        </motion.div>

        {/* Learnings Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {learnings.map((learning, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {learning.category}
              </span>

              {/* Content Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Mistake */}
                <div>
                  <div className="flex items-center gap-2 text-destructive mb-2">
                    <AlertCircle size={16} />
                    <span className="text-sm font-semibold">The Mistake</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {learning.mistake}
                  </p>
                </div>

                {/* Lesson */}
                <div>
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <Lightbulb size={16} />
                    <span className="text-sm font-semibold">The Lesson</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {learning.lesson}
                  </p>
                </div>

                {/* Change */}
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <ArrowRight size={16} />
                    <span className="text-sm font-semibold">What Changed</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {learning.change}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 rounded-3xl bg-navy-800 text-cream-100">
            <p className="text-lg leading-relaxed mb-4">
              "Failure isn't the opposite of success—it's part of it. These learnings 
              represent hundreds of hours of reflection and thousands of conversations. 
              They're not just mistakes—they're investments in who we're becoming."
            </p>
            <p className="text-teal-400 font-medium">— The Product Leadership Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
