import React from "react";
import RootLayout from "@/layouts/RootLayout";
import PageBanner from "@/components/sections/pagebanner/PageBanner";
import TransformationSection from "@/components/sections/transformation/TransformationSection";
import ExperinceSection from "@/components/sections/experince/ExperinceSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import CompanySection from "@/components/sections/company/CompanySection";
import AboutService from "@/components/sections/aboutservice/AboutService";
import ContactInfoSection from "@/components/sections/contactInfo/ContactInfoSection";
const AboutUsPage = () => {
  return <RootLayout>
    <PageBanner pageName="About"/>
    <CompanySection/>
    <ExperinceSection/>
    <AboutService/>
    <ContactInfoSection/>
    <ContactSection/>
  </RootLayout>;
};

export default AboutUsPage;
