import { TiArrowRight } from "react-icons/ti";
import React from "react";
import styles from "./SolutionCard.module.css";
import Link from "next/link";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.solutionCardContainer}>
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={"#"}>
        Learn more
        <TiArrowRight />
      </Link>
    </div>
  );
};

export default SolutionCard;
