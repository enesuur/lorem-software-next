import { IoMdCheckmark } from "react-icons/io";
import { CgSearchLoading } from "react-icons/cg";
import React, { useState, useEffect, useRef } from "react";
import BlogCard from "@/components/cards/blog/BlogCard";
import styles from "./BlogSection.module.css";

const allBlogPosts = [
  {
    title: "Understanding React Hooks",
    date: "August 1, 2024",
    readTime: 5,
  },
  {
    title: "A Guide to Next.js",
    date: "August 2, 2024",
    readTime: 7,
  },
  {
    title: "Styling in React with CSS Modules",
    date: "August 3, 2024",
    readTime: 4,
  },
  {
    title: "Optimizing Performance in React",
    date: "August 4, 2024",
    readTime: 6,
  },
  {
    title: "Using TypeScript with React",
    date: "August 5, 2024",
    readTime: 8,
  },
  {
    title: "React Context API",
    date: "August 6, 2024",
    readTime: 6,
  },
  {
    title: "React Performance Optimization",
    date: "August 7, 2024",
    readTime: 7,
  },
  {
    title: "Next.js Dynamic Routing",
    date: "August 8, 2024",
    readTime: 5,
  },
  {
    title: "CSS Grid vs Flexbox",
    date: "August 9, 2024",
    readTime: 4,
  },
  {
    title: "Advanced TypeScript Patterns",
    date: "August 10, 2024",
    readTime: 9,
  },
  {
    title: "Introduction to Redux",
    date: "August 11, 2024",
    readTime: 6,
  },
  {
    title: "Server-side Rendering in Next.js",
    date: "August 12, 2024",
    readTime: 8,
  },
];

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState(allBlogPosts.slice(0, 6));
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
      const isMore = currentLength < allBlogPosts.length;
      const nextResults = isMore
        ? allBlogPosts.slice(currentLength, currentLength + 3)
        : [];
      setBlogPosts([...blogPosts, ...nextResults]);
      setHasMore(currentLength + nextResults.length < allBlogPosts.length);
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
