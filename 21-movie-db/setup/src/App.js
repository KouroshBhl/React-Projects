import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useGlobalContext } from './helper/context'
import SearchMovie from './pages/SearchMovie'
import SingleMovie from './pages/SingleMovie'

import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchMovie />}></Route>
        <Route path='movie/:movieID' element={<SingleMovie />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
