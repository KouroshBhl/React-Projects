import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section'>
      <h2>Error</h2>
      <h1>404</h1>
      <Link to='/' className='btn'>
        Go Home XD
      </Link>
    </section>
  )
}
export default Error
