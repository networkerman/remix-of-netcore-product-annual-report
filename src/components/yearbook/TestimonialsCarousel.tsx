import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  id: number;
  quote: string;
  fullQuote?: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Partnering with Netcore has been a game-changer for our digital strategy. With their advanced personalization tools and seamless orchestration of journeys, we've seen a 26.82% uplift in overall revenue and a 9X ROI — results that speak for themselves.",
    fullQuote: "Partnering with Netcore has been a game-changer for our digital strategy. With their advanced personalization tools and seamless orchestration of journeys, we've seen a 26.82% uplift in overall revenue and a 9X ROI — results that speak for themselves. Through strategic implementation of pop-ups, web push notifications, and tailored content, we achieved an impressive 97% uplift in engagement rate across our campaigns. Netcore's platform contributed to 10% of our overall revenue, helping us engage high-intent users with the right message at the right time. Their team's support, insights, and commitment to our success made it a truly impactful collaboration. We're excited about the future and the continued growth this partnership will bring.",
    author: "Abhishek Arora",
    role: "CRM, Loyalty & Omni-Channel Customer Acquisition Lead",
    company: "The Jewellery Group",
  },
  {
    id: 2,
    quote: "Partnering with Netcore helped us move from broad targeting to precision marketing. The combination of RFM, AI, and WhatsApp STO gave us deeper customer insights and the ability to reach the right users at the right time. The result — higher conversions, better engagement, and smarter campaign efficiency month after month.",
    author: "Ashutosh Patkar",
    role: "Sr. Manager Ecommerce",
    company: "Pepe Jeans",
  },
  {
    id: 3,
    quote: "Partnering with Netcore has helped us completely transform the way we engage our customers. With Netcore's RFM segmentation and cohort-based insights, we've been able to target the right users with personalized journeys across channels. The result has been a clear uplift in repeat purchases, stronger retention, and higher engagement across channels.",
    author: "Aditi Choudhary",
    role: "Assistant CRM Manager",
    company: "Plum Goodness",
  },
  {
    id: 4,
    quote: "I would like to take a moment to appreciate the new WhatsApp editor, which was built with our feedback in mind. I genuinely like its ease of use and the overall UX/UI.",
    author: "Rupali Nagvanshi",
    role: "",
    company: "Fiserv",
  },
  {
    id: 5,
    quote: "Earlier, the WhatsApp editor was quite poor, with frequent bug issues. The older editor also required many steps to create a template. However, the new WhatsApp UCE offers a much better UI and UX. It's good to see the addition of new and improved features.",
    author: "Deepika M Mohan",
    role: "",
    company: "BigHaat",
  },
];

export function TestimonialsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openTestimonial, setOpenTestimonial] = useState<Testimonial | null>(null);

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
      id="testimonials"
      ref={ref}
      className="py-24 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
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
          <span className="caption text-teal-400 mb-4 block">What Our Customers Say</span>
          <h2 className="section-heading mb-6">Customer Love</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            Real feedback from the people we build for every day.
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
            {testimonials.map((testimonial, index) => (
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
                    "{testimonial.quote}"
                  </blockquote>

                  {/* View Full Testimonial CTA */}
                  {testimonial.fullQuote && (
                    <button
                      onClick={() => setOpenTestimonial(testimonial)}
                      className="text-teal-400 hover:text-teal-300 text-sm font-medium mb-6 transition-colors"
                    >
                      View full testimonial →
                    </button>
                  )}
                  {!testimonial.fullQuote && <div className="mb-4" />}

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-coral-400 flex items-center justify-center text-lg font-bold text-cream-100">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-cream-100">{testimonial.author}</p>
                      <p className="text-cream-300/60 text-sm">
                        {testimonial.role ? `${testimonial.role}, ${testimonial.company}` : testimonial.company}
                      </p>
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
          {testimonials.map((_, index) => (
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
        <DialogContent className="bg-navy-800 border-cream-100/10 text-cream-100 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-cream-100 text-xl">Full Testimonial</DialogTitle>
          </DialogHeader>
          {openTestimonial && (
            <div className="mt-4">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-teal-400" />
              </div>
              <blockquote className="text-lg text-cream-100 leading-relaxed mb-6 font-light">
                "{openTestimonial.fullQuote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-coral-400 flex items-center justify-center text-lg font-bold text-cream-100">
                  {openTestimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-cream-100">{openTestimonial.author}</p>
                  <p className="text-cream-300/60 text-sm">
                    {openTestimonial.role ? `${openTestimonial.role}, ${openTestimonial.company}` : openTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
