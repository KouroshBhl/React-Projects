import { Link, useParams } from 'react-router-dom'
import data from '../data'

const SingleProduct = () => {
  const { productID } = useParams()
  const product = data.find((el) => {
    return el.id === productID
  })
  const { name, image } = product
  return (
    <section className='section product'>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <Link to='/products'>Go to products</Link>
    </section>
  )
}

export default SingleProduct
