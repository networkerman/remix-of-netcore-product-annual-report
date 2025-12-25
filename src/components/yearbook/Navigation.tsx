import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

const navItems = [
  { id: "cover", label: "Cover" },
  { id: "testimonials", label: "Customer Love" },
  { id: "cpo-note", label: "CPO Note" },
  { id: "heroes", label: "Hero of the Year" },
  { id: "craft", label: "Behind the Build" },
  { id: "year-glance", label: "Year at a Glance" },
  { id: "leadership-speaks", label: "Leadership Speaks" },
  { id: "team", label: "Meet the Team" },
  { id: "stories", label: "PM Stories" },
  { id: "looking-ahead", label: "Looking Ahead" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("cover");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const scrollContainer = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Empty div for spacing on mobile */}
          <div className="lg:hidden w-10" />
          
          {/* Desktop Navigation - With Arrow Controls */}
          <div className="hidden lg:flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={() => scrollContainer(-200)}
              className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Nav Items Container */}
            <div 
              ref={containerRef}
              className="flex items-center gap-3 overflow-x-auto max-w-[70vw] scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[hsl(15,85%,60%)] text-white"
                      : "bg-black/60 text-white hover:bg-black/70 backdrop-blur-sm"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollContainer(200)}
              className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                      activeSection === item.id
                        ? "bg-[hsl(15,85%,60%)] text-white"
                        : "text-foreground/70 hover:bg-foreground/5"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
