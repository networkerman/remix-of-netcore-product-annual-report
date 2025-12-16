import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Lightbulb, Palette, FileText, Sparkles } from "lucide-react";

const craftSections = [
  {
    id: "product",
    icon: Lightbulb,
    title: "Product Decisions",
    description: "The strategic choices that shaped our roadmap",
    color: "teal",
    stories: [
      {
        title: "Why We Rebuilt Analytics",
        content: "The old dashboard was a Frankenstein of features added over years. We made the hard call to rebuild from scratch—six months of pain for years of gain.",
      },
      {
        title: "The Pivot to API-First",
        content: "Customers were asking for integrations we couldn't support. Going API-first meant slowing down feature work, but it unlocked an entirely new market.",
      },
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "Design Evolution",
    description: "How our visual language matured this year",
    color: "coral",
    stories: [
      {
        title: "Design System 3.0",
        content: "We deprecated 200+ inconsistent components and created a unified system. Every button, every form, every interaction—now speaks the same language.",
      },
      {
        title: "Accessibility Overhaul",
        content: "WCAG compliance wasn't just a checkbox. We redesigned 40+ screens to ensure everyone can use our products effectively.",
      },
    ],
  },
  {
    id: "docs",
    icon: FileText,
    title: "Documentation",
    description: "Making complex simple, one page at a time",
    color: "accent",
    stories: [
      {
        title: "API Docs Renaissance",
        content: "We moved from static PDFs to interactive documentation. Now developers can test endpoints without leaving the docs page.",
      },
      {
        title: "Video-First Tutorials",
        content: "Reading fatigue is real. We launched 50+ video guides that cut onboarding time by 40%.",
      },
    ],
  },
];

const spotlightProducts = [
  {
    product: "CE Analytics",
    tagline: "From insight to action",
    story: "The end-to-end success story of transforming raw data into actionable customer insights. This wasn't just a feature—it was a complete rethinking of how marketers understand their audience.",
    highlights: ["Real-time dashboards", "Custom report builder", "Predictive segments"],
  },
  {
    product: "CPaaS APIs",
    tagline: "Platform as a superpower",
    story: "APIs aren't just endpoints—they're promises. This year we delivered on the promise of letting developers build anything they imagine on our platform.",
    highlights: ["99.99% uptime", "Sub-100ms latency", "10x throughput"],
  },
  {
    product: "Unbxd Shopify",
    tagline: "E-commerce, elevated",
    story: "The Shopify ecosystem is crowded. We carved out a space by focusing obsessively on search quality and personalization that actually converts.",
    highlights: ["One-click install", "AI recommendations", "Real-time sync"],
  },
];

const colorVariants = {
  teal: "bg-teal-500/10 border-teal-500/30 text-teal-500",
  coral: "bg-coral-400/10 border-coral-400/30 text-coral-500",
  accent: "bg-accent/20 border-accent/40 text-amber-600",
};

export function ProductCraft() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSection, setActiveSection] = useState("product");

  const currentSection = craftSections.find(s => s.id === activeSection)!;

  return (
    <section
      id="craft"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="caption text-primary mb-4 block">Depth & Collaboration</span>
          <h2 className="section-heading text-foreground mb-6">Product Craft & Evolution</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            Behind every feature is a story of decisions, trade-offs, and collaboration. 
            Here's how Product, Design, and Docs worked together to ship excellence.
          </p>
        </motion.div>

        {/* Section Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {craftSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? `${colorVariants[section.color as keyof typeof colorVariants]} border-opacity-100`
                  : "bg-card border-border hover:border-foreground/20"
              }`}
            >
              <section.icon size={20} />
              <span className="font-medium">{section.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="text-center mb-8">
            <currentSection.icon className="mx-auto mb-4 text-primary" size={40} />
            <p className="text-foreground/60">{currentSection.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentSection.stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-lg text-foreground mb-3">{story.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{story.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Spotlight Products */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="text-primary" size={24} />
            <h3 className="text-2xl font-bold text-foreground">Product Spotlights</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {spotlightProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="group relative"
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 text-cream-100 h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <span className="text-teal-400 text-sm font-medium">{product.product}</span>
                    <h4 className="text-2xl font-bold mt-2">{product.tagline}</h4>
                  </div>

                  {/* Story */}
                  <p className="text-cream-300/70 leading-relaxed mb-6">
                    {product.story}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {product.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 text-sm text-cream-200">
                        <ArrowRight size={14} className="text-teal-400" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-teal-500/10 blur-2xl group-hover:bg-teal-500/20 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
