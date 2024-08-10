import React from "react";
import styles from "./ClientSection.module.css";
import Client1 from "@/assets/images/client1.jpg";
import Client2 from "@/assets/images/client2.jpg";
import Client3 from "@/assets/images/client3.jpg";
import ClientCard from "@/components/cards/client/ClientCard";
const ClientSection: React.FC = () => {
  const clients = [
    {
      imageSrc: Client1,
      altText: "Client One",
      clientCompany: "Shopify",
      clientTitle: "CEO",
      articleContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageSrc: Client2,
      altText: "Client Two",
      clientCompany: "Company Two",
      clientTitle: "CTO",
      articleContent:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imageSrc: Client3,
      altText: "Client Two",
      clientCompany: "Company Two",
      clientTitle: "CTO",
      articleContent:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <section>
      <div className={`${styles.clientContainer} container`}>
        <h1 className={styles.clientTextHeader}>
          Our <span> Client </span> Reviews
        </h1>
        <div className={styles.clientReviews}>
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              imageSrc={client.imageSrc}
              altText={client.altText}
              clientCompany={client.clientCompany}
              clientTitle={client.clientTitle}
              articleContent={client.articleContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
