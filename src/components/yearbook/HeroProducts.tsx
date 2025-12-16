import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Star } from "lucide-react";

const heroes = [
  {
    function: "Product",
    title: "[Hero Product Feature]",
    month: "March 2024",
    why: "This feature didn't just ship—it transformed how customers think about engagement. It's the kind of work that makes competitors take notice.",
    links: [
      { label: "Documentation", url: "#" },
      { label: "Demo Video", url: "#" },
      { label: "Case Study", url: "#" },
    ],
    gradient: "from-teal-500 to-teal-600",
    icon: "🚀",
  },
  {
    function: "Design",
    title: "[Hero Design System]",
    month: "June 2024",
    why: "A complete visual overhaul that unified three products under one design language. 200+ components, infinite possibilities, zero confusion.",
    links: [
      { label: "Design System Docs", url: "#" },
      { label: "Figma Library", url: "#" },
      { label: "Blog Post", url: "#" },
    ],
    gradient: "from-coral-400 to-coral-500",
    icon: "🎨",
  },
  {
    function: "Documentation",
    title: "[Hero Docs Project]",
    month: "September 2024",
    why: "Interactive API documentation that lets developers test endpoints without leaving the page. Support tickets dropped 30% in the first month.",
    links: [
      { label: "API Reference", url: "#" },
      { label: "Quick Start Guide", url: "#" },
      { label: "Video Walkthrough", url: "#" },
    ],
    gradient: "from-accent to-amber-500",
    icon: "📚",
  },
];

export function HeroProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="heroes"
      ref={ref}
      className="py-32 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-accent" size={32} />
          </div>
          <span className="caption text-accent mb-4 block">Excellence Recognized</span>
          <h2 className="section-heading mb-6">Hero Products of the Year</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            Every year, certain projects stand out. These are the heroes that defined 2024—
            one from each function, each a testament to what focused excellence can achieve.
          </p>
        </motion.div>

        {/* Hero Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {heroes.map((hero, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hero.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col bg-navy-800/80 backdrop-blur-sm border border-cream-100/10 rounded-3xl">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-cream-100/10 text-cream-200 text-sm font-medium">
                      {hero.function}
                    </span>
                    <span className="text-cream-400 text-sm">{hero.month}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-6">{hero.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-cream-100 mb-4">{hero.title}</h3>

                  {/* Why It Matters */}
                  <div className="mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-teal-400 mb-2">
                      <Star size={14} />
                      <span className="text-xs font-semibold uppercase tracking-wider">Why It Matters</span>
                    </div>
                    <p className="text-cream-300/80 leading-relaxed text-sm">
                      {hero.why}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="space-y-2 pt-4 border-t border-cream-100/10">
                    {hero.links.map((link, lIndex) => (
                      <a
                        key={lIndex}
                        href={link.url}
                        className="flex items-center justify-between text-sm text-cream-300 hover:text-teal-400 transition-colors py-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${hero.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Honorable Mentions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-cream-400 mb-6">And countless other projects that made us proud...</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Analytics v3", "WhatsApp Editor", "Design Tokens", "API Docs 2.0", "Mobile SDK", "Reporting Engine"].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-cream-100/5 border border-cream-100/10 text-cream-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
