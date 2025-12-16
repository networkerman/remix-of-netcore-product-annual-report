import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, MessageCircle, Coffee, Heart } from "lucide-react";

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

const caseStudies = [
  { name: "Affinity Project", tag: "Cross-Team", status: "Placeholder for case study content" },
  { name: "WhatsApp UCE Editor", tag: "Engineering", status: "Placeholder for case study content" },
  { name: "Analytics GTM", tag: "Go-to-Market", status: "Placeholder for case study content" },
];

const newMemberQuotes = [
  { quote: "I thought I knew product. Then I joined Netcore.", author: "[Name]", joined: "Q1 2025" },
  { quote: "The codebase is... character building.", author: "[Name]", joined: "Q2 2025" },
  { quote: "Everyone warned me about the Slack channels. They were right.", author: "[Name]", joined: "Q2 2025" },
  { quote: "First week: 47 acronyms. Still learning.", author: "[Name]", joined: "Q3 2025" },
  { quote: "The coffee machine and I have bonded.", author: "[Name]", joined: "Q3 2025" },
  { quote: "Standups that actually stand up? Revolutionary.", author: "[Name]", joined: "Q4 2025" },
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

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="text-coral-400" size={24} />
            <h3 className="text-xl font-bold">Case Studies (Coming Soon)</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border-2 border-dashed border-cream-100/20 text-center"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-coral-400/20 text-coral-400 text-xs font-medium mb-4">
                  {study.tag}
                </span>
                <h4 className="font-bold text-lg text-cream-100 mb-2">{study.name}</h4>
                <p className="text-cream-400 text-sm">{study.status}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* New Member Quotes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <Coffee className="text-accent" size={24} />
            <h3 className="text-xl font-bold">One-Liners from New Members</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newMemberQuotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="p-5 rounded-xl bg-cream-100/5 border border-cream-100/10 hover:bg-cream-100/10 transition-colors"
              >
                <p className="text-cream-200 text-sm italic mb-3">"{item.quote}"</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream-400">{item.author}</span>
                  <span className="text-teal-400">{item.joined}</span>
                </div>
              </motion.div>
            ))}
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
