import React, { useEffect } from 'react'
import { useGlobalContext } from '../helper/context'
import { useParams } from 'react-router'
import DetailMovie from '../components/DetailMovie'

const SingleMovie = () => {
  const { getData, movie, loading } = useGlobalContext()
  const { movieID } = useParams()

  useEffect(() => {
    getData(`&i=${movieID}`, 'SEARCH_ID')
    //eslint-disable-next-line
  }, [])
  return (
    <>
      {loading ? <div className='loading'></div> : <DetailMovie {...movie} />}
    </>
  )
}

export default SingleMovie
