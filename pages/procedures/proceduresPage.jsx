/** @format */

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link"; // Import the Link component
import styles from "./proceduresPage.module.css";
import { motion } from "framer-motion";

export default function ProceduresCard() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const fadeIn = {
    hidden: { opacity: 0.7 },  // Words are dimmed
    visible: { opacity: 1, color: 'white', transition: { duration: 1500} }, // Words are highlighted
  };
  


//   const fitTitle = () => {
//     const container = containerRef.current;
//     const titleElement = titleRef.current;

//     if (!container || !titleElement) return;

//     const maxIterations = 100;
//     let iterations = 0;

//     titleElement.style.fontSize = "5rem"; 

//     while(titleElement.offsetWidth > container.offsetWidth && iterations < maxIterations) {
//         const currentFontSize = parseFloat(window.getComputedStyle(titleElement).fontSize);
//         titleElement.style.fontSize = `${currentFontSize - 0.5}rem`; // Decrease by 0.1rem
//         iterations++;
//     }
// };

//   useEffect(() => {
//     fitTitle();
//     window.addEventListener("resize", fitTitle);

//     return () => window.removeEventListener("resize", fitTitle);
// }, []);

  const [highlightRow, setHighlightRow] = useState(0);

  useEffect(() => {
    const highlightInterval = setInterval(() => {
      setHighlightRow((prevRow) => (prevRow + 1) % 4); 
    }, 3000); 
  
    return () => clearInterval(highlightInterval);
  }, []);
  



  return (
    <div
      className="background"
      style={{
        backgroundImage: "url('/images/procedures/procedures.jpg')",
        height: "100vh"
      }}
    >
      <div className={styles.procedureComponent}>
      <div ref={containerRef} className={styles.proceduresHighlight}> {/* 60% width */}
    <p className={styles.headerText}>
        You don't pay for your beauty surgery - You pay for your unique experience
    </p>
    <div className={styles.mainTitle}>
        <h1 ref={titleRef}>
            OUR PROCEDURES
        </h1>
    </div>

      
          <motion.div variants={containerRef} initial="hidden" animate="show" className={styles.highlightText}>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 0 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              BEAUTY
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 0 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              SURGERY
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 1 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              GENDER
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 1 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              TRANSITIONING
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 2 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              AESTHETIC
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 2 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              NON-SURGICAL
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 3 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              DENTAL
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 3 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              PROCEDURES
            </motion.p>
            </motion.div>
            <div className={styles.detailsButtonContainer}>
            <Link href="/resources/resourcePage" passHref>
              <button className={styles.detailsButton}>View Details</button>
            </Link>
          </div>
          </div>
         
        </div>
      </div>

  );
}
