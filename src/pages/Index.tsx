import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingIcons from '@/components/FloatingIcons';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import VisionSection from '@/components/VisionSection';
import DashboardPreview from '@/components/DashboardPreview';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <FloatingIcons />
      <CustomCursor />
      
      <Header />
      
      <main>
        <HeroSection />
        <WhySection />
        <VisionSection />
        <DashboardPreview />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
