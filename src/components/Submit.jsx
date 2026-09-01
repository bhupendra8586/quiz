import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Submit = () => {

  // const { score } = useContext(QuizContext);
  // const { selectedAns } = useContext(QuizContext);
  // const { solve } = useContext(QuizContext);
  const { score,
          selectedAns,
          solve,
          correct,
          incorrect
        } = useContext(QuizContext);



  return (
    <div>
      Submit page, score: {score}
      <p>answer array: {JSON.stringify(selectedAns)}</p>
      
      <p>Total solved: {solve}</p>
      <p>Total correct: {correct}</p>
      <p>Total incorrect: {incorrect}</p>
    </div>
  )
}

export default Submit