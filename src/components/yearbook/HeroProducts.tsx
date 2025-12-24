import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Star, ChevronLeft, ChevronRight, BookOpen, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SectionType = "Product" | "Design" | "Documentation";

interface HeroStorySection {
  heading?: string;
  content?: string;
  bullets?: string[];
}

interface HeroItem {
  title: string;
  month: string;
  why: string;
  links: { label: string; url: string }[];
  heroLabel?: string;
  subtitle?: string;
  story?: HeroStorySection[];
}

const documentationHeroStory: HeroStorySection[] = [
  {
    heading: "Interactive API Documentation That Developers Can Use, Not Just Read",
    content:
      "This year, the Documentation team redefined how developers interact with Netcore APIs by launching interactive API documentation for Email V5 and Email V6.",
  },
  {
    content:
      "Instead of static references, developers can now make live API calls directly from the documentation, validate requests in real time, and instantly view responses—without switching tools or writing boilerplate code elsewhere. This shift transformed our docs from a passive learning resource into an active development workspace.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "Reduced time-to-first-success for developers integrating Email APIs",
      "Fewer back-and-forths with support and solution teams",
      "Higher confidence during integration, testing, and go-live",
      "Documentation now acts as a self-serve onboarding layer for developers",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "Fully interactive API docs for Email V5 and Email V6",
      "Live request execution with real responses",
      "Clear request/response visibility for faster debugging",
      "Seamless experience aligned with real production workflows",
    ],
  },
  {
    heading: "Business Impact",
    content:
      "This initiative directly supports faster adoption, better developer experience, and stronger platform trust—turning documentation into a growth enabler rather than a support dependency.",
  },
  {
    heading: "What's Next",
    content:
      "Building on this success, interactive API documentation for WhatsApp, RCS, and SMS is already in progress and planned for the next quarter, extending the same developer-first experience across Netcore's CPaaS stack.",
  },
];

const heroSections: {
  function: SectionType;
  icon: string;
  gradient: string;
  heroes: HeroItem[];
}[] = [
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
        heroLabel: "Documentation Hero",
        subtitle: "An interactive APIfication documentation experience that helps developers test, debug, and go live faster.",
        why: "Interactive API documentation that lets developers test endpoints without leaving the page.",
        links: [
          { label: "API Reference", url: "#" },
          { label: "Quick Start Guide", url: "#" },
          { label: "Video Walkthrough", url: "#" },
        ],
        story: documentationHeroStory,
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
  const [selectedHero, setSelectedHero] = useState<HeroItem | null>(null);

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
                      className="group relative flex-shrink-0 w-80 snap-start cursor-pointer"
                      onClick={() => hero.story && setSelectedHero(hero)}
                    >
                      {/* Card */}
                      <div className="relative h-full rounded-2xl overflow-hidden">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                        
                        {/* Hover Overlay for Story Cards */}
                        {hero.story && (
                          <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center rounded-2xl">
                            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-navy-900 font-semibold text-sm">
                              <Eye size={18} />
                              <span>VIEW FULL STORY</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="relative p-6 h-full flex flex-col bg-navy-800/80 backdrop-blur-sm border border-cream-100/10 rounded-2xl min-h-[360px]">
                          {/* Month Badge & Hero Label */}
                          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-cream-400 text-sm">{hero.month}</span>
                              {hero.heroLabel && (
                                <>
                                  <span className="text-cream-100/30">•</span>
                                  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${section.gradient} text-navy-900 text-xs font-semibold`}>
                                    <BookOpen size={12} />
                                    {hero.heroLabel}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Title */}
                          <h4 className="text-xl font-bold text-cream-100 mb-3">{hero.title}</h4>

                          {/* Subtitle (if exists) */}
                          {hero.subtitle && (
                            <p className="text-cream-300/70 text-sm mb-4 leading-relaxed">
                              {hero.subtitle}
                            </p>
                          )}

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
                                onClick={(e) => e.stopPropagation()}
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

      {/* Full Story Dialog */}
      <Dialog open={!!selectedHero} onOpenChange={() => setSelectedHero(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-navy-800 border-cream-100/10 text-cream-100">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-cream-400 text-sm">{selectedHero?.month}</span>
              {selectedHero?.heroLabel && (
                <>
                  <span className="text-cream-100/30">•</span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-accent to-amber-500 text-navy-900 text-xs font-semibold">
                    <BookOpen size={12} />
                    {selectedHero.heroLabel}
                  </span>
                </>
              )}
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-cream-100">
              {selectedHero?.title}
            </DialogTitle>
            {selectedHero?.subtitle && (
              <p className="text-cream-300/80 text-lg mt-2">{selectedHero.subtitle}</p>
            )}
          </DialogHeader>

          {/* Why It Matters Highlight */}
          <div className="p-5 rounded-xl bg-cream-100/5 border border-cream-100/10 my-6">
            <div className="flex items-center gap-2 text-teal-400 mb-3">
              <Star size={16} />
              <span className="text-xs font-semibold uppercase tracking-wider">Why It Matters</span>
            </div>
            <p className="text-cream-200 leading-relaxed">{selectedHero?.why}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-8">
            {selectedHero?.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100/5 border border-cream-100/15 text-cream-300 hover:text-teal-400 hover:border-teal-400/40 hover:bg-teal-400/10 text-sm transition-all duration-300"
              >
                <span>{link.label}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>

          {/* Full Story */}
          {selectedHero?.story && (
            <div className="pt-6 border-t border-cream-100/10">
              <div className="space-y-6">
                {selectedHero.story.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {section.heading && (
                      <h4 className="text-xl font-bold text-cream-100 mb-3">
                        {section.heading}
                      </h4>
                    )}
                    {section.content && (
                      <p className="text-cream-300/80 leading-relaxed mb-4">
                        {section.content}
                      </p>
                    )}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-3 text-cream-300/80"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
