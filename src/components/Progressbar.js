import React from 'react';
import styles from './Progressbar.module.css';

const Progressbar = ({ currentQuestion, totalQuestions }) => {
    const progress = (currentQuestion / totalQuestions) * 100;

    return (
      <div className={styles.progressbar}>
        <div className={styles.progress} style={{ width: `${progress}%` }} >
            <span className={styles.progressText}>{currentQuestion}/{totalQuestions}</span>
        </div>
      </div>
    );
};

export default Progressbar;