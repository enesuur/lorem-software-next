import React from "react";
import RootLayout from "@/layouts/RootLayout";
import HeroSection from "@/components/sections/hero/HeroSection";
import SolutionSection from "@/components/sections/solution/SolutionSection";
import PriceSection from "@/components/sections/price/PriceSection";
import ClientSection from "@/components/sections/client/ClientSection";
import BackgroundSection from "@/components/sections/background/Background";
import TransformationSection from "@/components/sections/transformation/TransformationSection";
import ExperinceSection from "@/components/sections/experince/ExperinceSection";
import ContactSection from "@/components/sections/contact/ContactSection";


const HomePage: React.FC = () => {
  return (
    <RootLayout>
      <HeroSection />
      <TransformationSection />
      <SolutionSection />
      <ExperinceSection/> 
      <PriceSection />
      <ClientSection />
      <BackgroundSection />
      <ContactSection />
    </RootLayout>
  );
};

export default HomePage;
