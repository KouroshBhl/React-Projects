import React from 'react'
import { useGlobalContext } from '../helper/context'

const Modal = () => {
  const { correctAnswers, questionsNum, playAgainHandler } = useGlobalContext()
  const calculatePercentage = Number.parseFloat(
    (correctAnswers / questionsNum) * 100
  ).toFixed(2)
  return (
    <div className='modal-container isOpen'>
      <div className='modal-content'>
        <h2>Congrats</h2>
        <p>You answered {calculatePercentage}% of questions correctly</p>
        <button className='close-btn' onClick={playAgainHandler}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Modal
