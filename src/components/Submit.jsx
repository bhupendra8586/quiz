import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Submit = () => {

  const { score } = useContext(QuizContext);
  const { selectedAns } = useContext(QuizContext);



  return (
    <div>Submit page, score: {score}</div>
  )
}

export default Submit