import React from 'react'

const Question = ({ question, optionChosen, setOptionChosen, options }) => {
    return (
        <>

            <h2 className='text-4xl font-semibold text-blue-950 pb-6'>
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
        </>
    )
}

export default Question