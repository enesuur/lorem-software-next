import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BlogArticleImage from "@/assets/images/softwareHero.jpg";
import styles from "./BlogArticle.module.css";

const BlogArticle = () => {
  const [progress, setProgress] = useState(0);
  const articleRef = useRef(null);

  useEffect(() => {
    const calculatePercentage = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percentage = (scrolled / total) * 100;
      setProgress(percentage);
    };
    window.addEventListener("scroll", calculatePercentage);
    return () => {
      window.removeEventListener("scroll", calculatePercentage);
    };
  }, []);

  return (
    <section className={styles.blogArticleSection}>
      <div className={`${styles.blogArticleContainer} container`}>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
        <figure className={styles.figure}>
          <Image src={BlogArticleImage} alt="SaaS Solutions" fill={true} />
        </figure>

        <article ref={articleRef} className={styles.article}>
        <div className={styles.articleInfo}>
            <span>
              <IoTimeOutline />
              {5} min read
            </span>
            <span>
              <CiCalendarDate />
              08.08.2024
            </span>
          </div>
          <h1 className={styles.articleTextHeader}>
            The Future of SaaS: Innovations and Trends
          </h1>
          <p>
            The Software as a Service (SaaS) industry has experienced
            exponential growth over the past decade. Businesses across various
            sectors are increasingly adopting SaaS solutions to enhance
            efficiency, reduce costs, and gain a competitive edge. In this blog
            post, we will explore the latest innovations and trends shaping the
            future of SaaS.
          </p>
          <h2 className={styles.articleSubTextHeader}>
            1. Artificial Intelligence and Machine Learning
          </h2>
          <p>
            AI and ML are revolutionizing the SaaS industry by providing
            advanced data analytics, predictive insights, and automation
            capabilities. Companies are leveraging these technologies to offer
            more personalized and efficient services to their customers.
          </p>
          <h2 className={styles.articleSubTextHeader}>
            2. Enhanced Security and Compliance
          </h2>
          <p>
            With the increasing volume of data being handled by SaaS
            applications, security and compliance have become top priorities.
            SaaS providers are investing heavily in advanced security measures,
            including encryption, multi-factor authentication, and compliance
            with international standards such as GDPR and HIPAA.
          </p>
          <h2 className={styles.articleSubTextHeader}>
            3. Integration and Interoperability
          </h2>
          <p>
            Seamless integration with other software and platforms is crucial
            for the success of SaaS applications. Open APIs and microservices
            architecture are enabling SaaS solutions to integrate effortlessly
            with various third-party tools, providing a unified experience for
            users.
          </p>
          <h2 className={styles.articleSubTextHeader}>
            4. Subscription and Pricing Models
          </h2>
          <p>
            The subscription-based pricing model continues to dominate the SaaS
            landscape. However, providers are exploring new pricing strategies,
            such as usage-based billing and freemium models, to cater to a
            broader range of customers and increase adoption.
          </p>
          <p className={styles.conclusion}>
            In conclusion, the SaaS industry is poised for continued growth and
            innovation. By embracing new technologies and adapting to evolving
            market needs, SaaS providers can deliver exceptional value to their
            customers and stay ahead of the competition.
          </p>
        </article>
      </div>
    </section>
  );
};

export default BlogArticle;
