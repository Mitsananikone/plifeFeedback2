/** @format */

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link"; // Import the Link component
import styles from "./surgeryMovingHighlight.module.css";
import { motion } from "framer-motion";

export default function ProceduresCard() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const fadeIn = {
    hidden: { opacity: 0.7 },  // Words are dimmed
    visible: { opacity: 1, color: 'white', transition: { duration: 1500} }, // Words are highlighted
  };
  


  const fitTitle = () => {
    const container = containerRef.current;
    const titleElement = titleRef.current;

    if (!container || !titleElement) return;

    titleElement.style.fontSize = "rem"; // Starting font size
    titleElement.style.letterSpacing = "normal"; // Reset letter spacing

    const containerWidth = container.offsetWidth;
    const textWidth = titleElement.offsetWidth;

    if (textWidth >= containerWidth) {
      const scalingFactor = containerWidth / textWidth;
      const newFontSize =
        parseFloat(window.getComputedStyle(titleElement).fontSize) *
        scalingFactor;
      const newLetterSpacing =
        (containerWidth - textWidth * scalingFactor) /
        (titleElement.textContent.length - 1);

      titleElement.style.fontSize = `${newFontSize}px`;
      titleElement.style.letterSpacing = `${newLetterSpacing}px`;
    }
  };

  const [highlightRow, setHighlightRow] = useState(0);

  useEffect(() => {
    const highlightInterval = setInterval(() => {
      setHighlightRow((prevRow) => (prevRow + 1) % 4); // there are 8 lines, not 4 pairs now
    }, 4000); // adjust this duration to your liking
  
    return () => clearInterval(highlightInterval);
  }, []);
  

  useEffect(() => {
    fitTitle();
    window.addEventListener("resize", fitTitle);

    return () => window.removeEventListener("resize", fitTitle);
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url('/images/procedures-legs.png')",
      }}
    >
      <div className={styles.procedureComponent}>
        <div ref={containerRef} className={styles.proceduresHighlight}>
          {" "}
          {/* 60% width */}
          <p className={styles.headerText}>
            You don&#39;t pay for your beauty surgery - You pay for your unique
            experience
          
          <div className={styles.mainTitle}>
            <h1 ref={titleRef} >
              OUR PROCEDURES
            </h1>
          </div>
          </p>
          <motion.div variants={containerRef} initial="hidden" animate="show" className={styles.highlightText}>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 0 ? "visible" : "hidden"}
              className="text-left"
            >
              BEAUTY
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 0 ? "visible" : "hidden"}
              className="text-right"
            >
              SURGERY
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 1 ? "visible" : "hidden"}
              className="text-left"
            >
              GENDER
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 1 ? "visible" : "hidden"}
              className="text-right"
            >
              TRANSITIONING
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 2 ? "visible" : "hidden"}
              className="text-left"
            >
              AESTHETIC
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 2 ? "visible" : "hidden"}
              className="text-right"
            >
              NON-SURGICAL
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 3 ? "visible" : "hidden"}
              className="text-left"
            >
              DENTAL
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 3 ? "visible" : "hidden"}
              className="text-right"
            >
              PROCEDURES
            </motion.p>
            </motion.div>
            <div className={styles.detailsButtonContainer}>
            <Link href="/procedures/menu/procedureTypes" passHref>
              <button className={styles.detailsButton}>View Details</button>
            </Link>
          </div>
          </div>
         
        </div>
      </div>

  );
}
