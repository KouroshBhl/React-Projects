import React from 'react'
import { useGlobalContext } from '../helper/context'
import New from './New'

const News = () => {
  const { news } = useGlobalContext()
  const data = news.data.hits
  return (
    <section className='stories'>
      {data.map((item) => {
        return <New key={item.created_at_i} {...item} />
      })}
    </section>
  )
}

export default News
