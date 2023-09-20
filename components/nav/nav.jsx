/** @format */

import { useState, useRef } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import ContactFire from '@/components/nav/contactFire/contactFire'; 
import HamburgerIcon from './hamburgerIcon/hamburgerIcon';
// import "bootstrap/dist/css/bootstrap.min.css";

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

  const toggleMenu = () => {
    if (isMenuOpen) {
      if (navItemHamburgerRef.current) {
        navItemHamburgerRef.current.classList.add(styles.closing);
      }
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 2000); 
    } else {
      setIsMenuOpen(true);
      if (navItemHamburgerRef.current) {
        navItemHamburgerRef.current.classList.remove(styles.closing);
      }
    }
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
        <div className={styles.hamburger}>
          {menuItems.map((item, index) => (
            <Link
              href={item.link || `#${item.name?.toLowerCase() || item.toLowerCase()}`}
              key={index}
              passHref
            >
               <span
      className={styles.navItem}
      onMouseOver={(e) => {
        e.target.style.textShadow = "2px 2px 4px #2119B4";
      }}
      onMouseOut={(e) => {
        e.target.style.textShadow = "1px 1px 2px rgba(0,0,0,0.3)";
      }}
    >
      {item.name === "CONTACTS" ? <ContactFire /> : item.name}
    </span>
            </Link>
          ))}
        </div>

       <button className={styles.hamburgerButton}>
       <HamburgerIcon toggleMenu={toggleMenu} />
</button>

      </div>
      {isMenuOpen && (
         <div 
         ref={navItemHamburgerRef} 
         className={isMenuOpen ? `${styles.navItemHamburger} ${styles.open}` : styles.navItemHamburger}>
         {menuItems.map((item, index) => (
           <Link
             key={index}
             href={item.link || `#${item.name?.toLowerCase() || item.toLowerCase()}`}
             passHref
           >
             <span
    className={styles.navItem}
    style={{ 
      animationDelay: `${index * 0.15}s`,
      '--index': index
    }}
               onMouseOver={(e) => {
                 e.target.style.textShadow = "2px 2px 4px #2119B4";
               }}
               onMouseOut={(e) => {
                 e.target.style.textShadow = "1px 1px 2px rgba(0,0,0,0.3)";
               }}
             >
              <div className={styles.title} >
              <h6 >
              {item.name === "CONTACTS" ? <ContactFire /> : item.name}
              </h6>
               </div>
             </span>
           </Link>
         ))}
       </div>
      )}
    </nav>
  );
};

export default Navbar;
