import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Leader testimonials data
const leaderTestimonials = [
  {
    quote: "Product brought clarity when things felt messy.",
    name: "Alex",
    role: "Director of Marketing",
  },
  {
    quote: "They made us feel like collaborators, not requesters.",
    name: "Priya",
    role: "VP of Engineering",
  },
  {
    quote: "The team consistently showed up with context, not assumptions.",
    name: "Rahul",
    role: "Head of Customer Success",
  },
  {
    quote: "I've never seen a product team this aligned with business goals.",
    name: "Meera",
    role: "Chief Revenue Officer",
  },
  {
    quote: "They ask the right questions before jumping to solutions.",
    name: "Vikram",
    role: "Director of Sales",
  },
  {
    quote: "Product became our strategic partner, not just a delivery team.",
    name: "Anita",
    role: "VP of Operations",
  },
  {
    quote: "They helped us see what customers actually needed.",
    name: "Sameer",
    role: "Head of Support",
  },
  {
    quote: "The transparency in their process built trust across teams.",
    name: "Deepa",
    role: "Director of Design",
  },
  {
    quote: "They owned the hard conversations and made them productive.",
    name: "Karthik",
    role: "Engineering Manager",
  },
  {
    quote: "Product kept us focused when everything felt urgent.",
    name: "Neha",
    role: "VP of Growth",
  },
];

// Word map data - words from company-wide survey
const wordMapData = [
  // Original large words
  { word: "Collaborative", frequency: 45 },
  { word: "Strategic", frequency: 42 },
  { word: "Focused", frequency: 38 },
  { word: "Transparent", frequency: 35 },
  { word: "Reliable", frequency: 33 },
  { word: "Thoughtful", frequency: 31 },
  { word: "Customer-first", frequency: 29 },
  { word: "Innovative", frequency: 27 },
  { word: "Empathetic", frequency: 25 },
  { word: "Data-driven", frequency: 24 },
  { word: "Responsive", frequency: 22 },
  { word: "Proactive", frequency: 21 },
  { word: "Clear", frequency: 20 },
  { word: "Adaptable", frequency: 19 },
  { word: "Aligned", frequency: 18 },
  { word: "Ownership", frequency: 17 },
  { word: "Efficient", frequency: 16 },
  { word: "Curious", frequency: 15 },
  { word: "Supportive", frequency: 14 },
  { word: "Decisive", frequency: 13 },
  // New anchor words (larger)
  { word: "Outcome-driven", frequency: 36 },
  { word: "Execution-focused", frequency: 34 },
  { word: "Insightful", frequency: 30 },
  { word: "Product-minded", frequency: 28 },
  { word: "User-obsessed", frequency: 26 },
  { word: "Pragmatic", frequency: 23 },
  { word: "Accountable", frequency: 21 },
  // New medium words
  { word: "Analytical", frequency: 18 },
  { word: "Structured", frequency: 17 },
  { word: "Methodical", frequency: 16 },
  { word: "Iterative", frequency: 15 },
  { word: "Cross-functional", frequency: 14 },
  { word: "Scalable", frequency: 14 },
  { word: "Disciplined", frequency: 13 },
  { word: "Results-focused", frequency: 13 },
  { word: "Context-aware", frequency: 12 },
  { word: "Ownership-driven", frequency: 12 },
  { word: "Dependable", frequency: 11 },
  { word: "Balanced", frequency: 11 },
  { word: "Metrics-led", frequency: 10 },
  { word: "Solution-oriented", frequency: 10 },
  { word: "Resilient", frequency: 10 },
  // New smaller/filler words
  { word: "Clear-thinking", frequency: 9 },
  { word: "Calm-under-pressure", frequency: 8 },
  { word: "Detail-oriented", frequency: 8 },
  { word: "Always-learning", frequency: 7 },
  { word: "Problem-solvers", frequency: 7 },
  { word: "Delivery-minded", frequency: 6 },
  { word: "Bias-for-action", frequency: 6 },
  { word: "Tradeoff-aware", frequency: 5 },
  { word: "Roadmap-focused", frequency: 5 },
  { word: "Hypothesis-driven", frequency: 5 },
];

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof leaderTestimonials[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.4 }}
      className={`flex-shrink-0 w-[320px] md:w-[400px] p-8 rounded-2xl border transition-all duration-300 ${
        isActive
          ? "bg-background/10 border-primary/30 shadow-lg backdrop-blur-sm"
          : "bg-background/5 border-border/20"
      }`}
    >
      <p className="text-lg md:text-xl leading-relaxed text-background mb-6">
        "{testimonial.quote}"
      </p>
      <div className="text-background/70">
        <span className="font-medium text-background">— {testimonial.name}</span>
        <span className="text-sm">, {testimonial.role}</span>
      </div>
    </motion.div>
  );
}

function WordMap() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, margin: "-50px" });

  // Calculate font sizes based on frequency
  const maxFrequency = Math.max(...wordMapData.map((w) => w.frequency));
  const minFrequency = Math.min(...wordMapData.map((w) => w.frequency));

  const getWordSize = (frequency: number) => {
    const normalized = (frequency - minFrequency) / (maxFrequency - minFrequency);
    return 14 + normalized * 28; // Range from 14px to 42px
  };

  const getWordOpacity = (frequency: number) => {
    const normalized = (frequency - minFrequency) / (maxFrequency - minFrequency);
    return 0.5 + normalized * 0.5; // Range from 0.5 to 1
  };

  // Create organic positioning using golden angle distribution
  const positionedWords = useMemo(() => {
    const sortedWords = [...wordMapData].sort((a, b) => b.frequency - a.frequency);
    const positions: { word: string; frequency: number; x: number; y: number; delay: number }[] = [];
    
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const centerX = 50;
    const centerY = 50;
    
    sortedWords.forEach((wordData, index) => {
      const radius = 8 + Math.sqrt(index) * 12;
      const angle = index * goldenAngle;
      
      // Add some randomness for organic feel
      const randomOffset = (Math.sin(index * 7) * 5);
      
      const x = centerX + Math.cos(angle) * radius + randomOffset;
      const y = centerY + Math.sin(angle) * (radius * 0.6) + randomOffset * 0.5;
      
      positions.push({
        ...wordData,
        x: Math.max(10, Math.min(90, x)),
        y: Math.max(15, Math.min(85, y)),
        delay: index * 0.05,
      });
    });
    
    return positions;
  }, []);

  return (
    <div
      ref={mapRef}
      className="relative w-full h-[400px] md:h-[450px] rounded-2xl bg-background/5 border border-background/10 overflow-hidden"
    >
      {positionedWords.map((wordData, index) => (
        <motion.span
          key={wordData.word}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: getWordOpacity(wordData.frequency), scale: 1 } : {}}
          transition={{ duration: 0.5, delay: wordData.delay }}
          style={{
            position: "absolute",
            left: `${wordData.x}%`,
            top: `${wordData.y}%`,
            fontSize: `${getWordSize(wordData.frequency)}px`,
            transform: "translate(-50%, -50%)",
          }}
          className={`font-semibold cursor-default transition-all duration-300 whitespace-nowrap ${
            hoveredWord === wordData.word
              ? "text-primary scale-110 z-10"
              : "text-background/80 hover:text-primary/80"
          }`}
          onMouseEnter={() => setHoveredWord(wordData.word)}
          onMouseLeave={() => setHoveredWord(null)}
        >
          {wordData.word}
        </motion.span>
      ))}
      
      {/* Hover tooltip */}
      {hoveredWord && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background border border-border rounded-lg shadow-lg"
        >
          <span className="text-sm text-foreground/70">
            <span className="font-medium text-foreground">{hoveredWord}</span>
            {" — "}
            {wordMapData.find((w) => w.word === hoveredWord)?.frequency} mentions
          </span>
        </motion.div>
      )}
    </div>
  );
}

export function LeaderVoices() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 336 : 416; // card width + gap
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(leaderTestimonials.length - 1, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="leader-voices"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted text-muted-foreground relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="caption text-primary mb-4 block">Outcomes & Recognition</span>
          <h2 className="section-heading text-background mb-6">Leadership Speaks</h2>
          <p className="body-large text-background/70 max-w-2xl mx-auto">
            We asked leaders across the company to share their honest reflections on the Product Team this year.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-20"
        >
          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {leaderTestimonials.map((testimonial, index) => (
              <div key={index} className="snap-start">
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={index === currentIndex}
                />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full border border-background/20 bg-background/10 hover:bg-background/20 text-background transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots indicator */}
            <div className="flex gap-2">
              {leaderTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-background/30 hover:bg-background/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === leaderTestimonials.length - 1}
              className="p-3 rounded-full border border-background/20 bg-background/10 hover:bg-background/20 text-background transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Word Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-sm text-background/60 uppercase tracking-widest mb-2">
              Company-wide Survey
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-background">
              "Describe the Product team in 3 words"
            </h3>
          </div>

          <WordMap />

          {/* Closing line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center mt-10 text-background/70 italic"
          >
            Different voices. A shared sense of trust.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
