import React from "react";
import RootLayout from "@/layouts/RootLayout";
import PageBanner from "@/components/sections/pagebanner/PageBanner";
import PriceSection from "@/components/sections/price/PriceSection";
import FaqSection from "@/components/sections/faq/FaqSection";
import ContactSection from "@/components/sections/contact/ContactSection";

const Pricing: React.FC = () => {
  return (
    <RootLayout>
      <PageBanner pageName={"Pricing"} />
      <PriceSection />
      <FaqSection />
      <ContactSection />
    </RootLayout>
  );
};

export default Pricing;
