import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, Rocket, AlertCircle, Wrench, TrendingUp, Lightbulb, X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Intern images
import parthImg from "@/assets/team/interns/parth.png";
import dhairyaImg from "@/assets/team/interns/dhairya.png";
import kushImg from "@/assets/team/interns/kush.png";
import tanishqImg from "@/assets/team/interns/tanishq.png";
import hardikyaImg from "@/assets/team/interns/hardikya.png";

// Leader images
import yogeshImg from "@/assets/team/leaders/yogesh.png";
import satishImg from "@/assets/team/leaders/satish.png";

import jibranImg from "@/assets/team/leaders/jibran.png";
import kiritImg from "@/assets/team/leaders/kirit.png";

// Life in Product Team images - new photos
import lifeImg1 from "@/assets/team/life/team-event.jpg";
import lifeImg2 from "@/assets/team/life/sports-night.jpg";
import lifeImg3 from "@/assets/team/life/festival-celebration.jpg";
import lifeImg4 from "@/assets/team/life/team-dinner.jpg";
import lifeImg5 from "@/assets/team/life/annual-day.jpg";
import lifeImg6 from "@/assets/team/life/office-festive.jpg";

// Scrapbook captions in order - mapped to photo sequence
const scrapbookCaptions = [
  "Teams that celebrate together, stay together.",
  "A little competition, a lot of team spirit.",
  "Same people, different backdrop.",
  "Some ideas started here.",
  "Not everything had a deadline.",
  "Good days, great people.",
];

// Product Leaders data
interface ProductLeader {
  id: string;
  name: string;
  title: string;
  image: string;
  emoji: string;
  headline: string;
  teaserQuote: string;
  questions: { question: string; answer: string }[];
}

const productLeaders: ProductLeader[] = [
  {
    id: "yogesh",
    name: "Yogesh",
    title: "Vice President - Product",
    image: yogeshImg,
    emoji: "🧠",
    headline: "Reaching Users Earlier",
    teaserQuote: "The product moved from reacting to later-stage needs to proactively addressing user intent.",
    questions: [
      {
        question: "What product shift this year helped you reach users earlier in their journey than before?",
        answer: "This year, I worked closely with business leaders to shape the strategic roadmap earlier than before. By clearly defining target segments, core personas, and expected business growth upfront, we aligned the product roadmap much earlier in the user journey.\n\nThis shift helped us:\n• Focus on the right problems from the start\n• Avoid optimizing only downstream use cases\n• Support users earlier with more relevant capabilities\n\nAs a result, the product moved from reacting to later-stage needs to proactively addressing user intent much earlier in the lifecycle.",
      },
      {
        question: "How did your work change who marketers could engage—and when they could engage them?",
        answer: "With the launch of Addressable Anonymous, we expanded marketing reach by enabling engagement with users earlier in the lifecycle, even before they were known.\n\nThis change:\n• Increased the overall addressable audience\n• Moved engagement earlier by multiple lifecycle stages\n• Enabled better use of early intent signals\n\nThe outcome was improved timing of engagement, higher reachable user volume, and stronger impact across activation and conversion funnels.",
      },
      {
        question: "What moment or pattern of feedback made it clear this feature was resonating across teams?",
        answer: "Validation came through a combination of strong signals:\n• Rapid adoption within the first few days of launch\n• Repeat usage by key customers\n• Positive feedback across marketing, sales, and customer success teams\n\nWhat stood out was consistency. Different teams independently highlighted the same value—earlier reach and increased addressability. That alignment made it clear the feature was resonating beyond a single use case or function.",
      },
      {
        question: "How did mentoring or supporting other PMs or team members shape your own growth this year?",
        answer: "Supporting other PMs helped me shift from execution-focused leadership to systems-level thinking. Through regular reviews, roadmap discussions, and feedback, I learned to ask better questions, delegate decisions, and trust teams with ownership.\n\nThis approach strengthened the PM team while also helping me operate at a higher altitude—focusing more on long-term strategy and less on day-to-day execution.",
      },
      {
        question: "As you look ahead, which industry or use case will stretch the product most meaningfully next year?",
        answer: "AI-driven insights and positionless marketing will stretch the product most next year. As teams move toward models where fewer specialists execute and more marketers contribute strategically, the platform must reduce manual effort and act as a maker–checker.\n\nFor example:\n• Marketers design journeys using AI-recommended segments and messages\n• The system validates data readiness, logic, compliance, and impact\n\nThis shift will push the product from a workflow engine to an intelligent marketing system that enables confidence, efficiency, and scale.",
      },
    ],
  },
  {
    id: "satish",
    name: "Satish",
    title: "AVP - Product Management",
    image: satishImg,
    emoji: "🚀",
    headline: "Building Depth Over Breadth",
    teaserQuote: "The mistake isn't choosing short-term—it's pretending it doesn't have long-term cost.",
    questions: [
      {
        question: "What was your biggest focus area in 2025?",
        answer: "My primary focus was building depth over breadth—strengthening core capabilities like journey orchestration, experimentation, and app personalization so they scale reliably for large customers. Instead of chasing many features, the goal was to make fewer things truly robust, usable, and measurable.",
      },
      {
        question: "What was the toughest stakeholder challenge you handled in 2025?",
        answer: "Balancing speed with correctness across sales, customers, and engineering. Everyone wanted fast outcomes—but aligning on why we're building something, not just when, was key to earning trust on all sides.",
      },
      {
        question: "How do you stay calm when things go wrong?",
        answer: "By focusing on controllables. When issues arise, I prioritize bringing structure to chaos—defining the problem clearly, assigning ownership, and communicating transparently. Calm is less about personality and more about process.",
      },
      {
        question: "How did you manage trade-offs between short-term wins and long-term vision?",
        answer: "By explicitly labeling them. Once trade-offs are visible and acknowledged, teams align better. The mistake isn't choosing short-term—it's pretending it doesn't have long-term cost.",
      },
      {
        question: "What was the most underestimated part of product leadership in 2025?",
        answer: "Communication. Not just updates—but context setting. Repeating the 'why' consistently saved far more time than writing perfect specs.",
      },
    ],
  },
  {
    id: "jibran",
    name: "Jibran",
    title: "AVP - Product Management",
    image: jibranImg,
    emoji: "🔍",
    headline: "Building Cohesion at Scale",
    teaserQuote: "Identifying patterns helped us move beyond incremental fixes.",
    questions: [
      {
        question: "What ecommerce problems did we focus on in 2025?",
        answer: "In 2025, we focused on three persistent ecommerce challenges:\n• Discovery friction\n• Low conversion efficiency\n• Operational complexity at scale\n\nMerchants had access to multiple tools, but stitching them into consistent, measurable journeys was difficult. This fragmentation slowed execution and made it hard to understand what was driving results.\n\nThese issues surfaced repeatedly in merchant conversations and storefront reviews. Recognizing these patterns helped us move beyond incremental fixes and focus on foundational improvements across browsing, discovery, personalization, and conversion—across channels rather than in silos.",
      },
      {
        question: "What was our overall product strategy and platform direction?",
        answer: "Our strategy was to build a cohesive ecommerce platform where key capabilities worked together:\n• Catalog\n• Merchandising\n• Content\n• Personalization\n• Recommendations\n\nInstead of intelligence being locked into individual tools, we ensured it flowed across experiences. This platform-led approach helped merchants stay consistent while moving faster.\n\nThe goal was to reduce operational overhead and enable teams to create, reuse, and optimize product-led experiences across the browse–discover–convert journey with greater clarity and efficiency.",
      },
      {
        question: "What key customer insight influenced our decisions?",
        answer: "A recurring insight from merchants was the need for flexibility with guardrails. They wanted:\n• Control without complexity\n• Power without unpredictability\n\nThis insight shaped how we scoped and prioritized solutions. We emphasized sensible defaults, fallback mechanisms, and reuse across channels and campaign types.\n\nIn several cases, we simplified or re-scoped features after seeing how operationally heavy certain flows became in real-world usage. These decisions helped balance usability with capability.",
      },
      {
        question: "What leadership perspective shaped the year?",
        answer: "From a leadership perspective, we operated with a platform-owner mindset, prioritizing:\n• Long-term coherence\n• Clarity of intent\n• Sustainable execution\n\nWe invested time in clear problem framing, aligning on trade-offs, and setting teams up to execute with confidence rather than constant intervention.\n\nLooking ahead, this approach continues with a stronger focus on product thinking, mentoring upcoming PMs, and building systems that scale—both in platform capabilities and in the teams behind them.",
      },
    ],
  },
  {
    id: "kirit",
    name: "Kirit",
    title: "Head of Product Design",
    image: kiritImg,
    emoji: "🎨",
    headline: "Design in an AI-Driven Future",
    teaserQuote: "Design now emphasizes outcomes over actions.",
    questions: [
      {
        question: "How does the role of design evolve in an AI- and agent-driven Netcore?",
        answer: "As Netcore moves toward AI- and agent-driven engagement, design expands beyond crafting screens to shaping intelligent decision systems. The focus shifts to how AI agents reason, prioritize, and act—making complex decisions transparent, explainable, and aligned with marketer intent.\n\nDesign now emphasizes outcomes over actions. Instead of optimizing what users do, it helps users express what they want to achieve, while ensuring trust, control, and clarity in AI-led experiences. In this model, design orchestrates how intelligence is surfaced, how decisions are understood, and how confidence is built in autonomous systems.",
      },
      {
        question: "How should Netcore rethink dashboards, workflows, and interactions for an AI-first experience?",
        answer: "With AI agents proactively driving outcomes across Netcore products, traditional dashboards and static workflows give way to conversational and intent-based interactions. Rather than configuring rules and journeys, users collaborate with AI by defining goals, constraints, and guardrails.\n\nKey interaction shifts include:\n• Goal-driven prompts instead of complex setups\n• Real-time recommendations over static reports\n• Natural language controls in place of manual configuration\n• Clear, actionable explanations instead of opaque logic\n\nThis approach allows AI to continuously optimize in the background while users stay focused on outcomes rather than mechanics.",
      },
      {
        question: "How is the design team preparing for an agentic AI future across channels?",
        answer: "Netcore's design team is preparing for an agentic AI future by building systems that are channel-aware yet experience-consistent across Email, WhatsApp, SMS, and in-app journeys. The goal is to enable intelligence that adapts by channel without fragmenting the user experience.\n\nCore design principles guiding this shift include:\n• Outcome-centricity\n• Human-in-the-loop control\n• Transparency by default\n• Seamless cross-channel intelligence\n\nBy designing for trust, autonomy, and scale, Netcore aims to differentiate through experiences where AI feels less like a tool and more like a capable growth partner.",
      },
    ],
  },
];

interface InternCard {
  name: string;
  image: string | null;
  persona: string;
  role?: string;
  part1: {
    ohShitMoment: string;
    learningCurve: string;
    firstImpression: string;
    currentImpression: string;
  };
  part2: {
    jiraComparison: string;
    currentPower?: string;
    mythBusted: string;
  };
  part3: {
    internSong: string;
    apmSong: string;
    cultureEmojis: string;
  };
}

const internCards: InternCard[] = [
  {
    name: "Parth",
    image: parthImg,
    persona: "Tech Decoder",
    part1: {
      ohShitMoment: "My first few grooming calls — first with Jobin & Satish, and earlier with my then manager and devs — felt like I'd accidentally joined a foreign language class. Words like Flutter, SDKs, RAGs, pipelines, and events were being thrown around like everyone was born knowing them. My genuine thought was, \"I am wildly underqualified for this.\" But constant questioning, reading, and shameless curiosity slowly turned panic into clarity — and today, those once-scary terms are working concepts I throw around like muscle memory.",
      learningCurve: "If my internship were an AI model training phase, the biggest \"error\" I had to minimize was falling in love with ideas instead of problems. Early on, I assumed that if a feature sounded cool or intelligent, it must be worth building. Over time, I learned that novelty isn't a problem statement. Equally important was realizing that stakeholder expectations don't always match actual user behavior. Minimizing the gap between what people say they want and what they truly use—and making rational calls based on that insight, even when it meant dropping ideas I liked—became the real learning curve.",
      firstImpression: "Super intense, extremely smart, always-on-top-of-everything product nerds who somehow already had all the answers.",
      currentImpression: "Still super smart—but just as human. Ideas don't arrive fully formed; they get shaped through iterations, debates, and a lot of \"this might not work.\" Also confirmed they're definitely not nerds—that myth was busted very quickly after a few off-work hangouts 🍻",
    },
    part2: {
      jiraComparison: "You handle the Agentic AI stack now.",
      currentPower: "How would you explain your current power to your grandmother?",
      mythBusted: "One common myth about AI Product Management that you've realized is totally false.",
    },
    part3: {
      internSong: "Your \"Intern\" song/vibe",
      apmSong: "Your \"APM\" song/vibe",
      cultureEmojis: "🚀🧠💡",
    },
  },
  {
    name: "Dhairya",
    image: dhairyaImg,
    persona: "Design System Rebel",
    part1: {
      ohShitMoment: "I was shit scared of missing out on deadlines once I knew how many stakeholders are involved. I was also scared of doing something incredibly stupid - like triggering the fire alarm for example (which totally didn't happen btw). I didn't want to be called the fire guy.",
      learningCurve: "I kept adding new design components and deviated from our existing design system. I was nightmare for my manager for doing this.",
      firstImpression: "I thought these guys are pretty cool. LOUD, chatty though — but cool",
      currentImpression: "Still pretty cool.",
    },
    part2: {
      jiraComparison: "\"Wtf is going on???!!!!\" to \"Oh ok. Cool\"",
      mythBusted: "I want to laugh when people say \"Figma hi to banana hai. Shouldn't take much time no?\"",
    },
    part3: {
      internSong: "🤓",
      apmSong: "😎",
      cultureEmojis: "🌴💻🍺",
    },
  },
  {
    name: "Kush",
    image: kushImg,
    persona: "Strategic Nodder",
    part1: {
      ohShitMoment: "As an intern, I was absolutely terrified of joining client calls without a manager present — one wrong sentence felt like it could end with, \"Okay, let's pause this partnership.\" My first grooming session was equally stressful; I spent most of it decoding acronyms and nodding strategically while hoping no one asked me a follow-up question.",
      learningCurve: "The biggest error I had to minimize was assuming instead of confirming. I learned the hard way that \"I think everyone is aligned\" usually means \"no one is aligned.\" Clear communication, written context, and repeating the same thing in three different ways turned out to be far more effective than mind-reading.",
      firstImpression: "A terrifyingly smart group of ultra-techy product owners, constantly busy, casually throwing around jargon while managing a massive, complicated product universe.",
      currentImpression: "A group of super helpful, fun people who deeply care about customer journeys, to the point where a failed checkout feels less like a metric drop and more like a personal betrayal.",
    },
    part2: {
      jiraComparison: "From opening Jira and questioning my life choices, to actually understanding tickets, asking better questions, and occasionally closing them without breaking anything.",
      mythBusted: "That Product Managers write a lot of code or know everything — in reality, we mostly survive by asking uncomfortable questions, Googling efficiently, and pretending to be calm while making decisions with 70% information.",
    },
    part3: {
      internSong: "Khoon Choos Le, Mondays stay innocent!",
      apmSong: "Safarnama",
      cultureEmojis: "🎯🤝🚀",
    },
  },
  {
    name: "Tanishq",
    image: tanishqImg,
    persona: "Happy-Path Hunter",
    part1: {
      ohShitMoment: "I was terrified of leading groomings. For the first two weeks, I was honestly just trying to figure out what was even happening in those calls.",
      learningCurve: "Realizing the importance of covering all possible use cases before releasing a project, not just the happy path.",
      firstImpression: "Honestly, both are the same — fun, high-energy people with great communication skills who also know their stuff.",
      currentImpression: "Fun, high-energy people with great communication skills who also know their stuff.",
    },
    part2: {
      jiraComparison: "Day 1: Nervous to share ideas in meetings, Jira tickets required multiple iterations, and clarity came only after speaking with several stakeholders. Now: Much more confident in voicing ideas (at-least in most meetings) and thinking through impact areas before grooming and creating Jira tickets.",
      mythBusted: "PMs don't just \"have ideas\" — execution, alignment, and trade-offs make up most of the job.",
    },
    part3: {
      internSong: "Apna Time Aayega – Gully Boy",
      apmSong: "Zinda – Bhaag Milkha Bhaag",
      cultureEmojis: "💪🎯🔥",
    },
  },
  {
    name: "Hardikya",
    image: hardikyaImg,
    persona: "UX Guardian",
    part1: {
      ohShitMoment: "I was most terrified of overlooking a discrepancy during the UX verification process. I wanted to make sure everything was as close to the design as possible, so the thought of a UI inconsistency slipping through to production was my biggest fear.",
      learningCurve: "My biggest challenge was minimizing design inconsistency. I had to learn to stop 'reinventing the wheel' and instead master the existing component library to ensure every new feature felt like a native part of the product.",
      firstImpression: "The impression actually remained the same, the team seemed cool.",
      currentImpression: "Actually the team is pretty cool.",
    },
    part2: {
      jiraComparison: "The work evolved over time. In the initial days, it was more about understanding the product and the existing designs; now, it involves connecting with product and business stakeholders, understanding requirements, and crafting the UX.",
      mythBusted: "The only task is understanding requirements and creating the designs in Figma.",
    },
    part3: {
      internSong: "🎨",
      apmSong: "✨",
      cultureEmojis: "🎨🤝✨",
    },
  },
];

const cultureVersions = [
  {
    version: "V1.0",
    title: "Work Hard, Play Hard",
    oneLiner: "Shipped features by day, stories by night.",
    image: lifeImg1
  },
  {
    version: "V2.0",
    title: "Out of Office, Still Aligned",
    oneLiner: "Stand-ups paused. Team spirit upgraded.",
    image: lifeImg2
  },
  {
    version: "V3.0",
    title: "Culture Release",
    oneLiner: "Low-latency laughs, high-trust shipped.",
    image: lifeImg3
  },
  {
    version: "V4.0",
    title: "Team Sync IRL",
    oneLiner: "No agendas. Stronger alignment.",
    image: lifeImg4
  },
  {
    version: "V5.0",
    title: "Patch Notes: People Edition",
    oneLiner: "Bonding fixes applied. Morale improved.",
    image: lifeImg5
  },
  {
    version: "V6.0",
    title: "Culture, Scaled",
    oneLiner: "Shared wins. Stronger ownership.",
    image: lifeImg6
  }
];

// Life photos array for scrapbook
const lifePhotos = [lifeImg1, lifeImg2, lifeImg3, lifeImg4, lifeImg5, lifeImg6];

export function PMStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIntern, setSelectedIntern] = useState<InternCard | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedLeader, setSelectedLeader] = useState<ProductLeader | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Polaroid scatter state
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);
  const [photoPositions, setPhotoPositions] = useState<{x: number, y: number, rotation: number, zIndex: number}[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(10);
  const [isDragging, setIsDragging] = useState(false);

  // Generate zone-based positions for polaroids on mount
  useEffect(() => {
    // Create a grid of zones to scatter photos across the entire container
    const zones = [
      { xMin: 0, xMax: 18, yMin: 0, yMax: 25 },     // Top-left
      { xMin: 38, xMax: 55, yMin: 0, yMax: 20 },    // Top-center
      { xMin: 75, xMax: 92, yMin: 0, yMax: 25 },    // Top-right
      { xMin: 0, xMax: 18, yMin: 35, yMax: 55 },    // Middle-left
      { xMin: 40, xMax: 58, yMin: 30, yMax: 50 },   // Middle-center
      { xMin: 78, xMax: 95, yMin: 35, yMax: 55 },   // Middle-right
      { xMin: 0, xMax: 18, yMin: 70, yMax: 88 },    // Bottom-left
      { xMin: 38, xMax: 55, yMin: 75, yMax: 92 },   // Bottom-center
      { xMin: 75, xMax: 92, yMin: 70, yMax: 88 },   // Bottom-right
      { xMin: 20, xMax: 35, yMin: 15, yMax: 35 },   // Extra zone 1
      { xMin: 60, xMax: 75, yMin: 50, yMax: 70 },   // Extra zone 2
      { xMin: 18, xMax: 35, yMin: 55, yMax: 72 },   // Extra zone 3
    ];
    
    const positions = lifePhotos.map((_, index) => {
      const zone = zones[index % zones.length];
      return {
        x: zone.xMin + Math.random() * (zone.xMax - zone.xMin),
        y: zone.yMin + Math.random() * (zone.yMax - zone.yMin),
        rotation: Math.random() * 24 - 12,
        zIndex: index + 1
      };
    });
    setPhotoPositions(positions);
  }, []);

  const handlePolaroidDragStart = (index: number) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    setPhotoPositions(prev => prev.map((pos, i) => 
      i === index ? { ...pos, zIndex: newZIndex } : pos
    ));
  };


  // Handle leader card click
  const handleLeaderClick = (leader: ProductLeader) => {
    setSelectedLeader(leader);
    setCurrentQuestionIndex(0);
  };

  return (
    <section
      id="stories"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Floating Blob Animations */}
      <motion.div
        animate={{
          x: [0, 250, -200, 280, -150, 200, 0],
          y: [0, -200, 180, -120, 250, -180, 0],
          scale: [1, 1.06, 0.94, 1.05, 0.97, 1.03, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-300/20 via-transparent to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -200, 180, -250, 150, -180, 0],
          y: [0, 200, -150, 180, -200, 150, 0],
          scale: [1, 0.95, 1.04, 0.96, 1.05, 0.98, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-coral-300/15 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="caption text-primary mb-4 block">The Real Stories</span>
          <h2 className="section-heading text-foreground mb-6">Stories & Culture</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            The fun, the chaos, the late nights, and the wins. This is what it's really like 
            to be part of the Product team at Netcore.
          </p>
        </motion.div>

        {/* Product Leaders Speak */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="text-primary" size={24} />
            <h3 className="text-xl font-bold text-foreground">Product Leaders Speak</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {productLeaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => handleLeaderClick(leader)}
              >
                <div className="aspect-[3/4] rounded-2xl bg-card relative overflow-hidden border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Full-bleed image */}
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Fallback background */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-600/30 to-navy-600 -z-10" />

                  {/* Gradient overlay with content */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent h-1/2">
                    <h4 className="font-bold text-lg text-cream-100 mb-1">{leader.name}</h4>
                    <p className="text-teal-400/90 text-sm font-medium">{leader.title}</p>
                  </div>

                  {/* Hover CTA Overlay */}
                  <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-full text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View story
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leader Story Dialog */}
        <Dialog open={!!selectedLeader} onOpenChange={(open) => !open && setSelectedLeader(null)}>
          <DialogContent className="bg-navy-800 border-cream-100/10 text-cream-100 max-w-xl p-0 overflow-hidden">
            <DialogTitle className="sr-only">
              {selectedLeader?.name} — {selectedLeader?.title}
            </DialogTitle>

            {selectedLeader && (
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-navy-700/80 hover:bg-navy-600 transition-colors"
                >
                  <X size={18} className="text-cream-300" />
                </button>

                {/* Header with image */}
                <div className="p-6 pb-4 border-b border-cream-100/10 bg-gradient-to-br from-navy-700/50 to-navy-800">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500/40 flex-shrink-0">
                      <img
                        src={selectedLeader.image}
                        alt={selectedLeader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-cream-100">
                        {selectedLeader.name} — {selectedLeader.title}
                      </h3>
                      <p className="text-teal-400 text-sm">
                        In Conversation: {selectedLeader.headline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Q&A Content - One question at a time */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestionIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-coral-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                        Question {currentQuestionIndex + 1}
                      </p>
                      <h4 className="font-semibold text-lg text-cream-100 mb-4">
                        {selectedLeader.questions[currentQuestionIndex].question}
                      </h4>
                      <p className="text-cream-300/80 leading-relaxed whitespace-pre-line">
                        {selectedLeader.questions[currentQuestionIndex].answer}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-cream-100/10 bg-navy-800/50">
                  <button
                    onClick={() => setCurrentQuestionIndex((i) => i - 1)}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-1.5 text-cream-300 hover:text-cream-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </button>

                  <span className="text-cream-300/60 text-sm">
                    Question {currentQuestionIndex + 1} of {selectedLeader.questions.length}
                  </span>

                  <button
                    onClick={() => setCurrentQuestionIndex((i) => i + 1)}
                    disabled={currentQuestionIndex === selectedLeader.questions.length - 1}
                    className="flex items-center gap-1.5 text-cream-300 hover:text-cream-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>


        {/* Deployed to Production */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-foreground">Deployed to Production</h3>
            </div>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              A look at how our interns moved from first-day confusion to shipping with confidence in real production environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {internCards.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div 
                  className="aspect-[3/4] rounded-2xl bg-card relative overflow-hidden 
                    border border-border transition-all duration-300"
                >
                  {/* Full-bleed image or initial fallback */}
                  {intern.image ? (
                    <img 
                      src={intern.image} 
                      alt={intern.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-500 to-coral-400 flex items-center justify-center">
                      <span className="text-6xl font-bold text-cream-100/80">{intern.name.charAt(0)}</span>
                    </div>
                  )}
                  
                  {/* Fallback background for missing image */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-600/30 to-navy-600 -z-10" />
                  
                  {/* Gradient overlay with name & one-liner */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent h-1/2">
                    <h4 className="font-bold text-lg text-cream-100 mb-1">{intern.name}</h4>
                    <p className="text-teal-400/90 text-sm font-medium">{intern.persona}</p>
                    {intern.role && (
                      <p className="text-cream-300/60 text-xs">{intern.role}</p>
                    )}
                  </div>

                  {/* Hover CTA Overlay */}
                  <div 
                    onClick={() => setSelectedIntern(intern)}
                    className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-full text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View story
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Intern Modal */}
        <Dialog open={!!selectedIntern} onOpenChange={(open) => !open && setSelectedIntern(null)}>
          <DialogContent className="bg-navy-800 border-cream-100/10 text-cream-100 max-w-2xl p-0 overflow-hidden [&>button]:hidden">
            <DialogTitle className="sr-only">
              {selectedIntern?.name} - {selectedIntern?.persona}
            </DialogTitle>
            
            {selectedIntern && (
              <div className="relative max-h-[80vh] flex flex-col">
                {/* Close button - outside scrollable area */}
                <button
                  onClick={() => setSelectedIntern(null)}
                  className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-navy-700/80 hover:bg-navy-600 transition-colors"
                >
                  <X size={18} className="text-cream-300" />
                </button>

                {/* Sticky Header with image */}
                <div className="sticky top-0 z-10 p-6 pb-4 border-b border-cream-100/10 bg-gradient-to-br from-navy-700/50 to-navy-800">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500/40 flex-shrink-0 bg-gradient-to-br from-teal-500 to-coral-400 flex items-center justify-center">
                      {selectedIntern.image ? (
                        <img 
                          src={selectedIntern.image} 
                          alt={selectedIntern.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-cream-100">{selectedIntern.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-cream-100">{selectedIntern.name}</h3>
                      <p className="text-sm text-teal-400 font-medium">{selectedIntern.persona}</p>
                      {selectedIntern.role && (
                        <p className="text-xs text-cream-200">{selectedIntern.role}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-navy-900 [&::-webkit-scrollbar-thumb]:bg-navy-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-navy-500">
                  {/* Part 1: The Intern Days */}
                  <div>
                    <h4 className="text-lg font-bold text-coral-400 mb-4">Part 1: The Intern Days</h4>
                    
                    {/* Oh Sh*t Moment */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="text-coral-400" size={16} />
                        <span className="text-sm font-semibold text-coral-400 uppercase tracking-wide">The "Oh S#t" Moment</span>
                      </div>
                      <p className="text-cream-100 text-sm leading-relaxed">
                        {selectedIntern.part1.ohShitMoment}
                      </p>
                    </div>

                    {/* Learning Curve */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="text-amber-400" size={16} />
                        <span className="text-sm font-semibold text-amber-400 uppercase tracking-wide">The Learning Curve</span>
                      </div>
                      <p className="text-cream-100 text-sm leading-relaxed">
                        {selectedIntern.part1.learningCurve}
                      </p>
                    </div>

                    {/* Impressions */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="text-teal-400" size={16} />
                        <span className="text-sm font-semibold text-teal-400 uppercase tracking-wide">First Impression of the Product Team vs Reality</span>
                      </div>
                      <div className="text-cream-100 text-sm leading-relaxed space-y-2">
                        <div>
                          <span className="text-cream-300 text-xs uppercase">First impression: </span>
                          <span>{selectedIntern.part1.firstImpression}</span>
                        </div>
                        <div>
                          <span className="text-cream-300 text-xs uppercase">Reality: </span>
                          <span className="text-cream-100">{selectedIntern.part1.currentImpression}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Part 2: Full-Time */}
                  <div className="pt-6 border-t border-cream-100/10">
                    <h4 className="text-lg font-bold text-teal-400 mb-4">Part 2: Full-Time</h4>
                    
                    {/* Day 1 vs Now - Hide for Parth */}
                    {selectedIntern.name !== "Parth" && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Wrench className="text-teal-400" size={16} />
                          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wide">Day 1 vs Now</span>
                        </div>
                        <p className="text-cream-100 text-sm leading-relaxed">
                          {selectedIntern.part2.jiraComparison}
                        </p>
                      </div>
                    )}

                    {/* Myth Busted */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="text-amber-400" size={16} />
                        <span className="text-sm font-semibold text-amber-400 uppercase tracking-wide">Myth Busted</span>
                      </div>
                      <p className="text-cream-100 text-sm leading-relaxed">
                        {selectedIntern.part2.mythBusted}
                      </p>
                    </div>
                  </div>

                  {/* Part 3: Rapid Fire - Hide for Parth */}
                  {selectedIntern.name !== "Parth" && (
                  <div className="pt-6 border-t border-cream-100/10">
                    <h4 className="text-lg font-bold text-emerald-400 mb-4">Part 3: Rapid Fire</h4>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-cream-300 text-xs uppercase w-24">Intern Vibe:</span>
                        <span className="text-cream-100 text-sm">{selectedIntern.part3.internSong}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-cream-300 text-xs uppercase w-24">
                          {selectedIntern.name === "Dhairya" || selectedIntern.name === "Hardikya" 
                            ? "Designer Vibe:" 
                            : "APM Vibe:"}
                        </span>
                        <span className="text-cream-100 text-sm">{selectedIntern.part3.apmSong}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-cream-300 text-xs uppercase w-24">Culture:</span>
                        <span className="text-2xl">{selectedIntern.part3.cultureEmojis}</span>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Life in the Product Team - Scrapbook Flipbook */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          {/* Section Title & Subtitle - MUST KEEP */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Heart className="text-rose-500 fill-rose-500" size={28} />
              Life in the Product Team
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Not everything we shipped was code. Some of it was culture, which we discovered when we stepped away from the backlog.
            </p>
          </div>

          {/* Desktop: Polaroid Scatter Board */}
          <div className="hidden md:block relative w-full h-[900px] overflow-visible">
            <div className="absolute inset-0">
              {lifePhotos.map((photo, index) => (
                photoPositions[index] && (
                  <motion.div
                    key={index}
                    drag
                    dragMomentum={false}
                    onDragStart={() => {
                      setIsDragging(true);
                      handlePolaroidDragStart(index);
                    }}
                    onDragEnd={() => {
                      setTimeout(() => setIsDragging(false), 100);
                    }}
                    onClick={() => {
                      if (!isDragging) {
                        setExpandedPhoto(index);
                      }
                    }}
                    initial={{ 
                      opacity: 0,
                      scale: 0.8,
                      rotate: photoPositions[index].rotation
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: photoPositions[index].rotation
                    }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, rotate: 0, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    whileDrag={{ scale: 1.08, cursor: 'grabbing', boxShadow: "0 25px 50px rgba(0,0,0,0.35)" }}
                    style={{ 
                      zIndex: photoPositions[index].zIndex,
                      left: `${photoPositions[index].x}%`,
                      top: `${photoPositions[index].y}%`
                    }}
                    className="absolute cursor-grab active:cursor-grabbing bg-white p-4 pb-16 rounded-sm shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <img 
                      src={photo} 
                      alt={scrapbookCaptions[index]}
                      className="w-80 h-60 object-cover rounded-sm pointer-events-none"
                      draggable={false}
                    />
                    <p 
                      className="absolute bottom-4 left-4 right-4 text-center text-navy-700/80"
                      style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}
                    >
                      {scrapbookCaptions[index % scrapbookCaptions.length]}
                    </p>
                  </motion.div>
                )
              ))}
            </div>
          </div>

          {/* Mobile: Simple Carousel */}
          <div className="md:hidden px-4">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {lifePhotos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div 
                      className="relative bg-white p-3 pb-12 rounded-sm shadow-xl mx-2 cursor-pointer"
                      onClick={() => setExpandedPhoto(index)}
                    >
                      <img 
                        src={photo} 
                        alt={scrapbookCaptions[index]}
                        className="w-full h-48 object-cover rounded-sm"
                      />
                      <p 
                        className="absolute bottom-3 left-5 right-5 text-center text-navy-700/80"
                        style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem' }}
                      >
                        {scrapbookCaptions[index % scrapbookCaptions.length]}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2" />
              <CarouselNext className="-right-2" />
            </Carousel>
          </div>

          {/* Expanded Photo Modal */}
          <AnimatePresence>
            {expandedPhoto !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setExpandedPhoto(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
                >
                  <img
                    src={lifePhotos[expandedPhoto]}
                    alt={scrapbookCaptions[expandedPhoto]}
                    className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                  />
                  <p className="mt-4 text-white text-lg text-center px-4 max-w-2xl">
                    {scrapbookCaptions[expandedPhoto % scrapbookCaptions.length]}
                  </p>
                  <button
                    onClick={() => setExpandedPhoto(null)}
                    className="absolute -top-3 -right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} className="text-navy-800" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
