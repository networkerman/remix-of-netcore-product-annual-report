import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, Users, TrendingUp } from "lucide-react";
import pepeJeansLogo from "@/assets/brands/pepe-jeans-logo.png";
import plumGoodnessLogo from "@/assets/brands/plum-goodness-logo.webp";
import martechAwardImg from "@/assets/awards/martech-ai-award.jpg";

export function ProductCraft() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="craft"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="caption text-primary mb-4 block">Behind the Build</span>
          <h2 className="section-heading text-foreground mb-6">The Stories Behind the Build</h2>
          <p className="body-large text-foreground/60 max-w-2xl mx-auto">
            Among many product wins this year, <strong>Analytics</strong> stands out—<strong>for both its impact and how it was built.</strong>
          </p>
        </motion.div>

        {/* 5 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: MartechAI Award */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-500/30 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-amber-100">
              <img 
                src={martechAwardImg} 
                alt="MartechAI Award Trophy" 
                className="w-full h-full object-cover"
              />
            </div>
            <Award className="text-amber-500 mb-2" size={32} />
            <h4 className="font-bold text-xl text-amber-700 mb-1">MartechAI Award</h4>
            <p className="text-amber-600 font-medium mb-2">Best Use of Analytics</p>
            <p className="text-amber-600/70 text-sm">Recognized with early adopter Pepe Jeans</p>
          </motion.div>

          {/* Card 2: Pepe Jeans Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 flex items-center">
                <img src={pepeJeansLogo} alt="Pepe Jeans" className="h-8 w-auto object-contain" />
              </div>
            </div>
            
            <h4 className="font-bold text-lg text-primary mb-3">
              From broad targeting to precision journeys
            </h4>
            
            <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-grow">
              Shifted from mass campaigns to data-driven precision, improving conversion efficiency with smarter repeat purchase strategies.
            </p>
            
            <div className="px-4 py-3 rounded-xl bg-teal-500/10 border border-teal-500/20 mb-4">
              <p className="text-sm font-medium text-teal-700">
                ✦ Recognized as MartecAI early adopter
              </p>
            </div>

            <a
              href="https://docs.google.com/presentation/d/1bCsOv0dtyABHgkm-xwRY-2H4z4udVCpDT0TTPVbax2M/edit?slide=id.p1#slide=id.p1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              View Case Study <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Card 3: Plum Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 flex items-center">
                <img src={plumGoodnessLogo} alt="Plum Goodness" className="h-8 w-auto object-contain" />
              </div>
            </div>
            
            <h4 className="font-bold text-lg text-primary mb-3">
              RFM and cohort-driven growth
            </h4>
            
            <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-grow">
              Leveraged RFM segmentation and cohort analysis to identify high-value customers and optimize retention campaigns.
            </p>
            
            <div className="px-4 py-3 rounded-xl bg-coral-400/10 border border-coral-400/20 mb-4">
              <p className="text-sm font-medium text-coral-600">
                ✦ 1.4× repeat purchases · 1.7× revenue uplift
              </p>
            </div>

            <a
              href="https://docs.google.com/presentation/d/1CGOP9PXNHRbOz5bQU9uONHKm27WTbilIUHeLxgDMaEU/edit?slide=id.p9#slide=id.p9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              View Case Study <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Card 4: Adoption in Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-cream-100 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-teal-400" size={28} />
              <h4 className="font-bold text-xl text-cream-100">Customer Adoption</h4>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-center py-2 border-b border-cream-100/10">
                <span className="text-cream-300">Funnel Active</span>
                <span className="font-bold text-teal-400 text-lg">100+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-cream-100/10">
                <span className="text-cream-300">RFM Active</span>
                <span className="font-bold text-teal-400 text-lg">70+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-cream-100/10">
                <span className="text-cream-300">Cohort Active</span>
                <span className="font-bold text-teal-400 text-lg">78+</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-cream-300">User Path Active</span>
                <span className="font-bold text-teal-400 text-lg">48+</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: NPS Score Improved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/20 via-primary/10 to-teal-600/20 border-2 border-teal-500/30 flex flex-col md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-teal-600" size={28} />
              <h4 className="font-bold text-xl text-foreground">NPS Score Improved</h4>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-center py-3 px-4 bg-teal-500/10 rounded-xl">
                <span className="text-foreground/80">RFM & Cohort NPS</span>
                <span className="font-bold text-2xl text-teal-600">+63%</span>
              </div>
              <div className="flex justify-between items-center py-3 px-4 bg-teal-500/10 rounded-xl">
                <span className="text-foreground/80">Funnel NPS</span>
                <span className="font-bold text-2xl text-teal-600">+44%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
