import React from "react";
import Image from "next/image";
import styles from "./Transformation.module.css";
import { TransformImage } from "@/utils/index";
import { GoGraph } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { IoBusinessOutline } from "react-icons/io5";
import TransformCard from "@/components/cards/transform/TransformCard";

const articles = [
  {
    svg: <AiOutlineProduct />,
    title: "Product Development",
    content:
      "Transform your ideas into innovative products with our expert services, guiding you from concept to launch.",
  },
  {
    svg: <GoGraph />,
    title: "Digital Growth",
    content:
      "Accelerate your business with advanced technologies and strategies, driving performance and expanding your reach.",
  },
  {
    svg: <GrTechnology />,
    title: "Tech Innovation",
    content:
      "Stay ahead with cutting-edge innovations, integrating the latest tech advancements into your business.",
  },
  {
    svg: <IoBusinessOutline />,
    title: "Business Transformation",
    content:
      "Reimagine your operations with our digital transformation services, optimizing workflows and improving customer experiences.",
  },
];

const TransformationSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.transformationContainer} container`}>
        <h1 className={styles.transformationTextHeader}>
          We help your <span> business growth </span> via digital transformation
        </h1>
        <div className={styles.transformBox}>
          <div className={styles.transformFeatures}>
            {articles.map((section, index) => (
              <TransformCard
                key={index}
                svg={section.svg}
                title={section.title}
                articleContent={section.content}
              />
            ))}
          </div>
          <figure>
            <Image src={TransformImage} alt="Transform Image" fill={true} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
