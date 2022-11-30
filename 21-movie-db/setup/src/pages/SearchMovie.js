import React, { useEffect } from 'react'
import { useGlobalContext } from '../helper/context'
import { DEFAULT_SEARCH } from '../helper/config'
import SearchForm from '../components/SearchForm'
import CoverMovie from '../components/CoverMovie'

const SearchMovie = () => {
  const { getData } = useGlobalContext()

  useEffect(() => {
    getData(`${`&s=${DEFAULT_SEARCH}`}`, 'FETCH_DATA')
  }, [])

  const { loading, movies } = useGlobalContext()
  return (
    <main>
      <SearchForm />
      <section className='movies'>
        {!loading &&
          movies.map((movie) => {
            return <CoverMovie key={movie.imdbID} {...movie} />
          })}
      </section>
    </main>
  )
}

export default SearchMovie
