import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/Questions';
import { useContext } from 'react';
import { QuizContext, QuizProvider } from '../context/QuizContext';

const Start = () => {

    const [quenumber, SetQuenumber] = useState(0);
    const { selectedAns, SetselectedAns } = useContext(QuizContext);
    const [solve, setSolve] = useState(0);
    const { score, setScore } = useContext(QuizContext);

    const navigate = useNavigate();

    const handleNext = () => {
        if (quenumber < questions.length - 1) {
            SetQuenumber(quenumber + 1);
        }
    }

    const handlePrev = () => {
        if (quenumber > 0) {
            SetQuenumber(quenumber - 1);
        }
    }

    const correctAnswer = (opt) => {
        // SetselectedAns(opt);

        SetselectedAns(prev => {
            const updated = [...prev];
            updated[quenumber] = opt;
            return updated;
        });

        if (opt === questions[quenumber].correctAnswer) {
            console.log("Correct");
            setSolve(prev => prev + 1);
            setScore(prev => prev + 20);
            console.log(score);
        } else {
            console.log("Incorrect");
            setSolve(prev => prev + 1);
        }
        
    console.log("cisub: ",SetselectedAns);
    }

    const handleSubmit = () => {
        // const final_score = score;
        navigate("/start/submit")
    }



    return (
        <div className="border-2 border-blue-500 w-[1432px] h-[768px] p-2">

            <nav className="border-2 border-green-500 h-[100px] rounded-t-[30px] flex items-center justify-center">
                <button className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold">
                    Quiz Instructions
                </button>
            </nav>

            <div className="border-2 border-red-500 h-[640px] rounded-b-[30px] p-8 flex flex-col">
                <div className="Question mb-8">
                    <p className="text-lg text-gray-500 mb-2">
                        Question {questions[quenumber].id} of 10
                    </p>

                    <h2 className="text-2xl font-semibold">
                        {questions[quenumber].question}
                    </h2>
                </div>

                <div className="flex flex-col gap-4">

                    { } means:

                    {/* "React, evaluate this({...selectAns...}) JavaScript expression and use its result as the className." */}
                    <button className={`w-full text-left border-2 rounded-xl px-5 py-4
                    ${selectedAns === questions[quenumber].options[0]
                            ? selectedAns === questions[quenumber].correctAnswer
                                ? "border-green-500 bg-green-100"
                                : "border-red-500 bg-red-100"
                            : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
                        }`}
                        onClick={() => correctAnswer(questions[quenumber].options[0])}
                    >
                        A. {questions[quenumber].options[0]}
                    </button>

                    <button className={`w-full text-left border-2 border-gray-300 rounded-xl px-5 py-4
                    ${selectedAns === questions[quenumber].options[1] ?
                            selectedAns === questions[quenumber].correctAnswer ?
                                "border-green-500 bg-green-100" :
                                "border-red-500 bg-red-100" :
                            "border-grey-300 hover:border-blue-500 hover:bg-blue-50"
                        }
                    `}
                        onClick={() => correctAnswer(questions[quenumber].options[1])}>
                        B. {questions[quenumber].options[1]}
                    </button>

                    <button className={`w-full text-left border-2 border-gray-300 rounded-xl px-5 py-4
                    ${selectedAns === questions[quenumber].options[2] ?
                            selectedAns === questions[quenumber].correctAnswer ?
                                "border-green-500 bg-green-100" :
                                "border-red-500 bg-red-100" :
                            "border-grey-300 hover:border-blue-500 hover:bg-blue-50"
                        }
                    `} onClick={() => correctAnswer(questions[quenumber].options[2])}>
                        C. {questions[quenumber].options[2]}
                    </button>

                    <button className={`w-full text-left border-2 border-gray-300 rounded-xl px-5 py-4
                    ${selectedAns === questions[quenumber].options[3] ?
                            selectedAns === questions[quenumber].correctAnswer ?
                                "border-green-500 bg-green-100" :
                                "border-red-500 bg-red-100" :
                            "border-grey-300 hover:border-blue-500 hover:bg-blue-50"
                        }
                    `} onClick={() => correctAnswer(questions[quenumber].options[3])}>
                        D. {questions[quenumber].options[3]}
                    </button>

                </div>

                <div className="mt-auto flex items-center justify-between">

                    <button className="px-6 py-3 border-2 border-gray-300 rounded-full"
                        onClick={handlePrev}>
                        Previous
                    </button>

                    <button className="px-6 py-3 bg-blue-500 text-white rounded-full"
                        onClick={handleNext}
                    >
                        Next
                    </button>


                    <button className="px-6 py-3 bg-green-500 text-white rounded-full"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>


                    <button onClick={() => setScore(score + 1)}>
                        Add Score: {score}
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Start