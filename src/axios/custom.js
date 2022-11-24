import axios from 'axios'

export const authFetch = axios.create({
  baseURL: 'https://randomuser.me/',
  headers: {
    Accept: 'Application/json',
  },
})
