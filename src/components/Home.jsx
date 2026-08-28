import React from 'react'

const Home = () => {
    return (
        <>
            <nav className="border-b flex flex-row items-center justify-between px-4 py-4">
                <h1 className="w-[150px] h-[50px] text-[25px] border-[1px] border-blue-500 p-8 rounded-[20px] flex justify-center items-center">
                    Quizzely
                </h1>

                <div className="w-[700px] h-[50px] p-8 flex flex-row items-center justify-between">
                    <button className="w-[120px] h-[50px] text-[25px] border-[1px] border-pink-400 rounded-[15px]">Quizzes</button>
                    <button className="w-[120px] h-[50px] text-[25px] border-[1px] border-pink-400 rounded-[15px]">About</button>
                    <button className="w-[120px] h-[50px] text-[25px] border-[1px] border-pink-400 rounded-[15px]">Start</button>
                </div>
            </nav>

            <div className="">
                <h3>TEST YOUR KNOWLEDGE</h3>

                <h1>Challenge yourself with interactive quizzes</h1>         │
                │     <h1>and improve your knowledge every day.</h1>
            </div>

            <div className="">
                <h3>WHY QUIZZELY?</h3>

                {/* some cards about features */}
            </div>

            <div className="">
                <h3>POPULAR QUIZZES</h3>

                {/* some cards about features */}
            </div>

            <footer>
                {/* insta, github, linkedin, leetcode */}
            </footer>
        </>
    )
}

export default Home