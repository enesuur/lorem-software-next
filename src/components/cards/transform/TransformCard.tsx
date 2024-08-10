import React from "react";
import styles from "./TransformCard.module.css";

interface ClientCardProps {
  svg: React.ReactNode;
  title: string;
  articleContent: string;
}

const TransformCard: React.FC<ClientCardProps> = ({
  svg,
  title,
  articleContent,
}) => {
  return (
    <div className={styles.transformCardContainer}>
      <h2 className={styles.cardHeader}>
        <span>{svg}</span>
        {title}
      </h2>
      <article>{articleContent}</article>
    </div>
  );
};

export default TransformCard;
