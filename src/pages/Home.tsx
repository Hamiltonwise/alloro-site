import NavigationSection from "@/components/home/sections/NavigationSection";
import HeroSection from "@/components/home/sections/HeroSection";
import TestimonialsSection from "@/components/home/sections/TestimonialsSection";
import FeaturesSection from "@/components/home/sections/FeaturesSection";
import SetupSection from "@/components/home/sections/SetupSection";
import HealthcareProfessionalsSection from "@/components/home/sections/HealthcareProfessionalsSection";
import FormSection from "@/components/home/sections/FormSection";
import BeliefsSection from "@/components/home/sections/BeliefsSection";

function Home() {
  return (
    <main>
      <NavigationSection />
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <SetupSection />
      <HealthcareProfessionalsSection />
      <FormSection />
      <BeliefsSection />
      {/* Additional sections will be added here */}
    </main>
  );
}

export default Home;
