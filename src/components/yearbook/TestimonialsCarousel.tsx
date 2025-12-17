import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Placeholder testimonial - The product team's dedication to understanding our needs has transformed how we engage with our customers. A true partnership.",
    author: "Customer Name",
    role: "VP of Marketing",
    company: "Company A",
  },
  {
    id: 2,
    quote: "Placeholder testimonial - What impressed us most was the speed of iteration. Feedback we gave on Monday was often shipped by Friday.",
    author: "Customer Name",
    role: "Head of Growth",
    company: "Company B",
  },
  {
    id: 3,
    quote: "Placeholder testimonial - The analytics capabilities have given us insights we never had before. Our campaigns are performing 3x better.",
    author: "Customer Name",
    role: "Director of Digital",
    company: "Company C",
  },
  {
    id: 4,
    quote: "Placeholder testimonial - Seamless integration, intuitive interface, and a team that genuinely cares about our success. Highly recommended.",
    author: "Customer Name",
    role: "Chief Marketing Officer",
    company: "Company D",
  },
  {
    id: 5,
    quote: "Placeholder testimonial - We've tried many platforms, but this one stands out for its reliability and the constant innovation we see.",
    author: "Customer Name",
    role: "Product Manager",
    company: "Company E",
  },
];

export function TestimonialsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
                  <blockquote className="text-xl md:text-2xl text-cream-100 leading-relaxed mb-8 font-light">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-coral-400 flex items-center justify-center text-lg font-bold text-cream-100">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-cream-100">{testimonial.author}</p>
                      <p className="text-cream-300/60 text-sm">
                        {testimonial.role}, {testimonial.company}
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
    </section>
  );
}
