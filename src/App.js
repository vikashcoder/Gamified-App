
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';

const App = () => {
    const [quizStarted, setQuizStarted] = useState(false);

    return (
        <div className="app">
            <h1>Genetics and Evolution Quiz</h1>
            {!quizStarted ? (
                <button className="start-button" onClick={() => setQuizStarted(true)}>
                    Start Quiz
                </button>
            ) : (
                <Quiz />
            )}
        </div>
    );
};

export default App;