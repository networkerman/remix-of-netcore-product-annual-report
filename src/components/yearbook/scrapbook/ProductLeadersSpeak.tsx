import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Quote } from "lucide-react";

interface LeaderTestimonial {
  id: string;
  name: string;
  role: string;
  preview: string;
  fullStory: string;
}

const testimonials: LeaderTestimonial[] = [
  {
    id: "1",
    name: "[Leader Name]",
    role: "Product Director",
    preview: "The best products come from teams that truly understand their customers.",
    fullStory: "When I joined the product team, I thought I understood what customer-centricity meant. But working here taught me that understanding customers isn't about surveys or analytics—it's about empathy. It's about sitting with a customer and watching them struggle with something you built. That humility changes everything about how you approach product decisions."
  },
  {
    id: "2",
    name: "[Leader Name]",
    role: "Senior PM",
    preview: "Failure isn't the opposite of success—it's part of it.",
    fullStory: "We launched a feature that tanked. Completely. Usage was near zero, and we had to make the hard call to sunset it after three months. But that failure taught us more than our last five successes combined. We learned to validate earlier, ship smaller, and listen harder. Now I tell my team: if you're not failing sometimes, you're not pushing hard enough."
  },
  {
    id: "3",
    name: "[Leader Name]",
    role: "Product Lead",
    preview: "Cross-functional collaboration is where the magic happens.",
    fullStory: "The breakthrough for our biggest launch last year didn't come from a product brainstorm. It came from a casual coffee chat with an engineer who mentioned a technical possibility we'd never considered. That conversation became a feature that delighted thousands of users. Now I make time for those unstructured conversations—they're not distractions, they're opportunities."
  },
  {
    id: "4",
    name: "[Leader Name]",
    role: "Group PM",
    preview: "Speed matters, but direction matters more.",
    fullStory: "Early in my career, I prided myself on moving fast. Ship it, learn, iterate. But I've seen teams move incredibly fast in the wrong direction. Now I invest more upfront in making sure we're solving the right problem. A week spent on discovery can save months of building the wrong thing. Speed is a multiplier, not a strategy."
  },
  {
    id: "5",
    name: "[Leader Name]",
    role: "Principal PM",
    preview: "The best product decisions are often the hardest conversations.",
    fullStory: "Saying no is the hardest part of product management. No to stakeholders with good ideas. No to features that would help some users but not most. No to that shiny thing that's distracting from the core. But every no creates space for a better yes. The courage to have those hard conversations is what separates good product managers from great ones."
  }
];

export function ProductLeadersSpeak() {
  const [selectedLeader, setSelectedLeader] = useState<LeaderTestimonial | null>(null);
  const [direction, setDirection] = useState(0);

  const currentIndex = selectedLeader 
    ? testimonials.findIndex(t => t.id === selectedLeader.id) 
    : -1;

  const goToNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setDirection(1);
      setSelectedLeader(testimonials[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setSelectedLeader(testimonials[currentIndex - 1]);
    }
  };

  return (
    <div className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="font-handwritten text-4xl md:text-5xl text-navy-800 mb-4">
          Product Leaders Speak
        </h3>
        <p className="font-caveat text-xl text-navy-600/80 max-w-xl mx-auto">
          Wisdom from the trenches — real stories from those who've shipped, failed, and grown
        </p>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.slice(0, 5).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedLeader(testimonial)}
            className={`relative cursor-pointer group ${
              index === 3 ? "md:col-span-1 lg:col-span-1" : ""
            } ${index === 4 ? "md:col-span-1 lg:col-span-1" : ""}`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-cream-300/50 h-full flex flex-col"
              style={{ 
                transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (index * 0.3)}deg)`,
              }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-coral-400/40 mb-3" />
              
              {/* Preview text */}
              <p className="font-caveat text-xl text-navy-700 mb-4 flex-1 leading-relaxed">
                "{testimonial.preview}"
              </p>
              
              {/* Leader info */}
              <div className="border-t border-cream-200 pt-4 mt-auto">
                <p className="font-handwritten text-lg text-navy-800">{testimonial.name}</p>
                <p className="text-sm text-navy-500">{testimonial.role}</p>
              </div>
              
              {/* Read more CTA */}
              <div className="mt-3 font-handwritten text-coral-500 text-lg group-hover:text-coral-600 transition-colors">
                Read full story →
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded View Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLeader(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" />
            
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-cream-100 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto shadow-2xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2 hover:bg-navy-100/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-navy-600" />
              </button>

              <div className="p-8 md:p-10">
                <Quote className="w-12 h-12 text-coral-400/30 mb-4" />
                
                <p className="font-caveat text-2xl md:text-3xl text-navy-700 mb-6 leading-relaxed">
                  "{selectedLeader.preview}"
                </p>
                
                <p className="text-navy-600 leading-relaxed mb-8">
                  {selectedLeader.fullStory}
                </p>
                
                <div className="border-t border-cream-300 pt-6">
                  <p className="font-handwritten text-2xl text-navy-800">{selectedLeader.name}</p>
                  <p className="text-navy-500">{selectedLeader.role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center px-8 pb-6">
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  disabled={currentIndex === 0}
                  className={`flex items-center gap-2 font-handwritten text-lg transition-colors ${
                    currentIndex === 0 
                      ? "text-navy-300 cursor-not-allowed" 
                      : "text-coral-500 hover:text-coral-600"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                
                <span className="font-handwritten text-navy-400">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  disabled={currentIndex === testimonials.length - 1}
                  className={`flex items-center gap-2 font-handwritten text-lg transition-colors ${
                    currentIndex === testimonials.length - 1 
                      ? "text-navy-300 cursor-not-allowed" 
                      : "text-coral-500 hover:text-coral-600"
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
