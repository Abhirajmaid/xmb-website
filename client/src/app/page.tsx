import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ModernServicesSection from "@/components/ModernServicesSection";
import GlobalManufacturingCapacity from "@/components/GlobalManufacturingCapacity";
import ModernTestimonialsSection from "@/components/ModernTestimonialsSection";
import OurJourneySection from "@/components/OurJourneySection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ModernServicesSection />
      <GlobalManufacturingCapacity />
      <ModernTestimonialsSection />
      <OurJourneySection />
      <LatestArticlesSection />
      <Footer />
    </main>
  );
}
