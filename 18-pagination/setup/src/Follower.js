import React from 'react'

const Follower = ({ login, id, avatar_url: url, html_url: github }) => {
  return (
    <article key={id} className='card'>
      <img src={url} alt='profile' />
      <h4>{login}</h4>
      <a href={github} className='btn'>
        View Profile
      </a>
    </article>
  )
}

export default Follower
