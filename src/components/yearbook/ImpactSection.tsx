import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, TrendingUp, Users, Zap, Target } from "lucide-react";

const testimonials = [
  {
    type: "internal",
    quote: "The new Analytics dashboard changed how I work. I can finally see the full picture in one place.",
    author: "[Employee Name]",
    role: "Customer Success Manager",
  },
  {
    type: "customer",
    quote: "Netcore's platform has been instrumental in scaling our engagement strategy. The results speak for themselves.",
    author: "[Customer Name]",
    company: "Fortune 500 Retail",
  },
  {
    type: "internal",
    quote: "Shipping the WhatsApp editor was brutal, but seeing the adoption numbers makes it all worth it.",
    author: "[Employee Name]",
    role: "Engineering Lead",
  },
];

const metrics = [
  { icon: TrendingUp, label: "YoY Growth", value: "[X]%", description: "Platform engagement increase" },
  { icon: Users, label: "Active Users", value: "[X]M+", description: "Monthly active users" },
  { icon: Zap, label: "API Calls", value: "[X]B", description: "Processed this year" },
  { icon: Target, label: "Accuracy", value: "[X]%", description: "Recommendation precision" },
];

export function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
      ref={ref}
      className="py-32 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-coral-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="caption text-teal-400 mb-4 block">Outcomes & Recognition</span>
          <h2 className="section-heading mb-6">Product & Business Impact</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            The numbers that matter and the voices that validated our work. 
            Some metrics are still being finalized—that's the reality of shipping fast.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Quote className="text-coral-400" size={24} />
              What They're Saying
            </h3>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-navy-700/50 border border-cream-100/10 hover:border-teal-500/30 transition-colors"
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    testimonial.type === "internal" 
                      ? "bg-teal-500/20 text-teal-400" 
                      : "bg-coral-400/20 text-coral-400"
                  }`}>
                    {testimonial.type === "internal" ? "Internal" : "Customer"}
                  </span>
                  
                  <p className="text-cream-200 text-lg leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cream-100/10 flex items-center justify-center text-lg">
                      👤
                    </div>
                    <div>
                      <p className="font-medium text-cream-100">{testimonial.author}</p>
                      <p className="text-sm text-cream-400">
                        {"role" in testimonial ? testimonial.role : testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="text-teal-400" size={24} />
              By the Numbers
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-navy-700/50 border border-cream-100/10 hover:border-primary/30 transition-all group"
                >
                  <metric.icon className="text-teal-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <p className="text-3xl font-bold text-cream-100 mb-1">{metric.value}</p>
                  <p className="font-medium text-cream-200 text-sm mb-1">{metric.label}</p>
                  <p className="text-xs text-cream-400">{metric.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Note about metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20"
            >
              <p className="text-sm text-teal-300/80 leading-relaxed">
                <strong className="text-teal-300">Note:</strong> Some metrics are placeholders pending final Q4 data. 
                We believe in showing progress, even when it's incomplete.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
