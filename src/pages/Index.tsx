import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import TimelineSection from "@/components/TimelineSection";
import RsvpSection from "@/components/RsvpSection";
import PracticalSection from "@/components/PracticalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InfoSection />
      <TimelineSection />
      <RsvpSection />
      <PracticalSection />
      <Footer />
    </div>
  );
};

export default Index;
