import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Star, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

export interface HeroLink {
  label: string;
  url: string;
}

export interface HeroStorySection {
  heading?: string;
  content?: string;
  bullets?: string[];
}

export interface HeroBlockProps {
  month: string;
  heroLabel: string;
  title: string;
  subtitle: string;
  highlight: string;
  links: HeroLink[];
  story: HeroStorySection[];
  gradient?: string;
  icon?: React.ReactNode;
}

export function HeroBlock({
  month,
  heroLabel,
  title,
  subtitle,
  highlight,
  links,
  story,
  gradient = "from-accent to-amber-500",
  icon = <BookOpen size={20} />,
}: HeroBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="group relative w-full"
    >
      {/* Card Container */}
      <motion.div
        layout
        className="relative rounded-2xl overflow-hidden cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative p-8 md:p-10 bg-navy-800/90 backdrop-blur-sm border border-cream-100/10 rounded-2xl">
          {/* Collapsed State - Always Visible */}
          <div className="space-y-6">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-cream-400 text-sm font-medium">{month}</span>
                <span className="text-cream-100/30">•</span>
                <span className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-navy-900 text-xs font-semibold`}>
                  {icon}
                  {heroLabel}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-300 text-sm transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                <span>{isExpanded ? "Collapse" : "Read Full Story"}</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </motion.button>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cream-100 leading-tight">
              {title}
            </h3>

            {/* Subtitle */}
            <p className="text-cream-300/80 text-lg leading-relaxed max-w-3xl">
              {subtitle}
            </p>

            {/* Why It Matters Highlight */}
            <div className="p-5 rounded-xl bg-cream-100/5 border border-cream-100/10">
              <div className="flex items-center gap-2 text-teal-400 mb-3">
                <Star size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Why It Matters
                </span>
              </div>
              <p className="text-cream-200 leading-relaxed">{highlight}</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100/5 border border-cream-100/15 text-cream-300 hover:text-teal-400 hover:border-teal-400/40 hover:bg-teal-400/10 text-sm transition-all duration-300"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Expanded State - Full Story */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-10 mt-10 border-t border-cream-100/10">
                  <div className="prose prose-invert max-w-none">
                    {story.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="mb-8"
                      >
                        {section.heading && (
                          <h4 className="text-xl md:text-2xl font-bold text-cream-100 mb-4">
                            {section.heading}
                          </h4>
                        )}
                        {section.content && (
                          <p className="text-cream-300/80 leading-relaxed text-base md:text-lg mb-4">
                            {section.content}
                          </p>
                        )}
                        {section.bullets && section.bullets.length > 0 && (
                          <ul className="space-y-2">
                            {section.bullets.map((bullet, bulletIndex) => (
                              <li
                                key={bulletIndex}
                                className="flex items-start gap-3 text-cream-300/80"
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                <span className="leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Glow Effect on Hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 -z-10`}
      />
    </motion.div>
  );
}
