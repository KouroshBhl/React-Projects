import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [value, setValue] = useState('')
  console.log(value)

  return (
    <main>
      <section className='markdown'>
        <textarea
          name=''
          className='input'
          cols='30'
          rows='10'
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{value}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
