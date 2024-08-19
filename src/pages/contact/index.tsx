import React from 'react'
import RootLayout from '@/layouts/RootLayout';
import PageBanner from '@/components/sections/pagebanner/PageBanner';
import ContactForm from '@/components/sections/contactForm/ContactForm';
import FaqSection from '@/components/sections/faq/FaqSection';
import ContactInfoSection from '@/components/sections/contactInfo/ContactInfoSection';
const Contact = () => {
  return (
    <RootLayout>
        <PageBanner pageName='Contact'/>
        <ContactForm/>
        <FaqSection/>
        <ContactInfoSection/>
    </RootLayout>
  )
}

export default Contact;