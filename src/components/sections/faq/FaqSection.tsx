import React from "react";
import styles from "./FaqSection.module.css";
import Question from "@/components/faq/Question";

const faqData = [
  {
    title: "What is your return policy?",
    answer: "Our return policy lasts 30 days...",
  },
  {
    title: "How do I track my order?",
    answer:
      "You can track your order using the tracking number provided in your order confirmation email...",
  },
  {
    title: "Can I purchase items in bulk?",
    answer:
      "Yes, we offer bulk purchase discounts. Please contact our sales team for more information...",
  },
  {
    title: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping rates and times vary depending on the destination...",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.faqContainer} container`}>
        <h2 className={styles.faqTextHeader}>Frequently <span> asked </span> questions</h2>
        <p className={styles.faqTextSubHeader}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptatum perspiciatis pariatur, commodi laboriosam placeat.</p>
        {faqData.map((faq, index) => (
          <Question key={index} title={faq.title} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
