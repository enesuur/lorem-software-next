import { IoRocketOutline, IoBusinessOutline } from "react-icons/io5";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";
import React from "react";
import PriceCard from "@/components/cards/price/PriceCard";
import styles from "./PriceSection.module.css";

const PriceSection: React.FC = () => {
  const pricePlans = [
    {
      title: "Personal",
      subtitle: "Best for individuals",
      price: "$99",
      features: [
        "Feature 1 for Personal",
        "Feature 2 for Personal",
        "Feature 3 for Personal",
      ],
      icon: <PiPersonSimpleWalkDuotone />,
    },
    {
      title: "Startup",
      subtitle: "Best for new businesses",
      price: "$199",
      features: [
        "Feature 1 for Startup",
        "Feature 2 for Startup",
        "Feature 3 for Startup",
      ],
      icon: <IoRocketOutline />,
    },
    {
      title: "Corporate",
      subtitle: "Best for large enterprises",
      price: "$299",
      features: [
        "Feature 1 for Corporate",
        "Feature 2 for Corporate",
        "Feature 3 for Corporate",
      ],
      icon: <IoBusinessOutline />,
    },
  ];
  return (
    <section>
      <div className={`${styles.pricesContainer} container`}>
        <h1 className={styles.pricesTextHeader}>
          Find the Perfect Plan and
          <span style={{color:"var(--primary-color)"}}> Get Started</span>
        </h1>

        <h2 className={styles.pricesSubTextheader}>
          Elevate Your Software Operations with a Customized Engineering Team.
          Meet Your Company’s Needs
        </h2>
        <div className={styles.priceCardContainer}>
          {pricePlans.map((plan, index) => (
            <PriceCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              features={plan.features}
              icon={plan.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
