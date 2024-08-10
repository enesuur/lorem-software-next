import React from 'react'
import RootLayout from '@/layouts/RootLayout';
import BlogArticle from '@/components/sections/article/BlogArticle';
import BlogSwiper from '@/components/sections/blogswiper/BlogSwiper';
import ContactSection from '@/components/sections/contact/ContactSection';
const BlogPageSlug : React.FC = () => {
  return (
    <RootLayout>
        <BlogArticle/>
        <BlogSwiper/>
        <ContactSection/>
    </RootLayout>
  )
}

export default BlogPageSlug;