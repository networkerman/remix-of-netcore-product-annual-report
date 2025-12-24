import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface QA {
  question: string;
  answer: string | string[];
}

interface LeaderTestimonial {
  id: number;
  name: string;
  role: string;
  collapsedQuote: string;
  expandedContent: QA[];
}

const leaderTestimonials: LeaderTestimonial[] = [
  {
    id: 1,
    name: "Avadhoot Revankar",
    role: "Chief of Growth",
    collapsedQuote: "The pace and accuracy with which analytics was built stood out.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The way in which we built the analytics module at a fairly good pace with good level of accuracy.",
      },
      {
        question: "How did Product help you win customers?",
        answer: [
          "Recs across channels has helped us win many ecom & retail prospects - SouledStore, OneDayOnly & many others.",
          "Analytics has helped us successfully migrate a lot of brands like Boost wallet and others from competition.",
          "Advancements in Affinity/propensity model has been a great addition to help brands grow revenue & win prospects as well.",
        ],
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "More approachable.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: [
          "Jibran during the meeting with OneDayOnly founder.",
          "Bharat in multiple meetings to deep dive in Analytics.",
          "Yogesh in all complex deals like ICICI prudential, Purvankara etc.",
          "Udayan in cases where we need to solution with brands for Whatsapp.",
          "Deepesh on making sure we get all the needed answers on billing & other critical asks.",
        ],
      },
      {
        question: "Suggestions for 2026?",
        answer: "Driving adoption aggressively & meeting more customers & prospects for deeper insights.",
      },
    ],
  },
  {
    id: 2,
    name: "Praveen Sridhar",
    role: "Chief Delivery and Experience Officer",
    collapsedQuote: "They simplified the platform while improving outcomes.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The simplification of platform navigation and improved user workflows that directly impacted customer satisfaction scores.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "By delivering features that customers actually asked for, with clear documentation and smooth onboarding experiences.",
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "Regular syncs with delivery teams helped bridge gaps faster.",
      },
    ],
  },
  {
    id: 3,
    name: "Srikanth Kumar",
    role: "VP – Engineering",
    collapsedQuote: "Catalog enrichment and the docs revamp changed how we demo value.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The catalog enrichment feature and complete documentation revamp were game-changers for our pre-sales demos.",
      },
      {
        question: "How did Product help you win customers?",
        answer: [
          "Clear API documentation reduced integration time significantly.",
          "Catalog enrichment became a key differentiator in competitive deals.",
        ],
      },
      {
        question: "A firefighter moment you recall?",
        answer: "The team's quick response during the Q3 migration crisis was exceptional.",
      },
    ],
  },
  {
    id: 4,
    name: "Sudhaamshu",
    role: "Global Head – IIT",
    collapsedQuote: "Ease of use became a real differentiator.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "Making complex features accessible through intuitive interfaces.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "The focus on user experience made demos more impactful and reduced training time for new clients.",
      },
      {
        question: "Suggestions for 2026?",
        answer: "Continue the UX-first approach and invest more in self-service capabilities.",
      },
    ],
  },
  {
    id: 5,
    name: "Deepthi Nagarajan",
    role: "VP – Marketing",
    collapsedQuote: "Analytics and demos helped us win confidence.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The analytics dashboard redesign gave us compelling stories to tell in our marketing campaigns.",
      },
      {
        question: "How did Product help you win customers?",
        answer: [
          "Demo environments became more polished and conversion-focused.",
          "Case study data from product analytics powered our content strategy.",
        ],
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "Product marketing syncs became more regular and collaborative.",
      },
    ],
  },
  {
    id: 6,
    name: "Monu Goyal",
    role: "Senior Manager – Customer Success",
    collapsedQuote: "Personalization upgrades made a visible impact.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The personalization engine upgrades directly improved customer retention metrics.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "Features like smart recommendations helped customers see immediate ROI.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "Quick turnaround on a critical bug that was affecting a major enterprise client.",
      },
    ],
  },
  {
    id: 7,
    name: "Mayank",
    role: "AVP – PSS",
    collapsedQuote: "Agentic AI became a strong customer story.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "Launching Agentic AI capabilities that became a major talking point in sales conversations.",
      },
      {
        question: "How did Product help you win customers?",
        answer: [
          "AI-powered features differentiated us from competitors.",
          "The product roadmap vision excited enterprise prospects.",
        ],
      },
      {
        question: "Suggestions for 2026?",
        answer: "Double down on AI and automation stories.",
      },
    ],
  },
  {
    id: 8,
    name: "Arpit Khurana",
    role: "PSS Lead – India",
    collapsedQuote: "Documentation quality changed customer conversations.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The complete overhaul of technical documentation made implementation smoother.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "Customers could self-serve better, reducing support tickets and improving satisfaction.",
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "More responsive to field feedback and faster feature iterations.",
      },
    ],
  },
  {
    id: 9,
    name: "Tanmay Sinha",
    role: "Associate Product Marketing Manager – Netcore Unbxd",
    collapsedQuote: "Gartner recognition validated the product and the people.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The Gartner recognition was a testament to the team's consistent execution and innovation.",
      },
      {
        question: "How did Product help you win customers?",
        answer: [
          "Analyst recognition gave us credibility in enterprise conversations.",
          "The product improvements backing the recognition were tangible and demonstrable.",
        ],
      },
      {
        question: "Suggestions for 2026?",
        answer: "Maintain the momentum and aim for even stronger analyst positioning.",
      },
    ],
  },
];

export function LeadershipSpeaks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openTestimonial, setOpenTestimonial] = useState<LeaderTestimonial | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="leadership-speaks"
      ref={ref}
      className="py-24 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="caption text-teal-400 mb-4 block">Outcomes & Recognition</span>
          <h2 className="section-heading mb-6">Leadership Speaks</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            We asked leaders across the company to share their honest reflections on the Product Team this year.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {leaderTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4"
              >
                <div
                  className={`bg-navy-700/50 backdrop-blur-sm border border-cream-100/10 rounded-3xl p-8 md:p-12 transition-all duration-500 ${
                    selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-50"
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-teal-400" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl text-cream-100 leading-relaxed mb-4 font-light">
                    "{testimonial.collapsedQuote}"
                  </blockquote>

                  {/* View Full Testimonial CTA */}
                  <button
                    onClick={() => setOpenTestimonial(testimonial)}
                    className="text-teal-400 hover:text-teal-300 text-sm font-medium mb-6 transition-colors"
                  >
                    View full testimonial →
                  </button>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-coral-400 flex items-center justify-center text-lg font-bold text-cream-100">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-cream-100">{testimonial.name}</p>
                      <p className="text-cream-300/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-2 mt-8"
        >
          {leaderTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-teal-400 w-8"
                  : "bg-cream-100/30 hover:bg-cream-100/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Full Testimonial Dialog */}
      <Dialog open={!!openTestimonial} onOpenChange={() => setOpenTestimonial(null)}>
        <DialogContent className="bg-navy-800 border-cream-100/10 text-cream-100 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-cream-100 text-xl">Full Testimonial</DialogTitle>
          </DialogHeader>
          {openTestimonial && (
            <div className="mt-4">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-teal-400" />
              </div>

              {/* Q&A Content */}
              <div className="space-y-6 mb-8">
                {openTestimonial.expandedContent.map((qa, idx) => (
                  <div key={idx}>
                    <p className="text-teal-400 font-medium mb-2">Q: {qa.question}</p>
                    {Array.isArray(qa.answer) ? (
                      <ul className="text-cream-200/90 space-y-2 pl-4">
                        {qa.answer.map((item, i) => (
                          <li key={i} className="list-disc">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-cream-200/90">A: {qa.answer}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-cream-100/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-coral-400 flex items-center justify-center text-lg font-bold text-cream-100">
                  {openTestimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-cream-100">{openTestimonial.name}</p>
                  <p className="text-cream-300/60 text-sm">{openTestimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
