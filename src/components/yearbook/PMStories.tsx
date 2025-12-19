import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Rocket, Heart } from "lucide-react";

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
    name: "PARTH",
    title: "The Tech Decoder 🧠",
    ohShit: "First grooming call felt like a foreign language class. Drowned in acronyms (SDKs? RAGs?).",
    glitch: "Confused \"cool\" with \"valuable.\" Learned novelty ≠ a problem statement.",
    thirdLabel: "Myth Busted",
    thirdContent: "Expected serious nerds. Found super smart party animals instead (confirmed after 🍻).",
  },
  {
    name: "DHAIRYA",
    title: "The Design System Rebel 🎨",
    ohShit: "Terrified of being \"The Fire Guy\" triggering prod alarms while panicking over deadlines.",
    glitch: "Went rogue on the Design System. Built new components instead of reusing existing ones (sorry boss!).",
    thirdLabel: "Version History",
    thirdContent: "Day 1: \"Wtf???\" 🤯 → Now: \"Oh ok. Cool.\" 😎",
  },
  {
    name: "KUSH",
    title: "The Strategic Nodder 🤝",
    ohShit: "Survived first grooming using \"strategic nodding\" and praying for zero follow-up questions.",
    glitch: "Assumed silence = agreement. Learned \"I think we're aligned\" means absolutely no one is.",
    thirdLabel: "Vibe Shift",
    thirdContent: "Then: Khoon Choos Le 🩸 → Now: Safarnama ✈️",
  },
  {
    name: "TANISHQ",
    title: "The Happy-Path Hunter 🎯",
    ohShit: "Leading groomings in week one while barely understanding what product we were building.",
    glitch: "Designed only the \"Happy Path.\" Learned that edge cases eat best cases for breakfast.",
    thirdLabel: "Vibe Shift",
    thirdContent: "Then: Apna Time Aayega 🎤 → Now: Bhaag Milkha Bhaag 🏃",
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
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="text-teal-400" size={28} />
              <h3 className="text-2xl font-bold text-cream-100">Deployed to Production 🚀</h3>
            </div>
            <p className="text-cream-300/70 max-w-3xl mx-auto">
              Great products start as messy prototypes. Our interns graduated from "Staging" to the high-stakes world of "Production." Here is their version history—bugs, patches, and major upgrades included.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internCards.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-colors"
              >
                {/* Avatar and Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-cream-300 font-bold text-lg">
                    {intern.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-cream-100">{intern.name}</h4>
                    <p className="text-sm text-teal-400">{intern.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 text-sm">
                  <p className="text-gray-300">
                    <span className="font-bold text-cream-100">"Oh S#t": </span>
                    {intern.ohShit}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-bold text-cream-100">The Glitch: </span>
                    {intern.glitch}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-bold text-cream-100">{intern.thirdLabel}: </span>
                    {intern.thirdContent}
                  </p>
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
