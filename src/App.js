import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [user, setUser] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='products/:productID' element={<SingleProduct />}></Route>
          <Route path='login' element={<Login setUser={setUser} />}></Route>
          <Route path='dashboard' element={<Dashboard user={user} />}></Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
