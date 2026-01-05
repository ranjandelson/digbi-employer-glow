import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyEmployersSection from "@/components/WhyEmployersSection";
import GLPCompassSection from "@/components/GLPCompassSection";

import ClaimsROISection from "@/components/ClaimsROISection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyEmployersSection />
      <GLPCompassSection />
      <ClaimsROISection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
