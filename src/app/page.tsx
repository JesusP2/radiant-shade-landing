import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import EvaluationSection from "@/components/EvaluationSection";
import KeyPointsSection from "@/components/KeyPointsSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <EvaluationSection />
      <KeyPointsSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
