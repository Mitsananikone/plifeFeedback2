import React from 'react';
import styles from './slick.module.css';

const Slick = () => {
    return (
        <div className={styles.slickContainer}>
        <h1 className={styles.slickH1}>
            <span className={styles.slickSpan}>UNIQUE</span>
            <div className={styles.message}>
                <div className={styles.word1}>LIFE</div>
                <div className={styles.word2}>PRICE</div>
                <div className={styles.word3}>EXPERIENCE</div>
            </div>
        </h1>
        </div>
    );
}

export default Slick;
