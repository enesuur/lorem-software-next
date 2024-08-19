import React from "react";
import faqData from "@/data/faqData.json";
import styles from "./FaqSection.module.css";
import Question from "@/components/faq/Question";

const faqArr = faqData.map((faq) => ({
  ...faq,
}));

const FaqSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.faqContainer} container`}>
        <h2 className={styles.faqTextHeader}>
          Frequently <span> asked </span> questions
        </h2>
        <p className={styles.faqTextSubHeader}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          voluptatum perspiciatis pariatur, commodi laboriosam placeat.
        </p>
        {faqArr.map((faq, index) => (
          <Question key={index} title={faq.title} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
