import React, { useEffect } from 'react'
import { useGlobalContext } from '../helper/context'
import { DEFAULT_SEARCH } from '../helper/config'
import SearchForm from '../components/SearchForm'
import CoverMovie from '../components/CoverMovie'

const SearchMovie = () => {
  const { getData } = useGlobalContext()
  const { loading, movies, found } = useGlobalContext()

  useEffect(() => {
    getData(`${`&s=${DEFAULT_SEARCH}`}`, 'FETCH_DATA')
  }, [])
  return (
    <main>
      <SearchForm />
      {!found && (
        <h2 className='text-center'>
          No movies found, Please try another keyword!
        </h2>
      )}
      {loading && <div className='loading'></div>}
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
