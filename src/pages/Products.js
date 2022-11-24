import productsData from '../data'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section className='section'>
      <h2>products</h2>
      <div className='products'>
        {productsData.map((data) => {
          const { id, name } = data
          return (
            <article key={id}>
              <h4>{name}</h4>
              <Link to={`/products/${id}`}>more info</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Products
