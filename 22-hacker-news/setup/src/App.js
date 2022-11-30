import React from 'react'
import { useGlobalContext } from './helper/context'
import SearchForm from './components/SearchForm'
import Pagination from './components/Pagination'
import News from './components/News'

function App() {
  const { loading } = useGlobalContext()
  return (
    <>
      <SearchForm />
      <Pagination />
      {loading ? <div className='loading'></div> : <News />}
    </>
  )
}

export default App
