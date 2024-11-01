import React, { useState } from 'react'
import Score from './Score'
import ProgressBar from './ProgressBar'
import Question from './Question'
import Button from './Button'

const Quizlayout = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0) // to keep track of the current question
    const [optionChosen, setOptionChosen] = useState('') // to keep track of the option chosen by the user
    const [score, setScore] = useState(0) // to keep track of the score
    const [showScore, setShowScore] = useState(false) // to keep track of whether to show the score or not

    const { question, options, answer } = questions[currentQuestion] // destructuring the question, options, and answer from the questions array

    const nextQuestion = () => {

        if (optionChosen === answer) {
            setScore(score + 1)
        }
        setOptionChosen('')
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }




    return (
        <div className='flex flex-col items-center justify-start gap-4 p-10 bg-white rounded-lg w-[650px]'>
            {showScore ? (
                <Score
                    questions={questions}
                    score={score}
                    setCurrentQuestion={setCurrentQuestion}
                    setScore={setScore}
                    setShowScore={setShowScore} />


            ) : (
                <div className='flex flex-col items-center justify-start gap-4 w-full'>
                    <ProgressBar
                        questions={questions}
                        currentQuestion={currentQuestion} />

                    <Question
                        question={question}
                        options={options}
                        optionChosen={optionChosen}
                        setOptionChosen={setOptionChosen} />

                    <Button
                        optionChosen={optionChosen}
                        nextQuestion={nextQuestion}
                        currentQuestion={currentQuestion}
                        questions={questions}
                    />

                    {/* <button
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
                    </button> */}
                </div>
            )
            }
        </div >

    )
}

export default Quizlayout