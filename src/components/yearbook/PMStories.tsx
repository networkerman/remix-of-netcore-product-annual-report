import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, Rocket, AlertCircle, Wrench, TrendingUp, Lightbulb, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Intern images
import parthImg from "@/assets/team/interns/parth.png";
import dhairyaImg from "@/assets/team/interns/dhairya.png";
import kushImg from "@/assets/team/interns/kush.png";
import tanishqImg from "@/assets/team/interns/tanishq.png";

// Life in Product Team images
import lifeImg1 from "@/assets/team/life/life-1.png";
import lifeImg2 from "@/assets/team/life/life-2.jpg";
import lifeImg3 from "@/assets/team/life/life-3.jpg";
import lifeImg4 from "@/assets/team/life/life-4.jpg";
import lifeImg5 from "@/assets/team/life/life-5.jpg";
import lifeImg6 from "@/assets/team/life/life-6.jpg";
import lifeImg7 from "@/assets/team/life/life-7.jpg";

// Scrapbook captions in order - mapped to photo sequence
const scrapbookCaptions = [
  "Teams that celebrate together, stay together.",
  "A little competition, a lot of team spirit.",
  "Same people, different backdrop.",
  "Some ideas started here.",
  "Not everything had a deadline.",
  "Good days, great people.",
  "This one felt special.",
];

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
  },
  {
    version: "V7.0",
    title: "Still Shipping Together",
    oneLiner: "Different moments. Same team.",
    image: lifeImg7
  }
];

// Life photos array for scrapbook
const lifePhotos = [lifeImg1, lifeImg2, lifeImg3, lifeImg4, lifeImg5, lifeImg6, lifeImg7];

export function PMStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIntern, setSelectedIntern] = useState<InternCard | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

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
            <h3 className="text-xl font-bold">Product Leaders Speak</h3>
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

          {/* Scrapbook Container */}
          <div 
            onClick={handleFlip}
            className="relative max-w-2xl mx-auto cursor-pointer select-none"
          >
            {/* Textured Paper Background */}
            <div 
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #faf6f1 0%, #f5ebe0 50%, #ebe3d5 100%)',
                padding: '24px',
              }}
            >
              {/* Paper texture overlay */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Photo with page flip animation */}
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg transform rotate-[-0.5deg]">
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
                    className="absolute inset-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={lifePhotos[currentPage]}
                      alt={`Team memory ${currentPage + 1}`}
                      className="w-full h-full object-cover"
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
