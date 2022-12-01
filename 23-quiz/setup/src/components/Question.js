import React from 'react'
import { useGlobalContext } from '../helper/context'

const Question = () => {
  const { results, questionPage, checkAnswerHandler, correctAnswers } =
    useGlobalContext()
  const page = results[questionPage]
  const { correct_answer, incorrect_answers, question } = page
  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  answers.splice(tempIndex, 0, correct_answer)
  return (
    <section className='quiz'>
      <p className='correct-answer'>
        Correct Answers: {correctAnswers} / {questionPage}
      </p>
      <article className='container'>
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className='btn-container'>
          {answers.map((ans, inx) => {
            return (
              <button
                key={inx}
                className='answer-btn'
                onClick={() => checkAnswerHandler(ans)}
                dangerouslySetInnerHTML={{ __html: ans }}
              />
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
