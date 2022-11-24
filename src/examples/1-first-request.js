import { useEffect } from 'react'
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  const getData = async function () {
    try {
      const data = await axios(url)
      console.log(data)
    } catch (error) {
      console.log(error.response, error.statusText)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
