import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const defaultState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const fetchData = async function (url) {
    try {
      dispatch({ type: 'LOADING' })
      const response = await fetch(url)
      const data = await response.json()
      if (!response.ok) throw new Error('Can not get data')
      dispatch({ type: 'FETCH_DATA', payload: data })
    } catch (error) {
      console.error(`Something went wrong 😒😒😒 ${error}`)
    }
  }

  useEffect(() => {
    dispatch({ type: 'UPDATE_TOTAL' })
  }, [state.cart])

  useEffect(() => {
    fetchData(url)
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
