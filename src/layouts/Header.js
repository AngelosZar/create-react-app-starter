import { Link } from 'react-router-dom';
import RainyDaysLogo from '../media/logos/RainyDays_Logo.png';
import CartIcon from '../components/CartIcon';
import { HamburgerMenu, DesktopMenu } from '../components/HamburgerMenu';

export default function Header() {
  return (
    <header className=" bg-gray-100 flex flex-col w-full max-w-1440px mx-auto px-4 ">
      <nav className="flex items-center justify-between px-4">
        <Link to="/" className="hover:text-blue-800 transition-colors">
          <img src={RainyDaysLogo} alt="Logo" className="w-28 h-22 py-2" />
        </Link>
        {/* mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <HamburgerMenu />
          <Link to="/cart" className="hover:text-blue-800">
            <CartIcon />
          </Link>
        </div>

        {/* tablet-desktop */}
        <div className="hidden items-center space-x-4 md:flex">
          <DesktopMenu />
          <Link to="/cart" className="hover:text-blue-800">
            <CartIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
