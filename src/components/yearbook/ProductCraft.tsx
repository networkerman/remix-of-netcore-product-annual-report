import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Trophy, Users, TrendingUp, Activity, PieChart, Route, BarChart3, Sparkles, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";
import pepeJeansLogo from "@/assets/brands/pepe-jeans-logo.png";
import plumGoodnessLogo from "@/assets/brands/plum-goodness-logo.webp";
import martechAwardImg from "@/assets/awards/martech-ai-award.jpg";

export function ProductCraft() {
  const ref = useRef(null);
  const awardCardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Celebrate button state
  const [celebrated, setCelebrated] = useState(() => {
    return localStorage.getItem('martechAwardCelebrated') === 'true';
  });
  
  // Fireworks state
  const [fireworksShown, setFireworksShown] = useState(() => {
    return localStorage.getItem('martechAwardFireworksShown') === 'true';
  });

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const triggerFireworks = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#FFD700', '#FF6B35', '#4ECDC4']
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#FFD700', '#FF6B35', '#4ECDC4']
      });
    }, 250);
  };

  const handleCelebrate = () => {
    if (celebrated) return;
    
    triggerConfetti();
    setCelebrated(true);
    localStorage.setItem('martechAwardCelebrated', 'true');
  };

  // Auto-fireworks when card is in view for 1+ second
  useEffect(() => {
    if (fireworksShown) return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => {
              triggerFireworks();
              setFireworksShown(true);
              localStorage.setItem('martechAwardFireworksShown', 'true');
            }, 1000);
          } else {
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (awardCardRef.current) {
      observer.observe(awardCardRef.current);
    }

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [fireworksShown]);

  return (
    <section
      id="craft"
      ref={ref}
      className="py-32 bg-cream-100 relative overflow-hidden"
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

        {/* 3-Row Layout */}
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          
          {/* Row 1: MartechAI Award - Full Width Horizontal Hero */}
          <motion.div
            ref={awardCardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="group relative w-full p-6 md:p-8 rounded-2xl bg-cream-50 border-2 border-amber-400/60 flex flex-col md:flex-row items-center gap-6 md:gap-10 overflow-hidden"
          >
            {/* Left: Award Image - 1:1 aspect ratio */}
            <div className="relative z-10 w-full md:w-2/5 aspect-square rounded-xl overflow-hidden bg-amber-100/50 shrink-0 shadow-lg">
              <img 
                src={martechAwardImg} 
                alt="MartechAI Award Trophy" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right: Award Details */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-amber-500 w-8 h-8" />
                <h4 className="font-bold text-2xl md:text-3xl text-amber-900">MartechAI Award</h4>
              </div>
              
              <p className="text-amber-800 font-semibold text-lg md:text-xl mb-3">
                Best Use of Analytics. Proven by results.
              </p>
              
              <p className="text-amber-900/80 text-sm md:text-base mb-5 max-w-md">
                Powered Pepe Jeans to shift from broad campaigns to precision journeys with clear revenue impact.
              </p>
              
              {/* Metrics Highlight Box */}
              <div className="bg-amber-100/80 border border-amber-400/40 rounded-xl px-4 py-3 mb-5 w-full md:w-auto">
                <p className="text-amber-900 font-bold text-base md:text-lg">
                  2.6X Conversion Growth & 12.8X ROI
                </p>
                <p className="text-amber-800 text-xs md:text-sm">
                  with Netcore's RFM and AI Segments, Funnel Analytics & STO
                </p>
              </div>

              {/* Celebrate Button */}
              <motion.button 
                onClick={handleCelebrate}
                disabled={celebrated}
                whileTap={celebrated ? {} : { scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  celebrated 
                    ? 'bg-green-500/20 text-green-700 cursor-default border border-green-400/40' 
                    : 'bg-white/80 hover:bg-white border border-amber-300 shadow-sm hover:shadow-md hover:scale-105 text-amber-900'
                }`}
              >
                {celebrated ? (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Celebrated!</span>
                  </>
                ) : (
                  <>
                    <PartyPopper className="w-5 h-5" />
                    <span>Celebrate!</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Row 2: Metrics - Customer Adoption + NPS Score (Stacked vertically) */}
          <div className="flex flex-col gap-16 py-8">
            {/* Customer Adoption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h4 className="font-bold text-xl text-foreground mb-8">Customer Adoption</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-coral-100 flex items-center justify-center mb-3">
                    <Activity className="text-coral-500 w-6 h-6" />
                  </div>
                  <span className="font-bold text-3xl text-coral-500">100+</span>
                  <span className="text-foreground/70 text-sm mt-1">Funnel Active</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-coral-100 flex items-center justify-center mb-3">
                    <PieChart className="text-coral-500 w-6 h-6" />
                  </div>
                  <span className="font-bold text-3xl text-coral-500">70+</span>
                  <span className="text-foreground/70 text-sm mt-1">RFM Active</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-coral-100 flex items-center justify-center mb-3">
                    <Users className="text-coral-500 w-6 h-6" />
                  </div>
                  <span className="font-bold text-3xl text-coral-500">78+</span>
                  <span className="text-foreground/70 text-sm mt-1">Cohort Active</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-coral-100 flex items-center justify-center mb-3">
                    <Route className="text-coral-500 w-6 h-6" />
                  </div>
                  <span className="font-bold text-3xl text-coral-500">48+</span>
                  <span className="text-foreground/70 text-sm mt-1">User Path Active</span>
                </div>
              </div>
            </motion.div>

            {/* NPS Score Improved */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h4 className="font-bold text-xl text-foreground mb-8">NPS Score Improved</h4>
              <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <TrendingUp className="text-green-600 w-6 h-6" />
                  </div>
                  <span className="font-bold text-3xl text-green-600">+63%</span>
                  <span className="text-foreground/70 text-sm mt-1">RFM & Cohort NPS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <BarChart3 className="text-green-600 w-6 h-6" />
                  </div>
                  <span className="font-bold text-3xl text-green-600">+44%</span>
                  <span className="text-foreground/70 text-sm mt-1">Funnel NPS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Success Stories Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8"
          >
            Success Stories
          </motion.h3>

          {/* Row 3: Case Studies - Pepe Jeans + Plum (moved below metrics) */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pepe Jeans Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-card border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 flex items-center">
                  <img src={pepeJeansLogo} alt="Pepe Jeans" className="h-12 w-auto object-contain" />
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

            {/* Plum Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-card border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 flex items-center">
                  <img src={plumGoodnessLogo} alt="Plum Goodness" className="h-12 w-auto object-contain" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
