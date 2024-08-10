import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import BlogCard from "@/components/cards/blog/BlogCard";
import styles from "./BlogSwiper.module.css";
import { Navigation, Pagination } from "swiper/modules";

const blogData = [
  {
    title: "Optimizing SaaS Performance: Best Practices",
    date: "2024-08-10",
    readTime: 5,
  },
  {
    title: "How AI is Transforming SaaS Solutions",
    date: "2024-08-15",
    readTime: 7,
  },
  {
    title: "Understanding SaaS Security Protocols",
    date: "2024-08-20",
    readTime: 6,
  },
  {
    title: "The Role of Customer Success in SaaS",
    date: "2024-08-25",
    readTime: 4,
  },
  {
    title: "Future Trends in SaaS Development",
    date: "2024-08-30",
    readTime: 8,
  },
];

const BlogSwiper: React.FC = () => {
  return (
    <section>
      <div className={`${styles.blogSwiperContainer} container`}>
        <h1 className={styles.blogSwiperTextHeader}>Latest blogs</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination,Navigation]}
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard
                title={blog.title}
                date={blog.date}
                readTime={blog.readTime}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSwiper;
