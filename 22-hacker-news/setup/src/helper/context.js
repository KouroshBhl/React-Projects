import React, { useReducer, useContext, useEffect } from 'react'
import axios from 'axios'
import { initalState, reducer } from './reducer'
import { API_URL, SEARCH_URL } from './config'

const contextAPI = React.createContext()

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const getNews = async function (url) {
    dispatch({ type: 'LOADING' })
    try {
      const response = await axios(url)
      dispatch({ type: 'GET_NEWS', payload: response })
    } catch (error) {
      console.log(error)
    }
  }

  const onSearchHandler = function (e) {
    const value = e.target.value
    dispatch({ type: 'SEARCH_QUERY' })
    getNews(`${API_URL}${SEARCH_URL}${value}`)
  }

  useEffect(() => {
    getNews(`${API_URL}${SEARCH_URL}${state.search}&page=${state.page}`)
  }, [])

  return (
    <contextAPI.Provider
      value={{ ...state, getNews, dispatch, onSearchHandler }}
    >
      {children}
    </contextAPI.Provider>
  )
}

const useGlobalContext = function () {
  return useContext(contextAPI)
}

export { ContextProvider, useGlobalContext }
