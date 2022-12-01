import React, { useContext, useReducer, useEffect, useCallback } from 'react'
import { reducer, initalState } from './reducer'
import axios from 'axios'

const Context = React.createContext()
const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`
const categoryUrl = `https://opentdb.com/api_category.php`

const AppProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState)

  const getQuestions = async function (url, type) {
    try {
      const response = await axios(url)
      console.log(response)

      if (response.data.response_code === 1 && type !== 'GET_CATEGORIES')
        return dispatch({ type: 'ERROR' })

      dispatch({ type, payload: response })
    } catch (error) {
      console.log(error)
    }
  }

  const onQuestionNumberHandler = function (e) {
    dispatch({ type: 'SELECT_QUESTION_NUMBER', payload: e.target.value })
  }
  const onCategoryHandler = function (e) {
    const findID = state.categories.find((cat) => cat.name === e.target.value)
    dispatch({ type: 'SELECT_CATEGORY', payload: findID.id })
  }
  const onDifficultyHandler = function (e) {
    dispatch({ type: 'SELECT_DIFFICULTY', payload: e.target.value })
  }
  const formSubmitHandler = function () {
    getQuestions(
      `https://opentdb.com/api.php?amount=${state.questionsNum}&category=${state.category}&difficulty=${state.difficulty}&type=multiple`,
      'GET_QUESTIONS'
    )
  }

  const checkAnswerHandler = function (value) {
    dispatch({ type: 'CHECK_ANSWER', payload: value })
  }

  const playAgainHandler = function () {
    dispatch({ type: 'PLAY_AGAIN' })
  }

  useEffect(() => {
    getQuestions(categoryUrl, 'GET_CATEGORIES')
    // getQuestions(url, 'GET_QUESTIONS')
  }, [])

  return (
    <Context.Provider
      value={{
        ...state,
        onQuestionNumberHandler,
        onCategoryHandler,
        onDifficultyHandler,
        formSubmitHandler,
        checkAnswerHandler,
        playAgainHandler,
      }}
    >
      {children}
    </Context.Provider>
  )
}

const useGlobalContext = function () {
  return useContext(Context)
}

export { AppProvider, useGlobalContext }
