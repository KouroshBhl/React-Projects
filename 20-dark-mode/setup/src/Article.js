import React from 'react'
const Article = ({ title, date, length, snippet }) => {
  const options = {
    weekday: 'long',
    month: '2-digit',
    year: 'numeric',
    day: 'numeric',
    timeZoneName: 'long',
  }
  const formatDate = new Intl.DateTimeFormat('en-US', options).format(date)

  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{formatDate}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
