import React from 'react';
import { StyledDiv } from './Result.styled';

type ResultProps = {
  score: number;
  onRestart: () => void;
};

export default function Result({ score, onRestart }: ResultProps) {
  return (
    <StyledDiv>
      <h2>Your Score: {score}</h2>
      <button onClick={onRestart}>Try Again</button>
    </StyledDiv>
  );
}
