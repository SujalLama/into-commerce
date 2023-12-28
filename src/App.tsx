import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePage'
import SingleProduct from './pages/SingleProduct'
import CartPage from './pages/CartPage'
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  )
}

export default App
