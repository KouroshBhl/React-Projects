import React, { useContext, useReducer } from 'react'
import { reducer, initalState } from './reducer'
import { OMDBAPI_URL } from './config'
import axios from 'axios'
const ContextAPI = React.createContext()

const AppProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState)

  const getData = async function (query, type) {
    dispatch({ type: 'LOADING' })
    try {
      const response = await axios(
        `${OMDBAPI_URL}${process.env.REACT_APP_API_KEY}${query}${`&page=1`}`
      )
      dispatch({ type, payload: response })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContextAPI.Provider value={{ dispatch, ...state, getData }}>
      {children}
    </ContextAPI.Provider>
  )
}

const useGlobalContext = function () {
  return useContext(ContextAPI)
}

export { useGlobalContext, AppProvider }
