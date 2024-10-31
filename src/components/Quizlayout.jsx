import React, { useState } from 'react'

const Quizlayout = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const { question, options, answer } = questions[currentQuestion]


    return (
        <div className='flex flex-col items-center justify-start gap-4 p-8 bg-white rounded-lg w-[650px]'>
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
                <div className='flex flex-col items-center justify-start gap-4'>
                    <h1 className='text-base text-slate-500 font-medium'>
                        <span className=' text-2xl text-blue-700 '>
                            {currentQuestion + 1}
                        </span>
                        <span>
                            /{questions.length}
                        </span>
                    </h1>
                    <h2 className='text-2xl font-semibold text-blue-950 pb-6'>
                        {question}
                    </h2>
                    <div className='flex flex-col gap-4 w-full'>
                        {options.map((option, index) => (
                            <button
                                key={index}
                                className={`text-blue-950 border-2 border-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 text-lg p-2 rounded-lg transition-all duration-300 ease-in-out ${optionChosen === option ? 'bg-blue-500 text-white border-blue-500' : ''}`}
                                onClick={() => {
                                    setOptionChosen(option)
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        className="bg-blue-950 text-white text-lg py-3 px-12 rounded-lg mt-4 hover:bg-blue-600 transition-all duration-300 ease-in-out disabled:opacity-50 "
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