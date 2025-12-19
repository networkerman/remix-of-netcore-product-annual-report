import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Rocket, Heart, AlertCircle, Wrench, TrendingUp, Lightbulb, Clock } from "lucide-react";

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

const internCards = [
  {
    name: "Parth",
    persona: "The Tech Decoder",
    realityCheck: "First grooming call felt like a foreign language class—drowning in acronyms like SDKs, RAGs, and CTRs.",
    whatBroke: "Confused 'cool tech' with 'valuable product.' Learned that novelty alone doesn't solve user problems.",
    whatChanged: { then: "Nodding along, hoping no one asks", now: "Actually following the conversation" },
    shippedLearning: "Technical fluency comes from asking 'dumb' questions early and often.",
  },
  {
    name: "Dhairya",
    persona: "The Design System Rebel",
    realityCheck: "Terrified of being 'The Fire Guy'—the one who triggers production alarms while everyone's asleep.",
    whatBroke: "Went rogue on the Design System. Built custom components instead of reusing existing ones.",
    whatChanged: { then: "Panic at every deploy", now: "Confident with the release checklist" },
    shippedLearning: "Consistency beats creativity when building at scale.",
  },
  {
    name: "Kush",
    persona: "The Strategic Nodder",
    realityCheck: "Survived first grooming with 'strategic nodding' and praying no one asked follow-up questions.",
    whatBroke: "Assumed silence meant agreement. Learned 'I think we're aligned' often means the opposite.",
    whatChanged: { then: "Hoping to blend in", now: "Speaking up with confidence" },
    shippedLearning: "Alignment requires active confirmation, not passive assumption.",
  },
  {
    name: "Tanishq",
    persona: "The Happy-Path Hunter",
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
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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
            {internCards.map((intern, index) => {
              const isExpanded = expandedCard === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  className={`p-5 rounded-2xl bg-navy-800/60 backdrop-blur-sm border border-cream-100/10 
                    hover:border-teal-500/40 hover:bg-navy-700/60 transition-all duration-300 cursor-pointer
                    ${isExpanded ? 'ring-1 ring-teal-500/30' : ''}`}
                >
                  {/* Header: Avatar + Name + Persona */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-600/30 to-navy-600 flex items-center justify-center text-cream-100 font-bold text-base border border-teal-500/20">
                      {intern.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream-100">{intern.name}</h4>
                      <p className="text-xs text-teal-400/90">{intern.persona}</p>
                    </div>
                  </div>

                  {/* Timeline Tag */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <Clock className="text-cream-400/50" size={12} />
                    <span className="text-[10px] text-cream-400/60 uppercase tracking-wider font-medium">
                      Week 1 → End of Internship
                    </span>
                  </div>

                  {/* Reality Check */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <AlertCircle className="text-coral-400/80" size={13} />
                      <span className="text-xs font-semibold text-coral-400/90 uppercase tracking-wide">Reality Check</span>
                    </div>
                    <p className={`text-cream-300/70 text-xs leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}>
                      {intern.realityCheck}
                    </p>
                  </div>

                  {/* What Broke */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Wrench className="text-amber-400/80" size={13} />
                      <span className="text-xs font-semibold text-amber-400/90 uppercase tracking-wide">What Broke</span>
                    </div>
                    <p className={`text-cream-300/70 text-xs leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}>
                      {intern.whatBroke}
                    </p>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {/* What Changed */}
                        <div className="mb-3">
                          <div className="flex items-center gap-1.5 mb-1">
                            <TrendingUp className="text-teal-400/80" size={13} />
                            <span className="text-xs font-semibold text-teal-400/90 uppercase tracking-wide">What Changed</span>
                          </div>
                          <div className="text-cream-300/70 text-xs leading-relaxed">
                            <span className="text-cream-400/50">Then:</span> {intern.whatChanged.then}
                            <span className="mx-2 text-cream-400/30">→</span>
                            <span className="text-cream-400/50">Now:</span> {intern.whatChanged.now}
                          </div>
                        </div>

                        {/* Shipped Learning */}
                        <div className="pt-3 border-t border-cream-100/5">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Lightbulb className="text-emerald-400/80" size={13} />
                            <span className="text-xs font-semibold text-emerald-400/90 uppercase tracking-wide">Shipped Learning</span>
                          </div>
                          <p className="text-cream-200/80 text-xs leading-relaxed italic">
                            "{intern.shippedLearning}"
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand hint */}
                  <div className="mt-3 text-center">
                    <span className="text-[10px] text-cream-400/40">
                      {isExpanded ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

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
