
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
// import { useCartContext } from './context/cartContext/CartContext';
import Header from './components/header/header'
function App() {
 
  return (
    <>
      
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
