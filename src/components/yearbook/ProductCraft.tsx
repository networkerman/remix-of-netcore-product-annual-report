import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Lightbulb, Palette, FileText, Sparkles, Award, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import pepeJeansLogo from "@/assets/brands/pepe-jeans-logo.png";
import plumGoodnessLogo from "@/assets/brands/plum-goodness-logo.webp";

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
        title: "Choosing to Be Late (and Better)",
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
        title: "Design Tames the Complexity",
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
    product: "RFM",
    tagline: "RFM",
    story: "RFM became the foundation for 50+ retention and lifecycle strategies, helping teams identify loyal, at-risk, and high-value customers with clarity.",
    highlights: [
      { text: "50+ customers actively using RFM", link: "https://cedocs.netcorecloud.com/docs/rfm" },
    ],
  },
  {
    product: "Funnel",
    tagline: "Funnel",
    story: "Funnels enabled teams to move beyond surface metrics by identifying drop-offs, understanding conversion friction, and acting on insights.",
    highlights: [
      { text: "30+ customers actively using Funnels", link: "https://cedocs.netcorecloud.com/docs/funnel-analytics" },
    ],
  },
  {
    product: "Cohort",
    tagline: "Cohort",
    story: "Cohort analysis helped teams track behavior over time, compare user groups, and measure long-term engagement and retention patterns.",
    highlights: [
      { text: "10+ customers actively using Cohorts", link: "https://cedocs.netcorecloud.com/docs/cohorts" },
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

        {/* NPS Callout - Celebratory Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 via-primary/10 to-coral-400/20 blur-xl scale-110" />
              
              {/* Main badge container */}
              <div className="relative px-12 py-10 rounded-3xl bg-gradient-to-br from-cream-50 to-cream-100 border-2 border-primary/20 shadow-xl">
                {/* Decorative corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
                
                {/* Primary metric with directional flow */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-foreground/40">1</span>
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-foreground/20 to-primary/60 rounded-full" />
                    <div className="w-3 h-3 border-t-2 border-r-2 border-primary rotate-45 -ml-1" />
                  </div>
                  <span className="text-5xl md:text-6xl font-black text-primary">10</span>
                </div>
                
                {/* Label */}
                <p className="font-semibold text-foreground/80 text-lg mb-2">Analytics NPS Score Improvement</p>
                
                {/* Subtle divider */}
                <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-3 rounded-full" />
                
                {/* Context line */}
                <p className="text-sm text-foreground/60 italic">Now among the highest-rated modules on the platform</p>
              </div>
            </div>
          </motion.div>

          {/* Customer Impact Section */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">Customer Impact</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Pepe Jeans Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-10 flex items-center">
                    <img src={pepeJeansLogo} alt="Pepe Jeans" className="h-8 w-auto object-contain" />
                  </div>
                </div>
                
                {/* Outcome Headline */}
                <p className="font-semibold text-primary text-base mb-4">
                  From broad targeting to precision journeys
                </p>
                
                {/* Divider */}
                <div className="w-full h-px bg-border mb-4" />
                
                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                  Shifted from mass campaigns to data-driven precision, improving conversion efficiency with smarter repeat purchase strategies.
                </p>
                
                {/* Impact Highlight */}
                <div className="px-4 py-3 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <p className="text-sm font-medium text-teal-700">
                    ✦ Recognized as MartecAI early adopter
                  </p>
                </div>
              </motion.div>

              {/* Plum Goodness Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-10 flex items-center">
                    <img src={plumGoodnessLogo} alt="Plum Goodness" className="h-8 w-auto object-contain" />
                  </div>
                </div>
                
                {/* Outcome Headline */}
                <p className="font-semibold text-primary text-base mb-4">
                  RFM and cohort-driven growth
                </p>
                
                {/* Divider */}
                <div className="w-full h-px bg-border mb-4" />
                
                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                  Leveraged RFM segmentation and cohort analysis to identify high-value customers and optimize retention campaigns.
                </p>
                
                {/* Impact Highlight */}
                <div className="px-4 py-3 rounded-xl bg-coral-400/10 border border-coral-400/20">
                  <p className="text-sm font-medium text-coral-600">
                    ✦ 1.4× repeat purchases · 1.7× revenue uplift
                  </p>
                </div>
              </motion.div>
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
