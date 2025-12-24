import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Star, ChevronLeft, ChevronRight, BookOpen, Eye, Code, Play, Clock, Shield } from "lucide-react";
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
  subheading?: string;
  content?: string;
  bullets?: string[];
  isClosingLine?: boolean;
  metrics?: { icon: string; number: string; label: string[] }[];
  highlight?: boolean;
}

interface HeroItem {
  title: string;
  month: string;
  why: string;
  links: { label: string; url: string }[];
  heroLabel?: string;
  story?: HeroStorySection[];
  tags?: ProductTag[];
  displayTag?: string;
}

const documentationHeroStory: HeroStorySection[] = [
  {
    metrics: [
      { icon: "Code", number: "Launch", label: ["Launch CE v5 or CPaaS V6", "email API from docs."] },
      { icon: "Play", number: "Live", label: ["Test before you implement"] },
      { icon: "Clock", number: "Faster", label: ["Time to test first"] },
      { icon: "Shield", number: "Self-serve", label: ["Onboarding for testing,", "validation, and go-live"] },
    ],
  },
  {
    content: "API documentation for CPaaS: WhatsApp, RCS, and SMS is coming soon.",
    highlight: true,
  },
  {
    heading: "Interactive API Documentation",
    subheading: "Built for Developers to Use, Not Just Read",
  },
  {
    heading: "The Problem We Fixed",
    content:
      "Traditional API documentation forced developers to jump between tools—read specs in one place, test requests elsewhere, and debug responses manually. This slowed integrations and increased dependency on Support and Solutions teams.",
  },
  {
    heading: "What We Changed",
    content:
      "We introduced fully interactive API documentation for Email V5 and Email V6, transforming static references into a live development workspace.",
  },
  {
    content: "Developers can now:",
    bullets: [
      "Make real API calls directly from the docs",
      "Validate requests in real time",
      "Instantly view actual responses",
    ],
  },
  {
    content:
      "No context switching. No boilerplate setup. Just faster progress.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "Reduced time-to-first-success for Email API integrations",
      "Fewer back-and-forths with Support and Solutions teams",
      "Higher confidence during testing and go-live",
      "Documentation becomes a self-serve onboarding layer",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "Interactive API documentation for Email V5 and Email V6",
      "Live request execution with real responses",
      "Clear request and response visibility for faster debugging",
      "Flows aligned with real production workflows",
    ],
  },
  {
    heading: "Business Impact",
    content:
      "Interactive API docs improved developer experience, accelerated adoption, and strengthened platform trust—positioning documentation as a growth enabler rather than a support dependency.",
  },
  {
    heading: "What's Next",
    content:
      "Interactive API documentation for WhatsApp, RCS, and SMS is already in progress, extending the same developer-first experience across Netcore's CPaaS platform.",
  },
  {
    heading: "From reference docs to real development workflows.",
    isClosingLine: true,
  },
];

const unbxdDocsHeroStory: HeroStorySection[] = [
  {
    heading: "UNBXD Documentation Revamp",
    subheading: "A Docs Experience Built Around How Customers Actually Work",
  },
  {
    heading: "The Problem We Fixed",
    content:
      "Unbxd's earlier documentation lived on a legacy setup that slowed updates, limited fixes, and reduced discoverability. Content existed, but finding the right answer at the right moment was harder than it should be.",
  },
  {
    heading: "What We Changed",
    content:
      "We rebuilt the Unbxd documentation website from the ground up—moving from a system-led structure to a customer-thinking model. The new site mirrors how users actually work:",
    bullets: [
      "Search for answers",
      "Browse features and use cases",
      "Integrate APIs into real implementations",
    ],
  },
  {
    content:
      "The result is less friction, faster clarity, and documentation that moves at product speed.",
  },
  {
    heading: "Why This Matters",
    bullets: [
      "Faster access to Search, Browse, and API guidance",
      "Higher self-serve success for customers and partners",
      "Fewer repeat questions for Sales, CS, and Support",
      "Documentation that evolves in lockstep with the product",
    ],
  },
  {
    heading: "What We Shipped",
    bullets: [
      "A fully redesigned Unbxd documentation website",
      "Intent-led information architecture aligned to user workflows",
      "Clear module-level navigation and discoverability",
      "A flexible platform that supports continuous updates",
    ],
  },
  {
    heading: "Business Impact",
    content:
      "The revamp removed content bottlenecks, reduced dependency on manual walkthroughs, and strengthened customer trust—turning documentation into a reliable extension of the Unbxd product experience.",
  },
  {
    heading: "What's Next",
    content:
      "With the foundation in place, Unbxd documentation will continue to expand with deeper guides, richer API references, and tighter alignment with product releases—ensuring it scales with Unbxd's roadmap.",
  },
  {
    heading: "Built to scale. Built for customers. Built to last.",
    isClosingLine: true,
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
          { label: "Create Affinity-Based Segment", url: "https://cedocs.netcorecloud.com/docs/create-predictive-segment" },
          { label: "Propensity Based Segment", url: "https://cedocs.netcorecloud.com/docs/propensities-in-segmentation" },
          { label: "Success Story", url: "https://netcorecloud.com/success-story/tobi-achieves-94-x-surge-in-engagement-using-netcore-cloud/" },
          { label: "FAQs", url: "https://cedocs.netcorecloud.com/docs/audience-management-faqs" },
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
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/enable-insight-generator" },
          { label: "FAQs", url: "https://cedocs.netcorecloud.com/docs/insight-generator-faqs-troubleshooting" },
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
          { label: "Release Notes", url: "https://docs.netcoreunbxd.com/docs/whats-new-2025" },
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
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/product-picker" },
          { label: "Video", url: "https://cedocs.netcorecloud.com/docs/product-picker" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "Egress",
        month: "2025",
        why: "Gives data teams full control over event-level data by exporting clean, transformed, and scheduled datasets to S3—enabling deeper analysis, compliance, and seamless integration with downstream analytics and CRM systems.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/egress-data-transfer" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/egress-framework" },
          { label: "FAQs", url: "https://cedocs.netcorecloud.com/docs/reports-troubleshooting-faqs" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "Segment on Segment",
        month: "2025",
        why: "Speeds up audience creation by letting teams reuse and refine existing segments—ensuring faster setup, better control, and more accurate targeting for campaigns.",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/segment-on-segment-build-new-audiences-from-existing-segments-beta" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/segment-inclusion-exclusion" },
        ],
        tags: ["Netcore CE"],
      },
      {
        title: "WhatsApp Retry Logic",
        month: "2025",
        why: "Improves WhatsApp message reliability by retrying failed deliveries—helping teams reduce drop-offs, maintain reach during transient failures, and control behavior through backend toggles when needed.",
        links: [
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/whatsapp-retry-logic" },
        ],
        tags: ["CPaaS"],
      },
      {
        title: "Variant Locking",
        month: "2025",
        why: "Gives merchants precise control over which product variant shoppers see first—aligning category pages with campaign goals, improving merchandising consistency, and driving better engagement without manual rework.",
        links: [
          { label: "Release Notes", url: "https://docs.netcoreunbxd.com/docs/october-november#product-display-with-variant-locking" },
          { label: "Documentation", url: "https://docs.netcoreunbxd.com/docs/variant-locking#" },
          { label: "FAQs", url: "https://docs.netcoreunbxd.com/docs/variant-locking#faqs-and-troubleshooting" },
        ],
        tags: ["Netcore Unbxd"],
      },
    ],
  },
  {
    function: "Design" as SectionType,
    icon: "🎨",
    gradient: "from-coral-400 to-coral-500",
    heroes: [
      {
        title: "Analytics",
        month: "2025",
        heroLabel: "Unified Insights",
        why: "Upgraded to version design 1.5",
        links: [
          { label: "Release Notes", url: "https://updates.netcorecloud.com/changelog/reports-and-analytics-now-lets-you-see-all-the-tabs-in-the-side-navigation" },
          { label: "Documentation", url: "https://cedocs.netcorecloud.com/docs/getting-started-with-analytics" },
          { label: "Use Case: Pepe Jeans", url: "https://docs.google.com/presentation/d/1K1PYKsqyOZBK1Xq9sGDpS-RqPwCGNuXPQqvKPCYL-dQ/edit?slide=id.g37b23aedcfc_2_75#slide=id.g37b23aedcfc_2_75" },
          { label: "Use Case: Plum Goodness", url: "https://docs.google.com/presentation/d/1OZ0aJv1qsHhxhOoMXg3Jx-l9DnZXNgA0fk8Gh5Jxblo/edit?slide=id.g37b23aedcfc_2_75#slide=id.g37b23aedcfc_2_75" },
        ],
        tags: ["Netcore CE"],
      },
    ],
  },
  {
    function: "Documentation" as SectionType,
    icon: "📚",
    gradient: "from-accent to-amber-500",
    heroes: [
      {
        title: "Developer Dashboard",
        month: "2025",
        heroLabel: "API-fication",
        displayTag: "API-fication",
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
          { label: "Unbxd Documentation", url: "https://docs.netcoreunbxd.com/docs/getting-started" },
          { label: "Search Documents", url: "https://docs.netcoreunbxd.com/docs/introducing-unbxd-search" },
          { label: "Browse Documents", url: "https://docs.netcoreunbxd.com/docs/introducing-browse" },
          { label: "Recommendation Documents", url: "https://docs.netcoreunbxd.com/docs/introducing-recommendations" },
          { label: "API Reference", url: "https://docs.netcoreunbxd.com/docs/api-integration" },
        ],
        story: unbxdDocsHeroStory,
      },
      {
        title: "Hero Documents",
        month: "2025",
        heroLabel: "Knowledge Hub",
        why: "Hero documents that close key knowledge gaps across setup, usage, and troubleshooting.",
        links: [
          { label: "Netcore CE API v5", url: "https://developer.netcorecloud.com/reference/getting-started" },
          { label: "Netcore Platform Security", url: "https://cedocs.netcorecloud.com/docs/netcore-security" },
          { label: "App Content Personalization", url: "https://cedocs.netcorecloud.com/docs/app-content-personalization" },
          { label: "CE Reports", url: "https://cedocs.netcorecloud.com/docs/reports" },
          { label: "Addressable Anonymous", url: "https://cedocs.netcorecloud.com/docs/addressable-anonymous" },
          { label: "Shopify (Netcore Unbxd)", url: "https://docs.netcoreunbxd.com/docs/shopify" },
          { label: "WhatsApp Template Media: Sizing Guide", url: "https://cedocs.netcorecloud.com/docs/what-is-the-right-image-size-for-a-whatsapp-template-message" },
          { label: "Two Factor Authentication (Netcore Unbxd)", url: "https://docs.netcoreunbxd.com/docs/two-factor-authentication" },
          { label: "Campaign Insight Agent", url: "https://cedocs.netcorecloud.com/docs/campaign-insight-generator" },
          { label: "WhatsApp Template Guidelines", url: "https://cedocs.netcorecloud.com/docs/whatsapp-guidelines" },
        ],
      },
      {
        title: "Hero Videos",
        month: "2025",
        heroLabel: "From Clicks to Clarity",
        why: "Short, task-focused videos break down complex workflows into clear, actionable steps, helping users onboard faster, configure features correctly, and move from learning to execution with confidence.",
        links: [
          { label: "App Content Personalization Video", url: "https://cedocs.netcorecloud.com/docs/app-content-personalization#video-tutorial" },
          { label: "Product Picker Video", url: "https://cedocs.netcorecloud.com/docs/addressable-anonymous" },
          { label: "Add Email Domain Video", url: "https://cedocs.netcorecloud.com/docs/add-email-domain" },
          { label: "Product Catalog Video", url: "https://cedocs.netcorecloud.com/docs/product-catalog" },
          { label: "Two Factor Authentication Video", url: "https://docs.netcoreunbxd.com/docs/two-factor-authentication#video-tutorial" },
          { label: "Amazon S3 Video", url: "https://cedocs.netcorecloud.com/docs/integrate-netcore-in-amazon-s3" },
          { label: "Co-marketer: Template Designer Video", url: "https://cedocs.netcorecloud.com/docs/co-marketer-template-generator#video-tutorial-1" },
          { label: "In-app Templates Video", url: "https://cedocs.netcorecloud.com/docs/create-in-app-campaign-with-unified-content-editor-diy#video-tutorial" },
          { label: "Data Export Requests Video", url: "https://cedocs.netcorecloud.com/docs/how-to-add-or-modify-email-and-mobile-information-for-data-export-requests#video-tutorial" },
          { label: "Web Personalization Use Case Video", url: "https://cedocs.netcorecloud.com/docs/website-content-personalization#video-tutorial" },
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
                                ) : hero.displayTag ? (
                                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-semibold">
                                    {hero.displayTag}
                                  </span>
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

                            {/* Links - hidden for Hero Documents and Hero Videos */}
                            {hero.title !== "Hero Documents" && hero.title !== "Hero Videos" && (
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
                            )}
                            
                            {/* Expand prompt for Hero Documents and Hero Videos */}
                            {(hero.title === "Hero Documents" || hero.title === "Hero Videos") && (
                              <div className="pt-4 border-t border-cream-100/10">
                                <button
                                  onClick={() => setSelectedHero(hero)}
                                  className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                                >
                                  <Eye size={14} />
                                  <span>Click to view all links</span>
                                </button>
                              </div>
                            )}
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
                {selectedHero.story.map((section, index) => {
                  const iconMap: Record<string, React.ElementType> = {
                    Code: Code,
                    Play: Play,
                    Clock: Clock,
                    Shield: Shield,
                  };
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={section.isClosingLine ? "mt-8 pt-6 border-t border-cream-100/10" : ""}
                    >
                      {/* Metrics Strip */}
                      {section.metrics && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gradient-to-br from-teal-900/20 to-accent/10 rounded-xl border border-cream-100/10">
                          {section.metrics.map((metric, metricIndex) => {
                            const IconComponent = iconMap[metric.icon];
                            return (
                              <div
                                key={metricIndex}
                                className={`flex flex-col items-center text-center ${
                                  metricIndex < section.metrics!.length - 1 ? "md:border-r md:border-cream-100/10" : ""
                                }`}
                              >
                                {IconComponent && (
                                  <IconComponent className="w-6 h-6 text-teal-400 mb-2" />
                                )}
                                <span className="text-2xl md:text-3xl font-bold text-cream-100 mb-1">
                                  {metric.number}
                                </span>
                                <div className="text-xs text-cream-300/60 leading-tight">
                                  {metric.label.map((line, lineIndex) => (
                                    <div key={lineIndex}>{line}</div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      
                      {section.heading && !section.isClosingLine && (
                        <h4 className="text-xl font-bold text-cream-100 mb-3">
                          {section.heading}
                        </h4>
                      )}
                      {section.isClosingLine && section.heading && (
                        <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-accent text-center">
                          {section.heading}
                        </p>
                      )}
                      {section.subheading && (
                        <p className="text-cream-300/60 text-sm mb-6">
                          {section.subheading}
                        </p>
                      )}
                      {section.content && (
                        <p className={`leading-relaxed mb-4 ${
                          section.highlight 
                            ? "text-teal-400 font-semibold italic" 
                            : "text-cream-300/80"
                        }`}>
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
                  );
                })}
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
