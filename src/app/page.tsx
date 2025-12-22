import CertificationsToolsSection from '../components/home/CertificationsToolsSection';
import ConsultationCTA from '../components/home/ConsultationCTA';
import Hero from '../components/home/Hero';
import HowItWorksSection from '../components/home/HowItWorksSection';
import SecurityServices from '../components/home/SecurityServices';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import WhyChooseSection from '../components/home/WhyChooseSection';

export default function Home() {
  return (
    <>
      <Hero />
      <SecurityServices />
      <WhyChooseSection />
      <HowItWorksSection />
      <CertificationsToolsSection />
      <ConsultationCTA />
      <TestimonialsCarousel />

    </>
  );
}
