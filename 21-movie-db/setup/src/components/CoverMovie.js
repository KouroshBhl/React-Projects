import React from 'react'
import { Link } from 'react-router-dom'

const CoverMovie = ({ Poster, Title, Type, Year, imdbID }) => {
  return (
    <Link to={`/movie/${imdbID}`} className='movie'>
      <article>
        <img src={Poster} alt={Title} />
        <div className='movie-info'>
          <h4 className='title'>{Title}</h4>
          <p>{Year}</p>
        </div>
      </article>
    </Link>
  )
}

export default CoverMovie
