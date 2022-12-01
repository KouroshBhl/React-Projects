import React from 'react'
import { useGlobalContext } from '../helper/context'
import New from './New'

const News = () => {
  const { news } = useGlobalContext()
  return (
    <section className='stories'>
      {news.map((item) => {
        return <New key={item.created_at_i} {...item} />
      })}
    </section>
  )
}

export default News
