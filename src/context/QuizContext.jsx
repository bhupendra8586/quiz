import { createContext } from "react";
import { useState } from "react";

const QuizContext = createContext(); //createContext() creates a shared container.

const QuizProvider = ({children}) => {
    
    const [score, setScore] = useState(0);
    const [selectedAns, SetselectedAns] = useState([]);

    return(
        <QuizContext.Provider value={{ score, setScore, selectedAns, SetselectedAns }}>
            {children}
        </QuizContext.Provider>
    )
}

export { QuizProvider, QuizContext };
// Everything inside QuizProvider can access my Context.

//The Provider is what allows components underneath it to access the Contex.

// value={{ score, setScore }}: Make score and setScore available to every component inside this Provider.