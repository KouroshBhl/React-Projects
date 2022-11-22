import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}></Route>
        <Route path='about-us' element={<h1>About US</h1>}></Route>
        <Route path='contact-us' element={<h2>Contact US!</h2>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
