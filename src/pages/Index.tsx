import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
