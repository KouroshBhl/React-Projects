import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [value, setValue] = useState('# Markdown Preview =))')

  return (
    <main>
      <section className='markdown'>
        <textarea
          name=''
          className='input'
          cols='30'
          rows='10'
          value={value}
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
