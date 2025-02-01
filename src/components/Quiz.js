import React, { useState, useEffect } from 'react';
import fetchQuizData from '../services/quizService';
import Question from './Question';
import styles from './Quiz.module.css';
import Results from "./Results";
import Progressbar from "./Progressbar";
import Timer from './Timer';

const Quiz = () => {
    const [quizData, setQuizData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
      const startQuiz = async () => {
          try{
            setStartTime(new Date().getTime())
          const data = await fetchQuizData();
          setQuizData(data);
        }
          catch(error){
            console.error("Failed to load quiz" , error)
        }
      }
      startQuiz()

    }, []);
  
      useEffect(() => {
        let interval;
        if (startTime && !quizFinished) {
          interval = setInterval(() => {
            const elapsedTime =  Math.floor((new Date().getTime() - startTime) / 1000);
            setCurrentTime(elapsedTime);
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [startTime, quizFinished]);

    const handleAnswerSelect = (optionId) => {
      setSelectedAnswers(prevAnswers => ({
        ...prevAnswers,
        [currentQuestionIndex]: optionId,
      }));
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          calculateScore();
            setQuizFinished(true);
        }
    };
    
    const calculateScore = () => {
        let currentScore = 0;
        quizData.questions.forEach((question, index) => {
          const selectedOptionId = selectedAnswers[index];
          const correctAnswer = question.options.find(opt => opt.is_correct);

          if (correctAnswer && selectedOptionId === correctAnswer.id) {
            currentScore += parseFloat(quizData.correct_answer_marks);
          } else if(selectedOptionId) {
              currentScore -= parseFloat(quizData.negative_marks)
          }
        });

        setScore(Math.max(0, currentScore));
      };

    if (!quizData) {
        return <div className={styles.loading}>Loading quiz...</div>;
    }

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const totalQuestions = quizData.questions.length;

    return (
      <div className={styles.quizContainer}>
          {!quizFinished ? (
              <>
                <div className={styles.header}>
                    <Progressbar currentQuestion={currentQuestionIndex + 1} totalQuestions={totalQuestions} />
                     <Timer totalTime={quizData.duration * 60} currentTime={currentTime} />
                </div>
                <Question
                    question={currentQuestion}
                    onSelectAnswer={handleAnswerSelect}
                    selectedAnswer={selectedAnswers[currentQuestionIndex]}
                    />
                <div className={styles.buttonContainer}>
                    <button className={styles.nextButton} onClick={goToNextQuestion}>
                    {currentQuestionIndex === quizData.questions.length - 1 ? "Finish" : "Next Question"}
                    </button>
                </div>
            </>
        ) : (
            <Results score={score} totalQuestions={totalQuestions} />
        )}
    </div>
    );
};

export default Quiz;