import React from 'react'
import { useGlobalContext } from '../helper/context'

const SetupForm = () => {
  const {
    categories,
    onQuestionNumberHandler,
    questionsNum,
    onCategoryHandler,
    onDifficultyHandler,
    formSubmitHandler,
  } = useGlobalContext()
  return (
    <section className='quiz quiz-small'>
      <form className='setup-form' onSubmit={(e) => e.preventDefault()}>
        <h2>Setup quiz</h2>
        <div className='form-control'>
          <label htmlFor='amount'></label>
          <input
            type='number'
            className='form-input'
            id='amount'
            min='1'
            max='50'
            value={questionsNum}
            onChange={onQuestionNumberHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='category'></label>
          <select
            name='category'
            id='category'
            className='form-input'
            onChange={onCategoryHandler}
          >
            {categories.map((cat) => {
              return (
                <option value={cat.name} key={cat.id}>
                  {cat.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='difficulty'></label>
          <select
            type='number'
            className='form-input'
            id='difficulty'
            onChange={onDifficultyHandler}
          >
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
        <button
          className='submit-btn'
          type='submit'
          onClick={formSubmitHandler}
        >
          Start
        </button>
      </form>
    </section>
  )
}

export default SetupForm
