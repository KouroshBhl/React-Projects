import React from 'react'
import { useGlobalContext } from '../helper/context'

const Question = () => {
  const {
    results,
    questionPage,
    questionsNum,
    checkAnswerHandler,
    correctAnswers,
  } = useGlobalContext()
  const page = results[questionPage]
  const { correct_answer, incorrect_answers, question } = page
  const answers = [...incorrect_answers, correct_answer]
  return (
    <section className='quiz'>
      <p className='correct-answer'>
        Correct Answers: {correctAnswers} / {questionPage}
      </p>
      <article className='container'>
        <h2>{question}</h2>
        <div className='btn-container'>
          {answers.map((ans, inx) => {
            return (
              <button
                key={inx}
                className='answer-btn'
                onClick={() => checkAnswerHandler(ans)}
              >
                {ans}
              </button>
            )
          })}
        </div>
      </article>
      <button className='next-question' onClick={checkAnswerHandler}>
        Skip question
      </button>
    </section>
  )
}

export default Question
