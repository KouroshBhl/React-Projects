import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [button, setButton] = useState(0)
  const [page, setPage] = useState([])

  useEffect(() => {
    if (loading) return
    setPage(data[button])
  }, [loading, button])

  const goToPageHandler = function (index) {
    setButton(index)
  }

  if (loading) {
    return (
      <div className='section-title'>
        <h1>Loading...</h1>
        <div className='underline'></div>
      </div>
    )
  }

  if (!loading) {
    return (
      <main>
        <div className='section-title'>
          <h1>Pagination</h1>
          <div className='underline'></div>
        </div>

        <section className='followers'>
          <div className='container'>
            {page.map((item) => (
              <Follower key={item.id} {...item} />
            ))}
          </div>

          <div className='btn-container'>
            <button className='prev-btn'>prev</button>
            {data.map((_, index) => {
              return (
                <button
                  className={`page-btn ${index === button && 'active-btn'}`}
                  key={index}
                  onClick={() => goToPageHandler(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn'>next</button>
          </div>
        </section>
      </main>
    )
  }
}

export default App
