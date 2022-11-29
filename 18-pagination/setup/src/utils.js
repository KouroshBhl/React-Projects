import { RESULT_PER_PAGE } from './config'
import { useFetch } from './useFetch'
const paginate = (followers) => {
  const pages = followers.length / RESULT_PER_PAGE
  const data = Array.from({ length: pages }, (_, index) => {
    const start = index * RESULT_PER_PAGE
    return followers.slice(start, start + RESULT_PER_PAGE)
  })

  return data
}

export default paginate
