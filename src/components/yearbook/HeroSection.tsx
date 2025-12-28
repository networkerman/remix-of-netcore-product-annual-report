import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import netcoreNameLogo from "@/assets/netcore-name-logo.png";

export function HeroSection() {
  return (
    <section
      id="cover"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-cream-100"
    >
      {/* Giant 2025 Watermark in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="font-nunito text-[18rem] md:text-[28rem] lg:text-[35rem] font-extrabold text-teal-400/[0.08] select-none leading-none">
          2025
        </span>
      </div>

      {/* Floating Blob Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 250, -200, 280, -150, 200, 0],
            y: [0, -200, 180, -120, 250, -180, 0],
            scale: [1, 1.06, 0.94, 1.05, 0.97, 1.03, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-teal-300/20 via-transparent to-transparent blur-3xl pointer-events-none"
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* New Netcore Logo - Above Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={netcoreNameLogo} 
              alt="Netcore" 
              className="h-8 md:h-10 mx-auto mb-4" 
            />
          </motion.div>

          {/* Main Title - New Typography Style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            {/* Product - filled italic with line extending right */}
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <span className="font-nunito text-5xl md:text-7xl lg:text-8xl font-extrabold italic text-foreground">
                Product
              </span>
              <div className="hidden md:block w-24 lg:w-40 h-0.5 bg-foreground/60" />
            </div>

            {/* Wrapped - outlined italic with line extending from left */}
            <div className="flex items-center justify-center gap-4 md:gap-6 -mt-1 md:-mt-2">
              <div className="hidden md:block w-24 lg:w-40 h-0.5 bg-foreground/30" />
              <span className="font-nunito text-5xl md:text-7xl lg:text-8xl font-extrabold italic text-outlined text-foreground/70">
                Wrapped
              </span>
            </div>

            {/* 2025 with orange dots */}
            <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
              <span className="w-2 h-2 rounded-full bg-coral-500" />
              <span className="font-nunito text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                2025
              </span>
              <span className="w-2 h-2 rounded-full bg-coral-500" />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="body-large text-foreground/60 max-w-2xl mx-auto mb-12"
          >
            The stories behind the launches, lessons, and wins that made our
            2025 product journey memorable.
          </motion.p>

        </div>
      </div>

      {/* Bottom Section - Product Names + Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-foreground/50"
      >
        {/* Product Names with Dot Separators - Now on top */}
        <div className="flex items-center justify-center gap-4">
          {["CE", "CPaaS", "Unbxd", "PX"].map((product, index) => (
            <span key={product} className="flex items-center gap-4">
              <span className="text-foreground/60 font-medium text-sm">
                {product}
              </span>
              {index < 3 && (
                <span className="w-1 h-1 rounded-full bg-foreground/40" />
              )}
            </span>
          ))}
        </div>

        <span className="text-sm font-medium tracking-wide mt-2">
          Scroll to explore the year
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-coral-400/20" />
    </section>
  );
}
