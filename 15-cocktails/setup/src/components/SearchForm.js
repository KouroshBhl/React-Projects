import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { searchFormHandler } = useGlobalContext()
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='text'>Search your Favourite Cocktail</label>
          <input
            type='text'
            name='name'
            id='text'
            onChange={(e) => searchFormHandler(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
