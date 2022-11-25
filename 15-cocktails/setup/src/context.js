import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import axios from 'axios'
import reducer from './config/reducer'
import { authFetch } from './config/customAxios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const initial = {
  loading: true,
  data: [],
  error: false,
  cocktail: [],
  search: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial)

  const onClickDetailHandler = function () {
    dispatch({ type: 'CLICK_DETAIL' })
  }

  const searchDataHandler = async function (id) {
    try {
      const response = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      dispatch({ type: 'SEARCH_COCKTAIL', payloads: response })
    } catch (error) {
      console.log(error)
    }
  }

  const searchFormHandler = function (input) {
    if (!input) return
    dispatch({ type: 'SEARCH_FORM', payloads: input })
  }

  const getData = async function () {
    try {
      const response = await axios({
        url,
        headers: { Accept: 'Application/json' },
      })
      const { data } = response
      dispatch({ type: 'GET_DATA', payloads: data })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        onClickDetailHandler,
        searchDataHandler,
        searchFormHandler,
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
