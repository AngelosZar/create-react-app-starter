import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../media/icons/cart.svg';

export default function Header() {
  return (
    <header className=" bg-gray-100 flex flex-col min-h-screen w-full max-w-1440px mx-auto px-4">
      <nav className="flex items-center justify-between h-16 px-4">
        <Link to="/" className="hover:text-blue-800 transition-colors">
          <img
            src="https://images.pexels.com/photos/584177/pexels-photo-584177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="logo"
            className="w-14 h-14"
          />
        </Link>
        <ul className="flex space-x-4 justify-center items-center">
          <Link to="/product/1" className="hover:text-blue-800">
            Individual product page
          </Link>
          <Link to="/checkout-success" className="hover:text-blue-800">
            Checkout success page
          </Link>
          <Link to="/contact" className="hover:text-blue-800 transition-colors">
            Contact page Contact
          </Link>
          <Link to="/cart" className="hover:text-blue-800">
            <CartIcon className="w-12 h-12" />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
