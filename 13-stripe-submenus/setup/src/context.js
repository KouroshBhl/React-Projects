import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const createContextAPI = createContext()

const ContextProvider = function ({ children }) {
  return (
    <createContextAPI.Provider value='Hi'>{children}</createContextAPI.Provider>
  )
}

const useContextAPI = function () {
  return useContext(createContextAPI)
}

export { ContextProvider, useContextAPI }
