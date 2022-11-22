import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const fetchData = async function (url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) throw new Error('Can not get data')
    return data
  } catch (error) {
    console.error(`Something went wrong 😒😒😒 ${error}`)
  }
}

const defaultState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  console.log(state)

  useEffect(() => {
    // const data = fetchData(url)
    // dispatch({ type: 'FETCH_DATA', payload: data })
  }, [url])

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
