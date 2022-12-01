import React from 'react'
import { useGlobalContext } from '../helper/context'

const New = ({
  title,
  points,
  url,
  num_comments: comments,
  author,
  objectID,
}) => {
  const { dispatch } = useGlobalContext()
  const removeBtnHandler = function (id) {
    dispatch({ type: 'REMOVE_NEW', payload: id })
  }

  return (
    <article className='story'>
      <h4 className='title'>{title}</h4>
      <p className='info'>
        {points} points by <span>{author}</span> {comments} comments
      </p>
      <div>
        <a
          href={url}
          className='read-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          read more
        </a>
        <button
          className='remove-btn'
          onClick={() => removeBtnHandler(objectID)}
        >
          remove
        </button>
      </div>
    </article>
  )
}

export default New
