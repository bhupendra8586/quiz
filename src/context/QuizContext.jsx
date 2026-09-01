import { createContext } from "react";
import { useState } from "react";

const QuizContext = createContext(); //createContext() creates a shared container.

const QuizProvider = ({children}) => {
    
    const [score, setScore] = useState(0);
    const [selectedAns, SetselectedAns] = useState([]);
    const [solve, setSolve] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    return(
        <QuizContext.Provider value={{ score, setScore,
                                       selectedAns, SetselectedAns,
                                       solve, setSolve,
                                       correct, setCorrect,
                                       incorrect, setIncorrect
                                    }}>
            {children}
        </QuizContext.Provider>
    )
}

export { QuizProvider, QuizContext };
// Everything inside QuizProvider can access my Context.

//The Provider is what allows components underneath it to access the Contex.

// value={{ score, setScore }}: Make score and setScore available to every component inside this Provider.