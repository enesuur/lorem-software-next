import React from 'react'
import styles from "./Contact.module.css";
import RootLayout from '@/layouts/RootLayout';
import PageBanner from '@/components/sections/pagebanner/PageBanner';
import ContactForm from '@/components/sections/contactForm/ContactForm';
import FaqSection from '@/components/sections/faq/FaqSection';
const Contact = () => {
  return (
    <RootLayout>
        <PageBanner pageName='Contact'/>
        <ContactForm/>
        <FaqSection/>
    </RootLayout>
  )
}

export default Contact;