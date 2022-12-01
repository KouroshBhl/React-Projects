import React, { useState } from 'react'
import { useGlobalContext } from '../helper/context'
import * as config from '../helper/config'

const Pagination = () => {
  const { page, totalPages, results, getNews, search, loading } =
    useGlobalContext()
  const [pageNum, setPageNum] = useState(page)
  const nextPageHandler = function () {
    if (pageNum < totalPages) setPageNum((prevBtn) => prevBtn + 1)
    if (pageNum === totalPages - 1) setPageNum(0)
    getDataForPage()
  }
  const prevPageHandler = function () {
    if (pageNum <= 1) setPageNum(totalPages - 1)
    if (pageNum >= 1) setPageNum((prevBtn) => prevBtn - 1)
    getDataForPage()
  }

  const getDataForPage = function () {
    getNews(`${config.API_URL}${config.SEARCH_URL}${search}&page=${pageNum}`)
  }
  return (
    <div className='btn-container'>
      <span>{results} Results</span>
      <button disabled={loading} onClick={prevPageHandler}>
        prev
      </button>
      <p>
        {pageNum + 1} of {totalPages}
      </p>
      <button disabled={loading} onClick={nextPageHandler}>
        next
      </button>
    </div>
  )
}

export default Pagination
