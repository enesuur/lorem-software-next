import React from "react";
import Image from "next/image";
import { FeatureImage } from "@/utils";
import styles from "./CompanySection.module.css";
const CompanySection: React.FC = () => {
  return (
    <section className={styles.companySection}>
      <div className={`${styles.companyContainer} container`}>
        <article>
          <h2>Leading-Edge Strategies for Business Expansion</h2>
          <p>
            Our approach integrates human-centered design with robust technology
            solutions, delivering enterprise software that combines the refined
            user experience of leading consumer apps with practical business
            functionality.
          </p>
        </article>
        <figure>
          <Image
            src={FeatureImage}
            alt="Hero Image"
            fill={true}
            priority={true}
          />
        </figure>
      </div>
    </section>
  );
};

export default CompanySection;
