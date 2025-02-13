import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex bg-gray-100">
      <nav className="flex items-center justify-between w-full max-w-4xl p-4">
        <span>Logo placeholder</span>
        <ul className="flex space-x-4">
          <Link to="/" className="hover:text-blue-800 transition-colors">
            Home
          </Link>
          <Link to="" className="hover:text-blue-800">
            Individual product page
          </Link>
          <Link to="" className="hover:text-blue-800">
            Checkout success page
          </Link>
          <Link to="" className="hover:text-blue-800">
            Cart page
          </Link>
          <Link to="/contact" className="hover:text-blue-800 transition-colors">
            Contact page Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
