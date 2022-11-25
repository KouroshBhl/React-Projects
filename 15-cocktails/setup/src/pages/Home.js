import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'

const Home = () => {
  const { loading } = useGlobalContext()

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <SearchForm />
          <CocktailList />
        </main>
      )}
    </>
  )
}

export default Home
