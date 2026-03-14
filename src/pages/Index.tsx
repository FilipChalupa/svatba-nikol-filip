import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import StorySection from "@/components/StorySection";
import RsvpSection from "@/components/RsvpSection";
import PracticalSection from "@/components/PracticalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InfoSection />
      <StorySection />
      <RsvpSection />
      <PracticalSection />
      <Footer />
    </div>
  );
};

export default Index;
