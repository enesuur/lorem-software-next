import React from 'react'
import RootLayout from '@/layouts/RootLayout'
import PageBanner from '@/components/sections/pagebanner/PageBanner';
import BlogSection from '@/components/sections/blog/BlogSection';
import ContactSection from '@/components/sections/contact/ContactSection';
const BlogPage = () => {
  return (
    <RootLayout>
        <PageBanner pageName={"Blogs"}/>
        <BlogSection/>
        <ContactSection/> 
    </RootLayout>
  )
}

export default BlogPage