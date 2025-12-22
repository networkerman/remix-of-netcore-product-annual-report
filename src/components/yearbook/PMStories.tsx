import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Rocket, X, AlertCircle, Wrench, TrendingUp, Lightbulb, Heart, Star, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrapbookGallery } from "./scrapbook/ScrapbookGallery";
import { ProductLeadersSpeak } from "./scrapbook/ProductLeadersSpeak";

// Intern images
import parthImg from "@/assets/team/interns/parth.png";
import dhairyaImg from "@/assets/team/interns/dhairya.png";
import kushImg from "@/assets/team/interns/kush.png";
import tanishqImg from "@/assets/team/interns/tanishq.png";

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

export function PMStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIntern, setSelectedIntern] = useState<InternCard | null>(null);

  return (
    <section
      id="stories"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(45 30% 96%) 0%, hsl(40 25% 92%) 100%)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-coral-400/20 rotate-12">
        <Heart size={60} fill="currentColor" />
      </div>
      <div className="absolute top-20 right-16 text-teal-400/20 -rotate-12">
        <Star size={50} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-yellow-400/20 rotate-6">
        <Sparkles size={40} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section - Cover Page */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-handwritten text-5xl md:text-7xl lg:text-8xl text-navy-800 mb-6 leading-tight">
            Life in the Product Team
          </h2>
          <p className="font-caveat text-xl md:text-2xl text-navy-600/80 max-w-2xl mx-auto leading-relaxed">
            Not everything we shipped was code. Some of it was culture, which we discovered 
            when we stepped away from the backlog.
          </p>
          
          {/* Decorative stickers */}
          <div className="flex justify-center gap-4 mt-6">
            <span className="inline-block transform rotate-[-5deg] text-3xl">❤️</span>
            <span className="inline-block transform rotate-[3deg] text-3xl">⭐</span>
            <span className="inline-block transform rotate-[-2deg] text-3xl">→</span>
          </div>
        </motion.div>

        {/* Scrapbook Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <ScrapbookGallery />
        </motion.div>

        {/* Deployed to Production - Intern Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="text-coral-500" size={28} />
              <h3 className="font-handwritten text-3xl md:text-4xl text-navy-800">
                Deployed to Production
              </h3>
            </div>
            <p className="font-caveat text-xl text-navy-600/80 max-w-2xl mx-auto leading-relaxed">
              A look at how our interns moved from first-day confusion to shipping with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {internCards.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => setSelectedIntern(intern)}
                className="group relative cursor-pointer"
              >
                <div 
                  className="bg-white p-3 pb-14 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    transform: `rotate(${(index % 2 === 0 ? -2 : 2)}deg)`,
                  }}
                >
                  {/* Photo */}
                  <div className="aspect-[3/4] overflow-hidden bg-cream-200">
                    <img 
                      src={intern.image} 
                      alt={intern.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <p className="font-handwritten text-lg text-navy-700">{intern.name}</p>
                    <p className="font-caveat text-coral-500">{intern.persona}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-navy-800/80 text-cream-100 font-handwritten px-4 py-2 rounded-full text-lg">
                    Read Story ✨
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Intern Modal */}
        <Dialog open={!!selectedIntern} onOpenChange={(open) => !open && setSelectedIntern(null)}>
          <DialogContent 
            className="border-0 text-navy-800 max-w-lg p-0 overflow-hidden"
            style={{
              background: "hsl(45 30% 96%)",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            }}
          >
            <DialogTitle className="sr-only">
              {selectedIntern?.name} - {selectedIntern?.persona}
            </DialogTitle>
            
            {selectedIntern && (
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={() => setSelectedIntern(null)}
                  className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-cream-200/80 hover:bg-cream-300 transition-colors"
                >
                  <X size={18} className="text-navy-600" />
                </button>

                {/* Header with image */}
                <div className="p-6 pb-4 border-b border-cream-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-coral-400 flex-shrink-0">
                      <img 
                        src={selectedIntern.image} 
                        alt={selectedIntern.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-handwritten text-2xl text-navy-800">{selectedIntern.name}</h3>
                      <p className="font-caveat text-lg text-coral-500">{selectedIntern.persona}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  {/* Reality Check */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="text-coral-400" size={16} />
                      <span className="font-handwritten text-lg text-coral-500">Reality Check</span>
                    </div>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {selectedIntern.realityCheck}
                    </p>
                  </div>

                  {/* What Broke */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="text-amber-500" size={16} />
                      <span className="font-handwritten text-lg text-amber-600">What Broke</span>
                    </div>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {selectedIntern.whatBroke}
                    </p>
                  </div>

                  {/* What Changed */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="text-teal-500" size={16} />
                      <span className="font-handwritten text-lg text-teal-600">What Changed</span>
                    </div>
                    <div className="text-navy-600 text-sm leading-relaxed">
                      <div className="flex items-start gap-2 mb-1">
                        <span className="text-navy-400 text-xs uppercase mt-0.5">Then:</span>
                        <span>{selectedIntern.whatChanged.then}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-navy-400 text-xs uppercase mt-0.5">Now:</span>
                        <span className="text-navy-800 font-medium">{selectedIntern.whatChanged.now}</span>
                      </div>
                    </div>
                  </div>

                  {/* Shipped Learning */}
                  <div className="pt-4 border-t border-cream-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="text-emerald-500" size={16} />
                      <span className="font-handwritten text-lg text-emerald-600">Shipped Learning</span>
                    </div>
                    <p className="text-navy-700 text-sm leading-relaxed italic pl-4 border-l-2 border-emerald-400/30">
                      "{selectedIntern.shippedLearning}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Product Leaders Speak */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <ProductLeadersSpeak />
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-20 pt-10 border-t border-cream-300/50"
        >
          <p className="font-handwritten text-2xl text-navy-600/70">
            Built with ❤️ by the Product Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
