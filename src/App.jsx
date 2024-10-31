import Header from "./components/Header"
import Quizlayout from "./components/Quizlayout"

function App() {

  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['New York', 'London', 'Paris', 'Dublin'],
      answer: 'Paris'
    },
    {
      id: 2,
      question: 'What is the capital of Ireland?',
      options: ['Mexico', 'Dubai', 'Lisbon', 'Dublin'],
      answer: 'Dublin'
    },
    {
      id: 3,
      question: 'What is the capital of England?',
      options: ['Miami', 'London', 'Paris', 'Helsinki'],
      answer: 'London'

    },
    {
      id: 4,
      question: 'What is the capital of USA?',
      options: ['New York', 'London', 'Paris', 'Washington'],
      answer: 'Washington'
    },
    {
      id: 5,
      question: 'What is the capital of Spain?',
      options: ['Berlin', 'Madrid', 'Sydney', 'Algiers'],
      answer: 'Madrid'
    }
  ]

  return (
    <div className=" flex flex-col items-center justify-start w-screen h-screen bg-blue-300">
      <Header />
      <Quizlayout questions={questions} />
    </div>
  )
}

export default App
