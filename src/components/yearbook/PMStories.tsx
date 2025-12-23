import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, Rocket, AlertCircle, Wrench, TrendingUp, Lightbulb, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Intern images
import parthImg from "@/assets/team/interns/parth.png";
import dhairyaImg from "@/assets/team/interns/dhairya.png";
import kushImg from "@/assets/team/interns/kush.png";
import tanishqImg from "@/assets/team/interns/tanishq.png";

// Leader images
import yogeshImg from "@/assets/team/leaders/yogesh.png";
import satishImg from "@/assets/team/leaders/satish.png";
import deepeshImg from "@/assets/team/leaders/deepesh.png";
import raviImg from "@/assets/team/leaders/ravi.png";
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
    headline: "[Placeholder Headline]",
    teaserQuote: "[Placeholder teaser quote]",
    questions: [
      { question: "[Placeholder Question 1]", answer: "[Placeholder Answer 1]" },
      { question: "[Placeholder Question 2]", answer: "[Placeholder Answer 2]" },
      { question: "[Placeholder Question 3]", answer: "[Placeholder Answer 3]" },
      { question: "[Placeholder Question 4]", answer: "[Placeholder Answer 4]" },
    ],
  },
  {
    id: "satish",
    name: "Satish",
    title: "AVP - Product Management",
    image: satishImg,
    emoji: "🚀",
    headline: "[Placeholder Headline]",
    teaserQuote: "[Placeholder teaser quote]",
    questions: [
      { question: "[Placeholder Question 1]", answer: "[Placeholder Answer 1]" },
      { question: "[Placeholder Question 2]", answer: "[Placeholder Answer 2]" },
      { question: "[Placeholder Question 3]", answer: "[Placeholder Answer 3]" },
      { question: "[Placeholder Question 4]", answer: "[Placeholder Answer 4]" },
    ],
  },
  {
    id: "deepesh",
    name: "Deepesh",
    title: "AVP - Product Operations",
    image: deepeshImg,
    emoji: "🔄",
    headline: "[Placeholder Headline]",
    teaserQuote: "[Placeholder teaser quote]",
    questions: [
      { question: "[Placeholder Question 1]", answer: "[Placeholder Answer 1]" },
      { question: "[Placeholder Question 2]", answer: "[Placeholder Answer 2]" },
      { question: "[Placeholder Question 3]", answer: "[Placeholder Answer 3]" },
      { question: "[Placeholder Question 4]", answer: "[Placeholder Answer 4]" },
    ],
  },
  {
    id: "ravi",
    name: "Ravi",
    title: "Director of Product & Business Analytics",
    image: raviImg,
    emoji: "📊",
    headline: "[Placeholder Headline]",
    teaserQuote: "[Placeholder teaser quote]",
    questions: [
      { question: "[Placeholder Question 1]", answer: "[Placeholder Answer 1]" },
      { question: "[Placeholder Question 2]", answer: "[Placeholder Answer 2]" },
      { question: "[Placeholder Question 3]", answer: "[Placeholder Answer 3]" },
      { question: "[Placeholder Question 4]", answer: "[Placeholder Answer 4]" },
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
        answer: "In 2025, we focused on three persistent ecommerce challenges: discovery friction, low conversion efficiency, and the operational complexity of running product-led experiences at scale. Merchants had access to many tools, but connecting them into consistent, measurable journeys was difficult. This fragmentation slowed execution and made it unclear what was actually driving results.\n\nThese issues surfaced repeatedly in merchant conversations and storefront reviews. They weren't isolated problems, but systemic ones. Identifying these patterns helped us move beyond incremental fixes and instead focus on foundational improvements across browsing, discovery, personalization, and conversion—across channels, not in silos.",
      },
      {
        question: "What was our overall product strategy and platform direction?",
        answer: "Our strategy was to build a cohesive ecommerce platform where catalog, merchandising, content, personalization, and recommendations worked together as one system. Instead of intelligence being locked inside individual tools, we wanted it to flow across experiences.\n\nThis platform-led approach helped merchants maintain consistency while moving faster. The broader goal was to reduce operational overhead and enable teams to create, reuse, and optimize product-led experiences across the browse–discover–convert journey with greater clarity and efficiency.",
      },
      {
        question: "What key customer insight influenced our decisions?",
        answer: "A recurring insight from merchants was the need for flexibility with guardrails. They wanted control without complexity and power without unpredictability. This directly influenced how we scoped and prioritized solutions.\n\nWe focused on sensible defaults, fallback mechanisms, and reuse across channels and campaign types. In several cases, we simplified or re-scoped features after seeing how operationally heavy certain flows became in real-world usage. These decisions helped us balance usability with capability, ensuring solutions were powerful but practical.",
      },
      {
        question: "What leadership perspective shaped the year?",
        answer: "From a leadership perspective, we operated with a platform-owner mindset, prioritizing long-term coherence, clarity, and sustainable execution. We spent time on clear problem framing, aligning on trade-offs, and setting teams up to execute confidently rather than relying on constant intervention.\n\nLooking ahead, this approach continues with a stronger focus on product thinking, mentoring upcoming PMs, and building systems that scale—not just in platform capabilities, but in the teams that support them.",
      },
    ],
  },
  {
    id: "kirit",
    name: "Kirit",
    title: "Head of Product Design",
    image: kiritImg,
    emoji: "🎨",
    headline: "[Placeholder Headline]",
    teaserQuote: "[Placeholder teaser quote]",
    questions: [
      { question: "[Placeholder Question 1]", answer: "[Placeholder Answer 1]" },
      { question: "[Placeholder Question 2]", answer: "[Placeholder Answer 2]" },
      { question: "[Placeholder Question 3]", answer: "[Placeholder Answer 3]" },
      { question: "[Placeholder Question 4]", answer: "[Placeholder Answer 4]" },
    ],
  },
];

interface InternCard {
  name: string;
  image: string;
  persona: string;
  realityCheck: string;
  whatBroke: string;
  whatChanged: { then: string; now: string };
  shippedLearning: string;
}

const internCards: InternCard[] = [
  {
    name: "Parth",
    image: parthImg,
    persona: "Tech Decoder",
    realityCheck: "First grooming call felt like a foreign language class—drowning in acronyms like SDKs, RAGs, and CTRs.",
    whatBroke: "Confused 'cool tech' with 'valuable product.' Learned that novelty alone doesn't solve user problems.",
    whatChanged: { then: "Nodding along, hoping no one asks", now: "Actually following the conversation" },
    shippedLearning: "Technical fluency comes from asking 'dumb' questions early and often.",
  },
  {
    name: "Dhairya",
    image: dhairyaImg,
    persona: "Design System Rebel",
    realityCheck: "Terrified of being 'The Fire Guy'—the one who triggers production alarms while everyone's asleep.",
    whatBroke: "Went rogue on the Design System. Built custom components instead of reusing existing ones.",
    whatChanged: { then: "Panic at every deploy", now: "Confident with the release checklist" },
    shippedLearning: "Consistency beats creativity when building at scale.",
  },
  {
    name: "Kush",
    image: kushImg,
    persona: "Strategic Nodder",
    realityCheck: "Survived first grooming with 'strategic nodding' and praying no one asked follow-up questions.",
    whatBroke: "Assumed silence meant agreement. Learned 'I think we're aligned' often means the opposite.",
    whatChanged: { then: "Hoping to blend in", now: "Speaking up with confidence" },
    shippedLearning: "Alignment requires active confirmation, not passive assumption.",
  },
  {
    name: "Tanishq",
    image: tanishqImg,
    persona: "Happy-Path Hunter",
    realityCheck: "Leading grooming sessions in week one while barely understanding what we were building.",
    whatBroke: "Designed only for the 'happy path.' Learned that edge cases devour best-case scenarios.",
    whatChanged: { then: "Planning for success only", now: "Designing for failure too" },
    shippedLearning: "Great products handle the unexpected as gracefully as the expected.",
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

  // Auto-flip every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % lifePhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Click to flip
  const handleFlip = () => {
    setCurrentPage((prev) => (prev + 1) % lifePhotos.length);
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
      className="py-32 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="caption text-coral-400 mb-4 block">The Real Stories</span>
          <h2 className="section-heading mb-6">PM Stories & Culture</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
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
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-teal-400" size={24} />
            <h3 className="text-xl font-bold">Product Leaders Speak</h3>
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
                <div className="aspect-[3/4] rounded-2xl bg-navy-700 relative overflow-hidden border border-cream-100/10 hover:border-teal-500/30 transition-all duration-300">
                  {/* Full-bleed image */}
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Fallback background */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-600/30 to-navy-600 -z-10" />

                  {/* Gradient overlay with content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent">
                    <h4 className="font-bold text-lg text-cream-100 mb-1">{leader.name}</h4>
                    <p className="text-teal-400/90 text-sm font-medium">{leader.title}</p>
                  </div>

                  {/* Hover CTA Overlay */}
                  <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-teal-500 text-navy-900 font-semibold rounded-full text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Story →
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
              <Rocket className="text-teal-400" size={28} />
              <h3 className="text-2xl font-bold text-cream-100">Deployed to Production</h3>
            </div>
            <p className="text-cream-300/80 max-w-2xl mx-auto leading-relaxed">
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
                  className="aspect-[3/4] rounded-2xl bg-navy-700 relative overflow-hidden 
                    border border-cream-100/10 transition-all duration-300"
                >
                  {/* Full-bleed image */}
                  <img 
                    src={intern.image} 
                    alt={intern.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Fallback background for missing image */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-600/30 to-navy-600 -z-10" />
                  
                  {/* Gradient overlay with name & one-liner */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent">
                    <h4 className="font-bold text-lg text-cream-100 mb-1">{intern.name}</h4>
                    <p className="text-teal-400/90 text-sm font-medium">{intern.persona}</p>
                  </div>

                  {/* Hover CTA Overlay */}
                  <div 
                    onClick={() => setSelectedIntern(intern)}
                    className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="px-4 py-2 bg-teal-500 text-navy-900 font-semibold rounded-full text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Story
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Intern Modal */}
        <Dialog open={!!selectedIntern} onOpenChange={(open) => !open && setSelectedIntern(null)}>
          <DialogContent className="bg-navy-800 border-cream-100/10 text-cream-100 max-w-lg p-0 overflow-hidden">
            <DialogTitle className="sr-only">
              {selectedIntern?.name} - {selectedIntern?.persona}
            </DialogTitle>
            
            {selectedIntern && (
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={() => setSelectedIntern(null)}
                  className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-navy-700/80 hover:bg-navy-600 transition-colors"
                >
                  <X size={18} className="text-cream-300" />
                </button>

                {/* Header with image */}
                <div className="p-6 pb-4 border-b border-cream-100/10 bg-gradient-to-br from-navy-700/50 to-navy-800">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500/40 flex-shrink-0">
                      <img 
                        src={selectedIntern.image} 
                        alt={selectedIntern.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-cream-100">{selectedIntern.name}</h3>
                      <p className="text-sm text-teal-400 font-medium">{selectedIntern.persona}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  {/* Reality Check */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="text-coral-400" size={16} />
                      <span className="text-sm font-semibold text-coral-400 uppercase tracking-wide">Reality Check</span>
                    </div>
                    <p className="text-cream-300/80 text-sm leading-relaxed">
                      {selectedIntern.realityCheck}
                    </p>
                  </div>

                  {/* What Broke */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="text-amber-400" size={16} />
                      <span className="text-sm font-semibold text-amber-400 uppercase tracking-wide">What Broke</span>
                    </div>
                    <p className="text-cream-300/80 text-sm leading-relaxed">
                      {selectedIntern.whatBroke}
                    </p>
                  </div>

                  {/* What Changed */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="text-teal-400" size={16} />
                      <span className="text-sm font-semibold text-teal-400 uppercase tracking-wide">What Changed</span>
                    </div>
                    <div className="text-cream-300/80 text-sm leading-relaxed">
                      <div className="flex items-start gap-2 mb-1">
                        <span className="text-cream-400/60 text-xs uppercase mt-0.5">Then:</span>
                        <span>{selectedIntern.whatChanged.then}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cream-400/60 text-xs uppercase mt-0.5">Now:</span>
                        <span className="text-cream-100">{selectedIntern.whatChanged.now}</span>
                      </div>
                    </div>
                  </div>

                  {/* Shipped Learning */}
                  <div className="pt-4 border-t border-cream-100/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="text-emerald-400" size={16} />
                      <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">Shipped Learning</span>
                    </div>
                    <p className="text-cream-200/90 text-sm leading-relaxed italic pl-4 border-l-2 border-emerald-400/30">
                      "{selectedIntern.shippedLearning}"
                    </p>
                  </div>
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
            <h3 className="text-2xl md:text-3xl font-bold text-cream-100 mb-4">
              Life in the Product Team
            </h3>
            <p className="text-cream-300/80 max-w-2xl mx-auto leading-relaxed">
              Not everything we shipped was code. Some of it was culture, which we discovered when we stepped away from the backlog.
            </p>
          </div>

          {/* Scrapbook Container - Wide for landscape photos */}
          <div 
            onClick={handleFlip}
            className="relative w-full max-w-5xl mx-auto cursor-pointer select-none px-4 md:px-8"
          >
            {/* Textured Paper Background */}
            <div 
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #faf6f1 0%, #f5ebe0 50%, #ebe3d5 100%)',
                padding: '20px',
              }}
            >
              {/* Paper texture overlay */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Photo container - auto height, no fixed aspect ratio */}
              <div 
                className="relative rounded overflow-hidden shadow-lg transform rotate-[-0.3deg]"
                style={{ 
                  minHeight: '280px',
                  maxHeight: '500px',
                }}
              >
                {/* Background for letterboxing */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      minHeight: '280px',
                      maxHeight: '500px',
                    }}
                  >
                    {/* Image with object-fit: contain - NO CROPPING */}
                    <img
                      src={lifePhotos[currentPage]}
                      alt={`Team memory ${currentPage + 1}`}
                      className="w-full h-auto max-h-[500px] object-contain"
                    />
                    
                    {/* Soft shadow under photo */}
                    <div className="absolute inset-0 shadow-inner pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Handwritten Caption */}
              <motion.p
                key={`caption-${currentPage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-4 text-center text-navy-700/80 text-sm italic"
                style={{
                  fontFamily: "'Caveat', 'Segoe Script', 'Bradley Hand', cursive",
                  fontSize: '1.25rem',
                }}
              >
                "{scrapbookCaptions[currentPage % scrapbookCaptions.length]}"
              </motion.p>
            </div>

            {/* Subtle paper depth effect */}
            <div 
              className="absolute -bottom-1 left-2 right-2 h-2 rounded-b-lg -z-10"
              style={{ background: 'rgba(0,0,0,0.08)' }}
            />
            <div 
              className="absolute -bottom-2 left-4 right-4 h-2 rounded-b-lg -z-20"
              style={{ background: 'rgba(0,0,0,0.04)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
