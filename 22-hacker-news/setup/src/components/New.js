import React from 'react'

const New = ({ title, points, url, num_comments: comments, author }) => {
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
        <button className='remove-btn'>remove</button>
      </div>
    </article>
  )
}

export default New
