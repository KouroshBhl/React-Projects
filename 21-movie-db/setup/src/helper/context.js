import React, { useContext, useReducer, useEffect } from 'react'
import { reducer, initalState } from './reducer'
import { OMDBAPI_URL } from './config'
import axios from 'axios'
const ContextAPI = React.createContext()

const AppProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState)

  const getData = async function (query, type) {
    state.loading = true
    try {
      const response = await axios(
        `${OMDBAPI_URL}${process.env.REACT_APP_API_KEY}${query}`
      )
      console.log(response)
      dispatch({ type, payload: response })
      state.loading = false
    } catch (error) {
      state.loading = true

      console.log(error)
    }
  }

  // useEffect(() => {
  //   getData(`${`&s=john`}`, 'FETCH_DATA')
  // }, [])

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
