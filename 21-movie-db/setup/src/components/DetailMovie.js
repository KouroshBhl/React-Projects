import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../helper/context'

const DetailMovie = ({ Title, Year, Poster, Plot }) => {
  const { loading } = useGlobalContext()

  return (
    <>
      {loading ? (
        <div className='loading'></div>
      ) : (
        <section className='single-movie'>
          <img src={Poster} alt='' />
          <div className='single-movie-info'>
            <h2>{Title}</h2>
            <p>{Plot}</p>
            <h4>{Year}</h4>
            <Link to='/' className='btn'>
              Back to Movies
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

export default DetailMovie
