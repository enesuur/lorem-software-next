import { IoMdCheckmark } from "react-icons/io";
import { CgSearchLoading } from "react-icons/cg";
import React, { useState, useEffect, useRef } from "react";
import blogData from "@/data/BlogData.json";
import BlogCard from "@/components/cards/blog/BlogCard";
import styles from "./BlogSection.module.css";

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState(blogData.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.current.observe(loader.current);
    }

    return () => {
      if (loader.current && observer.current) {
        observer.current.unobserve(loader.current);
      }
    };
  }, [blogPosts]);

  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      const currentLength = blogPosts.length;
      const isMore = currentLength < blogData.length;
      const nextResults = isMore
        ? blogData.slice(currentLength, currentLength + 3)
        : [];
      setBlogPosts([...blogPosts, ...nextResults]);
      setHasMore(currentLength + nextResults.length < blogData.length);
      setLoading(false);
    }, 1500);
  };

  return (
    <section>
      <div className={`${styles.blogSectionContainer} container`}>
        <div className={styles.blogsContainer}>
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              img={post.img}
              slug={post.slug}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>
        <div className={styles.loadMoreContainer} ref={loader}>
          {hasMore ? (
            <div>
              <CgSearchLoading /> Loading more...
            </div>
          ) : (
            <div>
              <span>
                <IoMdCheckmark />
              </span>
              No blogs to show.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
