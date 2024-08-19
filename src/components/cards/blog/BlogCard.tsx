import { useDispatch } from "react-redux";
import { setBlogData } from "@/store/slice/blogSlice";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  title: string;
  date: string;
  readTime: number;
  img: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  readTime,
  img,
  slug,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      setBlogData({
        title: title,
        img: img || "",
        slug: slug,
        readTime,
        date
      })
    );
  };
  return (
    <Link
      href={`/blog/${slug}`}
      className={styles.blogCardContainer}
      onClick={handleClick}
    >
      <figure>
        <Image src={img} alt="Dummy Image" fill={true} priority />
      </figure>
      <article>
        <div className={styles.blogCardInfo}>
          <span>
            <IoTimeOutline />
           {readTime} mins
          </span>
          <span>
            <CiCalendarDate /> {date || "12 August 2024"}
          </span>
        </div>
        <h2>{title}</h2>
      </article>
    </Link>
  );
};

export default BlogCard;
