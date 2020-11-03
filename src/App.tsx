import React, { useState } from 'react';
import QuesionCard from './components/QuestionCard'
import { fetchQuizQuestions, Difficulty, QuestionState } from './API'
import {GlobalStyle,Wrapper} from './App.style'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log("questions", questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value)
    const answer = e.currentTarget.value
    const correct = questions[number].correct_answer === answer
    if(correct) setScore(prev => prev + 1)
    const AnswerObject = {
      question:questions[number].question,
      answer,
      correct,
      correctAnswer:questions[number].correct_answer
    }
    setUserAnswers(prev=>[...prev,AnswerObject ])

  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (<button className="start" onClick={startTrivia}>START</button>)
        : null}
      {  console.log("questions answer", questions[number])}
  {!gameOver ? (<p className="score">Score:{score}</p>) : null}
      {loading ? (<p>Lading Questions</p>) : null}
      {!loading && !gameOver && (
        <QuesionCard
          question={questions[number].question}
          answers={questions[number].answers ? questions[number].answers : []}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS} />
      )}
  {
    !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS-1 &&(
       <button className="next" onClick={nextQuestion}>NEXT</button>

    )
  }
         </Wrapper>
         </>
  );
}

export default App;


