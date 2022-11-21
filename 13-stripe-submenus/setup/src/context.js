import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const createContextAPI = createContext()

const ContextProvider = function ({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <createContextAPI.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </createContextAPI.Provider>
  )
}

const useContextAPI = function () {
  return useContext(createContextAPI)
}

export { ContextProvider, useContextAPI }
