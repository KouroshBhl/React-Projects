import React, { useEffect } from 'react'
import { useGlobalContext } from '../helper/context'
import { useParams } from 'react-router'
import DetailMovie from '../components/DetailMovie'

const SingleMovie = () => {
  const { getData, movies, loading } = useGlobalContext()
  const { movieID } = useParams()

  useEffect(() => {
    getData(`&i=${movieID}`, 'SEARCH_ID')
  }, [])
  return (
    <>
      {loading ? <div className='loading'></div> : <DetailMovie {...movies} />}
    </>
  )
}

export default SingleMovie
