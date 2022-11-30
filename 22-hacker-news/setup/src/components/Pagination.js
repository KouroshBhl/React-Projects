import React, { useState } from 'react'
import { useGlobalContext } from '../helper/context'
import * as config from '../helper/config'

const Pagination = () => {
  const { page, totalPages, results, getNews, search } = useGlobalContext()
  const [pageNum, setPageNum] = useState(page)
  console.log(pageNum, totalPages)
  const nextPageHandler = function () {
    if (pageNum < totalPages) setPageNum((prevBtn) => prevBtn + 1)
    if (pageNum === totalPages) setPageNum(0)
    getDataForPage()
  }
  const prevPageHandler = function () {
    if (pageNum < 1) setPageNum(totalPages)
    if (pageNum >= 1) setPageNum((prevBtn) => prevBtn - 1)
    getDataForPage()
  }

  const getDataForPage = function () {
    getNews(`${config.API_URL}${config.SEARCH_URL}${search}&page=${pageNum}`)
  }
  return (
    <div className='btn-container'>
      <span>{results} Results</span>
      <button onClick={prevPageHandler}>prev</button>
      <p>
        {pageNum} of {totalPages}
      </p>
      <button onClick={nextPageHandler}>next</button>
    </div>
  )
}

export default Pagination
