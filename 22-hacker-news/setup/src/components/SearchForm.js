import React from 'react'
import * as config from '../helper/config'
import { useGlobalContext } from '../helper/context'

const SearchForm = () => {
  const { search, onSearchHandler } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type='text'
        className='form-input'
        onChange={onSearchHandler}
        placeholder={search}
      />
    </form>
  )
}

export default SearchForm
