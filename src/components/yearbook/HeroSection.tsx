import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import netcoreLogo from "@/assets/netcore-logo.png";
export function HeroSection() {
  return <section id="cover" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800">
      {/* Netcore Logo - Top Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <img src={netcoreLogo} alt="Netcore" className="h-10 w-auto" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{
        rotate: 360
      }} transition={{
        duration: 100,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-teal-500/20 via-transparent to-transparent blur-3xl" />
        <motion.div animate={{
        rotate: -360
      }} transition={{
        duration: 80,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-coral-400/20 via-transparent to-transparent blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-8">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Internal Edition • For Netcorians Only</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="editorial-heading text-cream-100 mb-6">
            Product Wrapped
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-300 to-coral-400">
              2025
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="body-large text-cream-300/70 max-w-2xl mx-auto mb-12">The stories behind the launches, lessons, and wins that made our 2025 product journey memorable.</motion.p>

          {/* Decorative Element */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.6
        }} className="flex justify-center gap-8 mb-16">
            {["CE", "CPaaS", "Unbxd", "PX"].map((product, index) => <motion.div key={product} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8 + index * 0.1
          }} className="px-6 py-3 rounded-full border border-cream-300/20 text-cream-300/80 font-medium">
                {product}
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cream-300/50">
        <span className="text-sm font-medium tracking-wide">Scroll to explore the year</span>
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-teal-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-coral-400/20" />
    </section>;
}