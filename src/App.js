import React from 'react';
import Quiz from './components/Quiz';
import './App.css';

const App = () => {
    return (
        <div className="app">
          <h1>Genetics and Evolution Quiz</h1>
           <Quiz />
        </div>
    );
};

export default App;