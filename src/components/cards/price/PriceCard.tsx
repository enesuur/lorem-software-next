import { IoCheckmarkSharp } from "react-icons/io5";
import React from "react";
import styles from "./PriceCard.module.css";
import Link from "next/link";

interface PriceCardProps {
  title: string;
  subtitle:string;
  price: string;
  features: string[];
  icon: React.ReactNode
}

const PriceCard: React.FC<PriceCardProps> = ({ title,subtitle, price, features,icon }) => {
  return (
    <div className={styles.priceCardContainer}>
      <h2>{icon} {title}</h2>
      <h4>{subtitle}</h4>
      <p className={styles.price}>
        {price}
        <span>/Month</span>
      </p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <IoCheckmarkSharp />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={"#"} className="btn-primary">
        Subscribe
      </Link>
    </div>
  );
};

export default PriceCard;
