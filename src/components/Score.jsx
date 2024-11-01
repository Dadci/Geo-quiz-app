import React from 'react'

const Score = ({ questions, score, setCurrentQuestion, setScore, setShowScore }) => {
    return (
        < div className='flex flex-col items-center justify-start gap-4'>
            <h1 className='text-4xl font-semibold text-green-700 p-6'>
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
                Try Again!
            </button>
        </div>
    )
}

export default Score