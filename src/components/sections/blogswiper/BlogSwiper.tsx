import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import blogData from "@/data/BlogData.json";
import BlogCard from "@/components/cards/blog/BlogCard";
import styles from "./BlogSwiper.module.css";
import { Navigation, Pagination } from "swiper/modules";

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
          modules={[Pagination, Navigation]}
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard
                key={index}
                img={blog.img}
                slug={blog.slug}
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
