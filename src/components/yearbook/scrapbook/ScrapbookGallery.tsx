import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PolaroidCard } from "./PolaroidCard";
import { FlipbookViewer } from "./FlipbookViewer";

// Import scrapbook images
import teamGroupImg from "@/assets/team/scrapbook/team-group.jpg";
import sportsNightImg from "@/assets/team/scrapbook/sports-night.jpg";
import festivalColorsImg from "@/assets/team/scrapbook/festival-colors.jpg";
import dinnerHangoutImg from "@/assets/team/scrapbook/dinner-hangout.jpg";
import annualDayImg from "@/assets/team/scrapbook/annual-day.jpg";
import diwaliCelebrationImg from "@/assets/team/scrapbook/diwali-celebration.jpg";

// Also use existing life images
import lifeImg1 from "@/assets/team/life/life-1.png";
import lifeImg2 from "@/assets/team/life/life-2.jpg";
import lifeImg3 from "@/assets/team/life/life-3.jpg";
import lifeImg4 from "@/assets/team/life/life-4.jpg";
import lifeImg5 from "@/assets/team/life/life-5.jpg";
import lifeImg6 from "@/assets/team/life/life-6.jpg";
import lifeImg7 from "@/assets/team/life/life-7.jpg";

type MemoryTag = "all" | "offsites" | "sports" | "festivals" | "wins" | "food" | "work";

interface Photo {
  id: string;
  image: string;
  caption: string;
  tag: MemoryTag;
}

const memoryTabs: { tag: MemoryTag; label: string; emoji: string }[] = [
  { tag: "all", label: "All Memories", emoji: "📸" },
  { tag: "offsites", label: "Offsites", emoji: "🌴" },
  { tag: "sports", label: "Sports", emoji: "🏸" },
  { tag: "festivals", label: "Festivals", emoji: "🎉" },
  { tag: "wins", label: "Wins", emoji: "🧠" },
  { tag: "food", label: "Food", emoji: "🍕" },
  { tag: "work", label: "Work Mode", emoji: "💻" },
];

const photos: Photo[] = [
  { id: "1", image: teamGroupImg, caption: "GAIN Conference Vibes", tag: "offsites" },
  { id: "2", image: sportsNightImg, caption: "Court Warriors", tag: "sports" },
  { id: "3", image: festivalColorsImg, caption: "Festive Colors", tag: "festivals" },
  { id: "4", image: dinnerHangoutImg, caption: "Friday Vibes", tag: "food" },
  { id: "5", image: annualDayImg, caption: "Annual Day 2025!", tag: "wins" },
  { id: "6", image: diwaliCelebrationImg, caption: "Diwali Magic", tag: "festivals" },
  { id: "7", image: lifeImg1, caption: "Work Hard, Play Hard", tag: "work" },
  { id: "8", image: lifeImg2, caption: "Out of Office", tag: "offsites" },
  { id: "9", image: lifeImg3, caption: "Culture Release", tag: "work" },
  { id: "10", image: lifeImg4, caption: "Team Sync IRL", tag: "offsites" },
  { id: "11", image: lifeImg5, caption: "Patch Notes: People", tag: "wins" },
  { id: "12", image: lifeImg6, caption: "Culture Scaled", tag: "work" },
  { id: "13", image: lifeImg7, caption: "Still Shipping", tag: "work" },
];

// Random rotations for natural look
const rotations = [-3, 2, -1, 3, -2, 1, -3, 2, -1, 3, -2, 1, -3];

export function ScrapbookGallery() {
  const [activeTag, setActiveTag] = useState<MemoryTag>("all");
  const [flipbookOpen, setFlipbookOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const filteredPhotos = useMemo(() => {
    if (activeTag === "all") return photos;
    return photos.filter(photo => photo.tag === activeTag);
  }, [activeTag]);

  const openFlipbook = (index: number) => {
    setSelectedPhotoIndex(index);
    setFlipbookOpen(true);
  };

  return (
    <div>
      {/* Memory Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
        {memoryTabs.map((tab, index) => (
          <motion.button
            key={tab.tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setActiveTag(tab.tag)}
            className={`px-4 py-2 rounded-full font-handwritten text-lg transition-all duration-300 ${
              activeTag === tab.tag
                ? "bg-coral-400 text-white shadow-md"
                : "bg-white/80 text-navy-600 hover:bg-coral-100 border border-coral-200/50"
            }`}
            style={{
              transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 1}deg)`,
            }}
          >
            <span className="mr-1">{tab.emoji}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid flex justify-center"
            >
              <PolaroidCard
                image={photo.image}
                caption={photo.caption}
                rotation={rotations[index % rotations.length]}
                onClick={() => openFlipbook(index)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Flipbook Viewer */}
      <AnimatePresence>
        {flipbookOpen && (
          <FlipbookViewer
            photos={filteredPhotos}
            initialIndex={selectedPhotoIndex}
            isOpen={flipbookOpen}
            onClose={() => setFlipbookOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
