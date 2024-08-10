import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DummyImage from "@/assets/images/client1.jpg";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  title: string;
  date: string;
  readTime: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, readTime }) => {
  return (
    <Link href="#" className={styles.blogCardContainer}>
      <figure>
        <Image src={DummyImage} alt="Dummy Image" fill={true} />
      </figure>
      <article>
        <div className={styles.blogCardInfo}>
          <span>
            <IoTimeOutline />
            {readTime} min read
          </span>
          <span><CiCalendarDate /> {date}</span>
        </div>
        <h2>{title}</h2>
      </article>
    </Link>
  );
};

export default BlogCard;
