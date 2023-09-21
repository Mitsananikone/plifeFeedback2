/** @format */

import { useState, useRef } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import ContactFire from "@/components/nav/contactFire/contactFire";
import HamburgerIcon from "./hamburgerIcon/hamburgerIcon";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItemHamburgerRef = useRef(null);
  const menuItems = [
    { name: "ABOUT", link: "/about/aboutPage" },
    { name: "PROCEDURES", link: "/procedures/surgeryMovingHighlight" },
    { name: "FAQ", link: "/faq/faqPage" },
    { name: "RESOURCES", link: "/resource/resourcePage" },
    { name: "QUOTE", link: "/quote/quotePage" },
    { name: "PRICING", link: "/pricing/pricingPage" },
    { name: "PROMO", link: "/promo/promoPage" },
    { name: "CONTACTS", link: "/contacts/contactsPage" },
  ];

  const openMenu = () => {
    setIsMenuOpen(true);
    if (navItemHamburgerRef.current) {
      navItemHamburgerRef.current.classList.add(styles.opening);
    }
  };

  const closeMenu = () => {
    if (navItemHamburgerRef.current) {
      navItemHamburgerRef.current.classList.add(styles.closing);
      navItemHamburgerRef.current.classList.remove(styles.opening);
      // Get total animation time
      const animationDuration = 0.2; // seconds
      const totalItems = menuItems.length;
      const animationDelay = 0.2; // seconds
      const totalAnimationTime =
        animationDuration + animationDelay * (totalItems - 1);
        
      setTimeout(() => {
        setIsMenuOpen(false);
        navItemHamburgerRef.current.classList.remove(styles.closing);
        navItemHamburgerRef.current
          .querySelectorAll(styles.title)
          .forEach((item) => (item.style.opacity = "1"));
      }, totalAnimationTime * 1000);
    }
  };

  const toggleMenu = () => {
    isMenuOpen ? closeMenu() : openMenu();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/home/landingpage" passHref>
          <img
            src="/images/nav/logo.svg"
            alt="Logo"
            className="logo cursor-pointer"
          />
        </Link>

        {/* Regular Menu Items (For Desktop) */}
        <div className={styles.hamburger}>
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index} passHref>
              <span className={styles.navItem}>
                {item.name === "CONTACTS" ? <ContactFire /> : item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button className={styles.hamburgerButton} onClick={toggleMenu}>
    <HamburgerIcon toggleMenu={toggleMenu} />
</button>
      </div>

      {/* Mobile Menu Items (Inside Modal) */}
      {isMenuOpen && (
        <div
          ref={navItemHamburgerRef}
          className={`${styles.navItemHamburger} ${
            isMenuOpen ? styles.opening : styles.closing
          }`}
        >
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index} passHref>
              <div
                className={styles.title}
                style={{ "--index": index, "--total-items": menuItems.length }}
              >
                {item.name === "CONTACTS" ? <ContactFire /> : item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
