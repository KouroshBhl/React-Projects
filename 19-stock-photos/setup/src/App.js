import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_TOKEN}`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [newImages, setNewImages] = useState(false)
  const mounted = useRef(false)

  const fetchPhotos = async function () {
    setLoading(true)
    let url
    const perPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${perPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${perPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (page === 1 && !query) {
        setPhotos(data)
      } else if (query && page === 1) {
        setPhotos(data.results)
      } else if (!query && page > 1) {
        setPhotos((prevData) => [...prevData, ...data])
      } else if (query && page > 1) {
        setPhotos((prevData) => [...prevData, ...data.results])
      } else {
        setPhotos(data)
      }
      setNewImages(false)
      setLoading(false)
    } catch (error) {
      setNewImages(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPhotos()
    //eslint-disable-next-line
  }, [page])

  const formSubmitHandler = function (e) {
    e.preventDefault()
    if (!query) return
    if (page === 1) return fetchPhotos()
    setPage(1)
  }

  useEffect(() => {
    console.log(mounted.current)
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (!newImages) return
    if (loading) return

    setPage((prevPage) => prevPage + 1)

    //eslint-disable-next-line
  }, [newImages])

  const event = function () {
    if (
      this.window.innerHeight + this.window.scrollY >=
      this.document.body.scrollHeight - 2
    ) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)

    return () => window.removeEventListener('scroll', event)
    //eslint-disable-next-line
  }, [])

  return (
    <main>
      <section className='search'>
        <form className='search-form' onSubmit={formSubmitHandler}>
          <input
            type='text'
            placeholder='Search...'
            className='form-input'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            <FaSearch />
          </button>
        </form>
      </section>

      <section className='photos'>
        <div className='photos-center'>
          {!loading &&
            photos.map((photo) => {
              return <Photo key={photo.id} {...photo} />
            })}
        </div>
      </section>
    </main>
  )
}

export default App
