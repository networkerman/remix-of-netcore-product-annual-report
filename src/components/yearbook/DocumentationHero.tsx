import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award } from "lucide-react";
import { HeroBlock } from "./HeroBlock";

const documentationHeroData = {
  month: "July 2025",
  heroLabel: "Documentation Hero",
  title: "Docs That Execute, Not Just Explain",
  subtitle:
    "An interactive APIfication documentation experience that helps developers test, debug, and go live faster.",
  highlight:
    "Interactive API documentation that lets developers test endpoints without leaving the page.",
  links: [
    { label: "API Reference", url: "#" },
    { label: "Quick Start Guide", url: "#" },
    { label: "Video Walkthrough", url: "#" },
  ],
  story: [
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
  ],
};

export function DocumentationHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="documentation-hero"
      ref={ref}
      className="py-24 md:py-32 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-accent" size={28} />
          </div>
          <span className="caption text-accent mb-4 block">Featured Hero</span>
          <h2 className="section-heading mb-4">Documentation Team</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            Transforming how developers interact with Netcore APIs
          </p>
        </motion.div>

        {/* Hero Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <HeroBlock
            {...documentationHeroData}
            gradient="from-accent to-amber-500"
            icon={<BookOpen size={16} />}
          />
        </motion.div>
      </div>
    </section>
  );
}
