import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:flex flex-col items-center gap-2">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="3"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={125.6}
            strokeDashoffset={125.6 - (progress / 100) * 125.6}
            initial={{ strokeDashoffset: 125.6 }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
          {Math.round(progress)}%
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-wider text-foreground/50 font-medium">
        Year Explored
      </span>
    </div>
  );
}
