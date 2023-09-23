/** @format */

import React, { useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <h6>© 2023 PHOENIQUELIFE.  All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
