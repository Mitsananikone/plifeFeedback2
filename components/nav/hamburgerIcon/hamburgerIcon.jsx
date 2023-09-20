/** @format */
import { useState } from 'react';
import styles from "./hamburgerIcon.module.css";


export default function HamburgerIcon({ toggleMenu }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
      toggleMenu();  // This will trigger the passed down function
    }
  
    return (
      <div 
        className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ''}`} 
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }