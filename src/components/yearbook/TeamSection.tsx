import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

// Import comic images
import kedarImg from "@/assets/team/kedar-parikh.png";
import jibranImg from "@/assets/team/jibran-dalvi.png";
import satishImg from "@/assets/team/satish-kokate.png";
import paragImg from "@/assets/team/parag-mantri.png";
import tejasImg from "@/assets/team/tejas-thakur.png";
import parthImg from "@/assets/team/parth-shukla.png";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  team: "Product" | "Design" | "Documentation";
  funFact: string;
  outsideWork: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  // Product Team
  { id: 1, name: "Kedar", role: "Chief Product Officer", team: "Product", funFact: "Chief Sense-Maker", outsideWork: "Trekking enthusiast", image: kedarImg },
  { id: 2, name: "Yogesh", role: "Product Lead", team: "Product", funFact: "Ships features at 2am", outsideWork: "Marathon runner" },
  { id: 3, name: "Jibran", role: "AVP Product Management", team: "Product", funFact: "Chief Chaos-to-Clarity Officer", outsideWork: "Excel wizard", image: jibranImg },
  { id: 4, name: "Satish", role: "AVP Product Management", team: "Product", funFact: "Full-Time Firefighter", outsideWork: "Tea connoisseur", image: satishImg },
  { id: 5, name: "Vrinda", role: "Product Manager", team: "Product", funFact: "Never misses a standup", outsideWork: "Plant parent" },
  { id: 6, name: "Ravi", role: "Product Manager", team: "Product", funFact: "Has 47 Notion templates", outsideWork: "Weekend photographer" },
  { id: 7, name: "Udayan", role: "Product Manager", team: "Product", funFact: "API docs speedrunner", outsideWork: "Vinyl collector" },
  { id: 8, name: "Parag", role: "Sr PM", team: "Product", funFact: "Signal-to-Noise Ratio Optimizer", outsideWork: "Headphone audiophile", image: paragImg },
  { id: 9, name: "Tejas", role: "PM", team: "Product", funFact: "Shadow Engineer with a PM Badge", outsideWork: "Chelsea fan", image: tejasImg },
  { id: 10, name: "Abhinav", role: "Product Manager", team: "Product", funFact: "Pixel perfect or bust", outsideWork: "Gaming enthusiast" },
  { id: 11, name: "Avani", role: "Product Manager", team: "Product", funFact: "Color theory debates", outsideWork: "Pottery class regular" },
  { id: 12, name: "Karan", role: "Product Manager", team: "Product", funFact: "Emoji documentation expert", outsideWork: "True crime podcaster" },
  { id: 13, name: "Parth", role: "PM", team: "Product", funFact: "Strategic Innovation Architect", outsideWork: "AI enthusiast", image: parthImg },
  { id: 14, name: "Kush", role: "Product Manager", team: "Product", funFact: "Figma shortcuts wizard", outsideWork: "Sourdough baker" },
  { id: 15, name: "Tanishq", role: "Product Manager", team: "Product", funFact: "Feature velocity champion", outsideWork: "Weekend DJ" },
  
  // Design Team
  { id: 16, name: "Kirit Lakhani", role: "Head of Product Design", team: "Design", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 17, name: "Amit Sharma", role: "Product Designer", team: "Design", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 18, name: "Harshita Rajawat", role: "Product Designer", team: "Design", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 19, name: "Dhairya Vora", role: "Product Designer", team: "Design", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 20, name: "Hardikya Gupta", role: "Associate Product Designer", team: "Design", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 21, name: "Yash Zendekar", role: "Product Design Intern", team: "Design", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 22, name: "Taiyub Afsar", role: "Product Design Intern", team: "Design", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  
  // Documentation Team
  { id: 23, name: "Gargi Mukherjee", role: "Manager Product Documentation", team: "Documentation", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 24, name: "Aishwarya Sinha", role: "Senior Technical Writer", team: "Documentation", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
  { id: 25, name: "Darpan Amle", role: "Technical Writer- II", team: "Documentation", funFact: "Placeholder fun fact", outsideWork: "Placeholder hobby" },
];

const teamColors = {
  Product: "from-teal-500 to-teal-600",
  Design: "from-coral-400 to-coral-500",
  Documentation: "from-accent to-amber-500",
};

const teamBadgeColors = {
  Product: "bg-teal-500/10 text-teal-600 border-teal-500/20",
  Design: "bg-coral-400/10 text-coral-600 border-coral-400/20",
  Documentation: "bg-accent/20 text-amber-700 border-accent/30",
};

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"Product" | "Design" | "Documentation">("Product");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = teamMembers.filter(m => m.team === filter);

  return (
    <section
      id="team"
      ref={ref}
      className="py-32 bg-gradient-dark text-cream-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="caption text-teal-400 mb-4 block">The Humans Behind the Product</span>
          <h2 className="section-heading mb-6">Meet the Team</h2>
          <p className="body-large text-cream-300/70 max-w-2xl mx-auto">
            Product, Design, and Documentation—the trio that turns ideas into reality. 
            Here's who made 2025 happen.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {["Product", "Design", "Documentation"].map((team) => (
            <button
              key={team}
              onClick={() => setFilter(team as typeof filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === team
                  ? "bg-cream-100 text-navy-800"
                  : "bg-cream-100/10 text-cream-200 hover:bg-cream-100/20"
              }`}
            >
              {team}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index % 8) }}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-2xl bg-navy-700 relative overflow-hidden card-hover">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${teamColors[member.team]} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Photo or Placeholder - Clickable */}
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-cream-100/10 flex items-center justify-center text-4xl">
                      👤
                    </div>
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent">
                  <span className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-medium border mb-3 ${teamBadgeColors[member.team]}`}>
                    {member.team}
                  </span>
                  <h3 className="font-bold text-lg text-cream-100 mb-1">{member.name}</h3>
                  <p className="text-cream-300/70 text-sm mb-2">{member.role}</p>
                  <p className="text-cream-300/50 text-xs italic">"{member.funFact}"</p>
                </div>

                {/* Hover Reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredId === member.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-navy-800/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center pointer-events-none"
                >
                  <span className="text-teal-400 text-xs uppercase tracking-wider mb-2">Outside Work</span>
                  <p className="text-cream-100 font-medium text-lg">{member.outsideWork}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 text-cream-400/50"
        >
          <p className="text-sm">Showing {filteredMembers.length} of {teamMembers.length} team members</p>
        </motion.div>
      </div>

      {/* Image Expand Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-3xl p-0 bg-navy-800 border-cream-100/10 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedMember?.name} - Full Image
          </DialogTitle>
          {selectedMember?.image && (
            <div className="relative">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 to-transparent p-6">
                <h3 className="text-2xl font-bold text-cream-100">{selectedMember.name}</h3>
                <p className="text-cream-300/70">{selectedMember.role}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
