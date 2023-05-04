import React, { useState } from 'react';
import { Question } from '../../App';
import { StyledAnswerDiv, StyledQuestionCardDiv } from './QuestionCard.styled';

type QuestionCardProps = {
  question: Question;
  onSubmit: (selectedAnswer: string | null) => void;
};

export default function QuestionCard({ question, onSubmit }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <StyledQuestionCardDiv>
      <h2>{question.questionText}</h2>
      <StyledAnswerDiv>
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              id={option}
              name="quizAnswer"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <span>{option}</span>
          </label>
        ))}
      </StyledAnswerDiv>
      <button onClick={() => onSubmit(selectedOption)}>Submit</button>
    </StyledQuestionCardDiv>
  );
}
