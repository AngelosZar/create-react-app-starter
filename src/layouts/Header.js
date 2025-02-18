import { Link } from 'react-router-dom';
import RainyDaysLogo from '../media/logos/RainyDays_Logo.png';
import CartIcon from '../components/CartIcon';

export default function Header() {
  return (
    <header className=" bg-gray-100 flex flex-col w-full max-w-1440px mx-auto px-4 ">
      <nav className="flex items-center justify-between px-4">
        <Link to="/" className="hover:text-blue-800 transition-colors">
          <img src={RainyDaysLogo} alt="Logo" className="w-28 h-22 py-2" />
        </Link>
        <ul className="flex space-x-4 justify-center items-center">
          {/* <Link to="/product/1" className="hover:text-blue-800">
            Individual product page
          </Link> */}
          <Link to="/checkout-success" className="hover:text-blue-800">
            Checkout success page
          </Link>
          <Link to="/contact" className="hover:text-blue-800 transition-colors">
            Contact page Contact
          </Link>
          <Link to="/cart" className="hover:text-blue-800">
            <CartIcon />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
