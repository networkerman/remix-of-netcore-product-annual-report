import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Zap } from "lucide-react";

interface Feature {
  month: string;
  features: {
    name: string;
    product: "CE" | "CPaaS" | "Unbxd";
    highlight?: boolean;
  }[];
}

const yearData: Feature[] = [
  { month: "Jan", features: [
    { name: "Analytics Dashboard v2", product: "CE", highlight: true },
    { name: "Webhook Enhancements", product: "CPaaS" },
  ]},
  { month: "Feb", features: [
    { name: "Email Template Builder", product: "CE" },
    { name: "Rate Limiting APIs", product: "CPaaS" },
    { name: "Search Analytics", product: "Unbxd" },
  ]},
  { month: "Mar", features: [
    { name: "Journey Builder 3.0", product: "CE", highlight: true },
    { name: "WhatsApp Business API", product: "CPaaS" },
  ]},
  { month: "Apr", features: [
    { name: "Segment Sync", product: "CE" },
    { name: "SMS Templates", product: "CPaaS" },
    { name: "Shopify App v2", product: "Unbxd", highlight: true },
  ]},
  { month: "May", features: [
    { name: "AI Recommendations", product: "CE" },
    { name: "Voice API Beta", product: "CPaaS" },
  ]},
  { month: "Jun", features: [
    { name: "Cross-Platform Analytics", product: "CE", highlight: true },
    { name: "RCS Messaging", product: "CPaaS" },
    { name: "Visual Search", product: "Unbxd" },
  ]},
  { month: "Jul", features: [
    { name: "Campaign Automation", product: "CE" },
    { name: "Two-Factor Auth API", product: "CPaaS" },
  ]},
  { month: "Aug", features: [
    { name: "Customer 360 View", product: "CE" },
    { name: "Number Masking", product: "CPaaS" },
    { name: "Personalization Engine", product: "Unbxd", highlight: true },
  ]},
  { month: "Sep", features: [
    { name: "Predictive Analytics", product: "CE", highlight: true },
    { name: "WhatsApp Commerce", product: "CPaaS" },
  ]},
  { month: "Oct", features: [
    { name: "Real-time Triggers", product: "CE" },
    { name: "Video API", product: "CPaaS" },
    { name: "AI Merchandising", product: "Unbxd" },
  ]},
  { month: "Nov", features: [
    { name: "Attribution Modeling", product: "CE" },
    { name: "Chat SDK v3", product: "CPaaS", highlight: true },
  ]},
  { month: "Dec", features: [
    { name: "Year-End Reports", product: "CE" },
    { name: "API v3 Launch", product: "CPaaS" },
    { name: "Holiday Readiness Suite", product: "Unbxd" },
  ]},
];

const productColors = {
  CE: { bg: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/30" },
  CPaaS: { bg: "bg-coral-400/10", text: "text-coral-500", border: "border-coral-400/30" },
  Unbxd: { bg: "bg-accent/20", text: "text-amber-600", border: "border-accent/40" },
};

export function YearAtGlance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [productFilter, setProductFilter] = useState<"All" | "CE" | "CPaaS" | "Unbxd">("All");

  const filteredData = yearData.map(month => ({
    ...month,
    features: productFilter === "All" 
      ? month.features 
      : month.features.filter(f => f.product === productFilter)
  }));

  return (
    <section
      id="year-glance"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="caption text-primary mb-4 block">Everything We Shipped</span>
          <h2 className="section-heading text-foreground mb-6">Year at a Glance</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            Month by month, feature by feature. Here's the complete timeline of what we built in 2025.
          </p>
        </motion.div>

        {/* Product Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {["All", "CE", "CPaaS", "Unbxd"].map((product) => (
            <button
              key={product}
              onClick={() => setProductFilter(product as typeof productFilter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                productFilter === product
                  ? "bg-foreground text-background"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              {product}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden lg:block" />

          {/* Months */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredData.map((month, index) => (
              <motion.div
                key={month.month}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                {/* Month Marker */}
                <div 
                  className={`relative z-10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    selectedMonth === month.month 
                      ? "bg-primary text-primary-foreground scale-110" 
                      : "bg-card border-2 border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedMonth(selectedMonth === month.month ? null : month.month)}
                >
                  <span className="font-bold text-sm">{month.month}</span>
                </div>

                {/* Feature Count */}
                <p className="text-center text-sm text-foreground/60 mb-4">
                  {month.features.length} feature{month.features.length !== 1 ? "s" : ""}
                </p>

                {/* Expanded Features */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: selectedMonth === month.month ? "auto" : 0,
                    opacity: selectedMonth === month.month ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-2">
                    {month.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className={`p-3 rounded-xl border ${productColors[feature.product].border} ${productColors[feature.product].bg} ${
                          feature.highlight ? "ring-2 ring-primary/20" : ""
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {feature.highlight && (
                            <Zap size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          )}
                          <div>
                            <p className="text-sm font-medium text-foreground leading-tight">{feature.name}</p>
                            <span className={`text-xs ${productColors[feature.product].text}`}>
                              {feature.product}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Total Features", value: "47+" },
            { label: "Cross-Product Launches", value: "8" },
            { label: "Major Releases", value: "12" },
            { label: "Highlight Moments", value: "9" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Click Hint */}
        <p className="text-center text-sm text-foreground/40 mt-8 flex items-center justify-center gap-2">
          <ChevronRight size={14} />
          Click on a month to see features
        </p>
      </div>
    </section>
  );
}
