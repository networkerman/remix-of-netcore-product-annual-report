import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Star, ChevronLeft, ChevronRight, BookOpen, Eye, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SectionType = "Product" | "Design" | "Documentation";

interface ProductStorySection {
  impact: string[];
  shipped: string[];
}

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
  productStory?: ProductStorySection;
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

const unbxdDocsHeroStory: HeroStorySection[] = [
  {
    heading: "A Documentation Website That Works the Way Customers Think",
    content:
      "This year, the Documentation team rebuilt the Unbxd documentation website to solve a long-standing challenge: a legacy doc platform that had become a deadlock for updates and improvements.",
  },
  {
    content:
      "The older site restricted changes, slowed down fixes, and made it harder to surface the right information when customers needed it most. With the new Unbxd documentation website, content is now structured around how users search, browse, and integrate—making answers easier to find and faster to act on.",
  },
  {
    content:
      "The result is a documentation experience that supports customers throughout their journey, from evaluation to implementation and optimization.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "Faster access to relevant information across Search, Browse, and APIs",
      "Quicker resolution of customer and partner queries",
      "Reduced dependency on manual explanations from internal teams",
      "Documentation that stays current as the product evolves",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "A fully redesigned Unbxd documentation website",
      "Clear information architecture aligned to user intent",
      "Improved navigation and discoverability across modules",
      "A flexible platform that allows continuous updates and fixes",
    ],
  },
  {
    heading: "Business Impact",
    content:
      "The new Unbxd documentation site removed content bottlenecks, improved self-serve success, and enabled the team to respond to customer questions faster—strengthening trust and reducing friction across the Unbxd ecosystem.",
  },
  {
    heading: "What's Next",
    content:
      "With the foundation in place, the team will continue enhancing Unbxd documentation with deeper guides, expanded APIs, and tighter alignment with product updates—ensuring the site scales alongside Unbxd's roadmap.",
  },
];

// Product Hero Stories
const multiAgentStory: ProductStorySection = {
  impact: [
    "Accelerated decision-making across journeys and personalization",
    "Reduced manual configuration overhead for teams",
  ],
  shipped: [
    "Multi-agent decision orchestration",
    "Specialized agents for targeting, optimization, and execution",
    "Central coordination layer for outcome alignment",
  ],
};

const insightAgentStory: ProductStorySection = {
  impact: [
    "Faster identification of anomalies and performance shifts",
    "Stronger, insight-led QBRs and customer conversations",
  ],
  shipped: [
    "Automated insight detection",
    "Impact attribution across campaigns and journeys",
    "CSM-ready views for customer storytelling",
  ],
};

const shoppingAgentStory: ProductStorySection = {
  impact: [
    "Improved engagement in discovery-heavy shopping flows",
    "Higher quality conversions driven by intent alignment",
  ],
  shipped: [
    "Real-time intent understanding",
    "Conversational guidance during browsing",
    "Context-aware product recommendations",
  ],
};

const journeyPathOptimizerStory: ProductStorySection = {
  impact: [
    "Clear visibility into high-performing journey paths",
    "Better optimization decisions backed by data",
  ],
  shipped: [
    "Path analysis and comparison logic",
    "Optimization rules based on real outcomes",
    "Continuous performance feedback loops",
  ],
};

const affinitiesPropensitiesStory: ProductStorySection = {
  impact: [
    "More relevant personalization across channels",
    "Better targeting using predictive signals",
  ],
  shipped: [
    "Affinity modeling across behaviors",
    "Propensity scoring for key actions",
    "Activation-ready outputs for campaigns",
  ],
};

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
        title: "Multi-Agent (Agentic AI)",
        month: "March 2025",
        why: "Delivers faster, smarter outcomes by distributing decisions across specialized AI agents—without adding complexity for marketers.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "Feature Overview", url: "#" },
          { label: "Release Notes", url: "#" },
        ],
        productStory: multiAgentStory,
      },
      {
        title: "Insight Agent",
        month: "April 2025",
        why: "Turns analysis into action by surfacing insights, anomalies, and impact—powering sharper decisions for customers and CSMs alike.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "Use Cases", url: "#" },
          { label: "QBR Enablement Guide", url: "#" },
        ],
        productStory: insightAgentStory,
      },
      {
        title: "Shopping Agent",
        month: "May 2025",
        why: "Guides shoppers in real time based on intent, reducing friction and improving conversion quality in high-consideration journeys.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "How It Works", url: "#" },
          { label: "Demo Environment (Coming Soon)", url: "#" },
        ],
        productStory: shoppingAgentStory,
      },
      {
        title: "Journey Path Optimiser",
        month: "July 2025",
        why: "Eliminates guesswork in journey design by identifying and optimizing the paths that drive the highest impact.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "Use Case Library", url: "#" },
          { label: "Release Notes", url: "#" },
        ],
        productStory: journeyPathOptimizerStory,
      },
      {
        title: "Affinities and Propensities",
        month: "August 2025",
        why: "Enables predictive personalization by modeling user intent and likelihood to act across channels at scale.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "Feature Overview", url: "#" },
          { label: "Data Inputs & Outputs", url: "#" },
        ],
        productStory: affinitiesPropensitiesStory,
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
          { label: "Quick Start Guide", url: "https://developer.netcorecloud.com/reference/getting-started" },
          { label: "Email API V5", url: "https://developer.netcorecloud.com/reference/contacts" },
          { label: "Email API V6", url: "https://emaildocs.netcorecloud.com/reference/email-api" },
        ],
        story: documentationHeroStory,
      },
      {
        title: "Unbxd Docs, Rebuilt for Clarity and Speed",
        month: "July 2025",
        heroLabel: "New Unbxd Website",
        subtitle: "A redesigned documentation website that makes it easier to find the right information at the right time.",
        why: "A modern, flexible documentation site that removes content bottlenecks and accelerates query resolution.",
        links: [
          { label: "Unbxd Documentation Home", url: "https://docs.unbxd.com" },
          { label: "Search & Browse Docs", url: "https://docs.unbxd.com/search" },
          { label: "API References", url: "https://docs.unbxd.com/api" },
        ],
        story: unbxdDocsHeroStory,
      },
    ],
  },
];

export function HeroProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSection, setActiveSection] = useState<SectionType>("Product");
  const [selectedHero, setSelectedHero] = useState<HeroItem | null>(null);
  const [expandedProductIndex, setExpandedProductIndex] = useState<number | null>(null);

  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById(`scroll-${activeSection}`);
    if (container) {
      const scrollAmount = direction === "left" ? -340 : 340;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleProductExpand = (index: number) => {
    setExpandedProductIndex(expandedProductIndex === index ? null : index);
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
                  {section.heroes.map((hero, heroIndex) => {
                    const isProduct = section.function === "Product";
                    const isExpanded = isProduct && expandedProductIndex === heroIndex;

                    return (
                      <motion.div
                        key={heroIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: heroIndex * 0.1 }}
                        layout
                        className={`group relative flex-shrink-0 snap-start ${
                          isProduct ? "w-80" : "w-80"
                        } ${isProduct ? "cursor-pointer" : hero.story ? "cursor-pointer" : ""}`}
                        onClick={() => {
                          if (isProduct) {
                            toggleProductExpand(heroIndex);
                          } else if (hero.story) {
                            setSelectedHero(hero);
                          }
                        }}
                      >
                        {/* Card */}
                        <div className="relative h-full rounded-2xl overflow-hidden">
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                          
                          {/* Hover Overlay for Documentation Story Cards (not Product) */}
                          {!isProduct && hero.story && (
                            <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center rounded-2xl">
                              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-navy-900 font-semibold text-sm">
                                <Eye size={18} />
                                <span>VIEW FULL STORY</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Content */}
                          <motion.div 
                            layout
                            className={`relative p-6 h-full flex flex-col bg-navy-800/80 backdrop-blur-sm border border-cream-100/10 rounded-2xl ${
                              isProduct ? "" : "min-h-[360px]"
                            }`}
                          >
                            {/* Product Card - Simplified Header (no month) */}
                            {isProduct ? (
                              <>
                                {/* Title */}
                                <h4 className="text-xl font-bold text-cream-100 mb-3">{hero.title}</h4>

                                {/* Why It Matters with Tooltip */}
                                <div className="mb-4">
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <div className="flex items-center gap-2 text-teal-400 mb-2 cursor-help">
                                          <Star size={14} />
                                          <span className="text-xs font-semibold uppercase tracking-wider">Why It Matters</span>
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent className="bg-navy-700 text-cream-100 border-cream-100/20">
                                        <p className="text-xs">Why this feature earned Hero status in 2025</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                  <p className="text-cream-300/80 leading-relaxed text-sm">
                                    {hero.why}
                                  </p>
                                </div>

                                {/* Expand/Collapse Indicator */}
                                <div className="flex items-center justify-center py-2 border-t border-cream-100/10">
                                  <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-cream-400"
                                  >
                                    <ChevronDown size={20} />
                                  </motion.div>
                                </div>

                                {/* Expanded Content - Inline */}
                                <AnimatePresence>
                                  {isExpanded && hero.productStory && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="pt-4 space-y-4">
                                        {/* Impact Section */}
                                        <div>
                                          <h5 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">Impact</h5>
                                          <ul className="space-y-2">
                                            {hero.productStory.impact.map((item, i) => (
                                              <li key={i} className="flex items-start gap-2 text-cream-300/80 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                                <span>{item}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>

                                        {/* What We Shipped Section */}
                                        <div>
                                          <h5 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">What We Shipped</h5>
                                          <ul className="space-y-2">
                                            {hero.productStory.shipped.map((item, i) => (
                                              <li key={i} className="flex items-start gap-2 text-cream-300/80 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                                <span>{item}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>

                                        {/* Resources */}
                                        <div className="pt-4 border-t border-cream-100/10">
                                          <h5 className="text-sm font-semibold text-cream-400 uppercase tracking-wider mb-2">Resources</h5>
                                          <div className="space-y-2">
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
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                            ) : (
                              <>
                                {/* Non-Product Cards (Design/Documentation) - Original Layout */}
                                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                  <div className="flex items-center gap-2">
                                    {hero.heroLabel ? (
                                      <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${section.gradient} text-navy-900 text-xs font-semibold`}>
                                        <BookOpen size={12} />
                                        {hero.heroLabel}
                                      </span>
                                    ) : (
                                      <span className="text-cream-400 text-sm">{hero.month}</span>
                                    )}
                                  </div>
                                </div>

                                {/* Title */}
                                <h4 className="text-xl font-bold text-cream-100 mb-3">{hero.title}</h4>

                                {/* Why It Matters - directly under title */}
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
                              </>
                            )}
                          </motion.div>
                        </div>

                        {/* Glow Effect on Hover */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-br ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                      </motion.div>
                    );
                  })}
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
            {/* Why It Matters Highlight */}
            <div className="p-5 rounded-xl bg-cream-100/5 border border-cream-100/10 mt-4">
              <div className="flex items-center gap-2 text-teal-400 mb-3">
                <Star size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider">Why It Matters</span>
              </div>
              <p className="text-cream-200 leading-relaxed">{selectedHero?.why}</p>
            </div>
          </DialogHeader>

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
