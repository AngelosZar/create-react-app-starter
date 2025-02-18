import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CheckoutSuccessPage from './pages/CheckoutSuccess';
import SingleProductPage from './pages/SingleProduct';
// import './App.css';
// import '../src/styles/tailwind.css';
import './styles/tailwind.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
