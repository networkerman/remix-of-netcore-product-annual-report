import { motion } from "framer-motion";
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
type ProductTag = "Netcore CE" | "Netcore Unbxd" | "CPaaS";

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
  story?: HeroStorySection[];
  tags?: ProductTag[];
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

// Product Hero Stories (HeroStorySection format for dialog popup)
const affinitiesPropensitiesStory: HeroStorySection[] = [
  {
    heading: "Predictive Personalization at Scale",
    content:
      "Affinities and Propensities enables marketers to understand not just what users have done, but what they're likely to do next—unlocking a new layer of predictive personalization.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "More relevant personalization across channels",
      "Better targeting using predictive signals",
      "Reduced wasted impressions on unlikely converters",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "Affinity modeling across behaviors",
      "Propensity scoring for key actions",
      "Activation-ready outputs for campaigns",
    ],
  },
];

const insightAgentStory: HeroStorySection[] = [
  {
    heading: "Analysis That Drives Action",
    content:
      "Insight Agent transforms raw data into actionable insights, automatically surfacing anomalies, performance shifts, and impact attribution—so teams can focus on decisions, not dashboards.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "Faster identification of anomalies and performance shifts",
      "Stronger, insight-led QBRs and customer conversations",
      "Reduced time spent on manual data analysis",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "Automated insight detection",
      "Impact attribution across campaigns and journeys",
      "CSM-ready views for customer storytelling",
    ],
  },
];

const journeyPathOptimizerStory: HeroStorySection[] = [
  {
    heading: "Optimizing the Paths That Matter",
    content:
      "Journey Path Optimiser eliminates guesswork in journey design by analyzing real user paths and identifying which sequences drive the highest impact outcomes.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "Clear visibility into high-performing journey paths",
      "Better optimization decisions backed by data",
      "Continuous improvement without manual A/B testing overhead",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "Path analysis and comparison logic",
      "Optimization rules based on real outcomes",
      "Continuous performance feedback loops",
    ],
  },
];

const shoppingAgentStory: HeroStorySection[] = [
  {
    heading: "Intent-Driven Shopping Guidance",
    content:
      "Shopping Agent guides shoppers in real time based on their intent, reducing friction and improving conversion quality in high-consideration purchase journeys.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "Improved engagement in discovery-heavy shopping flows",
      "Higher quality conversions driven by intent alignment",
      "Reduced cart abandonment through contextual assistance",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "Real-time intent understanding",
      "Conversational guidance during browsing",
      "Context-aware product recommendations",
    ],
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
        title: "Affinities and Propensities",
        month: "August 2025",
        heroLabel: "Predictive Signals",
        why: "Enables predictive personalization by modeling user intent and likelihood to act across channels at scale.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "Feature Overview", url: "#" },
          { label: "Data Inputs & Outputs", url: "#" },
        ],
        story: affinitiesPropensitiesStory,
        tags: ["Netcore CE"],
      },
      {
        title: "Insight Agent",
        month: "April 2025",
        heroLabel: "Smart Analysis",
        why: "Turns campaign performance into clear, actionable insights by explaining why results happen across channels, helping teams spot trends, diagnose gaps, and optimize faster without manual analysis.",
        links: [
          { label: "Documentation", url: "#" },
          { label: "Use Cases", url: "#" },
          { label: "QBR Enablement Guide", url: "#" },
        ],
        story: insightAgentStory,
        tags: ["Netcore CE"],
      },
      {
        title: "Journey Path Optimiser",
        month: "July 2025",
        heroLabel: "Path Intelligence",
        why: "Removes manual A/B testing from journey design by automatically routing users to the best-performing path in real time—driving higher clicks or conversions with less effort and faster optimization.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/journey-path-optimizer-ai-based-variant-routing" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/journey-path-optimizer" },
          { label: "FAQs", url: "https://cedocs.netcorecloud.com/docs/journey-path-optimizer#troubleshooting--faqs" },
        ],
        story: journeyPathOptimizerStory,
        tags: ["Netcore CE"],
      },
      {
        title: "Shopping Agent",
        month: "May 2025",
        heroLabel: "Intent Guidance",
        why: "Transforms on-site discovery into a guided, conversational experience by helping shoppers find the right products faster, driving higher engagement and conversions while reducing reliance on manual support.",
        links: [
          { label: "Documentation", url: "https://docs.netcoreunbxd.com/docs/shopping-assistant" },
          { label: "Feature Overview", url: "https://docs.netcoreunbxd.com/docs/search-preview" },
        ],
        story: shoppingAgentStory,
        tags: ["Netcore Unbxd"],
      },
      {
        title: "Analytics",
        month: "2025",
        why: "Brings critical metrics into one shared, customizable view, helping teams track performance faster, align on insights, and make decisions without jumping across multiple analytics modules.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/introducing-events-analytics-in-behavior-dashboard-2" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/analytics" },
          { label: "Use Case: Pepe Jeans", url: "https://docs.google.com/presentation/d/1bCsOv0dtyABHgkm-xwRY-2H4z4udVCpDT0TTPVbax2M/edit?slide=id.p1#slide=id.p1" },
          { label: "Use Case: Plum Goodness", url: "https://docs.google.com/presentation/d/1CGOP9PXNHRbOz5bQU9uONHKm27WTbilIUHeLxgDMaEU/edit?slide=id.p1#slide=id.p1" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "Addressable Anonymous",
        month: "2025",
        why: "Enables early personalization by capturing and enriching anonymous user activity upfront, so teams can engage users sooner and seamlessly convert them into known profiles when they identify themselves.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/addressable-anonymous-a-game-changer-for-your-customer-engagement" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/addressable-anonymous" },
          { label: "Use Cases", url: "https://cedocs.netcorecloud.com/docs/addressable-anonymous#use-cases" },
          { label: "FAQs", url: "https://cedocs.netcorecloud.com/docs/addressable-anonymous#faqs" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "WhatsApp UCE",
        month: "2025",
        why: "Accelerates WhatsApp campaign creation with a more flexible, personalized content editor—helping teams launch richer messages faster while gaining better visibility into engagement and performance.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/uce-2-unified-content-editor-for-whatsapp" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/whatsapp-template" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "App Engagement and Personalisation",
        month: "2025",
        why: "Enables real-time, native in-app personalization without intrusive pop-ups—helping marketers deliver relevant experiences, measure uplift accurately, and drive higher engagement directly within the app.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/app-content-personalization" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/app-content-personalization" },
          { label: "Use Case", url: "https://docs.google.com/presentation/d/1OZ0aJv1qsHhxhOoMXg3Jx-l9DnZXNgA0fk8Gh5Jxblo/edit?slide=id.g37b23aedcfc_2_75#slide=id.g37b23aedcfc_2_75" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "Multi Store",
        month: "2025",
        why: "Simplifies multi-store search by retrieving and filtering products across locations in a single API call—reducing integration complexity while delivering accurate, store-specific pricing and availability at scale.",
        links: [
          { label: "Documentation", url: "https://docs.netcoreunbxd.com/docs/multi-store-api" },
        ],
        tags: ["Netcore Unbxd"],
      },
      {
        title: "Product Recommendation on WhatsApp and APN",
        month: "2025",
        why: "Brings real-time, AI-powered product recommendations directly into WhatsApp and app push messages—boosting relevance, engagement, and conversions across both journeys and broadcasts with minimal setup.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/product-recommendations-in-app-push-notification" },
          { label: "Documentation: App Push", url: "https://cedocs.netcorecloud.com/docs/product-recommendation-in-app-push" },
          { label: "Documentation: WhatsApp", url: "https://cedocs.netcorecloud.com/docs/product-recommendations-in-whatsapp" },
          { label: "Unbxd Algorithms", url: "https://cedocs.netcorecloud.com/docs/product-recommendations-in-whatsapp#predefined-recommendation-algorithms" },
        ],
        tags: ["Netcore CE", "Netcore Unbxd"],
      },
      {
        title: "Product Catalogue Integration",
        month: "2025",
        why: "Keeps product data accurate, enriched, and always in sync across channels—so marketers can power personalization, triggers, and product-led campaigns without manual updates or inconsistencies.",
        links: [
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/catalog" },
          { label: "FAQs", url: "https://cedocs.netcorecloud.com/docs/product-catalog-faqs" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "Product Picker",
        month: "2025",
        why: "Makes product-led emails easier and safer to run by enabling static and real-time product insertion—ensuring up-to-date recommendations, preventing out-of-stock errors, and driving more relevant engagement across campaigns and journeys.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/rocket-big-news-dynamic-and-static-product-picker-now-available" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "Egress",
        month: "2025",
        why: "Gives data teams full control over event-level data by exporting clean, transformed, and scheduled datasets to S3—enabling deeper analysis, compliance, and seamless integration with downstream analytics and CRM systems.",
        links: [
          { label: "Documentation", url: "#" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "Segment on Segment",
        month: "2025",
        why: "Speeds up audience creation by letting teams reuse and refine existing segments—ensuring faster setup, better control, and more accurate targeting for campaigns.",
        links: [
          { label: "Documentation", url: "#" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "WhatsApp Retry Logic",
        month: "2025",
        why: "Improves WhatsApp message reliability by retrying failed deliveries—helping teams reduce drop-offs, maintain reach during transient failures, and control behavior through backend toggles when needed.",
        links: [
          { label: "Documentation", url: "#" },
        ],
        tags: ["CPaaS"],
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
                  {section.heroes.map((hero, heroIndex) => {
                    const isDocumentation = section.function === "Documentation";
                    const isClickable = isDocumentation && hero.story;
                    
                    return (
                      <motion.div
                        key={heroIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: heroIndex * 0.1 }}
                        className={`group relative flex-shrink-0 snap-start w-80 ${isClickable ? "cursor-pointer" : ""}`}
                        onClick={() => {
                          if (isClickable) {
                            setSelectedHero(hero);
                          }
                        }}
                      >
                        {/* Card */}
                        <div className="relative h-full rounded-2xl overflow-hidden">
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                          
                          {/* Hover Overlay for Documentation Story Cards Only */}
                          {isDocumentation && hero.story && (
                            <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center rounded-2xl">
                              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-navy-900 font-semibold text-sm">
                                <Eye size={18} />
                                <span>VIEW FULL STORY</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Content */}
                          <div className="relative p-6 h-full flex flex-col bg-navy-800/80 backdrop-blur-sm border border-cream-100/10 rounded-2xl min-h-[360px]">
                            {/* Hero Label / Tags */}
                            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                              <div className="flex items-center gap-2 flex-wrap">
                                {section.function === "Product" && hero.tags && hero.tags.length > 0 ? (
                                  hero.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                                        tag === "Netcore CE"
                                          ? "bg-gradient-to-r from-teal-500 to-teal-600 text-navy-900"
                                          : tag === "Netcore Unbxd"
                                          ? "bg-gradient-to-r from-coral-400 to-coral-500 text-navy-900"
                                          : "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
                                      }`}
                                    >
                                      {tag}
                                    </span>
                                  ))
                                ) : hero.heroLabel ? (
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
