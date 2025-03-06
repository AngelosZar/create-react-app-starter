import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import { CartProvider } from './contexts/CartContext';
//
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CheckoutSuccessPage from './pages/CheckoutSuccess';
import SingleProductPage from './pages/SingleProduct';
import Checkout from './pages/Checkout';
// import './App.css';
// import '../src/styles/tailwind.css';
import './styles/tailwind.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
