import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import netcoreNameLogo from "@/assets/netcore-name-logo.png";
import productWrappedTitle from "@/assets/product-wrapped-title.png";

export function HeroSection() {
  return (
    <section
      id="cover"
      className="min-h-screen relative flex flex-col overflow-hidden bg-cream-100"
    >
      {/* Grid Pattern - Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-coral-400/20" />

      {/* Container 1: Netcore Logo */}
      <div className="pt-20 md:pt-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={netcoreNameLogo}
            alt="Netcore"
            className="h-8 md:h-10 mx-auto"
          />
        </motion.div>
      </div>

      {/* Container 2: Product Wrapped Title + 2025 Watermark */}
      <div className="flex-1 relative flex items-center justify-center px-6">
        {/* 2025 Watermark - z-0 with gradient fade */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          style={{
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 70%)'
          }}
        >
          <span className="font-nunito text-[18rem] md:text-[28rem] lg:text-[35rem] font-extrabold text-coral-300 select-none leading-none">
            2025
          </span>
        </div>

        {/* Product Wrapped Title - z-10 */}
        <motion.img
          src={productWrappedTitle}
          alt="Product Wrapped 2025"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full max-w-2xl md:max-w-3xl"
        />
      </div>

      {/* Container 3: Subtitle */}
      <div className="text-center px-6 py-2 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="body-large text-foreground/60 max-w-2xl mx-auto"
        >
          The stories behind the launches, lessons, and wins that made our
          2025 product journey memorable.
        </motion.p>
      </div>

      {/* Container 4: Modules + Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pb-4 text-center relative z-10"
      >
        {/* Product Names with Dot Separators */}
        <div className="flex items-center justify-center gap-6 mb-4">
          {["CE", "CPaaS", "Unbxd", "PX"].map((product, index) => (
            <span key={product} className="flex items-center gap-6">
              <span className="text-foreground/70 font-semibold text-xl md:text-2xl">
                {product}
              </span>
              {index < 3 && (
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
              )}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <span className="text-sm font-medium tracking-wide text-foreground/50">
          Scroll to explore the year
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-foreground/50 mt-2"
        >
          <ChevronDown size={24} className="mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
