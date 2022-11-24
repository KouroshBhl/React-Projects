import axios from 'axios'
import { useEffect } from 'react'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp = await axios(productsUrl)
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
    console.log('global axios instance')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
