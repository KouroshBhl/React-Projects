import axios from 'axios'

export const authFetch = axios.create({
  baseURL: 'https://www.thecocktaildb.com/',
  headers: {
    Accept: 'Application/json',
  },
})
