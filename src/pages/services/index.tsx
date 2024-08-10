import React from "react";
import RootLayout from "@/layouts/RootLayout";
import PageBanner from "@/components/sections/pagebanner/PageBanner";
import ServiceSection from "@/components/sections/service/ServiceSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import ExperinceSection from "@/components/sections/experince/ExperinceSection";
import BackgroundSection from "@/components/sections/background/Background";
const Services = () => {
  return (
    <RootLayout>
      <PageBanner pageName={"Services"} />
      <ServiceSection />
      <BackgroundSection/>
      <ContactSection />
    </RootLayout>
  );
};

export default Services;
