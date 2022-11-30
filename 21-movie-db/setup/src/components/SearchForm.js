import React from 'react'
import { useGlobalContext } from '../helper/context'
import { DEFAULT_SEARCH } from '../helper/config'

const SearchForm = () => {
  const { getData } = useGlobalContext()
  const onChangeHandler = function (e) {
    const value = e.target.value
    if (!value) return getData(`&s=${DEFAULT_SEARCH}`, 'FETCH_DATA')
    if (value.length < 4) return
    getData(`&s=${value}`, 'FETCH_DATA')
  }

  return (
    <form className='search-form'>
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        onChange={onChangeHandler}
        placeholder={DEFAULT_SEARCH}
      />
    </form>
  )
}

export default SearchForm
