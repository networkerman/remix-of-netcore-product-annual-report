import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react";

type SectionType = "Product" | "Design" | "Documentation";

const heroSections = [
  {
    function: "Product" as SectionType,
    icon: "🚀",
    gradient: "from-teal-500 to-teal-600",
    heroes: [
      {
        title: "[Hero Product 1]",
        month: "March 2025",
        why: "This feature didn't just ship—it transformed how customers think about engagement. It's the kind of work that makes competitors take notice.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "Demo Video", url: "#" },
          { label: "Case Study", url: "#" },
        ],
      },
      {
        title: "[Hero Product 2]",
        month: "May 2025",
        why: "A game-changing integration that connected disparate systems into one seamless workflow. Customer onboarding time reduced by 40%.",
        links: [
          { label: "Integration Guide", url: "#" },
          { label: "Demo Video", url: "#" },
        ],
      },
      {
        title: "[Hero Product 3]",
        month: "August 2025",
        why: "Real-time analytics that finally gave customers the insights they'd been asking for. Dashboard adoption increased 3x in the first week.",
        links: [
          { label: "Feature Overview", url: "#" },
          { label: "User Guide", url: "#" },
          { label: "Blog Post", url: "#" },
        ],
      },
    ],
  },
  {
    function: "Design" as SectionType,
    icon: "🎨",
    gradient: "from-coral-400 to-coral-500",
    heroes: [
      {
        title: "[Hero Design 1]",
        month: "June 2025",
        why: "A complete visual overhaul that unified three products under one design language. 200+ components, infinite possibilities, zero confusion.",
        links: [
          { label: "Design System Docs", url: "#" },
          { label: "Figma Library", url: "#" },
          { label: "Blog Post", url: "#" },
        ],
      },
      {
        title: "[Hero Design 2]",
        month: "September 2025",
        why: "Accessibility-first redesign that earned WCAG AA compliance across all touchpoints. Inclusive design that works for everyone.",
        links: [
          { label: "Accessibility Guide", url: "#" },
          { label: "Case Study", url: "#" },
        ],
      },
      {
        title: "[Hero Design 3]",
        month: "November 2025",
        why: "Mobile-first responsive patterns that reduced bounce rates by 25%. A masterclass in adaptive design thinking.",
        links: [
          { label: "Pattern Library", url: "#" },
          { label: "Demo", url: "#" },
        ],
      },
    ],
  },
  {
    function: "Documentation" as SectionType,
    icon: "📚",
    gradient: "from-accent to-amber-500",
    heroes: [
      {
        title: "Docs That Execute, Not Just Explain",
        month: "July 2025",
        why: "Interactive API documentation that lets developers test endpoints without leaving the page. Support tickets dropped 30% in the first month.",
        links: [
          { label: "API Reference", url: "#" },
          { label: "Quick Start Guide", url: "#" },
          { label: "Video Walkthrough", url: "#" },
        ],
      },
      {
        title: "[Hero Docs 2]",
        month: "October 2025",
        why: "Comprehensive migration guides that turned a complex upgrade into a smooth transition. Zero escalations, happy customers.",
        links: [
          { label: "Migration Guide", url: "#" },
          { label: "FAQ", url: "#" },
        ],
      },
    ],
  },
];

export function HeroProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSection, setActiveSection] = useState<SectionType>("Product");

  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById(`scroll-${activeSection}`);
    if (container) {
      const scrollAmount = direction === "left" ? -340 : 340;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
          <h2 className="section-heading mb-6">Hero of the Year</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            Every year, certain projects stand out. These are the heroes that defined 2025, 
            each a testament to what focused excellence can achieve.
          </p>
        </motion.div>

        {/* Section Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {heroSections.map((section) => (
            <button
              key={section.function}
              onClick={() => setActiveSection(section.function)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === section.function
                  ? "bg-cream-100 text-navy-900"
                  : "bg-cream-100/10 text-cream-300 hover:bg-cream-100/20"
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.function}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Section Content */}
        <div className="max-w-7xl mx-auto">
          {heroSections
            .filter((section) => section.function === activeSection)
            .map((section) => (
              <motion.div
                key={section.function}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Scroll Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-cream-100/10 text-cream-300 text-sm">
                    {section.heroes.length} heroes
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => scrollContainer("left")}
                      className="p-2 rounded-full bg-cream-100/10 hover:bg-cream-100/20 transition-colors"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={20} className="text-cream-300" />
                    </button>
                    <button
                      onClick={() => scrollContainer("right")}
                      className="p-2 rounded-full bg-cream-100/10 hover:bg-cream-100/20 transition-colors"
                      aria-label="Scroll right"
                    >
                      <ChevronRight size={20} className="text-cream-300" />
                    </button>
                  </div>
                </div>

                {/* Horizontally Scrollable Cards */}
                <div
                  id={`scroll-${section.function}`}
                  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {section.heroes.map((hero, heroIndex) => (
                    <motion.div
                      key={heroIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: heroIndex * 0.1 }}
                      className="group relative flex-shrink-0 w-80 snap-start"
                    >
                      {/* Card */}
                      <div className="relative h-full rounded-2xl overflow-hidden">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                        
                        {/* Content */}
                        <div className="relative p-6 h-full flex flex-col bg-navy-800/80 backdrop-blur-sm border border-cream-100/10 rounded-2xl min-h-[360px]">
                          {/* Month Badge */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-cream-400 text-sm">{hero.month}</span>
                          </div>

                          {/* Title */}
                          <h4 className="text-xl font-bold text-cream-100 mb-4">{hero.title}</h4>

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
                      <div className={`absolute -inset-0.5 bg-gradient-to-br ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                    </motion.div>
                  ))}
                </div>
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

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
