import React from 'react';
import styles from './Question.module.css';

const Question = ({ question, onSelectAnswer, selectedAnswer }) => {
  return (
    <div className={styles.questionContainer}>
        <h2 className={styles.questionText}>{question.description}</h2>
        <ul className={styles.optionsList}>
        {question.options && question.options.map((option, index) => (
            <li
                key={option.id}
                className={`${styles.option} ${selectedAnswer === option.id ? styles.selected : ''}`}
                onClick={() => onSelectAnswer(option.id)}
            >
            <span className={styles.optionIndex}> {String.fromCharCode(65 + index)}: </span>
                {option.description}
            </li>
        ))}
        </ul>
    </div>
    );
};

export default Question;