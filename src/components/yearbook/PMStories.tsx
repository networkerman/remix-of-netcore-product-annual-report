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

const lifeInProduct = [
  { image: "🎉", caption: "Ship day celebrations (featuring too much cake)" },
  { image: "💻", caption: "The infamous 'quick sync' that lasted 3 hours" },
  { image: "🍕", caption: "Friday retrospective fuel" },
  { image: "🎮", caption: "Post-launch decompression session" },
  { image: "☕", caption: "The only meeting room that matters" },
  { image: "🌙", caption: "Deadline mode: activated" },
];

export function PMStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [easterEggFound, setEasterEggFound] = useState(false);
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
                className="p-5 rounded-2xl bg-navy-800/60 backdrop-blur-sm border border-cream-100/10 
                  hover:border-teal-500/40 hover:bg-navy-700/60 transition-all duration-300 cursor-pointer
                  hover:shadow-lg hover:shadow-teal-500/5"
              >
                {/* Header: Image + Name + Persona */}
                <div className="flex flex-col items-center text-center py-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500/30 mb-3">
                    <img 
                      src={intern.image} 
                      alt={intern.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-teal-600/30 to-navy-600 flex items-center justify-center text-cream-100 font-bold text-lg">
                      {intern.name.charAt(0)}
                    </div>
                  </div>
                  <h4 className="font-semibold text-cream-100 text-base mb-1">{intern.name}</h4>
                  <p className="text-xs text-teal-400/90 font-medium">{intern.persona}</p>
                  
                  {/* Expand hint */}
                  <div className="mt-4 pt-3 border-t border-cream-100/5 w-full">
                    <span className="text-xs text-teal-400/60 font-medium">
                      Click to expand
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

        {/* Life in Product */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Heart className="text-coral-400" size={24} />
            <h3 className="text-xl font-bold">Life in the Product Team</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lifeInProduct.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="group relative aspect-square rounded-2xl bg-navy-700/50 border border-cream-100/10 overflow-hidden cursor-pointer"
                onClick={() => index === 2 && setEasterEggFound(true)}
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {item.image}
                </div>

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent flex items-end p-4">
                  <p className="text-cream-200 text-sm">{item.caption}</p>
                </div>

                {/* Easter Egg */}
                {index === 2 && easterEggFound && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-teal-500 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <span className="text-4xl">🎉</span>
                      <p className="text-teal-50 font-bold mt-2">You found it!</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Easter Egg Hint */}
          <p className="text-center text-cream-400/40 text-xs mt-6">
            Psst... there might be an easter egg hidden somewhere above 👀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
