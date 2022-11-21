import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const createContextAPI = createContext()

const ContextProvider = function ({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [subMenuData, setSubmenuData] = useState({ page: '', links: [] })

  const openSubmenu = function (text, coordinates) {
    setLocation(coordinates)
    setIsSubmenuOpen(true)

    const subMenuIndex = sublinks.findIndex((link) => link.page === text)

    const { page, links } = sublinks[subMenuIndex]

    setSubmenuData({ page, links })
  }
  return (
    <createContextAPI.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        openSubmenu,
        isSubmenuOpen,
        location,
        subMenuData,
      }}
    >
      {children}
    </createContextAPI.Provider>
  )
}

const useContextAPI = function () {
  return useContext(createContextAPI)
}

export { ContextProvider, useContextAPI }
