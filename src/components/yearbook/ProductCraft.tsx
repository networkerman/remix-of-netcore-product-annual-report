import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Lightbulb, Palette, FileText, Sparkles, Award, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface Story {
  title: string;
  preview: string;
  content: string;
}

interface CraftSection {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  stories: Story[];
}

const craftSections: CraftSection[] = [
  {
    id: "product",
    icon: Lightbulb,
    title: "Product Decisions",
    description: "The strategic choices that transformed Analytics",
    color: "teal",
    stories: [
      {
        title: "When Specs Took a Backseat",
        preview: "We stopped writing specs. And started watching users.",
        content: `At the beginning of the year, we made a quiet but radical move.

We stopped writing specs.
And started watching users.

Instead of debating requirements in documents, Product Managers joined live demos, customer evaluations, and real conversations. They watched where users paused, where they clicked, where they got confused—and where insights actually clicked.

This wasn't about speed.
It was about clarity.

Because if we were going to rebuild Analytics, we wanted to rebuild it right.`,
      },
      {
        title: "Act II: Choosing to Be Late (and Better)",
        preview: "We chose to rebuild Analytics from the ground up.",
        content: `Patching the existing system would've been faster.
But it wouldn't have solved the real problem.

So we chose to rebuild Analytics from the ground up.

That decision led to the formation of the Analytics Pod—a focused team with one goal: turn analytics into a decision-making engine, not a reporting layer.

This is where Funnel and RFM emerged as hero capabilities:

• Funnel designed for drill-down and actionability, not just visibility
• RFM built to show movement, transitions, and intent—not static labels`,
      },
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "Design Evolution",
    description: "Reducing cognitive load without losing depth",
    color: "coral",
    stories: [
      {
        title: "Act IV: Design Tames the Complexity",
        preview: "Analytics had data. What it needed was clarity.",
        content: `Analytics has no shortage of data. What it needed was clarity.

Design partnered early with Product to ask:

• Does this view guide action?
• Can a marketer understand this in seconds?
• Are we simplifying insight, not oversimplifying data?

Funnels became clearer and more intuitive.
RFM visuals started telling stories of loyalty, risk, and opportunity.
Complexity didn't disappear—but it finally made sense.`,
      },
      {
        title: "The Collaboration Model",
        preview: "Design shaped the how—reducing cognitive load without losing depth.",
        content: `This is where Analytics became a true team story.

Design shaped the how—reducing cognitive load without losing depth.

Working side-by-side with Product, every chart, every filter, every interaction was redesigned to surface insights faster.

The result? Analytics that marketers actually want to use, not just have to use.`,
      },
    ],
  },
  {
    id: "docs",
    icon: FileText,
    title: "Documentation",
    description: "Making advanced analytics self-serve and demo-ready",
    color: "accent",
    stories: [
      {
        title: "Documentation as an Adoption Lever",
        preview: "Docs enabled the scale—making advanced analytics easy to adopt.",
        content: `Documentation enabled the scale—making advanced analytics easy to adopt and explain.

Customers, Sales, and Solution Consultants could now understand and demonstrate advanced analytics without engineering support.

Every RFM segment, every Funnel step—documented with examples, screenshots, and use cases.`,
      },
      {
        title: "Making the Complex Simple",
        preview: "One page at a time, we made Analytics self-serve.",
        content: `Analytics wasn't just built for power users.

With comprehensive documentation, even first-time users could:
• Set up their first Funnel in minutes
• Understand RFM segments without a training session
• Build custom reports that actually answer their questions

Making the complex simple, one page at a time.`,
      },
    ],
  },
];

interface Highlight {
  text: string;
  link: string;
}

interface SpotlightProduct {
  product: string;
  tagline: string;
  story: string;
  highlights: Highlight[];
}

const spotlightProducts: SpotlightProduct[] = [
  {
    product: "CE Analytics",
    tagline: "From Insight to Action",
    story: "Analytics usage became habitual, not occasional. Hero capabilities led the adoption charge, transforming how marketers understand their audience.",
    highlights: [
      { text: "RFM: 50+ customers using", link: "https://cedocs.netcorecloud.com/docs/rfm" },
      { text: "Funnel: 30+ customers using", link: "https://cedocs.netcorecloud.com/docs/funnel-analytics" },
      { text: "Cohort: 10+ customers using", link: "https://cedocs.netcorecloud.com/docs/cohorts" },
    ],
  },
  {
    product: "CPaaS APIs",
    tagline: "Platform as a superpower",
    story: "APIs aren't just endpoints—they're promises. This year we delivered on the promise of letting developers build anything they imagine on our platform.",
    highlights: [
      { text: "99.99% uptime", link: "" },
      { text: "Sub-100ms latency", link: "" },
      { text: "10x throughput", link: "" },
    ],
  },
  {
    product: "Unbxd Shopify",
    tagline: "E-commerce, elevated",
    story: "The Shopify ecosystem is crowded. We carved out a space by focusing obsessively on search quality and personalization that actually converts.",
    highlights: [
      { text: "One-click install", link: "" },
      { text: "AI recommendations", link: "" },
      { text: "Real-time sync", link: "" },
    ],
  },
];

const colorVariants = {
  teal: "bg-teal-500/10 border-teal-500/30 text-teal-500",
  coral: "bg-coral-400/10 border-coral-400/30 text-coral-500",
  accent: "bg-accent/20 border-accent/40 text-amber-600",
};

const customerImpact = [
  {
    brand: "Pepe Jeans",
    impact: "Moved from broad targeting to precision journeys, improved conversion efficiency, and smarter repeat purchase strategies",
  },
  {
    brand: "Plum Goodness",
    impact: "1.4× uplift in repeat purchases and 1.7× uplift in revenue using RFM and cohort-driven insights",
  },
];

export function ProductCraft() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSection, setActiveSection] = useState("product");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

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
          <span className="caption text-primary mb-4 block">Behind the Build</span>
          <h2 className="section-heading text-foreground mb-6">The Stories Behind the Build</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            Behind every product win is a set of deliberate decisions. Here's how Product, Design, and Documentation came together to make them count.
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
          className="max-w-4xl mx-auto mb-16"
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
                onClick={() => setSelectedStory(story)}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group"
              >
                <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{story.title}</h4>
                <p className="text-foreground/70 leading-relaxed mb-4">{story.preview}</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  Read more <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Triangle & Impact - Act III & V */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto mb-24"
        >
          {/* Success Triangle Visual */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">The Success Triangle</h3>
            <p className="text-foreground/60 mb-10 max-w-xl mx-auto">
              Analytics succeeded because all three moved together. None worked in isolation.
            </p>
            
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-72">
                {/* SVG Triangle Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 288">
                  <path
                    d="M160 40 L60 240 L260 240 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground/20"
                    strokeDasharray="8 4"
                  />
                </svg>
                
                {/* Product - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-500 flex items-center justify-center mb-2 mx-auto">
                    <Lightbulb className="text-teal-500" size={24} />
                  </div>
                  <span className="font-bold text-teal-600">Product</span>
                  <p className="text-xs text-foreground/60">Strategy</p>
                </div>
                
                {/* Design - Bottom Left */}
                <div className="absolute bottom-0 left-0 text-center">
                  <div className="w-16 h-16 rounded-full bg-coral-400/20 border-2 border-coral-400 flex items-center justify-center mb-2 mx-auto">
                    <Palette className="text-coral-500" size={24} />
                  </div>
                  <span className="font-bold text-coral-600">Design</span>
                  <p className="text-xs text-foreground/60">Usability</p>
                </div>
                
                {/* Docs - Bottom Right */}
                <div className="absolute bottom-0 right-0 text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center mb-2 mx-auto">
                    <FileText className="text-amber-600" size={24} />
                  </div>
                  <span className="font-bold text-amber-700">Documentation</span>
                  <p className="text-xs text-foreground/60">Adoption</p>
                </div>
              </div>
            </div>
          </div>

          {/* NPS Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-r from-teal-500/10 to-coral-400/10 border border-foreground/10">
              <div className="text-4xl font-bold text-primary mb-2">1 → 10</div>
              <p className="text-foreground/70">Analytics NPS Score Improvement</p>
              <p className="text-sm text-foreground/50 mt-1">Now among the highest-rated modules on the platform</p>
            </div>
          </motion.div>

          {/* Customer Impact Table */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Customer Impact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {customerImpact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h4 className="font-bold text-lg text-foreground mb-3">{item.brand}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.impact}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MartecAI Award Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center px-10 py-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-amber-600/20 border-2 border-amber-500/40 shadow-lg">
              <Award className="text-amber-500 mb-3" size={40} />
              <span className="font-bold text-xl text-amber-700">MartecAI Award</span>
              <p className="text-amber-600/80 text-sm mt-1">Best Use of Analytics</p>
              <p className="text-amber-600/60 text-xs mt-2">Recognized with early adopter Pepe Jeans</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Adoption in Action (formerly Product Spotlights) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="text-primary" size={24} />
            <h3 className="text-2xl font-bold text-foreground">Adoption in Action</h3>
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

                  {/* Highlights with links */}
                  <div className="space-y-2">
                    {product.highlights.map((highlight, hIndex) => (
                      highlight.link ? (
                        <a
                          key={hIndex}
                          href={highlight.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-cream-200 hover:text-teal-400 transition-colors group/link"
                        >
                          <ArrowRight size={14} className="text-teal-400" />
                          {highlight.text}
                          <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <div key={hIndex} className="flex items-center gap-2 text-sm text-cream-200">
                          <ArrowRight size={14} className="text-teal-400" />
                          {highlight.text}
                        </div>
                      )
                    ))}
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-teal-500/10 blur-2xl group-hover:bg-teal-500/20 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Story Modal */}
      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-cream-100 border-foreground/10 p-0">
          <div className="px-8 pt-8 pb-10 md:px-12 md:pt-10 md:pb-12">
            {/* Visual Anchor Line */}
            <div className="w-12 h-1 bg-primary/60 rounded-full mb-8" />
            
            {/* Title - Chapter Heading Style */}
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8 leading-tight">
              {selectedStory?.title}
            </DialogTitle>
            
            {/* Content with Editorial Styling */}
            <div className="max-w-prose">
              {selectedStory?.content.split('\n\n').map((paragraph, pIndex) => {
                // Check if this is a bullet list
                if (paragraph.includes('• ')) {
                  const lines = paragraph.split('\n');
                  return (
                    <ul key={pIndex} className="my-8 space-y-4">
                      {lines.map((line, lIndex) => (
                        <li 
                          key={lIndex} 
                          className="flex items-start gap-3 text-foreground/70 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 flex-shrink-0" />
                          <span>{line.replace('• ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Check for key narrative moments (short impactful lines)
                const isKeyMoment = 
                  paragraph.startsWith('So we chose') ||
                  paragraph.startsWith('This is where') ||
                  paragraph.startsWith('The result?') ||
                  paragraph.startsWith('Design shaped the how') ||
                  (paragraph.startsWith('We stopped') && paragraph.includes('watching users')) ||
                  paragraph.startsWith('Complexity didn\'t disappear');
                
                if (isKeyMoment) {
                  return (
                    <p 
                      key={pIndex} 
                      className="my-10 text-lg md:text-xl font-medium text-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  );
                }
                
                // Regular paragraphs
                return (
                  <p 
                    key={pIndex} 
                    className="text-foreground/70 leading-[1.8] mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
            
            {/* Navigation Between Stories - Across All Acts */}
            {(() => {
              // Flatten all stories across all sections with their section info
              const allStories = craftSections.flatMap(section => 
                section.stories.map(story => ({ story, sectionId: section.id }))
              );
              const currentGlobalIndex = allStories.findIndex(item => item.story.title === selectedStory?.title);
              const prevItem = currentGlobalIndex > 0 ? allStories[currentGlobalIndex - 1] : null;
              const nextItem = currentGlobalIndex < allStories.length - 1 ? allStories[currentGlobalIndex + 1] : null;
              
              const handleNavigate = (item: { story: Story; sectionId: string } | null) => {
                if (item) {
                  setSelectedStory(item.story);
                  if (item.sectionId !== activeSection) {
                    setActiveSection(item.sectionId);
                  }
                }
              };
              
              return (
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-foreground/10">
                  <button
                    onClick={() => handleNavigate(prevItem)}
                    disabled={!prevItem}
                    className={`text-sm font-medium transition-colors ${
                      prevItem 
                        ? 'text-foreground/60 hover:text-primary cursor-pointer' 
                        : 'text-foreground/20 cursor-default'
                    }`}
                  >
                    ← Previous
                  </button>
                  <span className="text-foreground/30 text-sm">
                    {currentGlobalIndex + 1} of {allStories.length}
                  </span>
                  <button
                    onClick={() => handleNavigate(nextItem)}
                    disabled={!nextItem}
                    className={`text-sm font-medium transition-colors ${
                      nextItem 
                        ? 'text-foreground/60 hover:text-primary cursor-pointer' 
                        : 'text-foreground/20 cursor-default'
                    }`}
                  >
                    Next →
                  </button>
                </div>
              );
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
