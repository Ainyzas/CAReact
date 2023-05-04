import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard/QuestionCard';
import Result from './components/Result/Result';
import { myQuestions } from './content/questions';

export type Question = {
  questionText: string;
  options: string[];
  correctAnswer: string;
};

function App() {
  const [questions, setQuestions] = useState<Question[]>(myQuestions);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  function handleSubmit(selectedAnswer: string | null) {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setIsOver(true);
      }
      if (currentQuestionIndex === questions.length - 1) {
        setIsOver(true);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  }

  function handleRestart() {
    setCurrentQuestionIndex(0);
    setIsOver(false);
    setScore(0);
  }

  return (
    <div>
      {isOver ? (
        <Result score={score} onRestart={handleRestart} />
      ) : (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onSubmit={(selectedAnswer) => handleSubmit(selectedAnswer)}
        />
      )}
    </div>
  );
}

export default App;
