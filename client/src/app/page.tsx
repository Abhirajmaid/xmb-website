import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CTARegistrationSection from "@/components/CTARegistrationSection";
import AboutUsSection from "@/components/AboutUsSection";
import ModernServicesSection from "@/components/ModernServicesSection";
import GlobalManufacturingCapacity from "@/components/GlobalManufacturingCapacity";
import ManufacturingFlowSection from "@/components/ManufacturingFlowSection";
import ModernTestimonialsSection from "@/components/ModernTestimonialsSection";
import OurJourneySection from "@/components/OurJourneySection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ModernServicesSection />
      <CTARegistrationSection />
      <AboutUsSection />
      <ManufacturingFlowSection />
      <GlobalManufacturingCapacity />
      {/* <ModernTestimonialsSection /> */}
      {/* <OurJourneySection /> */}
      <LatestArticlesSection />
      <Footer />
    </main>
  );
}
