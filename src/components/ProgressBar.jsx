import React from 'react'

const ProgressBar = ({ questions, currentQuestion }) => {
    return (
        <div className='flex flex-row items-center gap-4 w-full py-6' >

            <progress value={currentQuestion + 1} max={questions.length} className='h-3 w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-blue-100 [&::-webkit-progress-value]:bg-blue-500 [&::-webkit-progress-value]:transition-all duration-300 ease-in-out '></progress>

            <h1 className='text-sm text-slate-500 font-semibold'>
                <span>
                    {currentQuestion + 1}
                </span>
                <span>
                    /{questions.length}
                </span>
            </h1>
        </div>
    )
}

export default ProgressBar