import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Rocket, Heart, AlertCircle, Wrench, TrendingUp, Lightbulb, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Intern images
import parthImg from "@/assets/team/interns/parth.png";
import dhairyaImg from "@/assets/team/interns/dhairya.png";
import kushImg from "@/assets/team/interns/kush.png";
import tanishqImg from "@/assets/team/interns/tanishq.png";

const aiStories = [
  {
    leader: "[Leader Name]",
    title: "How AI Changed My Workflow",
    story: "Started using AI for spec writing. Now I can't imagine going back. It's not about replacing thinking—it's about amplifying it.",
    avatar: "🧠",
  },
  {
    leader: "[Leader Name]",
    title: "The AI Debugging Incident",
    story: "At 2am, Claude helped me find a bug that had haunted us for weeks. Turns out it was a single misplaced comma. AI: 1, Human: 0.",
    avatar: "🐛",
  },
  {
    leader: "[Leader Name]",
    title: "AI in Customer Research",
    story: "We fed 10,000 support tickets into an AI summarizer. The insights were brutal but honest. Sometimes you need a machine to tell you the truth.",
    avatar: "📊",
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

const timelineEvents = [
  {
    tag: "v1.0: Work Hard, Play Hard 💼",
    tagColor: "bg-teal-500",
    caption: "Successfully deployed to the beach. Zero bugs found.",
    position: "left" as const
  },
  {
    tag: "v2.0: Goa Offsite Patch 🌴",
    tagColor: "bg-emerald-500",
    caption: "Stress testing our karaoke skills. Results: mixed.",
    position: "right" as const
  },
  {
    tag: "Hotfix: Emergency Pizza 🍕",
    tagColor: "bg-orange-500",
    caption: "Critical deployment of carbs. Zero rollbacks.",
    position: "left" as const
  },
  {
    tag: "v3.1: Diwali Feature Drop 🪔",
    tagColor: "bg-amber-500",
    caption: "Shipped memories, not code. PRs pending.",
    position: "right" as const
  },
  {
    tag: "Beta Test: Cricket League 🏏",
    tagColor: "bg-blue-500",
    caption: "Unexpected dependencies discovered. Morale unaffected.",
    position: "left" as const
  },
  {
    tag: "v4.0: The Retro Party 🎉",
    tagColor: "bg-pink-500",
    caption: "Rolled back productivity. Shipped vibes instead.",
    position: "right" as const
  },
  {
    tag: "v5.0: Year-End Sync 🎊",
    tagColor: "bg-purple-500",
    caption: "Final push to production. Hearts deployed.",
    position: "left" as const
  },
  {
    tag: "Stable Release: Team Bond 💪",
    tagColor: "bg-coral-500",
    caption: "All tests passed. Culture: 100% coverage.",
    position: "right" as const
  }
];

export function PMStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIntern, setSelectedIntern] = useState<InternCard | null>(null);

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

        {/* AI Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-teal-400" size={24} />
            <h3 className="text-xl font-bold">Leader-Led AI Use Cases</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aiStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-navy-700/50 border border-cream-100/10 hover:border-teal-500/30 transition-colors"
              >
                <div className="text-4xl mb-4">{story.avatar}</div>
                <h4 className="font-bold text-lg text-cream-100 mb-2">{story.title}</h4>
                <p className="text-cream-300/70 text-sm leading-relaxed mb-4">{story.story}</p>
                <p className="text-teal-400 text-sm font-medium">{story.leader}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {internCards.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => setSelectedIntern(intern)}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-2xl bg-navy-700 relative overflow-hidden 
                  border border-cream-100/10 hover:border-teal-500/40 
                  transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
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

        {/* Life in Product - Winding Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <Heart className="text-coral-400" size={24} />
            <h3 className="text-xl font-bold">Life in the Product Team</h3>
          </div>

          {/* Background decorations - confetti & doodles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Confetti particles */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#14b8a6', '#f97316', '#eab308', '#ec4899', '#8b5cf6'][i % 5]
                }}
                animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
            
            {/* Hand-drawn doodles SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 800 1200">
              {/* Stars */}
              <path d="M100 150 l5 15 l15 5 l-15 5 l-5 15 l-5 -15 l-15 -5 l15 -5 z" fill="currentColor" className="text-teal-400" />
              <path d="M700 300 l4 12 l12 4 l-12 4 l-4 12 l-4 -12 l-12 -4 l12 -4 z" fill="currentColor" className="text-coral-400" />
              <path d="M150 800 l5 15 l15 5 l-15 5 l-5 15 l-5 -15 l-15 -5 l15 -5 z" fill="currentColor" className="text-amber-400" />
              <path d="M650 950 l4 12 l12 4 l-12 4 l-4 12 l-4 -12 l-12 -4 l12 -4 z" fill="currentColor" className="text-pink-400" />
              {/* Squiggles */}
              <path d="M50 400 Q70 380, 90 400 Q110 420, 130 400" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal-400" />
              <path d="M720 600 Q740 580, 760 600 Q780 620, 800 600" stroke="currentColor" strokeWidth="2" fill="none" className="text-orange-400" />
              {/* Arrows */}
              <path d="M80 650 L100 670 L80 690 M100 670 L60 670" stroke="currentColor" strokeWidth="2" fill="none" className="text-emerald-400" />
              <path d="M720 150 L740 170 L720 190 M740 170 L700 170" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
            </svg>
          </div>

          {/* Desktop: Winding Timeline */}
          <div className="hidden md:block relative">
            {/* SVG Winding Timeline Path */}
            <svg className="absolute left-1/2 top-0 h-full w-40 -translate-x-1/2 pointer-events-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path 
                d="M80 0 Q 30 100, 80 200 Q 130 300, 80 400 Q 30 500, 80 600 Q 130 700, 80 800 Q 30 900, 80 1000 Q 130 1100, 80 1200 Q 30 1300, 80 1400 Q 130 1500, 80 1600"
                stroke="url(#timelineGradient)"
                strokeWidth="3"
                strokeDasharray="12 6"
                fill="none"
                filter="url(#glow)"
                className="opacity-60"
              />
            </svg>

            {/* Timeline Cards */}
            <div className="relative z-10 space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: event.position === 'left' ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.12, duration: 0.5 }}
                  className={`flex items-center ${event.position === 'left' ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}
                >
                  {/* Connector dot */}
                  <div 
                    className="absolute left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg shadow-orange-500/40 z-20"
                    style={{ boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' }}
                  />
                  
                  {/* Card */}
                  <div className="w-full max-w-sm rounded-2xl bg-navy-800/70 backdrop-blur-sm border border-cream-100/10 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
                    {/* Image placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-navy-700 via-navy-800 to-navy-700 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:20px_20px]" />
                      <span className="text-cream-400/20 text-sm font-medium">Image placeholder</span>
                    </div>
                    
                    {/* Release tag */}
                    <div className="px-4 pt-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white ${event.tagColor} shadow-lg`}>
                        {event.tag}
                      </span>
                    </div>
                    
                    {/* Caption */}
                    <p className="px-4 pb-4 pt-3 text-cream-300/80 text-sm leading-relaxed">
                      {event.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden relative pl-8">
            {/* Vertical line on left */}
            <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 rounded-full opacity-60" style={{ boxShadow: '0 0 15px rgba(249, 115, 22, 0.4)' }} />
            
            {/* Cards */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative"
                >
                  {/* Connector dot */}
                  <div 
                    className="absolute left-[-22px] top-8 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg"
                    style={{ boxShadow: '0 0 12px rgba(249, 115, 22, 0.5)' }}
                  />
                  
                  {/* Card */}
                  <div className="rounded-2xl bg-navy-800/70 backdrop-blur-sm border border-cream-100/10 overflow-hidden">
                    {/* Image placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-navy-700 via-navy-800 to-navy-700 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:20px_20px]" />
                      <span className="text-cream-400/20 text-sm font-medium">Image placeholder</span>
                    </div>
                    
                    {/* Release tag */}
                    <div className="px-4 pt-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white ${event.tagColor} shadow-lg`}>
                        {event.tag}
                      </span>
                    </div>
                    
                    {/* Caption */}
                    <p className="px-4 pb-4 pt-3 text-cream-300/80 text-sm leading-relaxed">
                      {event.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
