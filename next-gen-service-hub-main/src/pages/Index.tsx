import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ServiceAreasSection } from "@/components/ServiceAreasSection";
import { CloudServiceSection } from "@/components/CloudServiceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>New Generation Computer - Authorized Epson & Canon Printer Service Center Akola</title>
        <meta 
          name="description" 
          content="Authorized Epson & Canon printer service center in Akola. Expert printer repair, computer services, cartridge refilling across Akola, Washim & Buldhana. Certified technicians, genuine parts." 
        />
        <meta 
          name="keywords" 
          content="Epson service center Akola, Canon service center Akola, printer repair Washim, printer repair Buldhana, computer repair Akola, cartridge refilling Akola, software repair Akola, Epson Canon authorized service center Maharashtra" 
        />
        <meta property="og:title" content="New Generation Computer - Authorized Epson & Canon Service Center" />
        <meta property="og:description" content="Expert printer repair and IT solutions in Akola, Washim & Buldhana. Certified technicians with genuine parts." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://newgenerationcomputer.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ServiceAreasSection />
        <CloudServiceSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
