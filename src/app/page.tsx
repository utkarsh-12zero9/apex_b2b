import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProgramSection from "@/components/sections/ProgramSection";
import SystemsSection from "@/components/sections/SystemsSection";
import ProductivitySection from "@/components/sections/ProductivitySection";
import AchievesSection from "@/components/sections/AchievesSection";
import ConsultingSection from "@/components/sections/ConsultingSection";
import ForWhoSection from "@/components/sections/ForWhoSection";
import WhyApexSection from "@/components/sections/WhyApexSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OutcomesSection />
        <ImpactSection />
        <ProgramSection />
        <SystemsSection />
        <ProductivitySection />
        <AchievesSection />
        <ConsultingSection />
        <ForWhoSection />
        <WhyApexSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
