import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
//
import './styles/tailwind.css';
//
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CheckoutSuccessPage from './pages/CheckoutSuccess';
import SingleProductPage from './pages/SingleProduct';
import Checkout from './pages/Checkout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* <ScrollRestoration /> */}
        <ScrollToTop />
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
