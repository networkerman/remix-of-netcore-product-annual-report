import { Navigation } from "@/components/yearbook/Navigation";
import { ScrollProgress } from "@/components/yearbook/ScrollProgress";
import { HeroSection } from "@/components/yearbook/HeroSection";
import { TestimonialsCarousel } from "@/components/yearbook/TestimonialsCarousel";
import { CPONote } from "@/components/yearbook/CPONote";
import { TeamSection } from "@/components/yearbook/TeamSection";
import { YearAtGlance } from "@/components/yearbook/YearAtGlance";
import { ImpactSection } from "@/components/yearbook/ImpactSection";
import { ProductCraft } from "@/components/yearbook/ProductCraft";
import { PMStories } from "@/components/yearbook/PMStories";
import { LearningsSection } from "@/components/yearbook/LearningsSection";
import { HeroProducts } from "@/components/yearbook/HeroProducts";
import { LookingAhead } from "@/components/yearbook/LookingAhead";
import { ThankYou } from "@/components/yearbook/ThankYou";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollProgress />
      
      <main>
        <HeroSection />
        <TestimonialsCarousel />
        <CPONote />
        <TeamSection />
        <YearAtGlance />
        <ImpactSection />
        <ProductCraft />
        <PMStories />
        <LearningsSection />
        <HeroProducts />
        <LookingAhead />
        <ThankYou />
      </main>
    </div>
  );
};

export default Index;
