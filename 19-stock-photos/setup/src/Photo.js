import React from 'react'

const Photo = ({
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  urls: { small },
}) => {
  return (
    <article className='photo'>
      <img src={small} alt={name} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes} Likes</p>
        </div>

        <a href={portfolio_url}>
          <img src={medium} alt={name} />
        </a>
      </div>
    </article>
  )
}

export default Photo
