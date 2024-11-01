import React, { useState } from 'react'

const Quizlayout = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0) // to keep track of the current question
    const [optionChosen, setOptionChosen] = useState('') // to keep track of the option chosen by the user
    const [score, setScore] = useState(0) // to keep track of the score
    const [showScore, setShowScore] = useState(false) // to keep track of whether to show the score or not

    const { question, options, answer } = questions[currentQuestion] // destructuring the question, options, and answer from the questions array


    return (
        <div className='flex flex-col items-center justify-start gap-4 p-10 bg-white rounded-lg w-[650px]'>
            {showScore ? (
                < div className='flex flex-col items-center justify-start gap-4'>
                    <h1 className='text-3xl font-semibold text-green-700 p-6'>
                        🎉 You score is {score} out of {questions.length} 🎉
                    </h1>
                    <button
                        className='bg-blue-950 text-white text-lg py-3 px-12 rounded-lg mt-4 hover:bg-blue-600 transition-all duration-300 ease-in-out'
                        onClick={() => {
                            setCurrentQuestion(0)
                            setScore(0)
                            setShowScore(false)
                        }}
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-start gap-4 w-full'>
                    <div className='flex flex-row items-center gap-4 w-full py-6' >

                        <progress value={currentQuestion + 1} max={questions.length} className=' w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-blue-100 [&::-webkit-progress-value]:bg-blue-500 [&::-webkit-progress-value]:transition-all duration-300 ease-in-out '></progress>

                        <h1 className='text-base text-slate-600 font-medium'>
                            <span>
                                {currentQuestion + 1}
                            </span>
                            <span>
                                /{questions.length}
                            </span>
                        </h1>
                    </div>
                    <h2 className='text-3xl font-semibold text-blue-950 pb-6'>
                        {question}
                    </h2>
                    <div className='flex flex-col gap-4 w-full'>
                        {options.map((option, index) => (
                            <button
                                key={index}
                                className={`text-blue-950 border-2 border-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 text-lg p-3 rounded-lg transition-all duration-300 ease-in-out ${optionChosen === option ? 'bg-blue-500 text-white border-blue-500' : ''}`}
                                onClick={() => {
                                    setOptionChosen(option)
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        className="bg-blue-950 text-white text-lg py-3 px-12 rounded-2xl mt-4 hover:bg-blue-600 transition-all duration-300 ease-in-out disabled:opacity-50 "
                        disabled={optionChosen === ''}
                        onClick={() => {
                            if (optionChosen === answer) {
                                setScore(score + 1)
                            }
                            setOptionChosen('')
                            if (currentQuestion < questions.length - 1) {
                                setCurrentQuestion(currentQuestion + 1)
                            } else {
                                setShowScore(true)
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            )
            }
        </div >

    )
}

export default Quizlayout