import axios from 'axios'

const getData = async function (url) {
  try {
    const response = await axios(url)
    return response
  } catch (error) {
    console.log(error)
  }
}
export default getData
