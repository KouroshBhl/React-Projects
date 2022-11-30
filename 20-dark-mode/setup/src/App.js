import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('style'))
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('style', theme)
  }, [theme])

  const toggleHandler = function () {
    if (theme === 'dark') setTheme('light')
    if (theme === 'light') setTheme('dark')
  }

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>oveeeacted</h1>
          <button className='btn' onClick={toggleHandler}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((article) => {
          console.log(article)
          return <Article key={article.id} {...article} />
        })}
      </section>
    </main>
  )
}

export default App
