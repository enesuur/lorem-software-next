import React from "react";
import { CiMobile1, CiDesktop, CiCloud } from "react-icons/ci";
import SolutionCard from "@/components/cards/solution/SolutionCard";
import Typewriter from "typewriter-effect";
import styles from "./SolutionSection.module.css";

const solutions = [
  {
    title: "Mobile Solutions",
    description:
      "We specialize in creating cutting-edge mobile applications tailored to meet your needs. Our mobile solutions ensure a seamless user experience across various devices.",
    icon: <CiMobile1 />,
  },
  {
    title: "Web Development",
    description:
      "Our web development services provide robust and scalable web solutions that enhance your online presence. From responsive designs to powerful functionalities, we build websites that drive results.",
    icon: <CiDesktop />,
  },
  {
    title: "Cloud Services",
    description:
      "Leverage our cloud services to scale your business efficiently. We offer comprehensive cloud solutions that ensure reliability, security, and flexibility for your IT infrastructure.",
    icon: <CiCloud />,
  },
];

const SolutionSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.solutionContainer} container`}>
        <h1>
          We bring innovations to
          <Typewriter
            options={{
              strings: [
                "mobile services",
                "web development.",
                "cloud services.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className={styles.solutionCardsContainer}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
