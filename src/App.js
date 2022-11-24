import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='products/:productID' element={<SingleProduct />}></Route>

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
