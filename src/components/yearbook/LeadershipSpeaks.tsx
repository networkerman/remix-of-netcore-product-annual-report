import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Leader images
import sudhaamshuImg from "@/assets/team/sudhaamshu.png";
import monuGoyalImg from "@/assets/team/monu-goyal.png";
import arpitKhuranaImg from "@/assets/team/arpit-khurana.png";
import deepthiNagarajanImg from "@/assets/team/deepthi-nagarajan.png";
import mayankTomarImg from "@/assets/team/mayank-tomar.png";
import praveenSridharImg from "@/assets/team/praveen-sridhar.png";

interface QA {
  question: string;
  answer: string | string[];
}

interface LeaderTestimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
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
    image: praveenSridharImg,
    collapsedQuote: "They simplified the platform while improving outcomes.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "Features like journey frequency management, product catalog sync, and Segment-on-Segment simplified the platform and reduced dependency on complex structures.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "The same capabilities directly improved outcomes while reducing operational complexity.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Jibran",
          "Situation: Handling one-day-only custom requests",
          "Impact: Prevented churn and ensured timely MRR billing",
        ],
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "Significantly faster response times.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "Jibran's hands-on involvement throughout a complex OneDayOnly onboarding.",
      },
      {
        question: "Suggestions for 2026?",
        answer: "Include more IIT asks in quarterly roadmaps, build Zoho and Salesforce connectors, and focus more on analytics and usability.",
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
        answer: "Being named a leader in the Gartner Magic Quadrant for the second consecutive year was a proud moment.",
      },
      {
        question: "How has the Product team helped you win customers?",
        answer: "Catalog enrichment had the biggest impact on the Unbxd Console. It became a lifesaver for POCs and helped clearly demonstrate the value of our AI services. The complete revamp of the documentation website also elevated our product's market perception.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Aishwarya",
          "Situation: Extremely fast documentation for new features across Search and Recommendations",
          "Impact: Reduced confusion, fewer queries, and fewer complaints about undocumented features",
        ],
      },
      {
        question: "What's the biggest improvement in Product team's approachability?",
        answer: "The ability to run UATs on beta features and catch functional and usability issues early.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "Abhinav stepping in to help resurrect the Agents work during a critical phase.",
      },
      {
        question: "Advice for better collaboration in 2026?",
        answer: "Vet product features with customers before engineering sprints and actively engage customers post-release to drive adoption and feedback.",
      },
    ],
  },
  {
    id: 4,
    name: "Sudhaamshu",
    role: "Global Head – IIT",
    image: sudhaamshuImg,
    collapsedQuote: "Ease of use became a real differentiator.",
    expandedContent: [
      {
        question: "What was a standout Product team moment this year?",
        answer: "A strong focus on customer experience and ease of use. Features like frequency management within journeys, product catalog sync, and Segment-on-Segment made the platform far simpler to use without complex structuring.",
      },
      {
        question: "How has the Product team helped you win customers?",
        answer: "Same as above—ease of use and simplification played a major role.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Jibran",
          "Situation: Handling one-day-only custom requests",
          "Impact: Helped avert churn risk and ensured MRR was billed on time",
        ],
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "Much faster response turnaround times.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "For the OneDayOnly account, Jibran stayed throughout onboarding, helped strategize, and delivered quick workarounds to manage complex requirements.",
      },
      {
        question: "Suggestions for collaboration in 2026?",
        answer: "Allocate quarterly scope for IIT-specific asks, build connectors with platforms like Zoho and Salesforce, and invest more in analytics and usability.",
      },
    ],
  },
  {
    id: 5,
    name: "Deepthi Nagarajan",
    role: "VP – Marketing",
    image: deepthiNagarajanImg,
    collapsedQuote: "Analytics and demos helped us win confidence.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The analytics launch and customer case studies with Plum Goodness and Pepe Jeans.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "Product demos for the Agentic Marketing Event in Mumbai played a key role.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Bharat Choudhary",
          "Situation: Consistently supporting Marketing with launches",
          "Impact: Enabled faster go-to-market with a collaborative, customer-first mindset",
        ],
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "Stronger collaboration with Product Marketing over the last three months, especially around events and adoption initiatives.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "Bharat stepping in during time-sensitive needs without hesitation.",
      },
      {
        question: "Advice for better collaboration in 2026?",
        answer: "Align product and marketing action plans more closely around shared revenue outcomes and increase visibility into each team's impact.",
      },
    ],
  },
  {
    id: 6,
    name: "Monu Goyal",
    role: "Senior Manager – Customer Success",
    image: monuGoyalImg,
    collapsedQuote: "Personalization upgrades made a visible impact.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "Content Personalization upgrades.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "UCE improvements and Product Picker enhancements.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Jibran Dalvie",
          "Situation: Took full accountability for every request, big or small",
          "Impact: Delivered exactly what the client needed",
        ],
      },
      {
        question: "Has Product team's approachability changed?",
        answer: "Approachability was never an issue.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "Udayan resolving a critical WhatsApp consent management issue.",
      },
      {
        question: "Advice for 2026?",
        answer: "Stronger ownership and better documentation of discussed features to prevent drop-offs post-alignment.",
      },
    ],
  },
  {
    id: 7,
    name: "Mayank Tomar",
    role: "AVP – PSS",
    image: mayankTomarImg,
    collapsedQuote: "Agentic AI became a strong customer story.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "The Agentic AI roadmap and feature development, especially Content and Insight Agents showcased during events.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "Continuous enhancements to OneDayOnly's Product Picker helped ensure full utilization.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Jibran Dalvi",
          "Situation: Supporting Product Picker and DSTV personalization development",
          "Impact: $16K MRR onboarding for OneDayOnly and $7K MRR pipeline for DSTV",
        ],
      },
      {
        question: "Biggest improvement in Product team's approachability?",
        answer: "More structured decision-making with stronger business validation.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "Bharat personally stepping in during Grameenphone's analytics evaluation to remove ambiguity.",
      },
      {
        question: "Suggestions for 2026?",
        answer: "Innovate more visibly, engage SEA and MEA customers, strengthen thought leadership, publish stronger use cases, invest in PSS training, and elevate UI/UX impact.",
      },
    ],
  },
  {
    id: 8,
    name: "Arpit Khurana",
    role: "PSS Lead – India",
    image: arpitKhuranaImg,
    collapsedQuote: "Documentation quality changed customer conversations.",
    expandedContent: [
      {
        question: "What was the Product team's standout moment this year?",
        answer: "Unlocking WhatsApp third-party integrations.",
      },
      {
        question: "How did Product help you win customers?",
        answer: "Insights Agent and faster analytics delivery.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Gargi",
          "Situation & Impact: Transformed documentation quality, making it easier to handle demanding customers with confidence",
        ],
      },
      {
        question: "Has Product's approachability changed?",
        answer: "It has remained the same.",
      },
      {
        question: "A firefighter moment you recall?",
        answer: "Deepesh Lakhera consistently stepping in to help across multiple situations.",
      },
      {
        question: "Advice for 2026?",
        answer: "More training for customer-facing teams and deeper analysis of how large customers use competitor platforms.",
      },
    ],
  },
  {
    id: 9,
    name: "Tanmay Sinha",
    role: "Associate Product Marketing Manager – Netcore UNBXD",
    collapsedQuote: "Gartner recognition validated the product and the people.",
    expandedContent: [
      {
        question: "What was one standout moment this year where the Product team exceeded expectations?",
        answer: "The Gartner Magic Quadrant recognition stood out. Our product ranked very high with the top score in the Current Offering category, far surpassing other enterprise-grade competitors.",
      },
      {
        question: "How has the Product team helped you win customers?",
        answer: "While Product Marketing does not directly prospect or interact with customers, we gather testimonials to support customer-led growth. The feedback consistently reflects high praise for both the product and the people building it.",
      },
      {
        question: "Who deserves a WOW Card this year?",
        answer: [
          "WOW: Gargi Mukherjee",
          "Situation: Migration and updating of Netcore Unbxd technical documentation",
          "Impact: Helped strengthen our AEO efforts and significantly improved citation numbers",
        ],
      },
      {
        question: "How has the Product team's approachability changed compared to last year?",
        answer: "Shorter review cycles. Thanks to better coordination with Ravi, Avani, Karan, Abhinav, and Nishant Jain, we were able to close multiple assets faster.",
      },
      {
        question: "A moment when the Product team acted as firefighters?",
        answer: "Not applicable.",
      },
      {
        question: "Any suggestions for improving collaboration in 2026?",
        answer: "Improve release coordination between Product, Product Documentation, and Product Marketing. Earlier alignment would help generate stronger market buzz and increase feature adoption.",
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
      className="py-24 bg-cream-100 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Floating Blob Animations */}
      <motion.div
        animate={{
          x: [0, 250, -200, 280, -150, 200, 0],
          y: [0, -200, 180, -120, 250, -180, 0],
          scale: [1, 1.06, 0.94, 1.05, 0.97, 1.03, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-300/20 via-transparent to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -200, 180, -250, 150, -180, 0],
          y: [0, 200, -150, 180, -200, 150, 0],
          scale: [1, 0.95, 1.04, 0.96, 1.05, 0.98, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-coral-300/15 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      {/* Header - stays in container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="caption text-primary mb-4 block">Outcomes & Recognition</span>
          <h2 className="section-heading text-foreground mb-6">Leadership Speaks</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            We asked leaders across the company to share their honest reflections on the Product Team this year.
          </p>
        </motion.div>
      </div>

      {/* Carousel - FULL WIDTH outside container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="overflow-visible w-full relative z-10"
        ref={emblaRef}
      >
        <div className="flex items-center">
          {leaderTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_50%] min-w-0 px-6 py-8 flex justify-center"
            >
              <div
                onClick={() => setOpenTestimonial(testimonial)}
                className={`bg-card backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 md:p-12 transition-all duration-500 w-full max-w-2xl cursor-pointer hover:border-primary/50 hover:shadow-xl ${
                  selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-50"
                }`}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 font-light">
                  "{testimonial.collapsedQuote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 flex items-center justify-center text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* CTA - Below Author Info */}
                <span className="text-primary text-sm font-medium block">
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Controls - back in container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-4 mt-8"
        >
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/15 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-foreground/70" />
          </button>
          
          <div className="flex gap-2">
            {leaderTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-primary w-8"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/15 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-foreground/70" />
          </button>
        </motion.div>
      </div>

      {/* Full Testimonial Dialog */}
      <Dialog open={!!openTestimonial} onOpenChange={() => setOpenTestimonial(null)}>
        <DialogContent className="bg-card border-border text-foreground max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-foreground text-xl">Full Testimonial</DialogTitle>
          </DialogHeader>
          {openTestimonial && (
            <div className="mt-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Q&A Content */}
              <div className="space-y-6 mb-8">
                {openTestimonial.expandedContent.map((qa, idx) => (
                  <div key={idx}>
                    <p className="text-primary font-medium mb-2">Q: {qa.question}</p>
                    {Array.isArray(qa.answer) ? (
                      <ul className="text-foreground/80 space-y-2 pl-4">
                        {qa.answer.map((item, i) => (
                          <li key={i} className="list-disc">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-foreground/80">A: {qa.answer}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 flex items-center justify-center text-lg font-bold text-white">
                  {openTestimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{openTestimonial.name}</p>
                  <p className="text-foreground/60 text-sm">{openTestimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
