import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlinePhone 
} from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import React from "react";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footerContainer}`}>
      <nav className="container">
        <div className={styles.logoContainer}>
          <Logo />
          <div className={styles.logoText}>
            <h2>Lorem Software</h2>
            <p>
              We elevate your business by transforming your digital commerce
              into innovative and powerful experiences.
            </p>
          </div>
        </div>
        <ul className={styles.servicesContainer}>
          <li>Services</li>
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Cloud Services</li>
          <li>Digital Growth</li>
          <li>Business Transformaiton</li>
          <li>Tech Innovation</li>
        </ul>
        <ul className={styles.siteNavigationContainer}>
          <li>Site Navigation</li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className={styles.contactContainer}>
          <ul className={styles.primaryContact}>
            <li>Location</li>
            <li className={styles.location}>
              Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nisi, nesciunt.
            </li>
            <li>
              <Link href={"tel:+1213241124"} className={styles.contactFlexBox}>
              <AiOutlinePhone/>
              +1 213 241 124</Link>
            </li>
            <li>
              <Link href={"mailto:loremipsum@gmail.com"} className={styles.contactFlexBox}>
              <IoMailOutline/>
                loremipsum@gmail.com
              </Link>
            </li>
            <li>
              <Link href={"https://storyset.com"}>
                Illustrations by Storyset
              </Link>
            </li>
          </ul>
          <ul className={styles.socialsContact}>
            <li>
              <Link href={"#"}>
                <AiOutlineInstagram />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <AiOutlineLinkedin />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <AiOutlineTwitter />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <AiOutlineGithub />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
