import React from 'react'

const Button = ({ optionChosen, nextQuestion, currentQuestion, questions }) => {
    return (
        <button
            className="bg-blue-950 text-white text-lg py-3 px-12 rounded-xl mt-4 hover:bg-blue-600 transition-all duration-300 ease-in-out disabled:opacity-30 "
            disabled={optionChosen === ''}
            onClick={() => nextQuestion()}
        >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
    )
}

export default Button