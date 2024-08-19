import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/assets/logo/Logo';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className="container">
        <Link href="/" className={styles.logoContainer}>
          <Logo />
          Lorem Software
        </Link>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={isMenuOpen ? styles.bar1 : ''}></div>
          <div className={isMenuOpen ? styles.bar2 : ''}></div>
          <div className={isMenuOpen ? styles.bar3 : ''}></div>
        </div>
        <ul className={`${isMenuOpen ? styles.open : ''}`}>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
