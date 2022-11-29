import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_TOKEN}`
//https://api.unsplash.com/photos/?client_id=FSls1ExG9-6bvvr6dAtcz80rZ6x3kG7f6kIhKhM7mvk

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  const fetchPhotos = async function () {
    try {
      const response = await fetch(`${mainUrl}${clientID}`)
      const data = await response.json()
      console.log(data)
      setPhotos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' placeholder='Search...' className='form-input' />
          <button className='submit-btn' type='submit'>
            <FaSearch />
          </button>
        </form>
      </section>

      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
