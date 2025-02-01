import React from 'react';
import styles from './Results.module.css';

const Results = ({ score, totalQuestions }) => {
    return (
        <div className={styles.resultsContainer}>
            <h2 className={styles.resultsTitle}>Quiz Completed!</h2>
            <p className={styles.scoreText}>
                Your Score: <span className={styles.scoreValue}>{score}</span> / <span className={styles.totalValue}> {totalQuestions * 4}</span>
             </p>
        </div>
    );
};

export default Results;